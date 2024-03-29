import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useEffect, useState } from "react";
import Message from "../components/Message";

const ChatPage = ({ room, setRoom }) => {
  // mesajları ekrana bas
  const [messages, setMessages] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();

    // console.log(e.target[0].value);

    //koleksiyonun referansını alma
    const messagesCol = collection(db, "messages");
    //kolleksiyona yeni dokuman ekle
    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
    e.target.reset();
  };
  // console.log(auth);

  //mevcut odada gönderilen mesajları anlık olarak alır
  useEffect(() => {
    const messagesCol = collection(db, "messages");

    // sorgu ayarlarını oluştur
    const q = query(
      messagesCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );
    // mesajlar kolleksiyonundaki erileri al
    // anlık olarak bir koleksiyondaki değişimleri izler
    // kolaksiyonda her değiştiğinde verdiğimiz fonksiyon ile kolleksiyondaki bğtğn dökümanları erişiriz
    onSnapshot(q, (snapshot) => {
      //! console.log("veriler alındı", snapshot?.docs[0].data());
      //verilerin geçici olarak tutuulacağı boş dizi oluştur
      const tempMsg = [];

      // dökumanları  dön, verilerine eriş
      snapshot.docs.forEach((doc) => {
        // console.log(doc.data());
        tempMsg.push(doc.data());
      });
      // console.log(tempMsg);
      setMessages(tempMsg);
    });
  }, []);

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Farklı Oda</button>
      </header>
      <main>
        {messages.map((data, i) => (
          <Message data={data} key={i} />
        ))}
      </main>
      <form onSubmit={sendMessage}>
        <input type="text" required placeholder="mesaınızı yazınız" />
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default ChatPage;

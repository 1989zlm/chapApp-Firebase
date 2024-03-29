import { auth } from "../firebase/config";

const Message = ({ data }) => {
  //oturumu açık oaln kullanıcının id'si
  //mesajı atan kullanıcının id'sine eşitse >sadece mesaj içeriğini bas
  if (auth.currentUser?.uid === data.author.id) {
    return <p className="msg-user">{data.text}</p>;
  }

  //eşit değilse> kullnıcı bil.+ mesaj içeriğini bas

  return (
    <div className="msg-other">
      <div className="user-info">
        <img src={data.author.photo} />
        <span>{data.author.name}</span>
      </div>
      <p>{data.text}</p>
    </div>
  );
};

export default Message;

import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  //kullanıcının seçtiği oda
  const [room, setRoom] = useState(null);

  //sohbet seçme sayfası için kullanıcının yetkisi varmı //?usestatein içini doldurunca sayfasyı yenileyince giriş yapfasına geçmiyor artık çünkü tokeni local storaga kaydettik.. artık bizi tanısın diye usestatede de yazdık.
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  //! eğerki kullanıcı sayfasına giriş yapmamışsa auuthpage sayfasını ekrana bas, giriş yapmışssa o zaman sohbet seçme sayfasını  ekrana bas.
  //yetkisi yoksa giriş sayfası
  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }
  // yetkisi varsa oda seöme sayfası
  return (
    <div className="container">
      {/* eğerki kuullanıcı sayfa seçmemişse roompage seçmişse chatpagei ekrana bas */}
      {!room ? (
        //roompagede bu propları kaşrılıyoruz.
        <RoomPage setRoom={setRoom} setIsAuth={setIsAuth} />
      ) : (
        <ChatPage room={room} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;

//!yeni projeye başlandı eski bilgiler kaldırıldı

// import "./App.css";
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "./firebase/config";
// import { useState } from "react";

// function App() {
//   const [user, setUser] = useState();

//   const handleLogin = () => {
//     signInWithPopup(auth, provider)
//       .then((res) => {
//         setUser(res.user);
//       })
//       .catch((err) => console.log(err));
//   };
//   console.log(auth);
//   return (
//     <>
//       <h2>
//         {user ? (
//           <div>
//             <img src={user.photoUrl} width={100} />
//             <h2>{user.displayName}</h2>
//           </div>
//         ) : (
//           <button onClick={handleLogin}>google ile giriş</button>
//         )}
//       </h2>
//     </>
//   );
// }

// export default App;

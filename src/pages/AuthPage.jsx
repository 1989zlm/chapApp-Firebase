import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

const AuthPage = ({ setIsAuth }) => {
  //giriş butonuna basılınca
  const handleClick = () => {
    signInWithPopup(auth, provider)
      //başarıyla giriş yaparsa
      .then((data) => {
        console.log(data.user);

        // kullanıcının yetkisini true ya çek
        setIsAuth(true);

        //sayfaya girdik sohbet ettik çıkınca state'te tuttuğumuz için verileri herşey kaybolur. o yuzden localstorage kaydetmeliyiz.
        localStorage.setItem("token", data.user.refreshToken);
      });
  };
  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Odası</h1>
        <p>Devam etmek için giriş yapın</p>
        <button onClick={handleClick}>
          <img src="/g-logo.png" />
          <span>Google ile gir</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;

//!token kullanıcının hesap bilgilerini kaydemeyeceğimiz için oluşturulmuş bir şifrelenmiş yazıdır.

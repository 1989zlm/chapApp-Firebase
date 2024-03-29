const RoomPage = ({ setRoom, setIsAuth }) => {
  //form gönderilince tetiklenecek
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki değeri al
    const room = e.target[0].value;
    // console.log(room);

    // kuullanıcının seçtiği odayı state' e aktar
    setRoom(room.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1> Chat Odası</h1>
      <p>Hangi Odaya Gireceksiniz</p>
      <input type="text" placeholder="ör:haftaiçi" />

      <button type="submit">Odaya Gir</button>
      <button
        onClick={() => {
          // yetki statenini false çekerek oda logine yönlendir
          setIsAuth(false);
          //localdeki kaydı kaldır
          localStorage.removeItem("token");
        }}
        type="button"
      >
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;

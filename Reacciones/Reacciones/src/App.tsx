import React, { useState, useEffect } from "react";

function App() {
  // Estado para comentarios (array de strings)
  const [comentarios, setComentarios] = useState<string[]>(() => {
    const guardados = localStorage.getItem("comentarios");
    return guardados ? JSON.parse(guardados) : [];
  });
  const [input, setInput] = useState<string>("");


  // Estado para likes (número)
  const [likes, setLikes] = useState<number>(() => {
    const guardados = localStorage.getItem("likes");
    return guardados ? parseInt(guardados, 10) : 0;
  });

  // Estado para risas (número)
  const [risas, setRisa] = useState<number>(() => {
    const guardados = localStorage.getItem("risas");
    return guardados ? parseInt(guardados, 10) : 0;
  });

  // Estado para sorpresa (número)
  const [sorpresas, setSorpresas] = useState<number>(() => {
    const guardados = localStorage.getItem("sorpresa");
    return guardados ? parseInt(guardados, 10) : 0;
  });


  // Guardar comentarios en localStorage
  useEffect(() => {
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
  }, [comentarios]);


  // Guardar likes en localStorage
  useEffect(() => {
    localStorage.setItem("likes", likes.toString());
  }, [likes]);

  // Guardar risas en localStorage
  useEffect(() => {
    localStorage.setItem("risas", risas.toString());
  }, [risas]);

  // Guardar sorpresas en localStorage
  useEffect(() => {
    localStorage.setItem("sorpresa", sorpresas.toString());
  }, [sorpresas]);


  // Manejar envío de comentario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const texto = input.trim();
    if (texto) {
      setComentarios([...comentarios, texto]);
      setInput("");
    }
  };


  // Estado para animación
  const [animarLike, setAnimarLike] = useState(false);
  const [animarRisa, setAnimarRisa] = useState(false);
  const [animarSorpresa, setAnimarSorpresa] = useState(false);


  // Manejar like
  const handleLike = () => {
  setLikes(likes + 1);
  setAnimarLike(false); // Reinicia la animación
  setTimeout(() => setAnimarLike(true), 10); // Vuelve a activarla tras un pequeño delay
  };

  const handleRisa = () => {
    setRisa(risas + 1);
    setAnimarRisa(false);
    setTimeout(() => setAnimarRisa(true), 10);
  };

  const handleSorpresa = () => {
    setSorpresas(sorpresas + 1);
    setAnimarSorpresa(false);
    setTimeout(() => setAnimarSorpresa(true), 10);
  };


  return (
  <div className="app">
      <header>
        Reactbook
      </header>
    <div className="container">

      <div className="perfil-usuario">
        <img src="public/ft-perritos.jpg" alt="Foto de perfil" />
        <span>@PatitasTraviesas</span>
      </div>
      <img src="public/perritos.png" alt="Publicación" />

      <div className="reactions-row">
        <div className="reaction" onClick={handleLike} role="img">
          <span className={`like${animarLike ? " animar-like" : ""}`}>❤️ </span>
          <span className="cont">{likes}</span>
        </div>

        <div className="reaction" onClick={handleRisa} role="img">
          <span className={`risa${animarRisa ? " animar-risa" : ""}`}>😂 </span>
          <span className="cont">{risas}</span>
        </div>

        <div className="reaction" onClick={handleSorpresa} role="img">
          <span className={`risa${animarSorpresa ? " animar-sorpresa" : ""}`}>😦</span>
          <span className="cont">{sorpresas}</span>
        </div>
      </div>


      <div className="coment" id="comentarios-lista">
        @ PatitasTraviesas: ¡Mi primer post en Reactbook! 🐶✨
        {comentarios.map((comentario, idx) => (
          <div key={idx} style={{ margin: "5px 0" }}>
            @Tu: {comentario}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input id="comentario-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe un comentario"
        />
          <button type="submit" id="comentario-form">Comentar</button>
        </form>
    </div>
  </div>
  );
}

export default App;
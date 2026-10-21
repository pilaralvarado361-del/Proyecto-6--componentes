import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const [miBlob, setMiBlob] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const crearBlob = () => {
    const texto = `
Películas de Barbie

- Barbie
- Barbie: Escuela de Princesas
- Barbie y las 12 Princesas Bailarinas
`;

    const blob = new Blob([texto], { type: "text/plain" });

    setMiBlob(blob);
    setMensaje("Blob creado correctamente");
  };

  function descargarBlob() {
    if (!miBlob) {
      alert("Primero tenés que crear el Blob");
      return;
    }

    const url = URL.createObjectURL(miBlob);

    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "peliculas-barbie.txt";

    enlace.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <Header />

      <main className="CONTENIDO">
        <h2>Películas de Barbie</h2>

        <p>
          Un espacio para todos los que aman Barbie y su mundo
        </p>

        <button onClick={crearBlob}>
          Crear Blob
        </button>

        <button onClick={descargarBlob}>
          Descargar Blob
        </button>

        <p>{mensaje}</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;

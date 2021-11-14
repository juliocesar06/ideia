import { useState } from "react";
import Link from "next/link";

function Home() {
  return (
    <div>
      <p>Sobre</p>
      <Link href="/">
        <a>Acessar página Home</a>
      </Link>
      <Contador />
      <Header />
    </div>
  );
}

function Header() {
  return <div>teste</div>;
}

function Contador() {
  const [contador, setContador] = useState(1);

  function adcionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adcionarContador}>Adcionar</button>
    </div>
  );
}

export default Home;

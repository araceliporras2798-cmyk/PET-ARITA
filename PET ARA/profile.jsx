import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <div className="container">
      <h2>Perfil</h2>

      <div className="card">
        <b>Eduar Melo</b>
        <p className="gray">usuario@email.com</p>
      </div>

      <button className="btn-orange">Cerrar sesión</button>

      <Navbar />
    </div>
  );
}

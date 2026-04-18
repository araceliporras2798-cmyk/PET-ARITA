import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  return (
    <div className="container center">
      <h2>🐶 PetTime</h2>

      <input placeholder="Correo" className="input" />
      <input placeholder="Contraseña" type="password" className="input" />

      <button className="btn-primary" onClick={() => nav("/home")}>
        Iniciar Sesión
      </button>
    </div>
  );
}

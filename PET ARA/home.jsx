import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="container">
      <h2>Servicios</h2>

      <div className="card">🐕 Paseo</div>
      <div className="card">💉 Veterinario</div>
      <div className="card">✂️ Grooming</div>

      <Navbar />
    </div>
  );
}

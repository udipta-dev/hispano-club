// components/EmailPopup.js
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function EmailPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("hispano_visited");
    if (!visited) {
      setShowPopup(true);
      localStorage.setItem("hispano_visited", "true");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await addDoc(collection(db, "earlyAccessEmails"), {
        email,
        timestamp: serverTimestamp(),
      });
      setSubmitted(true);
      setTimeout(() => setShowPopup(false), 3000);
    } catch (err) {
      console.error("Error saving email:", err);
    }
  };

  if (!showPopup) return null;

return (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
      {/* Close Button */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl font-bold"
        aria-label="Cerrar"
      >
        ×
      </button>

      {/* Title and Description */}
      <h3 className="text-xl font-bold mb-2">Acceso anticipado y descuentos exclusivos</h3>
      <p className="mb-4">Déjanos tu email para enterarte primero cuando lancemos oficialmente.</p>

      {submitted ? (
        <p className="text-success">¡Gracias! Te hemos registrado.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 px-3 py-2 border rounded"
            placeholder="Tu correo"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-darkPrimary"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  </div>
);
}
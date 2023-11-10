import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main>
      <Header />
      <section className="signup-form container">
        <h2>S'inscrire</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (password.length < 8) {
              alert(
                "Votre mot de passe est trop court ! (il faut 8 caractères minimum)"
              );
            } else if (username === "") {
              alert("Ajoutez un nom s'il vous plaît !");
            }
          }}
        >
          <div>
            <label>
              <input
                id="username"
                type="text"
                placeholder="Nom d'utilisateur"
                name="username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                value={username}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                id="password"
                type="password"
                placeholder="Mot de passe"
                name="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
              />
            </label>
          </div>
          <div>
            {/* <label htmlFor="newsletter">S'abonner à la newsletter :</label>
          <input
            type="checkbox"
            id="newsletter"
            name="S'inscrire a notre newsletter"
            onChange={(event) => {
                setNewsletter(event.target.value);
              }}
              value={}
          /> */}
          </div>
          <div>
            <input type="submit" value="S'inscrire" />
          </div>
        </form>
        <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
      </section>
    </main>
  );
};

export default Signup;

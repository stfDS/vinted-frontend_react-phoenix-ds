import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setisAuthenticated] = useState(false);

  return (
    <main>
      <Header />
      <section className="signup-form container">
        <h2>Se connecter</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (password.length < 8) {
              alert(
                "Votre mot de passe est trop court ! (il faut 8 caractères minimum "
              );
            }
            if (username === "") {
              alert(" Écrivez votre e-mail s'il vous plaît");
            }
          }}
        >
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
            <input type="submit" value="Se connecter" />
          </div>
        </form>
        <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
      </section>
    </main>
  );
};

export default Login;

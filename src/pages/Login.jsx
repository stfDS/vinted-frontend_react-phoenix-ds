import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.length < 8) {
      alert(
        "Votre mot de passe est trop court ! (il faut 8 caractères minimum "
      );
    } else if (username === "") {
      alert(" Écrivez votre e-mail s'il vous plaît");
    } else {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/login",
          {
            email: email,
            password: password,
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main>
      <Header />
      <section className="signup-form container">
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              placeholder="Mot de passe"
              value={password}
              name="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
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

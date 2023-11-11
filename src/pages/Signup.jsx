import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.length < 8) {
      alert(
        "Votre mot de passe est trop court ! (il faut 8 caractères minimum)"
      );
    } else if (username === "") {
      alert("Ajoutez un nom s'il vous plaît !");
    }
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { username: username, email: email, password: password }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Header />
      <section className="signup-form container">
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id="username"
              type="text"
              placeholder="Nom d'utilisateur"
              name="username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
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
              name="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="newsletter"
              checked={newsletter}
              name="S'inscrire a notre newsletter"
              onChange={() => {
                setNewsletter(!newsletter);
              }}
            />
            <span>S'inscrire à notre newsletter</span>
            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
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

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Cookies from "js-cookie";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      Cookies.set("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
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

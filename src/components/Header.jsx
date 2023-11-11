import Cookies from "js-cookie";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [token, setToken] = useState(Cookies.get("token") || null);

  return (
    <header>
      <div className="top container">
        <Link to="/" className="logotop">
          <img
            src="https://static.vinted.com/assets/web-logo/default/logo.svg"
            alt="logo inted"
          />
        </Link>
        <div className="serch">
          <input type="text" placeholder="Recherche des articles" />
        </div>
        {token ? (
          <div className="deco-acount">
            <button
              onClick={() => {
                Cookies.remove("token");
                setToken(null);
              }}
            >
              Déconnection
            </button>
          </div>
        ) : (
          <div className="acount">
            <Link to="/login">
              <button>se connecter</button>
            </Link>

            <Link to="/signup">
              <button>s'incrire</button>
            </Link>
          </div>
        )}

        <div className="sell">
          <button>vend tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

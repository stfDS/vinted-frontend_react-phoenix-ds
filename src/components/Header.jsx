import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="top container">
        <div className="logotop">
          <img
            src="https://static.vinted.com/assets/web-logo/default/logo.svg"
            alt="logo inted"
          />
        </div>
        <div className="serch">
          <input type="text" placeholder="Recherche des articles" />
        </div>
        <div className="acount">
          <div>
            <button>se connecter</button>
          </div>
          <div>
            <Link to="/signup">
              <button>s'incrire</button>
            </Link>
          </div>
        </div>
        <div className="sell">
          <button>vend tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

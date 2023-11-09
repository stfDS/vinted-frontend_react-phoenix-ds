import { Link } from "react-router-dom";
import Offer from "./Offer";
import HomeOffers from "../components/HomeOffers";
import { useState } from "react";
const Home = ({ data }) => {
  //   console.log(data);
  return (
    <main>
      <div className="home-hero">
        <div className="container">
          <div className="home-in-hero">
            <div>
              <h1>Prêts à faire du tri dans vos placards ?</h1>
            </div>
            <div>
              <button>Commencer à vendre</button>
            </div>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="offer-container">
          <HomeOffers data={data} />
        </div>
      </section>

      {/* <Link to="/offer"> Offres </Link> */}
    </main>
  );
};

export default Home;

// ajoute un state pour le tab des details

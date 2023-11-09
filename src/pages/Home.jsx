// import { Link } from "react-router-dom";
import Header from "../components/Header";
import HomeOffers from "../components/HomeOffers";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <h1>Is Loading</h1>
  ) : (
    <main>
      <Header />
      <div className="home-hero">
        <div className="container">
          <div className="home-in-hero">
            <div>
              <h1>Prêts à faire du tri dans vos placards ?</h1>
            </div>
            <div className="in-hero-btn">
              <button>Commencer à vendre</button>
            </div>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="home-offer-container">
          <HomeOffers data={data} />
        </div>
      </section>
    </main>
  );
};

export default Home;

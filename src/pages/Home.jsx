// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import HomeOffers from "../components/HomeOffers";

import HomeHero from "../components/HomeHero";

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
      <section className="home-hero">
        <HomeHero />
      </section>
      <section className="container home-offer-container">
        <HomeOffers data={data} />
      </section>
    </main>
  );
};

export default Home;

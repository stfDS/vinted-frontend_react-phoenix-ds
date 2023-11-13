// import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [dataOffer, setDataOffer] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        console.log(response.data);
        setDataOffer(response.data);
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
    <main className="offer-page">
      <Header />
      <section className="offer-page-container container">
        <div className="offer-page-pic-1">
          <img src={dataOffer.product_image.secure_url} alt="" />
        </div>
        <div className="offer-page-info">
          <div>
            <p>{dataOffer.product_price} €</p>
            {dataOffer.product_details.map((detail) => {
              const keysToFind = Object.keys(detail);
              // console.log(keysToFind);
              const key = keysToFind[0];
              return (
                <ul key={key}>
                  <li>
                    <span className="span-left">{key}</span>
                    <span className="span-right">{detail[key]}</span>
                  </li>
                </ul>
              );
            })}
          </div>
          {/* <div><p>avatar a ajouter</p></div> */}

          <button>Acheter</button>
        </div>
      </section>
    </main>
  );
};

export default Offer;

// ajoute un retour a home

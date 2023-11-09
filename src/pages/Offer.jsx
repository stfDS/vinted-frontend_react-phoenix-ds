// import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
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
      <div>
        <div className="offer-page-pic-1">
          <img src={data.product_image.secure_url} alt="" />
        </div>
        <div className="offer-page-info">
          <p>{data.product_price} €</p>
          {data.product_details.map((detail) => {
            const keysToFind = Object.keys(detail);
            // console.log(keysToFind);
            const key = keysToFind[0];
            return (
              <p key={key}>
                {key} : {detail[key]}
              </p>
            );
          })}
          <div>
            <button>Acheter</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Offer;

// ajoute un retour a home

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import Cookies from "js-cookie";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const [token, setToken] = useState(Cookies.get("token") || null);

  const navigate = useNavigate();

  //   const location = useLocation();
  //   const { title, price } = location.state;
  //   console.log({ title, price });
  //j'ai pas trouver comment recup le prix je sais pas d'ou vien le problème

  //connection a stripe
  const stripePromise = loadStripe(
    "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
  );

  return token ? (
    <Elements stripe={stripePromise}>
      <CheckoutForm /> {/* title={title} price={price} */}
    </Elements>
  ) : (
    navigate("/login")
  );
};

export default Payment;

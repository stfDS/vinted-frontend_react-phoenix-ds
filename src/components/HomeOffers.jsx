// import { Link } from "react-router-dom";
import ConvertArrayToObject from "./ConvertArrayToObj";
const HomeOffers = ({ data }) => {
  return data.offers.map((offer) => {
    return (
      <div key={offer._id} className="home-offer">
        <div className="home-avatar-pic" key={offer.owner.account.username}>
          <img src={offer.owner.account.avatar.secure_url} alt="" />
          <span>{offer.owner.account.username}</span>
        </div>
        {/* {offer.product_pictures.map((picture) => {
          return (
            <div className="home-offer-pic" key={picture.asset_id}>
              <img src={picture.secure_url} alt="" />
            </div>
          );
        })} */}
        <div
          className="home-offer-pic"
          key={offer.product_pictures[0].asset_id}
        >
          <img src={offer.product_pictures[0].secure_url} alt="" />
        </div>

        <div>
          <span>{offer.product_price} €</span>
          <ConvertArrayToObject tab={offer.product_details} />

          <span>{offer.product_details.marque}</span>
        </div>
      </div>
    );
  });
};

export default HomeOffers;

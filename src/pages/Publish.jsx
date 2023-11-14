import { useState } from "react";
import Header from "../components/Header";
import CustomInput from "../components/Custoninput";
import axios from "axios";

const Publish = () => {
  //   const [isLoading, setIsLoading] = useState(true);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState();
  const [exchange, setExchange] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   const formData = new FormData();

    //   formData.append("title", title);
    //   formData.append("picture", picture);
    //   formData.append();

    //   const response = await axios.post("", formData, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });

    console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  console.log({ description, title, price, color });

  return (
    <main>
      <Header />
      <section className="publish-container container">
        <h2>Vends ton article</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="publish-file" />
            <label htmlFor="file" />
            <input
              type="file"
              id="file"
              onChange={(event) => {
                setPicture(event.target.files[0]);
              }}
            />
          </div>
          <div>
            <CustomInput
              className="publish-form"
              title="Titre"
              label="title"
              type="text"
              placeholder="ex:Airmax 90"
              setState={setTitle}
              value={title}
            />
            <div className="publish-form">
              <div className="publish-label">
                <label htmlFor="descrition">Décris ton article</label>
              </div>
              <div className="publish-input">
                <textarea
                  id="publish-text"
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <CustomInput
            className="publish-form"
            title="Marque"
            label="brand"
            type="text"
            placeholder="ex:Nike"
            setState={setBrand}
            value={brand}
          />
          <CustomInput
            className="publish-form"
            title="Taille"
            label="size"
            type="text"
            placeholder="ex:M, L, 38, 52"
            setState={setSize}
            value={size}
          />
          <CustomInput
            className="publish-form"
            title="Couleur"
            label="Color"
            type="text"
            placeholder="ex:Rouge, Blanc "
            setState={setColor}
            value={color}
          />
          <CustomInput
            className="publish-form"
            title="Etat"
            label="condition"
            type="text"
            placeholder="ex:Neuf, Jamais porté"
            setState={setCondition}
            value={condition}
          />
          <CustomInput
            className="publish-form"
            title="Localisation"
            label="city"
            type="text"
            placeholder="ex:Nice"
            setState={setCity}
            value={city}
          />
          <div className="publish-form">
            <div className="publish-label">
              <label htmlFor="price">Prix</label>
            </div>
            <div className="publish-price">
              <div>
                <input
                  type="number"
                  id="price"
                  placeholder="0,00€"
                  value={price}
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={exchange}
                  onChange={() => {
                    setExchange(!exchange);
                  }}
                />
                <span>Je suis intéressé(e) par les échange</span>
              </div>
            </div>
          </div>
          <input type="submit" value="submit" />
        </form>
      </section>
    </main>
  );
};

export default Publish;

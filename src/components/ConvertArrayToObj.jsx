function ConvertArrayToObject({ tab }) {
  const details = tab.reduce((acc, objet) => {
    return { ...acc, ...objet };
  }, {});
  //   console.log(details);

  return (
    <div className="offer-brand-n-price">
      <span>{details.MARQUE}</span>
      <span>{details.TAILLE}</span>
    </div>
  );
}

export default ConvertArrayToObject;

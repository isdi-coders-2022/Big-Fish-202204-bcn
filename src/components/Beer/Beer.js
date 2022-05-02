const Beer = ({ name, tagline, image_url: imgUrl }) => {
  return (
    <li className="beer">
      <h2 className="beer-title">{name}</h2>
      <p className="tagline">{tagline}</p>
      <img src={imgUrl} alt={name} className="beer-img" />
    </li>
  );
};
export default Beer;

import bannerImage from "../images/redline.png";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} className="banner" />

      <div className="banner-text">
        <h1>PORTFOLIO</h1>
      </div>
    </div>
  );
}

export default Banner;
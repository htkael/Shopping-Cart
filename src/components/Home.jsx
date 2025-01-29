import { Link } from "react-router-dom";
import "../home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="heading">
        <h1>Welcome to Hunter&apos;s Haven!</h1>
        <i>Your Daily Adventure in Discovery</i>
      </div>
      <div className="main">
        <div className="left">
          <img src="/welcome.jpeg" alt="" />
          <p>
            Welcome to Hunter&apos;s Haven, your ultimate destination for
            unexpected treasures and daily discoveries. From vintage
            collectibles to modern must-haves, each item in our carefully
            curated collection has been selected to bring something unique to
            your life. Whether you&apos;re searching for the perfect gift,
            hunting for a rare find, or simply exploring what catches your eye,
            our eclectic selection promises something for every kind of
            collector and enthusiast. At Hunter&apos;s Haven, we believe that
            shopping should be an adventure. Every week brings new discoveries,
            making each visit a fresh opportunity to find something special. Our
            collection spans from quirky home décor to practical everyday items,
            vintage curiosities to modern innovations – all waiting to be
            discovered by you.
          </p>
        </div>
        <div className="right">
          <Link to={"/shop"}>
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

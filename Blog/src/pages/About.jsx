import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Image1 from "../Imgs/login.jpg";
import "../Styles/About.css";
const About = () => {
  return (
    <div className="about">
      <Nav />
      <div className="section-a">
        <div className="prt-a">
          <h2>What Makes Us Special</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum
            hic voluptatum iure? Autem earum libero voluptatibus facere nisi
            nobis corporis laudantium, dolorem asperiores quam vero culpa
            quibusdam beatae adipisci. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Placeat quam porro rerum pariatur maiores vitae,
            obcaecati reprehenderit assumenda recusandae odit?
          </p>
        </div>
        <div className="prt-b">
          <img src={Image1} alt="about" />
        </div>
      </div>
      <div className="section-b">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit sed
          laborum quam repudiandae odio temporibus quia hic debitis ipsam, earum
          dicta. Iste pariatur fuga accusantium sed at odit fugit dolorem,
          laboriosam non fugiat exercitationem soluta tenetur tempore minus
          asperiores natus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Inventore in tenetur, dolores unde tempore pariatur a assumenda
          officia asperiores voluptates? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis, porro so that why student indeed needs
          this app.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;

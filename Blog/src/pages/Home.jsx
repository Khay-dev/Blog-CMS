import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import imagea from "../Imgs/login.jpg";
import imageb from "../Imgs/signup.jpg";
import "../Styles/Home.css";
import { BiSearch } from "react-icons/bi";
import Footer from "../components/Footer";
const Home = () => {
  let Blogs = [
    {
      title: "4 Habits of Emotionally Strong People",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit ut recusandae molestiae, porro dignissimos totam ipsam? Doloremque eum similique cupiditate eligendi consectetur cumque corporis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita enim distinctio",
      date: "Jan 2023",
      author: "Varun Singh",
      id: crypto.randomUUID(),
      className: "A",
      image: imagea,
    },
    {
      title: "10 Python Tricks You must know ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit ut recusandae molestiae, porro dignissimos totam ipsam? Doloremque eum similique cupiditate eligendi consectetur cumque corporis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita enim distinctio",
      date: "Jun 2023",
      author: "Nick Wignall",
      id: crypto.randomUUID(),
      className: "B",
      image: imageb,
    },
    {
      title: "To 1 or to 0: Pixel Attacks in Image Classification",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit ut recusandae molestiae, porro dignissimos totam ipsam? Doloremque eum similique cupiditate eligendi consectetur cumque corporis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita enim distinctio",
      date: " Jul 2023",
      author: "Sandra Pawula",
      id: crypto.randomUUID(),
      className: "C",
      image: imagea,
    },
    {
      title: "Programming Principles They Don’t Teach You In School",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit ut recusandae molestiae, porro dignissimos totam ipsam? Doloremque eum similique cupiditate eligendi consectetur cumque corporis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita enim distinctio",
      date: "Apr 2023",
      author: "Nishant Aanjaney Jalan",
      id: crypto.randomUUID(),
      className: "D",
      image: imageb,
    },
    {
      title: "How to Build a Local Chatbot with Llama2 and LangChain",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit ut recusandae molestiae, porro dignissimos totam ipsam? Doloremque eum similique cupiditate eligendi consectetur cumque corporis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita enim distinctio",
      date: "Mar 2023",
      author: "Rahul Nayak",
      id: crypto.randomUUID(),
      className: "E",
      image: imagea,
    },
    {
      title: "How To Be the Best in Your Class: Stop Taking Notes!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit ut recusandae molestiae, porro dignissimos totam ipsam? Doloremque eum similique cupiditate eligendi consectetur cumque corporis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita enim distinctio",
      date: "Nov 2023",
      author: " Daniel Khay",
      id: crypto.randomUUID(),
      className: "F",
      image: imageb,
    },
    {
      title: "My favorite coding question to give (and why)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit ut recusandae molestiae, porro dignissimos totam ipsam? Doloremque eum similique cupiditate eligendi consectetur cumque corporis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita enim distinctio",
      date: "Oct 2023",
      author: "Christabel Jones",
      id: crypto.randomUUID(),
      className: "G",
      image: imagea,
    },
    {
      title:
        "12 Image Tips and Best Practices for the Best UX Performance in Flutter",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit ut recusandae molestiae, porro dignissimos totam ipsam? Doloremque eum similique cupiditate eligendi consectetur cumque corporis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita enim distinctio",
      date: "Jan 2023",
      author: "Uju Chinedum",
      id: crypto.randomUUID(),
      className: "H",
      image: imageb,
    },
  ];
  return (
    <div className="home">
      <Nav />

      <div className="main-cont">
        <div className="nav-holder-2">
          <BiSearch className="icon" />
          <input type="search" name="" id="" placeholder="Search For Blogs?" />
        </div>
        {Blogs.map((blog) => (
          <div className={blog.className} key={blog.id}>
            <Link target="_blank">
              <div className="content-overlay"></div>
              <img src={blog.image} alt="image" />

              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Description</h3>
                <p className="content-text">{blog.description}</p>
              </div>
              <h2>{blog.title}</h2>
              <div className="info">
                <h4>{blog.author}</h4>
                <p>{blog.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;

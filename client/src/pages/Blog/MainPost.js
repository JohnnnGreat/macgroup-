import "./blog.scss";
import Image from "./dummyImages/imgFour.jpg";
import ImageOne from "./dummyImages/imgOne.jpg";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../Components/Footer/Footer.js";
import Menu from "../../Components/Menu.js";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/authContext";
import { Helmet } from "react-helmet";
function PostPage() {
  const [post, setPost] = useState({});
  const loc = useLocation().pathname.split("/")[2];
  console.log(loc);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/posts/${loc}`
        );

        setPost(response.data);
      } catch (e) {}
    };

    fetchData();
  }, [loc]);

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta
          name="description"
          content="We Are A Full-Service Digital Agency Offering As Wide Range Of
      Services, Including Custom App Development, Web Design And
      Development, E-Commerce Solution, And Comprehensive Digital
      Marketing Campaigns"
        />
      </Helmet>
      <div className="page">
        <div className="wrapper">
          <div className="content">
            <img src={Image} alt="" />
            <div className="user">
              <img src={ImageOne} alt="" />

              <div className="info">
                <span>By admin</span>
                <p>Posted 2 days ago</p>
              </div>
              {/* 
              {currentUser.username === post.username && (
                <div className="edit">
                  <Link to={"/write?edit=2"}>Edit</Link>
                  <Link to={"/write?edit=2"}>Delete</Link>
                </div>
              )} */}
            </div>
            <h1>{post.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: post.desc }}></p>
          </div>
          <div className="menu">
            <Menu />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PostPage;

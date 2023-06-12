// import { posts } from "./dummyData";
import { Link, useLocation } from "react-router-dom";
import "./blog.scss";
import Footer from "../../Components/Footer/Footer.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Blog() {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/posts${cat}`
        );
        setPosts(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [cat]);

  return (
    <>
      <div className="posts">
        <div className="wrapper">
          <h1 className="b-header">Our Blog</h1>
          {posts.map((item) => (
            <div key={item.id} className="post">
              <div className="image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="post-content">
                <Link to={`/blog/${item.title}`}>
                  <h1>{item.title}</h1>
                </Link>
                <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                <button
                  onClick={() => {
                    navigate(`/blog/${item.title}`);
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;

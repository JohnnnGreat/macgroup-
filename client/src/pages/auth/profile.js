import "./auth.scss";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/authContext.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Profile() {
  const navigate = useNavigate();
  const { currentUser, logout, postUpdate, setPostUpdate } = useContext(
    AuthContext
  );
  const [notAuthenticated, setNotAuthenticated] = useState(false);
  const [data, setData] = useState({});
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getProfile() {
      if (currentUser === null) {
        setNotAuthenticated(true);
      } else {
        try {
          const res = await axios.get(
            `http://localhost:8800/profile/${currentUser.username}`,
            { withCredentials: true }
          );
          setData(res.data);
        } catch (e) {
          console.log(e);
        }
      }
    }

    getProfile();
  }, []);

  useEffect(() => {
    async function getPostsForUser() {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts/posts/${data.id}`
        );

        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getPostsForUser();
  }, [posts]);

  async function handleDelete(id) {
    try {
      const res = await axios.delete(`http://localhost:8800/api/posts/${id}`);
      alert(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdate(id) {
    try {
      const res = await axios.get(`http://localhost:8800/api/posts/${id}`);
      setPostUpdate(true);
      navigate("/blog/write");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {notAuthenticated ? (
        <div className="accessErro">
          <h1>Invalid Access</h1>
          <p>
            Click here to login{" "}
            <span>
              {" "}
              <Link to={"/auth/login"}>Login</Link>
            </span>
          </p>
        </div>
      ) : (
        data && (
          <div className="profile">
            <div className="profile-wrapper">
              <div className="top">
                <div className="profile"></div>
                <div className="name">
                  <h1 className="fullname">{data?.username}</h1>
                  <h3 className="email">{data?.email}</h3>
                  <div className="more">
                    <Link to={"/blog/write"}>Write Post</Link>
                    <button>Delete Account</button>
                    <Link to={"/auth/login"} onClick={logout}>
                      Log Out
                    </Link>
                  </div>
                </div>
              </div>
              <div className="your-post">
                <h1>Your Posts</h1>
                {posts.map((item) => (
                  <div key={item.id} className="post">
                    <div className="content">
                      <h2>{item.title}</h2>
                      <p>{item.desc}</p>
                    </div>
                    <div className="action">
                      <button onClick={() => handleUpdate(item.title)}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
export default Profile;

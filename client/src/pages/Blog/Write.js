import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { AuthContext } from "../../Context/authContext";
function WritePost() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const { postUpdate, setPostUpdate } = useContext(AuthContext);
  const naigate = useNavigate();
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        "http://localhost:8800/api/upload",
        formData
      );
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = upload();

    try {
      const res = await axios.post(
        "http://localhost:8800/api/posts",
        {
          title,
          desc: value,
          img: file ? url : "",
        },
        { withCredentials: true }
      );
    } catch (e) {
      alert(e.response.data);
    }
  };

  console.log(postUpdate);
  return (
    <>
      <Helmet>
        <title>Write a Post</title>
      </Helmet>
      <div className="write-page">
        <div className="wrapper">
          <div className="content">
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={{}}
            />
            <input
              type="text"
              placeholder="Description"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="container">
              <ReactQuill
                className="editor"
                theme="snow"
                value={value}
                onChange={setValue}
              />
            </div>
          </div>
          <div className="menu">
            <div className="item">
              <h1>Publish</h1>
              <span>
                <b>Status:</b>Draft
              </span>
              <span>
                <b>Visibility:</b>Public
              </span>
              <input
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
                id="file"
                type="file"
              />
              <label className="file" htmlFor="file">
                Upload Image
              </label>
              <div className="buttons">
                <button>Save as Draft</button>
                <button onClick={handleSubmit}>Publish</button>
              </div>
            </div>
            {/* <div className="item">
            <h1>Category</h1>
            <divv className="cat">
              <input type="radio" name="cat" value="art" id="web-dev" />
              <label htmlFor="web-dev">Web Development</label>
            </divv>
            <div className="cat">
              <input type="radio" name="cat" value="art" id="seo" />
              <label htmlFor="seo">SEO</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="art" id="design" />
              <label htmlFor="design">Design</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="art" id="di-mkt" />
              <label htmlFor="di-mkt">Digital Marketing</label>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default WritePost;

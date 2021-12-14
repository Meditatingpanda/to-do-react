import { useState } from "react";
import { db } from "./firebase_config";
import { Link } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const submitvalue = (e) => {
    e.preventDefault();
    if(title.length===0 || body.length===0 ){
        window.alert("Enter Valid Inputs:-");
    }
    else{
      db.collection("confessionpage").add({
        title: title,
        body: body,
        author: author,
      });
    }
   
  };
  return (
    <div className="createNew">
      <h2>It's better to let things out!!</h2>
      <form action="">
        <div className="form-preview">
          <div className="t1">
            <label>Title:-</label>
            <br />
            <input
              className="t1-title"
              type="text"
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="t2">
            <label>Enter Your Confession:-</label>
            <br />
            <textarea
              required
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="t3">
            <label>Enter your anonymous Name:-</label>
            <br />
            <input
              type="text"
              required
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
            <br />
            <button className="btn" type="submit" onClick={submitvalue}>
              <Link to="/" className="sub">
                Submit
              </Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;

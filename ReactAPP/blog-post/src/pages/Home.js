import { useState, useEffect } from "react";
import Blogcontent from "../components/listComponent";
import { db } from "../firebase_config";
const Home = () => {
  let [blog, setBlog] = useState([]);
  //let [check, setCheck] = useState(true);
  useEffect(() => {
    db.collection("confessionpage")
      .orderBy("timestamp", "desc")
      .onSnapshot((query) => {
        setBlog(
          query.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            author: doc.data().author,
            body: doc.data().body,
          }))
        );
      });
  }, []);

  return (
    <div className="home">
      <h1>
        <i class="fas fa-quote-left"></i> With great power comes great
        responsibility <i class="fas fa-quote-right"></i>
      </h1>
      <div className="allBlogs" style={{marginBottom: '30px'}}>
        <div className="content-box">
          <div className="deleteBox">
            <span className="title" >How to use?</span>
          </div>
          <p className="body">Click on new btn to add ur msg!!</p>
          <h6>Team Enigma</h6>
        </div>
      </div>
      <Blogcontent blog={blog} />
    </div>
  );
};

export default Home;

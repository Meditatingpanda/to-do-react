import { useState, useEffect } from "react";
import Blogcontent from "./listComponent";
import { db } from "./firebase_config";
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
      {/* <div className="content-box" >
            <div className="deleteBox">
              <span className="title">
                <span style={{ color: "white" }}>Title:-</span>
               How to use?
              </span>
            </div>
            <p className="body">Click on new btn to add ur msg!!</p>
            <h6>Written by cooldude69 </h6>
            {/* <h6>{key.timestamp.toDate().toDateString()}</h6> */}
            
          {/* </div> */}
           
      <Blogcontent blog={blog} />
    </div>
  );
};

export default Home;

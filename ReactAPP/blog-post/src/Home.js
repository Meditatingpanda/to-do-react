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
            date: doc.data().timestamp.toDate().toDateString(),
            
          }))
        );
      });
  }, []);

  return (
    <div className="home">
      <Blogcontent blog={blog} />
    </div>
  );
};

export default Home;

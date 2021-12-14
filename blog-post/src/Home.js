import { useState, useEffect } from "react";
import Blogcontent from "./listComponent";
import { db } from "./firebase_config";
const Home = () => {
  let [blog, setBlog] = useState([]);
  // let [check, setCheck] = useState(true);
  useEffect(() => {
    db.collection("confessionpage").onSnapshot((query) => {
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
      {/* <h1 className="loader">Open Confession is Good for Soul😇</h1> */}
      <Blogcontent blog={blog} />
    </div>
  );
};

export default Home;

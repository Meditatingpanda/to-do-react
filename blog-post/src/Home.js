import { useState,useEffect } from "react";
import Blogcontent from "./listComponent";
import firebase from "firebase";
import { db } from "./firebase_config";
const Home = () => {
  let [blog, setBlog] = useState([]);
  const [isPending,setIsPending]=useState(true);
  const [errorShow,SetError]=useState(null);
  const handleDelete=(key)=>{
      let newBlog=blog.filter((temp)=>temp.id!==key);
      console.log(newBlog);
      setBlog(newBlog);
  }
  useEffect(()=>{
       db.collection("confessionpage").onSnapshot((query)=>{
          setBlog( query.docs.map((doc)=>({
            id:doc.id,
            title:doc.data().title,
            author:doc.data().author,
            body:doc.data().body
        })))
       })
            
  },[]);
     
  return ( <div className="home">
      
     
        <Blogcontent blog={blog} />
      
      
   </div>
  )
    };   

export default Home;

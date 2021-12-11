import { useState,useEffect } from "react";
import Blogcontent from "./listComponent";
const Home = () => {
  let [blog, setBlog] = useState([
    {
      title: "My new website",
      author:'gyana',
      body: "xcepteur esse adipisicing cupidatat amet laboris sit fugiat excepteur ea labore deser",
      id: 1
    },
    {
      title: "Welcome aborad",
      author:'Nihar',
      body: "xcepteur esse adipisicing cupidatat amet laboris sit fugiat excepteur ea labore deser",
      id: 2
    },
    {
      title: "Web dev ",
      
      author:'gyana',
      body: "xcepteur essxcepteur esse adipisicing cupidatat amet laboris sit fugiat excepteur ea labore deserxcepteur esse adipisicing cupidatat amet laboris sit fugiat excepteur ea labore deserxcepteur esse adipisicing cupidatat amet laboris sit fugiat excepteur ea labore deserxcepteur esse adipisicing cupidatat amet laboris sit fugiat excepteur ea labore deserxcepteur esse adipisicing cupidatat amet laboris sit fugiat excepteur ea labore desere adipisicing cupidatat amet laboris sit fugiat excepteur ea labore deser",
      id: 3
    },
  ]);
  
  const handleDelete=(key)=>{
      let newBlog=blog.filter((temp)=>temp.id!==key);
      console.log(newBlog);
      setBlog(newBlog);
  }
  useEffect(()=>{
      console.log('dom rendered');
  });
  return <div className="home">
      {
         <Blogcontent blog={blog} handleDelete={handleDelete}/>
      }
  </div>;
};

export default Home;

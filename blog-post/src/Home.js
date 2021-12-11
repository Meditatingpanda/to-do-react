import { useState } from "react";
const Home = () => {
  let [blog, setBlog] = useState([
    {
      title: "my new website",
      body: "xcepteur esse adipisicing cupidatat amet laboris sit fugiat excepteur ea labore deser",
      id: 1,
    },
    {
      title: "welcome aborad",
      body: "xcepteur esse adipisicing cupidatat amet laboris sit fugiat excepteur ea labore deser",
      id: 2,
    },
    {
      title: "web dev ",
      body: "xcepteur essxcepteur esse adipisicing cupidatat amet laboris sit fugiat excepteur ea labore deserxcepteur esse adipisicing cupidatat amet laboris sit fugiat excepteur ea labore deserxcepteur esse adipisicing cupidatat amet laboris sit fugiat excepteur ea labore deserxcepteur esse adipisicing cupidatat amet laboris sit fugiat excepteur ea labore deserxcepteur esse adipisicing cupidatat amet laboris sit fugiat excepteur ea labore desere adipisicing cupidatat amet laboris sit fugiat excepteur ea labore deser",
      id: 3,
    },
  ]);
  
  return <div className="home">
      {
          blog.map((key)=>{
            return  <div className="content-box" key={blog.id}>
                  <span className="title">{key.title}</span>
                  <p className="body">{key.body}</p>
              </div>
          })
      }
  </div>;
};

export default Home;

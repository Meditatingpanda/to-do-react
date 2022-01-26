import Masonry from "react-masonry-css";
const Blogcontent = ({ blog }) => {
  let brakePoints = {
    
    default: 3,
    700: 2,
    500: 1
  };
  return (
    <div className="allBlogs">
     <Masonry
       breakpointCols={brakePoints}
       className="my-masonry-grid"
       columnClassName="my-masonry-grid_column"
     >
      {blog.map((key) => {
        return (
          <div className="content-box" key={key.id}>
            <div className="deleteBox">
              <span className="title">
                {/* <span style={{ color: "white" }}>Title:-</span> */}
                {key.title}
              </span>
            </div>
            <p className="body">{key.body}</p>
            
            <h6>Name: {key.author} </h6>
           
            
          </div>
        );
      })}
    </Masonry>
    </div>
    
    
  );
};

export default Blogcontent;

const Blogcontent = ({ blog }) => {
  return (
    <div className="allBlogs">
      {blog.map((key) => {
        return (
          <div className="content-box" key={key.id}>
            <div className="deleteBox">
              <span className="title">
                <span style={{ color: "black" }}>Title:-</span>
                {key.title}
              </span>
            </div>
            <p className="body">{key.body}</p>
            <h6>Written by {key.author} </h6>
            <h6>{key.date}</h6>
            
          </div>
        );
      })}
    </div>
  );
};

export default Blogcontent;

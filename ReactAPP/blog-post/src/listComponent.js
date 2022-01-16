const Blogcontent = ({ blog }) => {
  return (
    <div className="allBlogs">
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
            {/* <h6>{key.timestamp.toDate().toDateString()}</h6> */}
            
          </div>
        );
      })}
    </div>
  );
};

export default Blogcontent;

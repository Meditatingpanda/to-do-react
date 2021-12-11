const Blogcontent = ({blog,handleDelete}) => {
    //const blog=props.blog;
    //console.log(blog);
   
   
   
    return ( 
        <div className="allBlogs">
             {
            blog.map((key)=>{
                return  <div className="content-box" key={key.id}>
                      <span className="title">{key.title}</span>
                      <button className="btn" onClick={()=>{handleDelete(key.id)}}>Delete</button>
                      <p className="body">{key.body}</p>
                      <h6>Written by {key.author}</h6>
                  </div>
              })
          }
        </div>
         

     );
}
 
export default Blogcontent;
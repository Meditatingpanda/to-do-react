const Blogcontent = ({blog}) => {
   
    return ( 
        <div className="allBlogs">
             {
            blog.map((key)=>{
                return  <div className="content-box" key={key.id}>
                       <div className="deleteBox">
                        <span className="title"><span style={{color:'black'}}>Title:-</span>{key.title}</span>
                        {/* <button className="btn" onClick={()=>{handleDelete(key.id)}}>Delete</button> */}
                       </div>
                      <p className="body">{key.body}</p>
                      <h6>Written by {key.author}</h6>
                  </div>
              })
          }
        </div>
         

     );
}
 
export default Blogcontent;
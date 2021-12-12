import { useState } from "react";
import firebase from "firebase";
import { db } from "./firebase_config";



const CreateBlog = () => {
  const [title,setTitle]=useState('');
  const [body,setBody]=useState('');
  const [author,setAuthor]=useState('');
  const submitvalue=(e)=>{
        e.preventDefault(); 
        db.collection('confessionpage').add(
          {
            title:title,
            body:body,
            author:author
          }
        )
       
  }
    return (  
        <div className="createNew">
            <h2>It's better to let things out!!</h2>
            <form action="">
                <div className="form-preview">
                <div className="t1">
                <label>Title:-</label>
                <br />
              <input className="t1-title" type="text" 
                required
                
                onChange={(e)=>{
                  setTitle(e.target.value);
                  console.log(title);
                }}
              />
                </div>
              <div className="t2">
              <label>Enter Your Confession:-</label>
              <br />
              <textarea  required
             
              onChange={(e)=>{
                setBody(e.target.value);
                console.log(body);
               }}
              
              > 
              </textarea>
              </div>
              <div className="t3">
              <label >Enter your anonymous Name:-</label>
              <br />
              <input type="text" required 
               
                onChange={(e)=>{
                  setAuthor(e.target.value);
                  console.log(author);
                }}
              
              />
              <br />
              <button className="btn" type="submit" onClick={submitvalue}>Submit</button>
              </div>
              </div>
              
              

            </form>
        </div>
    );
}
 
export default CreateBlog;
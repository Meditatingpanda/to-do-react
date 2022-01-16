import { useState } from "react";
import { db } from "./firebase_config";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import { withStyles } from "@material-ui/core";
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui fieldset': {
        borderColor: 'yellow',
      },
    },
  },
})(TextField);

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const submitvalue = (e) => {
    e.preventDefault();
    if (title.length === 0 || body.length === 0 || author.length===0) {
      window.alert("OOPS!! You Entered Nothing");
    } else {
      db.collection("confessionpage").add({
        title: title,
        body: body,
        author: author,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };
  return (
    <div className="createNew">
      <form>
        <h2>What are you expecting from us?</h2>
        <CssTextField
          id="standard-basic"
          label="Title"
          variant="standard"
          InputLabelProps={{className:'inputF'}}
          InputProps={{color:'primary'}}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <CssTextField
          id="standard-textarea"
          label="Your Expectations"
          multiline
          variant="standard"
          InputLabelProps={{className:'inputF'}}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />

        <CssTextField
          id="standard-basic"
          label="Your Name"
          variant="standard"
          InputLabelProps={{className:'inputF'}}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <Button
          className="btn"
          variant="contained"
          style={{ width: "3rem" }}
          onClick={submitvalue}
        >
         <Link to="/">Submit</Link>
        </Button>
       
      </form>
    </div>
  );
};

export default CreateBlog;

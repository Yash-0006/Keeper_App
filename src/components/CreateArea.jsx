import React ,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function CreateArea(props) {

  const[isExpand,setExpand]=useState()

  const[note,setNote]=useState({
    title : "",
    content : "",
  });

  function handleChange(event){
    const {name,value} = event.target;
    setNote((prev)=>{
      return{
        ...prev,
        [name]:value,
      };
    });
  }

  function add(event){
    props.onAdd(note);
    setNote(()=>{
      return{
        title : "",
        content : ""
      }
    })
    event.preventDefault();
  }

  function handleExpand(){
    setExpand(true)
  }



  return (
    <div>
      <form className = "create-note">
      { isExpand && (<input onChange={handleChange} name="title" placeholder="Title" value={note.title} />)}
        <textarea onChange={handleChange} onClick={handleExpand} name="content" placeholder="Take a note..."  rows={isExpand ? 3 : 1} value={note.content} />
        <Zoom in={isExpand}><Fab onClick={add}><AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "../styles.css";

function App() {

  const[notes,setNotes]=useState([]);

  function addNote(note){
    setNotes((prev)=>{
      return[...prev,note]
    });
  }

  function deleteNote(id){
    setNotes((prev)=>{
      return notes.filter((prev,index)=>{
        return index !== id;
      })
    })  
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd = {addNote}
      />
      {notes.map((noteItem,index) => {
        return (<Note
          key={index}
          id={index}
          title = {noteItem.title}
          content = {noteItem.content}
          onDelete = {deleteNote}
        />);
      })}
      <Footer />
    </div>
  )
}

export default App;

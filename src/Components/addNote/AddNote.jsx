import usePost from "../../Hooks/usePost";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const AddNote=({get})=>{
    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");
    const[fab,setFab]=useState(false);

    const post = usePost();
    const fabHandler=()=>{
        setFab(()=>!fab);
    }
    const titleHandler=(event)=>{
        setTitle(event.target.value);
    }
    const contentHandler=(event)=>{
        setContent(event.target.value);
    }
    const reset =()=>{
        setContent("");
        setTitle("");
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        if(content!=="" || title!==""){
            const data={title:title,
                content:content,
                fab:fab}
                post(data,"https://notes-1580e-default-rtdb.firebaseio.com/Notes.json",get)
                reset()
        }
       
        
    };
    return (
        <header>
        <Form onSubmit={submitHandler}> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Titulo</Form.Label>
        <Form.Control type="text" placeholder="Ingrese un titulo" onChange={titleHandler} value={title}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nota</Form.Label>
        <Form.Control type="text" placeholder="Contenido de la nota"  onChange={contentHandler} value={content}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Favorito" onClick={fabHandler}/>
      </Form.Group>
      <Button variant="primary" type="submit" style={{float:"right"}}>
        crear
      </Button>
    </Form>
        </header>

    );
}
export default AddNote;
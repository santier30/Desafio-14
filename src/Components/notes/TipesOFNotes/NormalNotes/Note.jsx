
import CloseButton from 'react-bootstrap/CloseButton';
import Card from 'react-bootstrap/Card';
import Context from '../../../context';
import useDelete from '../../../../Hooks/use-delete';
import { useContext,useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import usePut from '../../../../Hooks/use-put';


const NormalNotes =({note})=>{
  
  const [checked, setChecked] = useState(note.fab);
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);
  const put=usePut();
  const ctx = useContext(Context);
  const del = useDelete();
    const deleteHandler=()=>{
      del("https://notes-1580e-default-rtdb.firebaseio.com/Notes",note.key,ctx.get)
    }
    const handleEditClick = () => {
      setIsEditing(true);
    };
  

    const handleSaveClick=(event)=>{
      event.preventDefault();
      if(editedContent!=="" || editedTitle!==""){
          const data={title:editedTitle,
              content:editedContent,
              fab:checked}
              put("https://notes-1580e-default-rtdb.firebaseio.com/Notes",note.key,ctx.get,data)
              setIsEditing(false);
      }
     
      
  };
    return(
      
      <Card style={{ width: '22%' }}>
      <Card.Body>
        
          {isEditing ? (
<>
           <div className='titleWrap'> 
           <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="edit-input"
            />
          <CloseButton  onClick={deleteHandler} /></div>
          <div className='textWrap'>
          <input
              type="text"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="edit-input"
            />
          </div>
          <div className='buttonWrap'>
          <ToggleButton
              id={note.title}
              type="checkbox"
              variant="outline-primary"
              checked={checked}
              value="1"
              onChange={(e) => setChecked(e.currentTarget.checked)}
            >
              Favorito
            </ToggleButton>
            <Button
              onClick={handleSaveClick}
              className="save-button"
            >
              Save
            </Button>
          </div>

</>

          ) : (
            <>
            <div className='titleWrap'>
            <Card.Title style={{width:"90%"}}>
              {note.title}
            </Card.Title>
          <CloseButton  onClick={deleteHandler} />
          </div>
          <div className='textWrap'>
          <Card.Text style={{width:"85%",float:"left"}} >{note.content}</Card.Text>
          
          <div className='buttonWrap'>
          <Button
              onClick={handleEditClick}
              className="edit-button"
            >
              Edit
            </Button>
          </div></div>
          </>
          )}

        
      </Card.Body>
    </Card>
)
}
export default NormalNotes;
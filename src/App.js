
import './Components/SASS/Syles.scss';
import AddNote from './Components/addNote/AddNote';
import Notes from './Components/notes/Notes';
import 'bootstrap/dist/css/bootstrap.min.css';
import useGet from './Hooks/use-get';
import { useEffect } from 'react';
import Context from './Components/context';


function App() {
  const [get,notes]=useGet();
  useEffect(()=>get("https://notes-1580e-default-rtdb.firebaseio.com/Notes.json"),[get]);
  return(
<Context.Provider value={{notes:notes,get:get}}>
<AddNote get={get}/>
<Notes notes={notes}/>
</Context.Provider>
  );
}

export default App;

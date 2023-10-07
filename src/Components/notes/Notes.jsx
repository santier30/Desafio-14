import NormalNotes from "./TipesOFNotes/NormalNotes/Note";


const Notes=({notes})=>{

    return (
<main>
{notes.some(a=>a.fab) && (<section>
    <h2>Notas Favoritas</h2>
    <article>
    {notes.filter((note)=>note.fab).map((note)=><NormalNotes note={note} key={note.key}/>)}
    </article>
    
</section>)}
<section>
    <h2>Notas</h2>
    <article>
    {notes.filter((note)=>!note.fab).map((note)=><NormalNotes note={note} key={note.key}/>)}
    </article>
    
</section>

</main>

    );
}
export default Notes;
import { useEffect, useState } from "react";
import Markdown from 'react-markdown';
import MacWindow from "./MacWindow";

const Note = () => {

    const [markDown, setMarkDown] = useState(null)

    useEffect(() => {
        fetch('/note.txt')
        .then(res => res.text())
        .then(text => setMarkDown(text))
    },[])

  return (
    <MacWindow>
        <div className="note-window">
            {markDown ? <Markdown>{markDown}</Markdown> : <p>Loading...</p>}
        </div>
    </MacWindow>
  )
}

export default Note;

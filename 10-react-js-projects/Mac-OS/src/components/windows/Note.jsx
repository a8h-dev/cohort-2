import { useEffect, useState } from "react";
import Markdown from 'react-markdown';
import MacWindow from "./MacWindow";
import './Note.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = ({windowName, setWindowsState}) => {

    const [markDown, setMarkDown] = useState(null)

    useEffect(() => {
        fetch('/note.txt')
        .then(res => res.text())
        .then(text => setMarkDown(text))
    },[])

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
        <div className="note-window">
            {markDown ? <SyntaxHighlighter language="typescript" style={androidstudio}>{markDown}</SyntaxHighlighter> : <p>Loading...</p>}
        </div>
    </MacWindow>
  )
}

export default Note;

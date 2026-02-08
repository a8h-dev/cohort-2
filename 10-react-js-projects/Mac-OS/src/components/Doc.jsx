import './Dock.scss'

const Doc = ({setWindowsState}) => {
  return (
    <footer className='dock'>
        <div className="icon github"
        onClick={() => {
            setWindowsState(state=>({state, github:true}))
        }}
        >
            <img src="../public/doc-icons/github.svg" alt="github-svg" />
        </div>

        <div className="icon note"
        onClick={() => {
            setWindowsState(state=>({state, note:true}))
        }}
        >
            <img src="../public/doc-icons/note.svg" alt="note-svg" />
        </div>

        <div className="icon pdf"
        onClick={() => {
            setWindowsState(state=>({state, resume:true}))
        }}
        >
            <img src="../public/doc-icons/pdf.svg" alt="pdf-svg" />
        </div>

        <div className="icon calender"
        onClick={() => {
            window.open("https://calendar.google.com/", "_blank");
        }}
        >
            <img src="../public/doc-icons/calender.svg" alt="calender-svg" />
        </div>

        <div className="icon spotify"
        onClick={() => {
            setWindowsState(state=>({state, spotify:true}))
        }}
        >
            <img src="../public/doc-icons/spotify.svg" alt="spotify-svg" />
        </div>

        <div className="icon mail"
        onClick={() => {
            window.open("mailto:abhishekmahto@example.com", "_blank");
        }}
        >
            <img src="../public/doc-icons/mail.svg" alt="mail-svg" />
        </div>

        <div className="icon link"
        onClick={() => {
            window.open("https://www.linkedin.com/in/a8h-dev/", "_blank");
        }}
        >
            <img src="../public/doc-icons/link.svg" alt="link-svg" />
        </div>

        <div className="icon cli"
        onClick={() => {
            setWindowsState(state=>({state, cli:true}))
        }}
        >
            <img src="../public/doc-icons/cli.svg" alt="cli-svg" />
        </div>
    </footer>
  );
}

export default Doc;

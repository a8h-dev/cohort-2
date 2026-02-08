import './Dock.scss'

const Doc = () => {
  return (
    <footer className='dock'>
        <div className="icon github">
            <img src="../public/doc-icons/github.svg" alt="github-svg" />
        </div>
        <div className="icon note">
            <img src="../public/doc-icons/note.svg" alt="note-svg" />
        </div>
        <div className="icon pdf">
            <img src="../public/doc-icons/pdf.svg" alt="pdf-svg" />
        </div>
        <div className="icon calender">
            <img src="../public/doc-icons/calender.svg" alt="calender-svg" />
        </div>
        <div className="icon spotify">
            <img src="../public/doc-icons/spotify.svg" alt="spotify-svg" />
        </div>
        <div className="icon mail">
            <img src="../public/doc-icons/mail.svg" alt="mail-svg" />
        </div>
        <div className="icon link">
            <img src="../public/doc-icons/link.svg" alt="link-svg" />
        </div>
        <div className="icon cli">
            <img src="../public/doc-icons/cli.svg" alt="cli-svg" />
        </div>
    </footer>
  );
}

export default Doc;

import MacWindow from "./MacWindow";
import './Resume.scss';

const Resume = ({windowName, setWindowsState}) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="resume-window">
        <embed
          src="https://drive.google.com/file/d/1MCYSA1eRSm4MWwF6L7LPw3lHxF44KbRS/preview"
        //   width="100%"
        //   height="600"
        />
      </div>
    </MacWindow>
  );
};

export default Resume;

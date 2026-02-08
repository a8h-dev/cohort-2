import githubData from '../../assets/github.json';
import MacWindow from "./MacWindow";
import './Github.scss';

const GitCard = ({data = {id:1, image:"", title:"", description:"", tags:[], repoLink:"", demoLink:"" }}) => {
    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>

        <div className="tags">
            {data.tags.map((tag, idx) => {
                    return <div key={idx}>
                      <p className='tag'>{tag}</p>
                    </div>
                })}
        </div>

        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            {data.demoLink && <a href={data.demoLink}>Demo Link</a>}
        </div>
    </div>
}

const Github = ({windowName, setWindowsState}) => {
  return (
    <div>
      <MacWindow width='25vw' height='50vh' windowName={windowName} setWindowsState={setWindowsState} >
        <div className="cards">
            {githubData.map((project, idx) => {
                return <div key={idx}>
                  <GitCard data={project} />
                </div>
            })}
        </div>
      </MacWindow>
    </div>
  );
}

export default Github;

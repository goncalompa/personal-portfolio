import Main from '../components/Main';
import { useDataContext } from "../providers/Data";

function About() {

  const {data} = useDataContext();

  const style = {
    position: "relative",
    color: "white",
    background: "#333333aa",
    margin: "20px",
    padding: "20px"
  }

  const m0 = {
    margin: "0"
  }

  return (
    <Main>
      <div style={style}>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
          <div style={{display:"flex",flexDirection:"column",flexGrow:"1",gap:"20px"}}>
            <h1 style={m0}>{data.about.name}</h1>
            <h2 style={m0}>{data.about.title}</h2>
            <h3 style={m0}>{data.about.grade}</h3>
          </div>
          <div>
            <div style={{width:"150px",height:"150px"}}>
              <img src={data.about.image} alt={data.about.image} style={{width:"100%",height:"100%"}}></img>
            </div>
          </div>
        </div>
        <p>{data.about.description}</p>
        
      </div>
    </Main>
  );
}

export default About

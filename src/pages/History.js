import Main from '../components/Main';
import { useDataContext } from "../providers/Data";

function History() {

    const {data} = useDataContext();

    const styleUl = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        overflowX: "visible",
        overflowY: "auto",
        listStyleType: "none",
        margin: "0",
        padding: "10px 0",
        width: "100%"
    }

    const styleLi = {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        padding: "0",
        overflow: "visible",
        listStyleType: "none",
        borderLeft: "3px solid gold",
        background: "#33333388",
        color: "white",
        width: "90%",
        maxWidth: "1000px"
    }

    return (
        <Main>
            <ul style={styleUl}>
                {data.history.map(d => 
                    <li key={d.key} style={styleLi}>
                        <div style={{overflowY:"auto",padding:"10px"}}>
                            <div><span style={{fontSize:"25px",fontWeight:"600"}}>{d.title}</span></div>
                            <div><span>{d.from} - {d.to}</span></div>
                            <div><span>{d.company}</span></div>
                            <div><span>{d.location}</span></div>
                            <br/>
                            <div><span>{d.description}</span></div>
                            <div style={{position:"absolute",left:"-10px",top:"calc(50% - 8px)",width:"10px",height:"10px",borderRadius:"10px",background:"white",border:"3px solid gold",zIndex:"5"}}></div>
                        </div>
                    </li>
                )}
            </ul>
        </Main>
    );
}

export default History
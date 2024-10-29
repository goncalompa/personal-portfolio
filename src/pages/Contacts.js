import Main from '../components/Main';
import { useDataContext } from "../providers/Data";

function Contacts() {

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
        padding: "5px 10px",
        overflow: "visible",
        listStyleType: "none",
        borderLeft: "3px solid gold",
        background: "#33333388",
        color: "white",
        width: "90%",
        maxWidth: "700px",
        fontSize:"40px"
    }

    return (
        <Main>
            <ul style={styleUl}>
                {data.contacts.map(c => 
                    <li style={styleLi} key={c.key}>
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}>
                            <img src={c.icon} alt={c.name} style={{width:"40px",height:"40px"}}></img>
                            <span><a href={c.link} target="_blank" rel="noreferrer">{c.value}</a></span>
                        </div>
                    </li>
                )}
            </ul>
        </Main>
    );
}

export default Contacts
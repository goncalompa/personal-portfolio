import { useState, useEffect, useContext, createContext } from "react";

const DataContext = createContext();

function Data ({children}) {

    const [data, setData] = useState({ navItems: [] });

    async function loadData() {
        console.log('Loading data...');
        const response = await fetch(process.env.PUBLIC_URL + "/data.json");
        const data = await response.json();
        setData(data);
        console.log(data);
    };

    useEffect(() => {
        console.log('Data UseEffect');
        loadData();
    }, []);

    return (
        <DataContext.Provider value={{data}}>
            {children}
        </DataContext.Provider>
    );
}

export const useDataContext = () => useContext(DataContext);

export default Data
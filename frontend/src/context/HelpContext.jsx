import { createContext, useState } from "react";
import { data } from "./Data";

const HelpContext = createContext()

function HelpContextProvider({ children }) {

    const [search, setSearch] = useState("");
   
    return (
        <HelpContext.Provider value={{search, setSearch, data }} >
            {children}
        </HelpContext.Provider>
    )
}

export { HelpContext, HelpContextProvider };
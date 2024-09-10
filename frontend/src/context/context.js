import { createContext, useState } from "react";



export const StoreContext = createContext();

const StoreContextProvider = (props)=>{

    const [isregister,setIsRegister] = useState(false);

const contextvalue = {
    isregister,
    setIsRegister,
}

return(
    <StoreContext.Provider value={contextvalue}>
        {props.children}
    </StoreContext.Provider>
)
}

export default StoreContextProvider;

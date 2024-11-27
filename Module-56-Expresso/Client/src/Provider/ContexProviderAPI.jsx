import {  createContext } from "react";
import PropTypes from "prop-types";

export const ContexAPI = createContext(null);
const ContexProviderAPI = ({children}) => {
    const value = {

    }
    
    return (
        <ContexAPI.Provider value={value}>
            {children}
        </ContexAPI.Provider>
    );
};

ContexProviderAPI.propTypes = {
    children: PropTypes.object.isRequired,
}

export default ContexProviderAPI;
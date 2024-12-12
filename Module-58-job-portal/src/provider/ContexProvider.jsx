// @ts-nocheck
import { createContext } from "react";
import PropTypes from 'prop-types';

export const ContexAPI = createContext(null);
const ContexProvider = ({children}) => {
    const name = "any";
    const value = {
        name,
    }
    return (
        <ContexAPI.Provider value={value}>
            {children}
        </ContexAPI.Provider>
    );
};

ContexProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

export default ContexProvider;
import {  createContext } from "react";
import PropTypes from "prop-types";

export const ContexAPI = createContext(null);
const ContexProviderAPI = ({children}) => {
    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const name = form.get('name');
        const chef = form.get('chef');
        const supplier = form.get('supplier');
        const taste = form.get('taste');
        const category = form.get('category');
        const details = form.get('details');
        const photo = form.get('photo');
        const newCoffee = {name, chef, supplier, taste, category, details, photo}
        console.log(newCoffee);
    }
    
    const value = {
        handleAddCoffee,
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
//name, supplier, category, chef, taste, details, photo
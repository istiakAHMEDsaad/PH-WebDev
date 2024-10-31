import { useState } from "react";

const useInputState = (defaultValue=null) => {
    const [values, setValues] = useState(defaultValue);

    /* const handleChange = event =>{
        setValues(event.target.value);
    } */
        /* return[values, handleChange]; */
        const onChange = event =>{
            setValues(event.target.value);
        }
    return{
        values,
        onChange,
    };
}

export default useInputState;
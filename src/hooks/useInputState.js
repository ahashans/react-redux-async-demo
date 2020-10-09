import {useState} from 'react';
export const useTextInputState=()=>{
    const [value, setValue] = useState("");
    const reset = ()=>{
        setValue("");
    }
    return [value, setValue, reset];
};

export const useBooleanInputState=(initial=false)=>{
    const [value, setValue] = useState(initial);    
    return [value, setValue];
}
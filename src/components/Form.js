import React, {useState, useContext} from 'react'
import { AlertContext } from '../context/Alert/AlertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const fireBase = useContext(FirebaseContext)
    const submitHandler = (e) => {
        e.preventDefault()
        if(value.trim()){
            fireBase.addNote(value.trim()).then(() => {
                alert.show('Note was created', 'success');
            }).catch( () => {
                alert.show('Some kind of mistake occured', 'danger');
            })
            
            setValue('')
        }else{
            alert.show('Enter your notes text')
        }
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" 
                    className="form-control" 
                    placeholder="Enter your notes here"
                    value={value}
                    onChange={(e) => {setValue(e.target.value)}} />
            </div>
        </form>
    )
}
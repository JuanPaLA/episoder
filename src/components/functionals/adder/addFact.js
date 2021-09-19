import React, {useState} from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

function AddFact(props) {
    const [fact, setFact] = useState('');

    function handlerFact(e) {
        setFact(e.target.value)
    }

    return (
        <div className="addIn" id="addfact">
            
            <h6 style={{textAlign:'center'}}>What did generate an emotional response?</h6>
            
            <FormGroup>
                <Label for="exampleText">State your facts</Label>
                <Input 
                    type="textarea" 
                    rows="10" 
                    cols="50" 
                    name="text" 
                    id="exampleText"  
                    onChange={(e)=>handlerFact(e)}
                />
            </FormGroup>
        </div>
    );
}

export default AddFact;
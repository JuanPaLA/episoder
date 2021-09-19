import React, {useEffect, useState} from 'react';
import { Alert, FormGroup, Input } from 'reactstrap';
import { RiDeleteBin5Line } from 'react-icons/ri'

function AddThought(props) {
    
    const [thoughts, setThoughts] = useState([]);

    function addThought(e) {
        if(e.keyCode == 13){
            var text = document.getElementById("thought").value;
            document.getElementById("thought").value = ''
            thoughtHandler(text)
        }
    }

    function thoughtHandler(t) {
        var trail = thoughts;
        var id = thoughts.length;
        trail.push({id:id, text:t})
        setThoughts([... trail])
    }

    function deleteThought(id) {
        var tt = thoughts;
        console.log(tt.length);
        tt.pop(id)
        console.log(tt.length);

    }

    useEffect(()=>{
        console.log(thoughts);
    },[thoughts.length])

    return (
        <div className="addIn" id="addthought">
        <h6>Thoughts are shorts and sequentials</h6>
        <FormGroup>
            <Input
                type="text"
                id="thought"
                onKeyDown={(e)=>{addThought(e)}}
            />
        </FormGroup>

        <div id="innerthoughts">
        {
            thoughts.length > 0 ? 

            thoughts.map((t,i)=>(
                <div key={i}>
                    <Alert color="secondary">
                        {t.text}
                        <RiDeleteBin5Line onClick={()=>deleteThought(t.id)}/>
                    </Alert>
                    
                </div>
            ))
             : 
            'no'
        }
        </div>

        </div>
    );
}

export default AddThought;
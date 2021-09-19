import React, {useState, useEffect} from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function AddDate(props) {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [option, setOption] = useState(false);

    function dateHandler(e) {
        setOption(false)
        setDate(e.target.value)
        console.log(date);
    }

    function timeHandler(e) {
        setOption(false)
        setTime(e.target.value)
        console.log(time);
    }

    function rightNowHandler(e) {
        if(e.target.checked){
            setOption(true)

            let year = new Date().getFullYear();
            let month = new Date().getMonth();
            let day = new Date().getDay();   
            setDate(year + "-" + month + "-" + day)

            let hour = new Date().getHours();
            let minutes = new Date().getMinutes(); 
            setTime(hour + ":" + minutes)
        }
    }

    return (
        <div className="addIn">
            <Form>
            <FormGroup check>
                <Label check> ¿Is it right now?</Label>
                <Input 
                    type="checkbox" 
                    name="now" 
                    onClick={(e)=>rightNowHandler(e)}
                />
                {' '}
            </FormGroup>
            <hr className="innerHr"></hr>
            <FormGroup>
                <Label for="exampleDatetime">Datetime</Label>
                <Input
                    type="date"
                    name="datetime"
                    id="exampleDatetime"
                    placeholder="datetime placeholder"
                    onChange={(e)=>dateHandler(e)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleTime">Time</Label>
                <Input
                type="time"
                name="time"
                id="exampleTime"
                placeholder="time placeholder"
                onChange={(e)=>timeHandler(e)}
                />
            </FormGroup>
            </Form>            
        </div>
    );
}

export default AddDate;
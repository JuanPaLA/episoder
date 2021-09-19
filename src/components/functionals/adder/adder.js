import React, {useState, useEffect} from 'react'
import { GrAddCircle } from 'react-icons/gr'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import InnderAdder from './innderAdder';
export default function Adder() {
          
    const [modal, setModal] = useState(false);
    
    function toggle() {
        setModal(!modal)
        console.log(modal);
    }

    return (
        <div id="adder">
            <div>
            
            <GrAddCircle onClick={toggle} size="120px"/>
        
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <InnderAdder/>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            </div>
        </div>
    )
}

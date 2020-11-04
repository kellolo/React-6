import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, Badge} from 'reactstrap';
import {Link} from "react-router-dom";

const ModalExample = (props) => {
    let {contacts} = props;

    const [modal, setModal] = useState(false);

    const [cont, setCont] = useState('Petrovich');

    const toggle = () => setModal(!modal);

    const handleClick = evt => {
        let val = evt.target.value;
        setCont(val);
        setModal(!modal)
    }

    let contactsArr = contacts.map((con,i) => <ListGroupItem tag="button" action key={i} value={con} onClick={handleClick}> {con} </ListGroupItem>)

    return (
        <div>
            <h6>Contact:  <Badge color="info">{cont}</Badge></h6>
            <Button color="secondary mt-2" onClick={toggle}>Select dialogs</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Select Dialog</ModalHeader>
                <ModalBody>
                    <ListGroup>
                        {contactsArr}
                    </ListGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;
import './style.css'
import React, { Component, Fragment } from 'react'
import { Button, Modal, ListGroup } from 'react-bootstrap'

export default class ChatUsersModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }
    
    componentDidMount() {
        
    }
    
    componentDidUpdate() {
        
    }

    handleClose = () => {
        this.setState({show: false})
    }

    handleShow = () => {
        this.setState({show: true})
    }

    render() {
        let { show } = this.state;
        let {userList} = this.props;
        console.log(userList);
        
        return (
            <Fragment>
                <div className="chat-users-modal d-flex flex-column  align-items-center">
                    <Button variant="outline-success" onClick={this.handleShow}>
                        Собеседники
                    </Button>

                    <Modal
                        show={show}
                        onHide={this.handleClose}
                        backdrop="static"
                        keyboard={false}
                        scrollable={true}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Пользователи чата</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ListGroup>
                                {userList.map((user) => (
                                        <ListGroup.Item className="mt-1 mb-1" variant="light" key={user.id}>{user.username}</ListGroup.Item>
                                    ))}
                            </ListGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-secondary" onClick={this.handleClose}>
                                Закрыть
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Fragment>
        )
    }
}
    
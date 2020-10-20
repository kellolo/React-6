import React, { Component, Fragment } from 'react'
import { Button, Modal, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import './style.css'

export default class ChatModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            value: []
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

    handleChange = (val) => {
        this.setState({value: val})
    }

    render() {
        let { show, value } = this.state;
        let {userList} = this.props;
        return (
            <Fragment>
                <div className="chat-modal d-flex flex-column  align-items-center pt-3">
                    <Button variant="outline-success" onClick={this.handleShow}>
                        Новый чат
                    </Button>

                    <Modal
                        show={show}
                        onHide={this.handleClose}
                        backdrop="static"
                        keyboard={false} 
                        scrollable={true}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Выберите собеседников</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ToggleButtonGroup className="d-flex flex-column" type="checkbox" value={value} onChange={this.handleChange}>
                                {userList.map((user) => (
                                    <ToggleButton className="mt-1 mb-1 rounded-0" variant="light" value={user.id} key={user.id}>{user.username}</ToggleButton>
                                ))}
                            </ToggleButtonGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-secondary" onClick={this.handleClose}>
                                Закрыть
                            </Button>
                            <Button variant="outline-success">Создать</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Fragment>
        )
    }
}
    
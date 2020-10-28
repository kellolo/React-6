import './style.css'
import React, {Component, Fragment} from 'react'
import Messages from '../Messages/Messages.jsx'
import ChatList from '../ChatList/ChatList.jsx'
import ChatDialog from "../ChatDialog/ChatDialog.jsx";


class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: ['Petrovich', 'Alekseich', 'Vasilych']
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {

        return (

                <div className="w-100 d-flex flex-column align-items-center">
                    <h1 className="text-primary">  { this.props.chatName ? this.props.chatName : 'Welcome' } </h1>
                    <div className="d-flex ">
                        <div className="mr-3">
                            <ChatList />
                            <div className="mt-5">
                                <ChatDialog  contacts={this.state.contacts}/>
                            </div>
                        </div>
                        <Messages />
                    </div>
                </div>


        )
    }
}

export default Layout
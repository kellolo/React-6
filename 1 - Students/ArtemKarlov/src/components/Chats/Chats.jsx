import './style.css';
import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ChatAdd from '../ChatAdd/ChatAdd.jsx';
import ChatList from '../ChatList/ChatList.jsx';


class Chats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    addChat = (contactName) => {
        const {chats} = this.props;
        const {contacts} = this.props;        

        if (contactName !== null) {         

            const chatContact = contacts.find(contact => contact.name === contactName);
    
            const chat = {};
            chat.id = `ch_${chats.length}`;
            chat.title = chatContact.name;
            chat.avatarUrl = chatContact.avatarUrl;
            chat.status = chatContact.citation;
    
            // this.setState({
            //     chats: [...chats, chat]
            // });
        }
    }

    componentDidMount() {
        
    }

    componentDidUpdate() {
      
    }

    render() {         
        const { chats } = this.props;
        const {contacts} = this.props;
        const contactList = contacts.map((contact) => contact.name);
        
        
        
        return (
            <Fragment>
                <section className="layout__chats chats">
                    <div className="chats__header">
                        <h2 className="chats__title">Chats</h2>
                        <ChatAdd contacts={contactList} getContactName={ this.addChat }/>
                    </div>
                    <ChatList chats={chats} />
                </section>                
            </Fragment>           
        );
    }
}

const mapStateToProps = ({chatsReducer}) => ({
    chats: chatsReducer.chats,
});
const mapDispatchToProps = dispatch => bindActionCreators({/*addChat*/}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Chats);
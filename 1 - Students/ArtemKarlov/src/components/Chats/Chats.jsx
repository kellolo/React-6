import './style.css';
import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addChat} from '../../store/actions/chats.actions.js';

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
    
            const chatId = `ch_${chats.length}`;
            const chatTitle = chatContact.name;
            const chatAvatarUrl = chatContact.avatarUrl;
            const chatStatus = chatContact.citation;

            this.props.addChat(chatId, chatTitle, chatAvatarUrl, chatStatus);
    
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
const mapDispatchToProps = dispatch => bindActionCreators({addChat}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Chats);
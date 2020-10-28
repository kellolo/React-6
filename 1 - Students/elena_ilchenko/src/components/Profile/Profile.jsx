import React, { Fragment } from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goBack } from 'connected-react-router'

let Profile = props => {
    const cls = [];

    if (props.isOpen) {
        cls.push('open');
    }

    let handleClick = () => {
        props.goBack();
    }
    return (
        
        <Fragment>
            <div className={`Profile ${cls.join(' ')}`}>
                PROFILE<br/>
                
                    
                <button 
                    className="close-profile"
                    onClick={ () => handleClick()}
                    >
                    Close
                </button>
            
            </div>
        
        </Fragment>
    )
}

const mapStateToProps = () => ({
    
});
const mapDispatchToProps = dispatch => bindActionCreators({ goBack }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
    
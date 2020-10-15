import React, { Fragment } from 'react';
import { Button } from 'reactstrap';
import './style.css';

export default (props) => {
    let { sendM }= props;
  return (
    <Fragment>
      <Button outline color="secondary" onClick={ sendM } className="sendBtn">Send</Button>{' '}
    </Fragment>
  );

}
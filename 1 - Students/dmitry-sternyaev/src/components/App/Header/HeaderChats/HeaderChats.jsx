import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class HeaderChats extends React.Component {
    render() {
        return (
            <Navbar variant="dark">
                <Form inline className="mr-auto">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" disabled={true}/>
                    <Button variant="dark" disabled={true}>Search</Button>
                </Form>
            </Navbar>
        );
    }
}
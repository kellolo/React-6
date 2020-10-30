import React, { Component } from 'react'

import Router from '../../Router'

import Header from 'components/Header/Header'

import './style.css'

export default class Layout extends Component {

    render() {
        return (
            <>
                <Header/>
                <Router />
            </>
        )
    }
}
import './style.css'
import React from 'react'

class Okbtn extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick(e) {
        e.preventDefault()
        console.log('Норм!')
    }
    render() {
        return (
            <button onClick={(e) => this.handleClick(e)}>Norm</button>
        )
    }
}

export default Okbtn
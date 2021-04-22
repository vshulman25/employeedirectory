import React, { Fragment } from 'react';
import API from '../../utils/API'
import '../Header/style.css'

export default class Header extends React.Component {
    componentDidMount() {
        console.log(API.getRandomUser())
    }
    render() {
        return (
            <>
                <header > Employee Directory </header>
            </>
        )
    }
}

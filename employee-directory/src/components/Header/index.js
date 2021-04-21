import React, { Fragment } from 'react';
import API from '../../utils/API'

export default class Header extends React.Component {
    componentDidMount() {
        console.log(API.getRandomUser())
    }
    render() {
        return (
            <>
                <header> Employee Directory </header>
            </>
        )
    }
}

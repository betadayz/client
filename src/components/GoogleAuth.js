import React, { Component } from 'react'

export default class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client: auth2', () => {
            window.gapi.client.init({
                clientId: '498748274064-9e3n2e3kbs67ruh1tjnn8vnriqcpbep8.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }
    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    }
}

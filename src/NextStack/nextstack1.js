import { Typography } from '@material-ui/core';
import React from 'react';
import rb from '../images/books.jpg';

export default class Nextstack1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div
                style={{
                    background: "url(" + rb + ")",
                    height: "100vh",
                    backgroundSize: "cover"
                }}>
                <Typography variant="h1" style={{color: "white", textAlign: 'center', padding:100}}>
                    <b>
                        <i>
                            DOCUMENT YOUR APIS THE SMART WAY
                        </i>
                    </b>
                </Typography>
            </div>
        )
    }
}
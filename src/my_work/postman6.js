import React from 'react';
import {
    AppBar, Toolbar, Typography, CardContent, Card
} from "@material-ui/core"

export default class Postman6 extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardContent style={{ textAlign: "left" }}>
                        <Typography variant="h1" color="textPrimary">Nextstacks</Typography>
                    </CardContent>
                </Card>

            </div>
        )
    }
}
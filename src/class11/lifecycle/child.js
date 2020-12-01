import React from 'react';
import {
    TextField
} from "@material-ui/core"

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            la: 0
        }

    }
    componentDidMount() {
        console.log("from component did mount");
        this.setState({
            la: this.props.vala
        })
    }
    componentDidUpdate() {
        if (this.props.vala !== this.state.la) {
            this.setState({
                la: this.props.vala
            })
        }

    }
    componentWillUnmount() {
        console.log("from component will unmount");
    }
    render() {
        return (
            <div>
                <h1>Hello from child
            <TextField
                        value={this.state.la}
                        onChange={(e) => {
                            this.setState({
                                la: e.target.value
                            })
                        }}
                    /></h1>

            </div>
        )
    }
}
import React from 'react';
import Postman2 from './postman2';
import Postman3 from './postman3';
import Postman4 from './postman4';
import Postman5 from './postman5';
import Postman from './postman';
import Postman41 from './postman41';
import Postman51 from './postman51';
import { BrowserRouter , Link, Route } from 'react-router-dom';
export default class Postmanrouter extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Route exact path="/" component={Postman} />
                <Route exact path="/post3" component={Postman3} />
                <Route exact path="/post4" component={Postman4} />
                <Route exact path="/post5" component={Postman5} />
                <Route exact path="/post41" component={Postman41} />
                <Route exact path="/post51" component={Postman51} />
                </BrowserRouter>
            </div>
        )
    }
}
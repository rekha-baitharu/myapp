import React from 'react';

import Nextstack1 from './nextstack2';
import Nextstack2 from './nextstack2';
import Nextstack12 from './nextstack12';
import Nextstack3 from './nextstack3';
import Nextstack4 from './nextstack4';
import Nextstack5 from './nextstack5';
import Nextstack345 from './nextstack345';
import{
    BrowserRouter,
    Link,
    Route
} from 'react-router-dom';
export default class NextstackRouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <Route exact path="/" component={Nextstack12} />
            <Route exact path="/nextstack1" component={Nextstack1} />
            <Route exact path="/nextstack2" component={Nextstack2} />
            <Route exact path="/nextstack3" component={Nextstack3} />
            <Route exact path="/nextstack4" component={Nextstack4} />
            <Route exact path="/nextstack5" component={Nextstack5} />
            <Route exact path="/nextstack345" component={Nextstack345} />
            </BrowserRouter>
            )
    }
}
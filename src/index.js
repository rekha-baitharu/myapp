import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as ServiceWorker from './serviceWorker';

import Comp1 from './comp1';
import Rekha from './class1/variable';
import Adder from './class1/adder';
import Add from './class1/add';
import Arr from './class2/arr';
import Todo from './class2/todo';
import TodoList from './class2/todolist';
import Todoo from './class2/todoo';
import Var from './class1/var_mat';
import AddMat from './class1/add_mat';
import Rb from './rb'
import Get from './class6/get';
import Post from './class6/post';
import Getlist from './class6/getlist';
import Async from './class7/async';
import Delay from './class8/delay';
import Getdata from './class11/getdata';
import Getupdate from './class11/getupdate';
import Snackbarr from './class8/snackbar';
import Main from './class11/lifecycle/main';
import Router from './class12/router';
import Appbarr from './class12/appbar';
import Redirectt from './class13/redirect';
import Postman1 from './my_work/postman1';
import Postman2 from './my_work/postman2';
import Postman3 from './my_work/postman3';
import Postman4 from './my_work/postman4';
import Postman5 from './my_work/postman5';
import Postman from './my_work/postman';
import Postmanrouter from './my_work/postmanrouter';
import Postman41 from './my_work/postman41';
import Postman51 from './my_work/postman51';
import Nextstack1 from './NextStack/nextstack1';
import Nextstack2 from './NextStack/nextstack2';
import Nextstack12 from './NextStack/nextstack12';
import Nextstack3 from './NextStack/nextstack3';
import Nextstack4 from './NextStack/nextstack4';
import Nextstack5 from './NextStack/nextstack5';
import Nextstack345 from './NextStack/nextstack345';
import NextstackRouter from './NextStack/nextstackrouter';
ReactDOM.render(<Nextstack2 />, document.getElementById('root'));

//If you want your app to work offline and load faster,you can change
//unregister() to register() below. Note this comes with some pitfalls
//Learn more about service workers:https://bit.ly/CRA-PWA
ServiceWorker.unregister();
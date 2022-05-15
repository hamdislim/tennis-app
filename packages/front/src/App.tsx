import React from 'react';
import { Button } from 'antd';
import logo from './assets/logo.svg';
import classes from './App.module.scss';

function App() {
    return (
        <div className={classes.App}>
            <header className={classes['App-header']}>
                <img src={logo} className={classes['App-logo']} alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Button type="primary" href="https://reactjs.org">
                    Learn React
                </Button>
            </header>
        </div>
    );
}

export default App;

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import React from 'react';
import {CounterSettings} from "./CounterComponent/CounterSettings/CounterSettings";
import {Counter} from "./CounterComponent/Counter/Counter";
import {Container, Grid} from "@mui/material";
import {CounterBackground} from "./CounterComponent/Counter/CounterBackground";

function App() {
    return (
        <Container fixed>
            <Grid justifyContent={'center'} alignItems={'center'} height={'100vh'} container>
                <Grid justifyContent={'center'} direction={"row-reverse"} gap={'20px'} container>
                    <CounterSettings/>
                    <Counter/>
                </Grid>
            </Grid>
            <CounterBackground/>
        </Container>
    );
}

export default App;

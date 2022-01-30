import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import React, {useLayoutEffect, useState} from 'react';
import {CounterSettings} from "./CounterComponent/CounterSettings/CounterSettings";
import {Counter} from "./CounterComponent/Counter/Counter";
import {Container, Grid} from "@mui/material";
import {CounterBackground} from "./CounterComponent/Counter/CounterBackground";

export type SettingAdditionType = {
    minAddition: number
    maxAddition: number
    errorMin: boolean
    errorMax: boolean
}
export type ActionSettingsType = 'minAddition' | 'maxAddition';
export type ChangeSettingsType = {
    type: ActionSettingsType,
    value: number
}

function App() {
    const [defaultMinAddition, defaultMaxAddition] = [0, 10];
    const minAddition = localStorage.getItem('minAddition');
    const maxAddition = localStorage.getItem('maxAddition');

    const [counter, setCounter] = useState<number>(JSON.parse(minAddition || '') || defaultMinAddition);
    const [settings, setSettings] = useState<SettingAdditionType>({
        minAddition: defaultMinAddition,
        maxAddition: defaultMaxAddition,
        errorMin: false,
        errorMax: false
    });

    useLayoutEffect(() => {

        if (minAddition) {
            settings.minAddition = JSON.parse(minAddition);
        }

        if (maxAddition) {
            settings.maxAddition = JSON.parse(maxAddition);
        }

        setSettings({...settings});
    }, []);

    const onClickSetHandler = () => {
        localStorage.setItem('maxAddition', JSON.stringify(settings.maxAddition));
        localStorage.setItem('minAddition', JSON.stringify(settings.minAddition));

        setSettings({...settings});
        setCounter(settings.minAddition);
    }
    const onChangeSettings = (action: ChangeSettingsType) => {
        settings[action.type] = action.value;
        settings.errorMin = settings.minAddition < 0 || settings.minAddition >= settings.maxAddition;
        settings.errorMax = settings.maxAddition < 0 || settings.maxAddition <= settings.minAddition;
        setSettings({...settings});
    }
    const getSettingError = () => (settings.errorMin || settings.errorMax);
    const getCrashStorage = () => {
        if (localStorage.getItem('minAddition') !== JSON.stringify(settings.minAddition)) {
            return true;
        } else if (localStorage.getItem('maxAddition') !== JSON.stringify(settings.maxAddition)) {
            return true;
        }

        return false;
    }

    return (
        <Container fixed>
            <Grid justifyContent={'center'} alignItems={'center'} height={'100vh'} container>
                <Grid justifyContent={'center'} direction={"row-reverse"} gap={'20px'} container>
                    <CounterSettings settings={settings}
                                     onClickSetHandler={onClickSetHandler}
                                     onChangeSettings={onChangeSettings}
                    />

                    <Counter minAddition={settings.minAddition}
                             maxAddition={settings.maxAddition}
                             counter={counter}
                             setCounter={setCounter}
                             getSettingError={getSettingError()}
                             getCrashStorage={getCrashStorage()}
                    />
                </Grid>
            </Grid>
            <CounterBackground/>
        </Container>
    );
}

export default App;

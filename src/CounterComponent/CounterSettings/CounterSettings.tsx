import {Paper, Stack, TextField, Typography} from '@mui/material';
import React, {ChangeEvent, useLayoutEffect} from 'react';
import {ButtonCustom} from "../ButtonCustom/ButtonCustom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {setSetting, setSettingFromLocalStorageTC, setSettingTC} from "../../state/setting.reducer";
import {resetCounter} from "../../state/counter-reducer";

export type SettingAdditionType = {
    minAddition: number
    maxAddition: number
    errorMin: boolean
    errorMax: boolean
}

export const CounterSettings = () => {
    const dispatch = useDispatch();
    const settings = useSelector((state: AppRootStateType) => state.setting);

    useLayoutEffect(() => {
        dispatch(setSettingFromLocalStorageTC());
    }, []);

    // Function
    const onClickSetHandler = () => {
        dispatch(setSetting({...settings}));
        dispatch(setSettingTC());
        dispatch(resetCounter(settings.minAddition));
    }

    // Handler
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = JSON.parse(e.target.value);
        const errorMin = value < 0 || value >= settings.maxAddition;

        dispatch(setSetting({...settings, minAddition: value, errorMin}));
    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = JSON.parse(e.target.value);
        const errorMax = settings.maxAddition < 0 || settings.maxAddition <= value;
        dispatch(setSetting({...settings, maxAddition: value, errorMax}));
    }

    return (
        <Paper sx={{padding: '20px', display: "flex", flexDirection: "column", justifyContent: 'space-between'}}>
            <Typography textAlign={'center'} mb={'15px'} variant="h6" color={'#757474'}>
                Settings
            </Typography>

            <Stack spacing={2}>
                <TextField onChange={onChangeMinHandler} size={"small"}
                           value={settings.minAddition}
                           type="number"
                           InputLabelProps={{shrink: true}}
                           label={settings.errorMin ? "Incorrect value" : "Start value"}
                           error={settings.errorMin}
                />

                <TextField onChange={onChangeMaxHandler} size={"small"}
                           value={settings.maxAddition}
                           type="number"
                           InputLabelProps={{shrink: true}}
                           label={settings.errorMax ? "Incorrect value" : "Max value"}
                           error={settings.errorMax}
                />
            </Stack>

            <Stack sx={{marginTop: '15px'}}>
                <ButtonCustom variant={'outlined'} disabled={settings.errorMin || settings.errorMax} onClick={onClickSetHandler}>{'Set'}</ButtonCustom>
            </Stack>
        </Paper>
    );
}

import {Display} from "../Display/Display";
import {ButtonCustom} from "../ButtonCustom/ButtonCustom";
import {Paper, Stack, Typography} from "@mui/material";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {CounterType, plusCounter, resetCounter} from "../../state/counter-reducer";
import {SettingAdditionType} from "../CounterSettings/CounterSettings";

export const Counter = () => {
    // Store
    const dispatch = useDispatch();
    const {counter} = useSelector<AppRootStateType, CounterType>((state) => state.counter);
    const {minAddition, maxAddition, errorMin, errorMax} =
        useSelector<AppRootStateType, SettingAdditionType>((state) => state.setting);

    // Function
    const getCrashStorage = (): boolean => {
        if (localStorage.getItem('minAddition') !== JSON.stringify(minAddition)) {
            return true;
        } else if (localStorage.getItem('maxAddition') !== JSON.stringify(maxAddition)) {
            return true;
        }

        return false;
    }
    const getSettingError = (): boolean => (errorMin || errorMax);
    const isValidButton: boolean = getSettingError() || getCrashStorage();

    // Handler
    const setAddition = () =>  dispatch(plusCounter());
    const resetAddition = () => dispatch(resetCounter(minAddition));

    return (
        <Paper sx={{padding: '20px', display: "flex", flexDirection: "column", justifyContent: 'space-between'}}>
            <Typography
                textAlign={'center'}
                mb={'15px'}
                variant="h6"
                color={'#757474'}
            >
                Counter
            </Typography>

            <Display counter={counter}
                     maxAddition={maxAddition}
                     getSettingError={getSettingError()}
                     getCrashStorage={getCrashStorage()}/>

            <Stack spacing={2}
                   direction={'row'}
                   sx={{marginTop: "15px"}}>

                <ButtonCustom fullWidth variant={"contained"}
                              disabled={isValidButton || counter === maxAddition}
                              onClick={setAddition}
                >{'Add'}</ButtonCustom>

                <ButtonCustom fullWidth variant={"contained"}
                              disabled={isValidButton || counter <= minAddition}
                              onClick={resetAddition}
                >{'Reset'}</ButtonCustom>
            </Stack>
        </Paper>
    )
}
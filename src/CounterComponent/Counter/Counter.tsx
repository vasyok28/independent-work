import {Display} from "../Display/Display";
import {ButtonCustom} from "../ButtonCustom/ButtonCustom";
import {Paper, Stack, Typography} from "@mui/material";
import React from "react";

export type CounterType = {
    counter: number
    setCounter: (value: number) => void
    minAddition: number
    maxAddition: number
    getSettingError: boolean
    getCrashStorage: boolean
}

export const Counter = ({counter, setCounter, minAddition, maxAddition, getSettingError, getCrashStorage}: CounterType) => {
    const setAddition = () => (counter < maxAddition) ? setCounter(++counter) : null;
    const resetAddition = () => setCounter(minAddition);

    return (
        <Paper sx={{padding: '20px', display: "flex", flexDirection: "column", justifyContent: 'space-between'}}>
            <Typography textAlign={'center'} mb={'15px'} variant="h6" color={'#757474'}>
                Counter
            </Typography>

            <Display counter={counter} maxAddition={maxAddition} getSettingError={getSettingError} getCrashStorage={getCrashStorage}/>

            <Stack spacing={2} direction={'row'} sx={{marginTop: "15px"}}>
                <ButtonCustom fullWidth variant={"contained"} disabled={getSettingError || counter === maxAddition}
                              onClick={setAddition}>{'Add'}</ButtonCustom>

                <ButtonCustom fullWidth variant={"contained"} disabled={getSettingError || counter < maxAddition}
                              onClick={resetAddition}>{'Reset'}</ButtonCustom>
            </Stack>
        </Paper>
    )
}
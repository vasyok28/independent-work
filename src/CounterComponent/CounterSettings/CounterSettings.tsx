import {Paper, Stack, TextField, Typography} from '@mui/material';
import React, {ChangeEvent} from 'react';
import {ButtonCustom} from "../ButtonCustom/ButtonCustom";
import {ChangeSettingsType, SettingAdditionType} from "../../App";

type CounterSettingsPropsType = {
    settings: SettingAdditionType
    onClickSetHandler: () => void
    onChangeSettings: (action: ChangeSettingsType) => void
}

export const CounterSettings: React.FC<CounterSettingsPropsType> = ({onClickSetHandler, onChangeSettings, settings}, ...props) => {

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChangeSettings({type: 'minAddition', value: JSON.parse(e.target.value)});
    }

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChangeSettings({type: 'maxAddition', value: JSON.parse(e.target.value)});
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
                <ButtonCustom variant={'outlined'}
                              disabled={settings.errorMin || settings.errorMax}
                              onClick={onClickSetHandler}
                >{'Set'}</ButtonCustom>
            </Stack>
        </Paper>
    );
}

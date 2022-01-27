import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import style from './Display.module.css'

type DisplayPropsType = {
    counter: number,
    maxAddition: number,
    getSettingError: boolean
    getCrashStorage: boolean
}

export const Display = ({counter, maxAddition, getSettingError, getCrashStorage}: DisplayPropsType) => {
    const message = getSettingError
        ? <span className={style.max}>Incorrect value</span>
        : getCrashStorage ? 'enter values and press \'set\''
        : counter;

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} border={"1px dotted #ccc"}
             padding={"10px"} minHeight={"100px"} bgcolor={'#f4f4f4'} minWidth={'200px'}>

            <Typography className={counter === maxAddition ? style.max : ''}>
                {message}
            </Typography>
        </Box>
    );
}
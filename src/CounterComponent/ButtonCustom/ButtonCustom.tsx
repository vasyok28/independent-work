import Button from "@mui/material/Button";
import {ButtonProps} from "@mui/material/Button/Button";

type ButtonCustomType = ButtonProps & {
    children?: string
}

export const ButtonCustom = ({children, ...restProps}: ButtonCustomType) => {
    return (<Button {...restProps} >{children}</Button>);
}
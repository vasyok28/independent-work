import { ButtonPropsType } from "../../Counter/Counter";

export const ResetButton = ({counter, method}: ButtonPropsType) => {
    return <button disabled={!counter} className="button" onClick={method}>Reset</button>;
}
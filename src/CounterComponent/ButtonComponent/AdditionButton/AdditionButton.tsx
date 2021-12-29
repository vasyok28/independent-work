import { ButtonPropsType } from "../../Counter/Counter";

export const AdditionButton = ({counter, method}: ButtonPropsType) => {
    return <button disabled={counter === 5} className="button" onClick={method}>Add</button>;
}
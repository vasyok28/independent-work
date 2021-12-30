import { ButtonPropsType } from "../../Counter/Counter";

export const AdditionButton = ({counter, method, maxAddition}: ButtonPropsType) => {
    return <button disabled={counter === maxAddition} className="button" onClick={method}>Add</button>;
}
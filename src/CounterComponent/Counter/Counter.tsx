import {Display} from "../Display/Display";
import {AdditionButton} from "../ButtonComponent/AdditionButton/AdditionButton";
import {ResetButton} from "../ButtonComponent/ResetButton/ResetButton";
import {Button} from "../ButtonComponent/Button/Button";
import style from './Counter.module.css'

export type CounterType = {
    counter: number
    setCounter: (value: number) => void
    defaultAddition: number
    maxAddition: number
}
export type ButtonPropsType = {
    counter: number
    maxAddition?: number
    method: () => void
}

export const Counter = ({counter, setCounter, defaultAddition, maxAddition}: CounterType) => {
    const setAddition = () => (counter < maxAddition) ? setCounter(++counter) : null;
    const resetAddition = () => setCounter(defaultAddition);

    return (
        <div className={style.counter}>
            <Display counter={counter} maxAddition={maxAddition}/>

            <div className="buttonWrapper">
                <div className={style.title}>Two different components</div>
                <div className={style.buttons}>
                    <AdditionButton counter={counter} maxAddition={maxAddition} method={setAddition}/>
                    <ResetButton counter={counter} method={resetAddition}/>
                </div>
            </div>

            <div className="buttonWrapper">
                <div className={style.title}>One universal component</div>
                <div className={style.buttons}>
                    <Button title='Add' disabled={counter === maxAddition} method={setAddition}/>
                    <Button title='Reset' disabled={counter === defaultAddition} method={resetAddition}/>
                </div>
            </div>
        </div>
    )
}
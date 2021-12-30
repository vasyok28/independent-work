import style from './Display.module.css'

export const Display = ({counter, maxAddition}: { counter: number, maxAddition: number }) => {
    return (
        <div className={style.display}>
            <span className={counter === maxAddition ? style.max : ''}>{counter}</span>
        </div>
    );
}
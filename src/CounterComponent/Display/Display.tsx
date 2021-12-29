import style from './Display.module.css'

export const Display = ({counter}: { counter: number }) => {
    return (
        <div className={style.display}>
            <span className={counter > 4 ? style.max : ''}>{counter}</span>
        </div>
    );
}
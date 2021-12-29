type ButtonType = {
    title: string
    disabled?: boolean
    method: () => void
}

export const Button = ({title, disabled = false, method}: ButtonType) => {
    return (<button disabled={disabled} className="button" onClick={method}>{title}</button>);
}
const InputCustomer = ({ state, validForm, inputMode, setState, placeholder, maxLength, className }) => {
    const style = {
        border: state === '' ? (validForm ? '1px solid var(--LightGrayishViolet)' : '1px solid var(--ErrorColor)') : '1px solid var(--LightGrayishViolet)',
    }

    const onFocus = (event) => {
        event.style.border = '2px solid var(--VeryDarkViolet)'
    }

    const onBlur = (event) => {
        event.style.border = '1px solid var(--LightGrayishViolet)'
    }

    return (
        <input className={className} style={style} onFocus={(event) => onFocus(event.target)} onBlur={(event) => onBlur(event.target)} inputMode={inputMode} value={state} onChange={(event) => setState(event.target.value)} placeholder={placeholder} maxLength={maxLength} />
    )
}

export default InputCustomer
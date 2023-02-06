import InputCustomer from '../InputCustomer/InputCustomer'
import { useState } from 'react'
import './Form.css'

const Form = ({ name, setName, numberCard, setNumberCard, month, setMonth, year, setYear, cvc, setCvc, setCard }) => {
    const [validForm, setValidForm] = useState(true)

    const formatCardNumber = value => {
        const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g
        const onlyNumbers = value.replace(/[^\d]/g, '')

        
        const number = onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
            [$1, $2, $3, $4].filter(group => !!group).join(' ')
        )
        setNumberCard(number)
    }

    const formatMonth = value => {
        const onlyNumbers = value.replace(/[^\d]/g, '')

        if(onlyNumbers > 12) {
            return setMonth(12)
        }

        setMonth(onlyNumbers)
    }

    const formatYear = value => {
        const onlyNumbers = value.replace(/[^\d]/g, '')
        setYear(onlyNumbers)
    }

    const formatCvc = value => {
        const onlyNumbers = value.replace(/[^\d]/g, '')
        setCvc(onlyNumbers)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(name === '' || numberCard === '' || month === '' || year === '' || cvc === '' || numberCard.length < 19) {
           setValidForm(false)
           return
        }

        setCard({name: name, number: numberCard, exp: `${month}/${year}`, cvc: cvc})
    }

    return (
        <form className='form-card' onSubmit={handleSubmit}>
        <div className='input-customer'>
            <span className='name-input'>CARDHOLDER NAME</span>
            <InputCustomer state={name} validForm={validForm} inputMode='text' setState={setName} placeholder='e.g. Jane Appleseed' />
            {name === '' ? (
                validForm ? null : (
                    <div className='error'>Can't be blank</div>
                )
            ) : null}
        </div>
        <div className='input-customer'>
            <span className='name-input'>CARD NUMBER</span>
            <InputCustomer state={numberCard} validForm={validForm} inputMode='numeric' setState={formatCardNumber} placeholder='e.g. 1234 5678 9123 0000' maxLength={19} />
            {numberCard === '' ? (
                validForm ? null : (
                    <div className='error'>Can't be blank</div>
                )
            ) : (validForm ? null : (numberCard.length === 19 ? null : (
                    <div className='error'>Number card must be 16 numbers</div>
                )
            ))}
        </div>
        <div className='date-card'>
            <div className='input-customer date'>
                <span className='name-input'>EXP. DATE (MM/YY)</span>
                <div className='input-date'>
                    <InputCustomer className='card-month' state={month} validForm={validForm} inputMode='numeric' setState={formatMonth} placeholder='MM' maxLength={2} />
                    <InputCustomer className='card-year' state={year} validForm={validForm} inputMode='numeric' setState={formatYear} placeholder='YY' maxLength={2} />
                </div>
                {month === '' || year === '' ? (
                    validForm ? null : (
                        <div className='error'>Can't be blank</div>
                    )
                ) : null}
            </div>
            <div className='input-customer date'>
                <span className='name-input'>CVC</span>
                <InputCustomer state={cvc} validForm={validForm} inputMode='numeric' setState={formatCvc} placeholder='e.g. 123' maxLength={3} />
                {cvc === '' ? (
                    validForm ? null : (
                        <div className='error'>Can't be blank</div>
                    )
            ) : null}
            </div>
        </div>

        <button type='submit' className='button-card'>Confirm</button>
    </form>
    )
}

export default Form
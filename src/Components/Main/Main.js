import Form from '../Form/Form'
import Result from '../Result/Result'
import { useState } from 'react'
import './Main.css'

const Main = ({ name, setName, numberCard, setNumberCard, month, setMonth, year, setYear, cvc, setCvc }) => {
    const [card, setCard] = useState({name: '', number: '', exp: '', cvc: ''})

    const reset = () => {
        setName('')
        setNumberCard('')
        setMonth('')
        setYear('')
        setCvc('')
        setCard({name: '', number: '', exp: '', cvc: ''})
    }

    return (
        <main>
            {card.name === '' || card.number === '' || card.exp === '' || card.cvc === '' ? 
                <Form name={name} setName={setName} numberCard={numberCard} setNumberCard={setNumberCard} month={month} setMonth={setMonth} year={year} setYear={setYear} cvc={cvc} setCvc={setCvc} setCard={setCard} />
                :
                <Result card={card} reset={reset} />
            }
        </main>
    )
}

export default Main
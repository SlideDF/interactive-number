import './App.css'
import Header from "../Components/Header/Header"
import { useState } from 'react'
import Main from '../Components/Main/Main'

const App = () => {
    const [name, setName] = useState('')
    const [numberCard, setNumberCard] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [cvc, setCvc] = useState('')

    return (
        <div className="app">
            <Header name={name} numberCard={numberCard} month={month} year={year} cvc={cvc} />
            <Main name={name} setName={setName} numberCard={numberCard} setNumberCard={setNumberCard} month={month} setMonth={setMonth} year={year} setYear={setYear} cvc={cvc} setCvc={setCvc} />
        </div>
    )
}

export default App
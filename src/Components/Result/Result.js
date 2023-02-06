import './Result.css'
import iconComplete from '../../assets/images/icon-complete.svg'

const Result = ({ card, reset }) => {
    console.log(card)

    return (
        <div className='result-card'>
            <img className='icon-result' src={iconComplete} alt="" />
            <h1 className='title-result'>THANK YOU!</h1>
            <span className='text-result'>We've added your card details</span>
            <button onClick={() => reset()} className='button-card result'>Continue</button>
        </div>
    )
}

export default Result
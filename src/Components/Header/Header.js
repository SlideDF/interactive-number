import './Header.css'
import backCardImg from '../../assets/images/bg-card-back.png'
import frontCardImg from '../../assets/images/bg-card-front.png'
import logoCard from '../../assets/images/card-logo.svg'

const Header = ({ name, numberCard, month, year, cvc }) => {
    return (
        <header>
            <div className='back-card'>
                <img loading='lazy'  className='img-card' src={backCardImg} alt="" />
                <div className='cvc'>{cvc === '' ? '000' : cvc}</div>
            </div>

            <div className='front-card'>
                <img className='img-card' src={frontCardImg} alt="" />
                <img className='logo-card' src={logoCard} alt="" />
                <div className='card-detail'>
                    <span className='card-number'>{numberCard === '' ? '0000 0000 0000 0000' : numberCard}</span>
                </div>
                <span className='card-name'>{name === '' ? '**** *****' : name}</span>
                <span className='card-expiration'>{month === '' ? '00' : month}/{year === '' ? '00' : year}</span>
            </div>
        </header>
    )
}

export default Header
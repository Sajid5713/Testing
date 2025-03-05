import { useState } from 'react'
import logo from '../images/logo.png'

export const Header = () => {

    const [btnName,setBtnName] = useState('login')

    const myFunction = () => {
       (btnName === 'login') ? setBtnName('logout') :setBtnName('login')
    }

    return(
        <div className='header'>
            <div className='logo'>
                <img src={ logo } alt='logo'/>
            </div>
            <div className='nav-links'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li className='filterBtn'>
                        <button onClick={myFunction}>{btnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
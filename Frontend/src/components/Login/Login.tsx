import Logo from '../assets/HbLogo.svg'
import './Login.css'
export default function Login() {
    return (
        <div className='container'>
            
            <div ><a href="#" className='Logo'><img src={Logo} alt="" /></a></div>
            <div className='panel'>
                <div className='topButtons'>
                <button className='Btn'>Giriş Yap</button>
                <button className='Btn'>Üye ol</button>
                </div>
                <div className='input'>
                    <input type="email" placeholder='E-posta adresi' className='inputForm'/>
                </div>
                <div className='password'>
                    <input type="password" placeholder='Şifre' className='inputForm'/>
                </div>
                <button className='loginBtn'>Giriş Yap</button>
                </div>
        </div>
    )
}

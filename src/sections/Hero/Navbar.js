import React,{useState} from 'react'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    const [nav,setNav]=useState(false);
    const changeBg=()=>{
        if(window.scrollY>=50){
            setNav(true);
        }
        else{
            setNav(false);
        }
    }
    window.addEventListener('scroll',changeBg);
  return (
    <nav className={nav?'nav active':'nav'}>
        <a href='/' className="nav-logo">
            <img src={logo} alt="logo"/>
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn"/>
        <label className="menu-icon" htmlFor="menu-btn">
            <span className="nav-icon"></span>
        </label>
        <ul className="nav-menu">
            <li><a href='/' className='active-nav'>Home</a></li>
            <li><a href='#abt'>About</a></li>
            <li><a href='/'>Testimonials</a></li>
            <li><a href='/'>Mentors</a></li>

        </ul>
    </nav>
  )
}

export default Navbar
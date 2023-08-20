import { useNavigate } from "react-router-dom";
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from "../firebase/firebaseconf"
import React, { useState } from "react"
import axios from "axios"
import "./header.css"

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  const navigate = useNavigate();



  function handlesubmit() {
    signInWithPopup(auth, provider)
      .then(
        (data) => {
          // const isFirstLogin = getAdditionalUserInfo(data).isNewUser
          // console.log(data.user);
          // console.log(isFirstLogin);
          const user = data.user

          localStorage.setItem("userId", user.uid)
          
          const payload = {
            userId: user.uid,
            userName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          }
          axios.post(`http://localhost:8200/user-service/user/new`, payload)
            .then(
              response => {
                navigate(`/home`)
              }
            )
            .catch(
              response => {
                console.log(response.data);
              }
            )
            navigate(`/home`)
        }
      )
  }

  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src='./images/logo.png' alt='' />
            </div>
            {/*<ul className='flexSB'>*/}
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/home'>Home</a>
              </li>
              <li>
                <a href='/'>Series</a>
              </li>
              <li>
                <a href='/'>Movies</a>
              </li>
              <li>
                <a href='/'>Pages</a>
              </li>
              <li>
                <a href='/'>Pricing</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i class='fas fa-bell'></i>
            <a href="/admin/addmovie" ><i className='fas fa-user'></i></a>
            <button onClick={handlesubmit}>Sign In / Log In</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

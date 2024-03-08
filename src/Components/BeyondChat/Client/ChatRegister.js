import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
const ChatRegister = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  async function register(ev) {
    ev.preventDefault()
   await axios.post('/register', {username,password})
  }
  return (
    <div className='beyondRegister'>
      <form onSubmit={register}>
         <div className="usernameDiv">
            <label htmlFor="">Username</label>
          <input
            value={username}
            onChange={ev => setUsername(ev.target.value)}
            type="text"
            placeholder="username"
            className="loginInput"
          />
        </div>
                  <div className="passwordDiv">
            <label>Password</label>

          <input
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            type="password"
            placeholder="password"
          className='loginInput'/>
        </div>
          <div className="loginDiv">
            <button className="login">
              <Link to="" className="link">
                Register
              </Link>
            </button>
          </div>
          <div className="end">
            <p className="confirm">Have an account?</p>
            <Link to="/login" className="link">
              Login
            </Link>
          </div>

      </form>
    </div>
  )
}

export default ChatRegister
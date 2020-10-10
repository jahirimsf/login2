import React from 'react'

const Login = (props) => {
const {email,setEmail,password,setPassword,handleLogin,handleSignup, errorEmail,errorPassword,hasAccount,setHasAccount } = props;
    return (
        <section className="login">
            <div className="login_container">              
                    {hasAccount ? 
                    <h1>Sign In</h1>
                    :
                    <h1>Sign Up</h1>
                    }        
                <label>Email</label>
                <input 
                type="email" autoFocus required 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value) }
                 />
                <p className="errorMsg">{errorEmail}</p>
                <label>Password</label>
                <input 
                type="password" 
                autoFocus required 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 />
                <p className="errorMsg">{errorPassword}</p>
                <div className="btn_container">
                    {hasAccount ? 
                    (
                        <>
                        <button 
                        className="btn"
                        onClick={handleLogin}
                        >Sign In</button>
                        <p className="btn_p">Don't have account? <span onClick={(e)=> setHasAccount(!hasAccount)} >Sign Up</span></p>
                        </>
                    )
                    :
                    (
                        <>
                        <button 
                        className="btn"
                        onClick={handleSignup}
                        >Sign Up</button>
                        <p className="btn_p">Have account? <span onClick={(e) => setHasAccount(!hasAccount)}  >Sign In</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login

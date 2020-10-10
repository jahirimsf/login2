import React, {useState,useEffect} from 'react';
import './App.css';
import fireb from './firebase';
import Hero from './Hero';
import Login from './Login';

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  
  const clearInput = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrorMsg = () => {
    setErrorEmail('');
    setErrorPassword('');
  }
  const handleLogin = () => {
    clearInput();
    clearErrorMsg();

    fireb
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err) => {
      switch(err.code) {
        case "auth/invalid-email":
        case "auth/user-not-found":
        case "auth/email-already-in-use":
        case "auth/user-disabled":
          setErrorEmail(err.message);
          break;
          case "auth/wrong-password":
            setErrorPassword(err.message);
            break;
      }
    })
  };

  const handleSignup = () => {
    clearErrorMsg();
    clearInput();
    fireb
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch(err.code){
        case "auth/invalid-email":
          case "auth/email-already-in-use":
            setErrorEmail(err.message);
            break;
            case "auth/weak-password":
              setErrorPassword(err.message);
              break;          
      }
    })
  };

  const handleLogout = () => {
    fireb.auth().signOut();
  }

  const authListener = () => {

    fireb.auth().onAuthStateChanged((user) => {
      if(user){

        setUser(user)
      } else {
        setUser("");
      }
    })
  };

  useEffect(()=> {
    authListener();
  },[])

  return (
    <div className="App">
    {user ? 
    (
      <Hero handleLogout={handleLogout}/>
    )
    :
    (
      <Login 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorEmail={errorEmail}
        setErrorEmail={setErrorEmail}
        errorPassword={errorPassword}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
      />
    )}
      
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import firebase from '../firebase';
import Login from './Login';
import Hero from './Hero'

const Start = () => {

        const [user, setUser] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [emailError, setEmailError] = useState("");
        const [passwordError, setPasswordError] = useState("");
        const [hasAccount, setHasAccount] = useState(false);

        const clearInputs = () => {
          setEmail("");
          setPassword("");
        };

        const clearErrors = () => {
          setEmailError("");
          setPasswordError("");
        };

        const handleLogin = () => {
          clearErrors();
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
              switch (err.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                  setEmailError("Nieprawidłowy adres e-mail");
                  break;
                case "auth/wrong-password":
                  setPasswordError("Nieprawidłowe hasło");
                  break;
                default:
              }
            });
        };

        const handleSignUp = () => {
          clearErrors();
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
              switch (err.code) {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                  setEmailError("Wprowadź prawidłowy adres e-mail");
                  break;
                case "auth/weak-password":
                  setPasswordError("Hasło powinno zawierać minimum 6 znaków");
                  break;
                default:
              }
            });
        };
        const handleLogOut = () =>  {
            firebase.auth().signOut();
          }
        useEffect(() => {
          const authListener = () => {
            firebase.auth().onAuthStateChanged((user) => {
              clearInputs();
              if (user) {
                setUser(user);
              } else {
                setUser("");
              }
            });
          };
          authListener();
        }, []);
    return(
        <div>
            {user ? (
               <Hero handleLogOut={handleLogOut}></Hero>
            ):(
                <Login
                    email = {email}
                    setEmail = {setEmail}
                    password = {password}
                    setPassword = {setPassword}
                    handleLogin = {handleLogin}
                    handleSignUp = {handleSignUp}
                    hasAccount = {hasAccount}
                    setHasAccount = {setHasAccount}
                    emailError = {emailError}
                    passwordError = {passwordError}
      />
            )
            }
        </div>
    )
}

export default Start;
import React from 'react';

const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;

    return (
        <section className="login">
            <div className="login-container">
                <h1>Zaloguj się do <span className="logo">Przepiśnika</span></h1>
                <label>Adres e-mail</label>
                <input
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <p className="error-msg">{emailError}</p>
                <label>Hasło</label>
                <input
                type="password"
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                <p className="error-msg">{passwordError}</p>
                <div className="btn-container">
                    {hasAccount ? (
                        <>
                        <button className="login-btn" onClick={handleLogin}>Zaloguj się</button>
                        <p>
                            Nie masz konta?
                            <span onClick={()=>setHasAccount(!hasAccount)}>Zarejestruj się</span></p>
                        </>
                    ) :(
                        <>
                        <button className="login-btn" onClick={handleSignUp}>Zarejestruj się</button>
                        <p>
                            Masz konto?
                            <span onClick={()=>setHasAccount(!hasAccount)}>Zaloguj się</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
};

export default Login;
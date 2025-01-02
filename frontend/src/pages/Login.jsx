import React, {useState} from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Remember Me:", rememberMe);
    };

    const styles = {
        loginPage: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          fontFamily: "Arial, sans-serif",
        },
        loginBox: {
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        },
        loginTitle: {
          fontSize: "2rem",
          marginBottom: "20px",
          color: "#333",
        },
        inputField: {
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "1rem",
        },
        rememberMe: {
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        },
        rememberMeCheckbox: {
          marginRight: "10px",
        },
        loginButton: {
          width: "100%",
          padding: "15px",
          background: "#ff6f61",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "1.2rem",
          cursor: "pointer",
          transition: "background 0.3s ease",
        },
        loginButtonHover: {
          background: "#ff4a3d",
        },
        signUpLink: {
          marginTop: "20px",
          color: "#6a11cb",
          textDecoration: "none",
          cursor: "pointer",
        },
    };

    return (
        <div style = {styles.loginPage}>
            <div style = {styles.loginBox}>
                <h1 style = {styles.loginTitle}>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type = "email"
                        placeholder = "Email"
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        style = {styles.inputField}
                        required
                    />
                    <input
                        type = "password"
                        placeholder = "Password"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        style = {styles.inputField}
                        required
                    />
                    <div style = {styles.rememberMe}>
                        <input 
                            type = "checkbox"
                            checked = {rememberMe}
                            onChange = {(e) => setRememberMe(e.target.checked)}
                            style = {styles.rememberMeCheckbox}
                        />
                        <span>Remember Me</span>
                    </div>
                    <button
                        type = "submit"
                        style = {styles.loginButton}
                        onMouseOver = {(e) => (e.target.style.background = styles.loginButtonHover.background)}
                        onMouseOut = {(e) => (e.target.style.background = styles.loginButton.background)}
                    >
                        Login
                    </button>
                </form>
                <p>
                    Don't have an account?{" "}
                    <a href = "/signup" style = {styles.signUpLink}>
                        Sign up
                    </a>
                </p>
            </div>       
        </div>
    );
};

export default Login;
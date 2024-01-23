
function Login(){

    return (
    <div className="container">
        <div className="login">
            <header>Sign in</header>
            <form action="#">
                <input type="text" placeholder="Enter email" required/>
                <input type="password" placeholder="Enter password" required/>
                <a href="#">Forgot password?</a>
                <input type="submit" className="button" value="Login"/>
            </form>
            <div className="footer">
                <span>Don't have an account?</span>
                <a href="./Signup.jsx">Signup</a>
            </div>
        </div>
    </div>
    );
}
export default Login;
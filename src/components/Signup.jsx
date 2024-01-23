
function Signup(){
    return(
         <div className="container">
        <div className="login"> 
        <header>Sign up</header>
        <form action="#">
            <input type="text" placeholder="Enter your name" required/>
            <input type="text" placeholder="Enter your email" required/>
            <input type="password" placeholder="Create password" required/>
            <input type="password" placeholder="Confirm password" required/>
            <input type="submit" className="button" value="signup"/>
        </form>
        <div className="footer">
            <span>Already have an account?</span>
            <a href="./Login.jsx">Login</a>
        </div>
        </div>
    </div>
    );
}
export default Signup;
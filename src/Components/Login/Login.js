import React from 'react';
import useAuth from '../../hooks/useAuth';
import {Link} from 'react-router-dom';
import useFirebase from '../../hooks/UseFirebase';


const Login = () => {
    const {signInUsingGoogle,signInUsingGithub} = useFirebase();
    return (
        <div>
            <h3> Login Form </h3>
            <form onSubmit="">

                Email:<input name="email" type="email" id="" placeholder="Pls Enter Email " /> <br/>
               Password: <input name="password" type="password" id="" placeholder="Pls Enter Password " />
               <br/>
                <button>Submit</button> <br/>
            </form>
            <Link to="/register">Are you New User?Pls Register.</Link>  <br/>
                ---OR-----  <br/>
                <button onClick={ signInUsingGoogle }>Login Google</button> <br/>
                <button onClick={ signInUsingGithub }>Login Github</button> <br/>
        </div>
    );
};

export default Login;
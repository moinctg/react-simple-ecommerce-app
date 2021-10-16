import React from 'react';

import {Link} from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <form onSubmit="">
            Name:<input name="name" type="text" id="" placeholder="Pls Enter Name "/><br/>
             Email"<input name="email" type="email" id="" placeholder="Pls Enter Email "/><br/>
              Password:<input name="password" type="password" id="" placeholder="Pls Enter Password "/><br/>
                Re-Pasword:<input name="re-password" type="password" id="" placeholder="Pls Enter Re-Password  "/> <br/>
                <button>Register</button> <br/>
                <Link to="/login">Already Registerd? Pls Login </Link>
                

            </form>
        </div>
    );
};

export default Register;
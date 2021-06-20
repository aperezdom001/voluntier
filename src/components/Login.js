import React from 'react';

function Login() {
    const onClick = e => {
        console.log(e);
    };

    return (
        <div>
            <button onClick={onClick}>
                Login
            </button>
        </div>
    );
};

export default Login;

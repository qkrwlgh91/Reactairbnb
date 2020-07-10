import React from "react";

const Login = ({match}) => {
    return (
        <div>
            <h2>
                Login {match.params.name}
            </h2>
        </div>
    )
}

export default Login;
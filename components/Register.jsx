import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

function Register() {
  const [login, setLogin] = useState(false);

  const toggleLogin = () => {
    setLogin(prevState => !prevState);
  };

  return (
    <div className={login ? 'container' : 'container active'}>
      <div className="forms">
        {login ? <LoginForm toggleLogin={toggleLogin} login={login} /> : <RegistrationForm toggleLogin={toggleLogin} login={login}/>}
      </div>
    </div>
  );
}

export default Register;

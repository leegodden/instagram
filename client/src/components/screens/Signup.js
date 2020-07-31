import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';

const Signup = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const PostData = () => {
    if (
      !/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) &&
      email.length > 0
    ) {
      M.toast({ html: 'invalid email', classes: '#e57373 red lighten-2' });
      return;
    }
    fetch('/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        password,
        email
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error, classes: '#e57373 red lighten-2' });
        } else {
          M.toast({ html: data.message, classes: '#1e88e5 blue darken-1' });
          history.push('./signin');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="access-card">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>

        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          onClick={() => PostData()}
          className="btn waves-effect waves-light #64b5f6 blue lighten"
        >
          Sign up
        </button>
        <h6>
          <Link to="/signin">Already have an account ?</Link>
        </h6>
      </div>
    </div>
  );
};

export default Signup;

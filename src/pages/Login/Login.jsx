import React, { useState } from "react";

import styles from "./Login.module.css";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password) {
      setShow(true);
    }
  };

  return (
    <>
      {show ? (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button onClick={() => setShow(false)}>close</button>
            <p>firstName :{firstName}</p>
            <p>lastName : {lastName}</p>
            <p>email: {email}</p>
            <p>password: {password}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div>
        <form className={styles.form}>
          <div className={styles.form_item}>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="name">Last Name</label>
            <input
              id="name"
              name="name"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="name">Email</label>
            <input
              id="name"
              name="name"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="name">Password</label>
            <input
              id="name"
              name="name"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;

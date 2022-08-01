import React, { SyntheticEvent } from 'react';
// import { Register as IRegister } from 'src/interfaces';
import styles from 'src/styles/css/register.module.css';
import {
  TextField,
  Button,
} from '@mui/material';

export default function Register(): JSX.Element {
  // TODO: change event to useState
  const register = (event: SyntheticEvent): void => {
    event.preventDefault();
    // const target: IRegister = event.target as typeof event.target & {
    //   login: { value: string };
    //   email: { value: string };
    //   password: { value: string };
    // };
    //
    // const data: IRegister = {
    //   login: target.login.value.trim(),
    //   email: target.email.value.trim(),
    //   password: target.password.value.trim(),
    // };
  };

  return (
    <form onSubmit={register} className={styles.form}>
      <TextField
        label="логин"
        id="login"
        variant="outlined"
        className={styles.textEdit}
      />
      <TextField
        label="почта"
        variant="outlined"
        className={styles.textEdit}
      />
      <TextField
        label="пароль"
        variant="outlined"
        className={styles.textEdit}
      />
      <div>
        <Button variant="contained" color="primary" type="submit">Регистрация</Button>
      </div>
    </form>
  );
}

import React, {useState} from 'react';
import { useForm } from 'react-hook-form'
import './App.css';

type UserData = {
  email: string;
  pwd: string;
}

const pwd = {required: {value: true, message: "Pwd is required"}}

const email = {
  required: {value: true, message: "Email is required"},
  validate: (value: string): undefined | string => {
    return value?.startsWith("v")
      ? "v is not allowed"
      : undefined
  }
}

const App = () => {
  const { register, formState, handleSubmit } = useForm<UserData>()
  const [ state, setState ] = useState({
    email: "",
    pwd: ""
  })

  return (
    <div className="App">
      <form
        noValidate
        onSubmit={handleSubmit(data => {setState(data)})}
      >
        <h1>This is my form</h1>
        {JSON.stringify(state)}

        <div>
          <label htmlFor="pwd">Pwd</label>
          <input 
            type="password"
            id="pwd"
            {...register("pwd", pwd)}
          />
          <div>{formState.errors.pwd?.message}</div>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            id="email"
            {...register("email", email)}
          />
          <div>{formState.errors.email?.message}</div>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

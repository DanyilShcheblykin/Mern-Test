import React, { useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/messge.hook";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const AuthPage = () => {

  const { loading, request,  error } = useHttp();

  const message = useMessage()

  const auth = useContext(AuthContext)
 
  const [form, setForm] = useState({ email: "", password: "" });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async()=>{
    try {
        const data = await request('/api/auth/register' , "POST" , {...form})
    
        message(data.message )
    } catch (error) {
    }
  }

 
  const loginHandler = async()=>{
    try {
        const data = await request('/api/auth/login' , "POST" , {...form})
        auth.login(data.token , data.userId)
    } catch (error) {
    }
  }

  useEffect(()=>{
     message(error)
  } , [error , message ])

  return (
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Авторизация</span>
          </div>

          <div className="input-field">
            <input
              onChange={changeHandler}
              name="email"
              type="text"
              placeholder="First name"
              id="email"
              value={form.email}

            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-field">
            <input
              onChange={changeHandler}
              name="password"
              type="text"
              placeholder="Password"
              id="Password"
              value={form.password}
            />
            <label htmlFor="Password">Password</label>
          </div>
        </div>

        <div className="card-action">
          <button onClick={loginHandler}  disabled={loading} className="btn">Войти</button>

          <button onClick={registerHandler} disabled={loading}>Регистрация</button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

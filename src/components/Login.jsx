import React, { useEffect, useState } from 'react'
import { HiStatusOnline } from 'react-icons/hi'

function Login({form,register,reset,login}) {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
  		
    useEffect(() => {
      function onlineHandler() {
            setIsOnline(true);
      }
  
      function offlineHandler() {
            setIsOnline(false);
      }
  
      window.addEventListener("online", onlineHandler);
      window.addEventListener("offline", offlineHandler);

  
      return () => {
            window.removeEventListener("online", onlineHandler);
            window.removeEventListener("offline", offlineHandler);
      };
    }, []);
    return (
        <div className='container mx-auto'>
             {isOnline ?   <div><HiStatusOnline size={60} color='lightgreen' /> online</div> : <div><HiStatusOnline size={60} color='black' /> Offline </div> }
            <main className="form-signin">
                <form onSubmit={form(login)}>
                    <h1 className="h3 mb-3 fw-normal">Авторизация</h1>
                    <label htmlFor="inputEmail" className="visually-hidden">
                        Email
                    </label>
                    <input
                    {...register("email")}
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required=""
                        autofocus=""
                    />
                    <label htmlFor="inputPassword" className="visually-hidden">
                        Пароль
                    </label>
                    <input
                    {...register("password")}
                        type="password"
                        id="inputPassword"
                        className="form-control mt-2"
                        placeholder="Password"
                        required=""
                    />
                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Войти
                    </button>
                </form>
            </main>

        </div>
    )
}

export default Login
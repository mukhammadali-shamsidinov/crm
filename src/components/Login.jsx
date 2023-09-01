import React from 'react'

function Login({form,register,reset,login}) {
    
    return (
        <div className='container mx-auto'>
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
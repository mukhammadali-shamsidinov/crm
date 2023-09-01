import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { db } from '../config';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
export default function CreateUser({email}) {
    const {register,handleSubmit,reset} = useForm()
    function createUser(data){
        console.log(data);
        addDoc(collection(db,"create-user"),{
            id:v4(),
            email:email,
            phone:data.phone,
            opt:data.opt,
            body:data.text,
        }).then(()=>{
            toast.success("Added Data")
        }).catch(()=>{
            toast.error("Not Worked?")
        })
    }
  return (
    <div>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
  <h2 className="title m-5">Создать менеджера</h2>
  <div className="row g-3">
    <div className="col-md-5 col-lg-6">
      <form className="needs-validation" noValidate="" onSubmit={handleSubmit(createUser)}>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email <span className="text-muted">(email)</span>
            </label>
            <input
            value={email}
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Телефон
            </label>
            <input
            {...register("phone")}
              type="text"
              className="form-control"
              id="address"
              placeholder={1234}
              required=""
            />
            <div className="invalid-feedback">Введите текст ....</div>
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Name
            </label>
            <input
            {...register("name")}
              type="text"
              className="form-control"
              id="address"
              placeholder={1234}
              required=""
            />
            <div className="invalid-feedback">Введите текст ....</div>
          </div>
          <div className="col-12">
            <label htmlFor="address2" className="form-label">
              Text <span className="text-muted">(Textarea)</span>
            </label>
            <textarea className="form-control" {...register('text')}  />
          </div>
          <div className="col-12">
            <label htmlFor="country" className="form-label">
              Роль
            </label>
            <select className="form-select" id="country" required="" {...register("opt")}>
              <option value="">Выберите роль...</option>
              <option>Админ</option>
              <option>Менеджер</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="col-6">
          <button className="w-100 btn btn-primary btn-lg" type="submit">
            Создать
          </button>
        </div>
      </form>
    </div>
  </div>
</main>

    </div>
  )
}

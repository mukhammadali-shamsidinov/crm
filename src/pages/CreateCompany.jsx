import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { useForm } from 'react-hook-form'
import { db } from '../config'
import { toast } from 'react-toastify'

export default function CreateCompany({email}) {
    const {handleSubmit,reset,register} = useForm()

  async  function addCompany(data){
       const query = await addDoc(collection(db,'create-company'),{
        name:data.name,
        opt1:data.opt1,
        opt2:data.opt2,
        opt3:data.opt3,
        phone:data.phone,
        phone2:data.phone2,
        created_time:String(new Date()),
        data_contact:String(`${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}`)
       }).then(()=>{
        toast.success("Added")
       }).catch(()=>{
        toast.error("error")
       })
    }
  return (
    <div>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
  <h2 className="title m-5">Создать компанию</h2>
  <div className="row g-3">
    <div className="col-md-5 col-lg-6">
      <form className="needs-validation" noValidate="" onSubmit={handleSubmit(addCompany)}>
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
            <textarea className="form-control" name="name" defaultValue={""} />
          </div>
          <div className="col-12">
            <label htmlFor="country" className="form-label">
              Страна
            </label>
            <select className="form-select" id="country" required="" {...register("opt1")}>
              <option value="">Выберите страну...</option>
              <option>Россия</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="state" className="form-label">
              Регион
            </label>
            <select className="form-select" id="state" required="" {...register("opt2")}>
              <option value="">Выберите регион...</option>
              <option>Республика Татарстан</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="state" className="form-label">
              Город
            </label>
            <select className="form-select" id="state" required="" {...register("opt3")}>
              <option value="">Выберите город...</option>
              <option>Казань</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
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
            {...register("phone2")}
              type="text"
              className="form-control"
              id="address"
              placeholder={1234}
              required=""
            />
            <div className="invalid-feedback">Введите текст ....</div>
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

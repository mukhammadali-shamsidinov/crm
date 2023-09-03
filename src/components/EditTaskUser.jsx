import React, { useEffect, useState } from 'react'
import Rodal from 'rodal';
import './rodal.css';
import { useForm } from 'react-hook-form';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '../config';
import { toast } from 'react-toastify';
export default function EditTaskUser(props) {
    const { handleSubmit, register,reset } = useForm()
    const [visible, setVisible] = useState(false);
    const show = () => {
        setVisible(true);
    };

    const hide = () => {
        setVisible(false);
    };

    const editTaskUser = (data) => {
        console.log(data);
        updateDoc(doc(db, "user_task", props.doc.id), {
            name: data.name,
            surname: data.surname,
            och: data.och,
            phone_number: data.phone_number,
            email: data.email,
            task: data.task

        }).then(() => {
            toast.success("edited")
            if(visible == true){
                setVisible(false)
            }
            reset()
        }).catch(() => {
            toast.error("ishlamadi")
        })
    }
   
    return (
        <div>
            <button
                onClick={show}

                type="button"
                className="btn btn-sm btn-primary"
            >
                <i className="fa-solid fa-pen-to-square"></i>
            </button>

            <Rodal visible={visible} onClose={hide} height={520}>
                <h1>Ishchi Malumotini o'zgartirish</h1>
                <br />
                <form onSubmit={handleSubmit(editTaskUser)}>
                    <label>Ism</label>
                    <input defaultValue={props.doc.name} type="text" className='form-control' {...register('name',{
                        value:props.doc.name
                    })} />
                    <label>Familya</label>
                    <input type="text" defaultValue={props.doc.surname} className='form-control' {...register("surname",{
                        value:props.doc.surname
                    })} />
                    <label>Ochistva</label>
                    <input type="text" defaultValue={props.doc.och} className='form-control' {...register("och",{
                          value:props.doc.och
                    })} />
                    <label>Telefon raqam</label>
                    <input type="number" defaultValue={props.doc.phone_number} className='form-control' {...register("phone_number",{
                          value:props.doc.phone_number
                    })} />
                    <label htmlFor="email">Email</label>
                    <input type="email" defaultValue={props.doc.email} className='form-control' {...register("email",{
                          value:props.doc.email
                    })} />
                    <label htmlFor="work">Ishlar</label>
                    <select name="" id="" className='form-control' defaultValue={props.doc.task} {...register("task",{
                          value:props.doc.task
                    })}>
                        <option>Ishboshqaruvchi</option>
                        <option>Dastavchik</option>
                        <option>Drekator</option>
                        <option>Sotuvchi</option>
                    </select>
                    <button className='btn btn-success w-100 mt-2' type='submit'>tasdiqlash</button>
                </form>
            </Rodal>

        </div>
    )
}

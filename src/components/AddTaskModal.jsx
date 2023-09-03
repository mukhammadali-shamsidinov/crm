import React, { useState } from 'react'
import Rodal from 'rodal';
import './rodal.css';
import { useForm } from 'react-hook-form';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config';
import { toast } from 'react-toastify';
export default function AddTaskModal() {
    const {handleSubmit,register,reset} = useForm()
    const [visible, setVisible] = useState(false);
    const show = () => {
        setVisible(true);
      };
    
      const hide = () => {
        setVisible(false);
      };

      const addTaskUser = (data)=>{
        console.log(data);
        addDoc(collection(db,"user_task"),{
            ...data
        }).then(()=>{
            toast.success("added Tasker")
            setVisible(false)
            reset()
        }).catch(()=>{
            toast.error("error")
        })
      }
  return (
    <div>
        <button
      onClick={show}
                
                type="button"
                className="btn btn-sm btn-primary"
              >
                Добавить
              </button>

      <Rodal visible={visible} onClose={hide} height={500}>
        <h1>Ishchi Qo'shish</h1>
       <br />
       <form onSubmit={handleSubmit(addTaskUser)}>
       <label>Ism</label>
        <input type="text" className='form-control' {...register('name',{
            required:true
        })} />        
        <label>Familya</label>
        <input type="text" className='form-control' {...register("surname",{
            required:true
        })} />        
        <label>Ochistva</label>
        <input type="text" className='form-control' {...register("och",{
            required:true
        })} />
        <label>Telefon raqam</label>
        <input type="number" className='form-control' {...register("phone_number",{
            required:true
        })} />
        <label htmlFor="email">Email</label>
        <input type="email" className='form-control' {...register("email",{
            required:true
        })} />
        <label htmlFor="work">Ishlar</label>
        <select name="" id="" className='form-control' {...register("task",{
            required:true
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

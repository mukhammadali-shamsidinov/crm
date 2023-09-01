import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../config'
import Loader from '../components/Loader'


export default function Main() {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        onSnapshot(collection(db,"create-company"),(snapshot)=>{
            setPosts(snapshot.docs.map(doc=>({id:doc.id,...doc.data()})))
        })
    },[])
  return (
    <div>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
  <h2 className="title m-5">Все компании</h2>
  <div className="table-responsive">
    <table className="table table-bordered">
      <colgroup>
        <col width="5%" />
        <col width="6%" />
        <col width="7%" />
        <col width="5%" />
        <col width="20%" />
        <col width="5%" />
      </colgroup>
      <thead>
        <tr>
          <th>Дата контакта</th>
          <th>Организация</th>
          <th>Страна, регион</th>
          <th>Город</th>
          <th>Состояние</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {
            posts.length > 0 ?
            posts.map(item=>(

                <tr>
                <td>{item.data_contact}</td>
                <td>
                  <a href="#">ООО Пример</a>
                  <br /> ИНН (1234567890)
                </td>
                <td>{item.opt1}, {item.opt2}</td>
                <td>{item.opt3}</td>
                <td>
                 {item.created_time.toString()} Зарегистрировано 
                  <br />
                  {item.data_contact} : Текст комментария
                  <br />
                  {item.data_contact}: Текст комментария 2<br />
                </td>
                <td>Первый контакт</td>
              </tr>
            ))
            :
            <div className='container-fluid mx-auto p-5 m-5' style={{height:"50px"}}>
  <Loader />
            </div>
          
        }

      </tbody>
    </table>
  </div>
</main>

    </div>
  )
}

import React, { useState } from 'react'
import Modal from './Modal'
import { Link } from 'react-router-dom'
import { collection, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config'
import { toast } from 'react-toastify'
import AddTaskModal from '../components/AddTaskModal'
import EditTaskUser from '../components/EditTaskUser'
import Loader from '../components/Loader'


export default function Company({files,task}) {
  
    function deleteItem(id){
      deleteDoc(doc(db,'user_task',id)).then(()=>{
        toast.success("delete")
      }).catch(()=>{
        toast.error("Error")
      })
    }

    function deleteFile(id){
        deleteDoc(doc(db,"file",id)).then(()=>{
            toast.success("deleted successfull")
        }).catch(err=>{
            toast.error("error")
        })
    }

  return (
    <>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
  <div className="row g-3 mt-3">
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">
          <input type="hidden" defaultValue="agents" name="type" id="type" />
          <div className="row">
            <div className="col-6">
              <p id="org_id" style={{ display: "none" }}>
                1293
              </p>
              <div className="org_header">Контактные данные</div>
              <p>
                <AddTaskModal />
              </p>
              <div className="org_table">
                <table className="slide_1_to_m" id="contacts">
                  <thead></thead>
                  <colgroup>
                    <col width="7%" />
                    <col width="5%" />
                    <col width="5%" />
                    <col width="4%" />
                    <col width="1%" />
                  </colgroup>
                  <tbody>
                  <td>
                        <b>ФИО</b>
                      </td>
                      <td>
                        <b>Телефон(ы)</b>
                      </td>
                      <td>
                        <b>Email(ы)</b>
                      </td>
                      <td>
                        <b>Должность</b>
                      </td>
                      <td>&nbsp;</td>
                   
{
  task.length >0 ? task.sort((a,b)=>a.name - b.name).map(doc=>(
<>

                    <tr id="" style={{height:"50px"}} >
                      <td>
                        <span id="contact_name1261">{doc.name} {doc.surname} {doc.och}</span>
                      </td>
                      <td>
                        <span id="contact_phones1261">
                          {doc.phone_number} <br />
                        </span>
                      </td>
                      <td>
                        <span id="contact_emails1261">
                          <Link to={`${doc.email}`}>{doc.email}</Link> <br />
                        </span>
                      </td>
                      <td>
                        <span id="contact_dolzhnost1261">{doc.task}</span>
                      </td>
                      <td className='d-flex  gap-1 p-2' style={{height:"100%",alignItems:'center'}}>
                        <EditTaskUser doc={doc} />
                        <button className='btn btn-sm btn-danger'
                        onClick={()=>deleteItem(doc.id)}
                        ><i className="fa-solid fa-trash"></i></button>
                        
                      </td>
                    </tr>
</>
  ))
  :
  <div className='container-fluid mx-auto p-5 m-5' style={{height:"50px"}}>
  <Loader />
            </div>
}

                   
                  </tbody>
                </table>
              </div>
              <div>
                <div className="org_header mt-3">Документы компании </div>
                <div className="clear" />
                <div
                  style={{
                    minHeight: "400px width: 100%",
                    overflow: "auto",
                    border: "solid 1px black"
                  }}
                  className="mt-1"
                >
                  <table width="100%" className="org_table ">
                    <colgroup>
                      <col width="50%" />
                      <col width="30%" />
                      <col width="20%" />
                    </colgroup>
                    <tbody>
                        {files.length > 0 ?
                        files.map(doc=>(
                            <>
                            <tr id={1}>
                            <td>
                              <Link to={doc.file_url} target="_blank" title="" download={true}>
                               {doc.name}
                              </Link>
                            </td>
                            <td>{doc?.created_time.slice(0,25)}</td>
                            <td className="red">
                              <button className='btn btn-danger btn-sm m-2 float-end' 
                              onClick={()=>deleteFile(doc.id)}
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                            </>
                        ))
                     
                        :
                        <div className='container-fluid mx-auto p-5 m-5' style={{height:"50px"}}>
                        <Loader />
                                  </div>
                        }
                     
                     
                    </tbody>
                  </table>
                  <div className="mt-3 me-2 mb-3">
                    
                    <Modal />
             

                    <div className="clear" />
                  </div>
                </div>
              </div>
              <div>
                <div className="org_header mt-3">
                  Счета и договора для клиента
                </div>
                <a href="#" style={{ fontWeight: "bold" }}>
                  Новый платеж
                </a>
                <a href="#">Все платежи</a>
                <div className="clear" />
                <form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  id="rekvizits_form"
                  className="divtop5 form_create_platezh"
                  noValidate=""
                  autoComplete="off"
                >
                  <table width="100%" className="org_table">
                    <tbody>
                      <tr>
                        <td style={{ width: "50%" }}>Поставщик </td>
                        <td>
                          <div className="col-12">
                            <select className="form-select" id="" required="">
                              <option>ООО Пример</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "50%" }}>Услуга</td>
                        <td>
                          <div className="col-12">
                            <select className="form-select" id="" required="">
                              <option>Услуга</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                      <tr className="summ_block">
                        <td style={{ width: "50%" }}>Сумма</td>
                        <td>
                          <input
                            className="form-control"
                            type="number"
                            defaultValue={10000}
                            step={100}
                            required=""
                            id=""
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="org_td_header">Договор:</td>
                        <td>
                          <input
                            id="create_dog"
                            name="create_dog"
                            type="checkbox"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="org_td_header">Реквизиты </td>
                        <td>
                          <a href="" onclick="showRevizits()">
                            +
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <div
                            className="mb-3"
                            id="rekvizits_block"
                            style={{ display: "none" }}
                          >
                            <table width="100%" align="left">
                              <tbody>
                                <tr>
                                  <td>ИНН</td>
                                  <td>
                                    <input
                                      id="id_rekvizit-inn"
                                      maxLength={12}
                                      name="rekvizit-inn"
                                      type="text"
                                      defaultValue={1513070654}
                                    />
                                    <p>
                                      <button
                                        style={{
                                          padding: 2,
                                          marginTop: 5,
                                          fontSize: 10
                                        }}
                                        type="button"
                                        className="btn btn-info"
                                      >
                                        Заполнить данные по ИНН
                                      </button>
                                    </p>
                                    <span id="" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>КПП</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="rekvizit-kpp"
                                      maxLength={12}
                                      id="id_rekvizit-kpp"
                                    />{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Фирма</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="rekvizit-name"
                                      maxLength={200}
                                      id="id_rekvizit-name"
                                    />{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>ОГРН</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="rekvizit-ogrn"
                                      maxLength={200}
                                      id="id_rekvizit-ogrn"
                                    />{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Должность в и.п.</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="rekvizit-dolzhnost"
                                      maxLength={200}
                                      id="id_rekvizit-dolzhnost"
                                    />{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Должность в р.п.</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="rekvizit-dolzhnost_rod"
                                      maxLength={200}
                                      id="id_rekvizit-dolzhnost_rod"
                                    />{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>ФИО в р.п.</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="rekvizit-director_rod"
                                      maxLength={200}
                                      id="id_rekvizit-director_rod"
                                    />{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>ФИО для подписи (в и.п.)</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="rekvizit-director"
                                      maxLength={200}
                                      id="id_rekvizit-director"
                                    />{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td />
                                  <td> </td>
                                </tr>
                                <tr>
                                  <td>На основании чего действует</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="rekvizit-osnovanie"
                                      maxLength={200}
                                      id="id_rekvizit-osnovanie"
                                    />{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Юрид.адрес</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="rekvizit-yur_address"
                                      maxLength={200}
                                      id="id_rekvizit-yur_address"
                                    />{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Почт.адрес</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="rekvizit-pocht_address"
                                      maxLength={200}
                                      id="id_rekvizit-pocht_address"
                                    />{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>ОКПО</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="rekvizit-okpo"
                                      maxLength={200}
                                      id="id_rekvizit-okpo"
                                    />{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>БИК</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="rekvizit-bik_bank"
                                      maxLength={200}
                                      id="id_rekvizit-bik_bank"
                                    />
                                    <p>
                                      <button
                                        style={{
                                          padding: 2,
                                          marginTop: 5,
                                          fontSize: 10
                                        }}
                                        type="button"
                                        className="getdataforbik_rekvizits btn btn-info"
                                      >
                                        Заполнить данные по БИК
                                      </button>
                                    </p>
                                    <span id="count_request_bic_api" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>Название банка</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="rekvizit-name_bank"
                                      maxLength={200}
                                      id="id_rekvizit-name_bank"
                                    />{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>К/с</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="rekvizit-ksc"
                                      maxLength={200}
                                      id="id_rekvizit-ksc"
                                    />{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Расч.счёт</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="rekvizit-rsc"
                                      maxLength={200}
                                      id="id_rekvizit-rsc"
                                    />{" "}
                                  </td>
                                </tr>
                                <input
                                  type="hidden"
                                  defaultValue={93}
                                  name="platezh_org_id"
                                />
                              </tbody>
                            </table>
                            <div className="text-right divtop5">
                              <input
                                className="me-3"
                                type="button"
                                defaultValue="Сохранить реквизиты"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="org_td_header" />
                        <td> </td>
                      </tr>
                    </tbody>
                  </table>
                  <button type="submit">Сохранить</button>
                </form>
              </div>
              <div>
                <br />
                <br />
                <div className="org_header divtop5">Диалог с сотрудниками</div>
                <div className="clear" />
                <div
                  style={{
                    height: 300,
                    width: "100%",
                    overflow: "auto",
                    border: "solid 1px black",
                    fontSize: 12
                  }}
                ></div>
                <p className="mt-2">
                  <input type="button" defaultValue="Отправить сообщение" />
                </p>
                <div className="clear" />
                <br />
              </div>
              <div className="clear" />
            </div>
            <div className="col-6">
              <form action="" method="post" encType="multipart/form-data">
                <table width="100%" className="org_table">
                  <colgroup>
                    <col width="30%" />
                    <col width="70%" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td className="org_header" colSpan={2}>
                        Подробная информация о компании
                      </td>
                    </tr>
                    <tr>
                      <th>Компания:</th>
                      <td>ООО Пример</td>
                    </tr>
                    <tr>
                      <th>Дата создания карты:</th>
                      <td>02.02.2002</td>
                    </tr>
                    <tr>
                      <th>ОКВЭД раздел</th>
                      <td>
                        E - Водоснабжение; водоотведение, организация сбора и
                        утилизации отходов, деятельность по ликвидации
                        загрязнений.
                        <small />
                      </td>
                    </tr>
                    <tr>
                      <th>ОКВЭД подраздел</th>
                      <td>
                        38 - Сбор, обработка и утилизация отходов; обработка
                        вторичного сырья
                        <small />
                      </td>
                    </tr>
                    <tr>
                      <th>ОКВЭД</th>
                      <td>
                        38.1 - Сбор отходов
                        <small />
                      </td>
                    </tr>
                    <tr>
                      <th>Страна:</th>
                      <td>Россия</td>
                    </tr>
                    <tr>
                      <th>Регион:</th>
                      <td>Краснодарский Край</td>
                    </tr>
                    <tr>
                      <th>Город:</th>
                      <td>Лабинск</td>
                    </tr>
                    <tr>
                      <th>Адрес:</th>
                      <td>
                        352500, КРАЙ КРАСНОДАРСКИЙ, РАЙОН ЛАБИНСКИЙ, ГОРОД
                        ЛАБИНСК, УЛИЦА КРАСИНА, -, -, -
                      </td>
                    </tr>
                    <tr>
                      <th />
                      <td> </td>
                    </tr>
                    <tr>
                      <td className="org_td_header">ИНН:</td>
                      <td>9014010202</td>
                    </tr>
                    <tr>
                      <th>КПП:</th>
                      <td>231400202</td>
                    </tr>
                  </tbody>
                </table>
                <table width="100%">
                  <colgroup>
                    <col width="30%" />
                    <col width="70%" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td className="org_header" colSpan={2}>
                        Действие
                      </td>
                    </tr>
                    <tr>
                      <th>Менеджер:</th>
                      <td>
                        {" "}
                        <a href="#">Иванов Иван</a>{" "}
                      </td>
                    </tr>
                    <tr>
                      <th>История передачи карточки:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="org_td_header" colSpan={2}>
                        Состояние:
                      </td>
                    </tr>
                    <tr id={1293}>
                      <td colSpan={2}>
                        <div
                          style={{
                            height: 300,
                            width: "100%",
                            overflow: "auto",
                            border: "solid 1px black",
                            fontSize: 12
                          }}
                        >
                          <span id="">
                            <b>02.02.2002 15:55 :</b> Зарегистрировано
                            02.02.2002 15:55
                            <br />
                          </span>
                        </div>
                        <br />
                        <p className="show_comment_block">
                          <input
                            type="button"
                            defaultValue="Добавить комментарий"
                          />
                        </p>
                        <div
                          className="comment_block"
                          style={{ display: "none" }}
                        >
                          <div id="comment_form1293">
                            <input
                              type="hidden"
                              name="csrfmiddlewaretoken"
                              defaultValue="0hBlVbSLRPboEGdeg2J1MMGA8kGmBMb6YaSgPGOtp3ixs0xEbRAgt10djOLOGMyj"
                            />
                            <textarea
                              name="new_comment"
                              id="new_comment1293"
                              rows={5}
                              defaultValue={""}
                            />
                            <input
                              type="button"
                              className="save_comment"
                              defaultValue="Сохранить"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="" colSpan={2} />
                    </tr>
                    <tr>
                      <td colSpan={2} />
                    </tr>
                    <tr>
                      <th className="">Статус</th>
                      <td>
                        <div>
                          <select name="" className="">
                            <option className="" value="" />
                            <option value="">---------</option>
                            <option value={1} selected="">
                              Низкий
                            </option>
                            <option value={2}>Средний</option>
                            <option value={3}>Высокий</option>
                            <option value={4}>Оплачен</option>
                            <option value={5}>Отказ</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Следующий контакт:</th>
                      <td>
                        <div className="">
                          <input
                            type="text"
                            defaultValue="02.02.2002 15:55:14"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input
                  type="submit"
                  className="btn btn-sm btn-primary mb-2"
                  defaultValue="сохранить"
                />
              </form>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    </>
  )
}

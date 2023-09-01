import React from 'react'

export default function Users() {
  return (
    <div>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
  <h2 className="title m-5">Мееджеры</h2>
  <div className="table-responsive">
    <table className="table table-bordered">
      <colgroup>
        <col width="25%" />
        <col width="25%" />
        <col width="25%" />
        <col width="25%" />
      </colgroup>
      <thead>
        <tr>
          <th>ФИО</th>
          <th>email</th>
          <th>Роль</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href="#">Иванов Иван</a>
            <br />
          </td>
          <td>as@as.as</td>
          <td>Сотрудник</td>
          <td>Активный</td>
        </tr>
        <tr>
          <td>
            <a href="#">Иванов Иван</a>
            <br />
          </td>
          <td>as@as.as</td>
          <td>Сотрудник</td>
          <td>Активный</td>
        </tr>
        <tr>
          <td>
            <a href="#">Иванов Иван</a>
            <br />
          </td>
          <td>as@as.as</td>
          <td>Сотрудник</td>
          <td>Активный</td>
        </tr>
      </tbody>
    </table>
  </div>
</main>

    </div>
  )
}

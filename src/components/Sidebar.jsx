import React from 'react'
import { Link,NavLink} from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
        <nav
  id="sidebarMenu"
  className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
>
  <div className="position-sticky pt-3">
    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
      <span>Компании</span>
    </h6>
    <ul className="nav flex-column mb-2">
      <li className="nav-item ">
        <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active nav-link" : "nav-link"
  } to="/company">
          <span data-feather="file-text" />
          Все компании
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active nav-link" : 'nav-link'
  } to="/create-company">
          <span data-feather="file-text" />
          Создать
          <span data-feather="plus-circle" />
        </NavLink>
      </li>
    </ul>
    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
      <span>Менеджеры</span>
    </h6>
    <ul className="nav flex-column mb-2">
      <li className="nav-item">
        <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active nav-link" : 'nav-link'
  } to="/main">
          <span data-feather="users" />
          Все менеджеры
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active nav-link" : 'nav-link'
  } to="/create-user">
          <span data-feather="users" />
          Добавить
          <span data-feather="plus-circle" />
        </NavLink>
      </li>
    </ul>
    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
      <span>Аналитика</span>
    </h6>
    <ul className="nav flex-column mb-2">
      <li className="nav-item">
        <a className="nav-link" href="#">
          <span data-feather="layers" />
          Отчет 1
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <span data-feather="layers" />
          Отчет 2
        </a>
      </li>
    </ul>
    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
      <span>Настройки</span>
    </h6>
    <ul className="nav flex-column mb-2">
      <li className="nav-item">
        <a className="nav-link" href="#">
          <span data-feather="layers" />
          Настройка 1
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <span data-feather="layers" />
          Настройка 2
        </a>
      </li>
    </ul>
  </div>
</nav>

    </>
  )
}

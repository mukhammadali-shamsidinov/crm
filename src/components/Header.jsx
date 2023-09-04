
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/company">
    CRM
  </Link>
  <button
    className="navbar-toggler position-absolute d-md-none collapsed"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#sidebarMenu"
    aria-controls="sidebarMenu"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <input
    className="form-control form-control-dark w-100"
    type="text"
    placeholder="Поиск"
    aria-label="Search"
  />
  <ul className="navbar-nav px-3">
    <li className="nav-item text-nowrap">
      <Link className="nav-link" to="/">
        Выйти
      </Link>
    </li>
  </ul>
</header>

    </div>
  )
}

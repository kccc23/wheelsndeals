import { NavLink } from 'react-router-dom';

function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">CarCar</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-wrap">
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="/manufacturers">Manufacturers</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="/manufacturers/new">Create a Manufacturer</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="/models">Models</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="/models/new">Create a Model</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="/automobiles">Automobiles</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="/automobiles/new">Create an Automobile</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="salesperson">Salespeople</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="salesperson/new">Add a Salesperson</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="customers">Customers</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="customers/new">Add a Customer</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="sales">Sales</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="sales/new">Record a Sale</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="salesperson/history">Sales History</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="/technicians">Technicians</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="/technicians/new">Add a Technician</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="/appointments">Service Appointments</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="/appointments/new">Create a Service Appointment</NavLink>
                </li>
                <li className="nav-item me-4">
                    <NavLink className="nav-link" aria-current="page" to="/appointments/history">Service History</NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Nav;

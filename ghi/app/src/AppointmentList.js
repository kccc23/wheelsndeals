import React, { useState, useEffect } from 'react';

function AppointmentList() {
    const [appointments, setAppointments] = useState([]);
    const [automobiles, setAutomobiles] = useState([]);
    const [del, setDel] = useState(null);

    const loadAppointments = async () => {
        const response = await fetch('http://localhost:8080/api/appointments/');
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments.filter(
                appointment => appointment.status==="created"));
        }
    };
    useEffect(() => {loadAppointments();}, []);

    const loadAutomobiles = async () => {
        const response = await fetch('http://localhost:8100/api/automobiles');
        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.autos);
        }
    };
    useEffect(() => {loadAutomobiles();}, []);

    const handleCancel = async (event, appointmentId) => {
        event.preventDefault();
        const url = `http://localhost:8080/api/appointments/${appointmentId}/cancel`;
        const fetchConfig = {
            method: "PUT",
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setAppointments(appointments.filter(
                appointment => appointment.id !== appointmentId));
        }
    };

    const handleFinish = async (event, appointmentId) => {
        event.preventDefault();
        const url = `http://localhost:8080/api/appointments/${appointmentId}/finish`;
        const fetchConfig = {
            method: "PUT",
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setAppointments(appointments.filter(
                appointment => appointment.id !== appointmentId));
        }
    };

    const handleConfirmDelete = async (event, appointmentId) => {
        event.preventDefault();
        const url = `http://localhost:8080/api/appointments/${appointmentId}`;

        const fetchConfig = {
            method: "DELETE",
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
        }
    };

    const handleCancelDelete = () => { setDel(null) };
    const handleDelete = (appointmentID) => { setDel(appointmentID) };

    return (
        <div className='container'>
        <h1 className="mt-4">Service Appointments</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Is VIP?</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(appointment => (
                    <tr key={appointment.id}>
                        <td>{appointment.vin}</td>
                        <td>
                            {(automobiles.some(automobile => (automobile.vin === appointment.vin && automobile.sold === true)))? "YES": "No"}
                        </td>
                        <td>{appointment.customer}</td>
                        <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
                        <td>{new Date(appointment.date_time).toLocaleTimeString()}</td>
                        <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                        <td>{appointment.reason}</td>
                        <td>
                            <button onClick={(event) => handleCancel(event, appointment.id)} className="btn btn-outline-danger btn-sm me-2" type="button">Cancel</button>
                            <button onClick={(event) => handleFinish(event, appointment.id)} className="btn btn-outline-success btn-sm" type="button">Finish</button>
                        </td>
                        <td>
                            {(del === appointment.id) ? (
                                <div className="d-grid gap-2">
                                    <button onClick={(event) => handleConfirmDelete(event, appointment.id)} className="btn btn-outline-danger btn-sm shadow-none" type="button">Confirm Delete</button>
                                    <button onClick={() => handleCancelDelete()} className="btn btn-outline-danger btn-sm" type="button">Cancel Delete</button>
                                </div>
                            ) : (
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button onClick={() => handleDelete(appointment.id)} className="btn btn-danger btn-sm">Delete</button>
                                </div>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};
export default AppointmentList;

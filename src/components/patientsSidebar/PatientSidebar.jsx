import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {PatientContext} from "../app/App";

const PatientSidebar = () => {
    const { sidebarPatients, setSidebarPatients, setSelectedPatient } = useContext(PatientContext);
    const history = useHistory();

    const setSelectedPatientOnClick = (patient) => {
        setSelectedPatient(patient);
        history.push(`/patient/${patient.id}`)
    }

    const searchPatientOnChange = (e) => {
        const inputValue = e.target.value.trim();
        const usablePatients = sidebarPatients.filter(e => e.firstname == inputValue);

        if (usablePatients != 0) {
            setSidebarPatients(usablePatients);
        } else if (usablePatients === 0) {
            setSidebarPatients(sidebarPatients);
        }
    }

    return sidebarPatients && (
        <div className='sidebar'>
            <div className='search'>
                <input type="text" placeholder='Search' className='search-form' onChange={searchPatientOnChange} />
                <a href="/patient/new"><button className='new-btn'>New patient</button></a>
            </div>

            <div className='list'>
                <ul>
                    {sidebarPatients.map((patient) => {
                        return (
                            <li key={patient.id} id={patient.id} onClick={() => setSelectedPatientOnClick(patient)}>
                                <div className='patient'>
                                    {patient.firstname}{' '}{patient.lastname}
                                </div>
                                <div className='age'>
                                    {patient.birth}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default PatientSidebar;
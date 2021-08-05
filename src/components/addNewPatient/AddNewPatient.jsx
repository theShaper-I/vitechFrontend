import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import PatientService from "../../services/PatientService";
import PatientHeader from '../patientHeader/PatientHeader';
import {PatientContext} from "../app/App";

const AddNewPatient = () => {
    const { patients, setPatients } = useContext(PatientContext);
    const history = useHistory();

    const patientService = new PatientService();

    const savePatientButtonPush = async () => {
        patientService.savePatient(patients);
        history.push(`/patient`);
    };

    const cancelInfoPageButtonPush = () => {
        history.push(`/patient`);
    };

    return (
        <div>
            <PatientHeader />
            <div className='new-patient-wrapper'>
                <ul>
                    <li className='new-patient-list'>
                        <span>Firstname:</span>
                        <input
                        className='sidebar-patients form-control'
                        type="text" value={patients.firstname}
                        onChange={(e) => setPatients({ ...patients, firstname: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Lastname:</span>
                        <input
                        className='sidebar-patients form-control'
                        type="text" value={patients.lastname}
                        onChange={(e) => setPatients({ ...patients, lastname: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Birth:</span>
                        <input
                        className='sidebar-patients form-control'
                        type="text" value={patients.birth}
                        onChange={(e) => setPatients({ ...patients, birth: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Age:</span>
                        <input
                        className='sidebar-patients form-control'
                        type="text" value={patients.age}
                        onChange={(e) => setPatients({ ...patients, age: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Gender:</span>
                        <input
                        className='sidebar-patients form-control'
                        type="text" value={patients.gender}
                        onChange={(e) => setPatients({ ...patients, gender: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Country:</span>
                        <input
                        className='sidebar-patients form-control'
                        type="text" value={patients.country}
                        onChange={(e) => setPatients({ ...patients, country: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>State:</span>
                        <input
                        className='sidebar-patients form-control'
                        type="text" value={patients.state}
                        onChange={(e) => setPatients({ ...patients, state: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>City:</span>
                        <input
                        className='sidebar-patients form-control'
                        type="text" value={patients.city}
                        onChange={(e) => setPatients({ ...patients, city: e.target.value })} />
                    </li>
                </ul>

                <button onClick={savePatientButtonPush} className='save-btn'>Save</button>
                <button onClick={cancelInfoPageButtonPush} className='cancel-btn'>Cancel</button>
            </div>
        </div>
    );

}

export default AddNewPatient
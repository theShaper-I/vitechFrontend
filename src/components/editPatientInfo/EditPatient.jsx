import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { PatientContext } from "../app/App";
import PatientService from "../../services/PatientService";
import PatientHeader from "../patientHeader/PatientHeader";

const EditPatient = () => {
    const { selectedPatient, setSelectedPatient, sidebarPatients, setSidebarPatients } = useContext(PatientContext);
    const history = useHistory();

    const patientService = new PatientService();

    const editPatientButtonPush = async () => {
        patientService.editPatient(selectedPatient)
        const patients = sidebarPatients.map(e => {
            if (e.id === selectedPatient.id) {
                return selectedPatient;
            } else return e;
        });
        setSidebarPatients(patients);

        history.push(`/patient`);
    }

    const cancelChangesButtonPush = () => {
        history.push(`/patient`);
    };

    return (
        <div>
            <PatientHeader />
            <div className='new-patient-wrapper'>
                <ul>
                    <li className='new-patient-list'>
                        <span>Firstname:</span>
                        <input className='sidebar-patients form-control new-patient-form'
                               type="text" defaultValue={selectedPatient.firstname}
                               onChange={(e) => setSelectedPatient({ ...selectedPatient, firstname: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Lastname:</span>
                        <input className='sidebar-patients form-control new-patient-form'
                               type="text" defaultValue={selectedPatient.lastname}
                               onChange={(e) => setSelectedPatient({ ...selectedPatient, lastname: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Birth:</span>
                        <input className='sidebar-patients form-control new-patient-form'
                               type="text" defaultValue={selectedPatient.birth}
                               onChange={(e) => setSelectedPatient({ ...selectedPatient, birth: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Age:</span>
                        <input className='sidebar-patients form-control new-patient-form'
                               type="text" defaultValue={selectedPatient.age}
                               onChange={(e) => setSelectedPatient({ ...selectedPatient, age: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Gender:</span>
                        <input className='sidebar-patients form-control new-patient-form'
                               type="text" defaultValue={selectedPatient.gender}
                               onChange={(e) => setSelectedPatient({ ...selectedPatient, gender: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Country:</span>
                        <input className='sidebar-patients form-control new-patient-form'
                               type="text" defaultValue={selectedPatient.country}
                               onChange={(e) => setSelectedPatient({ ...selectedPatient, country: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>State</span>
                        <input className='sidebar-patients form-control new-patient-form'
                               type="text" defaultValue={selectedPatient.state}
                               onChange={(e) => setSelectedPatient({ ...selectedPatient, state: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>City:</span>
                        <input className='sidebar-patients form-control new-patient-form'
                               type="text" defaultValue={selectedPatient.city}
                               onChange={(e) => setSelectedPatient({ ...selectedPatient, city: e.target.value })} />
                    </li>
                </ul>

                <button onClick={editPatientButtonPush} className='save-btn'>Save</button>
                <button onClick={cancelChangesButtonPush} className='cancel-btn' >Cancel</button>
            </div>
        </div>

    );

}

export default EditPatient;
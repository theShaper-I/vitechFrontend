import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PatientContext } from '../app/App';
import PatientService from '../../services/PatientService';

const PatientHeader = () => {
    let { selectedPatient } = useContext(PatientContext);
    const history = useHistory();

    const patientService = new PatientService;

    const deletePatientButtonPush = () => {
        patientService.deletePatient(selectedPatient.id);
        history.push('/patient')
    }

    const editPatientButtonPush = () => {
        history.push('/patient/edit');
    };

    return (
        <div className='header'>
            <p className='firstname'>{selectedPatient.firstname}</p>
            <p className='lastname'>{selectedPatient.lastname}</p>
            {selectedPatient.age ? <p className='age'>{selectedPatient.age} years old</p>: null}

            <div>
                <button onClick={editPatientButtonPush} className='edit-btn'>Edit</button>
                <button onClick={deletePatientButtonPush} className='delete-btn'>Delete</button>
            </div>
        </div>
    );
}

export default PatientHeader;
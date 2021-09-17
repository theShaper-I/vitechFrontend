import axios from 'axios';

export const url = 'https://vitechbackend.herokuapp.com/api';

export default class PatientService {

    savePatient(patient) {
        axios.post(`${url}/patients`, {
            firstname: patient.firstname,
            lastname: patient.lastname,
            age: patient.age,
            birth: patient.birth,
            gender: patient.gender,
            country: patient.country,
            state: patient.state,
            city: patient.city
            }).catch((error) => {
                console.error(error);
            }).then(() => {
                // always executed
            });
    }

    getPatients() {
        axios.get(`${url}/patients`)
            .then((response) => {
                const patients = response.data;
            })
            .catch((error) => {
                console.error(error);
            })
            .then(() => {
                // always executed
            });
    }

    editPatient(editedPatientInfo) {
        axios.put(`${url}/patients`, editedPatientInfo)
            .catch((error) => {
                console.error(error);
            })
            .then(() => {
                // always executed
            });
    }

    deletePatient(patientID) {
        axios.delete(`${url}/patients/${patientID}`)
            .catch((error) => {
                console.error(error);
            })
            .then((response) => {
                console.log(response);
            });
    }

    saveComment(patientID, commentText, commentData) {
        axios.get(`${url}/patients/comments/${patientID}/${commentText}/${commentData}`)
            .catch((error) => {
                console.error(error);
            })
            .then(() => {
                // always executed
            });
    }


}
import axios from 'axios';

export const url = 'https://vitechtask-default-rtdb.europe-west1.firebasedatabase.app';

export default class PatientService {

    savePatient(patient) {
        axios.post(`${url}/patientLoad.json`, {
            firstname: patient.firstname,
            lastname: patient.lastname,
            age: patient.age,
            birth: patient.birth,
            gender: patient.gender,
            country: patient.country,
            state: patient.state,
            city: patient.city,
            patientComments: []
            }).catch((error) => {
                console.error(error);
            }).then(() => {
                // always executed
            });
    }

    getPatients() {
        axios.get(`${url}/patientLoad.json`)
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

    editPatient(editedPatientInfo, patientID) {
        axios.patch(`${url}/patientLoad/${patientID}.json`, editedPatientInfo)
            .catch((error) => {
                console.error(error);
            })
            .then(() => {
                // always executed
            });
    }

    deletePatient(patientID) {
        axios.delete(`${url}/patientLoad/${patientID}.json`)
            .catch((error) => {
                console.error(error);
            })
            .then((response) => {
                console.log(response);
            });
    }

    saveComment(commentForDatabase, patientID) {
        axios.post(`${url}/patientLoad/${patientID}/patientComments.json`, commentForDatabase)
            .catch((error) => {
                console.error(error);
            })
            .then(() => {
                // always executed
            });
    }
}
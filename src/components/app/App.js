import './app.css';
import React, {createContext, useEffect, useState} from 'react';
import Content from '../content/Content';
import PatientSidebar from '../patientsSidebar/PatientSidebar'
import {url} from "../../services/PatientService";
const axios = require('axios');

export const PatientContext = createContext([{}]);

function App() {
    const [patients, setPatients] = useState([]); // State for adding patients
    const [sidebarPatients, setSidebarPatients] = useState([]); // State for adding patients to sidebar
    const [selectedPatient, setSelectedPatient] = useState([]); // State for show patients info in PatientInfo.jsx

    const getArrayOfPatients = async (patientsPromise) => {
        let arr = [];
        await patientsPromise.then((response) => {
            const patients = response.data;

            for (let patientID in patients) {
                arr.push({
                    id: patients[patientID].id,
                    firstname: patients[patientID].firstname,
                    lastname: patients[patientID].lastname,
                    birth: patients[patientID].birth,
                    age: patients[patientID].age,
                    gender: patients[patientID].gender,
                    country: patients[patientID].country,
                    state: patients[patientID].state,
                    city: patients[patientID].city,
                    patientComments: patients[patientID].patientComments
                });
            }
        })
        return arr;
    }

    function getPromisePatients(url) {
        return axios.get(url);
    }

    useEffect(() => {
        getArrayOfPatients(getPromisePatients(`${url}/patients`))
            .then((result) => {
                setSidebarPatients(result)
            })
    }, [])

    return (
      <div className='app'>
        <PatientContext.Provider
        value={{ patients, setPatients, sidebarPatients, setSidebarPatients, selectedPatient, setSelectedPatient }}>
              <PatientSidebar />
              <Content />
        </PatientContext.Provider>
      </div>
    );

}

export default App;

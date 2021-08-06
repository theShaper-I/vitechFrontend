import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PatientInfo from "../patientInfo/PatientInfo";
import AddNewPatient from '../addNewPatient/AddNewPatient';
import EditPatientInfo from '../editPatientInfo/EditPatient';
import NotFound from '../notFound/NotFound';

const Content = () => {
    return (
        <div className='content'>
            <Router>
                <Switch>
                    <Route exact path='/patient' component={PatientInfo} />
                    <Route exact path='/patient/new' component={AddNewPatient} />
                    <Route exact path='/patient/edit' component={EditPatientInfo} />
                    <Route exact path='/patient/:id' component={PatientInfo}/>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    )
}

export default  Content;
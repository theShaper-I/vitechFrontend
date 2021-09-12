import React, { useContext, useState } from 'react';
import { PatientContext } from "../app/App";
import PatientHeader from "../patientHeader/PatientHeader";
import PatientService from '../../services/PatientService';
const moment = require('moment');


const PatientInfo = () => {
    const [comment, setComment] = useState('');
    const { selectedPatient } = useContext(PatientContext);
    const moment = require('moment');

    const commentInput = React.createRef();
    const patientService = new PatientService();

    const addPatientComment = (e) => {
        const date = moment();
        const commentText = commentInput.current.value;
        const commentData = date.format('ll');
        patientService.saveComment(selectedPatient.id, commentText, commentData);
        e.preventDefault();
        setComment('');
    }

    const handleChange = (e) => setComment(e.target.value);

    const getArrayOfComments = () => {
        let arr = [];
        const selectedPatientComments = selectedPatient.commentsList

        console.log(selectedPatientComments)

        for (let commentID in selectedPatientComments) {
            arr.push({
                id: commentID,
                commentText: selectedPatientComments[commentID].commentText,
                data: selectedPatientComments[commentID].data
            });
        }

        return arr;
    }

    return (
        <div className='content'>

            <PatientHeader />

            <div className='info'>
                <div className='short-info'>
                    <table>
                        <tbody>
                        <tr>
                            <td>Date of Birth:</td>
                            <td>{selectedPatient.birth}</td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>{selectedPatient.gender}</td>
                        </tr>
                        <tr>
                            <td>Country:</td>
                            <td>{selectedPatient.country}</td>
                        </tr>
                        <tr>
                            <td>State:</td>
                            <td>{selectedPatient.state}</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>{selectedPatient.city}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className='comments'>
                    <div>
                        <p>
                            <h3 className='comments-text'>Comments:</h3>
                        </p>
                        <ul>
                            {
                                getArrayOfComments().map(comment => {
                                    return(
                                        <li key={comment.id} id={comment.id}>
                                            <div className='new-comment'>
                                                <div>
                                                    <b>{comment.data}</b>
                                                </div>
                                                <div>
                                                    {comment.commentText}
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className='create-commentInput'>
                        <input  value={comment} ref={commentInput} onChange={handleChange} className='form-control' type="text"/>
                        <button onClick={addPatientComment} className='add-btn'>+</button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default PatientInfo;

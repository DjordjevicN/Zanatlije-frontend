import React from 'react';
import { ApplicationValidation } from '../validations/ApplicationValidation'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { GrClose } from "react-icons/gr";
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/taskActions'

function ApplyFormModal({ closeModal, taskInformation, authUser, createProposal }) {

    const proposalCreationHandler = (fields) => {
        createProposal(fields)
        closeModal()
    }
    return (
        <div className='confirmationModal__wrapper'>
            <div className="confirmationModal__content standardShadowBox">
                <div className='modalTop'>
                    <h3>Aplikacija</h3>
                    <p className='btn--close' onClick={() => closeModal()} ><GrClose /></p>
                </div>
                <Formik
                    initialValues={{
                        proposalPrice: '',
                        proposalInitMessage: '',
                        proposalFromName: authUser.userName,
                        proposalFromId: authUser.userId,
                        proposalTaskId: taskInformation.taskId
                    }}
                    validationSchema={ApplicationValidation}
                    onSubmit={(fields) => {
                        proposalCreationHandler(fields)
                    }}
                >
                    <Form className='form'>
                        <div className='inputElement'>
                            <Field className='input' name='proposalPrice' type='number' placeholder='Cena' />
                            <ErrorMessage className="input--bad" component='div' name="proposalPrice" />
                        </div>
                        <div className='inputElement'>
                            <Field data-gramm_editor="false" component="textarea" className='input' name='proposalInitMessage' type='text' placeholder='Poruka' />
                            <ErrorMessage className="input--bad" component='div' name="proposalInitMessage" />
                        </div>

                        <button className='button' type='submit' >Pošalji</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createProposal: (data) => dispatch(actionCreator.createProposal(data))
    }
}
export default connect(null, mapDispatchToProps)(ApplyFormModal);
//@@ kills grammerly plugin on textarea input
// data-gramm_editor="false" 
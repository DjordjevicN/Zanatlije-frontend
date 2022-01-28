import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { AddTaskValidation } from '../validations/AddTaskValidation'
import { GrClose } from "react-icons/gr";
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/taskActions'

function EditUserTaskModal(props) {
    let singleTask = props.singleTask
    const redirectHandler = () => {
        window.location = '/userTasks'
    }
    return (
        <div className=" confirmationModal__wrapper">
            <div className=" confirmationModal__content standardShadowBox">
                <div className="confirmationModal__titleAndActions">
                    <div className="editUserFormModal__title">
                        <h3>Izmeni detalje projekta</h3>
                    </div>
                    <div className="confirmationModal--close btn--close" onClick={() => {
                        props.closeModal()
                    }}>
                        <GrClose />
                    </div>
                </div>

                <Formik initialValues={{
                    taskTitle: singleTask.taskTitle,
                    taskPrice: singleTask.taskPrice,
                    taskAddress: singleTask.taskAddress,
                    taskBody: singleTask.taskBody,
                    taskUserId: singleTask.taskUserId,
                    taskId: singleTask.taskId
                }}
                    validationSchema={AddTaskValidation}
                    onSubmit={(fields) => {
                        props.updateTask(fields)
                        props.closeModal()
                        redirectHandler()
                    }}
                >
                    <Form className="form">
                        <div className="inputElement">
                            <Field className='input' name='taskTitle' type='text' placeholder='Naslov' />
                            <ErrorMessage className="input--bad" component='div' name="taskTitle" />
                        </div>
                        <div className="inputElement">
                            <Field className='input' name='taskPrice' type='number' placeholder='Cena' />
                            <ErrorMessage className="input--bad" component='div' name="taskPrice" />
                        </div>
                        <div className="inputElement">
                            <Field className='input' name='taskAddress' type='text' placeholder='Grad' />
                            <ErrorMessage className="input--bad" component='div' name="taskAddress" />
                        </div>
                        <div className='inputElement'>
                            <Field data-gramm_editor="false" component="textarea" className='input' name='taskBody' type='text' placeholder='Opis' />
                            <ErrorMessage className="input--bad" component='div' name="taskBody" />
                        </div>
                        <button className='button' type='submit'>Kreiraj</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateTask: (data) => dispatch(actionCreator.updateTask(data))
    }
}
export default connect(null, mapDispatchToProps)(EditUserTaskModal);

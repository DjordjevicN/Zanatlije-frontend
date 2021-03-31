import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import { AddTaskValidation } from '../validations/AddTaskValidation'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/taskActions'

function AddUserTasksForm(props) {

    const redirectHandler = () => {
        window.location = '/userTasks'
    }
    return (
        <div className="mainGridLayout mobileGridLayout">
            <SideBarLeft />
            <div className='mobileMod--visible' >
                <SideBarRight />
            </div>
            <div className="addUserTasksForm__wrapper">
                <div className="addUserTasksForm__content standardShadowBox">
                    <div className="editUserFormModal__title">
                        <h3>Kreiraj novi projekat</h3>
                    </div>
                    <Formik initialValues={{
                        taskTitle: '',
                        taskPrice: '',
                        taskAddress: '',
                        taskBody: '',
                        taskUserId: '',
                        taskTime: '',
                        taskOwnerName: props.authUser.userName,
                        taskTimestamp: Date.now()
                    }}
                        validationSchema={AddTaskValidation}
                        onSubmit={(fields) => {
                            fields.taskUserId = props.authUser.userId
                            props.createTask(fields)
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
            <div className='mobileMod--disable'>
                <SideBarRight />
            </div>
        </div>
    );
}
const mapStateToProps = (state, ownProps) => {
    return {
        authUser: state.userReducer.authUser
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createTask: (data) => dispatch(actionCreator.createTask(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddUserTasksForm);

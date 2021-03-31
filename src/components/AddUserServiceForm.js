import React from 'react';
import { EditUserServiceValidation } from '../validations/EditUserServiceValidation'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { connect } from 'react-redux'
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import * as actionCreator from '../store/actions/serviceActions'




function AddUserServiceForm(props) {
    const createServiceHandler = (fields) => {
        props.createService(fields)
        window.location = 'userServices'
    }
    return (
        <div className='userFeedPage__Wrapper mainGridLayout mobileGridLayout'>
            <SideBarLeft />
            <div className='mobileMod--visible'>
                <SideBarRight />
            </div>
            <div className="userFeed__content">
                <div className="editUserFormModal__wrapper standardShadowBox">
                    <div className="editUserFormModal__content ">
                        <div className="editUserFormModal__title">
                            <h3>Kreiraj novu uslugu</h3>
                        </div>
                        <Formik
                            initialValues={{
                                serviceCategory: '',
                                serviceDescription: '',
                                servicePrice: '',
                                serviceUserId: '',
                            }}
                            validationSchema={EditUserServiceValidation}
                            onSubmit={(fields) => {
                                fields.serviceUserId = props.authUser.userId
                                createServiceHandler(fields)
                            }}
                        >
                            <Form className='form'>
                                <div className='inputElement'>
                                    <Field className='input' name='serviceCategory' type='text' placeholder='Kategorija' />
                                    <ErrorMessage className="input--bad" component='div' name="serviceCategory" />
                                </div>
                                <div className='inputElement'>
                                    <Field className='input' name='servicePrice' type='number' placeholder='Cena' />
                                    <ErrorMessage className="input--bad" component='div' name="email" />
                                </div>
                                <div className='inputElement'>

                                    <Field data-gramm_editor="false" component="textarea" className='input' name='serviceDescription' type='text' placeholder='Opis' />
                                    <ErrorMessage className="input--bad" component='div' name="serviceDescription" />
                                </div>
                                <button className='button' type='submit'>Kreiraj</button>
                            </Form>
                        </Formik>
                    </div>
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
        createService: (data) => dispatch(actionCreator.createService(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserServiceForm);

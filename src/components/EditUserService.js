import React from 'react';
import { EditUserServiceValidation } from '../validations/EditUserServiceValidation'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { GrClose } from "react-icons/gr";
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/serviceActions'


function EditUserService(props) {
    let service = props.service;
    let handleFormModal = props.handleFormModal;
    const redirectHandler = () => {
        window.location = '/userServices'
    }
    return (
        <div className="confirmationModal__wrapper">
            <div className="confirmationModal__content standardShadowBox ">
                <div className="confirmationModal__titleAndActions">
                    <div className="editUserFormModal__title">
                        <h3>Izmeni uslugu</h3>
                    </div>
                    <div className="confirmationModal--close btn--close" onClick={() => {
                        handleFormModal()
                    }}>
                        <GrClose />
                    </div>
                </div>

                <Formik
                    initialValues={{
                        serviceCategory: service.serviceCategory,
                        serviceDescription: service.serviceDescription,
                        servicePrice: service.servicePrice,
                        serviceId: service.serviceId
                    }}
                    validationSchema={EditUserServiceValidation}
                    onSubmit={(fields) => {
                        props.editService(fields)
                        handleFormModal()
                        redirectHandler()
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
                        <button className='button' type='submit'>Sacuvaj</button>
                    </Form>
                </Formik>
            </div>

        </div>
    );
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editService: (data) => dispatch(actionCreator.editService(data))

    }
}

export default connect(null, mapDispatchToProps)(EditUserService);



import React from 'react';
import { EditUserInfoValidation } from '../validations/EditUserInfoValidation'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { connect } from 'react-redux'
import { GrClose } from "react-icons/gr";
import * as userActions from '../store/actions/userActions'


function EditUserFormModal(props) {
    return (
        <div className="confirmationModal__wrapper">
            <div className="confirmationModal__content standardShadowBox">
                <div className="confirmationModal__titleAndActions">
                    <div className="editUserFormModal__title">
                        <h3>Izmeni korisničke informacije</h3>
                    </div>
                    <div className="confirmationModal--close btn--close" onClick={() => {
                        props.closeModal()
                    }}>
                        <GrClose />
                    </div>
                </div>

                <Formik
                    initialValues={{
                        userName: props.userInfo.userName,
                        email: props.userInfo.email,
                        userPhoneNumber: props.userInfo.userPhoneNumber,
                        userAddress: props.userInfo.userAddress,
                        aboutMe: props.userInfo.aboutMe,
                    }}
                    validationSchema={EditUserInfoValidation}
                    onSubmit={(fields) => {
                        fields.userId = props.userInfo.userId;
                        props.updateUser(fields)
                        props.closeModal()
                    }}
                >
                    <Form className='form'>
                        <div className='inputElement'>
                            <Field className='input' name='userName' type='text' placeholder='Ime' />
                            <ErrorMessage className="input--bad" component='div' name="userName" />
                        </div>

                        <div className='inputElement'>
                            <Field className='input' name='email' type='email' placeholder='Email' />
                            <ErrorMessage className="input--bad" component='div' name="email" />
                        </div>
                        <div className='inputElement'>
                            <Field className='input' name='userPhoneNumber' type='text' placeholder='Broj telefona' />
                            <ErrorMessage className="input--bad" component='div' name="userPhoneNumber" />
                        </div>
                        <div className='inputElement'>
                            <Field className='input' name='userAddress' type='text' placeholder='Adresa' />
                            <ErrorMessage className="input--bad" component='div' name="userAddress" />
                        </div>
                        <div className='inputElement'>
                            <Field data-gramm_editor="false" component="textarea" className='input' name='aboutMe' type='text' placeholder='O meni' />
                            <ErrorMessage className="input--bad" component='div' name="aboutMe" />
                        </div>
                        <button className='button' type='submit'>Sačuvaj</button>
                    </Form>
                </Formik>
            </div>

        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (data) => dispatch(userActions.updateUser(data))
    }
}
export default connect(null, mapDispatchToProps)(EditUserFormModal);






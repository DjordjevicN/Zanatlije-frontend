import React, { useState } from 'react';
import { SignInUserValidation } from '../../validations/SignInUserValidation'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import * as userActions from '../../store/actions/userActions'

// design_elements
import ElementSVGOne from '../imagesSvg/ElementSVGOne'
import ElementSVGOTwo from '../imagesSvg/ElementSVGTwo'
import ElementSVGThree from '../imagesSvg/ElementSVGThree'

function Signin(props) {
    const [redirect, setRedirect] = useState(false);
    if (redirect) {
        return <Redirect to='/' />
    }
    return (
        <div className="signInUser__wrapper ">
            <div className="signInUser__content">
                <div className="signInUserHero">
                    <ElementSVGOne className="singIn__image__element " />
                    <ElementSVGOTwo className="singIn__image__element " />
                    <ElementSVGThree className="singIn__image__element " />
                </div>
                <div className="signIn__title">
                    <h3>Napravite nalog</h3>
                </div>
                <div className="signInUserForm">
                    <Formik
                        initialValues={{
                            userName: '',
                            email: '',
                            password: ''
                        }}
                        validationSchema={SignInUserValidation}
                        onSubmit={(fields) => {
                            props.createUser(fields)
                            setRedirect(true)
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
                                <Field className='input' name='password' type='password' placeholder='Password' />
                                <ErrorMessage className="input--bad" component='div' name="password" />
                            </div>
                            <div className="signInUser--actions">
                                <button className='button' type='submit'>Sign in</button>
                                <Link to='/login' className='link btn--redirect' >Imam nalog</Link>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (data) => dispatch(userActions.createUser(data))
    }
}
export default connect(null, mapDispatchToProps)(Signin);

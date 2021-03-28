import React from 'react';
import { LoginUserValidation } from '../../validations/LoginUserValidation'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { connect } from 'react-redux'
import * as userActions from '../../store/actions/userActions'
import { Link, useHistory } from 'react-router-dom'
import ElementSVGOne from '../imagesSvg/ElementSVGOne'
import ElementSVGOTwo from '../imagesSvg/ElementSVGTwo'
import ElementSVGThree from '../imagesSvg/ElementSVGThree'
function Login(props) {
    let history = useHistory()
    const loginHandler = (fields) => {
        props.loginUser(fields)
        history.push("/")
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
                    <h3>Ulogujte se</h3>
                </div>

                <div className="signInUserForm">
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={LoginUserValidation}
                        onSubmit={(fields) => {
                            loginHandler(fields)
                        }}
                    >
                        <Form className='form'>
                            <div className='inputElement'>
                                <Field className='input' name='email' type='email' placeholder='Email' />
                                <ErrorMessage className="input--bad" component='div' name="email" />
                            </div>
                            <div className='inputElement'>
                                <Field className='input' name='password' type='password' placeholder='Password' />
                                <ErrorMessage className="input--bad" component='div' name="password" />
                            </div>
                            <div className="signInUser--actions">
                                <button className='button' type='submit'>Log in</button>
                                <Link to='/signin' className='link btn--redirect' >Nemam nalog</Link>
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
        loginUser: (data) => dispatch(userActions.loginUser(data))
    }
}
const mapStateToProps = (state) => {
    return {
        authUser: state.userReducer.authUser
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);




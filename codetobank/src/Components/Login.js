import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../Store/actionCreators';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import loginPicture from '../Images/loginPicture.png';
import OneBlock from '../Images/OneBlock.png';
import Ellipse from '../Images/Ellipse.png';

const initialState = {
    email: '',
    password: '',
}

function Login(props) {

    const validation = Yup.object().shape({
        email: Yup.string()
            .email('Email not valid')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be 8 characters or longer')
            .required('Password is required'),
    });


    return (
        <div className='main-container'>
            <section className='first-section'>
                <img className='reg-img' src={loginPicture} />
            </section>

            <section className='second-section'>
                <Formik
                    initialValues={initialState}
                    validationSchema={validation}
                    onSubmit={props.login}
                    render={props => {
                        return (
                            <Form>
                                <div className='imgDiv'>

                                    {/* <img className='ellipse' src={Ellipse} /> */}

                                    <img className='oneblock' src={OneBlock} />
                                </div>

                                <h2 className='h2-text'>Welcome to OneBlock</h2>

                                <p className='login-p'>Please login below</p>

                                <div>
                                    <Field className='inputs' name='email' type='email' placeholder='Email' />
                                    <ErrorMessage name='email' component='div' />
                                </div>

                                <div>
                                    <Field className='inputs' name='password' type='password' placeholder='Password' />
                                    <ErrorMessage name='password' component='div' />
                                </div>

                                <button className='submit' type='submit'>Login</button>

                                <p className='bottom-p-text'>New to OneBlock?
                                    <Link to="/"><p style={{color:'red'}}>Sign up here</p>
                                    </Link>
                                </p>

                            </Form>
                        )
                    }}
                >

                </Formik>
            </section>

        </div>
    )
}

const mapStateToProps = store => {
    return {
        loading: store.authReducer.loading,
        token: store.authReducer.token,
        error: store.authReducer.error,
    }
}

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
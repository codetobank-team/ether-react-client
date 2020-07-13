import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../Store/actionCreators';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    transactionPin: '',
    password: '',
}

function Register(props) {

    const validation = Yup.object().shape({
        email: Yup.string()
            .email('Email not valid')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be 8 characters or longer')
            .required('Password is required'),
    });


    return (
        <div>
            <p> You've found yourself in the register page...YAY!</p>
            <Formik
                initialValues={initialState}
                validationSchema={validation}
                onSubmit={props.register}
                render={props => {
                    return (
                        <Form>
                            <h2> Create Account</h2>

                            <div>
                                <Field name='email' type='email' placeholder='Email' />
                                <ErrorMessage name='email' component='div' />
                            </div>

                            <div>
                                <Field name='firstName' type='text' placeholder='First Name' />
                                <ErrorMessage name='firstName' component='div' />
                            </div>

                            <div>
                                <Field name='lastName' type='text' placeholder='Last Name' />
                                <ErrorMessage name='lastName' component='div' />
                            </div>

                            <div>
                                <Field name='transactionPin' type='text' placeholder='Transaction Pin' />
                                <ErrorMessage name='transactionPin' component='div' />
                            </div>

                            <div>
                                <Field name='password' type='password' placeholder='Password' />
                                <ErrorMessage name='password' component='div' />
                            </div>

                            <button type='submit'>Register</button>
                        </Form>
                    )
                }}
            >

            </Formik>

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
    register
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
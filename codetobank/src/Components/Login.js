import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../Store/actionCreators';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
        <div>
            <p> You've found yourself in the Login page...YAY!</p>
            <Formik
                initialValues={initialState}
                validationSchema={validation}
                onSubmit={props.login}
                render={props => {
                    return (
                        <Form>
                            <h2> Create Account</h2>

                            <div>
                                <Field  name='email' type='email' placeholder='Email' />
                                <ErrorMessage name='email' component='div' />
                            </div>

                            <div>
                                <Field name='password' type='password' placeholder='Password' />
                                <ErrorMessage name='password' component='div' />
                            </div>

                            <button type='submit'>Login</button>
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
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
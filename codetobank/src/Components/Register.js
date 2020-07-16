import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../Store/actionCreators';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import one from '../Images/one.png';
import OneBlock from '../Images/OneBlock.png';
import Ellipse from '../Images/Ellipse.png';



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
        <div className='main-container'>
            <section className='first-section'>
                <img className='reg-img' src={one} />
            </section>

            <section className='second-section'>
                <Formik
                    initialValues={initialState}
                    validationSchema={validation}
                    onSubmit={props.register}
                    render={props => {
                        return (
                            <Form>
                                <div className='imgDiv'>
                                 <img className='oneblock' src={OneBlock} />
                                </div>

                                <h2 className='h2-text'>Create Account</h2>

                                <p className='p-text'>Create a free account and start transacting with blockchain technology.</p>


                                <div>
                                    <Field className='inputs' name='firstName' type='text' placeholder='First Name' />
                                    <ErrorMessage name='firstName' component='div' />
                                </div>

                                <div>
                                    <Field className='inputs' name='lastName' type='text' placeholder='Last Name' />
                                    <ErrorMessage name='lastName' component='div' />
                                </div>

                                <div>
                                    <Field className='inputs' name='transactionPin' type='text' placeholder='Transaction Pin' />
                                    <ErrorMessage name='transactionPin' component='div' />
                                </div>

                                <div>
                                    <Field className='inputs' name='email' type='email' placeholder='Email' />
                                    <ErrorMessage name='email' component='div' />
                                </div>

                                <div>
                                    <Field className='inputs' name='password' type='password' placeholder='Password' />
                                    <ErrorMessage name='password' component='div' />
                                </div>

                                <button className='submit' type='submit'>Create Account</button>

                                <p className='bottom-p-text'> Already have an account?
                                    <Link to="/login"><p style={{color:'red'}}>Log in</p>
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
    register
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
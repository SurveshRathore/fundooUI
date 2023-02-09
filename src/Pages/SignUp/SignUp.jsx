import React from "react";
//import './SignUp.css'
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useState } from "react";
import { SignUpApi } from "../../services/userServices";
import { useNavigate } from "react-router-dom";

const nameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyles = makeStyles({
    signupPage: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
    },

    mainContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%',
        width: '60%',
        border: '1px solid gray',
        borderRadius: '10px',

    },

    signupBlock: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '90%',
        width: '65%',
        // gap: '1.5%',

    },

    logoHead: {
        display: 'flex',
        flexDirection: 'row',
        height: '5%',
        width: '85%',
        justifyContent: 'flex-start',
    },

    headLabel: {
        display: 'flex',
        height: '15%',
        width: '85%',
        fontSize: '20px',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },

    fullname: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '12%',
        width: '90%',
        justifyContent: 'flex-start',
        gap: '2%',
    },

    username: {
        display: 'flex',
        flexWrap: 'column-wrap',
        height: '13%',
        width: '85%',
    },

    currentEmail: {
        display: 'flex',
        height: '5%',
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    password: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '21%',
        width: '90%',
        gap: '2%',
        justifyContent: 'flex-start',
    },

    showPassword: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },

    a: {
        textDecoration: 'none',
        color: '#4c8bf5',
    },

    small: {
        display: 'flex',
        flexWrap: 'wrap',
        color: '#454545',
        position: 'relative',
        left: '7px',
    },

    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
        width: '85%',
    },

    nextButton: {
        borderRadius: '5px',
        fontSize: '18px',
        height: '60%',
        width: '20%',
    },

    sideLogo: {
        display: 'flex',
        height: '100%',
        width: '30%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    sideLogoImg: {
        height: '32%',
        width: '70%',
    },

    sideLogoText: {
        height: '10%',
        width: '70%',
    },

    // signInBtn:{
    //     border:'none',
    // },


    '@media only screen and (min-width: 320px) and (max-width:480px)': {
        signupPage: {
            width: '100%',
            height: '100%',
            border: 'none',
            gap: '2%',
        },

        mainContent: {
            height: '90%',
            width: '100%',
            top: '4%',
            gap: '2%',
        },

        headLabel: {
            display: 'flex',
            height: '5%',
            width: '85%',
            fontSize: '15px',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },

        fullname: {
            display: 'flex',
            flexDirection: 'column',
            height: '24%',
            gap: '4%',
            width: '100%'
        },

        username: {
            display: 'flex',
            flexDirection: 'column',
            height: '20%',
            gap: '4%',
            width: '100%'
        },

        password: {
            height: '35%',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '4%',
            width: '100%'
        },

        buttons: {
            width: '100%',
            left: '0.8%',
            bottom: '4%',
            height: '8%',
            
        },

        sideLogo: {
            display: 'none'
        },
        // logoHead: {
        //     display: 'none'
        // },
        currentEmail: {
            display: 'none',
        },
        signInBtn: {
            width: '40%',
            bottom: '4%',
            height: '4%',
            fontSize: '8px'
        },
    },

    '@media only screen and (min-width: 481px) and (max-width:768px)': {
        signupPage: {
            width: '100%',
            height: '100%',
            border: 'none',
            gap: '2%',
        },

        mainContent: {
            height: '90%',
            width: '90%',
            border: '1px solid lightgray',
            borderRadius: '10px',
            gap: '2%',
        },


        fullname: {
            display: 'flex',
            flexDirection: 'column',
            height: '20%',
            gap: '4%',
            width: '100%'
        },

        username: {
            display: 'flex',
            flexDirection: 'column',
            height: '20%',
            gap: '4%',
            width: '100%'
        },

        password: {
            height: '32%',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '4%',
            width: '100%'
        },

        sideLogo: {
            display: 'none'
        },

        headLabel: {
            display: 'flex',
            height: '15%',
            width: '85%',
            fontSize: '15px',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
        currentEmail: {
            display: 'none',
        },
        signInBtn: {
            width: '30%',
            bottom: '4%',
            height: '4%',
            fontSize: '12px'
        },
        buttons: {
            width: '100%',
            left: '0.8%',
            bottom: '4%',
            height: '8%',
            
        },
    },
    '@media only screen and (min-width: 769px) and (max-width:1024px)': {
        signupPage: {
            height: '100%',
            width: '100%',
        },

        fullname: {
            display: 'flex',
            flexDirection: 'column',
            height: '20%',
            gap: '4%',
            width: '100%'
        },

        

        password: {
            height: '32%',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '4%',
            width: '100%'
        },

        headLabel: {
            display: 'flex',
            height: '15%',
            width: '85%',
            fontSize: '14px',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
        username: {
            display: 'flex',
            flexDirection: 'column',
            height: '20%',
            gap: '2%',
            width: '100%'
        },
        buttons: {
            display: 'flex',
            justifyContent: 'space-between',
            
            width: '100%',
            bottom: '4%',
            height: '14%',
            
        },

        signInBtn: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '40%',
            bottom: '4%',
            height: '4%',
            fontSize: '12px'
        },
    },

})
function SignUp() {
    const classes = useStyles();

    const [signUpObj, setSignUpObj] = useState({ firstName: '', lastName: '', emailId: '', password: '', confirmPass: '' })
    const [regexObj, setRegexObj] = useState({
        firstNameBorder: false,
        firstNameHelper: '',
        lastNameBorder: false,
        lastNameHelper: '',
        emailBorder: false,
        emailHelper: '',
        passwordBorder: false,
        passwordHelper: '',
        confirmBorder: false,
        confirmHelper: ''
    })

    const takingFirstName = (e) => {
        setSignUpObj(prevState => ({
            ...prevState,
            firstName: e.target.value
        }))
    }

    const takingLastName = (e) => {
        setSignUpObj(prevState => ({
            ...prevState,
            lastName: e.target.value
        }))
    }

    const takingEmail = (e) => {
        setSignUpObj(prevState => ({
            ...prevState,
            emailId: e.target.value
        }))
    }

    const takingPassword = (e) => {
        setSignUpObj(prevState => ({
            ...prevState,
            password: e.target.value
        }))
    }

    const takingConfirmPass = (e) => {
        setSignUpObj(prevState => ({
            ...prevState,
            confirmPass: e.target.value
        }))
    }
    console.log(signUpObj)

    const verifyUserSignUp = () => {
        let firstNameTest = nameRegex.test(signUpObj.firstName)
        let lastNameTest = nameRegex.test(signUpObj.lastName)
        let emailTest = emailRegex.test(signUpObj.emailId)
        let passwordTest = passwordRegex.test(signUpObj.password)
        let confirmPassTest = passwordRegex.test(signUpObj.confirmPass)
        let passConfirmCheck = (signUpObj.password).matchAll(signUpObj.confirmPass)

        if (firstNameTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                firstNameBorder: true,
                firstNameHelper: "Please enter a valid name."
            }))
        }

        if (firstNameTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                firstNameBorder: false,
                firstNameHelper: ''
            }))
        }

        if (lastNameTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                lastNameBorder: true,
                lastNameHelper: "Please enter a valid name."
            }))
        }

        if (lastNameTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                lastNameBorder: false,
                lastNameHelper: ''
            }))
        }

        if (emailTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Please enter a valid email."
            }))
        }

        if (emailTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: false,
                emailHelper: ''
            }))
        }

        if (passwordTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Please enter a valid password."
            }))
        }

        if (passwordTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: ''
            }))
        }

        if (confirmPassTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                confirmBorder: true,
                confirmHelper: "Please enter a valid password."
            }))
        }

        if (confirmPassTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                confirmBorder: false,
                confirmHelper: ''
            }))
        }

        if (passConfirmCheck === false) {
            setRegexObj(prevState => ({
                ...prevState,
                confirmBorder: true,
                confirmHelper: 'Confirm Password must be same as the password'
            }))
        }

        if (passConfirmCheck === true) {
            setRegexObj(prevState => ({
                ...prevState,
                confirmBorder: false,
                confirmHelper: ''
            }))
        }

        // if(password != confirm){

        // }

        if (firstNameTest === true && lastNameTest === true && emailTest === true && passwordTest === true && passConfirmCheck === true) {
            SignUpApi(signUpObj).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    let navigate = useNavigate()
    const loginNavigate = () => {
        navigate('/')
    }

    return (
        <div className={classes.signupPage}>
            <div className={classes.mainContent}>
                <div className={classes.signupBlock}>
                    <div className={classes.logoHead}>
                        <img src="./googleLogo.png" alt="logo" width="75" height="40" />
                    </div>
                    <div className={classes.headLabel}><p>Create your Google Account</p></div>
                    <div className={classes.fullname}>
                        <TextField onChange={takingFirstName} error={regexObj.firstNameBorder} helperText={regexObj.firstNameHelper} label="First name" variant="outlined" size="small" />
                        <TextField onChange={takingLastName} error={regexObj.lastNameBorder} helperText={regexObj.lastNameHelper} label="Last name" variant="outlined" size="small" />
                    </div>
                    <div className={classes.username}>

                        <TextField onChange={takingEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} label="Username" variant="outlined" fullWidth size="small" />
                        {/* <p>You can use letters,numbers & periods</p> */}

                    </div>
                    <div>You can use letters,numbers & periods</div>
                    <div className={classes.currentEmail}><a href="">Use my current email address instead</a></div>
                    <div className={classes.password}>
                        <TextField onChange={takingPassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} label="Password" variant="outlined" size="small" />
                        <TextField onChange={takingConfirmPass} error={regexObj.confirmBorder} helperText={regexObj.confirmHelper} label="Confirm" variant="outlined" size="small" />
                        <small className={classes.passText}>Use 8 or more characters with a mix of letters, numbers & symbols</small>
                    </div>
                    <div className={classes.showPassword}>
                        <input type={"checkbox"} value="Show password" />Show password

                    </div>
                    <div className={classes.buttons}>
                        <Button onClick={loginNavigate} className={classes.signInBtn} variant="contained" >Sign in</Button>
                        {/* <span className={classes.signInBtn}><a href={loginNavigate} className={classes.linkText}>Sign in instead</a></span> */}
                        <Button onClick={verifyUserSignUp} className={classes.nextButton} variant="contained" >Next</Button>
                    </div>

                </div>
                <div className={classes.sideLogo}>
                    <img src="./createlogo.png" alt="google account" className={classes.sideLogoImg} />
                    <p className={classes.sideLogoText}>One Account. All of Google working for you.</p>
                </div>


            </div>

        </div>

    );
}

export default SignUp
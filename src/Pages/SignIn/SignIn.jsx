import React from "react";
//import './SignIn.css'
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useState } from "react";
import { loginApi } from "../../services/userServices";
import { useNavigate } from "react-router-dom";

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyles = makeStyles({
    signInPage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
    },

    signInBlock: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '80%',
        width: '35%',
        border: '1px ridge grey',
        borderRadius: '10px',
        gap: '2%',

    },
    loginImage: {
        display: 'flex',
        justifyContent: 'center',
        height: '5%',
        width: '80%',
    },

    text1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '5%',
        width: '80%',
        fontSize: '25px',
    },
    text2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '3%',
        width: '80%',
        fontSize: '16px',

    },

    emailTxtfield: {
        display: 'flex',
        height: '16%',
        width: '80%',
        flexWrap: 'wrap',
    },

    passTxtfield: {
        display: 'flex',
        height: '17%',
        width: '80%',
        flexWrap: 'wrap',
    },

    learnMore: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        height: '10%',
        width: '80%',
    },

    text3: {

        fontSize: '15px',
        color: '#242323',

    },

    buttonblock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
        width: '80%',
    },

    linkText: {
        textDecoration: 'none',
        color: 'rgb(8, 120, 211)',
    },
    nextBtn: {
        borderRadius: '5px',
        fontSize: '18px',
        height: '60%',
        width: '20%',

    },
    '@media only screen and (min-width: 320px) and (max-width:480px)': {
        signInBlock: {
            width: '100%',
            height: '100%',
            border: 'none'
        },
        text3: {
            width: '100%',
            position: 'none',
            flexWrap: 'wrap',
            marginLeft: '10px'
        }
    },

    '@media only screen and (min-width: 481px) and (max-width:768px)': {
        signInBlock: {
            width: '80%',
            height: '95%'
        },
        text3: {
            width: '100%',
            position: 'none',
            flexWrap: 'wrap',
            marginLeft: '10px'
        }
    },
    '@media only screen and (min-width: 769px) and (max-width:1024px)': {
        signInBlock: {
            width: '80%',
            height: '95%'
        },
        text3: {
            width: '100%',
            position: 'none',
            flexWrap: 'wrap',
            marginLeft: '10px'
        }
    },

})
function SignIn() {

    const classes = useStyles();

    const [signInObj, setSignInObj] = useState({ emailId: '', password: '' }) //for fundoo .net
    //const [signInObj, setSignInObj] = useState({email: '', password: ''})  //for bridgelab
    const [regexObj, setRegexObj] = useState({ emailBorder: false, emailHelper: '', passBorder: false, passHelper: '' })

    const takingEmail = (e) => {
        // setSignInObj({email: e.target.value})
        setSignInObj(prevState => ({
            ...prevState,
            emailId: e.target.value
        }))
    }

    const takingPass = (e) => {
        // setSignInObj({password: e.target.value})
        setSignInObj(prevState => ({
            ...prevState,
            password: e.target.value
        }))
    }
    console.log(signInObj)

    const verifyEmailPass = () => {
        let emailTest = emailRegex.test(signInObj.emailId)
        let passTest = passwordRegex.test(signInObj.password)

        if (emailTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Enter a valid email."
            }))
        }
        else if (emailTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: false,
                emailHelper: ''
            }))
        }

        if (passTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                passBorder: true,
                passHelper: "Enter a valid password."
            }))
        }
        else if (passTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                passBorder: false,
                passHelper: ''
            }))
        }
        if (emailTest === true && passTest === true) {
            loginApi(signInObj).then((response) => {
                console.log(response)
                //localStorage.setItem("token", response.data.id)
                localStorage.setItem("token", response.data.result)
                dashbordNavigate()
                console.log(response.data.result)
            }).catch((error) => {
                console.log(error)
            })
        }

    }

    let navigate = useNavigate()
    const registerNavigate = () =>{
        navigate('/signup')
    }

    const dashbordNavigate = () =>{
        navigate('/homepage')
    }

    return (
        <div className={classes.signInPage}>
            {/* <div className="signInPage"> */}
            <div className={classes.signInBlock}>
                <div className={classes.loginImage}>

                    <img src="./googleLogo.png" alt="logo" className={classes.googleLogo} />
                </div>
                <div className={classes.text1}>Sign in</div>
                <div className={classes.text2}>Use your Google Account</div>

                <div className={classes.emailTxtfield}>
                    <TextField onChange={takingEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} id="outlined-basic" label="Email or phone" variant="outlined" size="small" fullWidth="true" />
                    <a href="#" className={classes.linkText}>Forget email?</a>
                </div>
                <div className={classes.passTxtfield}>
                    <TextField onChange={takingPass} error={regexObj.passBorder} helperText={regexObj.passHelper} id="outlined-basic" label="password" type="password" variant="outlined" size="small" fullWidth="true" />
                    <a href="#" className={classes.linkText}>Forget password?</a>
                </div>
                {/* <input type="text" placeholder="Email or phone"></input> */}
                {/* <p className="forget">Forget email?</p> */}
                <div className={classes.learnMore}>
                    <span className={classes.text3}>Not your computer? Use Guest mode to sign in privately.</span>
                    <span className={classes.text4}><a href="#" className={classes.linkText}>Learn more</a></span>
                </div>
                <div className={classes.buttonblock}>
                <Button onClick={registerNavigate} className={classes.createAccBtn} variant="contained" >Create account</Button>
                    {/* <span className={classes.createAccBtn}><a href={registerNavigate} className={classes.linkText}>Create account</a></span> */}
                    <Button onClick={verifyEmailPass} className={classes.nextBtn} variant="contained" >Next</Button>

                </div>

            </div>



        </div>

    );
}

export default SignIn
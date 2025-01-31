import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate=useNavigate();
    const register=()=>{
        navigate('/user/Register')
    }

    return (
        <motion.div style={styles.login}>
            <motion.div style={styles.innerLogin}>
                <motion.div >
                    <p style={styles.heading}>Login</p>
                    <p style={styles.subheading}>Hi!! Welcome back</p>
                </motion.div>
                <motion.div style={styles.inputContainer}>
                    <motion.div style={styles.emailContainer}>
                        <label htmlFor="email" style={styles.label}>Email</label>
                        <input style={styles.input} type="email" id="email" name="email" placeholder="Enter your Email"></input>
                    </motion.div>
                    <br></br>
                    <motion.div style={styles.emailContainer}>
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input style={styles.input} type="password" id="password" name="password" placeholder="Enter your Password"></input>
                    </motion.div>
                    <br></br>
                    <motion.a href='#forget-password' style={styles.link}>Forgot Password</motion.a>
                    <motion.button style={styles.button}
                        whileHover={{
                            scale: 1.04,
                            color: 'black',
                            backgroundColor: 'rgb(173, 167, 167)'
                        }}
                        whileTap={{
                            scale: 1.01,
                        }}
                    >Login</motion.button>
                    <motion.div className="Account" style={styles.accountText} >
                        No account yet?{" "}
                        <motion.a title="No account" style={styles.links} onClick={register} >
                            Create your account now
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Login;
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from './firebase'
import { toast } from 'react-toastify'
import { setDoc, doc } from 'firebase/firestore'


function SignUP() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')

    const handleRegister= async (e)=>{
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser;
            console.log(user)

            if (user){
                await setDoc(doc(db, "User", user.uid), {
                    email: email,
                    firstName : fname,
                    lastname : lname,
                })
                
            }

            console.log("User Successfully Registered")
            toast.success("User Registered Successfully!!", {
                position: "top-center",
            });
        }
        catch (error) {
            console.log(error.message)
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
    }

    return (
        <form onSubmit={handleRegister}>
            <h3>Sign Up</h3>

            <div className="mb-3">
                <label>First Name</label>
                <input
                 type="text"
                 className="form-control"
                 placeholder="Enter First Name"
                 value={fname}
                 onChange={(e) => setFname(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label>Last Name</label>
                <input
                 type="text"
                 className="form-control"
                 placeholder="Enter Last Name"
                 value={lname}
                 onChange={(e) => setLname(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label>Email Address</label>
                <input
                 type="email"
                 className="form-control"
                 placeholder="Enter Email Address"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label>Password</label>
                <input
                 type="text"
                 className="form-control"
                 placeholder="Enter Password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary" >
                    Submit
                </button>
            </div>

        </form>
    )


}

export default SignUP
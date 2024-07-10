import { GoogleAuthProvider, signInWithPopup } from "firebase/auth/web-extension";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function SignInWithGoogle() {
    function googleLogin() {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth. provider).then(async (result) =>{
            console.log(result)
            const user = result.user
            if (result.user) {
                await setDoc(doc(db, "User", user.uid), {
                    email: email,
                    firstName: user.displayName,
                    lastName: "",
                })
                toast.success("User Logged In Successfully", {
                    position: "top-center",
                })
                window.location.href = "/profile"
            }
        })
    }

    return (
        <div>
            <p className="continue-p">--Or continue with--</p>
            <div style={{ display: "flex", justifyContent: "center",  }}>

            </div>
        </div>
    )
}
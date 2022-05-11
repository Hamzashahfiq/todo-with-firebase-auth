import { db, auth } from '../../config/Firebase'
import { toast } from 'react-toastify';


export const Login = (userData, setLoginLoading) => async (dispatch) => {
    try {
        setLoginLoading(true)
        const userCredential = await auth.signInWithEmailAndPassword(
            userData.userEmail,
            userData.password
        );
        console.log(userCredential)
        var userDetail = userCredential.user;
        console.log(userDetail)
        if (userDetail) {
            dispatch({
                type: "LOGIN",
                payload: userDetail
            })
        }
    }

    catch (error) {
        toast.error(error.massage)
    }
    finally {
        setLoginLoading(false)
    }

}
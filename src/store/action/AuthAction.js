import { db, auth } from '../../config/Firebase'
import { toast } from 'react-toastify';


export const Login = (userData, setLoginLoading) => async (dispatch) => {
    try {
        setLoginLoading(true)
        const userCredential = await auth.signInWithEmailAndPassword(
            userData.userEmail,
            userData.password
        );
        var userDetail = userCredential.user;
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
    // finally {
    //     setLoginLoading(false)
    // }

}
export const Logout = (setLogoutLoading) => async (dispatch) => {
    try {
        // setLogoutLoading(true)
        console.log("abc")
        const res = await auth.signOut();
        console.log(res)
        dispatch({
            type: "LOGOUT",
        })

    }

    catch (error) {
        toast.error(error.massage)
    }
    // finally {
    //     // setLogoutLoading(false)
    // }

}

export const GetCurrentUser = (setLoader) => async (dispatch) => {
    try {
      setLoader(true);
      // firebase login
      auth.onAuthStateChanged((user) => {
        if (user) {
          dispatch({
            type: "LOGIN",
            payload: user,
          });}
        //   setLoader(false);}
        // } else {
        //   // User is signed out
        //   dispatch({
        //     type: "LOGOUT",
        //   })
        // }
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      // alert
    } finally {
      setLoader(false);
    }
  };
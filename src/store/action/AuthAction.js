import { db, auth } from '../../config/Firebase'
import { toast } from 'react-toastify';


export const doLogin = (userData, setLoginLoading) => async (dispatch) => {
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
export const doLogout = (setLogoutLoading) => async (dispatch) => {
  try {
     setLogoutLoading(true)
    const res = await auth.signOut();
    toast.success("Logout Successfully");
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
        });
      }
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
  } finally {
    setLoader(false);
  }
};
export const doSignup = (user, setLoader) => async (dispatch) => {
  try {
      setLoader(true);
      // firebase login
      // firestore - collect user add 
      const userCredential = await auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      var userData = userCredential.user;
      let resValue = await db.collection("users").add({
          ...user,
          id: userData.id
      });
      toast.success('New user will be created.');
      if (userData) {
        dispatch({
          type: 'LOGIN',
          payload: userData,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } 
    finally {
      setLoader(false);
    }
    // login details
};

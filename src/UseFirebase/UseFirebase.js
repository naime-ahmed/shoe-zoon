import { useEffect, useState } from 'react';
import initializeAuthentication from './FirebaseSetup/Firebase.init';

import { onAuthStateChanged, signOut, getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import swal from 'sweetalert';

initializeAuthentication();
const UseFirebase = () => {

    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();


    const registerUser = (name, email, password, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setAuthError("");
                const newUser = { email, displayName: name };
                setUser(newUser);

                // save user in database
                saveUser(email, name);

                updateProfile(auth.currentUser, {
                    displayName: name
                });
                swal({
                    title: "Good job!",
                    text: "successfully sign up!",
                    icon: "success",
                });
                navigate('/');

            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    };


    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setAuthError("");
                swal({
                    title: "Good job!",
                    text: "Sign in successful!",
                    icon: "success",
                  });
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch(error => {
                setAuthError(error?.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            swal({
                title: "done",
                text: "signOut successfully!",
                icon: "success",
            });
            setAuthError("")
        })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [auth]);


    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://morning-plains-75457.herokuapp.com/addUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    useEffect(() => {
        fetch(`https://morning-plains-75457.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    },[user.email])

    return {
        user,
        admin,
        authError,
        isLoading,
        registerUser,
        loginUser,
        logOut
    }
};

export default UseFirebase;

import intializeAutentication from '../Firebase/FirebaseInitialize';
import { getAuth ,GoogleAuthProvider,signInWithPopup, onAuthStateChanged,signOut,GithubAuthProvider } from "firebase/auth";
import react,{useState,useEffect} from 'react';   

intializeAutentication();

const useFirebase = () => {
const [user,setUser] = useState({});
const [error,setError] = useState('');

 const auth = getAuth();
 const googleProvider = new GoogleAuthProvider();
 const githubProvider= new GithubAuthProvider ();

 const signInUsingGoogle = () => {
    signInWithPopup(auth,googleProvider)
        .then(result =>{
            
            // const {displayName,email,photoURL} = result.user;
            // const loggedUser ={
            //     name:displayName,
            //     email:email,
            //     photo:photoURL,
            // }
            console.log(result.user);
            setUser(result.user);
            // setUser('');
        //   const user = result.user;
        //   console.log(user);
        })
        .catch(error=>{
           setError(error.message);
        })
    }

    const logOut =() =>{
        signOut (auth)
        .then(()=>{
            setUser({});
        })

       }

   useEffect( () => {
    onAuthStateChanged (auth, user=>{
        if(user){
            console.log("inside user",user)
            setUser(user);
        }
    })
   }
       ,[])

       const signInUsingGithub=() => {

           signInWithPopup(auth,githubProvider)
           .then(result=>{
               setUser(result.user);
           })
           .catch(error=>{
               setError(error.message);
           })
       }

      
    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        signInUsingGithub
    }

 }

export default useFirebase;
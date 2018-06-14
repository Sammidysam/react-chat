import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"
import Rebase from "re-base"

const config = {
    apiKey: "APIKEY",
    authDomain: "AUTHDOMAIN",
    databaseURL: "DATABASEURL",
    projectId: "PROJECTID",
    storageBucket: "STORAGEBUCKET",
    messagingSenderId: "MESSAGINGSENDERID"
}

const app = firebase.initializeApp(config)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

const db = app.database()

export default Rebase.createClass(db)
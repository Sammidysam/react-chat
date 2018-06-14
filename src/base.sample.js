import firebase from "firebase/app"
import database from "firebase/database"
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
const db = app.database()

export default Rebase.createClass(db)
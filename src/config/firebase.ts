import firebase from "firebase"

const firebaseConfig = {
	apiKey: "AIzaSyCsd9NhwvjQ2i4lMD5ZxQQKg4zo7YudETM",
	authDomain: "vally-q.firebaseapp.com",
	projectId: "vally-q",
	storageBucket: "vally-q.appspot.com",
	messagingSenderId: "262250697410",
	appId: "1:262250697410:web:34d757a703a2e8244de15b",
}

let instance: firebase.app.App

export default function getFirebase() {
	if (typeof window !== "undefined") {
		if (instance) return instance
		instance = firebase.initializeApp(firebaseConfig)
		return instance
	}

	return null
}

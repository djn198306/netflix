import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const firebaseConfig = {
	apiKey: 'AIzaSyCGqPg95L2kCjNCYmWIfEpG2s6sfLXiyZs',
	authDomain: 'netflix-a0108.firebaseapp.com',
	databaseURL: 'https://netflix-a0108.firebaseio.com',
	projectId: 'netflix-a0108',
	storageBucket: 'netflix-a0108.appspot.com',
	messagingSenderId: '703968547266',
	appId: '1:703968547266:web:31b6eac9c8658fcd69465b',
};

const firebase = Firebase.initializeApp(firebaseConfig);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };

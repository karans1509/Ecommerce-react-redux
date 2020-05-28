import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId } from '../env_vars'


let firebaseConfig = {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (user, data) => {

    if(!user) {
        return;
    }

    const userRef = firestore.collection('/users').doc(user.uid);

    const snapshot = await userRef.get();
    console.log(snapshot);

    if(!snapshot.exists) {

        const { displayName, email } = user;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...data
            })
            
        } catch (error) {
            console.log(error);
        }
    }

    return userRef;
}

export const addCollectionAndItems = async (collectionKey, objectsToAdd) => {

    console.log(collectionKey);
    const collectionRef = firestore.collection(collectionKey);

    console.log(collectionRef)

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })

    return await batch.commit()
}

export const convertCollectionToMap = (collections) => {

    const convertedCollection = collections.docs.map(doc => {

        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    }) 

    console.log(convertedCollection);

    return convertedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

export default firebase;
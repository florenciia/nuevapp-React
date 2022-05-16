import {collection, getDoc, getDocs, query, where} from 'firebase/firestore';
import db from './firebaseConfig';

async function fetchData(tipo) {
  let q
  tipo ? q = query(collection(db, 'perfumes'), where('tipo', '==', tipo)) : q = collection(db, 'perfumes')

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id, ...doc.data()
  }));
}

export const getById = async (id) => {
  let cid = Number(id)
  let q = query(collection(db,'perfumes'), where('id', '==', cid))
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs[0].data()

}

export default fetchData;
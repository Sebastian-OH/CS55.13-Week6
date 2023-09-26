import app from "./firebase-app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

const db = getFirestore(app);





export async function datingSortedList() {
    const snapshot = await getDocs( collection(db, "DatingProfiles") );
    const jsonObj = snapshot.docs.map (
        (d) => (
            {
                id: d.id,
                ...d.data()
            }
        )
    );

    jsonObj.sort(
        function(a,b) {
          return a.name.localeCompare(b.name);
        }
      );


    return jsonObj.map(
        function(item) {
            return {
                id: item.id.toString(),
                name: item.name
            };
        }
    );
  }





  

  export async function datingIds() {
    const snapshot = await getDocs( collection(db, "DatingProfiles") );
    const jsonObj = snapshot.docs.map (
        (d) => (
            {
                id: d.id,
            }
        )
    );

    return jsonObj.map(
      function(item) {
        return {
          params: {
            id: item.id.toString()
          }
        };
      }
    );
    
  }







  export async function datingData(idRequested) {
    const docRef = doc(db, "DatingProfiles", idRequested);
    const d = await getDoc(docRef);

    let objReturned;
    if(!d.exists) {
      objReturned = {};
    }else {
      objReturned = d.data();
    }

    return objReturned;
  }
// i need the node default modules for fs and path
import fs from 'fs';
import path from 'path';

// get filepath to data directory
const dataDir = path.join( process.cwd(), 'data' );

// function returns names and ids for all json objects in array, sorted by name property
export function getSortedList() {
  // get filepath to json file
  const filePath = path.join(dataDir, 'pokemon.json');
  
  // load json file contents
  const jsonString = fs.readFileSync(filePath,'utf8');
  
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);

  // sort json array by name property
  jsonObj.sort(
    function(a,b) {
      return a.name.localeCompare(b.name);
    }
  );

  // use map() on array to extract just id + name properties into new array of obj values
  return jsonObj.map(
    function(item) {
      return {
        id: item.id.toString(),
        name: item.name
      };
    }
  );
}

// function returns ids for all json objects in array
export function getAllIds() {
  // get filepath to json file
  const filePath = path.join(dataDir, 'pokemon.json');
  
  // load json file contents
  const jsonString = fs.readFileSync(filePath,'utf8');
  
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);

  // use map() on array to extract just id + name properties into new array of obj values
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

// function return ALL of the properties for one single object with a match id prop value
export async function getData(idRequested) {
  // get filepath to json file
  const filePath = path.join(dataDir, 'pokemon.json');
  
  // load json file contents
  const jsonString = fs.readFileSync(filePath,'utf8');
  
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);

  // find object value in array that has matching id
  const objMatch = jsonObj.filter(
    function(obj) {
      return obj.id.toString() === idRequested;
    }
  );

  // extract object value in filtered array if any
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }

  // return object value found
  return objReturned;
}






// export function datingSortedList() {
//   // get filepath to json file
//   const filePath = path.join(dataDir, 'dating.json');
  
//   // load json file contents
//   const jsonString = fs.readFileSync(filePath,'utf8');
  
//   // convert string from file into json array object
//   const jsonObj = JSON.parse(jsonString);

//   // sort json array by name property
//   jsonObj.sort(
//     function(a,b) {
//       return a.name.localeCompare(b.name);
//     }
//   );

//   // use map() on array to extract just id + name properties into new array of obj values
//   return jsonObj.map(
//     function(item) {
//       return {
//         id: item.id.toString(),
//         name: item.name
//       };
//     }
//   );
// }














export function datingSortedList() {
    const newFilePath = path.join(dataDir, 'dating.json');
    const newJsonString = fs.readFileSync(newFilePath,'utf8');
    const newJsonObj = JSON.parse(newJsonString);
    newJsonObj.sort(
      function(a,b) {
        return a.name.localeCompare(b.name);
      }
    );
    return newJsonObj.map(
      function(newItem) {
        return {
          id: newItem.id.toString(),
          name: newItem.name
        };
      }
    );
  }



  export function datingIds() {
    const newFilePath = path.join(dataDir, 'dating.json');
    const newJsonString = fs.readFileSync(newFilePath,'utf8');
    const newJsonObj = JSON.parse(newJsonString);
    return newJsonObj.map(
      function(newItem) {
        return {
          params: {
          id: newItem.id.toString()
          }
        };
      }
    );
  }


  export async function datingData(idRequested) {
    const newFilePath = path.join(dataDir, 'dating.json');
    const newJsonString = fs.readFileSync(newFilePath,'utf8');
    const newJsonObj = JSON.parse(newJsonString);
    const newObjMatch = newJsonObj.filter(
      function(newObj) {
        return newObj.id.toString() === idRequested;
      }
    );
    let newObjReturned;
    if (newObjMatch.length > 0) {
      newObjReturned = newObjMatch[0];
      const hobbieFilePath = path.join(dataDir, 'datingHobbies.json');
      const hobbieJsonString = fs.readFileSync(hobbieFilePath,'utf8');
      const hobbieJsonObj = JSON.parse(hobbieJsonString);
      const hobbieObjMatch = hobbieJsonObj.filter(
      function(obj) {
        return obj.owner.toString() === idRequested;
      }
    );
    newObjReturned.hobbies = hobbieObjMatch;

    } else {
      newObjReturned = {};
    }
    return newObjReturned;
  }
  
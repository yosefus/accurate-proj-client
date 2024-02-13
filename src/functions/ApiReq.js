import axios from "axios";
// מתקבל מהמשתמש
// {nameMethod, path ,data }

// קישור קבלת מידע
// https://jsonplaceholder.typicode.com


async function apiReq({name, path, data}) {
console.log('api req start🧑🏽\n',{name, path, data});
 try {
    // GET request for remote image in node.js
  const response = await axios({
    method: name,
    url: `https://mock-whatsup.onrender.com/api/` + path,
    data,
  });
console.log("api req end 😁\n", {response});

  return response.data
}
  catch (error) {
    console.log(error);
    throw error
 } 
}

// apiReq({name: "get", path: "/campaign"}).then((x) => console.log(x));


export default apiReq;

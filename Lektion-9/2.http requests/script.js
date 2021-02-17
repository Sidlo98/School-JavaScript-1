/* 
  GET
  POST
  PUT
  PATCH
  DELETE
*/

const getRequest = (url, cb) => {

  const http = new XMLHttpRequest();
  
  
  http.addEventListener('readystatechange', () => {
    // console.log(http);
  
    if(http.readyState === 4 && http.status === 200) {
      // console.log(http.responseText);
      const data = JSON.parse(http.responseText);
      cb(undefined, data);
    } 
    else if (http.readyState === 4) {
      // console.log('404 could not fetch data');
      cb('404 could not fetch data', undefined);
    }
  
  })
  
  http.open('GET', url);
  http.send();

}

// console.log(1);
// console.log(2);

// getRequest('user.json', (err, data) => {

//   if(err) {
//     console.log(err);
//   }
//   else {
//     // console.log(JSON.parse(data));                 konverterar från JSON till JS
//     // console.log(JSON.stringify(data));             konverterar JS till JS
//     console.log(data);
//   }

// })

// console.log(3);
// console.log(4);

getRequest('user.json', (err, data) => {
  console.log(data);
  getRequest('todos.json', (err, data) => {
    console.log(data);
    getRequest('todos2.json', (err, data) => {
      console.log(data);
    })
  })
})
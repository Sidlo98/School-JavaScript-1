// const getData = async () => {                // en async funktion get oss alltid ett promise

// }

// const test = getData();
// console.log(test);

const getJson = async (url) => {
  const response = await fetch(url)
  // console.log(response);


  if(response.status !== 200) {
    throw new Error('cant fetch the data')
  }
  const data = await response.json();
  // console.log(data);



}


// const test = getJson('user.json');
// console.log(test);

getJson('users.json')
  .then(data => console.log(data))
  .catch(err => console.log(err.message))
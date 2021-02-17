fetch('user.json')
  .then(response => {
    // console.log('resolved ', response)
    // const data = response.json()
    // console.log(data);
    return response.json()
  })
  .then(data => {
    console.log(data);
    return fetch('todos.json');
  })
  .then(res => res.json())
  .then(data => console.log(data))


  .catch(err => {
    console.log(err);               // ger oss nästa bara network error
  })
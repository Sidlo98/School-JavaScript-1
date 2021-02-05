export const validate = (user, cb) => {
  if(user.firstName !== '' && user.lastName !== '' && user.email.trim() !== '' && user.password.trim().length > 3){
    console.log('Validation ok')
    cb();
  }
  else {
    console.log('Validation error')
  }
}

export const hasNumber = string => {
  return/\d/.test(string);
}
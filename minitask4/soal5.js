// const test = [1, 2, 3]
const test = {
    name: 'sandi',
    age: 25,
  }
  
  if (test instanceof Array) {
    console.log('Ini adalah sebuah array')
  } else if (test instanceof Object) {
    console.log('Ini adalah sebuah object')
  } else {
    console.log('Ini bukan array maupun object')
  }
  
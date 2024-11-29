const data =[
     {
    id: 1,
    username: 'sandi123',
    password: 'sandi12345',
    name:"sandi",
    gender:"male",
    isMarried: false
}, 
{
    id: 2,
    username: 'yaya',
    password: 'yaya1234',
    name:"yaya",
    gender:"female",
    isMarried: true
}]



const getData =  (username) => {
     const dataFound = [];
     for (let i = 0; i < data.length; i++) {
        if(data[i].username === username ){
            dataFound.push(data[i]);
        }
    }
    if(dataFound == [] || dataFound === null){
        return []
    }
    return dataFound 
}


const login =  (username, password) => {
    try {
        if(typeof username !== "string"){
            throw Error("username anda salah")
        }
      const dataUser =  getData(username, password)
        
      if(dataUser?.[0]?.length != 0){
          if (dataUser?.[0]?.username !== username || dataUser?.[0]?.password !== password) {
            throw Error('username dan password anda salah')
          } else {
            const name = dataUser?.[0]?.name
            return  {
              username: `${username}, name: ${name}`,
            }
          }
      } else{
        throw Error("anda bukan warga kami ")
      }
    } catch (error) {
      console.log(error)
    }
  }

const username = 'sandi123'
const password = 'sandi12345'
console.log( login(username, password))


import APIManager from "./APIManager";


export default Object.create(APIManager,{
  resource: {
    value: "animals"
  }
})
// const remoteURL = "http://localhost:5002"
  // get(id) {
  //   return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
  // },
  // getAll() {
  //   return fetch(`${remoteURL}/animals`).then(e => e.json())
  // },
  // removeAndList(id) {
  //   return fetch(`http://localhost:5002/animals/${id}`, {
  //     method: "DELETE"
  //   })
  //   .then(r => r.json())
  //   .then(() => fetch(`http://localhost:5002/animals`))
  //   .then(e => e.json)
  // }
const remoteURL = "http://localhost:5002"


//just a javascript module not a component
export default {
  get(id, resource) {
    return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json())
  },
  getAll(resource) {
    return fetch(`${remoteURL}/${resource}`).then(e => e.json())
  },
  delete(id, resource) {
      return fetch(`${remoteURL}/${resource}/${id}`,{
          method: "DELETE"
      })
      .then(e => e.json())
  }
}
// const remoteURL = "http://localhost:5002"


//just a javascript module not a component
// export default {
//   get(id, resource) {
//     return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json())
//   },
//   getAll(resource) {
//     return fetch(`${remoteURL}/${resource}`).then(e => e.json())
//   },
//   delete(id, resource) {
//       return fetch(`${remoteURL}/${resource}/${id}`,{
//           method: "DELETE"
//       })
//       .then(e => e.json())
//   }
// }
// const apiManager = Object.create({},{
//   get(id, resource) {
//     return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json())
//   },
//   getAll(resource) {
//     return fetch(`${remoteURL}/${resource}`).then(e => e.json())
//   }
// })
const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    resource: {
      value: ""
    },
    get: {
        value: function (id) {
            /*
                Since the purpose of this module is to be used by
                all of the more specialized one, then the string
                of `animals` should not be hard coded here.
            */
            return fetch(`${remoteURL}/${this.resource}/${id}`).then(e => e.json())
        }
    },
    all: {
        value: function () {
            return fetch(`${remoteURL}/${this.resource}`).then(e => e.json())
        }
    },
    removeAndList: {
      value: function (id) {
        return fetch(`${remoteURL}/${this.resource}/${id}`, {
          method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`${remoteURL}/${this.resource}`))
        .then(e => e.json())
        // .then(() => this.all())
      }
    }
})
  // removeAndList(id) {
  //   return fetch(`http://localhost:5002/animals/${id}`, {
  //     method: "DELETE"
  //   })
  //   .then(r => r.json())
  //   .then(() => fetch(`http://localhost:5002/animals`))
  //   .then(e => e.json)
  // }
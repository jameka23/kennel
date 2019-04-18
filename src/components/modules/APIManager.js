const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    resource: {
      value: ""
    },
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/${this.resource}/${id}`).then(e => e.json())
        }
    },
    all: {
        value: function () {
            return fetch(`${remoteURL}/${this.resource}`).then(e => e.json())
        }
    },
    delete: {
      value: function(id) {
        return fetch(`${remoteURL}/${this.resource}/${id}`, {
          method: "DELETE"
        })
        .then(e => e.json())        
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
    },
    post: {
      value: function (newAnimalObj) {
        return fetch(`${remoteURL}/${this.resource}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newAnimalObj)
        }).then(r => r.json())
      }
    }
})
// post(newAnimal) {
//   return fetch(`${remoteURL}/animals`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newAnimal)
//   }).then(data => data.json())
// }
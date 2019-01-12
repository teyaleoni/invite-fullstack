const express = require('express')
const Router = express.Router()
const axios = require('axios')

const data = {
  people: [],

}

axios.get('https://randomuser.me/api/?results=100&?inc=name,phone,email,picture').then(resp => {
  people = resp.data.results.map( (user, i) => (
    { id: user.id= i + 1,
      picture: user.picture.large,
      fname: user.name.first,
      lname: user.name.last,
      phone: user.phone,
      email: user.email,
      status: "pending"
    }
  )
)
  })

Router.get('/people', (req, res, next) => {
    res.json({
      people: people.find(p => p.status === "pending")
    })   
  })




Router.get('/going', (req,res,next) => {
  const goingPeople = people.filter(person => person.status === "going")
  res.json(goingPeople)
})

Router.get('/notgoing', (req,res,next) => {
  const notPeople = people.filter(person => person.status === "notgoing")
  res.json(notPeople)
})

Router.patch('/people/', (req,res,next) => {
  const id = req.body.id
  const status = req.body.status

  people = people.map(person => {
    if (person.id == id) {
      return {...person, status}
    } else {
      return person
    }
  })

  res.json(people)
})


module.exports = Router
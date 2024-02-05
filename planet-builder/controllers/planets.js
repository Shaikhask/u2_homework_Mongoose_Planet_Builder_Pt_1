const planet = require("../models/planet")

const newPlanet = (req, res) => {
  const title = "Add Planet"
  res.render("planets/new", { title })
}
const create = (req, res) => {
  try {
    planet.create(req.body)
    res.redirect("/planets/new")
  } catch (error) {
    console.log(error)
    res.redirect("/planets/new")
  }
}

const index = async (req, res) => {
  try {
    const planets = await planet.find({})
    const title = "All Planets"
    console.log(planets)
    res.render("planets/index.ejs", { planets, title })
  } catch (error) {
    console.log(error)
    res.redirect("/")
  }
}

module.exports = {
  newPlanet,
  create,
  index,
}
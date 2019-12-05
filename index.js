module.exports = (req, res) => {
    res.status(200).send("hello there!");
  }

  module.exports = (req, res) => {
    const { name = 'World' } = req.query
    res.send(`Hello ${name}!`)
  }
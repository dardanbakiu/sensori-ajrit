const login = (req, res) => {
  console.log(req.body)
  res.json({'data': 'login here'})
}

module.exports = {
  login
};
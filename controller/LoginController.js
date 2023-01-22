const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const users = [
    { id: 1, email: 'dardan', password: 'dardan' },
    { id: 2, email: 'user2', password: 'password2' }
  ];

  const { email, password } = req.body;
  // Find the user in the array of users
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    // If the user is not found, return a 401 Unauthorized response
    res.status(401).json({error: true, msg: 'Invalid email or password'});
  } else {
    console.log('inside else heloooooo ketu')
    res.status(200).json({error: false})
    // If the user is found, create and sign a JWT with the user's id as the subject
    // const token = jwt.sign(
    //   { sub: user.id }, 'secretkey',  { expiresIn: 3600 },);

    // // Send the token back in the response
    // res.send({ token });
  }
}

module.exports = {
  login
};
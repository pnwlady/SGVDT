module.exports = exports = (req, res, next) => {
  try {
    var authHeader = req.headers.authorization;
    var namePassword = authHeader.split(' ')[1];
    var namePassBuf = new Buffer(namePassword, 'base64');
    var namePassPT = namePassBuf.toString();
    namePassBuf.fill(0);
    var namePassArr = namePassPT.split(':');
    req.auth = {
      username: namePassArr[0],
      password: namePassArr[1],
      zipcode: namePassArr[2]
    };
    if (req.auth.username.length < 1) throw new Error('please enter a username');
    if (req.auth.password.length < 1) throw new Error('please enter password');
    if (req.auth.zipcode.length < 1) throw new Error('please enter zip code');
  } catch (e) {
    console.log(e);
    return res.status(400).json({ msg: 'sorry, there was an error, please try again' });
  }
  next();
};

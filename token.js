/* eslint-disable import/prefer-default-export */
import jwt from 'jsonwebtoken';

const EnsureToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization;

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    jwt.verify(bearerToken, 'secretkey', (err) => {
      if (err) {
        res.sendStatus(403);
      } else {
        next();
      }
    });
  }
};

export default EnsureToken;

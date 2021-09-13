module.exports = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; 

    if (token && token === 'abcd123') {
        next();
    }else{
        return res.status(401).send({ error: 'You must log in!' });
    }

  };
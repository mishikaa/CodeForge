// Middleware function
const isAdmin = (req, res, next) => {
    const isAdmin = true;

    if(isAdmin) {
        next();
    } else {
        return res.send({error: "Not an admin"})
    }
}

module.exports = {isAdmin}
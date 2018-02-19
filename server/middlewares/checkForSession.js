module.exports = function(req, res, next) {
    const { session } = req;

    if(!session) {
        session.user = {username: '', id: -1};
    }
    next();
};
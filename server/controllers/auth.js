module.exports = {
    register: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { username } = req.body;
        const { session } = req;
        dbInstance.create_user([username])
            .then(() => {
                dbInstance.read_user([username])
                    .then(users => {
                        session.user.username = users[0].username;
                        session.user.id = users[0].user_id;
                        res.status(200).send(session.user);
                    })
                    .catch(() => res.status(500).send());
            })
            .catch(() => res.status(500).send());
    },
    login: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { username } = req.body;
        const { session } = req;
        dbInstance.read_user([username])
            .then(user => {
                session.user.username = user[0].username;
                session.user.id = user[0].user_id;
                res.status(200).send(session.user);
            })
            .catch(() => res.status(500).send());
    },
    logout: (req, res, next) => {
        const { session } = req;
        session.destroy();
        res.status(200).send();
    }
}
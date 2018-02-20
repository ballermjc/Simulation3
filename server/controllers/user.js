module.exports = {
    getUser: (req, res) => {
        const dbInstance = req.app.get('db');
        const { session } = req;
        dbInstance.read_user([session.user.id])
            .then(user => res.status(200).send(user))
            .catch( () => res.status(500).send());
    },    
    updateUser: (req, res) => {
        const dbInstance = req.app.get('db');
        const { session } = req;
        const { firstName, lastName, gender, hairColor, eyeColor, hobby, birthdayDay, birthdayMonth, birthdayYear } = req.body;

        dbInstance.update_user([ firstName, lastName, gender, hairColor, eyeColor, hobby, birthdayDay, birthdayMonth, birthdayYear])
        .then(() => {
            dbInstance.read_user([session.user.id])
            .then(user => res.status(200).send(user))
            .catch( () => res.status(500).send());
        })
        .catch(() => res.status(500).send());
    },
    getUserList: (req, res) => {
        const dbInstance = req.app.get('db');
        const { session } = req;
        dbInstance.get_user_list([session.user.id])
            .then(users => res.status(200).send(users))
            .catch( () => res.status(500).send());
    },
    searchUsers: (req, res) => {
        const dbInstance = req.app.get('db');
        const { session, query } = req;
        
    }
}
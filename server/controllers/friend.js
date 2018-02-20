// sql files & user.friends instead of friends? 

module.exports = {
    getFriends: (req, res) => {
        const dbInstance = req.app.get('db');
        const { session } = req;
        dbInstance.read_friend([session.user.id])
        .then(friends => res.status(200).send(friends))
        .catch(err => res.status(500).send());
    },
    postFriends: (req, res) => {
        const dbInstance = req.app.get('db');
        const { session } = req;
        const { id } = req.params;
        dbInstance.add_friend([id])
        dbInstance.read_friend([session.user.id])
        .then(friends => res.status(200).send(friends))
        .catch(err => res.status(500).send());
    },
    removeFriends: (req, res) => {
        const dbInstance = req.app.get('db');
        const { session } = req;
        const { id } = req.params;
        dbInstance.delete_friend([ id ])
        .then(friends => res.status(200).send(friends))
        .catch(err => res.status(500).send());
    }
}
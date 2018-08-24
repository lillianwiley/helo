const users = [{username: 'lillianwiley', password: 'hello'}]

module.exports = {
    login: (req, res) => {
        const {username, password} = req.body;

        let user = users.find(user => username === user.username && password === user.password);

    if(user){
        req.session.user = user;
        res.status(200).send(req.session);
    } 
        else {
        res.status(403).send('You need to create an account');
        }

    },

    register: (req, res) => {
        users.push({
            username: req.body.username,
            password: req.body.password
        })

        req.session.user = {}
        req.session.user.username = req.body.username;

        res.status(200).send(req.session)
    }

}
import Network from './network.service';

class UserService extends Network {
    register(user) {
        return this.send('PUT', '/user', user )
    }
    me() {
        return this.send('GET', '/user/me');
    }
    login(email, password) {
        return this.send('POST', '/user/login', {
            email, password
        });
    }
    getAll() {
        return this.send('GET', '/user')
    }
    createUser(user) {
        const data = new FormData();
        for(let prop in user) {
            data.append(prop, user[prop])
        }
        return this.send('PUT', '/user', data)
    }
    edit(id, user) {
        return this.send('POST', `/user/${id}`, user)
    }

}
export default new UserService();
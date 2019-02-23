import axios from 'axios';


export default {

    getAllUsers: function() {
        return axios.get('/api/users');
    }

};
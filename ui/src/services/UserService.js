const axios = require('axios');

async function getUsers() {

    return await axios.get('/api/users');
}

async function getContacts() {

    return await axios.get('/api/contacts');
    
}

async function getAddresses() {

    return await axios.get('/api/addresses');
    
}

export async function getUserInfo() {

    try{
        const responses = await Promise.all([getUsers(), getContacts(), getAddresses()]);


        console.log(responses)
        
        const users = responses[0].data;
        const contacts = responses[1].data;
        const addresses = responses[2].data;
        const result = [];
        users.map((user) => {
          result.push({
            ...user, 
            ...contacts.find((contact) => contact.userId === user.userId), 
            ...addresses.find((address) => address.userId === address.userId)})
        });
        return result;
        
    }catch(error) {
        return [];
    }
}
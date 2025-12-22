const assert = require('assert');
const {expect} = require('chai');


describe ('Testing Fitur Website Belajar Bareng', () =>  {
    let token 
    //Hit API LOGIN
    it('Get API Login', async () => {
        const response = await fetch ('https://belajar-bareng.onrender.com/');
        assert.strictEqual(response.status, 200);
        expect(response.status).to.equal(200);
        //expect(response.status).toBe(200);
        //expect(response.data).toHaveProperty('token');
    });

    //Login Valid 
    it('Login Valid', async () => {
        const response = await fetch ('https://belajar-bareng.onrender.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'admin',
                password: 'admin',
            }),
        });
        expect(response.status).to.equal(200);
        const data = await response.json();
        //console.log(data)
        expect(data.message).to.equal('Login successful');
        expect(data).to.have.property('token');
        expect(data.token).not.to.be.empty;
        token = data.token;
        //console.log(token)   
    });

    //Login Invalid 
    it('Login Invalid', async () => {
        const response = await fetch ('https://belajar-bareng.onrender.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'admin',
                password: 'reky',
            }),
        });
        expect(response.status).to.equal(401);
        const data = await response.json();
        expect(data.message).to.equal('Invalid username or password!');  
        //console.log(data)
    });

    //List User
    it('User List', async () => {
        const response = await fetch ('https://belajar-bareng.onrender.com/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
        })

        // Assert
        expect(response.status).to.equal(200);
        const x = await response.json();
        //console.log(x)
    });

    //Add User Valid
    it('Add New User Valid', async () => {
        const response = await fetch ('https://belajar-bareng.onrender.com/api/add-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                username: "RekyFransJ",
                age : 10
            }),
        });
        expect(response.status).to.equal(201);
        const y = await response.json();
        //console.log(y)
        expect(y.username).to.equal('RekyFransJ');
        expect(y.age).to.equal(10);
        expect(y.message).to.equal('User successfully added, Hi RekyFransJ!')
        
    });

    //Add User Existing
    it('Add New User Existing', async () => {
        const response = await fetch ('https://belajar-bareng.onrender.com/api/add-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                username: "RekyFrans",
                age : 28
            }),
        });
        expect(response.status).to.equal(400);
        const z = await response.json();
        // console.log(z)
        expect(z.message).to.equal('Username \"RekyFrans\" already exists!');       
    });
})
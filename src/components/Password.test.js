let fns = require('./../utils/functions');
let axios = require('axios');
let MockAdapter = require('axios-mock-adapter');
describe('password tests', ()=>{
    test('proper username (tylerlewis) returns true',()=>{
        let result = fns.usernameCheck('tylerlewis')
        expect(result).toBeTruthy();
    })
    test('fewer than 6 characters fails', ()=>{
        let result = fns.usernameCheck('tyler');
        expect(result).toBeFalsy();
    })
    test('ensure username has no spaces', ()=> {
        let result = fns.usernameCheck(' tyler lewis');
        expect(result).toBeFalsy();
    })
    test.only('async test', ()=>{
       return axios.get('https://joes-autos.herokuapp.com/api/vehicles')
        .then(res =>{
            expect(res.data.length).toBe(20)
        })
    })
})
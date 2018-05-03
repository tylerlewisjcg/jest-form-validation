let fns = require('./../utils/functions');

describe('form validation tests', ()=>{
    test('Food should not return true', ()=> {
        ///arrange/act
        let result = fns.ageCheck('food');
        // assert
        expect(result).toBeFalsy();
    })
})
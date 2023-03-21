describe('Mocha Hooks', function(){

    before('Execute Before All Tests', function(){
        console.log('Execute before all tests')
    });

    beforeEach('Execute Before Each Test', function(){
        console.log('Execute before each test')
    });

    after('Execute After All Tests', function(){
        console.log('Execute after all tests')
    });

    afterEach('Execute after each Test', function(){
        console.log('Execute after each tests')
    });

    it('Mocha Hooks Test', function(){
        console.log('Mocha - This is a test for mocha hooks')
    })
})
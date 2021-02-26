describe('User Onboarding app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const confirmInput = () => cy.get('input[name=confirm]')
    const termsCheckbox = () => cy.get('input[name=terms]')
    const submitButton = () => cy.get('button[id=submitButton]')

    it('sanity check to make sure tests work', () => {
        expect(1 + 1).to.equal(2)
    })

    it('proper elements are shown', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        confirmInput().should('exist')
        termsCheckbox().should('exist')
        submitButton().should('exist')
    })

    // describe('Filling the inputs', () => {
    //     it('can enter text in input fields', () => {
    //         nameInput()
    //             .clear()
    //             .type('test Name')
    //             .should('have.value', 'test Name')

    //         emailInput()
    //             .clear()
    //             .type('test@email.net')
    //             .should('have.value', 'test@email.net')

    //         passwordInput()
    //             .clear()
    //             .type('testpw')
    //             .should('have.value', 'testpw')

    //         confirmInput()
    //             .clear()
    //             .type('testpw')
    //             .should('have.value', 'testpw')

    //         termsCheckbox().uncheck().check().wait(5000)
    //     })
    // })

    describe('Submit form data with Submit button', () => {
        it('can click Submit after fields are properly filled, enter data to create new user, and clear inputs', () => {
            nameInput().type('test Name')
            emailInput().type('test@email.net')
            passwordInput().type('testpw')
            confirmInput().type('testpw')
            termsCheckbox().check()
            submitButton().wait(5000).click().wait(5000)
        })
    })

    describe('Get validation when a field is incomplete or incorrect', () => {
        it('can complete each field correctly, then clear and/or enter invalid data to trigger error message', () => {
            nameInput().type('test Name').wait(2000).clear()
            emailInput().type('test@email.net').wait(2000).clear().wait(2000).type('invalid email')
            passwordInput().type('testpw').wait(2000).clear().wait(2000).type('pw')
            confirmInput().type('testpw')
            termsCheckbox().check().wait(2000).uncheck().wait(5000)
        })
    })

    describe('Complete form correctly to activate Submit button, but then clear Confirm Password to trigger deactivation of Submit button', () => {
        it('matches, then unmatches Confirm Password', () => {
            nameInput().type('test Name')
            emailInput().type('test@email.net')
            passwordInput().type('testpw')
            confirmInput().type('testpw')
            termsCheckbox().check()
            confirmInput().wait(5000).clear()
        })
    })
})
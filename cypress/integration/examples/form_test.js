describe('Pizza Place app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const nameInput = () => cy.get('input[name=name]')
    const submitButton = () => cy.get('button[id=submitButton]')

    it('sanity check to make sure tests work', () => {
        expect(1 + 1).to.equal(2)
    })

    it('proper elements are shown', () => {
        nameInput().should('exist')
        submitButton().should('exist')
    })

    describe('Submit form data with Submit button', () => {
        it('can click Submit after fields are properly filled', () => {
            nameInput().type('test Name')
            submitButton().click().wait(5000)
        })
    })
})
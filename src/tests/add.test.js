const add = ( a, b ) => a + b
const generateGreeting = ( name = 'Anonymous' ) => `Hello ${name}` 

test('should add two numbers', () => {
    const result = add ( 3, 7 )
    expect ( result ).toBe ( 10 )
})

test('should generate valid greeting', () => {
    const greeting = generateGreeting ( 'Khushdeep' )
    expect ( greeting ).toBe ( 'Hello Khushdeep' )
})

test('should generate valid greeting for no name', () => {
    const greeeting = generateGreeting ()
    expect ( greeeting ).toBe ( 'Hello Anonymous' )
})




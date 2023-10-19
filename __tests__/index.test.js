const{sum,subtract,multiply,divide, factorial} = require('../index.js')

it('should add two numbers correctly', ()=>{
    const result = sum(4,6)

    expect(result).toBe(10)
})

it('should subtract two numbers correctly', ()=>{
    const result = subtract(3,6)

    expect(result).toBe(-3)
})

it('should multiply two numbers correctly', ()=>{
    const result = multiply(4,6)

    expect(result).toBe(24)
})

it('should divide two numbers correctly', ()=>{
    const result = divide(10,5)

    expect(result).toBe(2)
})

describe('Should do factorial', () => {
    it('should throw an error if the n in factorial is negative', () => {
        expect(()=>factorial(-1)).toThrow('Factorial is not defined for negative numbers')
    })

    it('should return 1 if n in factorial is zero', ()=>{
        expect(factorial(0)).toBe(1)
    })

    it('should return the factorial if the number is positive', ()=>{
        expect(factorial(5)).toBe(120)
    })
})
const each = require("jest-each").default
const getLargest = require("../getLargest")

describe("getLargest", () => {
    test("It is a function", () => {
        expect(typeof getLargest).toBe("function");
    })
    
    // test("It returns the largest value", () => {
    //     const result = getLargest(1, 2, 3);
    //     expect(result).toEqual(3);
    // })

    describe("It handles normal inputs successfully", () => {

        // test("", () => {
        //     const result = getLargest(1, 2, 3)
        //     expect(result).toEqual(3)
        // })

        // test("", () => {
        //     const result = getLargest(3, 3, 3)
        //     expect(result).toEqual(3)
        // })

        // test("", () => {
        //     const result = getLargest(-1, -2, 3)
        //     expect(result).toEqual(3)
        // })

        // test("", () => {
        //     const result = getLargest(0.4, 1.5, 3)
        //     expect(result).toEqual(3)
        // })

        each([
            [[1, 2, 3], 3],
            [[9, 8, 7], 9],
            [[12, 36, 19], 36],
        ]).test("", (arr, expected) => {
            expect(getLargest(...arr)).toEqual(expected)
        })

    })
})


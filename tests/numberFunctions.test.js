const each = require("jest-each").default
const { getLargest, getSmallest } = require("../numberFunctions")


describe("getLargest", () => {
    test("It is a function", () => {
        expect(typeof getLargest).toBe("function");
    })
    
    // test("It returns the largest value", () => {
    //     const result = getLargest(1, 2, 3);
    //     expect(result).toEqual(3);
    // })

    describe("It reports invalid inputs correctly", () => {

        test("It throws an error if one of the three inputs is undefined", () => {

            expect(() => {
                getLargest(1, 2)
            }).toThrow("Error: all inputs must have a value")

        })

    })

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
        ]).test("%s -> %s", (arr, expected) => {
            expect(getLargest(...arr)).toEqual(expected)
        })

    })
})

describe("getSmallest", () => {
    test("It is a function", () => {
        expect(typeof getLargest).toBe("function");
    })

    describe("It reports invalid inputs correctly", () => {

        test("It throws an error if one of the three inputs is undefined", () => {

            expect(() => {
                getSmallest(1, 2)
            }).toThrow("Error: all inputs must have a value")

        })

    })

    describe("It handles normal inputs successfully", () => {

        each([
            [[1, 2, 3], 1],
            [[9, 8, 7], 7],
            [[12, 36, 19], 12],
        ]).test("%s -> %s", (arr, expected) => {
            expect(getSmallest(...arr)).toEqual(expected)
        })

    })
})


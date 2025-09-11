// jest

// test file name need to have the same name as the file that sould be tested "[name].test.ts"

import { concat, div , failedString, slowString} from "./strings"

it('should say "Hello, world!"', () => {
    expect(
        concat("Hello,", " world!")
    ).toEqual("Hello, world!");
});

it("should divide", () => {
    expect(div(10, 2)).toEqual(5);
});

it("should fail to divide by zero", () => {
    expect(() => {
       div(10, 0); 
    }).toThrow();
});


test("slow string fetches sampel text", async () => {
    slowString()
        .then((data) => {
            expect(data).toEqual("sample");
        })
        .catch((err) => expect(err).toBeUndefined());
});

test("failed string fails with a 'whoops'", async () => {
  failedString()
        .then((data) => {
            expect(data).toBeUndefined();
        })
        .catch((err) => expect(err).toEqual("whoops"));
})


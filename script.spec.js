const googleSearch = require("./script");

const dbMock = ["dog.com", "anothersite.com", "mrvel.com", "flowerphotos.com"];

describe("Google search ", () => {
  it("Should pass with blank", () => {
    expect(googleSearch("test", dbMock)).toEqual([]);
  });
  
  it("Should return one element", () => {
    expect(googleSearch("flower", dbMock)).toEqual(["flowerphotos.com"]);
  });
  
  it("Should return zero elements with undefined", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
  });
  
  it("Should return only three elements with '.com' search", () => {
    expect(googleSearch(".com", dbMock)).toEqual([
      "dog.com",
      "anothersite.com",
      "mrvel.com",
    ]);
  });
})


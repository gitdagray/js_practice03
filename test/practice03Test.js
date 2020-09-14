const assert = chai.assert;

describe("Practice Assignment 3", function () {
  describe("Question 1", function () {
    it("The variable myDept should not have a value if the variable myNumber is not greater than 1.", function () {
      const result = question1(1);
      assert.notExists(result);
    });
    it("The variable myDept should hold the required value if the variable myNumber is greater than 1.", function () {
      const result = question1(2);
      assert.match(result, /^Informatics$/);
    });
  });
  describe("Question 2", function () {
    it("The variable myLang should hold the required value if the variable myValue has a length property equal to 10.", function () {
      const result = question2("JavaScript");
      assert.match(result, /^JavaScript$/);
    });
    it("The variable myLang should hold the required value if the variable myValue does not have a length property equal to 10.", function () {
      const result = question2("Python");
      assert.match(result, /^Python$/);
    });
  });
  describe("Question 3", function () {
    it("The variable myLang should hold the required value if the variable myValue has a length property equal to 10.", function () {
      const result = question3("JavaScript");
      assert.match(result, /^JavaScript$/);
    });
    it("The variable myLang should hold the required value if the variable myValue has a length property greater than 3.", function () {
      const result = question3("Dave");
      assert.match(result, /^PHP$/);
    });
    it("The variable myLang should hold the required value if the variable myValue does not have a length property equal to 10.", function () {
      const result = question3("Hey");
      assert.match(result, /^Python$/);
    });
  });
  describe("Question 4", function () {
    it("The variable myFaveFood should hold the required value if the variable myNumber is equal to 1.", function () {
      const result = question4(1);
      assert.match(result, /^Pizza$/);
    });
    it("The variable myFaveFood should hold the required value if the variable myNumber is equal to 2.", function () {
      const result = question4(2);
      assert.match(result, /^Hamburger$/);
    });
    it("The variable myFaveFood should hold the required value if the variable myNumber is equal to 3.", function () {
      const result = question4(3);
      assert.match(result, /^Ice Cream$/);
    });
    it("The variable myFaveFood should hold the required value if the variable myNumber is equal to 4.", function () {
      const result = question4(4);
      assert.match(result, /^Sushi$/);
    });
    it("The variable myFaveFood should hold the required value if the variable myNumber is anything other than the values 1 through 4.", function () {
      let result = question4(0);
      assert.match(result, /^Pho$/);
      result = question4(5);
      assert.match(result, /^Pho$/);
    });
  });
  describe("Question 5", function () {
    it("The variable myWeather should hold the required value if the variable myTemp has a value greater than 75.", function () {
      const result = question5(76);
      assert.match(result, /^Great weather!$/);
    });
    it("The variable myWeather should hold the required value if the variable myTemp has a value equal to 75.", function () {
      const result = question5(75);
      assert.match(result, /^Great weather!$/);
    });
    it("The variable myWeather should hold the required value if the variable myTemp has a value less than 75.", function () {
      const result = question5(74);
      assert.match(result, /^Still cold.$/);
    });
  });
});

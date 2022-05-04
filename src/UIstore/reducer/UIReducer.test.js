import { setLoadingOffActionCreator, setLoadingOnActionCreator } from "../actions/UIActionCreators.js/UIActionCreators";
import UIReducer from "./UIReducer";

describe("Given the UIReducer function",()=> {
  describe("When it receives true and setLoadingOffActionCreator()", ()=> {
    test("Then it should return false", ()=> {
      const currentLoading = true;
      const expectedResult = false;

      const result = UIReducer(currentLoading, setLoadingOffActionCreator())

      expect(result).toBe(expectedResult)
    })
  })

  describe("When it receives true and setLoadingOnActionCreator()", ()=> {
    test("Then it should return false", ()=> {
      const currentLoading = false;
      const expectedResult = true;

      const result = UIReducer(currentLoading, setLoadingOnActionCreator())

      expect(result).toBe(expectedResult)
    })
  })
})

import { setLoadingOffActionCreator, setLoadingOnActionCreator } from "./UIActionCreators";

describe("Given the setLoadingOffActionCreator function", () => {
  describe("When its called", ()=> {
    test("Then it should create an action object {type: 'loading-off'}", ()=> {
      const expectedAction = {type: 'loading-off'};

      const action = setLoadingOffActionCreator();

      expect(action).toEqual(expectedAction);
    })
  })
})

describe("Given the setLoadingOnActionCreator function", () => {
  describe("When its called", ()=> {
    test("Then it should create an action object {type: 'loading-on'}", ()=> {
      const expectedAction = {type: 'loading-on'};

      const action = setLoadingOnActionCreator();

      expect(action).toEqual(expectedAction);
    })
  })
})

/* eslint-env jasmine */
import { module, inject } from "../mocks";
import { HomeController } from "./home-controller";
import home from "./home";

describe("myApp.home module", () => {
  beforeEach(module(home.name));
  describe("home controller", () => {
    it(
      "should ....",
      inject($controller => {
        var homeCtrl = $controller(HomeController);
        expect(homeCtrl).toBeDefined();
      })
    );
  });
});

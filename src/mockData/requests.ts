import { mockRequest } from "../api/helpers/mockRequest";
import { pages } from "./pages";
import { mainMenu, mainMenu3 } from "./mainMenu";
import { pageService, bannerService, footerService } from "./serviceContent";

export const getPagesRequest = mockRequest(pages, 100);
export const getMainMenuRequest = mockRequest(mainMenu3, 200);
export const getServiceStructure = (service) => {
  let request;
  switch (service) {
    case "pages":
      request = pageService;
      break;
    case "banner":
      request = bannerService;
      break;
    case "footer":
      request = footerService;
      break;
    default:
      "service not found";
  }
  return mockRequest(request, 200);
};

export const getServiceData = (service) => {
  let request;
  switch (service) {
    case "pages":
      request = pages;
      break;
    case "banner":
      request = pages;
      break;
    case "footer":
      request = pages;
      break;
    default:
      "service not found";
  }
  return mockRequest(request, 200);
};

export const getService = (service) => {
  return mockRequest(
    Promise.all([getServiceStructure(service)(), getServiceData(service)()]),
    200
  );
};

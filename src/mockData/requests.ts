import { mockRequest } from "../api/helpers/mockRequest";
import { pagesData, pagesStructure } from "./pages";
import { bannerData } from "./banner";
import { mainMenu } from "./mainMenu";
import { mockPage, oldMockform } from "../mockData/pages";
import { bannerStructureData, mockBanner } from "../mockData/banner";
import { footerStructureData, footerData } from "../mockData/footer";

export const getMainMenuRequest = mockRequest(mainMenu, 200);

// structure of service overview
export const serviceStructure = {
  "/section/page": pagesStructure,
  "/section/banner": bannerStructureData,
  "/section/footer": footerStructureData,
};

// data of service overview
export const serviceData = {
  "/section/page": pagesData,
  "/section/banner": bannerData,
  "/section/footer": footerData,
};

// mockdata of service detail
export const serviceDetailMockData = {
  "/section/pages/page~665627a8-10bd-4fce-be1c-13dc2dc671fd": mockPage,
  "/section/pages/page~1234567890": oldMockform,
  "/section/banner/banner~665627a8-10bd-4fce-be1c-13dc2dc671fd": mockBanner,
};

export const getServiceStructure = (serviceId) => {
  const structure = serviceStructure[serviceId];
  return mockRequest(structure, 200);
};

export const getServiceData = (serviceId) => {
  const data = serviceData[serviceId];
  return mockRequest(data, 200);
};

export const getService = (service) => {
  return mockRequest(
    Promise.all([getServiceStructure(service)(), getServiceData(service)()]),
    200
  );
};

export const getServiceDetailData = (service) => {
  return mockRequest(serviceDetailMockData[service], 200);
};

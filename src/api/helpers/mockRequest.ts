export const mockRequest = (data: any, requestDuration: number) => {
  return () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, requestDuration);
    });
  };
};

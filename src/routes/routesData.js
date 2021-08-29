export const routesEnum = {
  HOME: "/",
  USER: "/user",
};

const privateRoutes = [];
const publicRoutes = [
  {
    path: routesEnum.HOME,
    component: "",
    exact: true,
  },
  {
    path: routesEnum.HOME,
    component: "",
    exact: true,
  },
];

export { privateRoutes, publicRoutes };


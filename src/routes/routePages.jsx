import { v4 as uuidv4 } from "uuid";
import HomePage from "../page/HomePage";
import UserDisplay from "../page/UserDisplay";

const pages = [
  {
    id: uuidv4(),
    path: "/",
    element: <HomePage />,
  },
  {
    id: uuidv4(),
    path: "/user",
    element: <UserDisplay />,
  },
];

export default pages;

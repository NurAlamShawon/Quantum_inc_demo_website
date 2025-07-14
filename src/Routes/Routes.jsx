import {
  createBrowserRouter,

} from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Authentication from "../Layouts/Authentication";
import Login from "../Components/Login";
import Registration from "../Components/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
   Component:HomeLayout
  },
  {
    path:"authentication",
    Component:Authentication,
    children:[
        {index:true , Component:Login},
        {path:'registration',Component:Registration}
    ]
  }
]);


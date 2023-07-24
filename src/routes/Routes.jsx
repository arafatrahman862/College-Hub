import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from "../App";
import Home from "../Layout/Home";
import Admission from "../pages/Admission/Admission";
import Colleges from "../pages/Colleges/Colleges";
import MyCollege from "../pages/my college/MyCollege";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import Profile from "../pages/Profile/Profile";
import CollegeDetails from "../pages/college card/CollegeDetails";
import SingleCollegeDetail from "../pages/Colleges/SingleCollegeDetail";
import PrivateRoute from "./PrivateRoute";
import AdmissionInput from "../pages/Admission/AdmissionInput";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/admission",
          element: <Admission></Admission>
        },
        {
          path: "/colleges",
          element: <PrivateRoute><Colleges></Colleges></PrivateRoute>
        },
        {
          path: "/mycollege",
          element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "*",
          element: <Error></Error>
        },
        {
          path: "/profile",
          element: <Profile></Profile>
        },
        {
          path: "/collegedetails/:id",
          element: <CollegeDetails></CollegeDetails>,
          loader: ({params}) => fetch(`https://college-server-arafatrahman862.vercel.app/college/${params.id}`)
        },
        {
          path: "/singlecollege/:id",
          element: <SingleCollegeDetail></SingleCollegeDetail>,
          loader: ({params}) => fetch(`https://college-server-arafatrahman862.vercel.app/college/${params.id}`)
        },
        {
          path:"/admissionInput",
          element: <AdmissionInput></AdmissionInput>,
          
        }
        
      ]
    },
  ]);

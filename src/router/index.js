// src/router->index.js  (配置路由映射)
import { Navigate } from "react-router-dom";
import Discover from "@/pages/Discover";
import Mine from "@/pages/Mine";
import Friend from "@/pages/Friend";
import Recommend from "@/pages/Discover/Recommend";
import Rankings from "@/pages/Discover/Rankings";
import Singer from "../pages/Discover/Singer";
import Playlist from "../pages/Discover/Playlist";
import Newdisc from "../pages/Discover/Newdisc";
import Radio from "../pages/Discover/Radio";

const routes = [{
  path: '/',
  element:  <Navigate to='/discover/recommend'/>
},
{
  path: "/discover",
  element: <Discover />,
  children: [
    // 发现音乐的导航
  
    {
      path: 'recommend',
      element: <Recommend />
    },
    {
      path: 'rankings',
      element: <Rankings />
    },
    {
      path: 'playlist',
      element: <Playlist />
    },

    {
      path: 'radio',
      element: <Radio />
    },
    {
      path: 'singer',
      element: <Singer />
    },

    {
      path: 'newdisc',
      element: <Newdisc />
    }
  ]
},
{
  path: "/mine",
  element: <Mine />
},
{
  path: "/friend",
  element: <Friend />
},
];

export default routes;
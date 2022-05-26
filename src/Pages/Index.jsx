import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Activity from './Activity-Page/Activity';
import Award from './Awards-Page/Award';
import Blog from './Blog-Page/Blog';
import GetInTouch from './GetInTouch-Page/GetInTouch';
import GetListed from './GetListed-Page/GetListed';
import Home from './Home-Page/Home';
import TV from './TV-Page/TV';


const Index = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />}></Route>
        <Route path="/activity" element={<Activity />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/awards" element={<Award />}></Route>
        <Route path="/tv" element={<TV />}></Route>
        <Route path="/getInTouch" element={<GetInTouch />}></Route>
        <Route path="/getListed" element={<GetListed />}></Route>
    </Routes>
    </>
  )
}

export default Index
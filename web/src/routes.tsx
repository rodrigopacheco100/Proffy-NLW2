import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

const Routes: React.FC = () => {
   return (
      <BrowserRouter>
         <Route exact path="/" component={Landing} />
         <Route path="/TeacherForm" component={TeacherForm} />
         <Route path="/TeacherList" component={TeacherList} />
      </BrowserRouter>
   );
}

export default Routes;
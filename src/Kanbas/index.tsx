import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { courses} from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [_courses, setCourses] = useState<any[]>(courses);
  const [course, setCourse] = useState({
    _id: Math.floor(Math.random() * 50), name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/smile.png"
  });
  const updateCourse = () => {
    setCourses(
      _courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setCourses([..._courses, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(_courses.filter((course) => course._id !== courseId));
  };

    return (
      <Provider store={store}>
        <div className="d-flex">
          <KanbasNavigation />
          <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard 
                                              courses={_courses}
                                              course={course}
                                              setCourse={setCourse}
                                              addNewCourse={addNewCourse}
                                              deleteCourse={deleteCourse}
                                              updateCourse={updateCourse}/>} />
            <Route path="Courses/:courseId/*" element={<Courses _courses={_courses}/>} />
          </Routes>
          </div>
        </div>
      </Provider>
  );}
  export default Kanbas;
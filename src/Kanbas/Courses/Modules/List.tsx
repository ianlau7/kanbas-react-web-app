import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  // const [modulesList, setModuleList] = useState<any[]>(modules);
  // //const modulesList = modules.filter((module) => module.course === courseId);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  //   _id: 0,
  // });
  const modulesList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

  // const addModule = (module: any) => {
  //   const newModule = { ...module,
  //     _id: new Date().getTime().toString() };
  //   const newModuleList = [newModule, ...modulesList];
  //   setModuleList(newModuleList);
  // };
  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = modulesList.filter(
  //     (module) => module._id !== moduleId );
  //   setModuleList(newModuleList);
  // };
  // const updateModule = () => {
  //   const newModuleList = modulesList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };
  // const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
    <div className="button-container">
        <button className="action-button">Collapse All</button>
        <button className="action-button">View Progress</button>
        <select className="action-select">
            <option>Publish All</option>
            <option>Publish All Modules and Items</option>
            <option>Publish Modules only</option>
            <option>UnPublish All Modules</option>
        </select>
        <li className="list-group-item">
        <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add</button>
        <button onClick={() => dispatch(updateModule(module))}>
                Update
        </button>
        <input value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
    </li>
    </div>


      <ul className="list-group wd-modules">
        {modulesList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index}
            // className="list-group-item"
            // onClick={() => setSelectedModule(module)}>
            className="list-group-item">
            <button
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>  
            &nbsp;&nbsp;
              <button
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>

            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {/* {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )} */}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;
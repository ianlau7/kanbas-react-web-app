import React from 'react';

const CourseStatus = () => {
  return (
    <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: '250px' }}>
      <h3>Course Status</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <button>UnPublish</button>
            </td>
            <td>
              <button>Published</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button>Import Existing Content</button>
      <br />
      <button>Import From Commons</button>
      <h4>Coming Up</h4>
      <button>View Calendar</button>
      <ul>
        <li><a href="nothing.com">Lecture at 11:45am 9/7</a></li>
        <li><a href="nothing.com">Lecture at 11:45am 9/14</a></li>
        <li><a href="nothing.com">Lecture at 11:45am 9/21</a></li>
      </ul>
    </div>
  );
}

export default CourseStatus;
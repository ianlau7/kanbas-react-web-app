import ModuleList from "../Modules/List";
import CourseStatus from "./CourseStatus";


function Home() {
  return (
    <table style={{ width: '100%' }}>
      <tbody>
        <tr>
          <td valign="top" style={{ width: '1500px' }}>
              <h2>Home</h2>
              <ModuleList />
          </td>
          <td valign="top" style={{ width: '50px' }}>
              <h2>Status</h2>
              <CourseStatus />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default Home;
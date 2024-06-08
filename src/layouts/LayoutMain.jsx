import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import '../index.css';
import { Route, Routes } from "react-router-dom";
import DashboardMain from "../pages/Dashboard";


export default function LayoutMain(){
  return(
    <div className="w-full h-full flex flex-row">
      <div className="relative w-1/6 h-full top-0 z-20">
        <Sidebar /> 
      </div>
      <div className="w-full h-full overflow-auto">
        <Topbar />
        <div className="w-full h-auto">
          <Routes>
            <Route 
              path="/" 
              element={<DashboardMain />}
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}
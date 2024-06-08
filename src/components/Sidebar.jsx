import { NavLink } from "react-router-dom";

export default function Sidebar(){
  return(
    <div className="w-full h-full bg-white shadow-md px-1 py-8">
      <div className="px-2 py-4 font-black text-2xl">
        Sentinel Build
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <NavLink 
          to={''}
          className="w-full px-4 py-4 font-semibold hover:bg-slate-200 hover:text-blue-700 rounded"
        >Dashboard</NavLink>
        <NavLink 
          to={'report'}
          className="w-full px-4 py-4 font-semibold hover:bg-slate-200 hover:text-blue-700 rounded"
        >Report</NavLink>
        <NavLink 
          to={'admin'}
          className="w-full px-4 py-4 font-semibold hover:bg-slate-200 hover:text-blue-700 rounded"
        >Admin</NavLink>
        <NavLink 
          to={'karyawan'}
          className="w-full px-4 py-4 font-semibold hover:bg-slate-200 hover:text-blue-700 rounded"
        >Karyawan</NavLink>
      </div>
    </div>
  )
}
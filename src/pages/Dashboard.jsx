import RecentAbsents from "../components/dashboard/RecentAbsents";
import StatusAdmin from "../components/dashboard/statusAdmin";

export default function DashboardMain() {
  const dataRecentAbsent = [
    {id: 1 , nama: "Putra Faris Nugroho", waktu:"08.03", status: false},
    {id: 2 , nama: "Yumi Renata Guswati", waktu:"07.46", status: false},
    {id: 3 , nama: "Jaka Ripsol", waktu:"07.27", status: true},
    {id: 4 , nama: "Teya Faisal", waktu:"07.03", status: true},
    {id: 5 , nama: "Adinda Putri Yama", waktu:"06.57", status: true},
    {id: 6 , nama: "Budi Wicaksono", waktu:"06.49", status: true},
  ]
  return(
    <div className="w-full h-auto pt-32 pb-12 bg-slate-200">
      <div className="h-auto p-12 mx-12 bg-white rounded-lg shadow-lg">
        <div className="font-bold text-2xl mb-6">
          Welcome To Sentinel Build! 
        </div>
        <div className="w-full h-full flex flex-row gap-8">
          <div className="basis-2/3 border bg-white shadow-sm px-4 py-2">
            <div className="font-semibold text-xl mb-2">
              Absen Terkini
            </div>
            <RecentAbsents dataTable={dataRecentAbsent}/>
          </div>
          <div className="basis-1/3 border bg-white shadow-sm px-4 py-2">
            <div className="font-semibold text-xl mb-2">
              Status Admin
            </div>
            <StatusAdmin/>
          </div>
        </div>
      </div>
    </div>
  )
}
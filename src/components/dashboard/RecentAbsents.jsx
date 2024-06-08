export default function RecentAbsents({dataTable}){
  return(
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr className="border-t border-b">
            <th className="py-4">No</th>
            <th className="text-left py-4">Nama</th>
            <th className="py-4">Waktu</th>
            <th className="py-4">Status</th>
          </tr>
        </thead>
        <tbody className="border-t border-b">
          {
            dataTable.slice(0, 5).map((item)=>{
              return(
                <tr key={item.id}>
                  <td className="text-center py-4">{item.id}</td>
                  <td className="py-4">{item.nama}</td>
                  <td className="text-center py-4">{item.waktu}</td>
                  <td className="text-center py-4">{item.status? 'Tepat Waktu': 'Terlambat'}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
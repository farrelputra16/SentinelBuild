export default function Card(){
  return(
    <div className="flex flex-row items-center gap-x-4 px-4 py-2">
      <div className="w-[48px] h-[48px] bg-slate-300 rounded-full"></div>
      <div className="flex flex-row flex-grow justify-between items-center">
        <div>
          <div>
            Admin 1
          </div>
          <div>
            Status: Online
          </div>
        </div>
        <div>
          Edit
        </div>
      </div>
    </div>
  )
}
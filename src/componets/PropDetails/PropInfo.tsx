
const PropInfo = ({info}:{info : string}) => {
  return (
    <div className="shadow my-10 border border-zinc-100 rounded-md">
            <div className="p-5">
              <h3 className="text-2xl font-medium py-5">Description</h3>
              <p className="text-neutral-600 text-sm">{info}</p>
              <button className="underline underline-offset-2 text-gray-800 font-medium">
                Show more
              </button>
            </div>
          </div>
  )
}

export default PropInfo
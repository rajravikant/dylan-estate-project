
function TextWithIcon({icon, text,suffix}:{icon:React.ReactNode, text:string,suffix?:string}) {
  return (
    <div className="address inline-flex items-center gap-2">
        {icon}
        <span className="text-sm text-neutral-800">{text} {suffix && suffix}</span>

    </div>
  )
}

export default TextWithIcon
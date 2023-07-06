interface Props {
    placeholder?: string
}

export default function Input({ placeholder } : Props) {
    return (
        <input className="px-3 py-3 rounded-lg ring-1 ring-slate-900/10 shadow-sm" type="text" placeholder={placeholder}/>
    )
}
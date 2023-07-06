interface Props {
    text: string,
    link: string,
    tab: boolean
}

export default function Button({ text, link, tab } : Props) {

    return (
        <a href={link} target={tab ? "_blank" : "_self"}>
            <button className="bg-indigo-950 text-blue-50 px-7 py-3 rounded-lg hover:bg-indigo-800 focus:bg-indigo-800 [transition:background-color_200ms,transform_300ms,opacity_300ms] ease-in-out delay-150 hover:translate-x-2">
                {text}
            </button>
        </a>
        
    )
}
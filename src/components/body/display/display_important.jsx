



function DisplayImportant({ arrays }) {


    return (
        arrays.map(array => {
            return (
                <div className="min-w-10 w-200 max-w-200 p-8">
                    <a href={`#${array.title}`} className="font-semibold text-4xl text-left inline w-200 ">{array.title}</a>
                    <ul className="pl-15">
                        {array.subtitles.map(subtitle => {
                            return (
                                <li key={subtitle}><a className="font-medium text-xl  " href={`#${subtitle.replace(/^-/, "")}`}>{subtitle}</a></li>
                            )
                        })}
                    </ul>
                </div>
            )
        })
    )



}

export default DisplayImportant
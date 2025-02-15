

function DisplayContent({ content }) {

    if (!content) return null;

    return (
        <div className="content-big text-start py-4 bg-yellow-400">
            {content.big_title && <h2 id={content.big_title} className="text-5xl font-bold">{content.big_title}</h2>}
            {content.contents && content.contents.map((item) => {
                return (
                    <div key={item.id} className="pl-5 py-2">
                        {item.title &&
                            (<div className="text-4xl font-semibold"><h3 id={item.title} className="">{item.title}</h3></div>

                            )}
                        <div>
                            <h5 className="new-line font-medium text-2xl pl-2 text-black/75" >{item.content}</h5>
                        </div>
                        {item.image &&
                            <img src={`${item.image}`} alt={`Imagine ${item.title}`} />
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayContent
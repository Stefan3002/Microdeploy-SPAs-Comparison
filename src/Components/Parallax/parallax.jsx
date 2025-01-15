import './parallax.css'
const Parallax = ({data}) => {
    return (
            <>
                {
                    data.map((d, id) => {
                        const {img, text, position} = d
                        return <a key={`parallax-${id}`} href={`/shop/${text}`}>
                            <div className='parallax' style={{backgroundImage: `url(${img})`, backgroundPosition: position}} >
                                <div className="content-container">
                                    <p>{text}</p>
                                    {/*<img data-name={text} onClick={expandSection} src={plusSVG} alt=""/>*/}
                                </div>
                            </div>
                        </a>
                    })
                }
            </>
    // Commit comment

    )
}
export default Parallax
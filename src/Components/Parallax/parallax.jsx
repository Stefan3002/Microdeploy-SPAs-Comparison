import './parallax.css'
import {useEffect, useRef, useState} from "react";
const Parallax = ({data}) => {
    const [isVisible, setIsVisible] = useState([])
    const ref = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(elements => {
            elements.forEach(element => {
                if (element.isIntersecting) {
                    setIsVisible(prevState => [...prevState, element.target.getAttribute('data-id')])
                    observer.unobserve(element.target)
                }
            })
        }, {threshold: .05})

        if(ref.current)
            ref.current.forEach(element => observer.observe(element))

        return () => observer.disconnect()
    }, []);


    return (
            <>
                {
                    data.map((d, id) => {
                        console.log(isVisible, id)
                        const {img, text, position} = d
                            return <a data-id={id} ref={(element) => ref.current[id] = element} key={`parallax-${id}`}
                                      href={`/shop/${text}`}>
                                <div className='parallax'
                                     style={{backgroundImage: `${isVisible.includes(id.toString()) ? `url(${img})` : null}`, backgroundPosition: position}}>
                                    <div className="content-container">
                                        <p>{text}</p>
                                        {/*<img data-name={text} onClick={expandSection} src={plusSVG} alt=""/>*/}
                                    </div>
                                </div>
                            </a>

                    })
                }
            </>
    )
}
export default Parallax
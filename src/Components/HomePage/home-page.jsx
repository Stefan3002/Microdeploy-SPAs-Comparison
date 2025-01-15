import './home-page.css'
import Button from "../button/button";

import Parallax from "../Parallax/parallax.jsx";
import parallaxImg1 from '../../../utils/imgs-landing-page/parallaxImg-min.webp'
import parallaxImg2 from '../../../utils/imgs-landing-page/parallaxImg2-min.webp'
import parallaxImg3 from '../../../utils/imgs-landing-page/parallaxImg3-min.webp'
import parallaxImg4 from '../../../utils/imgs-landing-page/parallaxImg4-min.webp'
import parallaxImg5 from '../../../utils/imgs-landing-page/parallaxImg5-min.webp'

const HomePage = () => {
    const parallaxImgs = [
        {
            img: parallaxImg1,
            text: 'Sneakers',
            position: 'bottom'
        },
        {
            img: parallaxImg2,
            text: 'Jackets',
            position: 'center'
        },
        {
            img: parallaxImg3,
            text: 'Hats',
            position: 'top'
        },
        {
            img: parallaxImg4,
            text: 'Women',
            position: 'top'
        },
        {
            img: parallaxImg5,
            text: 'Men',
            position: 'top'
        }

    ]


    return (
        <div className='home-page-container' >
            <div className="landing">
                <div className="text">
                    <h1 className='title-container'>Shop-n-all</h1>
                    <h2 className='sub-title-container'>Your fashion expert!</h2>
                    <div className="title-details">
                        <p>All the new additions can be found here, on Shop-n-All. <br/> Start buying today!</p>
                    </div>
                    <div className="call-to-action-container">
                        <a className='button-landing-page' href='/shop'><Button text='Shop now.' color='whitesmoke' fontSize='1.5em'/></a>
                        <i className="mouse-icon fa-3x fa fa-solid fa-computer-mouse"></i>
                    </div>
                </div>
                <div className="hero" />
            </div>
            <Parallax data={parallaxImgs} />

            {/*{Photo by <a href="https://unsplash.com/ja/@wesleyphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Wesley Tingey</a> on <a href="https://unsplash.com/s/photos/fashion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>*/}

        </div>
    )
}
export default HomePage
import './gallery.css'
import img0463 from '../../../assets/Moriah_Young-_0463.jpg'
import img0468 from '../../../assets/Moriah_Young-_0468.jpg'
import img0534 from '../../../assets/Moriah_Young-_0534.jpg'
import img0572 from '../../../assets/Moriah_Young-_0572.jpg'
import img0615 from '../../../assets/Moriah_Young-_0615.jpg'

const images = [img0463, img0468, img0534, img0572, img0615]

export default function Gallery() {
    return (
        <div className='gallery-wrapper'>
            <div className='gallery'>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Gallery headshot ${index}`}
                        style={{ width: '16em' }}
                    />
                ))}
            </div>
        </div>
    )
}

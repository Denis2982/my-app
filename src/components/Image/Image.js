import './Image.scss';
import  imgBg from '../../assets/bg.png';

const ImageBg = () => {
    return (
        <div className="image">
            <img src={imgBg} alt="" />
        </div>
    );
}
 
export default ImageBg;
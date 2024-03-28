export default function ImgCenter({imgSrc, imgAlt, className}) {
    return (
        <img src={imgSrc} alt={imgAlt} className={`block ml-auto mr-auto ${className}`} />
    );
}
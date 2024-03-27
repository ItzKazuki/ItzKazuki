export default function ImgCenter({imgSrc, imgAlt}) {
    return (
        <img src={imgSrc} alt={imgAlt} className="block ml-auto mr-auto" />
    );
}
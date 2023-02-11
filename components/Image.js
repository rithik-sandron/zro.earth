import Image from "next/image";
export default function Footer({ url, alt, border }) {

    const style = {
        display: 'block',
        padding: '0',
        objectFit: 'cover',
        border: 'none',
        oultine: 'none',
        transition: 'all 0.1s ease -in -out',
        width: '100%',
        height: '30vh',
        maxHeight: '30vh',
        maxWidth: '900px',
        margin: 'auto',
        borderTopLeftRadius: border && `12px`,
        borderTopRightRadius: border && `12px`
    }

    return (
        <Image
            src={url}
            alt={`Cover Image for ${alt}`}
            style={style}
            width={900}
            height={630}
        />
    );
}
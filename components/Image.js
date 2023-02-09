import Image from "next/image";
export default function Footer({ url, alt }) {

    const style = {
        display: 'block',
        padding: '0',
        objectFit: 'cover',
        border: 'none',
        oultine: 'none',
        transition: 'all 0.1s ease -in -out',
        width: '100%',
        maxHeight: 'calc(360px + 12vw)',
        maxWidth: '900px',
        margin: 'auto',
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
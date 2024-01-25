export default function SocialMediaContainer({ title, src, textColor }) {
    return (
        <div className="rounded-md">
            <h1 className={`font-bold lg:mb-5 mb-3`} style={{ color: textColor }}>{title}</h1>
            <iframe
                title={title}
                src={src}
                className="iframe-height w-full h-full rounded-md"
            ></iframe>
        </div>
    );
}

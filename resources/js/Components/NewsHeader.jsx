export default function NewsHeader({ title, onClick }) {
    const { text, bgColor } = title;

    const headerStyle = {
        padding: '15px',
        backgroundColor: bgColor,
        color: '#fff',
        position: 'relative',
    };

    const underlineStyle = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        borderBottom: '2px solid #000',
    };

    const linkStyle = {
        position: 'absolute',
        bottom: '0',
        right: '0',
        padding: '10px',
        cursor: 'pointer',
        color: '#000',
    };

    return (
        <div>
        <div style={headerStyle}>{text}</div>
        <div style={underlineStyle}></div>
        <div style={linkStyle} onClick={onClick}>
            Lihat semua
        </div>
        </div>
    );
}

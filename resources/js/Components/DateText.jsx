import { useMediaQuery } from '@react-hook/media-query';

export default function DateText({ date, textColor, textSize }) {
    const isBelowMD = useMediaQuery('(max-width: 768px)');
    let formattedDate = '';

    if (isBelowMD) {
        formattedDate = new Date(date).toLocaleDateString('ID', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).split('/').reverse().join('-');
    } else {
        const newDate = new Date(date);
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const dayOfWeek = days[newDate.getDay()];
        const day = newDate.getDate().toString().padStart(2, '0');
        const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
        const year = newDate.getFullYear();

        const hours = newDate.getHours().toString().padStart(2, '0');
        const minutes = newDate.getMinutes().toString().padStart(2, '0');

        formattedDate = `${dayOfWeek}, ${day}-${month}-${year} - ${hours}:${minutes}`;
    }

    return (
        <p className={`${textColor} ${textSize}`}>{formattedDate}</p>
    );
}

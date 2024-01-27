export default function SideTitle({ title }) {
    return (
        <h2 className="text-md font-bold my-1 leading-none line-clamp-2 md:whitespace-normal hover:text-blue-500">
            {title}
        </h2>
    );
}

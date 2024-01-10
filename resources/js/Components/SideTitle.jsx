export default function SideTitle({ title }) {
    return (
        <h2 className="text-md font-bold my-1 overflow-hidden whitespace-nowrap w-full leading-none overflow-ellipsis lg:max-lines-2 md:whitespace-normal">
            {title}
        </h2>
    );
}

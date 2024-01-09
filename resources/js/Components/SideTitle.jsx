export default function SideTitle({ title }) {
    return (
        <h2 className="text-xl font-bold my-1 overflow-hidden whitespace-nowrap w-full overflow-ellipsis">
            {title}
        </h2>
    )
}

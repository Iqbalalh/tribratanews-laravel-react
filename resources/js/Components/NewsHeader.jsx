export default function NewsHeader() {
    return (
        <div>
            <button
                type="button"
                className="ml-4 px-4 bg-red-900 font-bold text-white btn-title p-2"
            >
                BERITA POPULER
            </button>
            <a href="" className="float-right px-4 text-dark text-sm mt-5 mb-0">
                lihat semua
            </a>
            <hr className="ml-4 px-4 mb-2 border-red-900 border-t-2" />
        </div>
    );
}

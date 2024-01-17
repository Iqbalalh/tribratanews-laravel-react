import { Head, usePage, Link } from "@inertiajs/react";
import NavBar from "@/Components/NavBar";
import DateText from "@/Components/DateText";
import { IoMdTime } from "react-icons/io";
import CustomFooter from "@/Components/CustomFooter";

export default function NewsContent() {
    const { props } = usePage();

    const imagePath = props.detail.image.split('/').pop();

    return (
        <div className="lg:flex lg:flex-col items-center justify-center" style={{ overflowX: 'hidden' }}>
            <Head title={props.detail.title} />
            <div className="header lg:w-full lg:fixed top-0 z-50 bg-white">
                <NavBar props={props}/>
            </div>

            <div className="lg:w-10/12 lg:mt-40 px-4 mb-4">
                <div className="flex items-center">
                    <Link className="text-lg text-cyan-900 opacity-80" href={`/${props.detail.category}`}>{props.detail.category}</Link>
                    <span className="text-lg text-gray-500 mx-2"> / </span>
                    <p className="text-lg text-gray-500">{props.detail.title}</p>
                </div>
                <h1 className="lg:text-4xl text-3xl pt-5 pb-5 font-bold">{props.detail.title}</h1>
                <div className="flex">
                    <IoMdTime className="mr-1 text-gray-600"/>
                    <DateText className="items-center" date={props.detail.time} textColor="text-gray-600" textSize="lg:text-md text-sm" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 pt-5">
                    <div className="lg:col-span-3 md:col-span-1 justify-left items-center">
                        <center><img className="lg:min-w-full max-h-96" src={`/storage/${imagePath}`} alt="Image" /></center>
                        <h2 className="text-left lg:text-lg text-sm italic text-gray-500 w-full">{props.detail.image_caption}</h2>
                        <p className="text-xl mt-5 leading-normal">{props.detail.content}</p>
                    </div>
                </div>
                <h3 className="mt-5 text-lg text-gray-600">{props.detail.author}</h3>
            </div>

            <div className="footer lg:w-full">
                <CustomFooter />
            </div>
        </div>
    );
}

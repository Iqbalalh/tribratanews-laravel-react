import { Head, usePage, Link } from "@inertiajs/react";
import NavBar from "@/Components/NavBar";
import DateText from "@/Components/DateText";
import { IoMdTime } from "react-icons/io";
import CustomFooter from "@/Components/CustomFooter";
import SocialMediaContainer from "@/Components/SocialMediaContainer";
import HTMLReactParser from "html-react-parser";

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
                    <Link className="text-lg text-cyan-900 opacity-80 whitespace-nowrap" href={`/kategori/${props.detail.category.toLowerCase().replace(/\s+/g, '-')}`}>{props.detail.category}</Link>
                    <span className="text-lg text-gray-500 mx-2"> / </span>
                    <p className="text-lg text-gray-500 overflow-hidden whitespace-nowrap w-full leading-none overflow-ellipsis">{props.detail.title}</p>
                </div>
                <h1 className="lg:text-4xl text-3xl pt-5 pb-5 font-bold ">{props.detail.title}</h1>
                <div className="flex">
                    <IoMdTime className="mr-1 text-gray-600"/>
                    <DateText className="items-center" date={props.detail.created_at} textColor="text-gray-600" textSize="lg:text-md text-sm" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 pt-5">
                    <div className="lg:col-span-3 md:col-span-1 justify-left items-center lg:mr-5">
                        <center><img className="min-w-full sm:max-h-48 md:max-h-56 lg:max-h-full img-content" src={`/storage/${imagePath}`} alt="Image" /></center>
                        <h2 className="text-left lg:text-lg text-sm italic text-gray-500 w-full">{props.detail.image_caption}</h2>
                        <div className="lg:text-xl text-lg mt-10">{HTMLReactParser(props.detail.content)}</div>
                    </div>
                    <div className="lg:col-span-1">
                        <SocialMediaContainer title="Twitter @PolrestaL" src="https://widget.taggbox.com/148558" textColor="#1DA1F2" />
                    </div>
                </div>
                <h3 className="mt-5 text-lg text-gray-600">Author: {props.detail.author}</h3>
            </div>

            <div className="footer lg:w-full lg:mt-24">
                <CustomFooter />
            </div>
        </div>
    );
}

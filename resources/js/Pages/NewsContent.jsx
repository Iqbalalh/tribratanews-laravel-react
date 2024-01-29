import { Head, usePage, Link } from "@inertiajs/react";
import NavBar from "@/Components/NavBar";
import DateText from "@/Components/DateText";
import { IoMdTime } from "react-icons/io";
import CustomFooter from "@/Components/CustomFooter";
import SocialMediaContainer from "@/Components/SocialMediaContainer";
import HTMLReactParser from "html-react-parser";
import ReadNext from "@/Components/ReadNext";

export default function NewsContent() {
    const { props } = usePage();
    const imgNext = props.headline[3].image.split('/').pop()
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
                        <div className="lg:text-xl text-lg mt-5">
                            <Link className="text-cyan-700 mb-3 font-bold italic flex" href="https://tribratanews.lampung.polri.go.id/">
                                tribratanews.lampung.polri.go.id
                            </Link>
                            {HTMLReactParser(props.detail.content)}
                        </div>
                    </div>
                    <div className="lg:col-span-1 hidden md:block lg:block">
                        <SocialMediaContainer title="Kanal Youtube" src="https://widget.taggbox.com/148533" textColor="#FF0000" />
                    </div>
                </div>
                <h3 className="mt-5 text-lg text-gray-600">Author: {props.detail.author}</h3>
                <ReadNext title={props.headline[3].title} image={`/storage/${imgNext}`} id={props.headline[3].id}/>
            </div>

            <div className="footer lg:w-full sm:mt-15 lg:mt-10">
                <CustomFooter />
            </div>
        </div>
    );
}

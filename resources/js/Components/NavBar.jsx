import { TextInput, Button } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "@inertiajs/react";

export default function NavBar({ props }) {
    return (
        <>
            <header className="block navbar">
                <div className="flex justify-between items-center px-4 my-3 extend-bg">
                    <Link href="/">
                        <img className="max-w-32" src="/assets/logo.png" alt="" />
                    </Link>
                    <div className="flex items-center space-x-2">
                        <TextInput
                            rightIcon={IoIosSearch}
                            type="text"
                            className="visible ml-2 md:visible"
                            placeholder="search"
                        />
                        <div className="hidden md:flex items-center space-x-2">
                            <Link href="https://youtube.com/@POLDALAMPUNG?si=MwqbMS8bQYIbgy-w">
                                <img src="/assets/x.png" height={25} width={25} alt="" />
                            </Link>
                            <Link href="https://www.instagram.com/humas_poldalampung?igsh=NnBtc21udXh0dDNz">
                                <img src="/assets/instagram.png" alt="" />
                            </Link>
                            <Link href="https://www.facebook.com/humaspoldalampung?mibextid=ZbWKwL">
                                <img src="/assets/facebook.png" alt="" />
                            </Link>
                            <Link href="">
                                <img src="/assets/youtube.png" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center py-1 overflow-x-auto mt-2 mb-1 bg-red-900 px-4 extend-bg whitespace-nowrap">
                    <div className="category flex space-x-5">
                        <Link className="text-white" href="/kategori/hukum">
                            Hukum
                        </Link>
                        <Link className="text-white" href="/kategori/sosial-budaya">
                            Sosial Budaya
                        </Link>
                        <Link className="text-white" href="/kategori/keamanan">
                            Keamanan
                        </Link>
                        <Link className="text-white" href="/kategori/kesehatan">
                            Kesehatan
                        </Link>
                        <Link className="text-white" href="/kategori/olahraga">
                            Olahraga
                        </Link>
                    </div>

                    <div className="flex pl-5 items-center space-x-5">
                        <Link className="text-white" href="">
                            Profil
                        </Link>
                        <Link className="text-white" href="">
                            Visi Misi
                        </Link>
                        <Link className="bg-white text-red-900 rounded-full py-1 px-2 hover:cursor-pointer" href="/login">
                            Sign In
                        </Link>
                    </div>
                </div>

                <div className="marquee px-4 py-1 mb-1 flex items-center overflow-hidden extend-bg whitespace-nowrap">
                    <span className="inline-block mr-2">Breaking News : </span>
                    <div className="marquee-scroll">
                        <marquee className="pl-2 flex space-x-10">
                            {props.headline.slice(0, 5).map((item) => (
                                <Link className="hover:underline" key={item.id} href={`/berita/${item.id}`}>
                                    {item.title}
                                </Link>
                            ))}
                        </marquee>
                    </div>
                </div>
            </header>
        </>
    );
}

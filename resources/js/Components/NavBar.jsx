import { TextInput, Button } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";

export default function NavBar() {
    return (
        <>
            <header className="block">
                <div className="flex justify-between items-center px-4 my-3">
                    <img className="max-w-32" src="/assets/logo.png" alt="" />
                    <div className="flex items-center space-x-2">
                        <TextInput
                            rightIcon={IoIosSearch}
                            type="text"
                            className="visible md:visible"
                            placeholder="search"
                        />
                        <div className="hidden md:flex items-center space-x-2">
                            <a href="">
                                <img src="/assets/twitter.png" alt="" />
                            </a>
                            <a href="">
                                <img src="/assets/instagram.png" alt="" />
                            </a>
                            <a href="">
                                <img src="/assets/facebook.png" alt="" />
                            </a>
                            <a href="">
                                <img src="/assets/youtube.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center px-4 py-1 overflow-x-auto my-2 bg-red-900 whitespace-nowrap">
                    <div className="category flex space-x-5">
                        <a className="text-white" href="">
                            Hukum
                        </a>
                        <a className="text-white" href="">
                            Sosial Budaya
                        </a>
                        <a className="text-white" href="">
                            Keamanan
                        </a>
                        <a className="text-white" href="">
                            Kesehatan
                        </a>
                        <a className="text-white" href="">
                            Olahraga
                        </a>
                    </div>

                    <div className="flex items-center space-x-5">
                        <a className="text-white" href="">
                            Profil
                        </a>
                        <a className="text-white" href="">
                            Visi Misi
                        </a>
                        <a className="bg-white text-red-900 rounded-full py-1 px-2 hover:cursor-pointer">
                            Sign In
                        </a>
                    </div>
                </div>

                <div class="marquee px-4 py-1 flex items-center overflow-hidden whitespace-nowrap">
                    <span class="inline-block mr-2">Breaking News : </span>
                    <div class="marquee-scroll">
                        <marquee loop class="pl-2 flex space-x-4">
                            <a href="">
                                This is a sample scrolling text that scrolls to
                                the right.
                            </a>
                            <a href="">
                                This is a sample scrolling text that scrolls to
                                the right.
                            </a>
                            <a href="">
                                This is a sample scrolling text that scrolls to
                                the right.
                            </a>
                            <a href="">
                                This is a sample scrolling text that scrolls to
                                the right.
                            </a>
                        </marquee>
                    </div>
                </div>
            </header>
        </>
    );
}

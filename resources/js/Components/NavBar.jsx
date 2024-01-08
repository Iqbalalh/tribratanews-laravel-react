import { TextInput, Button } from "flowbite-react"
import { IoIosSearch } from "react-icons/io";

export default function NavBar() {
    return (
        <>
            <header className="block">

            <div class="flex justify-between items-center px-4 my-3 lg:mx-48 md:mx-100 sm:mx-100">
                <img class="max-w-32" src="/assets/logo.png" alt=""/>
                <div class="flex items-center space-x-2">
                    <TextInput rightIcon={IoIosSearch} type="text" placeholder="search"/>
                    <a href=""><img src="/assets/twitter.png" alt="" /></a>
                    <a href=""><img src="/assets/instagram.png" alt="" /></a>
                    <a href=""><img src="/assets/facebook.png" alt="" /></a>
                    <a href=""><img src="/assets/youtube.png" alt="" /></a>
                </div>
            </div>

            <div className="flex justify-between items-center px-4 py-1 my-2 bg-red-900">
                <div className="category lg:mx-48 md:mx-100 sm:mx-100">
                    <a className="mr-5 text-white" href="">Hukum</a>
                    <a className="mr-5 text-white" href="">Sosial Budaya</a>
                    <a className="mr-5 text-white" href="">Keamanan</a>
                    <a className="mr-5 text-white" href="">Kesehatan</a>
                    <a className="mr-5 text-white" href="">Olahraga</a>
                </div>

                <div class="flex lg:mx-48 md:mx-100 sm:mx-100 items-center space-x-2">
                    <a className="mr-5 text-white" href="">Profil</a>
                    <a className="mr-5 text-white" href="">Visi Misi</a>
                    <Button className="bg-white text-red-900 rounded ml-2">Sign In</Button>
                </div>
            </div>

            <div>

            </div>

            </header>
        </>
    )
}

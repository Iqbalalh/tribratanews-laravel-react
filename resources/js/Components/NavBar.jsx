import { TextInput } from "flowbite-react"
import { IoIosSearch } from "react-icons/io";

export default function NavBar() {
    return (
        <>
            <header className="flex">
                <img src="/assets/logo.png" className="sm:max-w-100 md:max-w-50 lg:max-w-50" alt=""/>
                <TextInput className="width-8 rounded-md" rightIcon={IoIosSearch} placeholder="search"/>
            </header>
        </>
    )
}

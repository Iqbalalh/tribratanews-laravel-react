import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CustomSideBar from '@/Components/CustomSideBar';
import { Button } from 'flowbite-react';

export default function Posts({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Posts</h2>}
        >
            <Head title="Posts" />
            <div className="container flex">
                <CustomSideBar />
                    <div className="crud m-10">
                        <Button className='bg-red-900 hover:bg-red-800'>Create</Button>
                    </div>
            </div>
        </AuthenticatedLayout>
    );
}

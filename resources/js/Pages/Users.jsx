import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CustomSideBar from '@/Components/CustomSideBar';

export default function Users({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
        >
            <Head title="Users" />
            <div className="container flex">
                <CustomSideBar />
                    <div className="crud m-10">
                        <h1>Tai</h1>
                    </div>
            </div>

        </AuthenticatedLayout>
    );
}

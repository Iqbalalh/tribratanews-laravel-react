import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import EditorSideBar from '@/Components/EditorSideBar';

export default function EditorDashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Editor" />

            <EditorSideBar />
        </AuthenticatedLayout>
    );
}

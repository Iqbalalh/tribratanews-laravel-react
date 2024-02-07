'use client';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import AdminSideBar from '@/Components/AdminSideBar';
import PrimaryButton from '@/Components/PrimaryButton';
import { useState } from 'react';
import { Table, Pagination, Button } from 'flowbite-react';
import { MdDelete } from "react-icons/md";
import { Inertia } from '@inertiajs/inertia';

export default function AdminUsers({ auth, userView }) {
    const [currentPage, setCurrentPage] = useState(userView.current_page);

    const onPageChange = (page) => {
        setCurrentPage(page);
        window.location.assign(`${userView.path}?page=${page}`);
    };

    const handleDeleteUser = (userId) => {
        Inertia.user(`/api/delete-user/${userId}`, {})
            .then((response) => {
                console.log('Deleted successfully:', response);
            })
            .catch((error) => {
                console.error('Error deleting user:', error);
            });
    };

    return (
        <div className="max-h-screen overflow-y-hidden">
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
        >
            <Head title="Users" />
            <div className="flex max-h-screen">
                <AdminSideBar />
                    <div className="crud mt-5 m-10 w-5/6">
                        <PrimaryButton onClick={() => {window.location.assign(`/register`)}}>
                            Create
                        </PrimaryButton>
                        <div className="overflow-x-auto mt-5" style={{ height: "78%" }}>
                            <Table hoverable className='min-w-full w-full' style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <Table.Head className="sticky top-0 z-10">
                                <Table.HeadCell style={{ width: "5%" }}>Id</Table.HeadCell>
                                <Table.HeadCell style={{ width: "25%" }}>Nama</Table.HeadCell>
                                <Table.HeadCell style={{ width: "25%" }}>Email</Table.HeadCell>
                                <Table.HeadCell style={{ width: "25%" }}>Role</Table.HeadCell>
                                <Table.HeadCell style={{ width: "20%" }}>Action</Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {userView.data.map((user) => (
                                        <Table.Row key={user.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell style={{ width: "5%" }}>{user.id} </Table.Cell>
                                            <Table.Cell style={{ width: "25%" }}>{user.name}</Table.Cell>
                                            <Table.Cell style={{ width: "25%" }}>{user.email}</Table.Cell>
                                            <Table.Cell style={{ width: "25%" }}>{user.role}</Table.Cell>
                                            <Table.Cell style={{ width: "20%" }}>
                                                <div className="flex">
                                                    <Button.Group>
                                                        {user.role !== 'admin' ? (
                                                            <Button
                                                                color="gray"
                                                                onClick={() => handleDeleteUser(user.id)}>
                                                                <MdDelete className="h-5 w-5" />
                                                            </Button>
                                                        ) : null}
                                                    </Button.Group>
                                                </div>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </div>
                        <div className="flex overflow-x-auto sm:justify-center">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={userView.last_page}
                                onPageChange={onPageChange}
                                showIcons
                            />
                        </div>
                    </div>
            </div>
        </AuthenticatedLayout>
        </div>
    );
}

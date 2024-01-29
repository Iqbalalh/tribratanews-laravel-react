'use client';

import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiNewspaper, HiUser } from 'react-icons/hi';

export default function AdminSideBar() {
    const currentPath = window.location.pathname;

    return (
    <Sidebar className='h-screen max-w-fit' label="Default sidebar example">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Sidebar.Item href="/admin-dashboard" icon={HiChartPie} className={`hover:bg-gray-700 ${currentPath === '/admin-dashboard' ? 'bg-gray-700 text-white' : ''}`} style={{ color: currentPath === '/admin-dashboard' ? 'white' : 'inherit' }}>
                    Dashboard
                </Sidebar.Item>
                <Sidebar.Item href="/admin-posts" icon={HiNewspaper} labelColor="dark" className={`hover:bg-gray-700 ${currentPath === '/admin-posts' ? 'bg-gray-700 text-white' : ''}`} style={{ color: currentPath === '/admin-posts' ? 'white' : 'inherit' }}>
                    Posts
                </Sidebar.Item>
                <Sidebar.Item href="/admin-users" icon={HiUser} className={`hover:bg-gray-700 ${currentPath === '/admin-users' ? 'bg-gray-700 text-white' : ''}`} style={{ color: currentPath === '/admin-users' ? 'white' : 'inherit' }}>
                    Users
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
    );
}

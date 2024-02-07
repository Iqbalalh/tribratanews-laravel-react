'use client';

import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiNewspaper } from 'react-icons/hi';

export default function EditorSideBar() {
    const currentPath = window.location.pathname;
  return (
    <Sidebar className='h-screen' label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
                <Sidebar.Item href="/editor-dashboard" icon={HiChartPie} className={`hover:bg-gray-700 hover:text-white ${currentPath === '/editor-dashboard' ? 'bg-gray-700 text-white' : ''}`} style={{ color: currentPath === '/editor-dashboard' ? 'white' : 'inherit' }}>
                    Dashboard
                </Sidebar.Item>
                <Sidebar.Item href="/editor-posts" icon={HiNewspaper} labelColor="dark" className={`hover:bg-gray-700 ${currentPath === '/editor-posts' ? 'bg-gray-700 text-white' : ''}`} style={{ color: currentPath === '/editor-posts' ? 'white' : 'inherit' }}>
                    Posts
                </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

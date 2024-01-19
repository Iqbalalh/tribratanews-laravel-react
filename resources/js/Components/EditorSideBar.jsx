'use client';

import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiNewspaper } from 'react-icons/hi';

export default function EditorSideBar() {
  return (
    <Sidebar className='h-screen' label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/editor-dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/editor-posts" icon={HiNewspaper} labelColor="dark">
            Posts
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

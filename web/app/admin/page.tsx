import React from 'react';
import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import './admin.css';
import AdminDashboard from './AdminDashboard';

export const metadata = {
  title: 'Admin Dashboard | Brahmagupta Mathematics Club',
};

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const displayEmail = user?.email ?? 'admin@dsu.edu.in';

  // Fetch all data
  const [{ data: notices }, { data: galleryFolders }, { data: events }] = await Promise.all([
    supabase.from('notices').select('*').order('created_at', { ascending: false }),
    supabase.from('gallery_folders').select('*').order('created_at', { ascending: false }),
    supabase.from('events').select('id, title, start_datetime, status, type').order('start_datetime', { ascending: false }),
  ]);

  return (
    <AdminDashboard
      displayEmail={displayEmail}
      events={events ?? []}
      notices={notices ?? []}
      galleryFolders={galleryFolders ?? []}
    />
  );
}

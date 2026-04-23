'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '../../utils/supabase/server';

// ── CREATE EVENT ──
export async function createEvent(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const title = formData.get('title') as string;
  const conducted_by = formData.get('conducted_by') as string;
  const google_form_link = formData.get('google_form_link') as string;
  const start_datetime = formData.get('start_datetime') as string;
  const registration_deadline = formData.get('registration_deadline') as string;
  const venue = formData.get('venue') as string;
  const prize_details = formData.get('prize_details') as string;
  const description = formData.get('description') as string;
  const type = formData.get('type') as string;
  const banner_url = formData.get('banner_url') as string;

  const { error } = await supabase.from('events').insert({
    title,
    conducted_by: conducted_by || null,
    google_form_link: google_form_link || null,
    start_datetime: start_datetime || null,
    registration_deadline: registration_deadline || null,
    venue: venue || null,
    prize_details: prize_details || null,
    description: description || null,
    type: (type || 'other') as 'quiz' | 'workshop' | 'guest_lecture' | 'competition' | 'other',
    banner_url: banner_url || null,
    status: 'upcoming' as 'draft' | 'published' | 'ongoing' | 'completed' | 'archived',
  });

  if (error) {
    console.error('Create event error:', error);
    redirect('/admin?error=Failed to create event: ' + error.message);
  }

  revalidatePath('/admin');
  revalidatePath('/events');
  redirect('/admin');
}

// ── CREATE NOTICE ──
export async function createNotice(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const title = formData.get('title') as string;
  const category = formData.get('category') as string;
  const content = formData.get('content') as string;
  const attachment_link = formData.get('attachment_link') as string;

  const { error } = await supabase.from('notices').insert([{
    title,
    category: category || 'General',
    content: content || null,
    attachment_link: attachment_link || null,
  }]);

  if (error) {
    console.error('Create notice error:', error);
    redirect('/admin?error=Failed to post notice: ' + error.message);
  }

  revalidatePath('/admin');
  redirect('/admin');
}

// ── DELETE NOTICE ──
export async function deleteNotice(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const id = formData.get('id') as string;
  await supabase.from('notices').delete().eq('id', id);

  revalidatePath('/admin');
  redirect('/admin');
}

// ── ADD GALLERY FOLDER ──
export async function addGalleryFolder(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const drive_link = formData.get('drive_link') as string;

  const { error } = await supabase.from('gallery_folders').insert([{
    title: title || null,
    description: description || null,
    drive_link,
  }]);

  if (error) {
    console.error('Gallery folder error:', error);
    redirect('/admin?error=Failed to add gallery: ' + error.message);
  }

  revalidatePath('/admin');
  revalidatePath('/gallery');
  redirect('/admin');
}

// ── LOGOUT ──
export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath('/', 'layout');
  redirect('/');
}

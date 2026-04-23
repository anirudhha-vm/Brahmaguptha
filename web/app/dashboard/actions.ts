"use server";

import { createClient } from '../../utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function cancelRegistration(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return;
  }

  const eventId = formData.get('eventId') as string;

  const { data: event } = await supabase
    .from('events')
    .select('registered_users')
    .eq('id', eventId)
    .single();

  if (!event || !event.registered_users) {
    return;
  }

  // Remove the user's ID from the array
  const newUsers = event.registered_users.filter((id: string) => id !== user.id);

  await supabase
    .from('events')
    .update({ registered_users: newUsers })
    .eq('id', eventId);

  revalidatePath('/dashboard');
  revalidatePath('/events');
  revalidatePath(`/events/${eventId}`);
}

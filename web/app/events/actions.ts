"use server";

import { createClient } from '../../utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function registerForEvent(formData: FormData) {
  const eventId = formData.get('eventId') as string;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'Not authenticated' };
  }

  // Fetch current event to get the existing registered_users array
  const { data: event, error: fetchError } = await supabase
    .from('events')
    .select('registered_users')
    .eq('id', eventId)
    .single();

  if (fetchError || !event) {
    return { error: 'Event not found' };
  }

  const currentUsers = event.registered_users || [];
  
  if (currentUsers.includes(user.id)) {
    return { error: 'Already registered' };
  }

  const newUsers = [...currentUsers, user.id];

  const { error: updateError } = await supabase
    .from('events')
    .update({ registered_users: newUsers })
    .eq('id', eventId);

  if (updateError) {
    return { error: 'Failed to complete registration' };
  }

  revalidatePath(`/events/${eventId}`);
  revalidatePath('/events');
  return { success: true };
}

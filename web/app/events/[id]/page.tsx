import React from 'react';
import { createClient } from '../../../utils/supabase/server';
import { registerForEvent } from '../actions';
import { notFound } from 'next/navigation';

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Fetch Event details
  const { data: event, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !event) {
    notFound();
  }

  const isRegistered = user ? (event.registered_users || []).includes(user.id) : false;
  const registrationFull = event.max_participants ? (event.registered_users?.length || 0) >= event.max_participants : false;

  return (
    <div className="events-wrapper">
      <div className="container" style={{paddingTop: '40px', paddingBottom: '80px', maxWidth: '900px'}}>
        
        <div style={{borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-subtle)', background: 'white'}}>
          <div style={{width: '100%', height: '300px', backgroundImage: `url(${event.banner_url || 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2940'})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative'}}>
            <div style={{position: 'absolute', top: '20px', left: '20px', background: 'var(--color-primary)', color: 'white', padding: '6px 12px', borderRadius: '4px', fontFeatureSettings: 'small-caps', fontWeight: 'bold'}}>{event.type.replace('_', ' ')}</div>
          </div>
          
          <div style={{padding: 'var(--space-xl)'}}>
            <h1 style={{fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)', fontSize: '2.5rem', marginBottom: '8px'}}>{event.title}</h1>
            <p style={{color: 'var(--color-text)', opacity: '0.8', marginBottom: 'var(--space-md)'}}>
              {event.start_datetime ? new Date(event.start_datetime).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' }) : 'TBD'}
            </p>
            
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: 'var(--space-lg)'}}>
              {event.description}
            </p>

            <div style={{background: 'var(--color-bg)', padding: 'var(--space-md)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-light-gray)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div>
                <span style={{display: 'block', fontWeight: '600', color: 'var(--color-secondary)'}}>Status: {event.status.toUpperCase()}</span>
                <span style={{fontSize: '0.9rem', color: 'var(--color-text)'}}>
                  👥 {event.registered_users?.length || 0} / {event.max_participants || '∞'} Registered
                </span>
              </div>

              {!user ? (
                <a href="/login" className="btn btn-secondary">Login to Register</a>
              ) : isRegistered ? (
                <button className="btn" style={{background: '#4CAF50', color: 'white', border: 'none', cursor: 'default'}}>✅ Registered</button>
              ) : registrationFull ? (
                <button className="btn" style={{background: '#ccc', color: 'white', border: 'none', cursor: 'not-allowed'}} disabled>Registration Full</button>
              ) : (
                <form action={registerForEvent}>
                  <input type="hidden" name="eventId" value={event.id} />
                  <button type="submit" className="btn">Register Now</button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

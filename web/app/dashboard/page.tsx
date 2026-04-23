import React from 'react';
import './dashboard.css';
import Link from 'next/link';
import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { cancelRegistration } from './actions';

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Fetch the connected profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  const userEmail = user.email || 'Student';
  const displayLetter = userEmail.charAt(0).toUpperCase();

  // Fetch only events this specific user registered for using Supabase contains operator
  const { data: registeredEvents } = await supabase
    .from('events')
    .select('id, title, start_datetime')
    .contains('registered_users', [user.id])
    .order('start_datetime', { ascending: false });

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-grid animate-fade-in">
        
        {/* Profile Sidebar */}
        <aside className="profile-card">
          <div className="profile-avatar" style={{background: 'var(--color-primary)'}}>{displayLetter}</div>
          <h2 className="profile-name" style={{fontSize: '1.2rem', wordBreak: 'break-word'}}>{profile?.name || userEmail.split('@')[0]}</h2>
          <span className="profile-role" style={{textTransform: 'capitalize'}}>{profile?.role || 'Member'}</span>
          
          <div className="stat-row">
            <div className="stat">
              <span className="stat-val">{registeredEvents?.length || 0}</span>
              <span className="stat-label">Events</span>
            </div>
            <div className="stat">
              <span className="stat-val">{profile?.role === 'admin' ? '∞' : '0'}</span>
              <span className="stat-label">Access</span>
            </div>
          </div>
          
          <button className="btn" style={{marginTop: '2rem', width: '100%', opacity: 0.5, cursor: 'not-allowed'}}>Edit Profile (Soon)</button>

          {profile?.role === 'admin' || profile?.role === 'core_team' ? (
             <Link href="/admin" className="btn btn-secondary" style={{marginTop: '10px', width: '100%', textAlign: 'center'}}>Enter Command Center</Link>
          ) : null}

        </aside>

        {/* Main Content Area */}
        <main>
          <div className="panel-header">
            <h3>Registered Events</h3>
            <Link href="/events" className="panel-link">Find More</Link>
          </div>
          
          <div className="activity-feed">
            {registeredEvents && registeredEvents.length > 0 ? (
              registeredEvents.map(ev => (
                <div key={ev.id} className="activity-item">
                  <div>
                    <div className="activity-title" style={{color: 'var(--color-secondary)'}}>{ev.title}</div>
                    <div className="activity-meta">
                       {ev.start_datetime ? new Date(ev.start_datetime).toLocaleDateString() : 'TBD'}
                    </div>
                  </div>
                  <form action={cancelRegistration}>
                    <input type="hidden" name="eventId" value={ev.id} />
                    <button type="submit" className="activity-action" style={{cursor: 'pointer', border: '1px solid #ddd', padding: '6px 12px', borderRadius: '4px', background: 'transparent', color: '#ff4d4f'}}>Deregister</button>
                  </form>
                </div>
              ))
            ) : (
              <div style={{padding: '20px', textAlign: 'center', color: '#888', background: '#f5f5f5', borderRadius: '8px'}}>
                You haven't registered for any events yet. <Link href="/events" style={{color: 'var(--color-primary)'}}>Start exploring!</Link>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

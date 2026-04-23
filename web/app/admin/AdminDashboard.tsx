'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { createEvent, createNotice, addGalleryFolder, deleteNotice, logout } from './actions';

interface Event {
  id: string;
  title: string;
  start_datetime: string | null;
  status: string | null;
  type: string | null;
}

interface Notice {
  id: string;
  title: string;
  category: string | null;
  created_at: string | null;
}

interface GalleryFolder {
  id: string;
  title: string | null;
  drive_link: string;
  created_at: string | null;
  description: string | null;
}

interface Props {
  displayEmail: string;
  events: Event[];
  notices: Notice[];
  galleryFolders: GalleryFolder[];
}

type Tab = 'dashboard' | 'events' | 'notices' | 'gallery';

export default function AdminDashboard({ displayEmail, events, notices, galleryFolders }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  const totalEvents = events.length;
  const totalNotices = notices.length;
  const totalAlbums = galleryFolders.length;

  const navItems: { id: Tab; icon: string; label: string }[] = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'events',    icon: '📅', label: 'Events' },
    { id: 'notices',   icon: '🔔', label: 'Notices' },
    { id: 'gallery',   icon: '🖼️', label: 'Gallery' },
  ];

  return (
    <div className="admin-wrapper">
      {/* ── Top bar ── */}
      <header className="admin-topbar">
        <div className="admin-topbar-brand">
          <img src="/Final_Logo.png" alt="Brahmagupta Club" />
          <div>
            <div className="admin-topbar-title">BRAHMAGUPTA</div>
            <div className="admin-topbar-sub">Admin Portal</div>
          </div>
        </div>
        <div className="admin-topbar-actions">
          <div className="admin-topbar-user">
            <span className="admin-topbar-user-dot"></span>
            {displayEmail}
          </div>
          <Link href="/" className="admin-btn-home">← Home</Link>
          <form action={logout} style={{ display: 'inline' }}>
            <button type="submit" className="admin-btn-logout">Logout ↗</button>
          </form>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="admin-body">
        {/* ── Left Sidebar ── */}
        <nav className="admin-sidebar-nav">
          <div className="admin-sidebar-section-label">Manage</div>
          <div className="admin-sidebar-section">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`admin-nav-btn ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="admin-nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="admin-sidebar-divider"></div>

          <div className="admin-sidebar-section-label">Website</div>
          <div className="admin-sidebar-section">
            <Link href="/events" target="_blank" className="admin-nav-btn" style={{ textDecoration: 'none' }}>
              <span className="admin-nav-icon">🔗</span>
              <span>Events Page</span>
            </Link>
            <Link href="/gallery" target="_blank" className="admin-nav-btn" style={{ textDecoration: 'none' }}>
              <span className="admin-nav-icon">🔗</span>
              <span>Gallery Page</span>
            </Link>
          </div>

          <div className="admin-sidebar-divider"></div>

          <div className="admin-sidebar-bottom admin-sidebar-section">
            <form action={logout}>
              <button type="submit" className="admin-nav-btn" style={{ width: '100%' }}>
                <span className="admin-nav-icon">🚪</span>
                <span>Logout</span>
              </button>
            </form>
          </div>
        </nav>

        {/* ── Main Content ── */}
        <main className="admin-main-content">

          {/* ─── DASHBOARD TAB ─── */}
          {activeTab === 'dashboard' && (
            <>
              <div className="admin-page-header">
                <div>
                  <div className="admin-page-title">Dashboard</div>
                  <div className="admin-page-sub">Welcome back, {displayEmail}</div>
                </div>
              </div>
              <div className="admin-stats-row">
                <div className="admin-stat-card" onClick={() => setActiveTab('events')} style={{ cursor: 'pointer' }}>
                  <span className="admin-stat-icon">📅</span>
                  <div className="admin-stat-value">{totalEvents}</div>
                  <div className="admin-stat-label">Total Events</div>
                </div>
                <div className="admin-stat-card" onClick={() => setActiveTab('notices')} style={{ cursor: 'pointer' }}>
                  <span className="admin-stat-icon">🔔</span>
                  <div className="admin-stat-value">{totalNotices}</div>
                  <div className="admin-stat-label">Notices</div>
                </div>
                <div className="admin-stat-card" onClick={() => setActiveTab('gallery')} style={{ cursor: 'pointer' }}>
                  <span className="admin-stat-icon">🖼️</span>
                  <div className="admin-stat-value">{totalAlbums}</div>
                  <div className="admin-stat-label">Albums</div>
                </div>
              </div>

              {/* Quick overview of all 3 lists */}
              <div className="admin-dashboard-grid">
                <div className="admin-main">
                  {/* Recent notices */}
                  <div className="admin-card">
                    <div className="admin-card-header">
                      <div className="admin-card-title-group">
                        <div className="admin-card-icon">🔔</div>
                        <div>
                          <div className="admin-card-title">Recent Notices</div>
                          <div className="admin-card-desc">Latest announcements</div>
                        </div>
                      </div>
                      <button className="admin-create-btn" onClick={() => setActiveTab('notices')}>Manage →</button>
                    </div>
                    <div className="admin-card-body">
                      {notices.length > 0 ? (
                        <div className="notices-list">
                          {notices.slice(0, 4).map((n) => (
                            <div className="notice-item" key={n.id}>
                              <div className="notice-item-left">
                                <span className="notice-badge">{n.category}</span>
                                <span className="notice-title">{n.title}</span>
                              </div>
                              <span className="notice-date">
                                {n.created_at ? new Date(n.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }) : 'Unknown date'}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="notice-empty">No notices yet.</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="admin-sidebar">
                  {/* Recent events */}
                  <div className="admin-card">
                    <div className="admin-card-header">
                      <div className="admin-card-title-group">
                        <div className="admin-card-icon">📅</div>
                        <div>
                          <div className="admin-card-title">Events</div>
                          <div className="admin-card-desc">{totalEvents} total</div>
                        </div>
                      </div>
                    </div>
                    <div className="admin-card-body">
                      {events.length > 0 ? (
                        <div className="notices-list">
                          {events.slice(0, 5).map((ev) => (
                            <div className="notice-item" key={ev.id}>
                              <div className="notice-item-left">
                                <span className={`notice-badge status-${ev.status || 'draft'}`}>
                                  {ev.status || 'draft'}
                                </span>
                                <span className="notice-title">{ev.title}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="notice-empty">No events yet.</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ─── EVENTS TAB ─── */}
          {activeTab === 'events' && (
            <>
              <div className="admin-page-header">
                <div>
                  <div className="admin-page-title">Events</div>
                  <div className="admin-page-sub">Create and manage all events — {totalEvents} total records</div>
                </div>
              </div>
              <div className="admin-dashboard-grid">
                <div className="admin-main">
                  <div className="admin-card">
                    <div className="admin-card-header">
                      <div className="admin-card-title-group">
                        <div className="admin-card-icon">📅</div>
                        <div>
                          <div className="admin-card-title">Create New Event</div>
                          <div className="admin-card-desc">Add an event or workshop to the website</div>
                        </div>
                      </div>
                    </div>
                    <div className="admin-card-body">
                      <form action={createEvent} className="admin-form">
                        <div className="admin-form-row">
                          <div className="admin-field">
                            <label className="admin-label">Event Name *</label>
                            <input className="admin-input" type="text" name="title" placeholder="Enter event name" required />
                          </div>
                          <div className="admin-field">
                            <label className="admin-label">Conducted By</label>
                            <input className="admin-input" type="text" name="conducted_by" placeholder="Organizing body or team" />
                          </div>
                        </div>
                        <div className="admin-field">
                          <label className="admin-label">Google Forms Registration Link</label>
                          <input className="admin-input" type="url" name="google_form_link" placeholder="https://forms.gle/..." />
                        </div>
                        <div className="admin-form-row">
                          <div className="admin-field">
                            <label className="admin-label">Event Date & Time *</label>
                            <input className="admin-input" type="datetime-local" name="start_datetime" required />
                          </div>
                          <div className="admin-field">
                            <label className="admin-label">Registration Deadline</label>
                            <input className="admin-input" type="datetime-local" name="registration_deadline" />
                          </div>
                        </div>
                        <div className="admin-form-row">
                          <div className="admin-field">
                            <label className="admin-label">Venue</label>
                            <input className="admin-input" type="text" name="venue" placeholder="e.g. SOE Lab 406, DSU" />
                          </div>
                          <div className="admin-field">
                            <label className="admin-label">Prize Details</label>
                            <input className="admin-input" type="text" name="prize_details" placeholder="e.g. Cash prizes, certificates" />
                          </div>
                        </div>
                        <div className="admin-field">
                          <label className="admin-label">Description</label>
                          <textarea className="admin-textarea" name="description" placeholder="Describe the event..." rows={3}></textarea>
                        </div>
                        <div className="admin-form-row">
                          <div className="admin-field">
                            <label className="admin-label">Event Type</label>
                            <select className="admin-select" name="type">
                              <option value="workshop">Workshop</option>
                              <option value="competition">Competition</option>
                              <option value="quiz">Quiz</option>
                              <option value="guest_lecture">Guest Lecture</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <div className="admin-field">
                            <label className="admin-label">Banner Image URL (optional)</label>
                            <input className="admin-input" type="url" name="banner_url" placeholder="https://..." />
                          </div>
                        </div>
                        <button type="submit" className="admin-submit-btn">+ Publish Event</button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="admin-sidebar">
                  <div className="admin-card">
                    <div className="admin-card-header">
                      <div className="admin-card-title-group">
                        <div className="admin-card-icon">📋</div>
                        <div>
                          <div className="admin-card-title">All Events</div>
                          <div className="admin-card-desc">{totalEvents} total records</div>
                        </div>
                      </div>
                    </div>
                    <div className="admin-card-body">
                      {events.length > 0 ? (
                        <div className="notices-list">
                          {events.map((ev) => (
                            <div className="notice-item" key={ev.id}>
                              <div className="notice-item-left">
                                <span className={`notice-badge status-${ev.status || 'draft'}`}>
                                  {ev.status || 'draft'}
                                </span>
                                <span className="notice-title">{ev.title}</span>
                              </div>
                              <span className="notice-date">
                                {ev.start_datetime
                                  ? new Date(ev.start_datetime).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: '2-digit' })
                                  : 'TBA'}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="notice-empty">No events yet. Create one!</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ─── NOTICES TAB ─── */}
          {activeTab === 'notices' && (
            <>
              <div className="admin-page-header">
                <div>
                  <div className="admin-page-title">Notices</div>
                  <div className="admin-page-sub">Post and manage announcements — {totalNotices} published</div>
                </div>
              </div>
              <div className="admin-dashboard-grid">
                <div className="admin-main">
                  <div className="admin-card">
                    <div className="admin-card-header">
                      <div className="admin-card-title-group">
                        <div className="admin-card-icon">🔔</div>
                        <div>
                          <div className="admin-card-title">Create Notice</div>
                          <div className="admin-card-desc">Post an announcement to the notice board</div>
                        </div>
                      </div>
                    </div>
                    <div className="admin-card-body">
                      <form action={createNotice} className="admin-form">
                        <div className="admin-form-row">
                          <div className="admin-field">
                            <label className="admin-label">Title *</label>
                            <input className="admin-input" type="text" name="title" placeholder="Notice title" required />
                          </div>
                          <div className="admin-field">
                            <label className="admin-label">Category</label>
                            <select className="admin-select" name="category">
                              <option value="General">General</option>
                              <option value="Important">Important</option>
                              <option value="Event">Event</option>
                              <option value="Result">Result</option>
                            </select>
                          </div>
                        </div>
                        <div className="admin-field">
                          <label className="admin-label">Content</label>
                          <textarea className="admin-textarea" name="content" placeholder="Notice content..." rows={3}></textarea>
                        </div>
                        <div className="admin-field">
                          <label className="admin-label">Attachment / PDF Link (optional)</label>
                          <input className="admin-input" type="url" name="attachment_link" placeholder="https://drive.google.com/..." />
                        </div>
                        <button type="submit" className="admin-submit-btn">Post Notice</button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="admin-sidebar">
                  <div className="admin-card">
                    <div className="admin-card-header">
                      <div className="admin-card-title-group">
                        <div className="admin-card-icon">📋</div>
                        <div>
                          <div className="admin-card-title">Published Notices</div>
                          <div className="admin-card-desc">{totalNotices} posted</div>
                        </div>
                      </div>
                    </div>
                    <div className="admin-card-body">
                      {notices.length > 0 ? (
                        <div className="notices-list">
                          {notices.map((n) => (
                            <div className="notice-item" key={n.id}>
                              <div className="notice-item-left">
                                <span className="notice-badge">{n.category}</span>
                                <span className="notice-title">{n.title}</span>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                                <span className="notice-date">
                                  {n.created_at ? new Date(n.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }) : 'Unknown date'}
                                </span>
                                <form action={deleteNotice} style={{ display: 'flex' }}>
                                  <input type="hidden" name="id" value={n.id} />
                                  <button type="submit" className="notice-delete-btn" title="Delete">🗑</button>
                                </form>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="notice-empty">No notices published yet.</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ─── GALLERY TAB ─── */}
          {activeTab === 'gallery' && (
            <>
              <div className="admin-page-header">
                <div>
                  <div className="admin-page-title">Gallery</div>
                  <div className="admin-page-sub">Link Google Drive albums — {totalAlbums} linked</div>
                </div>
              </div>
              <div className="admin-dashboard-grid">
                <div className="admin-main">
                  <div className="admin-card">
                    <div className="admin-card-header">
                      <div className="admin-card-title-group">
                        <div className="admin-card-icon">🖼️</div>
                        <div>
                          <div className="admin-card-title">Add Gallery Album</div>
                          <div className="admin-card-desc">Link a Google Drive folder to the gallery</div>
                        </div>
                      </div>
                    </div>
                    <div className="admin-card-body">
                      <form action={addGalleryFolder} className="admin-form">
                        <div className="admin-form-row">
                          <div className="admin-field">
                            <label className="admin-label">Album Title</label>
                            <input className="admin-input" type="text" name="title" placeholder="e.g. Sootravyooh 2025" />
                          </div>
                          <div className="admin-field">
                            <label className="admin-label">Description (optional)</label>
                            <input className="admin-input" type="text" name="description" placeholder="Short description" />
                          </div>
                        </div>
                        <div className="admin-field">
                          <label className="admin-label">Google Drive Folder Link *</label>
                          <input className="admin-input" type="url" name="drive_link" placeholder="https://drive.google.com/drive/folders/..." required />
                        </div>
                        <button type="submit" className="admin-submit-btn">+ Add to Gallery</button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="admin-sidebar">
                  <div className="admin-card">
                    <div className="admin-card-header">
                      <div className="admin-card-title-group">
                        <div className="admin-card-icon">📁</div>
                        <div>
                          <div className="admin-card-title">Albums</div>
                          <div className="admin-card-desc">{totalAlbums} linked</div>
                        </div>
                      </div>
                    </div>
                    <div className="admin-card-body">
                      {galleryFolders.length > 0 ? (
                        <div className="gallery-list">
                          {galleryFolders.map((g) => (
                            <div className="gallery-folder-card" key={g.id}>
                              <div className="gallery-folder-title">{g.title || 'Untitled Album'}</div>
                              {g.description && <div className="gallery-folder-date">{g.description}</div>}
                              <a href={g.drive_link} target="_blank" rel="noopener noreferrer" className="gallery-folder-link">
                                {g.drive_link}
                              </a>
                              <div className="gallery-folder-date">
                                Added {g.created_at ? new Date(g.created_at).toLocaleDateString('en-IN') : 'Unknown date'}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="notice-empty">No albums linked yet.</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

        </main>
      </div>
    </div>
  );
}

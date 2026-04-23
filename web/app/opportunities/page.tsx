import React from 'react';
import './opportunities.css';
import { createClient } from '../../utils/supabase/server';

export default async function OpportunitiesPage() {
  const supabase = await createClient();
  const { data: opps, error } = await supabase
    .from('opportunities')
    .select('*')
    .eq('status', 'published')
    .order('created_at', { ascending: false });

  const safeOpps = opps || [];

  return (
    <div className="opp-wrapper">
      <div className="opp-hero animate-fade-in">
        <h1 className="opp-title">Opportunities</h1>
        <p className="opp-subtitle">
          Exclusive internships, research grants, and fellowships curated specifically for the mathematical minds of the Brahmagupta Club.
        </p>
      </div>

      <div className="glass-toolbar animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Internships</button>
        <button className="filter-btn">Hackathons</button>
        <button className="filter-btn">Research</button>
        <button className="filter-btn">Club Grants</button>
      </div>

      <div className="container px-4">
        <div className="opp-grid animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {safeOpps.map((opp) => (
            <div key={opp.id} className={`opp-card`}>
              <div className="opp-info">
                <div className="opp-header">
                  <span className="opp-meta">{opp.type.replace('_', ' ')}</span>
                  <span className="opp-deadline">⏱ {opp.deadline ? new Date(opp.deadline).toLocaleDateString() : 'Rolling Deadline'}</span>
                </div>
                <h3 className="opp-role">{opp.title}</h3>
                <div className="opp-org">{opp.submitted_by}</div>
                <p className="opp-desc">{opp.description}</p>
              </div>
              <div className="opp-action">
                <a href={opp.external_link} className="btn" style={{ width: '100%', marginBottom: '8px' }}>Apply Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

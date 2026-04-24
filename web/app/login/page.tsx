import React from 'react';
import './login.css';
import { login } from './actions';

export const metadata = {
  title: 'Admin Login | Brahmagupta Mathematics Club DSU',
};

export default function LoginPage({ searchParams }: { searchParams: { error?: string, message?: string } }) {
  return (
    <div className="login-wrapper">
      <div className="login-card animate-fade-in">
        <div className="login-logo">
          <img src="/Final_Logo.png" alt="Brahmagupta Club Logo" style={{ borderRadius: '50%', objectFit: 'cover' }} />
        </div>
        <h1 className="login-title">Admin Access</h1>
        <p className="login-subtitle">Faculty &amp; Core Team Only — Authorised Personnel</p>

        {searchParams.error && <div className="auth-error">{searchParams.error}</div>}
        {searchParams.message && <div className="auth-success">{searchParams.message}</div>}

        <form className="auth-form">
          <label className="input-label" htmlFor="email">Email</label>
          <input
            className="auth-input"
            type="email"
            id="email"
            name="email"
            placeholder="your@dsu.edu.in"
            required
          />

          <label className="input-label" htmlFor="password">Password</label>
          <input
            className="auth-input"
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            required
            minLength={6}
          />

          <button formAction={login} className="btn auth-btn">
            Sign In →
          </button>
        </form>

        <p className="login-note">
          Access restricted to Faculty In-Charge, Core Team members, and Website Manager only.
          Contact <a href="mailto:mathsclub@dsu.edu.in">mathsclub@dsu.edu.in</a> for access issues.
        </p>
      </div>
    </div>
  );
}

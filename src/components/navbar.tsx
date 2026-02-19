import { Zap, Github, Sparkles, Settings } from 'lucide-react';
import { ConnectionStatus } from '../hooks/useBackendHealth';

interface NavbarProps {
  onSettingsClick: () => void;
  connectionStatus: ConnectionStatus;
}

function ConnectionIndicator({ status }: { status: ConnectionStatus }) {
  if (status === 'checking') {
    return (
      <span
        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
        style={{
          background: 'rgba(139, 139, 173, 0.1)',
          color: '#8B8BAD',
          border: '1px solid rgba(139, 139, 173, 0.2)',
        }}
        title="Checking backend connection…"
      >
        <span
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: '#8B8BAD' }}
        />
        Checking…
      </span>
    );
  }

  if (status === 'connected') {
    return (
      <span
        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
        style={{
          background: 'rgba(34, 197, 94, 0.1)',
          color: '#22c55e',
          border: '1px solid rgba(34, 197, 94, 0.25)',
        }}
        title="Backend is connected and healthy"
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{ background: '#22c55e' }}
        />
        Backend Connected
      </span>
    );
  }

  // disconnected
  return (
    <span
      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
      style={{
        background: 'rgba(239, 68, 68, 0.1)',
        color: '#ef4444',
        border: '1px solid rgba(239, 68, 68, 0.25)',
      }}
      title="Backend is offline or unreachable"
    >
      <span className="relative flex w-2 h-2">
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ background: '#ef4444' }}
        />
        <span
          className="relative inline-flex rounded-full w-2 h-2"
          style={{ background: '#ef4444' }}
        />
      </span>
      Backend Offline
    </span>
  );
}

export function Navbar({ onSettingsClick, connectionStatus }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ background: 'rgba(10, 10, 15, 0.7)', borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)' }}>
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-[#F0F0FF]" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            SEO<span className="gradient-text" style={{ fontWeight: 700 }}>Boost</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <ConnectionIndicator status={connectionStatus} />
          <span
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
            style={{ background: 'rgba(108, 99, 255, 0.1)', color: '#8B8BAD', border: '1px solid rgba(108, 99, 255, 0.2)' }}
          >
            <Sparkles className="w-3 h-3" style={{ color: '#6C63FF' }} />
            Powered by AI
          </span>
          <button
            onClick={onSettingsClick}
            className="p-2 rounded-lg transition-colors hover:bg-white/5 cursor-pointer"
            style={{ color: '#8B8BAD' }}
            title="Settings"
          >
            <Settings className="w-4 h-4" />
          </button>
          <a
            href="https://github.com/House-of-Coco/seo-content-optimizer"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-colors hover:bg-white/5"
            style={{ color: '#8B8BAD' }}
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}

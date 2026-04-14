import { useState } from 'react';
import { AdminDashboard } from './components/AdminDashboard';
import { UserInterface } from './components/UserInterface';
import { LogIn } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<'login' | 'admin' | 'user'>('login');

  if (view === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Concert Manager</h1>
            <p className="text-gray-600">Sélectionnez votre interface</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setView('admin')}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
            >
              <div className="font-semibold text-lg">Interface Admin</div>
              <div className="text-sm opacity-90">Gestion des concerts et utilisateurs</div>
            </button>

            <button
              onClick={() => setView('user')}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
            >
              <div className="font-semibold text-lg">Interface Utilisateur</div>
              <div className="text-sm opacity-90">Découvrir et acheter des tickets</div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'admin') {
    return <AdminDashboard onLogout={() => setView('login')} />;
  }

  return <UserInterface onLogout={() => setView('login')} />;
}

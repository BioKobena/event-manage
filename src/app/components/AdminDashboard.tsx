import { useState } from 'react';
import {
  LayoutDashboard,
  Music,
  Users,
  UserCircle,
  Ticket,
  LogOut,
  Plus,
  Search,
  Edit,
  Trash2,
  TrendingUp,
  Calendar,
  DollarSign
} from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'concerts' | 'clients' | 'artistes' | 'tickets'>('dashboard');

  // Mock data
  const concerts = [
    { id: 1, lieu: 'Olympia Paris', date: '2026-05-15', genre: 'Rock', description: 'Concert rock énergique', popularite: 95, places: 2000, placesVendues: 1850 },
    { id: 2, lieu: 'Zénith Lille', date: '2026-06-20', genre: 'Pop', description: 'Soirée pop inoubliable', popularite: 88, places: 3000, placesVendues: 2400 },
    { id: 3, lieu: 'Stade de France', date: '2026-07-10', genre: 'Électro', description: 'Festival électro géant', popularite: 92, places: 50000, placesVendues: 45000 },
  ];

  const clients = [
    { id: 1, nom: 'Dupont', prenom: 'Marie', age: 28, genre: 'F', compteBancaire: 'FR76****1234' },
    { id: 2, nom: 'Martin', prenom: 'Pierre', age: 35, genre: 'M', compteBancaire: 'FR76****5678' },
    { id: 3, nom: 'Bernard', prenom: 'Sophie', age: 24, genre: 'F', compteBancaire: 'FR76****9012' },
  ];

  const artistes = [
    { id: 1, nom: 'Durand', prenom: 'Alex', nationalite: 'France', genre: 'Rock' },
    { id: 2, nom: 'Smith', prenom: 'Emma', nationalite: 'UK', genre: 'Pop' },
    { id: 3, nom: 'Weber', prenom: 'Hans', nationalite: 'Allemagne', genre: 'Électro' },
  ];

  const tickets = [
    { id: 1, concert: 'Olympia Paris - Rock', client: 'Marie Dupont', prix: 85, date: '2026-05-15' },
    { id: 2, concert: 'Zénith Lille - Pop', client: 'Pierre Martin', prix: 65, date: '2026-06-20' },
    { id: 3, concert: 'Stade de France - Électro', client: 'Sophie Bernard', prix: 120, date: '2026-07-10' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-purple-900 to-purple-700 text-white p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Concert Manager</h1>
          <p className="text-purple-200 text-sm">Interface Admin</p>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'dashboard' ? 'bg-white text-purple-900' : 'hover:bg-purple-800'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </button>

          <button
            onClick={() => setActiveTab('concerts')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'concerts' ? 'bg-white text-purple-900' : 'hover:bg-purple-800'
            }`}
          >
            <Music className="w-5 h-5" />
            Concerts
          </button>

          <button
            onClick={() => setActiveTab('clients')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'clients' ? 'bg-white text-purple-900' : 'hover:bg-purple-800'
            }`}
          >
            <Users className="w-5 h-5" />
            Clients
          </button>

          <button
            onClick={() => setActiveTab('artistes')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'artistes' ? 'bg-white text-purple-900' : 'hover:bg-purple-800'
            }`}
          >
            <UserCircle className="w-5 h-5" />
            Artistes
          </button>

          <button
            onClick={() => setActiveTab('tickets')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'tickets' ? 'bg-white text-purple-900' : 'hover:bg-purple-800'
            }`}
          >
            <Ticket className="w-5 h-5" />
            Tickets
          </button>
        </nav>

        <button
          onClick={onLogout}
          className="absolute bottom-6 left-6 right-6 flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-800 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Déconnexion
        </button>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <Music className="w-8 h-8" />
                  <TrendingUp className="w-6 h-6 opacity-75" />
                </div>
                <div className="text-3xl font-bold mb-1">{concerts.length}</div>
                <div className="text-blue-100">Concerts</div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8" />
                  <TrendingUp className="w-6 h-6 opacity-75" />
                </div>
                <div className="text-3xl font-bold mb-1">{clients.length}</div>
                <div className="text-green-100">Clients</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <UserCircle className="w-8 h-8" />
                  <TrendingUp className="w-6 h-6 opacity-75" />
                </div>
                <div className="text-3xl font-bold mb-1">{artistes.length}</div>
                <div className="text-purple-100">Artistes</div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="w-8 h-8" />
                  <TrendingUp className="w-6 h-6 opacity-75" />
                </div>
                <div className="text-3xl font-bold mb-1">{tickets.length}</div>
                <div className="text-orange-100">Tickets vendus</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Concerts à venir</h3>
              <div className="space-y-4">
                {concerts.map(concert => (
                  <div key={concert.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Music className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{concert.lieu}</div>
                        <div className="text-sm text-gray-600 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {concert.date}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{concert.placesVendues}/{concert.places}</div>
                      <div className="text-sm text-gray-600">places</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'concerts' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Gestion des Concerts</h2>
              <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                <Plus className="w-5 h-5" />
                Nouveau Concert
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg">
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Rechercher un concert..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lieu</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genre</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Places</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Popularité</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {concerts.map(concert => (
                      <tr key={concert.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{concert.lieu}</div>
                          <div className="text-sm text-gray-500">{concert.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{concert.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                            {concert.genre}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {concert.placesVendues} / {concert.places}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-purple-600 h-2 rounded-full"
                                style={{ width: `${concert.popularite}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-600">{concert.popularite}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'clients' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Gestion des Clients</h2>
            </div>

            <div className="bg-white rounded-xl shadow-lg">
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Rechercher un client..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Âge</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genre</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compte</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {clients.map(client => (
                      <tr key={client.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{client.nom}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.prenom}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.age}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.genre}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.compteBancaire}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'artistes' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Gestion des Artistes</h2>
              <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                <Plus className="w-5 h-5" />
                Nouvel Artiste
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg">
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Rechercher un artiste..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nationalité</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genre Musical</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {artistes.map(artiste => (
                      <tr key={artiste.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{artiste.nom}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{artiste.prenom}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{artiste.nationalite}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                            {artiste.genre}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tickets' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Gestion des Tickets</h2>
            </div>

            <div className="bg-white rounded-xl shadow-lg">
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Rechercher un ticket..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Concert</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tickets.map(ticket => (
                      <tr key={ticket.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{ticket.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.concert}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.client}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">{ticket.prix}€</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from 'react';
import {
  Music,
  LogOut,
  Search,
  Calendar,
  MapPin,
  Star,
  ShoppingCart,
  Ticket,
  User,
  ChevronRight,
  Clock,
  TrendingUp
} from 'lucide-react';

interface UserInterfaceProps {
  onLogout: () => void;
}

export function UserInterface({ onLogout }: UserInterfaceProps) {
  const [activeView, setActiveView] = useState<'concerts' | 'myTickets' | 'profile'>('concerts');
  const [selectedConcert, setSelectedConcert] = useState<number | null>(null);

  // Mock data
  const concerts = [
    {
      id: 1,
      lieu: 'Olympia Paris',
      date: '2026-05-15',
      heure: '20:00',
      genre: 'Rock',
      description: 'Concert rock énergique avec les meilleurs artistes de la scène internationale',
      popularite: 95,
      places: 2000,
      placesDisponibles: 150,
      prix: 85,
      artiste: 'Alex Durand',
      image: 'rock'
    },
    {
      id: 2,
      lieu: 'Zénith Lille',
      date: '2026-06-20',
      heure: '21:00',
      genre: 'Pop',
      description: 'Soirée pop inoubliable avec une ambiance festive garantie',
      popularite: 88,
      places: 3000,
      placesDisponibles: 600,
      prix: 65,
      artiste: 'Emma Smith',
      image: 'pop'
    },
    {
      id: 3,
      lieu: 'Stade de France',
      date: '2026-07-10',
      heure: '19:00',
      genre: 'Électro',
      description: 'Festival électro géant avec les plus grands DJ du moment',
      popularite: 92,
      places: 50000,
      placesDisponibles: 5000,
      prix: 120,
      artiste: 'Hans Weber',
      image: 'electro'
    },
  ];

  const myTickets = [
    { id: 1, concert: concerts[0], dateAchat: '2026-03-15', statut: 'Confirmé' },
  ];

  const getGenreColor = (genre: string) => {
    switch (genre) {
      case 'Rock': return 'bg-red-100 text-red-800';
      case 'Pop': return 'bg-pink-100 text-pink-800';
      case 'Électro': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getGenreGradient = (genre: string) => {
    switch (genre) {
      case 'Rock': return 'from-red-500 to-orange-600';
      case 'Pop': return 'from-pink-500 to-purple-600';
      case 'Électro': return 'from-blue-500 to-cyan-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Music className="w-8 h-8" />
              <div>
                <h1 className="text-2xl font-bold">Concert Manager</h1>
                <p className="text-sm text-blue-100">Découvrez les meilleurs concerts</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveView('concerts')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeView === 'concerts' ? 'bg-white text-blue-600' : 'hover:bg-blue-700'
                }`}
              >
                Concerts
              </button>
              <button
                onClick={() => setActiveView('myTickets')}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                  activeView === 'myTickets' ? 'bg-white text-blue-600' : 'hover:bg-blue-700'
                }`}
              >
                <Ticket className="w-4 h-4" />
                Mes Tickets
              </button>
              <button
                onClick={() => setActiveView('profile')}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                  activeView === 'profile' ? 'bg-white text-blue-600' : 'hover:bg-blue-700'
                }`}
              >
                <User className="w-4 h-4" />
                Profil
              </button>
              <button
                onClick={onLogout}
                className="px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeView === 'concerts' && (
          <div>
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher par artiste, lieu ou genre..."
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-3 mb-8 flex-wrap">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Tous
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors border border-gray-300">
                Rock
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors border border-gray-300">
                Pop
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors border border-gray-300">
                Électro
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors border border-gray-300">
                Jazz
              </button>
            </div>

            {/* Concerts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {concerts.map(concert => (
                <div
                  key={concert.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedConcert(concert.id)}
                >
                  {/* Concert Image Placeholder */}
                  <div className={`h-48 bg-gradient-to-br ${getGenreGradient(concert.genre)} flex items-center justify-center`}>
                    <Music className="w-16 h-16 text-white opacity-50" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{concert.lieu}</h3>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getGenreColor(concert.genre)}`}>
                        {concert.genre}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <User className="w-4 h-4" />
                        <span className="text-sm">{concert.artiste}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{concert.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{concert.heure}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{concert.lieu}</span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{concert.description}</p>

                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-4 h-4 text-orange-500" />
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full"
                          style={{ width: `${concert.popularite}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-600">{concert.popularite}% populaire</span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-sm text-gray-600">À partir de</div>
                        <div className="text-2xl font-bold text-gray-900">{concert.prix}€</div>
                      </div>
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                        Réserver
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-3 text-sm text-gray-500">
                      {concert.placesDisponibles} places disponibles sur {concert.places}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === 'myTickets' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Mes Tickets</h2>

            {myTickets.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <Ticket className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun ticket</h3>
                <p className="text-gray-600 mb-6">Vous n'avez pas encore acheté de tickets</p>
                <button
                  onClick={() => setActiveView('concerts')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Découvrir les concerts
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {myTickets.map(ticket => (
                  <div key={ticket.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className={`w-full md:w-48 h-48 bg-gradient-to-br ${getGenreGradient(ticket.concert.genre)} flex items-center justify-center`}>
                        <Music className="w-16 h-16 text-white opacity-50" />
                      </div>

                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{ticket.concert.lieu}</h3>
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getGenreColor(ticket.concert.genre)}`}>
                              {ticket.concert.genre}
                            </span>
                          </div>
                          <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800">
                            {ticket.statut}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <User className="w-4 h-4" />
                            <span className="text-sm">{ticket.concert.artiste}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{ticket.concert.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{ticket.concert.heure}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{ticket.concert.lieu}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div>
                            <div className="text-sm text-gray-600">Acheté le {ticket.dateAchat}</div>
                            <div className="text-xl font-bold text-gray-900">{ticket.concert.prix}€</div>
                          </div>
                          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Télécharger le ticket
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeView === 'profile' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Mon Profil</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Info */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Marie Dupont</h3>
                    <p className="text-gray-600">marie.dupont@email.com</p>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <div>
                      <div className="text-sm text-gray-600">Âge</div>
                      <div className="font-semibold text-gray-900">28 ans</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Genre</div>
                      <div className="font-semibold text-gray-900">Féminin</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Membre depuis</div>
                      <div className="font-semibold text-gray-900">Janvier 2025</div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Modifier le profil
                  </button>
                </div>
              </div>

              {/* Statistics */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Statistiques</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                      <Ticket className="w-8 h-8 mb-4 opacity-75" />
                      <div className="text-3xl font-bold mb-1">{myTickets.length}</div>
                      <div className="text-blue-100">Tickets achetés</div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                      <Star className="w-8 h-8 mb-4 opacity-75" />
                      <div className="text-3xl font-bold mb-1">3</div>
                      <div className="text-purple-100">Concerts favoris</div>
                    </div>

                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                      <Music className="w-8 h-8 mb-4 opacity-75" />
                      <div className="text-3xl font-bold mb-1">5</div>
                      <div className="text-green-100">Genres préférés</div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Méthode de paiement</h3>

                  <div className="border-2 border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">Compte bancaire</div>
                        <div className="text-sm text-gray-600">FR76****1234</div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700">
                        Modifier
                      </button>
                    </div>
                  </div>

                  <button className="mt-4 text-blue-600 hover:text-blue-700 font-semibold">
                    + Ajouter une méthode de paiement
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

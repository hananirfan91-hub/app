import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Search, Filter, RefreshCw, Eye, FileText,
  Package, Clock, CheckCircle, AlertCircle,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useAuth } from '@/contexts/AuthContext';
import { collection, query, orderBy, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  timestamp: any;
  status: 'new' | 'contacted' | 'in-progress' | 'completed' | 'cancelled';
  adminNotes?: string;
  isUrgent?: boolean;
}

const statusColors: Record<string, string> = {
  'new': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'contacted': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'in-progress': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'completed': 'bg-green-500/20 text-green-400 border-green-500/30',
  'cancelled': 'bg-red-500/20 text-red-400 border-red-500/30',
};

const statusLabels: Record<string, string> = {
  'new': 'New',
  'contacted': 'Contacted',
  'in-progress': 'In Progress',
  'completed': 'Completed',
  'cancelled': 'Cancelled',
};

export default function AdminOrders() {
  const navigate = useNavigate();
  const { user, isAdmin } = useAuth();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [notes, setNotes] = useState('');
  const itemsPerPage = 20;

  // Redirect if not admin
  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (!isAdmin) {
      navigate('/dashboard');
      return;
    }
  }, [user, isAdmin, navigate]);

  const fetchContacts = async () => {
    setIsLoading(true);
    try {
      const q = query(collection(db, 'contacts'), orderBy('timestamp', 'desc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Contact[];
      setContacts(data);
      setFilteredContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      fetchContacts();
    }
  }, [isAdmin]);

  useEffect(() => {
    let filtered = contacts;

    if (searchQuery) {
      filtered = filtered.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.service.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(c => c.status === statusFilter);
    }

    setFilteredContacts(filtered);
    setCurrentPage(1);
  }, [searchQuery, statusFilter, contacts]);

  const handleUpdateStatus = async (contactId: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, 'contacts', contactId), {
        status: newStatus,
        adminNotes: notes,
      });
      
      setContacts(prev => prev.map(c => 
        c.id === contactId ? { ...c, status: newStatus as any, adminNotes: notes } : c
      ));
      
      setIsModalOpen(false);
      setSelectedContact(null);
      setNotes('');
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const openContactModal = (contact: Contact) => {
    setSelectedContact(contact);
    setNotes(contact.adminNotes || '');
    setIsModalOpen(true);
  };

  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const paginatedContacts = filteredContacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const stats = {
    total: contacts.length,
    new: contacts.filter(c => c.status === 'new').length,
    inProgress: contacts.filter(c => c.status === 'in-progress').length,
    completed: contacts.filter(c => c.status === 'completed').length,
    urgent: contacts.filter(c => c.isUrgent).length,
  };

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-[#0b0b12]">
      {/* Header */}
      <header className="bg-[#15151f] border-b border-[#2b2b3a]">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/dashboard')}
                className="text-[#b0b0c8] hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <div>
                <h1 className="text-xl font-bold text-white">Order Management</h1>
                <div className="flex items-center gap-2">
                  <Badge className="bg-[#6c5dd3]/20 text-[#b2a5ff] border-[#6c5dd3]/30">
                    Admin Panel
                  </Badge>
                </div>
              </div>
            </div>
            <Button
              onClick={fetchContacts}
              variant="outline"
              className="border-[#2b2b3a] text-white hover:bg-[#2b2b3a]"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
          </div>
        </div>
      </header>

      <main className="p-4 sm:p-6 lg:p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <div className="p-4 bg-[#15151f] border border-[#2b2b3a] rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <Package className="w-5 h-5 text-[#6c5dd3]" />
              <span className="text-sm text-[#b0b0c8]">Total</span>
            </div>
            <p className="text-2xl font-bold text-white">{stats.total}</p>
          </div>
          <div className="p-4 bg-[#15151f] border border-[#2b2b3a] rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-[#b0b0c8]">New</span>
            </div>
            <p className="text-2xl font-bold text-white">{stats.new}</p>
          </div>
          <div className="p-4 bg-[#15151f] border border-[#2b2b3a] rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-[#b0b0c8]">In Progress</span>
            </div>
            <p className="text-2xl font-bold text-white">{stats.inProgress}</p>
          </div>
          <div className="p-4 bg-[#15151f] border border-[#2b2b3a] rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm text-[#b0b0c8]">Completed</span>
            </div>
            <p className="text-2xl font-bold text-white">{stats.completed}</p>
          </div>
          <div className="p-4 bg-[#15151f] border border-[#2b2b3a] rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <span className="text-sm text-[#b0b0c8]">Urgent</span>
            </div>
            <p className="text-2xl font-bold text-white">{stats.urgent}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" />
            <Input
              placeholder="Search by name, email, or service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-[#15151f] border-[#2b2b3a] text-white placeholder:text-[#666]"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48 bg-[#15151f] border-[#2b2b3a] text-white">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="bg-[#15151f] border-[#2b2b3a]">
              <SelectItem value="all" className="text-white">All Status</SelectItem>
              <SelectItem value="new" className="text-white">New</SelectItem>
              <SelectItem value="contacted" className="text-white">Contacted</SelectItem>
              <SelectItem value="in-progress" className="text-white">In Progress</SelectItem>
              <SelectItem value="completed" className="text-white">Completed</SelectItem>
              <SelectItem value="cancelled" className="text-white">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="bg-[#15151f] border border-[#2b2b3a] rounded-xl overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-[#b0b0c8]">Loading...</div>
          ) : paginatedContacts.length === 0 ? (
            <div className="p-8 text-center text-[#b0b0c8]">No orders found</div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#0b0b12] border-b border-[#2b2b3a]">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[#b0b0c8]">Date</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[#b0b0c8]">Name</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[#b0b0c8]">Email</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[#b0b0c8]">Service</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[#b0b0c8]">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[#b0b0c8]">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2b2b3a]">
                    {paginatedContacts.map((contact) => (
                      <tr key={contact.id} className="hover:bg-[#0b0b12]/50">
                        <td className="px-4 py-3 text-sm text-[#b0b0c8]">
                          {contact.timestamp?.toDate?.() 
                            ? contact.timestamp.toDate().toLocaleDateString() 
                            : 'N/A'}
                        </td>
                        <td className="px-4 py-3 text-sm text-white">{contact.name}</td>
                        <td className="px-4 py-3 text-sm text-[#b0b0c8]">{contact.email}</td>
                        <td className="px-4 py-3 text-sm text-[#b0b0c8]">{contact.service}</td>
                        <td className="px-4 py-3">
                          <Badge className={`${statusColors[contact.status]} border`}>
                            {statusLabels[contact.status]}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => openContactModal(contact)}
                            className="text-[#6c5dd3] hover:text-[#b2a5ff] hover:bg-[#6c5dd3]/10"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between px-4 py-3 border-t border-[#2b2b3a]">
                  <p className="text-sm text-[#b0b0c8]">
                    Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
                    {Math.min(currentPage * itemsPerPage, filteredContacts.length)} of{' '}
                    {filteredContacts.length} results
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="border-[#2b2b3a] text-white hover:bg-[#2b2b3a] disabled:opacity-50"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="border-[#2b2b3a] text-white hover:bg-[#2b2b3a] disabled:opacity-50"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Contact Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg bg-[#15151f] border-[#2b2b3a] text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Contact Details</DialogTitle>
          </DialogHeader>
          
          {selectedContact && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-[#b0b0c8]">Name</p>
                  <p className="text-white font-medium">{selectedContact.name}</p>
                </div>
                <div>
                  <p className="text-sm text-[#b0b0c8]">Date</p>
                  <p className="text-white font-medium">
                    {selectedContact.timestamp?.toDate?.() 
                      ? selectedContact.timestamp.toDate().toLocaleString() 
                      : 'N/A'}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-[#b0b0c8]">Email</p>
                <a href={`mailto:${selectedContact.email}`} className="text-[#6c5dd3] hover:text-[#b2a5ff]">
                  {selectedContact.email}
                </a>
              </div>

              {selectedContact.phone && (
                <div>
                  <p className="text-sm text-[#b0b0c8]">Phone</p>
                  <a href={`tel:${selectedContact.phone}`} className="text-[#6c5dd3] hover:text-[#b2a5ff]">
                    {selectedContact.phone}
                  </a>
                </div>
              )}

              <div>
                <p className="text-sm text-[#b0b0c8]">Service</p>
                <p className="text-white font-medium">{selectedContact.service}</p>
              </div>

              <div>
                <p className="text-sm text-[#b0b0c8]">Message</p>
                <p className="text-white bg-[#0b0b12] p-3 rounded-lg">{selectedContact.message}</p>
              </div>

              <div>
                <p className="text-sm text-[#b0b0c8] mb-2">Update Status</p>
                <Select
                  value={selectedContact.status}
                  onValueChange={(value) => handleUpdateStatus(selectedContact.id, value)}
                >
                  <SelectTrigger className="bg-[#0b0b12] border-[#2b2b3a] text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0b0b12] border-[#2b2b3a]">
                    <SelectItem value="new" className="text-white">New</SelectItem>
                    <SelectItem value="contacted" className="text-white">Contacted</SelectItem>
                    <SelectItem value="in-progress" className="text-white">In Progress</SelectItem>
                    <SelectItem value="completed" className="text-white">Completed</SelectItem>
                    <SelectItem value="cancelled" className="text-white">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <p className="text-sm text-[#b0b0c8] mb-2">Admin Notes</p>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add notes about this contact..."
                  className="w-full p-3 bg-[#0b0b12] border border-[#2b2b3a] rounded-lg text-white placeholder:text-[#666] focus:border-[#6c5dd3] focus:outline-none resize-none"
                  rows={3}
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

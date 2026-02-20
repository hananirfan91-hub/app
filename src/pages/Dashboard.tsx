import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  LayoutDashboard, Briefcase, User, Settings, HelpCircle, LogOut,
  Palette, Code, Search, FileText, Video, Image, PenTool, BookOpen,
  Monitor, MessageCircle, Mail, Bell, Shield, Camera,
  Edit2, Save, Phone, FileText as FileIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '@/contexts/AuthContext';
import SEO from '@/components/SEO';
import gsap from 'gsap';

const services = [
  { icon: Palette, title: 'Graphic Design', description: 'Logos, banners, social media posts' },
  { icon: Code, title: 'Web Development', description: 'Responsive websites & web apps' },
  { icon: Search, title: 'SEO Services', description: 'Boost your online visibility' },
  { icon: FileText, title: 'Word/PPT/Excel', description: 'Professional documents' },
  { icon: Monitor, title: 'Presentations', description: 'Stunning slide decks' },
  { icon: Video, title: 'Video Editing', description: 'Professional video production' },
  { icon: Image, title: 'Thumbnails', description: 'Click-worthy YouTube thumbnails' },
  { icon: PenTool, title: 'Content Writing', description: 'Blog posts & articles' },
];

const supportFaqs = [
  {
    question: 'How do I place an order?',
    answer: 'You can place an order by contacting us through WhatsApp, email, or the contact form on our website.',
  },
  {
    question: 'What is the typical turnaround time?',
    answer: 'Most projects are completed within 24-72 hours depending on complexity.',
  },
  {
    question: 'How do I track my order?',
    answer: 'We provide regular updates via your preferred communication channel.',
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, userData, logout, updateUserProfile, uploadAvatar, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    displayName: userData?.displayName || '',
    phoneNumber: userData?.phoneNumber || '',
    company: userData?.company || '',
  });
  const [notifications, setNotifications] = useState({
    email: localStorage.getItem('notifyEmail') === 'true',
    sms: localStorage.getItem('notifySMS') === 'true',
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.animate-in'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, [user, navigate]);

  useEffect(() => {
    setProfileData({
      displayName: userData?.displayName || '',
      phoneNumber: userData?.phoneNumber || '',
      company: userData?.company || '',
    });
  }, [userData]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleSaveProfile = async () => {
    await updateUserProfile({
      displayName: profileData.displayName,
      phoneNumber: profileData.phoneNumber,
      company: profileData.company,
    });
    setIsEditing(false);
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result as string;
        await uploadAvatar(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNotificationChange = (type: 'email' | 'sms', checked: boolean) => {
    const newNotifications = { ...notifications, [type]: checked };
    setNotifications(newNotifications);
    localStorage.setItem(`notify${type.toUpperCase()}`, checked.toString());
  };

  if (!user) return null;

  return (
    <>
      <SEO 
        title="Dashboard - My Account"
        description="Access your Hanan Irfan Digital Group dashboard. View services, manage your profile, and track your orders."
        keywords="user dashboard, client portal, account management, order tracking, profile settings"
        canonical="https://hidigitalgroup.vercel.app/dashboard"
      />
      
      <div ref={sectionRef} className="min-h-screen bg-[#0b0b12]">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 bg-[#15151f] border-r border-[#2b2b3a] lg:min-h-screen">
            {/* Profile Summary */}
            <div className="p-4 sm:p-6 border-b border-[#2b2b3a]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#6c5dd3]">
                    <AvatarImage src={userData?.avatar} />
                    <AvatarFallback className="bg-[#6c5dd3] text-white text-sm sm:text-base">
                      {userData?.displayName?.charAt(0) || user.email?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <button
                    onClick={handleAvatarClick}
                    className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#6c5dd3] rounded-full flex items-center justify-center hover:bg-[#5a4dc0] transition-colors"
                  >
                    <Camera className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm sm:text-base truncate">{userData?.displayName}</p>
                  <p className="text-xs sm:text-sm text-[#b0b0c8] truncate">{user.email}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="p-3 sm:p-4 space-y-1">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-left transition-colors text-sm sm:text-base ${
                  activeTab === 'overview'
                    ? 'bg-[#6c5dd3] text-white'
                    : 'text-[#b0b0c8] hover:bg-[#2b2b3a] hover:text-white'
                }`}
              >
                <LayoutDashboard className="w-4 h-4 sm:w-5 sm:h-5" />
                Overview
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-left transition-colors text-sm sm:text-base ${
                  activeTab === 'services'
                    ? 'bg-[#6c5dd3] text-white'
                    : 'text-[#b0b0c8] hover:bg-[#2b2b3a] hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                Our Services
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-left transition-colors text-sm sm:text-base ${
                  activeTab === 'orders'
                    ? 'bg-[#6c5dd3] text-white'
                    : 'text-[#b0b0c8] hover:bg-[#2b2b3a] hover:text-white'
                }`}
              >
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                Orders
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-left transition-colors text-sm sm:text-base ${
                  activeTab === 'profile'
                    ? 'bg-[#6c5dd3] text-white'
                    : 'text-[#b0b0c8] hover:bg-[#2b2b3a] hover:text-white'
                }`}
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
                Profile
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-left transition-colors text-sm sm:text-base ${
                  activeTab === 'settings'
                    ? 'bg-[#6c5dd3] text-white'
                    : 'text-[#b0b0c8] hover:bg-[#2b2b3a] hover:text-white'
                }`}
              >
                <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
                Settings
              </button>
              <button
                onClick={() => setActiveTab('support')}
                className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-left transition-colors text-sm sm:text-base ${
                  activeTab === 'support'
                    ? 'bg-[#6c5dd3] text-white'
                    : 'text-[#b0b0c8] hover:bg-[#2b2b3a] hover:text-white'
                }`}
              >
                <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Support
              </button>

              <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-[#2b2b3a]">
                {isAdmin && (
                  <Link
                    to="/admin/orders"
                    className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-left text-[#b2a5ff] hover:bg-[#6c5dd3]/20 transition-colors mb-1 text-sm sm:text-base"
                  >
                    <FileIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    Admin Panel
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-left text-red-400 hover:bg-red-500/10 transition-colors text-sm sm:text-base"
                >
                  <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
                  Logout
                </button>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6 sm:space-y-8">
                <div className="animate-in">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                    Welcome back, {userData?.displayName?.split(' ')[0]}!
                  </h1>
                  <p className="text-[#b0b0c8] text-sm sm:text-base">
                    Here&apos;s what&apos;s happening with your account.
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="animate-in grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Link to="/services">
                    <div className="p-4 sm:p-6 bg-[#15151f] border border-[#2b2b3a] rounded-xl sm:rounded-2xl hover:border-[#6c5dd3] transition-colors group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#6c5dd3]/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#6c5dd3]/30 transition-colors">
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-[#b2a5ff]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Explore Services</h3>
                      <p className="text-xs sm:text-sm text-[#b0b0c8]">Browse our full range of digital services</p>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div className="p-4 sm:p-6 bg-[#15151f] border border-[#2b2b3a] rounded-xl sm:rounded-2xl hover:border-[#6c5dd3] transition-colors group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#6c5dd3]/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#6c5dd3]/30 transition-colors">
                        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#b2a5ff]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Contact Us</h3>
                      <p className="text-xs sm:text-sm text-[#b0b0c8]">Get in touch for your next project</p>
                    </div>
                  </Link>
                </div>

                {/* Popular Services */}
                <div className="animate-in">
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Popular Services</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {services.slice(0, 4).map((service) => (
                      <Link key={service.title} to="/services">
                        <div className="p-3 sm:p-4 bg-[#15151f] border border-[#2b2b3a] rounded-xl hover:border-[#6c5dd3]/50 transition-colors">
                          <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#b2a5ff] mb-2 sm:mb-3" />
                          <h4 className="text-white font-medium text-sm mb-0.5 sm:mb-1">{service.title}</h4>
                          <p className="text-[10px] sm:text-xs text-[#b0b0c8]">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Need Help */}
                <div className="animate-in p-4 sm:p-6 bg-gradient-to-br from-[#6c5dd3]/20 to-[#ff9ec7]/10 border border-[#6c5dd3]/30 rounded-xl sm:rounded-2xl">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Need help?</h3>
                  <p className="text-[#b0b0c8] text-sm mb-3 sm:mb-4">
                    Our team is here to assist you with any questions or concerns.
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <a href="https://wa.me/923106359235" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full text-xs sm:text-sm">
                        <MessageCircle className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        WhatsApp
                      </Button>
                    </a>
                    <a href="mailto:hananirfan91@gmail.com">
                      <Button size="sm" variant="outline" className="border-[#2b2b3a] text-white hover:bg-[#2b2b3a] rounded-full text-xs sm:text-sm">
                        <Mail className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        Email
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="space-y-4 sm:space-y-6">
                <div className="animate-in">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Our Services</h2>
                  <p className="text-[#b0b0c8] text-sm sm:text-base">Explore our comprehensive range of digital solutions.</p>
                </div>

                <div className="animate-in grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {services.map((service) => (
                    <Link key={service.title} to="/services">
                      <div className="p-4 sm:p-5 bg-[#15151f] border border-[#2b2b3a] rounded-xl hover:border-[#6c5dd3] transition-colors group">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#6c5dd3]/20 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-[#6c5dd3]/30 transition-colors">
                          <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#b2a5ff]" />
                        </div>
                        <h4 className="text-white font-medium text-sm sm:text-base mb-1">{service.title}</h4>
                        <p className="text-[10px] sm:text-xs text-[#b0b0c8]">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-4 sm:space-y-6">
                <div className="animate-in">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Your Orders</h2>
                  <p className="text-[#b0b0c8] text-sm sm:text-base">Track and manage your project orders.</p>
                </div>

                <div className="animate-in p-6 sm:p-8 bg-[#15151f] border border-[#2b2b3a] rounded-xl sm:rounded-2xl text-center">
                  <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-[#6c5dd3] mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">No orders yet</h3>
                  <p className="text-[#b0b0c8] text-sm mb-4 sm:mb-6 max-w-md mx-auto">
                    Ready to start a project? Contact us to place your first order and we&apos;ll track it here.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-[#6c5dd3] hover:bg-[#5a4dc0] text-white rounded-full text-sm sm:text-base">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-4 sm:space-y-6">
                <div className="animate-in flex items-center justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Your Profile</h2>
                    <p className="text-[#b0b0c8] text-sm sm:text-base">Manage your personal information.</p>
                  </div>
                  <Button
                    onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                    className="bg-[#6c5dd3] hover:bg-[#5a4dc0] text-white rounded-full text-xs sm:text-sm"
                  >
                    {isEditing ? (
                      <>
                        <Save className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        Save
                      </>
                    ) : (
                      <>
                        <Edit2 className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        Edit
                      </>
                    )}
                  </Button>
                </div>

                <div className="animate-in p-4 sm:p-6 bg-[#15151f] border border-[#2b2b3a] rounded-xl sm:rounded-2xl space-y-4 sm:space-y-5">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <Avatar className="w-14 h-14 sm:w-20 sm:h-20 border-2 border-[#6c5dd3]">
                      <AvatarImage src={userData?.avatar} />
                      <AvatarFallback className="bg-[#6c5dd3] text-white text-lg sm:text-2xl">
                        {userData?.displayName?.charAt(0) || user.email?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-medium text-sm sm:text-base">Profile Picture</p>
                      <p className="text-xs sm:text-sm text-[#b0b0c8]">Click the camera icon in sidebar to update</p>
                    </div>
                  </div>

                  <div>
                    <Label className="text-[#b0b0c8] mb-1.5 sm:mb-2 block text-sm">Full Name</Label>
                    <Input
                      value={profileData.displayName}
                      onChange={(e) => setProfileData({ ...profileData, displayName: e.target.value })}
                      disabled={!isEditing}
                      className="bg-[#0b0b12] border-[#2b2b3a] text-white disabled:opacity-50 text-sm"
                    />
                  </div>

                  <div>
                    <Label className="text-[#b0b0c8] mb-1.5 sm:mb-2 block text-sm">Email</Label>
                    <Input
                      value={user.email || ''}
                      disabled
                      className="bg-[#0b0b12] border-[#2b2b3a] text-white opacity-50 text-sm"
                    />
                  </div>

                  <div>
                    <Label className="text-[#b0b0c8] mb-1.5 sm:mb-2 block text-sm">Phone Number</Label>
                    <Input
                      value={profileData.phoneNumber}
                      onChange={(e) => setProfileData({ ...profileData, phoneNumber: e.target.value })}
                      disabled={!isEditing}
                      className="bg-[#0b0b12] border-[#2b2b3a] text-white disabled:opacity-50 text-sm"
                    />
                  </div>

                  <div>
                    <Label className="text-[#b0b0c8] mb-1.5 sm:mb-2 block text-sm">Company (Optional)</Label>
                    <Input
                      value={profileData.company}
                      onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
                      disabled={!isEditing}
                      placeholder="Your company name"
                      className="bg-[#0b0b12] border-[#2b2b3a] text-white disabled:opacity-50 placeholder:text-[#666] text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-4 sm:space-y-6">
                <div className="animate-in">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Settings</h2>
                  <p className="text-[#b0b0c8] text-sm sm:text-base">Manage your account preferences.</p>
                </div>

                <div className="animate-in p-4 sm:p-6 bg-[#15151f] border border-[#2b2b3a] rounded-xl sm:rounded-2xl space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Notifications</h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#b2a5ff]" />
                          <div>
                            <p className="text-white text-sm sm:text-base">Email Notifications</p>
                            <p className="text-xs sm:text-sm text-[#b0b0c8]">Receive updates via email</p>
                          </div>
                        </div>
                        <Switch
                          checked={notifications.email}
                          onCheckedChange={(checked) => handleNotificationChange('email', checked)}
                          className="data-[state=checked]:bg-[#6c5dd3]"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#b2a5ff]" />
                          <div>
                            <p className="text-white text-sm sm:text-base">SMS Notifications</p>
                            <p className="text-xs sm:text-sm text-[#b0b0c8]">Receive updates via SMS</p>
                          </div>
                        </div>
                        <Switch
                          checked={notifications.sms}
                          onCheckedChange={(checked) => handleNotificationChange('sms', checked)}
                          className="data-[state=checked]:bg-[#6c5dd3]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6 border-t border-[#2b2b3a]">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Security</h3>
                    <Link to="/forgot-password">
                      <Button variant="outline" className="border-[#2b2b3a] text-white hover:bg-[#2b2b3a] text-sm">
                        <Shield className="mr-2 h-4 w-4" />
                        Change Password
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Support Tab */}
            {activeTab === 'support' && (
              <div className="space-y-4 sm:space-y-6">
                <div className="animate-in">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Support</h2>
                  <p className="text-[#b0b0c8] text-sm sm:text-base">Get help and find answers to common questions.</p>
                </div>

                <div className="animate-in grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <a href="https://wa.me/923106359235" target="_blank" rel="noopener noreferrer">
                    <div className="p-4 sm:p-5 bg-[#15151f] border border-[#2b2b3a] rounded-xl hover:border-[#6c5dd3] transition-colors text-center">
                      <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#25D366] mx-auto mb-2 sm:mb-3" />
                      <h4 className="text-white font-medium text-sm sm:text-base">WhatsApp</h4>
                      <p className="text-[10px] sm:text-xs text-[#b0b0c8]">Quick response</p>
                    </div>
                  </a>
                  <a href="mailto:hananirfan91@gmail.com">
                    <div className="p-4 sm:p-5 bg-[#15151f] border border-[#2b2b3a] rounded-xl hover:border-[#6c5dd3] transition-colors text-center">
                      <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#6c5dd3] mx-auto mb-2 sm:mb-3" />
                      <h4 className="text-white font-medium text-sm sm:text-base">Email</h4>
                      <p className="text-[10px] sm:text-xs text-[#b0b0c8]">24h response</p>
                    </div>
                  </a>
                  <a href="tel:+923106359235">
                    <div className="p-4 sm:p-5 bg-[#15151f] border border-[#2b2b3a] rounded-xl hover:border-[#6c5dd3] transition-colors text-center">
                      <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#b2a5ff] mx-auto mb-2 sm:mb-3" />
                      <h4 className="text-white font-medium text-sm sm:text-base">Phone</h4>
                      <p className="text-[10px] sm:text-xs text-[#b0b0c8]">Mon-Sat 9am-11pm</p>
                    </div>
                  </a>
                </div>

                <div className="animate-in">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {supportFaqs.map((faq, index) => (
                      <div key={index} className="p-3 sm:p-4 bg-[#15151f] border border-[#2b2b3a] rounded-xl">
                        <h4 className="text-white font-medium text-sm sm:text-base mb-1">{faq.question}</h4>
                        <p className="text-xs sm:text-sm text-[#b0b0c8]">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

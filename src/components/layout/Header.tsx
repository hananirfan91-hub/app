import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, LayoutDashboard, FileText } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, userData, logout, isAdmin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0b12]/90 backdrop-blur-lg border-b border-[#2b2b3a]'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-bold text-white">
              Hanan Irfan <span className="text-[#6c5dd3]">Digital</span>
            </span>
            <span className="hidden sm:inline-block text-xs text-[#b2a5ff] bg-[#6c5dd3]/20 px-2 py-1 rounded-full">
              solve & deliver
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  isActive(item.href)
                    ? 'text-white bg-[#6c5dd3]/20'
                    : 'text-[#b0b0c8] hover:text-white hover:bg-[#2b2b3a]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons / User Menu */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 border-2 border-[#6c5dd3]">
                      <AvatarImage src={userData?.avatar} alt={userData?.displayName || ''} />
                      <AvatarFallback className="bg-[#6c5dd3] text-white">
                        {userData?.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-[#15151f] border-[#2b2b3a]" align="end">
                  <div className="flex items-center gap-2 p-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={userData?.avatar} />
                      <AvatarFallback className="bg-[#6c5dd3] text-white text-xs">
                        {userData?.displayName?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">{userData?.displayName}</span>
                      <span className="text-xs text-[#b0b0c8] truncate max-w-[150px]">{user.email}</span>
                    </div>
                  </div>
                  <DropdownMenuSeparator className="bg-[#2b2b3a]" />
                  <DropdownMenuItem onClick={() => navigate('/dashboard')} className="text-[#b0b0c8] focus:text-white focus:bg-[#2b2b3a] cursor-pointer">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/dashboard?tab=profile')} className="text-[#b0b0c8] focus:text-white focus:bg-[#2b2b3a] cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  {isAdmin && (
                    <DropdownMenuItem onClick={() => navigate('/admin/orders')} className="text-[#b2a5ff] focus:text-[#b2a5ff] focus:bg-[#2b2b3a] cursor-pointer">
                      <FileText className="mr-2 h-4 w-4" />
                      For Order
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator className="bg-[#2b2b3a]" />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-400 focus:text-red-400 focus:bg-[#2b2b3a] cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-[#b0b0c8] hover:text-white hover:bg-[#2b2b3a]">
                    Login
                  </Button>
                </Link>
                <Link to="/login?tab=signup">
                  <Button className="bg-[#6c5dd3] hover:bg-[#5a4dc0] text-white rounded-full px-6">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#15151f] border-t border-[#2b2b3a] py-4">
            <nav className="flex flex-col gap-2 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                    isActive(item.href)
                      ? 'text-white bg-[#6c5dd3]/20'
                      : 'text-[#b0b0c8] hover:text-white hover:bg-[#2b2b3a]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-[#2b2b3a] px-4 flex flex-col gap-2">
              {user ? (
                <>
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar className="h-10 w-10 border-2 border-[#6c5dd3]">
                      <AvatarImage src={userData?.avatar} />
                      <AvatarFallback className="bg-[#6c5dd3] text-white">
                        {userData?.displayName?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-medium">{userData?.displayName}</p>
                      <p className="text-xs text-[#b0b0c8]">{user.email}</p>
                    </div>
                  </div>
                  <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full border-[#2b2b3a] text-white">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </Button>
                  </Link>
                  {isAdmin && (
                    <Link to="/admin/orders" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full border-[#6c5dd3] text-[#b2a5ff]">
                        <FileText className="mr-2 h-4 w-4" />
                        For Order
                      </Button>
                    </Link>
                  )}
                  <Button onClick={handleLogout} variant="destructive" className="w-full">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full border-[#2b2b3a] text-white">
                      Login
                    </Button>
                  </Link>
                  <Link to="/login?tab=signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-[#6c5dd3] hover:bg-[#5a4dc0] text-white">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

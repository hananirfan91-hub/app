import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';

export default function Login() {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get('tab') === 'signup' ? 'signup' : 'login';
  const navigate = useNavigate();
  const { login, signup, user } = useAuth();
  
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Login form
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  
  // Signup form
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  
  const [passwordStrength, setPasswordStrength] = useState<'weak' | 'medium' | 'strong' | ''>('');

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const checkPasswordStrength = (password: string) => {
    if (password.length < 6) return '';
    if (password.length < 8) return 'weak';
    if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.length >= 10) {
      return 'strong';
    }
    return 'medium';
  };

  const handlePasswordChange = (password: string) => {
    setSignupData({ ...signupData, password });
    setPasswordStrength(checkPasswordStrength(password));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(loginData.email, loginData.password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to login. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (signupData.password !== signupData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (signupData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    if (!signupData.agreeTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }

    setIsLoading(true);

    try {
      await signup(signupData.email, signupData.password, signupData.name, signupData.phone);
      setSuccess('Account created successfully! Redirecting...');
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (err: any) {
      setError(err.message || 'Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b12] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <span className="text-2xl font-bold text-white">
              Hanan Irfan <span className="text-[#6c5dd3]">Digital</span>
            </span>
          </Link>
          <p className="mt-2 text-[#b0b0c8]">Sign in to access your dashboard</p>
        </div>

        {/* Auth Card */}
        <div className="bg-[#15151f] border border-[#2b2b3a] rounded-2xl p-6 sm:p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-[#0b0b12] mb-6">
              <TabsTrigger 
                value="login" 
                className="data-[state=active]:bg-[#6c5dd3] data-[state=active]:text-white text-[#b0b0c8]"
              >
                Login
              </TabsTrigger>
              <TabsTrigger 
                value="signup"
                className="data-[state=active]:bg-[#6c5dd3] data-[state=active]:text-white text-[#b0b0c8]"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                {success}
              </div>
            )}

            {/* Login Form */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <Label htmlFor="login-email" className="text-[#b0b0c8] mb-2 block">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="you@example.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      required
                      className="pl-10 bg-[#0b0b12] border-[#2b2b3a] text-white placeholder:text-[#666] focus:border-[#6c5dd3] focus:ring-[#6c5dd3]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="login-password" className="text-[#b0b0c8] mb-2 block">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
                    <Input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required
                      className="pl-10 pr-10 bg-[#0b0b12] border-[#2b2b3a] text-white placeholder:text-[#666] focus:border-[#6c5dd3] focus:ring-[#6c5dd3]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] hover:text-[#b0b0c8]"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="remember"
                      checked={loginData.rememberMe}
                      onCheckedChange={(checked) => setLoginData({ ...loginData, rememberMe: checked as boolean })}
                      className="border-[#2b2b3a] data-[state=checked]:bg-[#6c5dd3] data-[state=checked]:border-[#6c5dd3]"
                    />
                    <Label htmlFor="remember" className="text-sm text-[#b0b0c8] cursor-pointer">
                      Remember me
                    </Label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-[#6c5dd3] hover:text-[#b2a5ff]">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#6c5dd3] hover:bg-[#5a4dc0] text-white rounded-full py-6"
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </TabsContent>

            {/* Signup Form */}
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-5">
                <div>
                  <Label htmlFor="signup-name" className="text-[#b0b0c8] mb-2 block">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="John Doe"
                      value={signupData.name}
                      onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                      required
                      className="pl-10 bg-[#0b0b12] border-[#2b2b3a] text-white placeholder:text-[#666] focus:border-[#6c5dd3] focus:ring-[#6c5dd3]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="signup-email" className="text-[#b0b0c8] mb-2 block">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="you@example.com"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      required
                      className="pl-10 bg-[#0b0b12] border-[#2b2b3a] text-white placeholder:text-[#666] focus:border-[#6c5dd3] focus:ring-[#6c5dd3]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="signup-phone" className="text-[#b0b0c8] mb-2 block">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
                    <Input
                      id="signup-phone"
                      type="tel"
                      placeholder="+92 300 1234567"
                      value={signupData.phone}
                      onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
                      required
                      className="pl-10 bg-[#0b0b12] border-[#2b2b3a] text-white placeholder:text-[#666] focus:border-[#6c5dd3] focus:ring-[#6c5dd3]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="signup-password" className="text-[#b0b0c8] mb-2 block">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
                    <Input
                      id="signup-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={signupData.password}
                      onChange={(e) => handlePasswordChange(e.target.value)}
                      required
                      className="pl-10 pr-10 bg-[#0b0b12] border-[#2b2b3a] text-white placeholder:text-[#666] focus:border-[#6c5dd3] focus:ring-[#6c5dd3]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] hover:text-[#b0b0c8]"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {passwordStrength && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-[#2b2b3a] rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all ${
                            passwordStrength === 'weak'
                              ? 'w-1/3 bg-red-500'
                              : passwordStrength === 'medium'
                              ? 'w-2/3 bg-yellow-500'
                              : 'w-full bg-green-500'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-xs ${
                          passwordStrength === 'weak'
                            ? 'text-red-400'
                            : passwordStrength === 'medium'
                            ? 'text-yellow-400'
                            : 'text-green-400'
                        }`}
                      >
                        {passwordStrength === 'weak' && 'Weak'}
                        {passwordStrength === 'medium' && 'Medium'}
                        {passwordStrength === 'strong' && 'Strong'}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="signup-confirm-password" className="text-[#b0b0c8] mb-2 block">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
                    <Input
                      id="signup-confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={signupData.confirmPassword}
                      onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                      required
                      className="pl-10 pr-10 bg-[#0b0b12] border-[#2b2b3a] text-white placeholder:text-[#666] focus:border-[#6c5dd3] focus:ring-[#6c5dd3]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] hover:text-[#b0b0c8]"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="terms"
                    checked={signupData.agreeTerms}
                    onCheckedChange={(checked) => setSignupData({ ...signupData, agreeTerms: checked as boolean })}
                    className="mt-1 border-[#2b2b3a] data-[state=checked]:bg-[#6c5dd3] data-[state=checked]:border-[#6c5dd3]"
                  />
                  <Label htmlFor="terms" className="text-sm text-[#b0b0c8] cursor-pointer">
                    I agree to the{' '}
                    <Link to="/terms" className="text-[#6c5dd3] hover:text-[#b2a5ff]">
                      Terms & Conditions
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-[#6c5dd3] hover:text-[#b2a5ff]">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#6c5dd3] hover:bg-[#5a4dc0] text-white rounded-full py-6"
                >
                  {isLoading ? 'Creating account...' : 'Create Account'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>

        {/* Back to Home */}
        <p className="mt-6 text-center text-[#b0b0c8]">
          <Link to="/" className="text-[#6c5dd3] hover:text-[#b2a5ff]">
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}

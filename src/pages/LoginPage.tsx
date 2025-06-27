import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Custom Components
import AuthFormContainer from '../components/AuthFormContainer';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const LoginPage = () => {
  console.log('LoginPage loaded');
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Login attempt with:', { email, password });

    // Simulate API call and successful login
    toast.success('Logged in successfully!');

    // Redirect to dashboard after a short delay to allow toast to be seen
    setTimeout(() => {
      navigate('/dashboard'); // Path from App.tsx
    }, 1000);
  };

  const footerContent = (
    <p className="text-sm text-muted-foreground">
      Don&apos;t have an account?{' '}
      <Link to="/sign-up" className="font-semibold text-primary hover:underline">
        Sign Up
      </Link>
    </p>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header isAuthenticated={false} />
      <main className="flex-grow">
        <AuthFormContainer title="Welcome Back" footerContent={footerContent}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password" // Path from App.tsx
                  className="text-sm text-primary hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember-me" />
              <Label htmlFor="remember-me" className="text-sm font-normal text-muted-foreground">
                Remember me
              </Label>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </AuthFormContainer>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
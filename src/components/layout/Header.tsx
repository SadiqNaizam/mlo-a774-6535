import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface HeaderProps {
  isAuthenticated?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated = false }) => {
  console.log('Header loaded');

  const handleLogout = () => {
    // In a real app, this would dispatch a logout action.
    console.log('Logout clicked');
    // For demonstration, we can redirect to the login page.
    window.location.href = '/';
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex-1 flex items-center justify-start">
          <Link to={isAuthenticated ? "/dashboard" : "/"} className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg hidden sm:inline-block">QuickAccess</span>
          </Link>
        </div>

        {isAuthenticated && (
          <div className="flex-1 flex items-center justify-end gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>UA</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
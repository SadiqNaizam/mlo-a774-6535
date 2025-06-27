import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LockKeyhole } from 'lucide-react';

interface AuthFormContainerProps {
  title: string;
  children: React.ReactNode;
  footerContent: React.ReactNode;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({ title, children, footerContent }) => {
  console.log('AuthFormContainer loaded');

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
              <LockKeyhole className="h-6 w-6" />
            </div>
          </div>
          <CardTitle className="text-center text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        <CardFooter className="flex justify-center">
          {footerContent}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthFormContainer;
import React, { useMemo } from 'react';

interface PasswordStrengthIndicatorProps {
  /** The password string to evaluate. */
  password?: string;
}

/**
 * A visual component that provides real-time feedback on password strength.
 */
const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password = '' }) => {
  console.log('PasswordStrengthIndicator loaded');

  const strengthDetails = useMemo(() => {
    if (password.length === 0) {
      return {
        score: 0,
        label: ' ', // Use a space to maintain height
        color: 'text-gray-500',
        barColor: 'bg-gray-200',
      };
    }

    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    // Override score for very short (but non-empty) passwords
    if (password.length < 8) {
      score = Math.min(score, 1);
    }
    
    switch (score) {
      case 1:
        return { score: 1, label: 'Very Weak', color: 'text-red-500', barColor: 'bg-red-500' };
      case 2:
        return { score: 2, label: 'Weak', color: 'text-orange-500', barColor: 'bg-orange-500' };
      case 3:
        return { score: 3, label: 'Medium', color: 'text-yellow-500', barColor: 'bg-yellow-500' };
      case 4:
        return { score: 4, label: 'Strong', color: 'text-lime-500', barColor: 'bg-lime-500' };
      case 5:
        return { score: 5, label: 'Very Strong', color: 'text-green-500', barColor: 'bg-green-500' };
      default:
        return { score: 0, label: ' ', color: 'text-gray-500', barColor: 'bg-gray-200' };
    }
  }, [password]);

  return (
    <div className="w-full h-8" aria-live="polite">
      <div className="flex gap-1.5 w-full" role="meter" aria-valuemin={0} aria-valuemax={5} aria-valuenow={strengthDetails.score}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              strengthDetails.score > index ? strengthDetails.barColor : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
      <p className={`text-xs text-left mt-1 font-medium transition-colors duration-300 ${strengthDetails.color}`}>
        {strengthDetails.label}
      </p>
    </div>
  );
};

export default PasswordStrengthIndicator;
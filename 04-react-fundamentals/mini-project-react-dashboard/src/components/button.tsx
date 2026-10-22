import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'danger' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'danger':
        return '#ef4444';
      case 'secondary':
        return '#64748b';
      default:
        return '#3b82f6';
    }
  };

  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px',
        border: 'none',
        borderRadius: '6px',
        backgroundColor: getBackgroundColor(),
        color: '#ffffff',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '14px',
        marginTop: '8px',
      }}
    >
      {label}
    </button>
  );
};
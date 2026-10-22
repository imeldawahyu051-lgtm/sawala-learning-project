import React from 'react';
import { Button } from './button';

export interface CardItem {
  id: number;
  title: string;
  category: string;
  description: string;
  isCompleted: boolean;
}

interface CardProps {
  item: CardItem;
  onToggleStatus: (id: number) => void;
}

export const Card: React.FC<CardProps> = ({ item, onToggleStatus }) => {
  return (
    <div
      style={{
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '12px',
        backgroundColor: item.isCompleted ? '#f0fdf4' : '#ffffff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, color: '#1e293b' }}>{item.title}</h3>
        <span
          style={{
            fontSize: '12px',
            backgroundColor: '#e2e8f0',
            padding: '2px 8px',
            borderRadius: '4px',
            color: '#475569',
          }}
        >
          {item.category}
        </span>
      </div>
      <p style={{ color: '#64748b', fontSize: '14px', margin: '8px 0' }}>{item.description}</p>
      
      <Button
        label={item.isCompleted ? 'Tandai Pending' : 'Selesai'}
        onClick={() => onToggleStatus(item.id)}
        variant={item.isCompleted ? 'secondary' : 'primary'}
      />
    </div>
  );
};
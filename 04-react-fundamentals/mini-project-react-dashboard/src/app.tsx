import React, { useState, useEffect } from 'react';
import { Card, CardItem } from './components/card';
import { Button } from './components/button';

const initialData: CardItem[] = [
    { id: 1, title: 'Setup React + TypeScript', category: 'Project', description: 'Inisialisasi Vite dengan TypeScript.', isCompleted: true },
    { id: 2, title: 'Membuat Komponen UI', category: 'Components', description: 'Membuat card.tsx dan button.tsx.', isCompleted: true },
    { id: 3, title: 'Kolaborasi di GitHub', category: 'Git', description: 'Melakukan Pull Request dan Code Review.', isCompleted: false },
];

export function App() {
    const [items, setItems] = useState<CardItem[]>([]);
    const [filter, setFilter] = useState<'All' | 'Completed'>('All');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // useEffect: Simulasi fetching data saat pertama kali dimuat
    useEffect(() => {
        const timer = setTimeout(() => {
            setItems(initialData);
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    // Event Handling: Mengubah status item berdasarkan ID
    const handleToggleStatus = (id: number) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
            )
        );
    };

    // Filter data sesuai pilihan tombol
    const filteredItems = items.filter((item) => {
        if (filter === 'Completed') return item.isCompleted;
        return true;
    });

    return (
        <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial, sans-serif', padding: '0 16px' }}>
            <header style={{ marginBottom: '24px', borderBottom: '2px solid #f1f5f9', paddingBottom: '16px' }}>
                <h1 style={{ color: '#0f172a', margin: '0 0 8px 0' }}>Mini Dashboard React</h1>
                <p style={{ color: '#64748b', margin: 0 }}>Project Minggu 7–8: React Fundamentals</p>
            </header>

            {/* Tombol Filter */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                <Button
                    label="Semua"
                    onClick={() => setFilter('All')}
                    variant={filter === 'All' ? 'primary' : 'secondary'}
                />
                <Button
                    label="Selesai"
                    onClick={() => setFilter('Completed')}
                    variant={filter === 'Completed' ? 'primary' : 'secondary'}
                />
            </div>

            {/* Conditional Rendering: Status Loading vs Konten */}
            {isLoading ? (
                <p style={{ color: '#64748b' }}>Sedang memuat data...</p>
            ) : (
                <div>
                    {filteredItems.length === 0 ? (
                        <p style={{ color: '#64748b' }}>Tidak ada data untuk ditampilkan.</p>
                    ) : (
                        /* List Rendering menggunakan .map() */
                        filteredItems.map((item) => (
                            <Card key={item.id} item={item} onToggleStatus={handleToggleStatus} />
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
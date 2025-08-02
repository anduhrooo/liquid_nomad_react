import React, { useRef } from 'react';
import { menu } from '../data/menu_items';

function PackingList() {
    const printRef = useRef();

    const featuredCocktails = menu.cocktails.filter(item =>
        ['Mai Tai', 'Jungle Bird', 'Old Fashioned', 'Whiskey Sour'].includes(item.name)
    );

    const allIngredients = [
        ...new Set(featuredCocktails.flatMap(c => c.ingredients))
    ];

    const handlePrint = () => {
        const printContents = printRef.current.innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        window.location.reload(); // reload to restore event listeners
    };

    return (
        <div className="packing-list-page">
            <h1>Packing List</h1>
            <p>Based on your featured cocktails:</p>
            <div ref={printRef}>
                <ul className="packing-list">
                    {allIngredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <button onClick={handlePrint} style={{ marginTop: '2rem' }}>
                Print Packing List
            </button>
        </div>
    );
}

export default PackingList;
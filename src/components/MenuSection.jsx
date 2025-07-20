import React from 'react';
import MenuItemCard from './MenuItemCard';

function MenuSection({ title, items }) {
  return (
    <section className="menu-section">
      <h2>{title}</h2>
      <div className="menu-grid">
        {items.map((item, index) => (
          <MenuItemCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
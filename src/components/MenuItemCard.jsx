import React from 'react';

function MenuItemCard({ item }) {
  return (
    <div className="menu-item-card">
      {item.image && <img src={item.image} alt={item.name} className="menu-item-image" />}
      <h3>{item.name}</h3>
      {item.tag && <p className='menu-item-tag'>{item.tag}</p>}
      <ul className="menu-item-ingredients">
        {item.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default MenuItemCard;
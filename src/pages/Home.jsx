import React from 'react';
import MenuSection from '../components/MenuSection';
import { menu } from '../data/menu_items'; 

function Home() {
    const featuredCocktails = menu.cocktails.filter(item =>
        ['Mai Tai', 'Jungle Bird', 'Old Fashioned', 'Whiskey Sour'].includes(item.name)
    );

  return (
    <div>
      <section className="menu-section-wrapper">
        {/* <h2>Our Menu</h2> */}
        <MenuSection title="Cocktails" items={featuredCocktails} />
      </section>
    </div>
  );
}

export default Home;
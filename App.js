import React from 'react';
import FeaturedDish from './components/FeaturedDish';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Dilshara Liyanage</h1>
        <p>Quick, Fresh & Delivered to You</p>
      </header>

      <main>
        <FeaturedDish
          name="Grilled Chicken Salad"
          description="A healthy and delicious salad with grilled chicken, greens, and a light dressing."
          price="Rs.650"
          image="/food_2.png"
        />
      </main>

      <footer className="footer">
        <p>&copy; 2025 Dilshara Liyanage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import PurchaseButton from './components/PurchaseButton';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Caça aos Caramelinhos
          </h1>
          <div className="flex justify-center">
            <PurchaseButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
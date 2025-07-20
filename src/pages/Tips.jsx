import React from 'react';

function Tips() {
  return (
    <div>
      <p>If you enjoyed the drinks, feel free to support me on <a href="#" onclick="
            window.location = 'venmo://paycharge?txn=pay&recipients=anduhrooo&amount=10.00&note=Thanks!';
            setTimeout(function() {
              window.location = 'https://venmo.com/anduhrooo';
            }, 1500);
          ">Venmo</a>!</p>
    </div>
  );
}

export default Tips;
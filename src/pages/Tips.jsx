import React from 'react';

function Tips() {
  return (
    <div>
      <p>
        If you enjoyed the drinks, feel free to support me on{' '}
        <button
          type="button"
          onClick={e => {
            e.preventDefault();
            window.location = 'venmo://paycharge?txn=pay&recipients=anduhrooo&amount=10.00&note=Thanks!';
            setTimeout(() => {
              window.location = 'https://venmo.com/anduhrooo';
            }, 1500);
          }}
          style={{
            background: 'none',
            border: 'none',
            color: '#3D95CE',
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: 0,
            font: 'inherit'
          }}
        >
          Venmo
        </button>
        !
      </p>
    </div>
  );
}

export default Tips;
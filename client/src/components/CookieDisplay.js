import React from 'react';

function CookieDisplay() {
  const cookies = document.cookie.split(';');
  return (
    <div>
      <h2>Cookie Information</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {cookies.map(cookie => {
            const [name, value] = cookie.trim().split('=');
            return (
              <tr key={name}>
                <td>{name}</td>
                <td>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CookieDisplay;

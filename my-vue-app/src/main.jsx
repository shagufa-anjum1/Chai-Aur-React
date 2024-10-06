import React from 'react'; // Import React for createElement
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  );
}
const anotheruser = "code with sofi"
const reactElement = React.createElement(
  'a',
  { href: "https://google.com", target: "_blank" },
  "click me to visit",
  anotheruser
);

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

createRoot(document.getElementById('root')).render(reactElement);



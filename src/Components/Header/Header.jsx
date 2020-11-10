import React from 'react';

const Header = () => {
  return (
    <header className="w-screen flex flex-col items-center md:justify-between md:flex-row p-2 md:p-8">
      <h1 className="font-bold text-4xl">Weather Forecast</h1>
      <nav>
        <ul className="flex flex-row justify-between content-center text-center md:justify-end">
          <li className="pr-4">
            <a
              className="text-xl font-bold hover:underline"
              href="https://github.com/duncanjbain"
            >
              Github
            </a>
          </li>
          <li className="pr-4">
            <a
              className="text-xl font-bold hover:underline"
              href="https://twitter.com/duncanbain"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              className="text-xl font-bold hover:underline"
              href="https://linkedin.com/in/duncanjbain"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

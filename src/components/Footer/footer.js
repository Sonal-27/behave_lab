import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left fixed bottom-0 w-full">
      <div className="p-4">
        <div className="footer-bar flex justify-between items-center text-neutral-700 dark:text-neutral-200">
          <div>
            IU Behavioral Science Laboratory maintained by{' '}
            <a
              className="text-neutral-800 dark:text-neutral-400"
              href="https://github.iu.edu/behave"
            >
              behave
            </a>
            <p>
              Published with{' '}
              <a
                className="text-neutral-800 dark:text-neutral-400"
                href="https://pages.github.com/"
              >
                GitHub Pages 
              </a>
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

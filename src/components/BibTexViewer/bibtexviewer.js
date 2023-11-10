import React, { useEffect, useState } from 'react';
import './BibTexViewer/bibtexviewer.css';
import { parse } from 'bibtex-parser';

function BibTexViewer() {
  const [bibData, setBibData] = useState(null);

  useEffect(() => {
    fetch('/sample.bib')
      .then((response) => response.text())
      .then((bibText) => {
        const parsedBibData = parse(bibText);
        setBibData(parsedBibData);
      })
      .catch((error) => {
        console.error('Error fetching or parsing the .bib file:', error);
      });
  }, []);

  return (
    <div>
      <h2>Your Bibliography</h2>
      <ul>
        {bibData &&
          bibData.entries.map((entry, index) => (
            <li key={index}>
              <pre>{JSON.stringify(entry, null, 2)}</pre>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default BibTexViewer;

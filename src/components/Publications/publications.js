import React, { useEffect, useState } from 'react';
import BibTexParser from 'bibtex-parser-js';

const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    // Read the .bib file (you can replace 'sample.bib' with your file path)
    fetch('/sample.bib')
      .then((response) => response.text())
      .then((data) => {
        // Parse the .bib data
        const parsedData = BibTexParser.toJSON(data);

        console.log(parsedData);
        setPublications(parsedData);
      });
  }, []);

  return (
    <section id="publications" className="d-flex justify-content-center">
    <div className="pubs-grid-container justify-content-center">
    <div className="pubs-grid-item d-flex justify-content-center">
        <h2><b>PUBLICATIONS</b></h2>
    </div>
    <hr></hr>
    <div className="pubs-grid-item">
      <ul>
        {publications.map((publication, index) => (
          <li key={index}>
            <strong>{publication.entryTags.TITLE || publication.entryTags.title}</strong><br />
            Author: {publication.entryTags.AUTHOR || publication.entryTags.author}<br />
            Journal: {publication.entryTags.JOURNAL || publication.entryTags.journal}<br />
            Year: {publication.entryTags.YEAR || publication.entryTags.year}<br />
            {publication.entryTags.doi || publication.entryTags.DOI ? (
                  <span>doi: <a href={`https://doi.org/${publication.entryTags.doi || publication.entryTags.DOI}`} target="_blank" rel="noopener noreferrer">{publication.entryTags.doi || publication.entryTags.DOI}</a></span>
                  ) : null}
            </li>
        ))}
      </ul>
      </div>
      </div>
    </section>
  );
};

export default Publications;
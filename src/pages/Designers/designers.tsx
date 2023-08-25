import React from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import './designers.css';

const Designers = () => {
  const designers = [
    { id: 1, name: 'Armani', link: 'https://www.armani.com' },
    { id: 2, name: 'Burberry', link: 'https://www.burberry.com' },
    { id: 3, name: 'Calvin Klein', link: 'https://www.calvinklein.com' },
    { id: 4, name: 'Dolce & Gabbana', link: 'https://www.us.dolcegabbana.com' },
    { id: 5, name: 'Emporio Armani', link: 'https://www.emporioarmani.com' },
    { id: 6, name: 'Fendi', link: 'https://www.fendi.com' },
    { id: 7, name: 'Gucci', link: 'https://www.gucci.com' },
    { id: 8, name: 'Hermès', link: 'https://www.Hermes.com' },
    { id: 9, name: 'Louis Vuitton', link: 'https://www.louisvuitton.com' },
    { id: 10, name: 'Prada', link: 'https://www.prada.com' },
    { id: 11, name: 'Ralph Lauren', link: 'https://www.ralphlauren.com' },
    { id: 12, name: 'Tom Ford', link: 'https://www.tomford.com' },
    { id: 13, name: 'Versace', link: 'https://www.versace.com' },
    // Add more designers as needed
  ];

  return (
    <div>
      <Header />
      <div className="designers-container">
        <h1 className="designers-title">Designers</h1>
        <ul className="designers-list">
          {designers.map((designer) => (
            <li key={designer.id} className="designers-item">
              <a href={designer.link} className="designers-link" target="_blank" rel="noopener noreferrer">
                {designer.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default Designers;

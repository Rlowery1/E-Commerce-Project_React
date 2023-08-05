import React from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import './designers.css';

const Designers = () => {
  const designers = [
    { id: 1, name: 'Armani', link: '/designer/armani' },
    { id: 2, name: 'Burberry', link: '/designer/burberry' },
    { id: 3, name: 'Calvin Klein', link: '/designer/calvin-klein' },
    { id: 4, name: 'Dolce & Gabbana', link: '/designer/dolce-gabbana' },
    { id: 5, name: 'Emporio Armani', link: '/designer/emporio-armani' },
    { id: 6, name: 'Fendi', link: '/designer/fendi' },
    { id: 7, name: 'Gucci', link: '/designer/gucci' },
    { id: 8, name: 'Hermès', link: '/designer/hermes' },
    { id: 9, name: 'Louis Vuitton', link: '/designer/louis-vuitton' },
    { id: 10, name: 'Prada', link: '/designer/prada' },
    { id: 11, name: 'Ralph Lauren', link: '/designer/ralph-lauren' },
    { id: 12, name: 'Tom Ford', link: '/designer/tom-ford' },
    { id: 13, name: 'Versace', link: '/designer/versace' },
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
              <a href={designer.link} className="designers-link">
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

import React from 'react';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

const TeacherItem: React.FC = () => {
   return (
      <article className="teacher-item">
         <header>
            <img src="https://avatars3.githubusercontent.com/u/39929399?s=460&u=e2f579e1e712cf8ccc31031a924c4579c6574a0b&v=4" alt="Rodrigo" />
            <div>
               <strong>Rodrigo Pacheco</strong>
               <span>Programação</span>
            </div>
         </header>

         <p>
            Entusiasta das melhores tecnologias de quimica avançada.
         <br /><br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
   </p>

         <footer>
            <p>
               Preço/hora
         <strong>R$ 80,00</strong>
            </p>
            <button type="button">
               <img src={whatsappIcon} alt="Whatsapp" />
         Entrar em contato
      </button>
         </footer>
      </article>
   );
}

export default TeacherItem;
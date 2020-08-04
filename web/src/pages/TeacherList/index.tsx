import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

const TeacherList: React.FC = () => {
   return (
      <div id="page-teacher-list" className="container">
         <PageHeader title="Estes são os proffys disponíveis.">
            <form id="search-teachers">
               <div className="input-block">
                  <label htmlFor="subject">Materia</label>
                  <input type="text" id="subject" />
               </div>

               <div className="input-block">
                  <label htmlFor="week-day">Dia da semana</label>
                  <input type="text" id="week-day" />
               </div>

               <div className="input-block">
                  <label htmlFor="time">Hora</label>
                  <input type="text" id="time" />
               </div>
            </form>
         </PageHeader>

         <main>
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
            </article>
         </main>
      </div>
   );
}

export default TeacherList;
import React from 'react';

import api from '../../services/api';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

interface TeacherItemProps {
   teacher: {
      avatar: string;
      bio: string;
      cost: number;
      id: number;
      name: string;
      subject: string;
      whatsapp: string;
      user_id: string;
   }
}

interface Teacher {

}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

   function createNewConnection() {
      const user_id = teacher.user_id
      api.post('connections', { user_id })
   }

   return (
      <article className="teacher-item">
         <header>
            <img src={teacher.avatar} alt={teacher.name} />
            <div>
               <strong>{teacher.name}</strong>
               <span>{teacher.subject}</span>
            </div>
         </header>

         <p>{teacher.bio}</p>

         <footer>
            <p>
               Preço/hora
               <strong>R$ {teacher.cost},00</strong>
            </p>
            <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`} target="_blank" rel="noopener noreferrer">
               <img src={whatsappIcon} alt="Whatsapp" />
               Entrar em contato
            </a>
         </footer>
      </article>
   );
}

export default TeacherItem;
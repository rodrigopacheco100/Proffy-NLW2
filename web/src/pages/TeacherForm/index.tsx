import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from "../../assets/images/icons/warning.svg";

import './styles.css';


const TeacherForm: React.FC = () => {
   return (
      <div id="page-teacher-form" className="container">
         <PageHeader
            title="Que incrivel que você quer dar aulas."
            description="O primeiro passo é preencher esse formulário de inscrição"
         />

         <main>
            <fieldset>
               <legend>Seus Dados</legend>

               <Input name="name" label="Nome completo" />
               <Input name="avatar" label="Avatar" />
               <Input name="whatsapp" label="WhatsApp" />
               <Textarea name="bio" label="Biografia" />
            </fieldset>

            <fieldset>
               <legend>Sobre a aula</legend>

               <Select
                  name="subject"
                  label="Matéria"
                  options={[
                     { value: "Artes", label: "Artes" },
                     { value: "Biologia", label: "Biologia" },
                     { value: "Matemática", label: "Matemática" },
                     { value: "Ciências", label: "Ciências" },
                     { value: "Educação física", label: "Educação física" },
                     { value: "Física", label: "Física" },
                     { value: "Geografia", label: "Geografia" },
                     { value: "Português", label: "Português" },
                     { value: "Química", label: "Química" }
                  ]}
               />
               <Input name="cost" label="Custo da sua hora por aula" />
            </fieldset>

            <footer>
               <p>
                  <img src={warningIcon} alt="Aviso importante" />
                  Importante <br />
                  Preencha todos os dados
               </p>
               <button type="button">
                  Finalizar cadastro
               </button>
            </footer>
         </main>
      </div>
   );
}

export default TeacherForm;
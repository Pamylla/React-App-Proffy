import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
        <header> 
            <img src="https://avatars1.githubusercontent.com/u/49075654?s=460&u=a1ac7762c3a6c23d9bb08c56efccd74e63cc4de9&v=4" alt="Pamylla Ostermann" />                       
            <div>
                <strong>Pamylla Ostermann</strong><br/>
                <span>Biologia</span>
            </div>
        </header>

        <p>
            O que um cromossomo disse para o outro? - cromo somos feitos um para o outro
            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam accusamus aut sapiente, labore dolore vero, explicabo iste ut possimus ullam exercitationem molestias ab repellat voluptatum velit dicta. Ipsum, ullam dolore?
        </p>

        <footer>
            <p>
                Preço/Hora
                <strong>R$ 100$</strong>
            </p>
            <button type="button">
                <img src={whatsAppIcon} alt="whats"/>
                Entrar em contato
            </button>
        </footer>

    </article>
    )
}

export default TeacherItem;
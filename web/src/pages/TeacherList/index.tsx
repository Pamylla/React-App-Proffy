import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis:">

                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"></input>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week">Dia da Semana</label>
                        <input type="text" id="week"></input>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"></input>
                    </div>
                </form>

            </PageHeader>

            <main>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
            </main>

        </div>
    )
}

export default TeacherList;
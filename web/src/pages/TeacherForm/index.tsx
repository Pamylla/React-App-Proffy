import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg'
import './styles.css';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';
import {useHistory} from 'react-router-dom'

function TeacherForm() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week: 0, from: '', to: '' }
        ]);
    }

    function handleCreateClass( e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems,
          }).then(() => {
            alert('Cadastro realizado com sucesso!');

            history.push('/')
        }).catch(() => {
            alert('Erro no cadastro!')
        })
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position) { 
                return { ...scheduleItem, [field]:value }
            }
            return scheduleItem;
        })
        setScheduleItems(updateScheduleItems);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher o fomulário de inscrição" />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados:</legend>

                        <Input name="name"
                            value={name}
                            label="Nome Completo"
                            onChange={(e) => { setName(e.target.value) }}>
                        </Input>

                        <Input name="avatar"
                            value={avatar}
                            label="Avatar"
                            onChange={(e) => { setAvatar(e.target.value) }}>
                        </Input>

                        <Input name="whatsapp"
                            value={whatsapp}
                            label="Whatsapp"
                            onChange={(e) => { setWhatsapp(e.target.value) }}>
                        </Input>

                        <Textarea name="bio"
                            value={bio}
                            label="Biografia"
                            onChange={(e) => { setBio(e.target.value) }}>
                        </Textarea>

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a Aula:</legend>

                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Historia', label: 'Historia' },
                            ]}>
                        </Select>

                        <Input name="cost"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                            label="Custo da Hora/Aula">
                        </Input>
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                        <button type="submit" onClick={addNewScheduleItem}>
                                + Novo horário
                        </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week} className="schedule-item">
                                    <Select
                                        name="week"
                                        label="Dia da semana"
                                        value= {scheduleItem.week}
                                        onChange= {e => setScheduleItemValue(index, 'week', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda' },
                                            { value: '2', label: 'Terça' },
                                            { value: '3', label: 'Quarta' },
                                            { value: '4', label: 'Quinta' },
                                            { value: '5', label: 'Sexta' },
                                            { value: '6', label: 'Sabado' },
                                        ]}>
                                    </Select>

                                    <Input name="from"
                                         label="Das" 
                                         type="time"
                                         value= {scheduleItem.from}
                                         onChange= {e => setScheduleItemValue(index, 'from', e.target.value)} />

                                    <Input name="to"
                                         label="Até" 
                                         value= {scheduleItem.to}
                                         type="time" 
                                         onChange= {e => setScheduleItemValue(index, 'to', e.target.value)}/>
                                </div>
                            )
                        })}

                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"></img>
                        Importante! <br />
                        Preencha todos os dados! :)
                    </p>
                        <button type="submit">
                            Salvar Cadastro
                    </button>
                    </footer>

                </form>
            </main>

        </div>
    )
}

export default TeacherForm;
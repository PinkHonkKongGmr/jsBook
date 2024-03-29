import React from 'react';
import './header.css';
import Unit from '../unit';
import Animaballs from '../animaballs';
import { Accordion, Card, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header">
            <Accordion defaultActiveKey="1">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <Animaballs />
                            Навигация
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div className="nav-top">
                                <Unit
                                    title="Парадигмы"
                                    topics={[
                                        { href: '/oop', text: 'ООП' },
                                        { href: '/func', text: 'Функциональная парадигма' },
                                    ]}
                                />
                                <Unit
                                    title="Принципы"
                                    topics={[
                                        { href: '/solid', text: 'SOLID' },
                                        { href: '/kiss', text: 'KISS' },
                                        { href: '/yagni', text: 'YAGNI' },
                                        { href: '/dry', text: 'DRY' },
                                    ]}
                                />
                                <Unit
                                    title="Данные. Структуры данных. Алгоритмы."
                                    topics={[
                                        { href: '/datastructures', text: 'Структуры данных' },
                                        { href: '/datastructurejs', text: 'Типы и структуры данных JS' },
                                    ]}
                                />
                                <Unit
                                    title="Git"
                                    topics={[
                                        { href: '/gitcommands', text: 'Полезные команды' },
                                        { href: '/mergevsrebase', text: 'Merge vs rebase' },
                                    ]}
                                />

                                <Unit
                                    title="JavaScript"
                                    topics={[
                                        { href: '/jsinheritance', text: 'Наследование в js' },
                                        { href: '/jscontext', text: 'Контекст' },
                                        { href: '/comments', text: 'Комментарии' },
                                        { href: '/ustrict', text: 'Строгий режим' },
                                        { href: '/debandthrott', text: 'Throttling и Debouncing' },
                                    ]}
                                />
                                <Unit
                                    title="Фронтенд"
                                    topics={[
                                        { href: '/loadingpage', text: 'Загрузка страницы' },
                                        { href: '/req', text: 'Запросы' },
                                        { href: '/rest', text: 'Архитектура REST' },
                                        { href: '/react-redux', text: 'React-redux' },
                                    ]}
                                />
                                <Unit
                                    title="Верстка"
                                    topics={[
                                        { href: '/bem', text: 'Методология БЭМ' },
                                        { href: '/adaptive', text: 'Резина/адаптив' },
                                    ]}
                                />
                                <Unit
                                    title="Заметки"
                                    topics={[
                                        { href: '/jsnotes', text: 'Просто тонкости js' },
                                        { href: '/reactnotes', text: 'Cтатьи по реакту' },
                                        { href: '/other', text: 'Разные технологии' },
                                    ]}
                                />
                                <Unit
                                    title="База полезных видео"
                                    topics={[{ href: '/videobasejs', text: 'Видео по js' }]}
                                />
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};

export default Header;

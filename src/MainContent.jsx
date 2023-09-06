import { useEffect, useState, useRef } from 'react';
import CursorFollower from './CursorFollower';

export default function MainContent() {
    const [selectedMenuItem, setSelectedMenuItem] = useState('about');
    const sections = useRef([]);

   

    

    const paddingBlockPixels = 160; // La valeur du padding-block en pixels (5rem * 16px)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + paddingBlockPixels; // Ajout du padding-block
            sections.current.forEach((section, index) => {
                if (
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
                ) {
                    setSelectedMenuItem(['about', 'xp', 'project', 'skills'][index]);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Nettoyer l'écouteur d'événements lorsque le composant se démonte
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const triggerSelection = (e, menuItem) => {
        e.preventDefault();
        const section = document.querySelector(`#${menuItem}`);
        window.scrollTo(0, section.offsetTop);
    };


    const itemsLabel = {
        about: 'À propos',
        xp: 'Expériences',
        project: 'Projets',
        skills: 'Compétences'
    }

    const getItemsContent = (item) => {
        switch (item) {
            case 'about':
                return getAboutContent();
            case 'xp':
                return getXPContent();
            case 'project':
                // do something
                break;
            case 'skills':
                // do something
                break;
            default:
                // do something
                break;
        }

    }

    const getAboutContent = () => {

        return (

            <div className="intro">
                <p className="greeting">Salut ! Moi c'est <span className="marked-text" >Florian</span>, j'ai <span className="age">{getMyAge()}</span> ans, depuis toujours je suis passionné d'informatique.</p>
                <p>Après plusieurs années à enseigner ma seconde passion qu'est l'équitation, j'ai décidé de me former au développement en 2022 afin de vivre pleinement ces deux passions.</p>
                <p>J'ai rapidement eu l'occasion de rejoindre un <span className="marked-text" >collectif de freelance</span> qui m'a fait confiance suite à mon stage de fin d'étude. J'ai pu alors travailler sur des projets engagés socialement et écologiquement.</p>
                <p>Voici un bref résumé des technologies sur lesquelles j'ai pu travailler.</p>

                <ul className="tech-list">
                    <li>Javascript</li>
                    <li>React</li>
                    <li>PHP</li>
                    <li>Symfony</li>
                    <li>Api Platform</li>
                    <li>MySQL</li>
                    
                </ul>
            </div>
        )
    }

    const xp = [
        {
            title : 'Développeur Web',
            company : 'Freelance',
            date : '2021 - Aujourd\'hui',
            description : 'Développement d\'applications web en freelance',
            details : <p>Développement d'applications avec Framework PHP Symfony et ReactJS, au sein du collectif de Freelance "MetaStrat" j'ai pu travailler sur des projets pour des clients du collectif tels que <a href="https://www.openclimat.com" className="marked-text" target='_blank'>OpenClimat</a>, <span  className="marked-text" >Ti3rs</span> et des projets interne comme <a className="marked-text" href="https://labonnepub.com" target='_blank' >LabonnePub</a></p>
        }
    ]

    const getXPContent = () => {
        return (
            <div className="experiences">
                {
                    xp.map((xpItem) => (
                        <div className="xp-item">
                            <h3>{xpItem.title}</h3>
                            <h4>{xpItem.company}</h4>
                            <p>{xpItem.date}</p>
                            <p>{xpItem.description}</p>
                            <p>{xpItem.details}</p>
                        </div>
                    ))
                }
            </div>
        )
        
    }

    const getMyAge = () => {
        const today = new Date();
        const birthDate = new Date(1998, 1, 15);

        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    return (
        <div id="main-content" className="wrap">
            <CursorFollower />
            <section id="description">
                <div id="presentation">
                    <h1>Florian Eeckhout</h1>
                    <h2>Développeur Web -- Freelance</h2>
                    <p>Je développe des applications web accessibles à tous</p>
                </div>
                <div id="menu">
                    <ul>
                        {['about', 'xp', 'project', 'skills'].map((menuItem) => (
                            <li key={menuItem} >
                                <a className={selectedMenuItem === menuItem ? 'selected' : ''} href={`#${menuItem}`} onClick={(e) => triggerSelection(e, menuItem)}>
                                    {itemsLabel[menuItem]}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="socials"></div>
            </section>

            <section id="resume">
                {['about', 'xp', 'project', 'skills'].map((sectionId, index) => (
                    <article key={sectionId} id={sectionId} ref={(el) => (sections.current[index] = el)}>
                        <h1>{itemsLabel[sectionId]}</h1>
                        <div className="content">
                            {getItemsContent(sectionId)}
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
}

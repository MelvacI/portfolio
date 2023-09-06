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
                return getProjectsContent();
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
            title: 'Développeur Web',
            company: 'Freelance',
            date: 'Octobre 2022 - Aujourd\'hui',
            description: 'Développement d\'applications web en freelance',
            details: <p>Développement d'applications avec Framework PHP Symfony et ReactJS, au sein du collectif de Freelance "MetaStrat" j'ai pu travailler sur des projets pour des clients du collectif tels que <a href="https://www.openclimat.com" className="marked-text" target='_blank'>OpenClimat</a>, <span className="marked-text" >Ti3rs</span> et des projets interne comme <a className="marked-text" href="https://labonnepub.com" target='_blank' >LabonnePub</a></p>,
            techs: ['Javascript', 'React', 'PHP', 'Symfony', 'Api Platform', 'MySQL']
        },
        {
            title: 'Stagiaire Développeur Web',
            company: 'Metastrat',
            date: 'Juillet 2022 - Octobre 2022',
            description: 'Développement d\'applications web',
            details: <p>
                Développement et maintenance du site <a href="https://metastrat.com" className="marked-text" target="_blank">Metastrat</a> avec le framework symfony et intégration et installation de la partie front avec ReactJS, début du développement de la V2 de <a href="https://labonnepub.com" className="marked-text" target="_blank">LabonnePub</a> avec ReactJS et Symfony.
            </p>,
            techs: ['Javascript', 'React', 'PHP', 'Symfony', 'MySQL']
        },
        {
            title: 'Service Civique',
            company: 'Pole Emploi - Béziers 34',
            date: 'Juillet 2021 - Octobre 2021',
            description: 'Accompagnateur au numérique',
            details: <p>
                Animateur, dans la zone d'accueil d'une agence Pôle Emploi, pour facilité l'inclusion numérique auprès des usagers de l'agence Pôle Emploi. J'ai pu accompagner les usagers dans leurs démarches administratives en ligne, les aider à rédiger leur CV et lettre de motivation, les aider à utiliser les outils numériques mis à disposition par Pôle Emploi.
            </p>,
            techs: []
        },
        {
            title: 'Enseignant d\'équitation',
            company: 'Auto-entrepreneur',
            date: 'Septembre 2018 - Juillet 2020',
            description: 'Enseignement de l\'équitation, gestion d\'une écurie',
            details: <p>
                Enseignement de l'équitation, du débutant au cavalier confirmé, entraînement du sportif en compétition.
                Gestion d'une écurie de propriétaires, gestion des soins des chevaux, gestion des pensions, organisation de stages et de compétitions.
                Relation clientèle, gestion des plannings, gestion des stocks.
            </p>,
            techs: []
        }
    ]

    const getXPContent = () => {
        return (
            <div className="experiences">
                {
                    xp.map((xpItem) => (
                        <div key={xpItem.title} className="xp-item">
                            <div className="xp-header">
                                <h3 className="xp-title">{xpItem.title}</h3>
                                <p className="xp-date">{xpItem.date}</p>
                            </div>
                            <h4 className="xp-company">{xpItem.company}</h4>
                            <p className="xp-description">{xpItem.description}</p>
                            <p className="xp-details">{xpItem.details}</p>
                            <p className="xp-techs">{xpItem.techs.map((tech) => {
                                return <span key={xpItem.title + tech} className="tech">{tech}</span>
                            })}</p>
                        </div>
                    ))
                }
            </div>
        )

    }

    const getProjectsContent = () => {
        return (
            <div className="projects">
                <h3>Avec le collectif Metastrat</h3>
                <div className="projects-list">
                {
                        projects.filter((project) => project.type === 'metastrat').map((project) => (
                            <div className="project-item">
                                <h4 className="project-title">{project.name}</h4>
                                <p className="project-description">{project.description}</p>
                                
                                <p className="project-details">{project.details}</p>
                                <p className="project-techs">{project.techs.map((tech) => {
                                    return <span key={project.name + tech} className="tech">{tech}</span>
                                })}</p>
                            </div>
                        ))
                    }
                </div>
                <h3>Sur mon temps libre</h3>
                <div className="projects-list">
                    {
                        projects.filter((project) => project.type === 'personnal').map((project) => (
                            <div className="project-item">
                                <h4 className="project-title">{project.name}</h4>
                                <p className="project-description">{project.description}</p>
                                
                                <p className="project-details">{project.details}</p>
                                <p className="project-techs">{project.techs.map((tech) => {
                                    return <span key={project.name + tech} className="tech">{tech}</span>
                                })}</p>
                            </div>
                        ))
                    }

                </div>

            </div>
        )
    }

    const projects = [
        {
            type : 'personnal',
            name : 'Portfolio',
            description : 'Développement et déploiement de mon portfolio',
            techs : ['React', 'Javascript', 'CSS', 'ViteJS'],
            link : 'https://florian-eeckhout.fr',
            details : <p>
                Développement de mon portfolio en React avec la librairie ViteJS. Déploiement avec Netlify.
            </p>
        },
        {
            type : 'metastrat',
            name : 'Metastrat',
            description : 'Développement et maintenance du site de Metastrat',
            techs : ['React', 'Javascript', 'CSS', 'Symfony', 'Api Platform', 'MySQL', 'API'],
            link : 'https://metastrat.com',
            details : <p>
                Développement et maintenance du site de Metastrat avec le framework symfony et intégration et installation de la partie front avec ReactJS.
                Amélioration des vues dashboard du site en installant et créant des templates avec Symfony et ReactJS. Création de facture, paiements et devis avec Symfony, affichage des vues avec ReactJS et création d'endpoint avec Api Platform.
                </p>
        }
    ]


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
                            <li key={menuItem + "menu_li"} >
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
                    <article key={sectionId + "section"} id={sectionId} ref={(el) => (sections.current[index] = el)}>
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

import { useEffect, useState, useRef } from 'react';
import CursorFollower from './CursorFollower';
import ExternalLinkSvg from './assets/ExternalLinkSvg.jsx';
import LinkedInSvg from './assets/LinkedInSvg';
import TiwtterSvg from './assets/TwitterSvg';
import GitHubSvg from './assets/GitHubSvg';

export default function MainContent() {
    const [selectedMenuItem, setSelectedMenuItem] = useState('about');
    const sections = useRef([]);

    const sectionsIds = ['about', 'xp', 'project'];

    const socialsIds = ['github', 'linkedin', 'twitter'];

    const getSocialLinks = (socialId) => {
        switch (socialId) {
            case 'linkedin':
                return (
                    <a href="https://www.linkedin.com/in/florian-eeckhout" rel="noopener noreferrer" target='_blank'>{getSocialSvg(socialId)}</a>
                )
            case 'twitter':
                return (
                    <a href="https://twitter.com/_Melvac" rel="noopener noreferrer" target='_blank'>{getSocialSvg(socialId)}</a>
                )
            case 'github':
                return (
                    <a href="https://github.com/MelvacI" rel="noopener noreferrer" target='_blank'>{getSocialSvg(socialId)}</a>
                )
            default:
                break;
        }
    }

    const getSocialSvg = (socialId) => {
        switch (socialId) {
            case 'linkedin':
                return <LinkedInSvg />
            case 'twitter':
                return <TiwtterSvg />
            case 'github':
                return <GitHubSvg />
            default:
                break;
        }
    }


    const paddingBlockPixels = 160; // La valeur du padding-block en pixels (5rem * 16px)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + paddingBlockPixels; // Ajout du padding-block
            sections.current.forEach((section, index) => {
                if (
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
                ) {
                    setSelectedMenuItem(['about', 'xp', 'project'][index]);
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
                <p className="greeting">Salut ! Moi c'est <span className="marked-text">Florian</span>, j'ai <span className="age">{getMyAge()}</span> ans, depuis toujours je suis passionné d'informatique.</p>
                <p>Après plusieurs années à enseigner ma seconde passion qu'est l'équitation, j'ai décidé de me former au développement en 2022 afin de vivre pleinement ces deux passions.</p>
                <p>J'ai rapidement eu l'occasion de rejoindre un <span className="marked-text">collectif de freelance</span> qui m'a fait confiance suite à mon stage de fin d'étude. J'ai pu alors travailler sur des projets engagés socialement et écologiquement.</p>
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
            details: <p>Développement d'applications avec Framework PHP Symfony et ReactJS, au sein du collectif de Freelance "MetaStrat" j'ai pu travailler sur des projets pour des clients du collectif tels que <a href="https://www.openclimat.com" rel="noopener noreferrer" className="marked-text" target='_blank'>OpenClimat</a>, <a href="https://www.ti3rs.fr" rel="noopener noreferrer" className="marked-text" target='_blank'>Ti3rs</a> et des projets interne comme <a className="marked-text" rel="noopener noreferrer" href="https://labonnepub.com" target='_blank' >LabonnePub</a>, <a className="marked-text" rel="noopener noreferrer" href="https://www.leboutonsesame.com/fr/" target='_blank' >Le Bouton Sésame</a>  ainsi que la maintenance et le developpement de nouvelles features sur <a className="marked-text" rel="noopener noreferrer" href="https://www.metastrat.com/fr/" target='_blank' >Métastrat</a></p>,
            techs: ['Javascript', 'React', 'PHP', 'Symfony', 'Api Platform', 'MySQL']
        },
        {
            title: 'Stagiaire Développeur Web',
            company: 'Metastrat',
            date: 'Juillet 2022 - Octobre 2022',
            description: 'Développement d\'applications web',
            details: <p>
                Développement et maintenance du site <a href="https://metastrat.com" rel="noopener noreferrer" className="marked-text" target="_blank">Metastrat</a> avec le framework symfony et intégration et installation de la partie front avec ReactJS, début du développement de la V2 de <a rel="noopener noreferrer" href="https://labonnepub.com" className="marked-text" target="_blank">LabonnePub</a> avec ReactJS et Symfony.
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
                            <div className="xp-description">{xpItem.description}</div>
                            <div className="xp-details">{xpItem.details}</div>
                            <div className="xp-techs">{xpItem.techs.map((tech) => {
                                return <span key={xpItem.title + tech} className="tech">{tech}</span>
                            })}</div>
                        </div>
                    ))
                }
            </div>
        )

    }

    const getProjectsContent = () => {
        return (
            <div className="projects">
                <h3>Sur mon temps libre</h3>
                <div className="projects-list">
                    {
                        projects.filter((project) => project.type === 'personnal').map((project) => (
                            <div key={project.name + "project-item"} className="project-item">
                                <h4 className="project-title">
                                    {
                                        project.link === null
                                            ? <span className='project-link'>{project.name}</span>
                                            : <a rel="noopener noreferrer" href={project.link} className='project-link' target='_blank'>{project.name} <ExternalLinkSvg /></a>

                                    }

                                </h4>
                                <div className="project-description">{project.description}</div>


                                <div className="project-details">{project.details}</div>
                                <div className="project-techs">{project.techs.map((tech) => {
                                    return <span key={project.name + tech} className="tech">{tech}</span>
                                })}</div>
                            </div>
                        ))
                    }

                </div>
                <h3>Avec le collectif Metastrat</h3>
                <div className="projects-list">
                    {
                        projects.filter((project) => project.type === 'metastrat').reverse().map((project) => (
                            <div key={project.name + "project-item"} className="project-item">
                                <h4 className="project-title">
                                    {
                                        project.link === null
                                            ? <span className='project-link'>{project.name}</span>
                                            : <a rel="noopener noreferrer" href={project.link} className='project-link' target='_blank'>{project.name} <ExternalLinkSvg /></a>

                                    }
                                </h4>
                                <div className="project-description">{project.description}</div>


                                <div className="project-details">{project.details}</div>
                                <div className="project-techs">{project.techs.map((tech) => {
                                    return <span key={project.name + tech} className="tech">{tech}</span>
                                })}</div>
                            </div>
                        ))
                    }
                </div>


            </div>
        )
    }

    const projects = [
        {
            type: 'personnal',
            name: 'Portfolio',
            description: 'Développement et déploiement de mon portfolio',
            techs: ['React', 'Javascript', 'CSS', 'ViteJS'],
            link: null,
            details: <p>
                Développement de mon portfolio en React avec la librairie ViteJS. Déploiement avec Netlify.
            </p>
        },
        {
            type: 'metastrat',
            name: 'Metastrat',
            description: 'Développement et maintenance du site de Metastrat',
            techs: ['React', 'Javascript', 'Symfony', 'Api Platform', 'MySQL', 'API'],
            link: 'https://metastrat.com',
            details: <p>

                Conception et entretien du site Metastrat en utilisant Symfony comme framework, avec intégration de la partie front-end via ReactJS. Enrichissement des vues du tableau de bord en créant des modèles à l'aide de Symfony et ReactJS. Mise en place de fonctionnalités de facturation, paiement, et génération de devis avec Symfony, affichage des vues grâce à ReactJS, et création d'endpoints via Api Platform.
            </p>
        },
        {
            type: 'metastrat',
            name: 'LabonnePub',
            description: 'Développement de la V2 de LabonnePub',
            techs: ['React', 'Javascript', 'Symfony', 'Api Platform', 'MySQL', 'API', 'Stripe', 'CleverCloud'],
            link: 'https://labonnepub.com',
            details: <p>
                Création d'une  <span className='marked-text'>régie publicitaire engagée</span> avec Symfony et ReactJS, incluant la gestion des utilisateurs, des publicités, des statistiques, et un système de rémunération. Intégration d'un tunnel de paiement <span className='marked-text'>Stripe</span> et mise en place d'une logique de diffusion des publicités basée sur un matching avec le contenu des pages web des éditeurs. Déploiement du projet avec <span className='marked-text'>CleverCloud</span>.
            </p>
        },
        {
            type: 'metastrat',
            name: 'OpenClimat',
            description: 'Développement et maintenance de la plateforme OpenClimat',
            techs: ['React', 'Javascript', 'Symfony', 'Api Platform', 'MySQL', 'API'],
            link: 'https://openclimat.com',
            details: <p>
                Maintenance et amélioration de la plateform Openclimat. Création de différentes template de présentation de données, création de fonctionnalités de recherche et de filtrage de données, création <span className="marked-text">d'endpoint API</span> pour l'application mobile du projet.
                Création de différent graphique dynamique avec la librairie <span className="marked-text">ChartJS</span>.
            </p>
        },
        {
            type: 'metastrat',
            name: 'Ti3rs',
            description: 'Développement de la plateforme Ti3rs',
            techs: ['React', 'Javascript', 'Symfony', 'Api Platform', 'MySQL', 'API', 'JWT', 'CleverCloud'],
            link: 'https://ti3rs.fr',
            details: <p>
                Création d'une plateforme web pour l'application de messagerie TI3RS, création de multiples endpoint API pour l'application mobile. Gestion des logiques de données et de la base de données. Création de fonctionnalités de messagerie et de filtrage de texte, gestion des accès avec <span className="marked-text">JWT</span>. Déploiement du projet via CleverCloud
            </p>
        },
        {
            type: 'metastrat',
            name: 'LeBoutonSesame',
            description: 'Développement de la plateforme LeBoutonSesame',
            techs: ['React', 'Symfony', 'Api Platform', 'Stripe', 'MySQL', 'API', 'JWT', 'CleverCloud'],
            link: 'https://leboutonsesame.com',
            details: <p>
                Création d'une solution d'abonnement pour les médias indépendant, permettant de regrouper l'accès à plusieurs medias premium dans un seul abonnement, et de rémunérer les médias en fonction du temps passé sur leur contenu. Développement de la partie médias et de la partie utilisateur, gestion des abonnements et des paiements avec <span className="marked-text">Stripe</span>, gestion des accès avec <span className="marked-text">JWT</span>. Déploiement du projet via CleverCloud.
            </p>
        },
        {
            type: 'personnal',
            name: 'Logiciel traitement PDF',
            description: 'Développement d\'un logiciel de traitement de PDF',
            techs: ['Python', 'Google API', 'PDF'],
            link: null,
            details: <p>
                Développement d'un logiciel de traitement de PDF, permettant de convertir un lourd fichier PDF en plusieurs fichiers PDF plus légers, chaque fichier correspondant à un client du document original. Envoie de chaque fichier dans le dossier client correspondant sur Google Drive.
            </p>
        },
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
                        {sectionsIds.map((menuItem) => (
                            <li key={menuItem + "menu_li"} >
                                <a rel="noopener noreferrer" className={selectedMenuItem === menuItem ? 'selected' : ''} href={`#${menuItem}`} onClick={(e) => triggerSelection(e, menuItem)}>
                                    {itemsLabel[menuItem]}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="socials">

                    {socialsIds.map((socialId) => (
                        <div key={socialId + "social"} className="social">
                            {getSocialLinks(socialId)}
                        </div>

                    ))}
                </div>
            </section>

            <section id="resume">
                {sectionsIds.map((sectionId, index) => (
                    <article key={sectionId + "section"} id={sectionId} ref={(el) => (sections.current[index] = el)}>
                        {
                            sectionId != 'about' && <h1>{itemsLabel[sectionId]}</h1>
                        }

                        <div className="content">
                            {getItemsContent(sectionId)}
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
}

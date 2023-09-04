import { useEffect, useState, useRef } from 'react';

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

    return (
        <div id="main-content" className="wrap">
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
                        <h1>
                        {itemsLabel[sectionId]}                                    

                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, mollitia id laborum tenetur earum inventore ab repellat quos sed atque ducimus aut corrupti, nihil fugiat reiciendis exercitationem dolor, obcaecati voluptatum?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium accusantium possimus consequatur unde atque cumque, quos sed repellat fugit in excepturi ipsa esse suscipit odit eum libero rerum cupiditate ullam dolorum minus, nesciunt eaque? Quasi dicta explicabo officiis distinctio vero nemo! Rerum quae architecto nostrum soluta magni, quidem veniam? Harum eaque placeat impedit eveniet dolore quae, est incidunt laboriosam quod voluptatum eligendi accusantium expedita facere reiciendis rerum voluptatibus repudiandae. Obcaecati excepturi reiciendis eaque repellendus, assumenda numquam quo eius dolores aut nobis sunt sint at officiis sequi nam doloribus, dolor eos incidunt quibusdam recusandae velit quos voluptates veniam. Cumque dignissimos architecto voluptas provident incidunt nostrum, officia magnam velit consectetur eos consequuntur maxime nesciunt, reprehenderit quis mollitia iste libero perspiciatis esse consequatur! Repellat magni earum dolorem quas quisquam sit quibusdam minima, ullam sed est laborum ipsa eius omnis exercitationem consequatur, doloribus quaerat corrupti? Eligendi, dolore quasi voluptates voluptatem animi magnam, aut sunt soluta, nihil obcaecati totam. Id ad exercitationem quos recusandae porro? Voluptate eius quam expedita, quisquam illo repellat alias error quasi qui labore voluptatibus, eaque sed laboriosam dolorum hic dolorem, accusantium itaque sequi! Impedit, quis, possimus nesciunt consequuntur alias quas laborum quae inventore eaque ullam at magnam. Accusamus dolorum nobis rerum esse officia quod nihil adipisci, natus fuga necessitatibus. Porro eius asperiores minus ratione magni ducimus debitis, vel quaerat saepe neque? Delectus, maiores soluta. Vel molestias fugiat enim. Sapiente optio magnam quod quasi alias, tempora ad hic laborum maiores dicta ipsa quas. Repellat rem quae fuga! Reprehenderit mollitia sequi molestias laboriosam?</p>
                    </article>
                ))}
            </section>
        </div>
    );
}

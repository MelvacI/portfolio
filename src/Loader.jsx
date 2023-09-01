import { useEffect, useState } from 'react';

// Path: src/Loader.jsx

export default function Loader({ glitch, welcome, fadeOut }) {
    const [welcomeText, setWelcomeText] = useState('');
    const devName = 'Florian Eeckhout';

    const welcomeTextInit = 'Bienvenue ';

    useEffect(() => {
        if(!welcome) return;
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            if (currentIndex <= welcomeTextInit.length) {
                setWelcomeText(welcomeTextInit.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(intervalId);
            }
        }, 50); // Réglez la vitesse à laquelle les lettres sont ajoutées

        return () => {
            clearInterval(intervalId); // Nettoyer l'intervalle lors du démontage du composant
        };
    }, [welcome]);

    return (
        <div id="loader-container" className={`${fadeOut && ' unwrap '}`}>
            <h1 data-text={devName + " Portfolio"} className={`${glitch && ' glitch '} font-2`}>
                
                <span  className={` highlight fw-3 `}>
                    {(!glitch && !welcome ) ? devName : null}
                </span>
                {" "}
                {
                    welcome && (
                         <span className={`fw-3${devName ? ' smooth-transition' : ''}`}>
                    {welcomeText}
                    <span className="cursor">|</span>
                </span> 
                    )
                }
                
                {(!glitch && !welcome ) ? "Portfolio" : null}
            </h1>
        </div>
    );
}

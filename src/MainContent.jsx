import { useEffect, useState } from 'react';

// Path: src/Loader.jsx

export default function MainContent() {



    return (
        <div id="main-content" className="wrap">
            <section id="description">

                <div id="presentation">
                    <h1>Florian Eeckhout</h1>
                    <h2>Développeur Web -- Freelance</h2>
                    <p>Je développe des applications web accessibles à tous, dédiées à la transition écologique.</p>
                </div>
                <div id="menu">
                    <ul>
                        <li><a href="#about">À propos</a></li>
                        <li><a href="#xp">Expériences</a></li>
                        <li><a href="#project">Projets</a></li>
                        <li><a href="#skills">Compétences</a></li>
                    </ul>

                </div>
                <div id="socials">

                </div>
            </section>

            <section id="resume">
                <h1>Ici mes XP</h1>
                <div id="about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quas ad suscipit itaque laboriosam veritatis numquam ea consectetur voluptatem. Adipisci nam at, voluptas in nostrum ratione pariatur sed eius consectetur.
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed voluptatibus beatae earum temporibus architecto asperiores amet, quos, tempore ducimus cumque minus commodi recusandae ullam fuga ea in enim blanditiis corrupti!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, mollitia necessitatibus alias incidunt, nostrum modi id ullam voluptatem fuga animi quibusdam ut, aliquid sint unde deleniti repellat explicabo. Laborum praesentium provident ex rerum odio cum obcaecati tempora! Alias qui doloribus distinctio facere voluptas, iste quaerat. Alias illum, consequatur maxime non tempore animi, quasi eos quod ullam magni similique libero officia dolorem delectus eligendi totam atque voluptas pariatur doloribus tenetur nulla placeat neque natus dolorum! Pariatur, exercitationem? Unde, cum nemo iusto neque libero odio sequi accusamus assumenda quis magni, ratione officia sit praesentium aspernatur dolores soluta velit dolor ipsam cumque consequatur aliquam quas vel amet laudantium! Et esse vero pariatur consectetur ex nisi amet soluta, magni alias suscipit aspernatur ipsum consequatur dolor earum asperiores tenetur, quam excepturi, architecto atque tempora sequi! Tenetur repudiandae hic magni quisquam eius rerum explicabo harum, autem quasi nemo quos assumenda officia similique voluptatibus voluptates facilis aliquam eum quo? Tempora nesciunt dolor voluptatibus sed corporis, officiis saepe voluptates inventore, molestiae totam doloribus id iste odit mollitia minus incidunt dolores excepturi delectus tenetur at, dignissimos impedit provident illo! Rem quibusdam nesciunt est odio. Eos, earum deleniti. Recusandae hic non accusamus laborum cupiditate sed cumque doloremque doloribus neque. Ducimus!</p>
                </div>

                <div id="xp">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quas ad suscipit itaque laboriosam veritatis numquam ea consectetur voluptatem. Adipisci nam at, voluptas in nostrum ratione pariatur sed eius consectetur.
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed voluptatibus beatae earum temporibus architecto asperiores amet, quos, tempore ducimus cumque minus commodi recusandae ullam fuga ea in enim blanditiis corrupti!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, mollitia necessitatibus alias incidunt, nostrum modi id ullam voluptatem fuga animi quibusdam ut, aliquid sint unde deleniti repellat explicabo. Laborum praesentium provident ex rerum odio cum obcaecati tempora! Alias qui doloribus distinctio facere voluptas, iste quaerat. Alias illum, consequatur maxime non tempore animi, quasi eos quod ullam magni similique libero officia dolorem delectus eligendi totam atque voluptas pariatur doloribus tenetur nulla placeat neque natus dolorum! Pariatur, exercitationem? Unde, cum nemo iusto neque libero odio sequi accusamus assumenda quis magni, ratione officia sit praesentium aspernatur dolores soluta velit dolor ipsam cumque consequatur aliquam quas vel amet laudantium! Et esse vero pariatur consectetur ex nisi amet soluta, magni alias suscipit aspernatur ipsum consequatur dolor earum asperiores tenetur, quam excepturi, architecto atque tempora sequi! Tenetur repudiandae hic magni quisquam eius rerum explicabo harum, autem quasi nemo quos assumenda officia similique voluptatibus voluptates facilis aliquam eum quo? Tempora nesciunt dolor voluptatibus sed corporis, officiis saepe voluptates inventore, molestiae totam doloribus id iste odit mollitia minus incidunt dolores excepturi delectus tenetur at, dignissimos impedit provident illo! Rem quibusdam nesciunt est odio. Eos, earum deleniti. Recusandae hic non accusamus laborum cupiditate sed cumque doloremque doloribus neque. Ducimus!</p>

                </div>

                <div id="project">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quas ad suscipit itaque laboriosam veritatis numquam ea consectetur voluptatem. Adipisci nam at, voluptas in nostrum ratione pariatur sed eius consectetur.
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, mollitia necessitatibus alias incidunt, nostrum modi id ullam voluptatem fuga animi quibusdam ut, aliquid sint unde deleniti repellat explicabo. Laborum praesentium provident ex rerum odio cum obcaecati tempora! Alias qui doloribus distinctio facere voluptas, iste quaerat. Alias illum, consequatur maxime non tempore animi, quasi eos quod ullam magni similique libero officia dolorem delectus eligendi totam atque voluptas pariatur doloribus tenetur nulla placeat neque natus dolorum! Pariatur, exercitationem? Unde, cum nemo iusto neque libero odio sequi accusamus assumenda quis magni, ratione officia sit praesentium aspernatur dolores soluta velit dolor ipsam cumque consequatur aliquam quas vel amet laudantium! Et esse vero pariatur consectetur ex nisi amet soluta, magni alias suscipit aspernatur ipsum consequatur dolor earum asperiores tenetur, quam excepturi, architecto atque tempora sequi! Tenetur repudiandae hic magni quisquam eius rerum explicabo harum, autem quasi nemo quos assumenda officia similique voluptatibus voluptates facilis aliquam eum quo? Tempora nesciunt dolor voluptatibus sed corporis, officiis saepe voluptates inventore, molestiae totam doloribus id iste odit mollitia minus incidunt dolores excepturi delectus tenetur at, dignissimos impedit provident illo! Rem quibusdam nesciunt est odio. Eos, earum deleniti. Recusandae hic non accusamus laborum cupiditate sed cumque doloremque doloribus neque. Ducimus!</p>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed voluptatibus beatae earum temporibus architecto asperiores amet, quos, tempore ducimus cumque minus commodi recusandae ullam fuga ea in enim blanditiis corrupti!</p>
                </div>

                <div id="skills">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quas ad suscipit itaque laboriosam veritatis numquam ea consectetur voluptatem. Adipisci nam at, voluptas in nostrum ratione pariatur sed eius consectetur.
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, mollitia necessitatibus alias incidunt, nostrum modi id ullam voluptatem fuga animi quibusdam ut, aliquid sint unde deleniti repellat explicabo. Laborum praesentium provident ex rerum odio cum obcaecati tempora! Alias qui doloribus distinctio facere voluptas, iste quaerat. Alias illum, consequatur maxime non tempore animi, quasi eos quod ullam magni similique libero officia dolorem delectus eligendi totam atque voluptas pariatur doloribus tenetur nulla placeat neque natus dolorum! Pariatur, exercitationem? Unde, cum nemo iusto neque libero odio sequi accusamus assumenda quis magni, ratione officia sit praesentium aspernatur dolores soluta velit dolor ipsam cumque consequatur aliquam quas vel amet laudantium! Et esse vero pariatur consectetur ex nisi amet soluta, magni alias suscipit aspernatur ipsum consequatur dolor earum asperiores tenetur, quam excepturi, architecto atque tempora sequi! Tenetur repudiandae hic magni quisquam eius rerum explicabo harum, autem quasi nemo quos assumenda officia similique voluptatibus voluptates facilis aliquam eum quo? Tempora nesciunt dolor voluptatibus sed corporis, officiis saepe voluptates inventore, molestiae totam doloribus id iste odit mollitia minus incidunt dolores excepturi delectus tenetur at, dignissimos impedit provident illo! Rem quibusdam nesciunt est odio. Eos, earum deleniti. Recusandae hic non accusamus laborum cupiditate sed cumque doloremque doloribus neque. Ducimus!</p>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed voluptatibus beatae earum temporibus architecto asperiores amet, quos, tempore ducimus cumque minus commodi recusandae ullam fuga ea in enim blanditiis corrupti!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam perspiciatis, eaque incidunt, deleniti modi saepe sed aliquam odio sint illum nam reiciendis explicabo id delectus repudiandae voluptatem inventore nobis numquam.</p>
                </div>
            </section>

        </div>
    );
}

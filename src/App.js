import './App.css';

function App() {
    return (
        <>
            <header>
                <div className='first__row'>
                    <p>Info</p>
                    <p>Interaction</p>
                </div>
                <h1>MANHATTAN</h1>
                <div className='second__row'>
                    <p>Project</p>
                    <p>2023</p>
                </div>
                <div className='background__img' />
            </header>

            <section className='description__first'>
                <div className='description__first__element'>00</div>
                <div className='description__first__element'>About</div>
                <div className='description__first__element'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla quae, nobis, perspiciatis ullam iure nostrum placeat
                    expedita ex voluptatum quas sed et ipsa. Tempora eligendi
                    ipsum modi nostrum temporibus repellendus.
                </div>
            </section>

            <section className='about__us'>
                <h1>ABOUT US</h1>
                <aside className='about__us__informations'>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Minus cum at sunt animi nostrum praesentium ut
                        porro molestias deleniti, accusantium incidunt eum aut
                        perferendis ex autem, minima suscipit corrupti quaerat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis unde veritatis officiis distinctio.
                        Sapiente, sint, minus, sit at culpa illo quasi iure
                        adipisci aliquid velit numquam ab mollitia aperiam
                        consectetur? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quis magni consequatur cupiditate
                        cumque quibusdam sunt eligendi assumenda error debitis
                        qui tempora, modi vel nobis harum pariatur, molestiae
                        sapiente vitae ratione!
                    </p>
                    <div className='about__us__details'>
                        <div>
                            <p>5M</p>
                            Downloads
                        </div>
                        <div>
                            <p>2</p>
                            Countries
                        </div>
                        <div>
                            <p>7</p>
                            Offices
                        </div>
                        <div>
                            <p>90</p>Clients
                        </div>
                    </div>
                </aside>
            </section>

            <article className='about__us__location'>
                <div className='about__us__location__place'>
                    <h2>CityName</h2>
                    <p>StreetName, 16</p>
                </div>
                <p className='about__us__location__details'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto laboriosam excepturi quae, commodi illo
                    cupiditate blanditiis, ipsum, quas repudiandae ut nesciunt
                    aperiam delectus temporibus quasi consequatur possimus
                    praesentium vero deleniti.
                </p>
            </article>

            <section id='map'>
                <div className='about__us__map' />
            </section>

            <section className='architecture'>
                <div className='architecture__description'>
                    <h3>Architecture</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Debitis earum, harum molestias labore atque soluta
                        fugiat totam consequatur mollitia a quo veniam fuga
                        molestiae enim, dolorem veritatis. Eaque, id.
                        Repellendus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veniam porro quod fuga quo velit rerum consequatur quia
                        sint facilis debitis architecto, natus dolorem est
                        voluptatum ea quasi! Iure, accusantium accusamus.
                    </p>
                </div>
                <div className='architecture__picture' />
            </section>
        </>
    );
}

export default App;

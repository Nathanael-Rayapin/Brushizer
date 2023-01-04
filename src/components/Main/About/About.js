import './style.scss';

function About() {
    return (
        <>
            <section className="about">
                <div className="about_title">
                    <h2><span>About</span> the project</h2>
                </div>
                <div className="about_container">
                    <div className="about_container_wrapper">
                        <div className="about_container_wrapper_cards">

                            <div className="about_container_wrapper_cards_item">
                                <div className="about_container_wrapper_cards_item_unique">
                                    <p>Chaque Brushizer a été crée sans Candy Machine. Mezange a généré chaque NFT à la main sans utiliser de script. Les couleurs des backgrounds sont uniques à chaque NFT ce qui ajoute de la rareté à celui qui le detiens.</p>
                                    <div className="about_container_wrapper_cards_item_unique_content">
                                        <h2>UNIQUE NFT</h2>
                                        <a href="/"><button className="about_container_wrapper_cards_item_unique_content--btn">Buy Now</button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="about_container_wrapper_cards_item">
                                <div className="about_container_wrapper_cards_item_shop">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam asperiores sit, error
                                doloremque laboriosam cumque obcaecati commodi aspernatur ut fugiat dolorem odit
                                molestias eveniet quo! Minus reprehenderit ab necessitatibus dignissimos ex dolor?</p>
                                    <div className="about_container_wrapper_cards_item_shop_content">
                                        <h2>SHOP</h2>
                                        <a href="/"><button className="about_container_wrapper_cards_item_shop_content--btn">Soon 2024</button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="about_container_wrapper_cards_item">
                                <div className="about_container_wrapper_cards_item_social">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam asperiores sit, error
                                doloremque laboriosam cumque obcaecati commodi aspernatur ut fugiat dolorem odit
                                molestias eveniet quo! Minus reprehenderit ab necessitatibus dignissimos ex dolor?</p>
                                    <div className="about_container_wrapper_cards_item_social_content">
                                        <h2>SOCIAL</h2>
                                        <a href="/"><button className="about_container_wrapper_cards_item_social_content--btn">2024 - 2025</button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="about_container_wrapper_cards_item">
                                <div className="about_container_wrapper_cards_item_charity">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam asperiores sit, error
                                doloremque laboriosam cumque obcaecati commodi aspernatur ut fugiat dolorem odit
                                molestias eveniet quo! Minus reprehenderit ab necessitatibus dignissimos ex dolor?</p>
                                    <div className="about_container_wrapper_cards_item_charity_content">
                                        <h2>CHARITY</h2>
                                        <a href="/"><button className="about_container_wrapper_cards_item_charity_content--btn">2024 - 2025</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about_container_image">
                    </div>
                </div>
            </section>
        </>

    );
}

export default About;

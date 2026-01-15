import styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles.section} id="about">
            <div className={styles.background_gradient} />

            <div className={styles.container}>
                <div className={styles.wrapper}>

                    <div className={styles.image_wrapper}>
                        <div className={styles.image_card}>
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl3fxumaL3HWuL_Od0pgWrCODVv3wQ2pV-gq2oTUWhDBEScxk9l5UkT9FMFxz25FY71pa9m62YkYi8iU6UtD758GaPDHXCsrMp7FrspeFa8DVc9T8hGgUlA0y9hs90iMVEv0TxPijD15hK6k4T_cd1Bi6aXNT_hN1fvRzLOq4XWJ_hN8JrVIAMFmX8pJ8msxj5zLkC94eOpPc70c__iundCzM4Uhzyl70YBZUroolwusFMI20BLFr81nWDybeHYw0YlH6I1LJj8ic"
                                alt="Deividi & Paula"
                                className={styles.image}
                            />

                            <div className={styles.image_overlay} />

                            <div className={styles.image_caption}>
                                <p className={styles.names}>Deividi &amp; Paula</p>
                                <p className={styles.role}>Fundadores &amp; Exploradores</p>
                            </div>
                        </div>

                        <div className={styles.corner_decoration} />
                    </div>

                    <div className={styles.content}>
                        <h2 className={styles.heading}>
                            Nós acreditamos em{" "}
                            <span className={styles.highlight}>consciente</span> observação.
                        </h2>

                        <div className={styles.text}>
                            <p>
                                A estrada não é apenas um meio de ir do ponto A ao ponto B. Para nós,
                                ela é uma entidade viva. Criamos o Vivendo em Viagem para documentar a
                                beleza crua e autêntica da América do Sul, longe das armadilhas para turistas.
                            </p>

                            <p>
                                Nossa jornada é sobre desacelerar. É sobre o café preparado
                                em um fogareiro de acampamento ao nascer do sol, as conversas com os moradores em
                                vilarejos esquecidos e o silêncio das vastas paisagens que
                                nos cercam.
                            </p>

                            <p className={styles.quote}>
                                "Viajar profundamente é o antídoto para uma vida agitada. Nós não apenas
                                consumimos destinos; nós habitamos o momento."
                            </p>
                        </div>

                        <div className={styles.cta}>
                            <a href="#" className={styles.button}>
                                Leia nossa história completa
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

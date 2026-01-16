import React from 'react';
import styles from './About.module.css';
import logo from '../../assets/bear.png'
import Footer from '../../components/Footer/Footer';

const About = () => {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.parallax_bg}></div>
                <div className={styles.hero_content}>
                    <h1 className={styles.hero_title}>Sobre Nós</h1>
                </div>
                <div className={styles.filter}></div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid_two_columns}>
                        <div className={styles.content_left}>
                            <h2 className={styles.section_title}>Somos Deividi & Paula</h2>
                            <div className={styles.text_content}>
                                <p>
                                    A paixão por explorar o desconhecido nos uniu em uma jornada que vai muito além de simples destinos
                                    turísticos. O Vivendo em Viagem nasceu da nossa vontade de compartilhar não apenas fotos bonitas, mas a
                                    realidade de uma vida consciente na estrada.
                                </p>
                                <p>
                                    Para nós, viajar é um processo de autoconhecimento. Deixamos para trás a rotina convencional para abraçar o
                                    mundo como nossa casa, aprendendo a cada quilômetro sobre sustentabilidade, respeito cultural e a beleza da
                                    simplicidade.
                                </p>
                            </div>
                        </div>

                        <div className={styles.image_container}>
                            <div className={styles.polaroid}>
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhjTL-KRBNwJjiCbIv-lSuRUAU9Y-y4QPnaaqApGazRziLwgaV_YBLpPlBN-yffzUQCyElTmWqAD7JzeMhZbOO_KL_1JbMcJaZoMQbCRb9o7I0a1PVtDnp0AeO8129PICWzJlV5YcSXD5I10cfbmDvW9GGEEyNji_HldIcfwERwaEKcQqzf9A8-Jl-buZLaGoK1FcZz9ERAo2LR7gFx2prtQVreZ3LJ7G7elFGxKHDkOsH-Rs0lewdgXuk5wR06rFZCZiT15ydgY4"
                                    alt="Deividi e Paula em uma de suas viagens"
                                    className={styles.main_photo}
                                />
                            </div>
                            <div className={styles.decor_circle}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.border_top}`}>
                <div className={styles.container}>
                    <div className={styles.grid_two_columns}>
                        <div className={styles.gallery_grid}>
                            <div className={styles.gallery_column}>
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCdi7Ku3O5Sm7pQEDrCkavp-K9hh3qu3fFk99W5EHaXluqQ3PjQzz0pm6hb-HlKV09aQhAbHjMwVL99i3f2iXevzCFMhGuGk2o3VU8ygNBgoLknoJMZZLVO3QRAU_1Vg64p_-Wxzlu1lw3cZQ2yQ8ZriJA5TSg0HnIarLB9Swdlv-1b8S0przrqSu41c9esc_8qzN8ojXGobUtAm85XFZuqElsmYcpjvjkG-GoVfM-tsJpyk9pQuMYUUhME2KLpSZmUDG9Ch2Fv-U"
                                    alt="Montanhas"
                                    className={styles.gallery_image}
                                />
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK-sy9Sz9nF8OWao7wsa1Ms9Q65CARVoOdane1HK5QsAkJWUlN4plJ4-Np5ha6jdROMe__UH7zpLJ6Bsx4-XWy7ezOAGjW7cz6RFGPWtrdoJMgQIheTWY4FW9n_wzj53LUgGMWEN6HVDpmm59KcsKviFnXZh__XfRb0QSVSuMD-_QS-00TOtHRmitaqIdwJkQWfCVXd93R2Zoc0kgH14V0Dvw_xxatXOsocT9VIzby_XYVKwnI-a5_hG-XdLqSD9fjFgeeOLzhzKw"
                                    alt="Estrada cênica"
                                    className={styles.gallery_image_tall}
                                />
                            </div>
                            <div className={styles.gallery_column}>
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ29bk2SP206pKpTMZvT_X9HTTReXRVvNIQ13_jWkbXblkwbcmqNhF3PdmuL_YGtSFV3Eh_FgoY1Nw-3MznF15sxGqQQHOz2EY6TiuHjG-fQ1sBYhh03kVLqMe7UNXXq9SNYLdvtFgdUCuXxPQLybX0Mwdj0mwWS6SO2_QViz0H8ULmHBXJnoyJBKM0OJhz3O40CI3_w8c5zy6E87bdBVCRFmjN0WOTUDuJ_8NhjzJEVKN056_DakbPocntzq3I-MMttvp-2Hh-Pc"
                                    alt="Lago sereno"
                                    className={styles.gallery_image_tall}
                                />
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuu_hE_28JNTnzBQ8ZJ9IPLYTuFGFYVXFIObUUyUxPdeSIvIIYGPJ5Oa42Lakc73DvO87m7penTLXB479-cNMIn09z-Hcz54qaRvi7KUMYeth9Nj3Ek00mj-tecdqieAJGoyzD5KNwI825EbKi8RqYTe3b_WaYWr1rPWJwF-Gg-DOGfoxCHU_lIepqgbal18hFS28qEGrm1287_L8VaQflprTIQ33dsbO7KNiRQDTowZnA9vScS5vXvKnqHonrkjRF8RK3m1ny2DQ"
                                    alt="Floresta"
                                    className={styles.gallery_image}
                                />
                            </div>
                        </div>

                        <div className={styles.content_right}>
                            <h2 className={styles.section_title}>Queremos te inspirar</h2>
                            <div className={styles.text_content}>
                                <p>
                                    Nossa missão é mostrar que uma vida nômade e consciente é possível. Através de nossos relatos, queremos
                                    inspirar você a buscar sua própria versão de liberdade, seja ela em uma viagem de final de semana ou em uma
                                    mudança radical de estilo de vida.
                                </p>
                                <p>
                                    Acreditamos que o turismo pode ser uma força para o bem. Compartilhamos dicas práticas de como minimizar seu
                                    impacto ambiental e maximizar sua conexão com os lugares que visita.
                                </p>

                                {/* <div className={styles.consciencia_tip}>
                                    <span className="material-symbols-outlined">public</span>
                                    <span>Consumo Consciente</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.community_section}>
                <div className={styles.container}>

                    <div className={styles.logo_container}>
                        <img src={logo} alt="" className={styles.community_logo} />
                    </div>


                    <h2 className={styles.community_title}>Comunidade Vivendo em Viagem</h2>

                    <p className={styles.community_text}>
                        Criamos a Comunidade Vivendo Em Viagem para conectar pessoas que amam viajar e querem aprender mais sobre esse
                        estilo de vida consciente e transformador.
                    </p>

                    <div className={styles.video_wrapper}>
                        <div className={styles.video_container}>
                            <div className={styles.video_frame}>
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBqx0u2gxCeg9YqXsI8SThFWhfsAaSfnP-AUE1XOgKyykhBLpwD3PoyiZ6SRufuzFekS312wwAz6tE1WhEDbcsgM4L0dM1-nbe2nwG-6uGR8W8htSMvbLGRsLo0B4iLVyVy7OqUTqI2p1NRI_sefpsVBXC7K_rqtrF1GC2S3DYxThSF9X6jo8KZrL4YdT4VCkB9YuXrfV2QLmloecSHlTjTigv8zts8BsRYVG90-idl8zW6Z3qbZ7_xIeBREGs8Pts9NVx4nyFqq4"
                                    alt="Thumbnail do vídeo da comunidade"
                                    className={styles.video_thumbnail}
                                />
                                <div className={styles.play_overlay}>
                                    <button className={styles.play_button}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" viewBox="0 0 30 36" fill="none">
                                            <path d="M10 26.75V9.25L23.75 18L10 26.75ZM12.5 22.1875L19.0625 18L12.5 13.8125V22.1875Z" fill="white" />
                                        </svg>
                                    </button>
                                </div>
                                <div className={styles.video_title_overlay}>
                                    <h3>Por que se tornar um apoiador do Vivendo...</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cta_wrapper}>
                        <a href="#" className={styles.cta_button}>
                            Quiero Saber Mais
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default About;
import styles from "./Header.module.css";
import video from "../../assets/header-video.mp4"

const Header = () => {
    return (
        <header className={styles.main_content}>
            <video className={styles.video} src={video} loop autoPlay muted ></video>
            <div className={styles.filter}></div>
            <div className={styles.text_content}>
                <h1 className={styles.title_first}>Viagens reais,</h1>
                <h1 className={styles.title_second}>Experiências vividas</h1>
                <p className={styles.subtitle}>Viagens autênticas, observação consciente e a arte de jornadas de longa duração. <br />Não apenas visitamos lugares; deixamos que eles nos transformem.</p>
                <a className={styles.link} href="https://www.youtube.com/@vivendoemviagem" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                        <path d="M7.91667 15.75L13.75 12L7.91667 8.25004V15.75ZM10 20.3334C8.84723 20.3334 7.76389 20.1146 6.75001 19.6771C5.73612 19.2396 4.85417 18.6459 4.10417 17.8959C3.35417 17.1459 2.76042 16.2639 2.32292 15.25C1.88542 14.2362 1.66667 13.1528 1.66667 12C1.66667 10.8473 1.88542 9.76393 2.32292 8.75004C2.76042 7.73615 3.35417 6.85421 4.10417 6.10421C4.85417 5.35421 5.73612 4.76046 6.75001 4.32296C7.76389 3.88546 8.84723 3.66671 10 3.66671C11.1528 3.66671 12.2361 3.88546 13.25 4.32296C14.2639 4.76046 15.1458 5.35421 15.8958 6.10421C16.6458 6.85421 17.2396 7.73615 17.6771 8.75004C18.1146 9.76393 18.3333 10.8473 18.3333 12C18.3333 13.1528 18.1146 14.2362 17.6771 15.25C17.2396 16.2639 16.6458 17.1459 15.8958 17.8959C15.1458 18.6459 14.2639 19.2396 13.25 19.6771C12.2361 20.1146 11.1528 20.3334 10 20.3334ZM10 18.6667C11.8611 18.6667 13.4375 18.0209 14.7292 16.7292C16.0208 15.4375 16.6667 13.8612 16.6667 12C16.6667 10.1389 16.0208 8.56254 14.7292 7.27087C13.4375 5.97921 11.8611 5.33337 10 5.33337C8.13889 5.33337 6.56251 5.97921 5.27084 7.27087C3.97917 8.56254 3.33334 10.1389 3.33334 12C3.33334 13.8612 3.97917 15.4375 5.27084 16.7292C6.56251 18.0209 8.13889 18.6667 10 18.6667Z" fill="white" />
                    </svg>
                    Nossa comunidade
                </a>
            </div>
        </header>
    )
}

export default Header;
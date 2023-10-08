import styles from './Header.module.css'

export function Header(){
    return (
        <header className={styles.container}>
            <h1>
                <span>Quiz</span>
                <span>Master</span>
            </h1>
        </header>
    )
}
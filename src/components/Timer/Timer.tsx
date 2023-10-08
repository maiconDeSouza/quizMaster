import styles from './Timer.module.css'

interface Iprops {
    onSetInitQuiz: () => void
}

export function Timer({onSetInitQuiz}:Iprops){
    return (
        <div className={styles.wrapper} onClick={() => onSetInitQuiz()}>
            <span>10</span>
            <span>:</span>
            <span>00</span>
        </div>
    )
}
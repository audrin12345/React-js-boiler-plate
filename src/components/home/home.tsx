import styles from './home.module.scss'


interface homeProps{
    title: string
}

const Home: React.FC<homeProps> = ({title}) =>{

    return (
        <div className={styles.component}>
            <h1 className={styles.headline}>{title}</h1>
        </div>
    );
}

export default Home
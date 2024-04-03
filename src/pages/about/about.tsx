import { useContext } from "react";
import context from "../../context/context";
import styles from './about.module.scss';

interface aboutProps{
    title:string
}

const About:React.FC<aboutProps> =({title}) =>{
    const setContextValue = useContext(context)
    setContextValue.setTitle && setContextValue?.setTitle(title)
   
    return (
        <div className={styles.component}>
            <h1 className={styles.headline}>
                {title}
            </h1>
            <div>Context Value</div>
            <span>{setContextValue.title}</span>
        </div>
    );
}

export default About
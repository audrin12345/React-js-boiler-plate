import { useContext } from "react";
import testcontext from "../../context/testcontext";
import styles from './about.module.scss';

interface aboutProps{
    title:string
}

const About:React.FC<aboutProps> =({title}) =>{
    const context = useContext(testcontext)
    context.setTitle && context?.setTitle('test')
    console.log(context.title)
    return (
        <div className={styles.component}>
            <h1 className={styles.headline}>
                {title}
            </h1>
        </div>
    );
}

export default About
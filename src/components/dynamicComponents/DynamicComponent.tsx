import { ReactElement } from "react";

interface DynamicComponentProps{
    title: string;
    content:string;
    router?:string
    component?:ReactElement
}
const DynamicComponent:React.FC<DynamicComponentProps> =({title,content}) => {

        return (
            <div>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        )
    
}
export default DynamicComponent
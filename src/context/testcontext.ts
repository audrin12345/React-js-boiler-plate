import { createContext } from "react"

export interface contextprops{
    title?: string,
    setTitle?:(value : string) => void
}

const testcontext = createContext<contextprops>({});

export default testcontext
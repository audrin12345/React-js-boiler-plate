import { createContext } from "react"

export interface contextprops{
    title?: string,
    setTitle?:(value : string) => void
}

const context = createContext<contextprops>({});

export default context
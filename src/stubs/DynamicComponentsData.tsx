import About from "../pages/about/about"
import Home from "../pages/home/home"

let components = [{
    "title": "Home",
    "content": "Rendered Home Component",
    "route": "/",
    'component': <Home title="Welcome Home" />
}, {
    "title": "Test1",
    "content": "Rendered Test1 Component",
    "route": "/test1",
    'component': <About title='Welcome About' />
}, {
    "title": "Test2",
    "content": "Rendered Test2 Component",
    "route": "/test2",
    'component': <About title='Welcome About' />
}, {
    "title": "Test3",
    "content": "Rendered Test3 Component",
    "route": "/test3",
    'component': <About title='Welcome About' />
}]
export default components
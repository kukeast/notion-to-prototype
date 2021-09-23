
import Prototype from "./views/Prototype";
import { Route } from "react-router";
import Editor from "./views/Editor";
import Landing from "./views/Landing";

function App() {
    return(
        <>
            {/* <GlobalFonts/>  */}
            <Route path="/" exact={true} component={Landing}/>
            <Route path="/preview/:uri" component={Editor}/>
            <Route path="/prototype/:uri" component={Prototype} />
        </>
    )
}

export default App;

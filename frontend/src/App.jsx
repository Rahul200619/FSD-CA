import {BrowserRouter as Router,Routes,Route} from "react";
import TestimonialCard from "./components/TestimonialCard";
import API from "./api"

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<TestimonialCard/>} />
            </Routes>
        </Router>
    )
}
export default App;
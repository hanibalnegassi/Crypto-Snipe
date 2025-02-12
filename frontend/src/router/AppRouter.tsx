import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "../components/landingpage/Landing"
import ConnectWallet from "../components/connectwallet/ConnectWallet"

export default function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} /> 
                <Route path="/connect-wallet" element={<ConnectWallet />} />
            </Routes>
        </Router>
    )
}
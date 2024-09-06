import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import DashboardPage from "./components/DashboardPage";
import GenerateNotesPage from "./components/GenerateNote";
import GenerateTestPage from "./components/GenerateTestPage";
import PublishNotesPage from "./components/PublishNotesPage";
import NotesReadingPage from "./components/NotesReadingPage"

// Import other components as needed


const App = () => {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<MainLayout />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/generate-test" element={<GenerateTestPage />} />
                    <Route path="/publish-notes" element={<PublishNotesPage />} />
                    <Route path="/generate-notes" element={<GenerateNotesPage />} />
                    <Route path="/notes-reading" element={<NotesReadingPage />} />
                </Route>


                {/* Routes without MainLayout */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />


            </Routes>
        </Router>
    );
};

export default App;

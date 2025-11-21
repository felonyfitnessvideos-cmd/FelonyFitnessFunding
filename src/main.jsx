import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Programs from "./pages/Programs.jsx";
import Resources from "./pages/Resources.jsx";
import Sponsor from "./pages/Sponsor.jsx";
import BusinessPlan from "./pages/BusinessPlan.jsx";
import Support from "./pages/Support.jsx";
import Events from "./pages/Events.jsx";
import JoinPrograms from "./pages/JoinPrograms.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import VolunteerForm from "./pages/VolunteerForm.jsx";
import Impact from "./pages/Impact.jsx";
import Waitlist from "./pages/Waitlist.jsx";
import Board from "./pages/Board.jsx";
import BoardForm from "./pages/BoardForm.jsx"; 
import AdminPage from './pages/AdminPage.jsx';
import Modal from 'react-modal';
import AnalyticsPage from './pages/AnalyticsPage.jsx';
import UnsubscribePage from './pages/UnsubscribePage.jsx';
import UnsubscribeTrainer from './pages/Unsubscribe-trainer.jsx';
import LoginPage from './pages/LoginPage.jsx'; 
import ProtectedRoute from './components/ProtectedRoute.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfUse from './pages/TermsOfUse.jsx';

Modal.setAppElement('#root'); 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop /> {/* ensures pages open at the top */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/events" element={<Events />} />
        <Route path="/join-programs" element={<JoinPrograms />} />
        <Route path="/support" element={<Support />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/volunteerform" element={<VolunteerForm />} />
        <Route path="/businessplan" element={<BusinessPlan />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/board" element={<Board />} />
        <Route path="/boardform" element={<BoardForm />} />		
		<Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>}  />
		<Route path="/admin/analytics" element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>}  />
		<Route path="/unsubscribe" element={<UnsubscribePage />} /> 
		<Route path="/unsubscribe-trainer" element={<UnsubscribeTrainer />} /> 
		<Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
		<Route path="/terms-of-use" element={<TermsOfUse />} /> 
		<Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

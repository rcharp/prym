import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuoteModalProvider } from "./components/QuoteModal";
import Index from "./pages/Index";
import ReviewPage from "./pages/ReviewPage";
import YardMaintenancePage from "./pages/YardMaintenancePage";
import PostEvictionPage from "./pages/PostEvictionPage";
import VacantPropertyPage from "./pages/VacantPropertyPage";
import TreeServicesPage from "./pages/TreeServicesPage";
import RentalCleansPage from "./pages/RentalCleansPage";
import ClassicLawnPage from "./pages/services/ClassicLawnPage";
import PremiumLawnPage from "./pages/services/PremiumLawnPage";
import UltimateMaintenancePage from "./pages/services/UltimateMaintenancePage";
import MulchSodPage from "./pages/services/MulchSodPage";
import PlantingPage from "./pages/services/PlantingPage";
import TreeShrubPage from "./pages/services/TreeShrubPage";
import PressureWashingPage from "./pages/services/PressureWashingPage";
import GutterCleaningPage from "./pages/services/GutterCleaningPage";
import RoofDebrisPage from "./pages/services/RoofDebrisPage";
import TrashOutPage from "./pages/services/TrashOutPage";
import TampaPage from "./pages/areas/TampaPage";
import SarasotaPage from "./pages/areas/SarasotaPage";
import OrlandoPage from "./pages/areas/OrlandoPage";
import BradentonPage from "./pages/areas/BradentonPage";
import ClearwaterPage from "./pages/areas/ClearwaterPage";
import LakelandPage from "./pages/areas/LakelandPage";
import StPetersburgPage from "./pages/areas/StPetersburgPage";
import EllentonPage from "./pages/areas/EllentonPage";
import PalmettoPage from "./pages/areas/PalmettoPag";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import QuotePage from "./pages/QuotePage";
import HVACTipsPage from "./pages/HVACTipsPage";
import TipDetailPage from "./pages/TipDetailPage";
import NotFound from "./pages/NotFound";
import UnsubscribePage from "./pages/UnsubscribePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <QuoteModalProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/review" element={<ReviewPage />} />
            {/* Core Programs */}
            <Route path="/services/classic-lawn" element={<ClassicLawnPage />} />
            <Route path="/services/premium-lawn" element={<PremiumLawnPage />} />
            <Route path="/services/ultimate-maintenance" element={<UltimateMaintenancePage />} />
            {/* A La Carte */}
            <Route path="/services/mulch-sod" element={<MulchSodPage />} />
            <Route path="/services/planting" element={<PlantingPage />} />
            <Route path="/services/tree-shrub" element={<TreeShrubPage />} />
            {/* MORE Factor */}
            <Route path="/services/pressure-washing" element={<PressureWashingPage />} />
            <Route path="/services/gutter-cleaning" element={<GutterCleaningPage />} />
            <Route path="/services/roof-debris" element={<RoofDebrisPage />} />
            <Route path="/services/trash-out" element={<TrashOutPage />} />
            <Route path="/services/make-ready" element={<RentalCleansPage />} />
            <Route path="/services/post-eviction" element={<PostEvictionPage />} />
            <Route path="/services/home-watch" element={<TreeServicesPage />} />
            {/* Legacy routes */}
            <Route path="/services/yard-maintenance" element={<YardMaintenancePage />} />
            <Route path="/services/lawn-landscape" element={<YardMaintenancePage />} />
            <Route path="/services/vacant-property" element={<VacantPropertyPage />} />
            <Route path="/services/debris-removal" element={<VacantPropertyPage />} />
            <Route path="/services/tree-services" element={<TreeServicesPage />} />
            <Route path="/services/rental-cleans" element={<RentalCleansPage />} />
            {/* Areas */}
            <Route path="/areas/tampa" element={<TampaPage />} />
            <Route path="/areas/st-petersburg" element={<StPetersburgPage />} />
            <Route path="/areas/clearwater" element={<ClearwaterPage />} />
            <Route path="/areas/bradenton" element={<BradentonPage />} />
            <Route path="/areas/palmetto" element={<PalmettoPage />} />
            <Route path="/areas/ellenton" element={<EllentonPage />} />
            <Route path="/areas/sarasota" element={<SarasotaPage />} />
            <Route path="/areas/orlando" element={<OrlandoPage />} />
            <Route path="/areas/lakeland" element={<LakelandPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/tips" element={<HVACTipsPage />} />
            <Route path="/tips/:slug" element={<TipDetailPage />} />
            <Route path="/unsubscribe" element={<UnsubscribePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QuoteModalProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

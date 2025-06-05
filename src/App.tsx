
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation"; 
import Index from "./pages/Index";
import About from "./pages/About";
import AboutLife from "./pages/AboutLife";
import AboutSchool from "./pages/AboutSchool";
import AboutFriends from "./pages/AboutFriends";
import AboutPhilosophy from "./pages/AboutPhilosophy";
import Design from "./pages/Design";
import DesignPortfolio from "./pages/DesignPortfolio";
import DesignLearning from "./pages/DesignLearning";
import DesignTools from "./pages/DesignTools";
import Gallery from "./pages/Gallery";
import GalleryFriends from "./pages/GalleryFriends";
import GallerySchool from "./pages/GallerySchool";
import GalleryDesigns from "./pages/GalleryDesigns";
import Code from "./pages/Code";
import CodeLanguages from "./pages/CodeLanguages";
import CodeProjects from "./pages/CodeProjects";
import Advice from "./pages/Advice";
import AdviceFriends from "./pages/AdviceFriends";
import AdviceThoughts from "./pages/AdviceThoughts";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <Navigation /> 
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/life" element={<AboutLife />} />
          <Route path="/about/school" element={<AboutSchool />} />
          <Route path="/about/friends" element={<AboutFriends />} />
          <Route path="/about/philosophy" element={<AboutPhilosophy />} />
          <Route path="/design" element={<Design />} />
          <Route path="/design/portfolio" element={<DesignPortfolio />} />
          <Route path="/design/learning" element={<DesignLearning />} />
          <Route path="/design/tools" element={<DesignTools />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/friends" element={<GalleryFriends />} />
          <Route path="/gallery/school" element={<GallerySchool />} />
          <Route path="/gallery/designs" element={<GalleryDesigns />} />
          <Route path="/code" element={<Code />} />
          <Route path="/code/languages" element={<CodeLanguages />} />
          <Route path="/code/projects" element={<CodeProjects />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/advice/friends" element={<AdviceFriends />} />
          <Route path="/advice/thoughts" element={<AdviceThoughts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

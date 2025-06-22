import ContactMe from "@/components/Client-side/ContactMe";
import Footer from "@/components/Client-side/Footer";
import ProjectCard from "@/components/Client-side/ProjectCard";
import PersonalPortfolioCard from "@/components/Client-side/Profile-Card";
import EducationCard from "@/components/Client-side/EducationCard";
import ScrollToTopButton from "@/components/Client-side/ScrollToTopButton";
import Technologies from "@/components/Client-side/Technologies";


export default function Home() {
  return (
    <>
    <div>
      <PersonalPortfolioCard />
    </div>
    <div id="Education">
    <EducationCard
  title="🎓 Education"
  description="My academic journey towards mastering technology and creativity."
  educationEntries={[
    {
      degree: "Bachelor of Science in Software Engineering ",
      school: "king fahd university of petroleum and minerals",
      years: "2025",
      details: "Focused on Full-Stack Development, Software Engineering Principles, and UI/UX Design Graduated.",
      logoSrc: "/KFUPM.png" // replace with your actual logo path
    }
  ]}
    />
    <div id="Tech">
      <Technologies />
    </div>
    </div>
    <div id="Project">
      <ProjectCard
        title="Brute Force Simulation and Mitigation"
        description="Two Python scripts demonstrating brute force attacks and defensive mitigations, focusing on FTP services using ftplib and iptables."
        technologies={['Python', 'Networking', 'Cybersecurity', 'FTP', 'iptables']}
        repoUrl="https://github.com/Fares-Bahamdan/ICS344_ProjectCode"
        logoSrc="/KaliLinux.png"
      />
      
      <ProjectCard
        title="Uber Data Analysis and Mileage Prediction"
        description="An end-to-end project featuring data cleaning, visualization, feature engineering, regression modeling, and performance tuning to predict ride distances using Uber dataset."
        technologies={['Python', 'Pandas', 'Seaborn', 'Scikit-learn', 'Machine Learning']}
        repoUrl="https://github.com/Fares-Bahamdan/Uber_Dataset"
        logoSrc="/ML.png"

      />
            <ProjectCard
        title="Namaa Insights"
        description="A User Friendly Stock insight for the Saudi Stock Exchange Market (TADAWUL) it is developed to equip investors with smarter decision-making tools. This platform combines data analytics, AI-powered insights, real-time market news, and personalized reports, all tailored to support informed investment strategies."
        technologies={['Nextjs', 'Tailwind', 'Supabase', 'OpenAI']}
        repoUrl="https://github.com/ZiyadG7/Namaa"
        logoSrc="/Namaa.png"
      />
    </div>
    <div id="Contact">
    <ContactMe />
    </div>
    <ScrollToTopButton />
    <Footer />
    </>
  );
}


import { AboutMe } from "../Component/AboutMe"
import { ContactSection } from "../Component/ContactSection"
import { Footer } from "../Component/Footer"
import { HeroSection } from "../Component/HeroSection"
import { NavBar } from "../Component/NavBar"
import { ProjectsSection } from "../Component/ProjectSection"
import { SkillSection } from "../Component/SkillSection"
import { StarBackground } from "../Component/StarBackGround"
import { Toggle } from "../Component/Toggle"


export const Home =()=>{
    return(
<div className="min-h-screen bg-background text-foreground  overflow-x-hidden">
<Toggle/>
<StarBackground/>
<NavBar/>
<main>
 <HeroSection/>
 <AboutMe/>
 <SkillSection/>
 <ProjectsSection/>
 <ContactSection/>
</main>
        <Footer/>
    </div>
    )
}

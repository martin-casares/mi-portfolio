import './App.css';
import { NavbarFlow } from './components/NavbarFlow';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { MiFooter } from './components/MiFooter';
import { EXPERIENCE, PROJECTS, SKILLS } from './utils/data.jsx';
import { Skills } from './components/Skills';

function App() {
	return (
		<>
			<div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
				<div className="px-8">
					<NavbarFlow />
					<Hero />
					<Projects id="projects" data={PROJECTS} />
					<Experience id="experience" data={EXPERIENCE} />
					<Skills data={SKILLS} />
					<Contact />
					<MiFooter />
				</div>
			</div>
		</>
	);
}

export default App;

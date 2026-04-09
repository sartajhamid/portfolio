import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'ServiceNow Developer',
    company: 'EnableNow Technology Solutions',
    period: 'Feb 2026 – Present',
    description: 'Developing and customizing ServiceNow applications, workflows, and integrations for enterprise clients.',
  },
  {
    role: 'ServiceNow Developer Intern',
    company: 'LeLafe IT Solutions Pvt. Ltd.',
    period: 'Sep 2025 – Feb 2026',
    description: 'Worked on ServiceNow platform customization, scripting, and administration tasks during internship.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <Briefcase className="text-primary" size={24} />
          <h2 className="font-heading text-3xl font-700">Work Experience</h2>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="card-glass rounded-2xl p-6 hover:glow transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="font-heading text-lg font-600 text-foreground">{exp.role}</h3>
                <span className="font-mono text-xs text-primary">{exp.period}</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium mb-2">{exp.company}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

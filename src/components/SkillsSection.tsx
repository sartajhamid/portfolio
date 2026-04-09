import { Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'ServiceNow',
    skills: ['Scripting (Client & Server)', 'Flow Designer', 'Service Portal', 'CMDB', 'Service Catalog', 'ACLs & Security', 'CSM', 'Glide API', 'UI Policies & Actions', 'Notifications & SLAs', 'Update Sets', 'ATF Testing'],
  },
  {
    title: 'Web Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'REST APIs'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'ServiceNow Studio', 'Postman'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <Code2 className="text-primary" size={24} />
          <h2 className="font-heading text-3xl font-700">Skills</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="card-glass rounded-2xl p-6">
              <h3 className="font-heading text-lg font-600 text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full bg-muted text-xs font-mono text-muted-foreground border border-border/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Award } from 'lucide-react';

const certs = [
  { title: 'ServiceNow Certified System Administrator (CSA)', issuer: 'ServiceNow' },
  { title: 'ServiceNow Certified Application Developer (CAD)', issuer: 'ServiceNow' },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <Award className="text-primary" size={24} />
          <h2 className="font-heading text-3xl font-700">Certifications</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {certs.map((c, i) => (
            <div key={i} className="card-glass rounded-2xl p-6 hover:glow transition-all duration-300">
              <h3 className="font-heading text-lg font-600 text-foreground mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground font-mono">{c.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

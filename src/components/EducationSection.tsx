import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <GraduationCap className="text-primary" size={24} />
          <h2 className="font-heading text-3xl font-700">Education</h2>
        </div>
        <div className="card-glass rounded-2xl p-6">
          <h3 className="font-heading text-lg font-600 text-foreground">Bachelor of Computer Applications (BCA)</h3>
          <p className="text-sm text-muted-foreground mt-1">University of Kashmir</p>
        </div>
      </div>
    </section>
  );
}

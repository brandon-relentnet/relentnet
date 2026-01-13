import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sow')({
  head: () => ({
    meta: [
      { title: 'Statement of Work | RelentNet' },
      {
        name: 'description',
        content:
          'Our standard Statement of Work defining service descriptions, deliverables, compliance standards, and project phases.',
      },
    ],
  }),
  component: StatementOfWork,
})

function StatementOfWork() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-sans selection:bg-[#E1BE4C] selection:text-black">
      {/* HERO SECTION */}
      <section className="pt-48 pb-20 px-6 md:px-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] animate-fade-in-up opacity-0">
            Statement <br />
            <span className="italic text-[#E1BE4C]">of Work.</span>
          </h1>
          <p
            className="mt-8 text-neutral-400 font-light text-lg leading-relaxed animate-fade-in-up opacity-0"
            style={{ animationDelay: '200ms' }}
          >
            RelentNet, LLC • Web & Application Development Services
            <br />
            Effective January 2026
          </p>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="pb-32 px-6 md:px-20 relative z-10">
        <div className="max-w-4xl mx-auto space-y-24">
          {/* 1. Services Description */}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '400ms' }}
          >
            <h2 className="text-[#E1BE4C] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              01. Services Description
            </h2>
            <div className="space-y-6 text-neutral-400 font-light leading-relaxed">
              <p>
                RelentNet’s Web and Application Development Services provide
                strategic design, development, deployment, and ongoing support.
                We emphasize scalable architecture, performance optimization,
                security best practices, and long-term maintainability.
              </p>
              <p>
                Built upon industry-standard frameworks and cloud infrastructure,
                our methodologies enable us to design, build, and maintain
                production-grade applications throughout their entire lifecycle.
              </p>
            </div>
          </div>

          {/* 2. Deliverables */}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '500ms' }}
          >
            <h2 className="text-[#E1BE4C] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              02. Deliverables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-white">Core Development</h3>
                <ul className="space-y-2 text-sm text-neutral-500 list-disc list-inside">
                  <li>Responsive Website Development</li>
                  <li>Web & Mobile Applications</li>
                  <li>API Integrations</li>
                  <li>UI/UX Design & Implementation</li>
                  <li>Database Optimization</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-white">Support & Recovery</h3>
                <p className="text-sm text-neutral-500">
                  We provide remediation for defects, regressions, or failures within applications maintained by us, ensuring stability for the approved production version.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Minimum Compliance Standards */}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '600ms' }}
          >
            <h2 className="text-[#E1BE4C] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              03. Minimum Compliance Standards
            </h2>
            <div className="border border-white/10 p-8 md:p-12 space-y-10 bg-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <h4 className="text-white text-sm uppercase tracking-widest font-bold">Systems Access</h4>
                  <p className="text-sm text-neutral-500">Client must provide access to required repositories, hosting, DNS, and third-party services.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white text-sm uppercase tracking-widest font-bold">Hosting & Backups</h4>
                  <p className="text-sm text-neutral-500">Applications must be hosted on vendor-supported cloud infrastructure (AWS, Vercel, etc.).</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white text-sm uppercase tracking-widest font-bold">Security</h4>
                  <p className="text-sm text-neutral-500">Sensitive data handling must comply with applicable laws (GDPR, HIPAA). HTTPS/TLS is mandatory.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white text-sm uppercase tracking-widest font-bold">Lifecycle</h4>
                  <p className="text-sm text-neutral-500">Applications must use frameworks actively supported by their vendors.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Project Phases */}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '700ms' }}
          >
            <h2 className="text-[#E1BE4C] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              04. Project Phases
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <span className="text-3xl font-serif text-white/20">01</span>
                <div>
                  <h3 className="font-serif text-2xl text-white mb-2">Strategy & Discovery</h3>
                  <p className="text-neutral-500 leading-relaxed">Alignment on project vision, technical architecture, and user needs. Outcome: A validated project blueprint.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-3xl font-serif text-white/20">02</span>
                <div>
                  <h3 className="font-serif text-2xl text-white mb-2">Build & Develop</h3>
                  <p className="text-neutral-500 leading-relaxed">Execution of design and technical implementation using iterative best practices. Outcome: A fully functional tested build.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-3xl font-serif text-white/20">03</span>
                <div>
                  <h3 className="font-serif text-2xl text-white mb-2">QA, Launch & Support</h3>
                  <p className="text-neutral-500 leading-relaxed">Validation, production deployment, and ongoing stabilization. Outcome: A production-ready solution with support mechanisms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

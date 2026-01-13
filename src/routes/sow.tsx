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
        <div className="max-w-4xl mx-auto space-y-32">
          {/* 1. Services Description */}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '300ms' }}
          >
            <h2 className="text-[#E1BE4C] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              01. Services Description
            </h2>
            <div className="space-y-6 text-neutral-400 font-light leading-relaxed">
              <p>
                RelentNet provides professional web development, application
                development, and digital product services designed to deliver
                scalable, secure, and maintainable software solutions.
              </p>
              <p>
                Services include strategy, design, development, testing, and
                deployment for web-based platforms, mobile applications, and
                custom software. Unless expressly stated otherwise, services
                under this SOW are <strong className="text-white">project-based</strong> and do not include
                indefinite or ongoing maintenance, monitoring, or support.
              </p>
            </div>
          </div>

          {/* 2. Deliverables Description */}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '400ms' }}
          >
            <h2 className="text-[#E1BE4C] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              02. Deliverables Description
            </h2>
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl text-white">
                    Core Development
                  </h3>
                  <ul className="space-y-2 text-sm text-neutral-500 list-disc list-inside">
                    <li>Responsive Website Design & Development</li>
                    <li>Custom Web Application Development</li>
                    <li>Mobile Applications (iOS, Android)</li>
                    <li>API Development & Integrations</li>
                    <li>UI/UX Design & Front-end Implementation</li>
                    <li>Database Architecture & Optimization</li>
                    <li>Deployment & Hosting Configuration</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-xl text-white">
                    Limited Post-Delivery Support
                  </h3>
                  <p className="text-sm text-neutral-500">
                    All products include a <strong className="text-white">90-day limited support period</strong> beginning upon delivery or launch.
                  </p>
                  <p className="text-xs text-neutral-600">
                    During this window, we address bugs or functional issues
                    directly attributable to delivered code. This does not
                    include new features, third-party failures, or modifications
                    by the Client.
                  </p>
                </div>
              </div>
              <div className="border-l border-[#E1BE4C]/30 pl-6 py-2">
                <p className="text-sm italic text-neutral-400">
                  Delivery of any product does not imply perpetual support,
                  updates, or maintenance unless expressly agreed to in a
                  separate Support & Maintenance Agreement.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Minimum Compliance Standards */}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '500ms' }}
          >
            <h2 className="text-[#E1BE4C] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              03. Minimum Compliance Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h4 className="text-white text-xs uppercase tracking-widest font-bold">
                  Access & Systems
                </h4>
                <p className="text-sm text-neutral-500">
                  Client must provide timely access to repositories, hosting
                  platforms, and third-party credentials.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-white text-xs uppercase tracking-widest font-bold">
                  Environment
                </h4>
                <p className="text-sm text-neutral-500">
                  Applications must operate on supported operating systems,
                  browsers, and cloud infrastructure.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-white text-xs uppercase tracking-widest font-bold">
                  Security
                </h4>
                <p className="text-sm text-neutral-500">
                  Operational security is a shared responsibility. HTTPS/TLS
                  encryption is mandatory for production.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Project Phases & Implementation */}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '600ms' }}
          >
            <h2 className="text-[#E1BE4C] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              04. Project Phases & Implementation
            </h2>
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <span className="text-3xl font-serif text-white/10">01</span>
                  <h3 className="text-white font-serif text-lg">Discovery</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Stakeholder alignment, technical feasibility, architecture
                    decisions, and roadmap definition.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="text-3xl font-serif text-white/10">02</span>
                  <h3 className="text-white font-serif text-lg">Planning</h3>
                  <h3 className="text-white font-serif text-lg">& Design</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    UI/UX wireframes, branding alignment, data modeling, and
                    final build specifications.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="text-3xl font-serif text-white/10">03</span>
                  <h3 className="text-white font-serif text-lg">Build &</h3>
                  <h3 className="text-white font-serif text-lg">Develop</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Implementation using CI/CD pipelines, version control, and
                    rigorous internal QA cycles.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="text-3xl font-serif text-white/10">04</span>
                  <h3 className="text-white font-serif text-lg">Launch &</h3>
                  <h3 className="text-white font-serif text-lg">Transition</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Final acceptance testing, production deployment, and
                    handover to limited support.
                  </p>
                </div>
              </div>
              <div className="bg-white/5 p-8 border border-white/10">
                <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-4">
                  Acceptance Window
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Upon delivery of any milestone or deployment, the Client has
                  <strong className="text-white"> ten (10) business days</strong> to review and provide written
                  notice of material nonconformity. If no notice is received,
                  the deliverable is deemed accepted.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Supported Technologies */}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '700ms' }}
          >
            <h2 className="text-[#E1BE4C] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              05. Supported Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <h4 className="text-white text-[10px] uppercase tracking-widest">
                  Frontend
                </h4>
                <p className="text-xs text-neutral-500">
                  React, Next.js, Vue, Angular
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-[10px] uppercase tracking-widest">
                  Backend
                </h4>
                <p className="text-xs text-neutral-500">
                  Node.js, Django, Laravel, Ruby on Rails
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-[10px] uppercase tracking-widest">
                  CMS
                </h4>
                <p className="text-xs text-neutral-500">
                  WordPress (Custom Themes/Plugins)
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-[10px] uppercase tracking-widest">
                  Cloud
                </h4>
                <p className="text-xs text-neutral-500">
                  AWS, Azure, Google Cloud, Vercel
                </p>
              </div>
            </div>
          </div>

          {/* 6. Service and Fee Schedule */}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '800ms' }}
          >
            <h2 className="text-[#E1BE4C] text-xs font-bold tracking-[0.3em] uppercase mb-6">
              06. Service and Fee Schedule
            </h2>
            <div className="space-y-8 text-neutral-400 font-light text-sm leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="text-white font-serif text-lg">Fees & Payments</h3>
                  <p>
                    Fees are defined in the Project Agreement or accepted quote.
                    Any service not explicitly defined is out-of-scope. Late
                    payments incur a 5% monthly fee.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-white font-serif text-lg">Termination</h3>
                  <p>
                    RelentNet may terminate at any time for any reason. Client
                    may terminate with 30 days’ notice but cannot terminate for
                    convenience once development has commenced.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FINAL ACCEPTANCE */}
          <div
            className="animate-fade-in-up opacity-0 pt-16 border-t border-white/10"
            style={{ animationDelay: '900ms' }}
          >
            <div className="max-w-2xl">
              <h3 className="font-serif text-3xl text-white mb-6">
                Execution & Acceptance
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                This SOW becomes effective upon signature, service selection via
                portal, or payment of any invoice. Payment constitutes
                acceptance of all related terms. Electronic acceptance and
                invoice payment are the legal equivalent of a handwritten
                signature.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default function RedPlanetSystemArchitectApp() {
  const steps = [
    {
      title: "1. Recruit",
      text: "Drive all traffic into one application funnel that captures core details and routes applicants into the system.",
    },
    {
      title: "2. Automate",
      text: "Send instant follow-up messages, assign first tasks, and log each applicant automatically.",
    },
    {
      title: "3. Activate",
      text: "Turn content into action with DM triggers, link-in-bio routing, and fast engagement loops.",
    },
    {
      title: "4. Scale",
      text: "Use templates, bulk outreach, and system dashboards so growth keeps moving with less manual work.",
    },
  ];

  const automations = [
    {
      name: "Applicant Intake",
      trigger: "Form submitted",
      result: "Save to database → send welcome message → assign starter task → notify manager",
    },
    {
      name: "Content Distribution",
      trigger: "New post ready",
      result: "Push to team channels → send caption pack → notify engagement squad → log post status",
    },
    {
      name: "Engagement Burst",
      trigger: "Post goes live",
      result: "Alert team in first 5 minutes → comments/likes/shares begin → traction gets boosted",
    },
    {
      name: "Message Blast",
      trigger: "Campaign launched",
      result: "Bulk send outreach templates for recruiting, activation, and audience movement",
    },
  ];

  const templates = [
    {
      label: "Recruitment DM",
      text: "We’re building Red Planet with serious people only. Send your name, country, skill, and WhatsApp to join the system.",
    },
    {
      label: "Welcome Message",
      text: "You’re in. Your first mission is below. Complete it fast, send proof, and stay active in the system.",
    },
    {
      label: "Content Activation",
      text: "New Red Planet content is live. Engage now, push it out, and report back once done.",
    },
    {
      label: "Reactivation",
      text: "You’ve gone quiet. If you still want to be part of Red Planet, respond now and get reactivated.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,60,0.22),transparent_30%),radial-gradient(circle_at_bottom,rgba(110,0,255,0.18),transparent_28%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-8 md:px-10 lg:px-12">
        <header className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between border-b border-white/10 pb-6">
          <div>
            <div className="text-xs tracking-[0.35em] uppercase text-white/50">System Architect</div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mt-2">RED PLANET CONTROL SYSTEM</h1>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="#funnel" className="px-4 py-2 rounded-2xl bg-white text-black font-semibold">Funnel</a>
            <a href="#automation" className="px-4 py-2 rounded-2xl border border-white/15 hover:border-white/30">Automation</a>
            <a href="#blast" className="px-4 py-2 rounded-2xl border border-white/15 hover:border-white/30">Message System</a>
          </div>
        </header>

        <section className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 mt-8 items-stretch">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 md:p-9 shadow-2xl">
            <div className="text-sm uppercase tracking-[0.3em] text-red-300/80">Build leverage, not just output</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-black leading-[0.95] max-w-3xl">
              A machine that brings people in, moves content out, and keeps engagement alive.
            </h2>
            <p className="mt-5 text-white/70 text-base md:text-lg max-w-2xl leading-7">
              This system turns Red Planet into a self-feeding operation. Every post leads somewhere. Every applicant enters a pipeline. Every action gets tracked.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {steps.map((step) => (
                <div key={step.title} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="text-lg font-bold">{step.title}</div>
                  <p className="mt-2 text-sm text-white/65 leading-6">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-500/10 to-white/5 p-7 md:p-8">
            <div className="text-sm uppercase tracking-[0.3em] text-red-200/70">Operator Panel</div>
            <div className="mt-5 grid gap-4">
              <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
                <div className="text-xs uppercase tracking-[0.25em] text-white/45">Today’s Objective</div>
                <div className="mt-2 text-2xl font-bold">Replace manual effort with systems</div>
              </div>
              <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
                <div className="text-xs uppercase tracking-[0.25em] text-white/45">Core Outcome</div>
                <div className="mt-2 text-white/80">Attention → funnel → tasks → engagement → growth</div>
              </div>
              <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
                <div className="text-xs uppercase tracking-[0.25em] text-white/45">Suggested Stack</div>
                <div className="mt-2 text-white/80">Landing page + form + Google Sheet/Airtable + n8n + email/DM templates</div>
              </div>
            </div>
          </div>
        </section>

        <section id="funnel" className="mt-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <div className="text-sm uppercase tracking-[0.3em] text-white/45">Recruitment Funnel</div>
            <h3 className="mt-3 text-3xl font-black">Join Red Planet Team</h3>
            <p className="mt-3 text-white/65 leading-7">Use this as the front door for all traffic from link in bio, posts, comments, and DMs.</p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="text-sm text-white/65 block mb-2">Full Name</label>
                <input className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-red-400" placeholder="Enter your name" />
              </div>
              <div>
                <label className="text-sm text-white/65 block mb-2">Country</label>
                <input className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-red-400" placeholder="Enter your country" />
              </div>
              <div>
                <label className="text-sm text-white/65 block mb-2">Skill</label>
                <input className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-red-400" placeholder="Designer, editor, networker, growth, etc." />
              </div>
              <div>
                <label className="text-sm text-white/65 block mb-2">WhatsApp</label>
                <input className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-red-400" placeholder="Enter WhatsApp number" />
              </div>
              <button
                type="button"
                className="w-full rounded-2xl bg-white text-black font-bold px-4 py-3 hover:opacity-90 transition"
              >
                Enter The System
              </button>
            </form>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <div className="text-sm uppercase tracking-[0.3em] text-white/45">Flow Map</div>
            <h3 className="mt-3 text-3xl font-black">How the funnel should work</h3>
            <div className="mt-6 grid gap-4">
              {[
                "Traffic comes from TikTok, Instagram, YouTube, DMs, comments, and bio links.",
                "Applicant submits form with name, country, skill, and WhatsApp.",
                "System sends the data into Google Sheets, Airtable, or a CRM database.",
                "n8n triggers a welcome message and sends the first task automatically.",
                "Applicant is tagged by skill and pushed into the correct worker pipeline.",
                "Manager gets notified only when action is needed.",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="w-9 h-9 shrink-0 rounded-full bg-white text-black font-black flex items-center justify-center">{idx + 1}</div>
                  <p className="text-white/75 leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="automation" className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8">
          <div className="text-sm uppercase tracking-[0.3em] text-white/45">Automation Workflows</div>
          <h3 className="mt-3 text-3xl font-black">n8n / AI system logic</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {automations.map((item) => (
              <div key={item.name} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="text-xl font-bold">{item.name}</div>
                <div className="mt-3 text-xs uppercase tracking-[0.25em] text-white/45">Trigger</div>
                <div className="mt-1 text-white/75">{item.trigger}</div>
                <div className="mt-4 text-xs uppercase tracking-[0.25em] text-white/45">Action</div>
                <div className="mt-1 text-white/75 leading-6">{item.result}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="blast" className="mt-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <div className="text-sm uppercase tracking-[0.3em] text-white/45">Email / Message Blast System</div>
            <h3 className="mt-3 text-3xl font-black">Templates that move people fast</h3>
            <div className="mt-6 space-y-4">
              {templates.map((template) => (
                <div key={template.label} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="font-bold">{template.label}</div>
                  <p className="mt-2 text-white/70 leading-6">{template.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <div className="text-sm uppercase tracking-[0.3em] text-white/45">Content → Funnel Connection</div>
            <h3 className="mt-3 text-3xl font-black">Every post should lead somewhere</h3>
            <div className="mt-6 grid gap-4">
              {[
                {
                  title: "Link in bio",
                  text: "Send all serious traffic to the recruitment page or activation page.",
                },
                {
                  title: "Comment trigger",
                  text: "Use comment prompts like ‘join Red Planet’ to trigger auto-DMs or manual fast replies.",
                },
                {
                  title: "DM keyword",
                  text: "Set keyword replies so anyone who messages gets pushed toward the funnel instantly.",
                },
                {
                  title: "Post sequence",
                  text: "One piece of content should point toward another so visibility compounds instead of dying fast.",
                },
              ].map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="font-bold text-lg">{card.title}</div>
                  <p className="mt-2 text-white/70 leading-6">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-500/10 via-white/5 to-purple-500/10 p-7 md:p-9">
          <div className="text-sm uppercase tracking-[0.3em] text-red-200/75">AI Prompt Bank</div>
          <h3 className="mt-3 text-3xl font-black">Use these prompts to expand the machine</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              "Design a viral content distribution system for a music brand that automates posting, engagement, and audience growth across TikTok, Instagram, and YouTube using minimal manual work.",
              "Create a high-converting landing page structure to recruit social media workers for a fast-growing music brand, optimized for viral traffic and quick sign-ups.",
              "Map out an automation workflow using n8n where new applicants are collected, messaged, assigned tasks, and tracked automatically.",
              "Design a system where a team can automatically engage with posts within the first 5 minutes to boost algorithm performance.",
              "Create a content loop system where each post drives traffic to more posts and increases visibility across multiple platforms.",
            ].map((prompt, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-black/35 p-5 text-white/80 leading-6">
                {prompt}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

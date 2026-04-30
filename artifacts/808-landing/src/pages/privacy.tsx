import LegalLayout from "@/components/LegalLayout";

const sections = [
  {
    num: "1",
    title: "Information we collect",
    body: "We collect only the information needed to provide and improve our products and services. This may include account details, contact information, usage data, product activity, communication preferences, and information you choose to provide when using our products.",
  },
  {
    num: "2",
    title: "Product and platform data",
    body: "Some products may connect to third-party platforms or services when authorized by the user. Where applicable, we only access data needed to provide the requested product functionality, such as displaying connected account information, organizing workflows, supporting approvals, or helping users manage their own business activities.",
  },
  {
    num: "3",
    title: "How we use information",
    body: "We use information to operate our products, provide customer support, improve user experience, maintain security, communicate service updates, and comply with legal obligations.",
  },
  {
    num: "4",
    title: "Human approval and product actions",
    body: "Where our products provide AI-assisted suggestions, planning tools, or workflow support, users remain responsible for reviewing and approving actions before they are finalized, sent, or published.",
  },
  {
    num: "5",
    title: "Product analytics",
    body: "We may use product analytics to understand how our products are used, identify issues, improve performance, and make the experience clearer and more useful. Where possible, analytics are aggregated or anonymized.",
  },
  {
    num: "6",
    title: "Cookies",
    body: "We may use cookies or similar technologies to keep users signed in, remember preferences, improve performance, and understand how our website is used.",
  },
  {
    num: "7",
    title: "Third-party services",
    body: "We may use trusted third-party providers for hosting, analytics, communications, authentication, storage, payments, or product integrations. These providers are only used where necessary to operate or improve our services.",
  },
  {
    num: "8",
    title: "Data retention",
    body: "We retain information only for as long as necessary to provide our services, meet legal obligations, resolve disputes, maintain security, or support legitimate business needs.",
  },
  {
    num: "9",
    title: "Data deletion",
    body: "Users may request deletion of their information by contacting us at lusa@eightzeroeight.online. We will review and process verified deletion requests within a reasonable period, subject to legal or operational requirements.",
  },
  {
    num: "10",
    title: "Your rights",
    body: "Depending on applicable law, you may have the right to access, correct, update, export, restrict, or delete your personal information.",
  },
  {
    num: "11",
    title: "Security",
    body: "We take reasonable technical and organizational measures to protect information from unauthorized access, misuse, loss, or disclosure.",
  },
  {
    num: "12",
    title: "Contact",
    body: null,
    isContact: true,
  },
];

export default function Privacy() {
  return (
    <LegalLayout>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">Legal</p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6 text-foreground" data-testid="page-title-privacy">
            Privacy
          </h1>
          <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
            Your privacy matters. This policy explains how 808 Digital collects, uses, and protects information across our website and products, including Samm and D8.
          </p>
          <p className="text-sm text-muted-foreground mb-16">Last updated: 30 April 2026</p>

          <div className="space-y-0">
            {sections.map((section, idx) => (
              <div
                key={section.num}
                className={`py-10 ${idx < sections.length - 1 ? "border-b border-border" : ""}`}
                data-testid={`privacy-section-${section.num}`}
              >
                <div className="flex gap-8 items-start">
                  <span className="text-sm font-mono text-muted-foreground/60 pt-1 w-6 flex-shrink-0">{section.num}</span>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-3 text-foreground">{section.title}</h2>
                    {section.isContact ? (
                      <p className="text-muted-foreground leading-relaxed">
                        For privacy questions or requests, contact:{" "}
                        <a
                          href="mailto:lusa@eightzeroeight.online"
                          className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
                          data-testid="privacy-contact-email"
                        >
                          lusa@eightzeroeight.online
                        </a>
                      </p>
                    ) : (
                      <p className="text-muted-foreground leading-relaxed">{section.body}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-32">
          <div className="bg-card border border-border rounded-2xl p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">Contact & Company</p>
            <dl className="space-y-5">
              <div>
                <dt className="text-xs text-muted-foreground mb-1">Email</dt>
                <dd className="text-sm font-medium">
                  <a
                    href="mailto:lusa@eightzeroeight.online"
                    className="hover:opacity-70 transition-opacity"
                    data-testid="aside-email"
                  >
                    lusa@eightzeroeight.online
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground mb-1">Phone</dt>
                <dd className="text-sm font-medium">
                  <a href="tel:+260772427296" className="hover:opacity-70 transition-opacity" data-testid="aside-phone">
                    +260 772 427 296
                  </a>
                </dd>
              </div>
              <div className="border-t border-border pt-5">
                <dt className="text-xs text-muted-foreground mb-1">Legal Name</dt>
                <dd className="text-sm font-medium">EIGHT ZERO EIGHT DIGITAL SYSTEMS</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground mb-1">Registration No.</dt>
                <dd className="text-sm font-mono">320261068691</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground mb-1">Location</dt>
                <dd className="text-sm font-medium">Zambia</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </LegalLayout>
  );
}

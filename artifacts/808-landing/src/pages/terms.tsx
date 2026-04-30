import LegalLayout from "@/components/LegalLayout";

const sections = [
  {
    num: "1",
    title: "Acceptance of terms",
    body: "By accessing or using any 808 Digital product, website, or service, you agree to be bound by these Terms of Use and our Privacy Policy.",
  },
  {
    num: "2",
    title: "About 808 Digital",
    body: "808 Digital is the public-facing name for EIGHT ZERO EIGHT DIGITAL SYSTEMS, a business registered in Zambia under Registration No. 320261068691.",
  },
  {
    num: "3",
    title: "Use of products",
    body: "We grant you a limited, non-exclusive, non-transferable right to access and use our products in accordance with these terms and any applicable product rules or permissions.",
  },
  {
    num: "4",
    title: "Accounts and access",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately if you suspect unauthorized access.",
  },
  {
    num: "5",
    title: "Authorized use",
    body: "You may only connect, manage, or interact with accounts, pages, profiles, venues, businesses, or assets that you are legally authorized to access or manage.",
  },
  {
    num: "6",
    title: "Acceptable use",
    body: "You agree not to misuse our products, interfere with their performance or security, attempt unauthorized access, send spam, publish deceptive content, or use our services for unlawful activity.",
  },
  {
    num: "7",
    title: "User content and responsibility",
    body: "You are responsible for the content, instructions, data, messages, posts, plans, approvals, or other materials you create, upload, submit, or approve through our products.",
  },
  {
    num: "8",
    title: "AI-assisted features",
    body: "Some products may include AI-assisted suggestions, planning support, or workflow recommendations. These outputs are provided to assist users and should be reviewed before use. You remain responsible for final decisions and actions.",
  },
  {
    num: "9",
    title: "Third-party platforms",
    body: "Some features may rely on third-party platforms or services. Your use of those platforms remains subject to their own terms, policies, and permissions.",
  },
  {
    num: "10",
    title: "Payments and future services",
    body: "Some products or features may be subject to fees. Pricing, availability, and access may change with notice. We may introduce, modify, or discontinue products or features at any time.",
  },
  {
    num: "11",
    title: "Intellectual property",
    body: "All product names, designs, interfaces, software, content, trademarks, and related materials provided by 808 Digital are owned by us or licensed to us. You may not copy, modify, distribute, or reverse-engineer our products except where permitted by law.",
  },
  {
    num: "12",
    title: "Limitation of liability",
    body: "To the maximum extent permitted by law, 808 Digital shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of our products or services.",
  },
  {
    num: "13",
    title: "Changes to these terms",
    body: "We may update these Terms of Use from time to time. Continued use of our products after changes are posted means you accept the updated terms.",
  },
  {
    num: "14",
    title: "Governing law",
    body: "These terms are governed by the laws of the Republic of Zambia. Any disputes shall be subject to the courts of Zambia.",
  },
  {
    num: "15",
    title: "Contact",
    body: null,
    isContact: true,
  },
];

export default function Terms() {
  return (
    <LegalLayout>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">Legal</p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6 text-foreground" data-testid="page-title-terms">
            Terms of Use
          </h1>
          <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
            These Terms of Use govern your access to and use of the websites, products, and services provided by 808 Digital, including Samm and D8. By using our products or services, you agree to these terms.
          </p>
          <p className="text-sm text-muted-foreground mb-16">Last updated: 30 April 2026</p>

          <div className="space-y-0">
            {sections.map((section, idx) => (
              <div
                key={section.num}
                className={`py-10 ${idx < sections.length - 1 ? "border-b border-border" : ""}`}
                data-testid={`terms-section-${section.num}`}
              >
                <div className="flex gap-8 items-start">
                  <span className="text-sm font-mono text-muted-foreground/60 pt-1 w-6 flex-shrink-0">{section.num}</span>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-3 text-foreground">{section.title}</h2>
                    {section.isContact ? (
                      <p className="text-muted-foreground leading-relaxed">
                        For questions about these terms, contact:{" "}
                        <a
                          href="mailto:lusa@eightzeroeight.online"
                          className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
                          data-testid="terms-contact-email"
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

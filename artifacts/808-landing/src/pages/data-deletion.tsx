import LegalLayout from "@/components/LegalLayout";

const sections = [
  {
    num: "1",
    title: "How to request deletion",
    body: null,
    isEmail: true,
  },
  {
    num: "2",
    title: "What to include",
    body: "Please include the email address associated with your account, the product you used, such as Samm or D8, and the business, workspace, or account you want removed, if applicable.",
  },
  {
    num: "3",
    title: "Processing requests",
    body: "We will review and process verified deletion requests within a reasonable period, subject to legal, security, or operational requirements.",
  },
  {
    num: "4",
    title: "Connected platform access",
    body: "If you connected a Meta account to one of our products, you may also remove access from your Facebook settings under Apps and Websites.",
  },
  {
    num: "5",
    title: "Contact",
    body: null,
    isContact: true,
  },
];

export default function DataDeletion() {
  return (
    <LegalLayout>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">Legal</p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6 text-foreground" data-testid="page-title-data-deletion">
            Data Deletion
          </h1>
          <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
            You can request deletion of your data from 808 Digital products, including Samm and D8, at any time.
          </p>
          <p className="text-sm text-muted-foreground mb-16">Last updated: 30 April 2026</p>

          <div className="space-y-0">
            {sections.map((section, idx) => (
              <div
                key={section.num}
                className={`py-10 ${idx < sections.length - 1 ? "border-b border-border" : ""}`}
                data-testid={`deletion-section-${section.num}`}
              >
                <div className="flex gap-8 items-start">
                  <span className="text-sm font-mono text-muted-foreground/60 pt-1 w-6 flex-shrink-0">{section.num}</span>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-3 text-foreground">{section.title}</h2>
                    {section.isEmail ? (
                      <p className="text-muted-foreground leading-relaxed">
                        To request deletion, email{" "}
                        <a
                          href="mailto:lusa@eightzeroeight.online?subject=Data%20Deletion%20Request"
                          className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
                          data-testid="deletion-email"
                        >
                          lusa@eightzeroeight.online
                        </a>{" "}
                        with the subject line "Data Deletion Request".
                      </p>
                    ) : section.isContact ? (
                      <p className="text-muted-foreground leading-relaxed">
                        For deletion requests or questions, contact{" "}
                        <a
                          href="mailto:lusa@eightzeroeight.online?subject=Data%20Deletion%20Request"
                          className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
                          data-testid="deletion-contact-email"
                        >
                          lusa@eightzeroeight.online
                        </a>
                        .
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

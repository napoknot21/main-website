export const metadata = {
  title: "Disclosures | Heroics Capital",
  description: "Regulatory and Risk Disclosures for Heroics Capital.",
}

export default function DisclosurePage() {
  return (
    <div className="space-y-8 text-muted-foreground">
      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">1. Regulatory Information</h2>
        <p className="mb-4 leading-relaxed text-pretty">
          [Placeholder: Provide details about your regulatory status, identifying the competent authorities that authorize and supervise your activities (e.g., CSSF in Luxembourg).]
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">2. Risk Warnings</h2>
        <p className="mb-4 leading-relaxed text-pretty">
          [Placeholder: Outline the risks associated with the investment products and services offered. Clearly state that past performance is not indicative of future results and that the value of investments may fluctuate.]
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">3. Conflicts of Interest</h2>
        <p className="mb-4 leading-relaxed text-pretty">
          [Placeholder: Summarize your policy on identifying and managing conflicts of interest to ensure client protection.]
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">4. Complaints Handling</h2>
        <p className="mb-4 leading-relaxed text-pretty">
          [Placeholder: Explain the procedure for clients to submit complaints and how those complaints will be handled by the firm.]
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">5. Remuneration Policy</h2>
        <p className="mb-4 leading-relaxed text-pretty">
          [Placeholder: Provide a summary of your remuneration policy as required by applicable regulations (e.g., AIFMD/UCITS).]
        </p>
      </section>

      <p className="text-sm opacity-60 pt-8 border-t border-border">
        Last updated: [Date]
      </p>
    </div>
  )
}

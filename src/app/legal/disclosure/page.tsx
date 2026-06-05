import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Disclosures | Heroics Capital",
  description: "Regulatory disclosures and complaint handling procedure for Heroics Capital.",
}

export default function DisclosurePage() {
  return (
    <div className="space-y-10 text-muted-foreground">
      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          1. Regulatory Information
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          [Placeholder: Provide details about your regulatory status, identifying the competent authorities
          that authorize and supervise your activities (e.g., CSSF in Luxembourg).]
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          2. Risk Warnings
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          [Placeholder: Outline the risks associated with the investment products and services offered.
          Clearly state that past performance is not indicative of future results and that the value of
          investments may fluctuate.]
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          3. Conflicts of Interest
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          [Placeholder: Summarize your policy on identifying and managing conflicts of interest to ensure
          client protection.]
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-6">
          4. Complaints Handling
        </h2>

        <div className="space-y-8 border-l border-border pl-5 md:pl-8">
          <div>
            <h3 className="text-xl font-serif font-semibold text-deepblue mb-3">
              4.1 Who We Are
            </h3>
            <p className="leading-relaxed text-pretty">
              Heroics Capital S.à r.l. (CSSF licence A5032, LEI 894500ERTQ9IWG7YIY87) is an authorised
              Alternative Investment Fund Manager (AIFM) incorporated under Luxembourg law and supervised by
              the Commission de Surveillance du Secteur Financier (CSSF). The company also holds a MiFID II
              top-up licence enabling discretionary portfolio management (DPM) and investment advisory services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold text-deepblue mb-3">
              4.2 Our Commitment
            </h3>
            <p className="leading-relaxed text-pretty">
              We are committed to handling any complaint promptly, fairly and thoroughly. We treat all complaints
              as an opportunity to improve our services and to ensure that the interests of our investors and
              clients are protected at all times.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold text-deepblue mb-3">
              4.3 What Is a Complaint?
            </h3>
            <p className="leading-relaxed text-pretty">
              A complaint is any written or oral expression of dissatisfaction by an investor, client or potential
              client regarding a service provided (or not provided) by Heroics Capital S.à r.l., in respect of
              which some form of remedy is sought.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold text-deepblue mb-3">
              4.4 How to Submit a Complaint
            </h3>
            <p className="mb-4 leading-relaxed text-pretty">
              Complaints may be submitted in writing (letter or email) to the Conducting Officer responsible for
              complaint handling:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 leading-relaxed text-pretty">
              <li>
                Email:{" "}
                <a
                  className="text-deepblue underline-offset-4 hover:underline"
                  href="mailto:complaints@heroics-capital.com"
                >
                  complaints@heroics-capital.com
                </a>
              </li>
              <li>
                Post: Heroics Capital S.à r.l., 34A Rue Philippe II, L-2340 Luxembourg
              </li>
            </ul>
            <p className="mb-4 leading-relaxed text-pretty">
              Complaints may be submitted in Luxembourgish, German, English or French.
            </p>
            <p className="mb-4 leading-relaxed text-pretty">
              Please include the following information in your complaint:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed text-pretty">
              <li>Your full name and contact details</li>
              <li>A clear description of the subject matter of your complaint and the relevant facts</li>
              <li>The remedy or outcome you are seeking</li>
              <li>Any supporting documents you consider relevant</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold text-deepblue mb-3">
              4.5 How We Handle Your Complaint
            </h3>
            <p className="mb-4 leading-relaxed text-pretty">
              Upon receipt of your complaint:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed text-pretty">
              <li>We will acknowledge receipt of your complaint promptly.</li>
              <li>
                Your complaint will be investigated thoroughly and impartially by the Conducting Officer
                responsible for complaint handling, independently of any operational function involved.
              </li>
              <li>
                We will provide you with a substantive written response within one (1) month of receipt of your
                complaint.
              </li>
              <li>
                If your complaint is complex and requires additional time, we will inform you accordingly and
                provide an estimated timeline for resolution.
              </li>
              <li>
                Our response will set out our findings, conclusions and, where applicable, any remedial action
                taken or proposed.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold text-deepblue mb-3">
              4.6 Out-of-Court Resolution – CSSF
            </h3>
            <p className="mb-4 leading-relaxed text-pretty">
              If you have not received a response, or have not received a satisfactory response, within one month
              of submitting your complaint to us, you may refer your complaint to the CSSF as the competent
              out-of-court complaint resolution body, provided you do so within one (1) year of the date on which
              you filed your complaint with us.
            </p>
            <p className="mb-4 leading-relaxed text-pretty">
              The CSSF out-of-court resolution procedure is governed by CSSF Regulation N° 16/07 of 26 October
              2016. A copy of this regulation is available at:{" "}
              <a
                className="text-deepblue underline-offset-4 hover:underline"
                href="https://www.cssf.lu/en/customer-complaints/"
                rel="noreferrer"
                target="_blank"
              >
                https://www.cssf.lu/en/customer-complaints/
              </a>
            </p>
            <p className="mb-4 leading-relaxed text-pretty">
              Please note that the CSSF out-of-court procedure is only available once a complaint has first been
              submitted in writing to Heroics Capital S.à r.l. and either no response has been received, or the
              response received is not satisfactory.
            </p>
            <p className="mb-4 leading-relaxed text-pretty">
              The CSSF complaint form and contact details are available on the CSSF website referenced above.
            </p>
            <p className="leading-relaxed text-pretty">
              Note: The CSSF may also be contacted in the context of the European Online Dispute Resolution (ODR)
              platform for consumer disputes at:{" "}
              <a
                className="text-deepblue underline-offset-4 hover:underline"
                href="https://ec.europa.eu/consumers/odr"
                rel="noreferrer"
                target="_blank"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold text-deepblue mb-3">
              4.7 Data Protection
            </h3>
            <p className="leading-relaxed text-pretty">
              Personal data provided in connection with a complaint will be processed in accordance with
              applicable data protection legislation (Regulation (EU) 2016/679 – GDPR) and our Privacy Policy,
              solely for the purposes of investigating and resolving your complaint.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">
          5. Remuneration Policy
        </h2>
        <p className="mb-4 leading-relaxed text-pretty">
          [Placeholder: Provide a summary of your remuneration policy as required by applicable regulations
          (e.g., AIFMD/UCITS).]
        </p>
      </section>

      <section className="pt-8 border-t border-border">
        <h2 className="text-xl font-serif font-semibold text-deepblue mb-4">
          Questions?
        </h2>
        <p className="mb-5 leading-relaxed text-pretty">
          For any question about this disclosure or Heroics Capital's policies, please contact our team.
        </p>
        <Button asChild>
          <Link href="/contact">
            Contact us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

      <p className="text-sm opacity-60 pt-4">
        Last updated: June 2026
      </p>
    </div>
  )
}

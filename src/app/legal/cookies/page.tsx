export const metadata = {
  title: "Cookie Policy | Heroics Capital",
  description: "Cookie Policy explaining how Heroics Capital uses cookies and similar technologies.",
}

export default function CookiePolicyPage() {
  return (
    <div className="space-y-8 text-muted-foreground">
      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">1. What are Cookies?</h2>
        <p className="mb-4 leading-relaxed text-pretty">
          Cookies are small text files that are placed on your computer or mobile device when you browse a website. They are widely used in order to make websites work, or work more efficiently, as well as to provide reporting information and assist with service or personalization.
        </p>
        <p className="mb-4 leading-relaxed text-pretty">
          Cookies set by the website owner (in this case, Heroics Capital) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., analytics).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">2. How We Use Cookies</h2>
        <p className="mb-4 leading-relaxed text-pretty">
          We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 leading-relaxed text-pretty">
          <li><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features.</li>
          <li><strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.</li>
          <li><strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">3. Managing Cookies</h2>
        <p className="mb-4 leading-relaxed text-pretty">
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in our Cookie Consent Manager, which allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
        </p>
        <p className="mb-4 leading-relaxed text-pretty">
          You can also set or amend your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">4. Changes to this Policy</h2>
        <p className="mb-4 leading-relaxed text-pretty">
          We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-deepblue mb-4">5. Contact Us</h2>
        <p className="mb-4 leading-relaxed text-pretty">
          If you have any questions about our use of cookies or other technologies, please contact us at: <a href="mailto:info@heroics-capital.com" className="text-blue-hour hover:underline">info@heroics-capital.com</a>.
        </p>
      </section>

      <p className="text-sm opacity-60 pt-8 border-t border-border">
        Last updated: May 2026
      </p>
    </div>
  )
}

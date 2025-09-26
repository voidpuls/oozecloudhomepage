import { SpaceBackground } from "@/components/space-background"

export const metadata = {
  title: "Privacy Policy - Oozecloud",
  description: "Privacy policy and data handling practices for Oozecloud services.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#010901] pt-32 pb-16">
      <SpaceBackground />
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-white">Privacy Policy</h1>

          <div className="p-8 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                At Oozecloud, we respect your privacy and are committed to protecting your personal data. This privacy
                policy will inform you about how we look after your personal data when you visit our website and tell
                you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped
                together as follows:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Identity Data: includes first name, last name, username</li>
                <li>Contact Data: includes billing address, email address, telephone numbers</li>
                <li>Financial Data: includes payment card details</li>
                <li>
                  Transaction Data: includes details about payments to and from you and other details of products and
                  services you have purchased from us
                </li>
                <li>
                  Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting
                  and location, operating system and platform
                </li>
                <li>Usage Data: includes information about how you use our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>To register you as a new customer</li>
                <li>To process and deliver your order</li>
                <li>To manage our relationship with you</li>
                <li>To improve our website, products/services, marketing or customer relationships</li>
                <li>To recommend products or services that may be of interest to you</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally
                lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal
                data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it
                for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to track the activity on our service and hold certain
                information. Cookies are files with small amount of data which may include an anonymous unique
                identifier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@Oozecloud.com.</p>
            </section>

            <div className="pt-4 text-sm text-gray-400">Last updated: April 24, 2025</div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { SpaceBackground } from "@/components/space-background"

export const metadata = {
  title: "Terms of Service - Oozecloud",
  description: "Terms and conditions for using Oozecloud services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#010901] pt-32 pb-16">
      <SpaceBackground />
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-white">Terms of Service</h1>

          <div className="p-8 border rounded-lg border-green-500/20 bg-[#010901]/70 backdrop-blur-md space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Oozecloud services, you agree to be bound by these Terms of Service. If you do not
                agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p>
                Oozecloud provides web hosting, game server hosting, VPS hosting, and dedicated server solutions. We
                reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account information and password. You
                agree to accept responsibility for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Acceptable Use</h2>
              <p>
                You agree not to use our services for any illegal or unauthorized purpose. You must not violate any laws
                in your jurisdiction, including copyright or trademark laws.
              </p>
              <p className="mt-2">Prohibited activities include but are not limited to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Distribution of malware or viruses</li>
                <li>Phishing or fraudulent activities</li>
                <li>Spamming or mass mailing</li>
                <li>Hosting illegal content</li>
                <li>Attempting to gain unauthorized access to other systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Payment and Billing</h2>
              <p>
                You agree to pay all fees associated with your selected service plan. All payments are non-refundable
                unless otherwise specified in our refund policy.
              </p>
              <p className="mt-2">
                If automatic billing fails, your service may be suspended until payment is received.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Termination</h2>
              <p>
                We may terminate or suspend your account and access to our services immediately, without prior notice or
                liability, for any reason, including breach of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
              <p>
                In no event shall Oozecloud be liable for any indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will provide notice of significant changes by
                updating the date at the top of these terms and by maintaining a current version of the terms at our
                website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at support@Oozecloud.com.</p>
            </section>

            <div className="pt-4 text-sm text-gray-400">Last updated: April 24, 2025</div>
          </div>
        </div>
      </div>
    </div>
  )
}

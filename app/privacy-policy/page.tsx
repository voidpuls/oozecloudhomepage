import { SpaceBackground } from "@/components/space-background"

export const metadata = {
  title: "Privacy Policy - OozeCloud",
  description: "Privacy policy and data protection information for OozeCloud services.",
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
              <p className="mb-4">
                This policy outlines how we use your data, what data we collect and store, how we protect stored data, data retention, and waivers of rights. It also outlines our procedures for handling cases under the general data protection regulations in the European Union, as well as our further commitment to supporting industry best security practices and supporting the protection of children while they utilize our platform.
              </p>
              <p className="text-sm text-gray-400">
                This policy was last reviewed and approved for publication on July 1, 2025, and is scheduled for re-review on September 29, 2025.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Allocated Data Protection Officer</h2>
              <p>
                For this agreement, the Data Protection Officer assigned to observe and oversee the active functions of this policy shall hereby be assigned to Mr Austin Johnson.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Binding Nature</h2>
              <div className="space-y-3">
                <p>
                  This policy shall remain in effect for the remainder of the customers' use of our services, with an additional term of five (5) years.
                </p>
                <p>
                  By utilizing any service or part of our platform owned or controlled by us, you accept that you agree with all clauses within this policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Staff Server Access</h2>
              <div className="p-4 border border-yellow-500/30 bg-yellow-500/10 rounded-lg space-y-3">
                <p className="font-semibold text-yellow-400">Important Notice:</p>
                <p>
                  OozeCloud staff may request access to customer servers at any time for maintenance, support, or security purposes. However, server access requires explicit approval from the server owner before any staff member can manage or access the server.
                </p>
                <p>
                  <span className="font-semibold text-red-400">Disclaimer:</span> It is the server owner's responsibility to manage and revoke staff access permissions. OozeCloud is not responsible if users forget to remove staff member access after support or maintenance is completed.
                </p>
                <p>
                  All staff access requests will be communicated through our official Discord server, and customers should only approve access requests from verified OozeCloud staff members.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
              <div className="space-y-3">
                <p>
                  We may collect and store children's information because our services are directly targeted towards children, as they are the products' focus and target audience. We will ensure parent consent has been obtained from parents of children under 16 registered on our site.
                </p>
                <p>We collect a child's information when they:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Create an account to be utilized on our platform</li>
                  <li>Purchase any product or service we offer</li>
                  <li>Interact with any of our customer service platforms</li>
                  <li>Interact with our platform or services</li>
                </ul>
                <p>
                  We will never sell your child's data to any third party and will only share what is necessary with trusted third parties who allow us to operate our business day-to-day.
                </p>
                <p>
                  We ask children to share certain information with us for notification, transaction, and security purposes, and we strongly recommend that the guardian(s) of children utilize their details instead of permitting their children to use any of their information on any section of our platform.
                </p>
                <p>
                  By agreeing to utilize any part of our platform or services, the child and parent expressly consent that they have read, understood, and agreed to all clauses within this policy.
                </p>
                <p>
                  We cannot be held liable for any interaction your child has due to purchasing one of our multiplayer game products, as these services are privately owned and not managed or controlled by us.
                </p>
                <p>
                  We recommend that guardians/parents regularly review their children's activities online to ensure they remain safe.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Retention</h2>
              <div className="space-y-3">
                <p>
                  Per our commitment to the European Union's GDPR ("General Data Protection Regulations"), we will only retain data for as long as necessary. By purchasing, using, or subsequently accessing any services we own or control, you accept that we may hold your data for 5 years past the point that we deem the data no longer reasonable to maintain. We keep this data for further taxation purposes and our financial obligation to the United States.
                </p>
                <p>
                  Site access logs and requests are retained indefinitely to ensure security. This includes cookie-based data, which will naturally expire if the end user deletes or expires the cookie.
                </p>
                <p>
                  Service files, hereby defined as 'information uploaded to a service provided by OozeCloud,' will be retained only as long as necessary, even past the termination of business between the end user and OozeCloud.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Erasure</h2>
              <div className="space-y-3">
                <p>
                  Data erasure will be carried out when a client requests the erasure of their data should take place. In many cases, you must provide proof of the name and address assigned to the billing account before we can process or access your data and proceed with any erasure request.
                </p>
                <p>This policy does not serve as a waiver of rights.</p>
                <p>The following outlines our policy regarding data erasure:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    The formal process begins with the client's request to proceed with an erasure request; this must be received via our official Discord server.
                  </li>
                  <li>
                    Within 24-48 hours (dependent on office hours and public holidays), OozeCloud may request proof of identification, including photographic state/government-issued identification and/or a letter to the client's name and address.
                  </li>
                  <li>The client will then have 7 days to submit documents.</li>
                  <li>OozeCloud will confirm the document and provide the next steps.</li>
                  <li>
                    OozeCloud will then provide a written response to the request, either accepting the erasure request or, in cases where there is a reason why we cannot proceed with a request, providing feedback relating to this and offering the opportunity to resolve the reasoning behind our rejection (E.g., identification is not sufficient).
                  </li>
                </ol>
                <p>
                  If an erasure request is lost at any point, OozeCloud cannot be held responsible for damages, and this is an express waiver of responsibility concerning any erasure requests either being filed incorrectly or lost in transmission.
                </p>
                <p>
                  The parent can request the erasure of data attained by someone under 13 or the child's legal guardian. The guardian may be required to provide transaction-based identification before we can process an erasure request.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Right of Appeal</h2>
              <div className="space-y-3">
                <p>
                  If you believe we erred in our judgment of your erasure request, you can follow the appeal steps in the final written response from OozeCloud.
                </p>
                <p>
                  To be able to appeal, you accept that you must appeal within 28 days of receiving this response confirming the steps to appeal. If you do not appeal the decision within 28 days, you waive your right to appeal.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data we Collect</h2>
              <div className="space-y-3">
                <p>We collect and store a series of data, such as (but not exhaustive):</p>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-green-400">Personally-identifiable information ("PII")</h3>
                  <p>For example, your name, email, phone number, postal address, IP address, geolocation.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-green-400">Cookies</h3>
                  <p>Log-based data</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-green-400">Technical Data</h3>
                  <p>Internet Protocol ("IP") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>
                </div>
                <p>
                  Third-party services may additionally collect data. These respective services have their own data protection and privacy policies, which the end user is expected to review.
                </p>
                <p>Some, not all, of the third-party services we use include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Crisp Chat</li>
                  <li>Google Advertising</li>
                  <li>FontAwesome</li>
                  <li>WHMCS</li>
                  <li>Trustpilot</li>
                  <li>Cookie declaration services</li>
                  <li>Cloudflare</li>
                  <li>CosmicGuard</li>
                  <li>Discord</li>
                  <li>Voluum (and other marketing platforms, we'll never share your details without requesting your permission first)</li>
                  <li>Amazon</li>
                  <li>Optinmonster</li>
                </ul>
                <p>
                  Because of any data shared with third-party services – we may be unable to regulate erasure requests with the listed companies/services above, and you may be required to submit erasure requests to the specific company as listed above.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Access Arrangements</h2>
              <div className="space-y-3">
                <p>
                  A valid court order, subpoena, or equivalent legal document must support requests for access to customer data by law enforcement agencies. Such requests and all relevant documentation should be directed to our Discord server for a 24-hour response.
                </p>
                <p>
                  Access to specific recorded customer data is granted to authorized employees strictly for operational purposes. This access is governed by confidentiality and nondisclosure agreements, ensuring the protection and proper handling of all data in compliance with applicable privacy laws and company policies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Right to Review Data we Hold</h2>
              <div className="space-y-3">
                <p>You retain the right to access the data we hold concerning you.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>You can request one (1) data record export within 30 days.</li>
                  <li>A maximum of six (6) data record exports may be requested within a calendar year. Additional requests may be processed subject to an administrative fee of $80.</li>
                  <li>All requests must be submitted via our Discord server.</li>
                </ul>
                <p>
                  We reserve up to one (1) month to respond to any Subject Access Request ("SAR"). If the processing of a SAR requires significant production efforts, an administrative fee may be assessed. Customers will be notified of any such fee before we process it.
                </p>
                <p>
                  Upon submitting a Subject Access Request, you must provide proof of identification to ensure security and compliance. The identification process will adhere to strict verification standards, after which a comprehensive record of all data held about you will be provided.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Breaches</h2>
              <div className="space-y-3">
                <p>In the unlikely event of a data breach, We will take the following actions in compliance with applicable data protection regulations:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Affected parties will be notified within forty-eight (48) hours of us becoming aware of the breach.</li>
                  <li>We will disclose, to the extent known at the time, the nature of the breach, the categories of information believed to have been compromised, and the discovery timeline.</li>
                  <li>Where applicable, we will notify relevant data controllers to facilitate a thorough investigation and ensure appropriate measures are taken in response to the breach.</li>
                  <li>Any services identified as compromised will be subject to immediate suspension to prevent further unauthorized access. Such services will remain suspended until the source of the breach has been thoroughly investigated and mitigated.</li>
                  <li>Our data protection officer will inform you and provide the next steps per the above protocol.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Collection Consent</h2>
              <p>
                By using any of our services, including but not limited to our website, game servers, virtual private server services, dedicated server services, and domain registration services, you acknowledge and consent to collecting, processing, and recording your data per this policy. Your use of these services constitutes a formal agreement to such data collection practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Links to Third-Party Services</h2>
              <p>
                Our services may contain links to third-party websites or services. We disclaim any responsibility or liability for such third parties' content, privacy practices, or data handling procedures. Customers are advised to review the privacy policies of any third-party websites or services before engaging with them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
              <p>
                We reserve the right to update or modify this Privacy Policy anytime. Any changes will be communicated by posting the revised Privacy Policy on this page. You must review this Privacy Policy periodically to stay informed of any updates. All modifications to this Privacy Policy shall take effect immediately upon posting unless otherwise specified. Your continued use of our services constitutes acceptance of the revised Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contacting the Data Protection Officer</h2>
              <div className="space-y-3">
                <p>
                  We welcome any questions, comments, or concerns regarding this Privacy Policy. If you believe that we have failed to adhere to the provisions outlined in this policy, please contact our Data Protection Officer (DPO) using the following contact information:
                </p>
                <div className="p-4 border border-green-500/30 bg-green-500/10 rounded-lg">
                  <p className="font-semibold text-green-400 mb-2">Contact Information:</p>
                  <p>
                    <span className="font-semibold">Discord Server:</span>{" "}
                    <a href="https://discord.gg/6Gj6rnhpFa" className="text-green-400 hover:text-green-300 underline">
                      https://discord.gg/6Gj6rnhpFa
                    </a>
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    All data protection inquiries, erasure requests, and general privacy concerns should be submitted through our official Discord server.
                  </p>
                </div>
              </div>
            </section>

            <div className="pt-4 text-sm text-gray-400">
              Last updated: September 28th, 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

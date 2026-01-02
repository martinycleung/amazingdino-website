"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Terms and Conditions
            </h1>
            <p className="text-gray-500 mb-12">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="prose prose-gray max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By accessing or using the Amazing Dino Consulting website and services, you agree to be bound
                  by these Terms and Conditions. If you disagree with any part of these terms, you may not
                  access our website or use our services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Amazing Dino Consulting provides IT consulting, cybersecurity, and digital transformation
                  services. The specific scope, deliverables, and terms of any engagement will be defined in
                  a separate service agreement or statement of work.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The content, features, and functionality of our website, including but not limited to text,
                  graphics, logos, icons, images, and software, are owned by Amazing Dino Consulting and are
                  protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display,
                  publicly perform, republish, download, store, or transmit any materials from our website
                  without prior written consent.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When using our website or services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not interfere with the proper functioning of our website</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Confidentiality</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Both parties agree to maintain the confidentiality of any proprietary or confidential
                  information disclosed during the course of our engagement. This obligation survives the
                  termination of any service agreement.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Amazing Dino Consulting shall not be liable for any
                  indirect, incidental, special, consequential, or punitive damages, including but not limited
                  to loss of profits, data, or business opportunities, arising out of or related to your use
                  of our website or services.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our total liability for any claims arising under these terms shall not exceed the amount
                  paid by you for our services in the twelve (12) months preceding the claim.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our website and services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of
                  any kind, either express or implied. We do not warrant that our website will be
                  uninterrupted, error-free, or free of viruses or other harmful components.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Indemnification</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You agree to indemnify, defend, and hold harmless Amazing Dino Consulting and its officers,
                  directors, employees, and agents from any claims, damages, losses, liabilities, and expenses
                  arising out of your use of our website or services, or your violation of these terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We reserve the right to terminate or suspend your access to our website or services at any
                  time, without prior notice or liability, for any reason, including breach of these terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These Terms and Conditions shall be governed by and construed in accordance with applicable
                  laws, without regard to conflict of law principles. Any disputes arising under these terms
                  shall be subject to the exclusive jurisdiction of the courts in the relevant jurisdiction.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be
                  effective immediately upon posting to our website. Your continued use of our website or
                  services after any changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Severability</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If any provision of these terms is found to be unenforceable or invalid, that provision
                  shall be limited or eliminated to the minimum extent necessary, and the remaining provisions
                  shall remain in full force and effect.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> contact@amazingdino.au<br />
                  <strong>Website:</strong> amazingdino.com
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

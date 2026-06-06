export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-purple-50 px-6 py-12 text-left">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-purple-900 mb-8 text-center">
                    Privacy Policy
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-purple-800 leading-relaxed">
                        Welcome to Krypta Nova App. Your privacy is important to us.
                        Krypta is a cryptocurrency tracking application that
                        allows users to monitor coin prices, manage favorite
                        cryptocurrencies, and read the latest crypto news.
                    </p>
                </section>

                {/* Information Collection */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        1. Information We Collect
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        Krypta does not require account registration and does
                        not intentionally collect personal information such as
                        your name, email address, phone number, or location.
                    </p>
                </section>

                {/* App Features */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        2. App Features
                    </h2>

                    <ul className="list-disc list-inside text-purple-800 space-y-1">
                        <li>View cryptocurrency market information.</li>
                        <li>Track real-time coin prices and trends.</li>
                        <li>Save favorite cryptocurrencies locally.</li>
                        <li>Read crypto-related news and updates.</li>
                    </ul>
                </section>

                {/* Internet Usage */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        3. Internet Connection
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        Krypta requires an internet connection to retrieve
                        cryptocurrency market data and news content from
                        external providers.
                    </p>
                </section>

                {/* Third Party */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        4. Third-Party Services
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        Krypta may use third-party APIs or services to provide
                        cryptocurrency prices, market statistics, news content,
                        and application analytics. These services may collect
                        technical information as described in their own privacy
                        policies.
                    </p>
                </section>

                {/* Local Storage */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        5. Local Data Storage
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        Favorite coins and application preferences may be stored
                        locally on your device to improve your experience.
                        This information is not shared with us.
                    </p>
                </section>

                {/* Security */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        6. Data Security
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        We take reasonable measures to maintain application
                        security. However, no method of electronic storage or
                        transmission over the internet can be guaranteed to be
                        completely secure.
                    </p>
                </section>

                {/* Updates */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        7. Changes to This Policy
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        We may update this Privacy Policy from time to time.
                        Any changes will be posted on this page.
                    </p>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        8. Contact Us
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        If you have any questions regarding this Privacy Policy,
                        please contact us at:
                        <a
                            href="mailto:anhongoc1306@gmail.com"
                            className="text-purple-600 underline ml-1"
                        >
                            anhongoc1306@gmail.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    );
}
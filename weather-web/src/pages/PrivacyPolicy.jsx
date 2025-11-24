export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
                {/* Title */}
                <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
                    Privacy Policy
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-blue-800 leading-relaxed">
                        Welcome to the Weather App. Your privacy is very important to us. This Privacy Policy explains
                        how we collect, use, and protect your information when you use our app. By using the app, you
                        agree to the terms outlined in this policy.
                    </p>
                </section>

                {/* Data Collection */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">1. Data Collection</h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        We do not collect personal information unless explicitly stated. The types of information we may collect include:
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Device information (device type, operating system)</li>
                        <li>Location data (optional, for providing local weather forecasts)</li>
                        <li>Usage data (app interactions to improve performance)</li>
                    </ul>
                </section>

                {/* Use of Data */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">2. How We Use Your Data</h2>
                    <p className="text-blue-800 leading-relaxed">
                        The data collected is used for the following purposes:
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Provide accurate weather forecasts and alerts</li>
                        <li>Improve app performance and user experience</li>
                        <li>Ensure app security and troubleshoot technical issues</li>
                    </ul>
                </section>

                {/* Third-Party Services */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">3. Third-Party Services</h2>
                    <p className="text-blue-800 leading-relaxed">
                        Our app may use third-party services for fetching weather data or analytics. These services
                        may collect information as described in their own privacy policies. Examples include:
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Weather APIs for accurate forecasts</li>
                        <li>Analytics tools to monitor app performance</li>
                    </ul>
                </section>

                {/* Data Security */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">4. Data Security</h2>
                    <p className="text-blue-800 leading-relaxed">
                        We take appropriate measures to protect your information from unauthorized access,
                        disclosure, or modification. However, no method of transmission over the internet or
                        electronic storage is 100% secure.
                    </p>
                </section>

                {/* User Rights */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">5. Your Rights</h2>
                    <p className="text-blue-800 leading-relaxed">
                        You have the right to:
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Request information about the data we collect</li>
                        <li>Request correction or deletion of your data</li>
                        <li>Opt-out of optional data collection like location tracking</li>
                    </ul>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">6. Contact Us</h2>
                    <p className="text-blue-800 leading-relaxed">
                        If you have any questions or concerns regarding this Privacy Policy, please contact us at:
                        <a href="mailto:anhongoc1306@gmail.com" className="text-blue-600 underline ml-1">
                            anhongoc1306@gmail.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
}
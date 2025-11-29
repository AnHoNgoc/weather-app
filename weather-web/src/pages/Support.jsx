export default function Support() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
                {/* Title */}
                <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
                    Weather App Support
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-blue-800 leading-relaxed">
                        Welcome to the Weather App Support page. Here you can find guidance on how to use the app
                        and how to get help if you encounter any issues.
                    </p>
                </section>

                {/* Using Location */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">1. Using Location Services</h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        To get the most accurate weather information for your current area, you can allow the app to
                        access your device's location.
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>When prompted, grant location access to the app.</li>
                        <li>You can choose "While Using the App" to allow location only when the app is open.</li>
                        <li>This will display weather forecasts and alerts specific to your current location.</li>
                    </ul>
                </section>

                {/* Manual City Input */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">2. Using the App Without Location</h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        If you prefer not to share your location, you can still use the app by entering the city
                        manually:
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Tap the search icon in the app.</li>
                        <li>Type the name of the city you want to see the weather for.</li>
                        <li>The app will show the current weather and forecasts for the selected city.</li>
                    </ul>
                </section>

                {/* FAQs */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">3. Frequently Asked Questions</h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>
                            <b>Q:</b> Why does the app need location?<br />
                            <b>A:</b> Location allows the app to provide accurate weather updates for your area.
                        </li>
                        <li>
                            <b>Q:</b> Can I use the app without granting location access?<br />
                            <b>A:</b> Yes, you can manually enter the city name to see weather information.
                        </li>
                        <li>
                            <b>Q:</b> What if I encounter a problem with the app?<br />
                            <b>A:</b> You can contact us via the email below.
                        </li>
                    </ul>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">4. Contact Support</h2>
                    <p className="text-blue-800 leading-relaxed">
                        If you have any questions, concerns, or feedback, please reach out to us at:
                        <a href="mailto:anhongoc1306@gmail.com" className="text-blue-600 underline ml-1">
                            anhongoc1306@gmail.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
}

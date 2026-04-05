export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12 text-left">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
                    Privacy Policy
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-blue-800 leading-relaxed">
                        Welcome to Zenvix App. Your privacy is important to us. Zenvix is an online music
                        streaming application that allows users to search, play, shuffle, repeat, and save
                        favorite songs for a better listening experience.
                    </p>
                </section>

                {/* Data Collection */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        1. Information We Collect
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        Zenvix App may collect limited non-personal information necessary to provide music
                        streaming features, improve app performance, and support the user experience. We do
                        not require unnecessary personal information to use the app.
                    </p>
                </section>

                {/* Search and Favorites */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        2. Search, Playback, and Favorites
                    </h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        The app provides features such as:
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Searching songs</li>
                        <li>Streaming music online</li>
                        <li>Shuffling and repeating songs</li>
                        <li>Saving songs to your Favorites list</li>
                    </ul>
                    <p className="text-blue-800 mt-2">
                        These features are used only to improve your listening experience inside the app.
                    </p>
                </section>

                {/* Internet Usage */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        3. Internet Usage
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        Zenvix App requires an internet connection to stream music and deliver online
                        content. Network access is used only for app functionality and service availability.
                    </p>
                </section>

                {/* Third Party */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        4. Third-Party Services
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        The app may rely on third-party services or content providers to deliver music
                        streaming functionality. These services may process limited technical data as needed
                        to operate properly.
                    </p>
                </section>

                {/* Data Security */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        5. Data Security
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        We take reasonable measures to protect user information and maintain app security.
                        However, no online service can guarantee absolute security.
                    </p>
                </section>

                {/* User Rights */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        6. Your Rights
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        You can manage your use of the app features, including search history, playback
                        behavior, and your Favorites list, depending on the functionality available in the app.
                    </p>
                </section>

                {/* Updates */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        7. Policy Updates
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        We may update this Privacy Policy from time to time. Any changes will be posted on
                        this page with the updated content.
                    </p>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        8. Contact Us
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        If you have any questions, please contact us at:
                        <a
                            href="mailto:anhongoc1306@gmail.com"
                            className="text-blue-600 underline ml-1"
                        >
                            anhongoc1306@gmail.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    );
}

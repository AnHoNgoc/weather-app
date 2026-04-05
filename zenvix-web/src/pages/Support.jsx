export default function Support() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12 text-left">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
                    Zenvix App Support
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-blue-800 leading-relaxed">
                        Welcome to the Zenvix App support page. Zenvix is an online music streaming app
                        that allows you to discover, search, and enjoy your favorite songs anytime with
                        a smooth listening experience.
                    </p>
                </section>

                {/* Playing Music */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        1. Playing Music
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Browse or search for songs in the app.</li>
                        <li>Tap any song to start streaming instantly.</li>
                        <li>Use the player controls to manage playback.</li>
                    </ul>
                </section>

                {/* Search */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        2. Search Music
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Use the search bar to find songs, artists.</li>
                        <li>Results update quickly as you type.</li>
                        <li>Select any result to start playing.</li>
                    </ul>
                </section>

                {/* Controls */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        3. Playback Controls
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Play / Pause music anytime.</li>
                        <li>Skip to next or previous track.</li>
                        <li>Shuffle songs for a random listening experience.</li>
                        <li>Repeat a single track or entire playlist.</li>
                    </ul>
                </section>

                {/* Favorites */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        4. Favorites
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Add songs to your Favorites list.</li>
                        <li>Access your favorite songs quickly anytime.</li>
                        <li>Manage and remove songs from Favorites بسهولة.</li>
                    </ul>
                </section>

                {/* Online Usage */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        5. Internet Requirement
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        Zenvix requires an internet connection to stream music. Make sure you are connected
                        to Wi-Fi or mobile data for the best experience.
                    </p>
                </section>

                {/* FAQ */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        6. Frequently Asked Questions
                    </h2>
                    <div className="text-blue-800 leading-relaxed space-y-3">
                        <div>
                            <p><strong>Q: Do I need internet to use the app?</strong></p>
                            <p>A: Yes, the app streams music online and requires an internet connection.</p>
                        </div>
                        <div>
                            <p><strong>Q: Can I search for songs?</strong></p>
                            <p>A: Yes, you can search by song name, artist, or album.</p>
                        </div>
                        <div>
                            <p><strong>Q: How do I shuffle music?</strong></p>
                            <p>A: Use the shuffle button in the player to play songs randomly.</p>
                        </div>
                        <div>
                            <p><strong>Q: How do I repeat a song?</strong></p>
                            <p>A: Use the repeat button to loop a track or playlist.</p>
                        </div>
                        <div>
                            <p><strong>Q: Does the app collect my data?</strong></p>
                            <p>A: No, we do not collect or track personal data.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Support */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        7. Contact Support
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        If you have questions or issues, please contact us at{" "}
                        <a
                            href="mailto:anhongoc1306@gmail.com"
                            className="text-blue-600 underline"
                        >
                            anhongoc1306@gmail.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    );
}

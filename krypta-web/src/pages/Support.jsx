export default function KryptaSupport() {
    return (
        <div className="min-h-screen bg-purple-50 px-6 py-12 text-left">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-purple-900 mb-8 text-center">
                    Krypta Support
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-purple-800 leading-relaxed">
                        Welcome to Krypta Support. Krypta is a cryptocurrency
                        tracking application that helps users monitor coin prices,
                        manage favorite coins, and stay updated with the latest
                        crypto news.
                    </p>
                </section>

                {/* Coin Tracking */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        1. Coin Tracking
                    </h2>

                    <ul className="list-disc list-inside text-purple-800 space-y-1">
                        <li>Browse popular cryptocurrencies.</li>
                        <li>View current prices and market information.</li>
                        <li>Track market trends in real time.</li>
                    </ul>
                </section>

                {/* Favorites */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        2. Favorite Coins
                    </h2>

                    <ul className="list-disc list-inside text-purple-800 space-y-1">
                        <li>Add cryptocurrencies to your favorites list.</li>
                        <li>Quickly access coins you follow most.</li>
                        <li>Manage your watchlist easily.</li>
                    </ul>
                </section>

                {/* News */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        3. Crypto News
                    </h2>

                    <ul className="list-disc list-inside text-purple-800 space-y-1">
                        <li>Read the latest cryptocurrency news.</li>
                        <li>Stay informed about blockchain developments.</li>
                        <li>Follow market updates from trusted sources.</li>
                    </ul>
                </section>

                {/* User Experience */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        4. User Experience
                    </h2>

                    <ul className="list-disc list-inside text-purple-800 space-y-1">
                        <li>Simple and intuitive interface.</li>
                        <li>Fast and responsive performance.</li>
                        <li>Optimized for mobile and desktop devices.</li>
                    </ul>
                </section>

                {/* Internet */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        5. Internet Connection
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        Krypta requires an active internet connection to load
                        cryptocurrency prices, market data, and news updates.
                    </p>
                </section>

                {/* FAQ */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        6. Frequently Asked Questions
                    </h2>

                    <div className="text-purple-800 leading-relaxed space-y-3">

                        <div>
                            <p><strong>Q: How do I add a coin to favorites?</strong></p>
                            <p>
                                A: Open a cryptocurrency and tap the favorite
                                button to add it to your watchlist.
                            </p>
                        </div>

                        <div>
                            <p><strong>Q: Are coin prices updated automatically?</strong></p>
                            <p>
                                A: Yes, prices and market data are refreshed
                                regularly when connected to the internet.
                            </p>
                        </div>

                        <div>
                            <p><strong>Q: Where does the news come from?</strong></p>
                            <p>
                                A: Krypta displays news from publicly available
                                cryptocurrency news sources.
                            </p>
                        </div>

                        <div>
                            <p><strong>Q: Do I need to create an account?</strong></p>
                            <p>
                                A: No. Krypta can be used without registration
                                or login.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        7. Contact Support
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        If you have questions or need assistance, contact us at{" "}
                        <a
                            href="mailto:anhongoc1306@gmail.com"
                            className="text-purple-600 underline"
                        >
                            anhongoc1306@gmail.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    );
}
export default function Home() {
    return (
        <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-center px-4 py-12">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4 text-center">
                Krypta App
            </h1>

            {/* Description */}
            <p className="text-center text-purple-800 max-w-2xl mb-12">
                Stay updated with the cryptocurrency market in real time.
                Track your favorite coins, monitor market trends, and read
                the latest crypto news from trusted sources—all in one place.
            </p>

            {/* Features */}
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-purple-900">

                {/* Feature 1 */}
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Real-Time Coin Tracking
                    </h3>
                    <p>
                        Follow cryptocurrency prices, market capitalization,
                        trading volume, and daily performance with live updates.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Favorite Coins
                    </h3>
                    <p>
                        Select and save your favorite cryptocurrencies for
                        quick access and personalized market monitoring.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Latest Crypto News
                    </h3>
                    <p>
                        Stay informed with breaking news, market updates,
                        blockchain developments, and crypto industry insights.
                    </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Market Trends & Analytics
                    </h3>
                    <p>
                        Analyze market movements, identify trending coins,
                        and make smarter investment decisions.
                    </p>
                </div>

                {/* Feature 5 */}
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Personalized Watchlist
                    </h3>
                    <p>
                        Create your own watchlist to keep track of the
                        cryptocurrencies that matter most to you.
                    </p>
                </div>

                {/* Feature 6 */}
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Modern & Responsive Design
                    </h3>
                    <p>
                        Enjoy a clean, intuitive, and fully responsive
                        experience across desktop, tablet, and mobile devices.
                    </p>
                </div>

            </div>
        </div>
    );
}
export default function Home() {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4 py-12">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center">
                Zenvix App
            </h1>

            {/* Description */}
            <p className="text-center text-blue-800 max-w-xl mb-12">
                Stream your favorite music anytime with Zenvix App. Discover, search, and enjoy songs online with a smooth and modern listening experience.
            </p>

            {/* Features */}
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-900">

                {/* Feature 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Online Music Streaming</h3>
                    <p>Listen to a wide range of songs online with fast and seamless playback.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Search Songs</h3>
                    <p>Quickly find your favorite songs with powerful search.</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Shuffle Play</h3>
                    <p>Enjoy your music in random order with the shuffle feature.</p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Repeat Mode</h3>
                    <p>Repeat your favorite songs or playlists with flexible repeat options.</p>
                </div>

                {/* Feature 5 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Favorites</h3>
                    <p>Save songs you love to your personal favorites list for quick access.</p>
                </div>

                {/* Feature 6 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Modern & Smooth UI</h3>
                    <p>Enjoy a clean, fast, and user-friendly interface designed for the best experience.</p>
                </div>

            </div>
        </div>
    );
}
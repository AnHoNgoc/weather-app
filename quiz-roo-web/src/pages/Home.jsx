export default function Home() {
    return (
        <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-center px-4 py-12">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4 text-center">
                QuizRoo App
            </h1>

            {/* Description */}
            <p className="text-center text-purple-800 max-w-2xl mb-12">
                Challenge your knowledge with fun and interactive quizzes.
                Choose your favorite category, play quiz packs, and get instant scores and performance evaluations after every session.
            </p>

            {/* Features */}
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-purple-900">

                {/* Feature 1 */}
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Multiple Quiz Categories
                    </h3>
                    <p>
                        Explore quizzes from categories like Science, History,
                        Technology, Movies, Sports, and more.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Quiz Packs
                    </h3>
                    <p>
                        Each category includes different quiz packs with varying
                        difficulty levels and exciting questions.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Instant Score Results
                    </h3>
                    <p>
                        Get your score immediately after completing a quiz and
                        track how well you performed.
                    </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Performance Evaluation
                    </h3>
                    <p>
                        Receive smart feedback and evaluations based on your
                        answers, accuracy, and quiz completion time.
                    </p>
                </div>

                {/* Feature 5 */}
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Fun & Competitive
                    </h3>
                    <p>
                        Challenge yourself, improve your knowledge, and compete
                        with friends through engaging quizzes.
                    </p>
                </div>

                {/* Feature 6 */}
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Smooth User Experience
                    </h3>
                    <p>
                        Enjoy a clean, modern, and responsive interface designed
                        for seamless quiz gameplay on all devices.
                    </p>
                </div>

            </div>
        </div>
    );
}
export default function QuizRooSupport() {
    return (
        <div className="min-h-screen bg-purple-50 px-6 py-12 text-left">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-purple-900 mb-8 text-center">
                    QuizRoo Support
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-purple-800 leading-relaxed">
                        Welcome to the QuizRoo support page. QuizRoo is a fun and interactive
                        quiz application where users can explore categories, play quiz packs,
                        and receive instant score evaluations after completing quizzes.
                    </p>
                </section>

                {/* Categories */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        1. Quiz Categories
                    </h2>

                    <ul className="list-disc list-inside text-purple-800 space-y-1">
                        <li>Browse available quiz categories.</li>
                        <li>Select your favorite topic to start playing.</li>
                        <li>Explore new quiz packs regularly.</li>
                    </ul>
                </section>

                {/* Quiz Packs */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        2. Playing Quiz Packs
                    </h2>

                    <ul className="list-disc list-inside text-purple-800 space-y-1">
                        <li>Choose a quiz pack from any category.</li>
                        <li>Answer questions before time runs out.</li>
                        <li>Complete quizzes to receive your final score.</li>
                    </ul>
                </section>

                {/* Scores */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        3. Scores & Evaluation
                    </h2>

                    <ul className="list-disc list-inside text-purple-800 space-y-1">
                        <li>Get instant quiz results after completion.</li>
                        <li>View your correct and incorrect answers.</li>
                        <li>Receive performance feedback and evaluation.</li>
                    </ul>
                </section>

                {/* User Experience */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        4. User Experience
                    </h2>

                    <ul className="list-disc list-inside text-purple-800 space-y-1">
                        <li>Enjoy a smooth and responsive interface.</li>
                        <li>Play quizzes anytime and anywhere.</li>
                        <li>Designed for both mobile and desktop devices.</li>
                    </ul>
                </section>

                {/* Internet */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        5. Internet Requirement
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        QuizRoo may require an internet connection to load quiz categories,
                        quiz packs, and user score information properly.
                    </p>
                </section>

                {/* FAQ */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        6. Frequently Asked Questions
                    </h2>

                    <div className="text-purple-800 leading-relaxed space-y-3">

                        <div>
                            <p>
                                <strong>Q: How do I start a quiz?</strong>
                            </p>

                            <p>
                                A: Select a category, choose a quiz pack,
                                and start answering questions.
                            </p>
                        </div>

                        <div>
                            <p>
                                <strong>Q: Can I replay quiz packs?</strong>
                            </p>

                            <p>
                                A: Yes, quiz packs can be replayed anytime.
                            </p>
                        </div>

                        <div>
                            <p>
                                <strong>Q: Will I receive my score instantly?</strong>
                            </p>

                            <p>
                                A: Yes, your score and evaluation appear immediately
                                after finishing the quiz.
                            </p>
                        </div>

                        <div>
                            <p>
                                <strong>Q: Does QuizRoo track personal information?</strong>
                            </p>

                            <p>
                                A: No unnecessary personal information is collected.
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
                        If you have questions or need help, contact us at{" "}
                        <a
                            href="mailto:your@email.com"
                            className="text-purple-600 underline"
                        >
                            your@email.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    );
}
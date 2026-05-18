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
                        Welcome to QuizRoo App. Your privacy is important to us.
                        QuizRoo is an interactive quiz application that allows users
                        to explore quiz categories, play quiz packs, and receive
                        score evaluations after completing quizzes.
                    </p>
                </section>

                {/* Data Collection */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        1. Information We Collect
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        QuizRoo may collect limited non-personal information
                        necessary to provide quiz functionality, improve app
                        performance, and enhance the user experience.
                        We do not collect unnecessary personal information.
                    </p>
                </section>

                {/* Quiz Features */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        2. Quiz Features & Usage
                    </h2>

                    <p className="text-purple-800 leading-relaxed mb-2">
                        The app provides features such as:
                    </p>

                    <ul className="list-disc list-inside text-purple-800 space-y-1">
                        <li>Browsing quiz categories</li>
                        <li>Playing quiz packs</li>
                        <li>Viewing quiz scores and evaluations</li>
                        <li>Tracking quiz performance</li>
                    </ul>

                    <p className="text-purple-800 mt-2">
                        These features are used only to improve your quiz and
                        learning experience inside the app.
                    </p>
                </section>

                {/* Internet */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        3. Internet Usage
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        QuizRoo may require an internet connection to load quiz
                        categories, quiz packs, and score information properly.
                    </p>
                </section>

                {/* Third Party */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        4. Third-Party Services
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        The app may use third-party services to support app
                        functionality, analytics, or content delivery.
                        These services may process limited technical information
                        necessary for proper operation.
                    </p>
                </section>

                {/* Security */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        5. Data Security
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        We take reasonable measures to protect user information
                        and maintain app security. However, no online service
                        can guarantee absolute security.
                    </p>
                </section>

                {/* User Rights */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        6. Your Rights
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        Users can manage their use of app features depending on
                        the functionality available inside QuizRoo.
                    </p>
                </section>

                {/* Updates */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        7. Policy Updates
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        We may update this Privacy Policy from time to time.
                        Any changes will be reflected on this page.
                    </p>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        8. Contact Us
                    </h2>

                    <p className="text-purple-800 leading-relaxed">
                        If you have any questions, please contact us at:
                        <a
                            href="mailto:your@email.com"
                            className="text-purple-600 underline ml-1"
                        >
                            your@email.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    );
}
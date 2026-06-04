export default function Home() {
    return (
        <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-center px-4 py-12">

            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4 text-center">
                Curalia App
            </h1>

            <p className="text-center text-purple-800 max-w-2xl mb-12">
                Curalia is an AI-powered health assistant that helps users better
                understand their symptoms and health concerns. Simply enter your
                information, receive AI-generated guidance, review conversation
                history, and manage your health discussions anytime.
            </p>

            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-purple-900">

                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        AI Health Assistant
                    </h3>
                    <p>
                        Ask health-related questions and receive AI-generated
                        guidance based on the information you provide.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Symptom Analysis
                    </h3>
                    <p>
                        Describe your symptoms and receive helpful insights that
                        may assist you in understanding your condition.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Conversation History
                    </h3>
                    <p>
                        Review previous health discussions and keep track of
                        your conversations with the AI assistant.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Clear Chat History
                    </h3>
                    <p>
                        Easily delete stored conversations whenever you choose
                        to manage your privacy and information.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Fast & Easy to Use
                    </h3>
                    <p>
                        Simply type your question or symptoms and receive
                        responses within seconds.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-semibold mb-2">
                        Modern User Experience
                    </h3>
                    <p>
                        Enjoy a clean, responsive, and user-friendly interface
                        optimized for all devices.
                    </p>
                </div>

            </div>
        </div>
    );
}
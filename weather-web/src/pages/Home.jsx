import mainImage from "../../public/img.jpg"

export default function Home() {
    return (
        <div className="min-h-screen bg-linear-to-b from-blue-100 via-blue-200 to-blue-300 flex flex-col items-center justify-center px-4 py-12">

            {/* Main Image */}
            <img
                src={mainImage}
                alt="Weather App"
                className="w-96 md:w-[500px] mb-8 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            />

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center">
                Weather App
            </h1>

            {/* Description */}
            <p className="text-center text-blue-800 max-w-xl mb-12">
                A precise and intuitive weather forecasting app. Check temperatures, daily forecasts, and receive alerts for changing weather conditions.
            </p>

            {/* Features */}
            <div className="max-w-3xl text-center text-blue-800">
                <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                <ul className="list-disc list-inside space-y-3 text-left mx-auto max-w-md">
                    <li>Hourly and daily weather forecasts.</li>
                    <li>Interactive temperature and precipitation maps.</li>
                    <li>Alerts for severe weather conditions.</li>
                    <li>User-friendly interface for both mobile and desktop.</li>
                </ul>
            </div>
        </div>
    );
}
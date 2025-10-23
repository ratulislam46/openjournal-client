import { Typewriter } from "react-simple-typewriter";

const features = [
    {
        icon: "📝",
        title: "Daily Journal",
        description: "Write your thoughts every day."
    },
    {
        icon: "🔒",
        title: "Secure & Private",
        description: "Your data is fully encrypted."
    },
    {
        icon: "😊",
        title: "Mood Tracker",
        description: "Track your emotions over time."
    },
    {
        icon: "💻",
        title: "Multi-device Sync",
        description: "Access from any device."
    },
];

const FeaturesSection = () => {
    return (
        <section>
            <div className='px-2 lg:px-0 pb-16'>
                <h2 className="text-5xl lg:text-6xl font-serif text-center uppercase mb-10">F
                    <span className='text-2xl lg:text-4xl'>
                        <Typewriter
                            words={["eatures"]}
                            loop={false}
                            cursor
                            cursorStyle="_"
                            typeSpeed={150}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </span>
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-base-100 border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-xl">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

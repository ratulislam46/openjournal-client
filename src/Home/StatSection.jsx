import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const stats = [
  { title: "Total Entries", count: 1200 },
  { title: "Happy Users", count: 350 },
  { title: "Journals Created", count: 900 },
];

const StatsSection = () => {
  return (
    <section>
      <div className='px-2 lg:px-0 pb-16'>
        <h2 className="text-5xl lg:text-6xl font-serif text-center uppercase mb-10">O
          <span className='text-2xl lg:text-4xl'>
            <Typewriter
              words={["ur Progress"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-base-100 hover:bg-primary/40 border border-primary/10 shadow-md rounded-2xl p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-4xl font-bold mb-2">
                <CountUp end={stat.count} duration={3} />
              </h3>
              <p>{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

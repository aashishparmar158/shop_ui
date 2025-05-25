import { motion } from "framer-motion";

const categories = [
  { id: 1, title: "Spacewear", image: "/src/assets/images/spacewear.jpg" },
  { id: 2, title: "Tech Gear", image: "/src/assets/images/techgear.jpg" },
  { id: 3, title: "Lifestyle", image: "/src/assets/images/lifestyle.jpg" },
  { id: 4, title: "Accessories", image: "/src/assets/images/accessories.jpg" },
  { id: 5, title: "Smart Helmets", image: "/src/assets/images/helmet.jpg" },
  { id: 6, title: "Gravity Boots", image: "/src/assets/images/boots.jpg" },
  { id: 7, title: "Mission Bags", image: "/src/assets/images/bags.jpg" },
  { id: 8, title: "Holographic Gadgets", image: "/src/assets/images/gadgets.jpg" },
  { id: 9, title: "Fusion Tools", image: "/src/assets/images/tools.jpg" },
];

const overlayVariant = {
  hidden: { opacity: 0 },
  hover: { opacity: 0.4 },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Categories() {
  const featured = categories[0];
  const bigLeft = categories[1];
  const bottomBig = categories[2];
  const smallGrid = categories.slice(3, 9);

  return (
    <section className="px-8 py-16 space-y-16">
      {/* TOP SECTION — Text + Featured Card */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Text */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1">
            <h2 className="text-4xl font-bold uppercase tracking-wide">
              explore
            </h2>
            <h2 className="text-7xl font-bold mb-4 uppercase tracking-widest text-blue-900">
              categories
            </h2>
            <p className="text-lg max-w-[88%]">
              Discover premium products tailored for the lunAR lifestyle. Dive into the future with us.
            </p>
        </motion.div>

        {/* Featured Card */}
        <motion.div
          className="relative group aspect-[4/2] lg:w-[55%] overflow-hidden rounded-3xl shadow-xl cursor-pointer"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "tween",
            ease: [0.6, 0.05, 0.01, 0.9],
            duration: 0.8,
            delay: 0.2,
          }}
          whileHover="hover"
        >
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-full object-cover"
          />
          <motion.div
            variants={overlayVariant}
            className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-3xl"
          />
          <div className="absolute bottom-4 left-4 text-white text-2xl font-semibold z-10">
            {featured.title}
          </div>
        </motion.div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Big Card */}
        <motion.div
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          className="relative group h-[850px] lg:w-[43%] overflow-hidden rounded-3xl shadow-xl cursor-pointer"
          whileHover="hover"
        >
          <img
            src={bigLeft.image}
            alt={bigLeft.title}
            className="w-full h-full object-cover"
          />
          <motion.div
            variants={overlayVariant}
            className="absolute inset-0 bg-gradient-to-tr from-indigo-600 via-purple-500 to-pink-400 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-3xl"
          />
          <div className="absolute bottom-4 left-4 text-white text-2xl font-semibold z-10">
            {bigLeft.title}
          </div>
        </motion.div>

        {/* Right Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {smallGrid.map((cat) => (
              <motion.div
                key={cat.id}
                className="relative group h-[400px] overflow-hidden rounded-2xl shadow-md cursor-pointer"
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  variants={overlayVariant}
                  className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl"
                />
                <div className="absolute bottom-3 left-3 text-white text-lg font-semibold z-10">
                  {cat.title}
                </div>
              </motion.div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM BIG CARD */}
      <motion.div
        variants={itemVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        whileHover="hover"
        className="relative group h-[700px] w-full overflow-hidden rounded-3xl shadow-xl cursor-pointer"
      >
        <img
          src={bottomBig.image}
          alt={bottomBig.title}
          className="w-full h-full object-cover"
        />
        <motion.div
          variants={overlayVariant}
          className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-600 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-3xl"
        />
        <div className="absolute bottom-4 left-4 text-white text-2xl font-semibold z-10">
          {bottomBig.title}
        </div>
      </motion.div>
    </section>
  );
}

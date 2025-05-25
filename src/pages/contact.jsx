import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MailCheck } from "lucide-react";
import contactImg from "../assets/images/contact-image-12.jpg";
import contactForm from "../assets/images/contact-form.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// New variants for grouped buttons and single email button
const buttonGroupVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const emailButtonVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
};

// Form inputs container with stagger after email button
const formInputsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1, // delay after email button animates in
    },
  },
};

const ContactUs = () => {
  const [showForm, setShowForm] = useState(false);

  // Note: You had onChange handlers referencing setFormData but no formData state
  // For this demo, I'm removing those to avoid errors — add your own handlers as needed.

  return (
    <div className="flex flex-col items-center w-full relative overflow-hidden min-h-screen">
      <AnimatePresence>
        {!showForm && (
          <motion.div
            key="topSection"
            className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-4 lg:px-20 py-16 gap-12 w-full absolute inset-0 bg-white"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0, transition: { duration: 0.8 } }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={contactImg}
                alt="Contact Illustration"
                className="w-full h-[80vh] object-cover"
              />
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-normal mb-4">CONTACT US</h2>
              <h1 className="text-7xl font-semibold mb-4">
                REACH THE <span className="text-blue-900">LUNAR</span>
              </h1>
              <p className="text-gray-600 mb-6">
                We’re here to answer your questions, collaborate on opportunities,
                or simply talk about the future of lunar tech. Drop us a message and
                we’ll get back to you ASAP.
              </p>
              <button
                className="bg-blue-900 text-white text-lg px-6 py-2 rounded shadow hover:bg-blue-800 transition cursor-pointer"
                onClick={() => setShowForm(true)}
              >
                Contact
              </button>
            </motion.div>
          </motion.div>
        )}

        {showForm && (
          <motion.div
            key="formSection"
            className="min-h-[90vh] w-full bg-white text-gray-800 flex flex-col items-center justify-center px-4 py-12 absolute inset-0"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1, delay: 0.4, transition: { duration: 0.8 } }}
            exit={{ y: "100%", opacity: 0, transition: { duration: 0.8 } }}
          >
            <motion.div
              className="w-full max-w-[1740px] bg-white p-8 grid grid-cols-1 md:grid-cols-2 gap-10"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Left Side - Form Info */}
              <motion.div
                className="space-y-6 flex flex-col items-start justify-center"
                variants={itemVariants}
              >
                <h1 className="text-5xl font-semibold">Let's Get in Touch</h1>
                <p className="text-gray-600">
                  Whether you have a question, a comment, or just want to chat, you
                  can reach out to us through this contact form, or via call, chat,
                  or email.
                </p>

                {/* Group: Support Chat + Call buttons together */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 w-full"
                  variants={buttonGroupVariants}
                >
                  <button className="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2">
                    💬 Via Support Chat
                  </button>
                  <button className=" w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2">
                    📞 Via Call
                  </button>
                </motion.div>

                {/* Email button with delay */}
                <motion.button
                  className="border bg-white text-black py-2 px-4 w-full rounded-lg flex items-center justify-center gap-2 mt-4"
                  variants={emailButtonVariant}
                >
                 <MailCheck size={22} className="text-black"/>
                 Via Email Form
                </motion.button>

                {/* Form inputs with staggered animation */}
                <motion.form
                  className="space-y-4 pt-4 w-full"
                  variants={formInputsContainerVariants}
                >
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full border-b border-gray-800 placeholder:text-gray-700 focus:outline-none py-2"
                    variants={itemVariants}
                  />
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    className="w-full border-b border-gray-800 placeholder:text-gray-700 focus:outline-none py-2"
                    variants={itemVariants}
                  />
                  <motion.textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    className="w-full border border-gray-800 rounded-lg p-2 placeholder:text-gray-700 focus:outline-none"
                    variants={itemVariants}
                  />
                  <button
                    type="submit"
                    className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition cursor-pointer"
                  >
                    Send Message
                  </button>
                </motion.form>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div
                className="flex justify-center items-center"
                variants={itemVariants}
              >
                <motion.img
                  src={contactForm}
                  alt="Contact Illustration"
                  className="max-w-full h-[95vh] object-cover"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactUs;

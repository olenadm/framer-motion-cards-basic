import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LayoutCards = () => {
  const [selectedId, setSelectedId] = useState("");
  const items = [
    {
      id: "1",
      title: "Card 1",
      subtitle: "Information 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      title: "Card 2",
      subtitle: "Information 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: "3",
      title: "Card 3",
      subtitle: "Information 3",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      id: "4",
      title: "Card 4",
      subtitle: "Information 4",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <main>
        <h1>Layout Cards Animated with <span>Framer Motion</span></h1>
      <div className="layout-cards">
        {items.map((item) => (
          <motion.div
            className={`card ${selectedId === item.id ? "card-selected" : ""}`}
            layoutId={`card-container-${item.id}`}
            onClick={() => setSelectedId(item.id)}
            key={item.id}
            initial={{ scale: 1 }}
            animate={{ scale: selectedId === item.id ? 1.1 : 1 }} // Increase scale on selected card
            transition={{ duration: 0.3 }}
          >
            <div className="card-body">
              <motion.h2>{item.title}</motion.h2>
              <motion.h5>{item.subtitle}</motion.h5>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="dim-layer"
          animate={{ opacity: selectedId ? 0.5 : 0 }}
        />
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="layout-cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {items.map(
              (item) =>
                item.id === selectedId && (
                  <motion.div
                    className="card opened-card"
                    layoutId={`card-container-${item.id}`}
                    key={item.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <motion.div className="card-body">
                      <motion.button
                        className="close"
                        onClick={() => setSelectedId("")}
                      >
                        X
                      </motion.button>
                      <motion.h2 className="">{item.title}</motion.h2>
                      <motion.h5>{item.subtitle}</motion.h5>
                      <motion.p>{item.description}</motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Additional content can go here!
                      </motion.p>
                    </motion.div>
                  </motion.div>
                )
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="footer"><a href="https://github.com/olenadm/framer-motion-cards-basic">GitHub</a></div>
  </main>
  );
};

export default LayoutCards;

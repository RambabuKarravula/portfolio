"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Automated ETL Pipeline",
    description: "Automated Data ETL Pipeline with Apache Airflow on AWS EC2 This project implements an automated data ETL (Extract, Transform, Load) pipeline using Apache Airflow on an AWS EC2 instance.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: " https://github.com/RambabuKarravula/ETL-Pipeline",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Telecom customer churn prediction",
    description: " A classification model for reducing churn rate in a telecom company using techniques like random forests, PCA, and logistic regression",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RambabuKarravula/machine-learning-for-telecom-customer-churn-prediction.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Malware Detection",
    description: "Developed a sophisticated system leveraging Machine Learning (ML) and Deep Learning (DL) algorithms to detect and mitigate advanced malware threats",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: " https://github.com/RambabuKarravula/Malware-Detection-Using-Ml-And-Dl-Techniques",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

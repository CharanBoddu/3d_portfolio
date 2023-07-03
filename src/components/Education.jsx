import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {motion} from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import {styles} from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({education}) => {

}

const Education = () => {
  return (
    <>
    <motion.div 
    variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Education.</h2>

    </motion.div>

    <div className="mt-20 flex flex-col">
    <VerticalTimeline>
      {educations.map((education, index) => (
        <EducationCard
          key={`education-${index}`}
          education={education}
          />
      ))}
    </VerticalTimeline>

    </div>
    </>
  )
}

export default SectionWrapper(Education, "education")
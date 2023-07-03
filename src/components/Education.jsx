import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {motion} from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import {styles} from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Education = () => {
  return (
    <>
    <motion.div 
    variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Education.</h2>

    </motion.div>
    </>
  )
}

export default SectionWrapper(Education, "education")
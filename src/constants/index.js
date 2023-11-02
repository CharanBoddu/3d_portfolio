import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    sql,
    c,
    java,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    collegedunia,
    ldanl,
    carnegie,
    ubc,
    memorial,
    paradies,
    portfolio,
    summarizer,
    knights,
    cantstop,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },

    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Cloud Services",
      icon: mobile,
    },
    {
      title: "Photography",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "c",
      icon: c,
    },
  ];

  const educations = [
   
    {
      title: "Memorial University of Newfoundland",
      company_name: "Bachelor of Science (Computer Science)",
      icon: memorial,
      iconBg: "#383E56",
      date: "September 2021 - April 2024", 
      points: [
        "Faculty of Science Dean's List- 2022-2023"
      ],
    },
    {
      title: "University of British Columbia (Okanagan)",
      company_name: "Bachelor of Science (Computer Science)",
      icon: ubc,
      iconBg: "#E6DEDD",
      date: "Sep 2020 - April 2021",
      points: [
        "Faculty of Science Dean's List - 2020-2021"
      ],
    },
  ];
  
  const experiences = [

    {
      title: "Front-End Web Developer",
      company_name: "Carnegie Learning",
      icon: carnegie,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Decemeber 2024",
      points: [
        "More information to be coming soon."
      ],
    },

    {
      title: "IT Assistant & Lead Math Tutor",
      company_name: "Learning Disabilities Association of NL",
      icon: ldanl,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Work one-on-one with students with learning disabilities to tutor mathematics and develop tailored teaching strategies and lesson plans to address individual learning difficulties",
        "Provide personalized guidance and support to students on challenging math assignments and regularly provide feedback to parents about student progress.",
        "Created and optimized various IT projects, leveraging tools such as Python, SQL, and Microsoft Suite to increase program efficiency and productivity. Facilitated tech assistance, ensuring reliable system functionality and user-friendly aspects. "
      ],
    },

    {
      title: "Student Assistant",
      company_name: "Memorial University of Newfoundland",
      icon: memorial,
      iconBg: "#383E56",
      date: "Oct 2021 - Present",
      points: [
        "Expertly managed a diverse range of student services duties, including student advising and coordination of student activities.",
        "Quickly and effectively answered a high volume of student enquiries, both in person and over the phone, resulting in an impressive customer satisfaction rating of 93%.",
        "Utilized Student Banner at the Office of the Registrar to generate emails and compile transfer credit, transcripts, and relevant documents efficiently, streamlining processes and saving time."
      ],
    },

    {
      title: "Sales Associate",
      company_name: "Paradies Lagardère",
      icon: paradies,
      iconBg: "#E6DEDD",
      date: "June 2023 - September 2023",
      points: [
        "Exceed First Class Service standards while interacting with all customers, business partners, and peers.",
        "Customers and colleagues should be treated in accordance with the company's fundamental values. Increase client loyalty and sales abilities by using accessible training resources.",
        "Process all POS transactions quickly and efficiently while adhering to the company's Cash Handling and Loss Prevention Standard Operating Procedures.",
        "Adhere to strict Transport Canada requirements and maintain entry to restricted areas while working in the secure air side of the airport."
      ],
    },
    
    {
      title: "Global Ambassador",
      company_name: "CollegeDunia",
      icon: collegedunia,
      iconBg: "#383E56",
      date: "Aug 2020 - October 2020",
      points: [
        "Built strong bonds with students and provided ongoing support through successful webinars",
        "Made a significant impact by facilitating the enrollment of 50 students into international universities through effective communication and dedicated support.",
      ],
    },
    
   
  ];
  
  
  const projects = [
    {
      name: "Personal Portfolio",
      description:
        "My portfolio websited showcasing my experiences, education designed with ThreeJS, TailWindCSS etc.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "reactthreefiber",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "framermotion",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/CharanBoddu/3d_portfolio",
    },
    {
      name: "AI Article Summarizer",
      description:
        "Web application that enables users to sumamrizes articles efficiently using Open AI's GPT.",
      tags: [
        {
          name: "reactJS",
          color: "blue-text-gradient",
        },
        {
          name: "ReduxToolKit",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: summarizer,
      source_code_link: "https://cboddu-aisummarizer.vercel.app/",
    },
    {
      name: "Can't Stop Game",
      description:
        "Collobarative group-designed Digitalized board game called Can't stop by Sid Sackson using Java GUI, frame etc.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Interactive GUI",
          color: "green-text-gradient",
        },
        {
          name: "UI/UX Designing",
          color: "pink-text-gradient",
        },
      ],
      image: cantstop,
      source_code_link: "https://github.com/CharanBoddu/CantStop",
    },
    {
      name: "Knight's Game",
      description:
        "A video game adaptation of the classic puzzle.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Interactive GUI",
          color: "green-text-gradient",
        },
        {
          name: "UI/UX Designing",
          color: "pink-text-gradient",
        },
      ],
      image: knights,
      source_code_link: "https://github.com/CharanBoddu/Knightsgame",
    },
  ];
  
  export { services, technologies, educations, experiences, projects };
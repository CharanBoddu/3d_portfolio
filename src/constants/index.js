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
    statefarm,
    ubc,
    memorial,
    potsdam,
    paradies,
    portfolio,
    dynamicflight,
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
      date: "September 2021 - December 2025", 
      points: [
        "Faculty of Science Dean's List- 2022-2023"
      ],
    },

    {
      title: "Universität Potsdam",
      company_name: "Exchange Semeseter (German)",
      icon: potsdam,
      iconBg: "#383E56",
      date: "April 2025 - September 2025", 
      points: [
        "Potsdam Exchange Scholarship from the Federal Republic of Germany."
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
      title: "Software Developer",
      company_name: "Carnegie Learning",
      icon: carnegie,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Jan 2025",
       points: [
      `Cleaned and standardized student data using Python and SQL, applying schema design principles to ensure accurate reporting across dashboards, and automated dataset uploads to AWS S3 for secure, centralized access and seamless integration with analytics tools.`,
      `Automated data set uploads and access management in AWS S3, ensuring secure, centralized storage, and seamless integration with visualization tools.`,
      `Developed and maintained responsive, data-driven dashboards using Angular, TypeScript, and D3.js, improving page load time by ~25% and enabling real-time student performance insights for over 4,000+ users`,
      `Designed, built and optimized Angular components for QA workflows using TypeScript and Angular CLI, integrating REST APIs and optimized data fetching workflows to cut API call overhead by ~20%, improving overall UI stability and responsiveness.`,
      `Conducted comprehensive testing and debugging, improving reliability and developer experience while minimizing recurring production issues.`,
      `Collaborated in Agile Scrum teams, actively participating in sprint planning, utilizing Jira for task management, backlog grooming, and stakeholder demos to deliver features on time and aligned with business goals`,
      `Managed codebase using Git and Bitbucket, adhering to team standards by creating feature branches, submitting pull requests (PRs) and actively participating in code reviews to maintain high code quality and consistency.`
    ],
    },

     {
      title: "Data Engineering Intern",
      company_name: "State Farm Insurance",
      icon: statefarm,
      iconBg: "#E6DEDD",
      date: "Apr 2022 - Sep 2022",
       points: [
      `Architected scalable AWS data infrastructure using Glue, Lambda, S3, Redshift, and Athena, building fault-tolerant pipelines that processed millions of insurance records daily, enabling predictive modeling and analytics workflows for finance and actuarial teams.`,
      `Engineered production-grade ETL pipelines using Python, PySpark, and Terraform, automating complex data transformations that eliminated 30% of manual processing effort, accelerating time-to-insight from days to hours for analytics teams.`,
      `Optimized PostgreSQL database performance, implementing schema design principles, indexing strategies, and query optimization techniques that reduced query execution times by up to 40%, ensuring scalable data architecture for analytics workloads.`,
      `Partnered with cross-functional stakeholders to translate business requirements into technical solutions, researching internal/external data sources and delivering analytics-ready data assets that enabled data-driven decision-making across product teams.`,
      `Championed GitOps best practices, implementing version control workflows, automated testing, and CI/CD pipelines through GitHub that streamlined deployment processes and maintained 99%+ code quality standards across data engineering initiatives.`,
    ],
    },

    {
      title: "Tutoring Coordination Assistant & Lead Mathematics Tutor",
      company_name: "Learning Disabilities Association of NL",
      icon: ldanl,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Coached students with learning disabilities one-on-one, creating tailored teaching plans and fostering measurable improvement in math skills within a month. ",
        "Optimized and developed the Learner Intake Academic Screening program and Adult Literacy Support initiative, streamlining note-keeping and tutor support processes",
        "Mentored and trained new tutors, sharing best practices and resources to ensure quality instructional delivery across the program."
      ],
    },

    {
      title: "Student Assistant",
      company_name: "Memorial University of Newfoundland",
      icon: memorial,
      iconBg: "#383E56",
      date: "Oct 2021 - Apr 2025",
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
      name: "Dynamic Flight Simulator",
      description:
        "Engineered an action-based flight simulator using Three.js, implementing procedural content generation with Perlin noise to create unique, replayable flight paths and dynamic terrains.",
      tags: [
        {
          name: "Three.js",
          color: "blue-text-gradient",
        },
        {
          name: "AI",
          color: "green-text-gradient",
        },
        {
          name: "Perlin noise",
          color: "pink-text-gradient",
        },
        {
          name: "framermotion",
          color: "blue-text-gradient",
        },
      ],
      image: dynamicflight,
      source_code_link: "https://github.com/CharanBoddu/Dynamic-Flight-Simulator",
    },
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

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
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
    memorial,
    paradies,
    carrent,
    jobit,
    tripguide,
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
      name: "TypeScript",
      icon: typescript,
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "docker",
      icon: docker,
    },
  ];

  const educations = [
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
    {
      title: "Sales Associate",
      company_name: "Paradies Lagardère",
      icon: paradies,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
        "Exceed First Class Service standards while interacting with all customers, business partners, and peers.",
        "Customers and colleagues should be treated in accordance with the company's fundamental values. Increase client loyalty and sales abilities by using accessible training resources.",
        "Process all POS transactions quickly and efficiently while adhering to the company's Cash Handling and Loss Prevention Standard Operating Procedures.",
        "Adhere to strict Transport Canada requirements and maintain entry to restricted areas while working in the secure air side of the airport."
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
      title: "Mathematics Tutor",
      company_name: "Learning Disabilities Association of NL",
      icon: ldanl,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Work one-on-one with students with learning disabilities to tutor mathematics and develop tailored teaching strategies and lesson plans to address individual learning difficulties",
        "Provide personalized guidance and support to students on challenging math assignments and regularly provide feedback to parents about student progress."
      ],
    },
  ];
  
  const experiences = [
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
    {
      title: "Sales Associate",
      company_name: "Paradies Lagardère",
      icon: paradies,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
        "Exceed First Class Service standards while interacting with all customers, business partners, and peers.",
        "Customers and colleagues should be treated in accordance with the company's fundamental values. Increase client loyalty and sales abilities by using accessible training resources.",
        "Process all POS transactions quickly and efficiently while adhering to the company's Cash Handling and Loss Prevention Standard Operating Procedures.",
        "Adhere to strict Transport Canada requirements and maintain entry to restricted areas while working in the secure air side of the airport."
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
      title: "Mathematics Tutor",
      company_name: "Learning Disabilities Association of NL",
      icon: ldanl,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Work one-on-one with students with learning disabilities to tutor mathematics and develop tailored teaching strategies and lesson plans to address individual learning difficulties",
        "Provide personalized guidance and support to students on challenging math assignments and regularly provide feedback to parents about student progress."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, educations, experiences, testimonials, projects };
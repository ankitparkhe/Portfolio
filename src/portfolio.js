const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ankit Parkhe | Data Analyst Portfolio",
  description:
    "Ankit Parkhe is a data analyst with a passion for uncovering insights, visualizing data, and driving decision-making through data storytelling and analytics. Skilled in SQL, Python, Excel, Power BI, and modern data tools.",
  og: {
    title: "Ankit Parkhe Portfolio",
    type: "website",
    url: "https://your-portfolio-url.com", // ← update when deployed
  },
};

//Home Page
const greeting = {
  title: "Hey there,",
  sub: "Ankit Parkhe",
  logo_name: "Ankit Parkhe",
  resumeLink: "", // Add your actual resume link here
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/ankitparkhe",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/ankitparkhe/",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Analytics & BI Tools",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient in analyzing large datasets to extract actionable insights and support business decisions",
        "⚡ Experienced in building interactive dashboards using Power BI and Tableau",
        "⚡ Strong command over data wrangling, transformation, and storytelling through visual analytics",
        "⚡ Delivered market and performance dashboards for Ed-Tech, Automotive, and Real Estate sectors",
      ],
      softwareSkills: [
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Machine Learning & Recommender Systems",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed personalized content recommendation systems using collaborative and content-based filtering",
        "⚡ Built ML-powered movie and book recommender systems with Streamlit and Python",
        "⚡ Performed in-depth exploratory data analysis on structured datasets for model development",
        "⚡ Hands-on experience with Scikit-learn and ML workflows using Jupyter & Streamlit",
      ],
      softwareSkills: [
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#F37626",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
      ],
    },
    {
      title: "Dashboarding & Insights",
      fileName: "DesignImg",
      skills: [
        "⚡ Designed interactive Tableau dashboards for real estate and EV industry trend analysis",
        "⚡ Built Power BI reports to visualize student metrics for Ed-Tech platforms",
        "⚡ Focused on actionable KPIs, user segmentation, and market potential exploration",
        "⚡ Leveraged business intelligence tools to bridge the gap between raw data and strategic decisions",
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",
          },
        },
        {
          skillName: "Google Data Studio",
          fontAwesomeClassname: "simple-icons:googledatastudio",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I specialize in building innovative projects using modern technologies, with most deployments hosted on Streamlit for seamless accessibility.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    // Your old ones...

    {
      title: "Movie Recommender System",
      img_path: "image1.png", // Reusing old image
      description:
        "Movie Recommender System offers personalized movie suggestions based on the movie selected by the user. Once a movie is chosen, the system recommends similar movies.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "https://movierecommender-ceb4cter4zhqgaordpgq94.streamlit.app/",
      code: "https://github.com/ankitparkhe/Movie_Recommender",
      linkcolor: "white",
    },

    {
      title: "Book Recommender System",
      img_path: "image4.png", // Reusing old image
      description:
        "Developed a data-driven book recommender system by performing end-to-end data analysis on a dataset of over 11,000 books.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "data analysis",
          color: "#8700b0",
        },
      ],
      link: "https://github.com/ankitparkhe/Book-Recommender",
      code: "https://github.com/ankitparkhe/Book-Recommender",
      linkcolor: "white",
    },

    {
      title: "Electric Vehicles Data Analysis",
      img_path: "image2.jpg", // Reusing old image
      description:
        "Created a Tableau dashboard for EV Market Shift Analysis to reveal untapped opportunities in emerging EV service markets with the highest growth potential.",
      tags: [
        {
          lang: "Tableau",
          color: "#005C5C",
        },
        {
          lang: "business strategy",
          color: "#820032",
        },
      ],
      link:
        "https://public.tableau.com/app/profile/ankit.parkhe/viz/FutureVoltTheEVGrowthBlueprint/Dashboard1",
      code: "https://github.com/ankitparkhe/Electric-Vehicles-Data-Analysis",
      linkcolor: "white",
    },

    {
      title: "Mumbai Property Survey",
      img_path: "image5.jpg", // Reusing old image
      description:
        "Developed a Tableau dashboard for Saffron Realities to assist in making data-driven decisions for expanding their business in Mumbai real estate market.",
      tags: [
        {
          lang: "Tableau",
          color: "#005C5C",
        },
        {
          lang: "real estate analysis",
          color: "#c47206",
        },
      ],
      link:
        "https://public.tableau.com/app/profile/ankit.parkhe/viz/MumbaiPropertySurvey/Dashboard1",
      code: "https://github.com/ankitparkhe/Mumbai-Property-Survey-",
      linkcolor: "white",
    },

    {
      title: "Ed-Tech Power BI Dashboard",
      img_path: "image3.png", // Reusing old image
      description:
        "Designed a Power BI Dashboard for an online coaching platform offering online courses, hosted on Power BI Service.",
      tags: [
        {
          lang: "Power BI",
          color: "#F2C811",
        },
        {
          lang: "data visualization",
          color: "#8700b0",
        },
      ],
      link: "https://github.com/ankitparkhe/ED-Tech-Power-Bi-Dashboard-",
      code: "https://github.com/ankitparkhe/ED-Tech-Power-Bi-Dashboard-",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Data Analyst",
        subtitle: "Techsharp Engineering Corp, India",
        date: "Aug 2022 – Aug 2023",
        content: [
          "Designed, created, and published engineering visualization dashboards (Power BI/Tableau) to monitor asset performance, analyzing historical equipment data to forecast spare parts demand, reducing unplanned downtime by 15%",
          "Identified and defined new data process opportunities, optimizing procurement strategies by analyzing supplier lead times, reducing material shortages and procurement costs by 5%",
          "Identified process improvement opportunities, streamlining inventory management by analyzing failure patterns and optimizing restocking schedules",
          "Contributed to data documentation, ensuring adherence to data governance processes and best practices",
          "Optimized shift scheduling by analyzing production output vs. labor hours, reducing idle time by 25%",
        ],
      },
      {
        title: "Data & Reporting Analyst",
        subtitle: "Saffron Realities, Remote",
        date: "Jan 2022 – Aug 2022",
        content: [
          "Collaborated with the construction and project management teams to analyze project timelines, budgets, and resource allocation, identifying areas for cost optimization and improved efficiency",
          "Collaborated with finance and project management teams to analyze budgets, forecast costs, and ensure projects remained within financial targets, demonstrating strong team working and communication skills",
          "Utilized SharePoint for document management and cross-team collaboration, improving workflow efficiency",
          "Presented insights to executives using PowerPoint, translating complex data into actionable business strategies",
          "Designed and implemented Tableau dashboards to support the organization's business expansion strategy, specifically for Mumbai city, visualizing house prices based on location and facilities enabling stakeholders to identify high-demand areas and prioritize locations for new housing projects",
        ],
      },
      {
        title: "Jr Data Analyst",
        subtitle: "DD Designwala (Digital Marketing), India",
        date: "Jun 2021 – Dec 2021",
        content: [
          "Automated marketing performance reporting using Python scripts and Excel Power Query, reducing report generation time by 60%",
          "Created dynamic dashboards using Excel and Power BI to monitor web engagement metrics",
          "Automated reporting pipelines using Python and Excel Power Query, reducing manual reporting workload by 60%",
          "Collaborated with the web and marketing teams to explore user behavior patterns using tools comparable to Full Story",
          "Supported the content marketing team by analyzing the performance of blog posts, videos, and other content, providing insights to improve content strategy and engagement",
        ],
      },
      // Keep existing entries or remove/update as needed
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Postgraduate Certificate in Data Science",
          subtitle:
            "Southern Alberta Institute of Technology, Calgary, Alberta",
          date: "Sep 2024 – Apr 2025",
          content: ["Grade: A+"],
        },
        {
          title: "Postgraduate Certificate in Project Management",
          subtitle: "MacEwan University, Edmonton, Alberta",
          date: "Sep 2023 – Aug 2024",
          content: ["Grade: A+"],
        },
        {
          title:
            "Bachelor of Arts in International Relations & Political Science",
          subtitle: "Fergusson College, India",
          date: "Jun 2018 – May 2022",
          content: ["CGPA: 9.01", "O Grade (First Rank)"],
        },
      ],
    },
    {
      title: ["Volunteering"],
      data: [
        {
          title: "Research and Development Team Member",
          subtitle: "Enactus SAIT",
          date: "Sept 2024 – Present",
          content: [],
        },
        {
          title: "Business Analyst",
          subtitle: "CodeBlazers | SAIT",
          date: "Nov 2024 – Present",
          content: [],
        },
      ],
    },
  ],
};

//certificate cards
// const certifications = {
//   certifications: [
//     {
//       title: "Tableau Analyst",
//       subtitle: "Tableau",
//       logo_path: "tabana-01.png",
//       certificate_link:
//         "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
//       alt_name: "Tableau",
//       color_code: "#000000",
//     },
//     {
//       title: "Tableau Consumer",
//       subtitle: "Tableau",
//       logo_path: "tabcon-01.png",
//       certificate_link:
//         "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
//       alt_name: "Tableau",
//       color_code: "#000000",
//     },
//     {
//       title: "Problem solving",
//       subtitle: "HackerRank",
//       logo_path: "problem-01.png",
//       certificate_link: "https://www.hackerrank.com/rohankokkula",
//       alt_name: "HackerRank",
//       color_code: "#000000",
//     },
//     {
//       title: "Python",
//       subtitle: "HackerRank",
//       logo_path: "python-01.png",
//       certificate_link: "https://www.hackerrank.com/rohankokkula",
//       alt_name: "HackerRank",
//       color_code: "#000000",
//     },
//     {
//       title: "Certificate of Merit",
//       subtitle: "Summer Analytics | IIT Guwahati",
//       logo_path: "iitg-01.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "IITG",
//       color_code: "#000000",
//     },
//     {
//       title: "Tableau Desktop Qualified Associate",
//       subtitle: "SimpliLearn",
//       logo_path: "simplilearn-01.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Simplilearn",
//       color_code: "#000000",
//     },
//     {
//       title: "Question Generation using Transformers",
//       subtitle: "Udemy",
//       logo_path: "udemy-01.png",
//       certificate_link:
//         "https://www.udemy.com/certificate/UC-b17c4c21-91e3-4f8b-b9c2-259468910985/",
//       alt_name: "Udemy",
//       color_code: "#000000",
//     },
//     {
//       title: "Machine Learning",
//       subtitle: "Stanford University",
//       logo_path: "coursera-01.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Stanford University",
//       color_code: "#000000",
//     },
//     {
//       title: "Data Visualization",
//       subtitle: "University of Michigan",
//       logo_path: "coursera-01.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "University of Michigan",
//       color_code: "#000000",
//     },
//     {
//       title: "Data Scientist Career Track",
//       subtitle: "DataCamp",
//       logo_path: "datacamp-01.png",
//       certificate_link:
//         "https://www.datacamp.com/statement-of-accomplishment/track/29f2ddab3fbfd0a470713a19c729c0f9d89c88aa",
//       alt_name: "DataCamp",
//       color_code: "#000000",
//     },
//     {
//       title: "PowerBI Masters",
//       subtitle: "iNeuron.ai",
//       logo_path: "ineuron-01.png",
//       certificate_link:
//         "https://academy.ineuron.ai/certificates/downloads/PB009929.pdf",
//       alt_name: "HackerRank",
//       color_code: "#000000",
//     },
//     {
//       title: "Tableau Masters",
//       subtitle: "iNeuron.ai",
//       logo_path: "ineuron-01.png",
//       certificate_link:
//         "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
//       alt_name: "HackerRank",
//       color_code: "#000000",
//     },
//   ],
// };
const certifications = {
  certifications: [
    {
      title: "Power BI",
      subtitle: "Data Visualization & Dashboarding",
      fontAwesomeClassname: "fab fa-microsoft",
      color_code: "#F2C811",
    },
    {
      title: "Tableau",
      subtitle: "Data Visualization & Insights",
      fontAwesomeClassname: "fas fa-chart-bar",
      color_code: "#E97627",
    },
    {
      title: "Excel",
      subtitle: "Spreadsheet Analytics & Automation",
      fontAwesomeClassname: "fas fa-file-excel",
      color_code: "#217346",
    },
    {
      title: "SQL",
      subtitle: "Database Querying",
      fontAwesomeClassname: "fas fa-database",
      color_code: "#4479A1",
    },
    {
      title: "Python",
      subtitle: "Data Science & Automation",
      fontAwesomeClassname: "fab fa-python",
      color_code: "#3776AB",
    },
    {
      title: "Scikit-learn",
      subtitle: "Machine Learning",
      fontAwesomeClassname: "fas fa-cogs",
      color_code: "#F7931E",
    },
    {
      title: "Streamlit",
      subtitle: "Data App Deployment",
      fontAwesomeClassname: "fas fa-rocket",
      color_code: "#FF4B4B",
    },
    {
      title: "Jupyter",
      subtitle: "Notebook-Based Development",
      fontAwesomeClassname: "fas fa-book",
      color_code: "#F37626",
    },
    {
      title: "Pandas",
      subtitle: "Data Manipulation",
      fontAwesomeClassname: "fas fa-table",
      color_code: "#150458",
    },
    {
      title: "NumPy",
      subtitle: "Numerical Computation",
      fontAwesomeClassname: "fas fa-square-root-alt",
      color_code: "#013243",
    },
    {
      title: "Google Data Studio",
      subtitle: "Interactive Reports & BI",
      fontAwesomeClassname: "fab fa-google",
      color_code: "#4285F4",
    },
    {
      title: "Git",
      subtitle: "Version Control & Collaboration",
      fontAwesomeClassname: "fab fa-git-alt",
      color_code: "#F1502F",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, and I will reply within 24 hours. I can help you with Data Analysis, Power BI, Tableau, and Dashboard Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Calgary, Alberta",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "5879366033",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ankitparkhe",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://ca.linkedin.com/in/ankitparkhe",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ankit.parkhe@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};

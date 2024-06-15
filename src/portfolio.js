/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hussain Zahid",
  title: "Hi all, I am Hussain",
  subTitle: emoji(
    "Forward looking Software Engineer 🚀 with 3 years of experience in building enterprise applications using latest technologies like Typescript/ Node.js/ React.js/ Redux/ AWS."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1OfUJf3cFiLRGbAdo2wlhsnSGqW1ATDsN/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hussainzahidgiki",
  linkedin: "https://www.linkedin.com/in/hussain-zahid",
  gmail: "hussainzahidgiki@gmail.com",
  medium: "https://medium.com/@hussainzahidgiki",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK ENGINEER INTERESTED IN CLOUD",
  skills: [
    emoji(
      "⚡ Develop responsive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Design and Develop scalable and well documented APIs"),
    emoji("⚡ Develop secure APIs that incorporate OWASP Top 10"),
    emoji("⚡ Write clean code adhering to SOLID principles"),
    emoji("⚡ Write Unit and End to End tests.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    /*     {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }, */
    {
      schoolName: "Cardiff University",
      logo: require("./assets/images/Cardiff_University_Logo.png"),
      subHeader: "Master of Science in Software Engineering",
      duration: "January 2023 - January 2024",
      desc: "Distinction. Took following courses:",
      descBullets: ["Programming Principles and Practice","Data Structures and Algorithms", "Agile Software Development", "Manipulating Data", "Devops", "Delivering User Experience"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Engineer",
      company: "Inosio",
      companylogo: require("./assets/images/Inosio.png"),
      date: "September 2021 – Present",
      desc: "Inosio is a multi feature software for Property Managers offering rent collection, payment requests, maintenance requests and tenant applications.",
      descBullets: [
        "Designed and implemented enterprise fintech applications for the property management industry in the US, driving a monthly revenue of $1M+ using latest technologies like Node, React, Redux and MySQL.",
        "Developed scalable and well documented APIs and optimized existing endpoints",
        "Delivered solid and smooth, high-quality user experience for all my features.",
        "Optimized the rent auto payments code and reduced autopay failure rate significantly.",
        "Designed and developed the Payment Request feature allowing Property Managers to send payment requests through email.",
        "Completely automated the property managers' user-experience testing process by integrating automated e2e tests using puppeteer.",
        "Designed and developed the Maintenance Request feature allowing tenants to send maintenance requests with images and videos to property managers.",
        "Pull requests, Code reviews, Unit testing and End to end testing"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Dr. Haynes Collective",
      companylogo: require("./assets/images/haynes_logo.jpeg"),
      date: "March 2021 – August 2021",
      desc: "Dr. Haynes Collective is a boutique executing coaching and wellness telehealth and concierge platform that aims to help companies, groups, and individuals optimize productivity.",
      descBullets: [
        "Developed a web app similar to Calendly to allow clients to make appointments with the business coach.",
        "Developed a dashboard for the admin to manage client appointments.",
        "Tools: React, Redux, Nest, MySQL, and Google Calendar API.",
        "Pull requests, Code reviews, and Unit testing"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Upwork",
      companylogo: require("./assets/images/UpworkLogo.png"),
      date: "September 2020 – August 2021",
      desc: "Worked as a freelance full stack software developer",
      descBullets: [
        "Successfully delivered MVP projects to small to medium sized companies.",
        "Over 1500 hours Logged",
        "Upwork Rising Talent"
      ]
    }
    /*     {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    } */
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Inosio.png"),
      projectName: "Inosio",
      projectDesc:
        "Inosio is a multi feature software for Property Managers offering rent collection, payment requests, maintenance requests and tenant applications.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://portal.inosio.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/DrLogo.png"),
      projectName: "Dr Haynes Collective",
      projectDesc:
        "Dr. Haynes Collective | DHC, is a boutique executive coaching firm and marketplace leveraging technology to deliver digital wellness firm aimed at optimizing productivity while prioritizing healthy (financial, physical, spiritual, community, intimate) relationships and goals.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://drhaynescollective.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const testimonials = {
  title: "Testimonials",
  subtitle: "SOME AWESOME PEOPLE I'VE WORKED WITH",
  projects: [
    {
      image: require("./assets/images/rohan2.jpeg"),
      projectName: "Rohan de Launey",
      jobTitle: "CEO Inosio",
      jobLocation: "📍 San Diego, CA",
      projectDesc: `"As a Product Manager you want developers that are inquisitive about the user and why/how they use the app. Hussain regularly asked great questions when reviewing upcoming tasks and was able to point out UX issues before they worked their way in to the dev cycle. 

      During his tenure he created brand new product features from scratch, refactored poorly performing code, and made improvements to our data and front-end architecture. All of his tasks required working across several services; data, API, and front-end - he can do it all. 
      
      Finally, Hussain was a great fit on the team. His English is native-speaker level, he's good with jokes and always contributed positively to the culture on the team."`,
      footerLink: [
        {
          name: "Visit Website",
          url: "https://portal.inosio.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Ramsey.jpeg"),
      projectName: "Ramsey Rashid",
      jobTitle: "CTO Inosio",
      jobLocation: "📍 San Diego, CA",
      projectDesc: `"Hussain is great to work with. He's very inquisitive and made great suggestions on the tech and UX sides of the project. His english is great and he is very available for US-based meetings. He is not afraid to dive into and learn new technology as well. A great addition to any team!"`
    }
    /*     {
      image: require("./assets/images/UnknownUser.webp"),
      projectName: "Dr Sarah Haynes",
      jobTitle: "Founder Dr Haynes Collective",
      projectDesc: `"Our firm needed a system for managing applicants and automating the appointment process. Hussain had a great eye for detail and was able to deliver the requested project with thoroughness and full quality. I look forward to hiring him again for future work."`
    } */
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    /*     {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    } */
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  testimonials
};

export type Project = {
  id: string;
  name: string;
  description: string;
  detail: { heading: string; body: string }[];
  technologies: string[];
  preview: 'analytics' | 'engineering' | 'research' | 'desktop' | 'machine-learning' | 'web';
  label: string;
  githubUrl: string;
  team?: { name: string; linkedinUrl: string }[];
  imageUrl?: string;
};

export type Certificate = {
  id: string;
  title: string;
  provider: string;
  year: string;
  fileUrl: string | null;
  fileType: 'image' | 'pdf' | null;
  credentialUrl?: string | null;
};

export const contactLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/meisyacantika',
    href: 'https://www.linkedin.com/in/meisyacantika',
    kind: 'linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/meisyacantika',
    href: 'https://github.com/meisyacantika',
    kind: 'github',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'meisyacantikaputri@gmail.com',
    href: 'mailto:meisyacantikaputri@gmail.com',
    kind: 'email',
  },
] as const;

export const projects: Project[] = [
  {
    id: 'pharmacy-management-system',
    name: 'Pharmacy Management System',
    description: 'A Java-based desktop application developed to support pharmacy operations through medicine inventory management, user administration, and sales transaction processing.',
    detail: [
      {
        heading: 'Project Overview',
        body: 'Developed as an academic team project to manage essential pharmacy operations through a centralized desktop application. The system supports three user roles: Administrator, Pharmacist, and Cashier, with different access permissions and responsibilities.'
      },
      {
        heading: 'Backend Development & Database Management',
        body: 'Designed MySQL database schemas and relationships for users, medicines, transactions, and suppliers. Developed business logic, data processing, and CRUD operations using Java. Managed database connectivity through JDBC and optimized SQL queries to ensure accurate inventory updates.'
      },
      {
        heading: 'Key Features & System Implementation',
        body: 'Implemented authentication and Role-Based Access Control (RBAC) for Administrator, Pharmacist, and Cashier roles. Developed data validation, medicine inventory tracking, FEFO (First Expired, First Out) logic, and daily sales processing to support pharmacy workflows.'
      },
    ],
    technologies: [
      'Java',
      'MySQL',
      'JDBC',
      'NetBeans IDE',
      'Apache Ant',
      'iText',
      'JCalendar'
    ],
    preview: 'desktop',
    label: 'DESKTOP APPLICATION',
    githubUrl: 'https://github.com/meisyacantika/pharmacy-management-system',
    imageUrl: '/projects/pharmacy-management-system.png',
    team: [
      { name: 'Dewa Ayu Made Indah Novita Dewi', linkedinUrl: '' },
      { name: 'Putu Meisya Cantika Putri', linkedinUrl: '' },
      { name: 'Laura Olivia Sutarni Lamanepa', linkedinUrl: '' },
      { name: 'Ester Valeria Hutajulu', linkedinUrl: '' },
    ],
  },
  {
    id: 'smart-agriculture-prediction-system',
    name: 'Smart Agriculture Prediction System',
    description: 'A machine learning project that analyzes agricultural and environmental data to predict irrigation requirements and explore patterns in farming conditions using Random Forest classification and K-Means clustering.',
    detail: [
      {
        heading: 'Project Overview',
        body: 'Developed as an academic group project to explore data-driven irrigation management. The project analyzes agricultural and environmental factors, including crop type, soil conditions, moisture, temperature, and humidity, to support irrigation-related decision-making.'
      },
      {
        heading: 'Data Preprocessing & Model Development',
        body: 'Performed data cleaning and preprocessing, including duplicate removal and categorical encoding. Developed a Random Forest classification model to predict irrigation outcome categories using agricultural and environmental features. Also applied K-Means clustering to explore groups of similar agricultural conditions.'
      },
      {
        heading: 'Model Evaluation & Results',
        body: 'Evaluated model performance using accuracy, precision, recall, F1-score, and confusion matrix. Achieved 98.44% test accuracy and a 95.50% macro F1-score. Analyzed feature importance to identify influential prediction factors and developed an interactive prediction interface deployed on Hugging Face Spaces.'
      },
    ],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Matplotlib',
      'Seaborn',
      'Google Colab',
      'Hugging Face Spaces'
    ],
    preview: 'machine-learning',
    label: 'MACHINE LEARNING',
    githubUrl: 'https://github.com/meisyacantika/smart-agriculture-prediction-system',
    imageUrl: '/projects/smart-agriculture-prediction-system.png',
    team: [
      { name: 'Dewa Ayu Made Indah Novita Dewi', linkedinUrl: '' },
      { name: 'Putu Meisya Cantika Putri', linkedinUrl: '' },
      { name: 'Ester Valeria Hutajulu', linkedinUrl: '' },
      { name: 'Putu Padma Widya Saraswati', linkedinUrl: '' },
    ],
  },
  {
    id: 'smartfarm-web-application',
    name: 'SmartFarm Web Application',
    description: 'A full-stack smart farming application designed to support agricultural land management, environmental monitoring, and irrigation prediction through an integrated web platform powered by machine learning.',
    detail: [
      {
        heading: 'Project Overview',
        body: 'Developed a web-based smart farming application that allows farmers to manage agricultural land, monitor crop information, and access irrigation predictions. The system provides separate access for Administrators and Farmers, with features for managing agricultural data and reviewing prediction history.'
      },
      {
        heading: 'Backend Development & Database Management',
        body: 'Designed MySQL database structures and relationships for users, farmland, crops, sensors, and prediction records. Developed Laravel models, controllers, migrations, and seeders. Implemented authentication, role-based authorization, middleware, CRUD operations, form validation, and session management.'
      },
      {
        heading: 'Machine Learning Integration & API Development',
        body: 'Configured FastAPI to integrate the Random Forest and K-Means prediction models with the SmartFarm application. Developed and configured web and API routes to connect the React frontend with the Laravel backend. Integrated prediction requests and responses to support irrigation simulations and store prediction history.'
      },
    ],
    technologies: [
      'Laravel',
      'PHP',
      'React',
      'MySQL',
      'FastAPI',
      'Python',
      'Tailwind CSS',
      'Axios',
      'Vite',
      'Laravel Sanctum'
    ],
    preview: 'web',
    label: 'FULL-STACK WEB DEVELOPMENT',
    githubUrl: 'https://github.com/meisyacantika/smartfarm-web-application',
    imageUrl: '/projects/smartfarm-web-application.png',
    team: [
      { name: 'Ketut Suta Brata Jaya Pangestu', linkedinUrl: '' },
      { name: 'Dewa Ayu Made Indah Novita Dewi', linkedinUrl: '' },
      { name: 'Putu Meisya Cantika Putri', linkedinUrl: '' },
      { name: 'Ester Valeria Hutajulu', linkedinUrl: '' },
      { name: 'Putu Padma Widya Saraswati', linkedinUrl: '' },
    ],
  },
];

export const certificates: Certificate[] = [
  {
    id: 'data-science-dicoding',
    title: 'Belajar Dasar Data Science',
    provider: 'Dicoding Academy',
    year: '2024',
    fileUrl: null,
    fileType: null,
    credentialUrl: 'https://www.dicoding.com/certificates/EYX4J60D6ZDL',
  },
  {
    id: 'data-analytics-revou',
    title: 'Intro to Data Analytics',
    provider: 'RevoU',
    year: '2025',
    fileUrl: null,
    fileType: null,
    credentialUrl: 'https://drive.google.com/file/d/1qdFby42j8kQMLI-liWgQi-Ju5Qbrwmes/view',
  },
  {
    id: 'programming-c-dicoding',
    title: 'Memulai Pemrograman dengan C',
    provider: 'Dicoding Academy',
    year: '2025',
    fileUrl: null,
    fileType: null,
    credentialUrl: 'https://www.dicoding.com/certificates/6RPNGWL38Z2M',
  },
  {
    id: 'project-management-dicoding',
    title: 'Belajar Dasar Manajemen Proyek',
    provider: 'Dicoding Academy',
    year: '2025',
    fileUrl: null,
    fileType: null,
    credentialUrl: 'https://www.dicoding.com/certificates/98XWOVQ89ZM3',
  },
  {
    id: 'programming-java-dicoding',
    title: 'Memulai Pemrograman dengan Java',
    provider: 'Dicoding Academy',
    year: '2025',
    fileUrl: null,
    fileType: null,
    credentialUrl: 'https://www.dicoding.com/certificates/81P25VNRYPOY',
  },
  {
    id: 'gemini-academy',
    title: 'Gemini Academy for Higher Education Training and Certification',
    provider: 'Google',
    year: '2026',
    fileUrl: null,
    fileType: null,
    credentialUrl: 'https://drive.google.com/file/d/1u1Xt131Z1eEP9D-0Ph5WgMYJp40k3vzh/view?usp=drive_link',
  },
  {
    id: 'data-viz-bootcamp',
    title: 'Exclusive Bootcamp Data Visualization: Power BI, Tableau, and Google Looker Studio',
    provider: 'KarirNex',
    year: '2026',
    fileUrl: null,
    fileType: null,
    credentialUrl: 'https://drive.google.com/file/d/13ui6Q5GVVtm97orKf0udPXbn6e2NbawR/view?usp=sharing',
  },
];

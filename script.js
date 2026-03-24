/**
 * CAREER NAV CORE v5.5 - Expanded SIH 2025 Standard
 */

const AI_GATEWAY = "AIzaSyB0lfrS3m8Kpp-ttD_1-bboWecIx0erdd0";
let masterRoadmap = [];
let activityLedger = JSON.parse(localStorage.getItem('activity_ledger') || '[]');
let currentChapterIdx = null;

// --- 3D Interactive Particle Background (Optimized) ---
document.addEventListener('DOMContentLoaded', () => {
    if (typeof tsParticles === 'undefined') return;
    tsParticles.load("tsparticles", {
        fullScreen: { enable: false },
        fpsLimit: 30,
        background: { color: { value: "transparent" } },
        particles: {
            number: { value: 45, density: { enable: true, area: 900 } },
            color: { value: ["#8b5cf6", "#6366f1", "#a78bfa"] },
            shape: { type: "circle" },
            opacity: { value: 0.35 },
            size: { value: { min: 1, max: 2.5 } },
            move: {
                enable: true,
                speed: 0.6,
                direction: "none",
                random: true,
                outModes: { default: "bounce" }
            },
            links: {
                enable: true,
                distance: 140,
                color: "#8b5cf6",
                opacity: 0.12,
                width: 1
            }
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: false }
            },
            modes: {
                repulse: { distance: 100, duration: 0.4, speed: 0.8 }
            }
        },
        detectRetina: false
    });
});



const syllabusBank = {
    "Data Analyst": [
        {
            "title": "Introduction",
            "nsqf": "Level 5",
            "topics": [
                {
                    "name": "Introduction",
                    "subs": [
                        "What is Data Analytics",
                        "Types of Data Analytics (Descriptive",
                        "Diagnostic",
                        "Predictive",
                        "Prescriptive)"
                    ]
                }
            ]
        },
        {
            "title": "Building a Strong Foundation",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Excel Functions",
                    "subs": [
                        "IF",
                        "DATEDIF",
                        "VLOOKUP / HLOOKUP",
                        "REPLACE / SUBSTITUTE",
                        "UPPER / LOWER / PROPER",
                        "CONCAT",
                        "TRIM",
                        "AVERAGE",
                        "COUNT",
                        "SUM",
                        "MIN / MAX"
                    ]
                },
                {
                    "name": "Excel Features",
                    "subs": [
                        "Charting",
                        "Pivot Tables"
                    ]
                },
                {
                    "name": "Key Concepts of Data",
                    "subs": [
                        "Collection",
                        "Cleanup",
                        "Exploration",
                        "Visualization",
                        "Statistical Analysis",
                        "Machine Learning"
                    ]
                }
            ]
        },
        {
            "title": "Gain Programming Skills",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Programming Lang",
                    "subs": [
                        "Python",
                        "R"
                    ]
                },
                {
                    "name": "Libraries",
                    "subs": [
                        "Data Manipulation Libraries",
                        "Data Visualization Libraries"
                    ]
                },
                {
                    "name": "SQL",
                    "subs": [
                        "Learn SQL"
                    ]
                }
            ]
        },
        {
            "title": "Mastering Data Handling",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Data Collection",
                    "subs": [
                        "Databases",
                        "CSV Files",
                        "APIs",
                        "Web Scraping"
                    ]
                },
                {
                    "name": "Data Cleanup",
                    "subs": [
                        "Handling Missing Data",
                        "Removing Duplicates",
                        "Finding Outliers",
                        "Data Transformation. (Libraries: Pandas",
                        "Dplyr)"
                    ]
                }
            ]
        },
        {
            "title": "Data Analysis Techniques",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Descriptive Analysis",
                    "subs": [
                        "Generating Statistics",
                        "Visualizing Distributions"
                    ]
                },
                {
                    "name": "Statistical Analysis",
                    "subs": [
                        "Hypothesis Testing",
                        "Correlation Analysis",
                        "Regression"
                    ]
                },
                {
                    "name": "Statistics Concepts",
                    "subs": [
                        "Mean",
                        "Median",
                        "Mode",
                        "Range",
                        "Variance",
                        "Standard Deviation",
                        "Skewness",
                        "Kurtosis"
                    ]
                }
            ]
        },
        {
            "title": "Data Visualization",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Tools",
                    "subs": [
                        "Tableau",
                        "Power BI"
                    ]
                },
                {
                    "name": "Libraries",
                    "subs": [
                        "Matplotlib",
                        "Seaborn",
                        "ggplot2"
                    ]
                },
                {
                    "name": "Charting",
                    "subs": [
                        "Bar",
                        "Line",
                        "Scatter",
                        "Funnel",
                        "Histogram",
                        "Stacked",
                        "Heatmap",
                        "Pie"
                    ]
                }
            ]
        },
        {
            "title": "Advanced Topics",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Machine Learning",
                    "subs": [
                        "Supervised",
                        "Unsupervised",
                        "Reinforcement",
                        "Decision Trees",
                        "Naive Bayes",
                        "KNN",
                        "K-Means",
                        "Logistic Regression"
                    ]
                },
                {
                    "name": "Deep Learning (Optional)",
                    "subs": [
                        "Neural Networks (CNNs",
                        "RNNs)",
                        "TensorFlow",
                        "Pytorch",
                        "Image Recognition",
                        "NLP"
                    ]
                },
                {
                    "name": "Big Data Technologies",
                    "subs": [
                        "Hadoop",
                        "Spark",
                        "MapReduce",
                        "MPI",
                        "Parallel Processing"
                    ]
                }
            ]
        }
    ],
    "Machine Learning": [
        {
            "title": "Prerequisites",
            "nsqf": "Level 5",
            "topics": [
                {
                    "name": "Prerequisites",
                    "subs": [
                        "Python Roadmap",
                        "Math Foundations"
                    ]
                }
            ]
        },
        {
            "title": "Mathematical Foundations",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Calculus",
                    "subs": [
                        "Derivatives",
                        "Chain rule",
                        "Gradient",
                        "Jacobian",
                        "Hessian"
                    ]
                },
                {
                    "name": "Linear Algebra",
                    "subs": [
                        "Matrix Operations",
                        "Vectors",
                        "Tensors",
                        "SVD",
                        "Eigenvalues",
                        "Diagonalization"
                    ]
                },
                {
                    "name": "Probability",
                    "subs": [
                        "Bayes Theorem",
                        "Random Variables",
                        "PDFs",
                        "Distributions"
                    ]
                },
                {
                    "name": "Statistics",
                    "subs": [
                        "Descriptive Stats",
                        "Graphs",
                        "Inferential Statistics"
                    ]
                },
                {
                    "name": "Programming Fundamentals",
                    "subs": [
                        "Python (Variables",
                        "Data Structures",
                        "OOP",
                        "Essential Libraries)"
                    ]
                },
                {
                    "name": "Data Collection & Cleaning",
                    "subs": [
                        "SQL",
                        "NoSQL",
                        "JSON",
                        "Parquet",
                        "Feature Engineering",
                        "Scaling",
                        "Dimensionality Reduction"
                    ]
                },
                {
                    "name": "Machine Learning Types",
                    "subs": [
                        "Supervised",
                        "Unsupervised",
                        "Semi-supervised",
                        "Self-supervised",
                        "Reinforcement Learning"
                    ]
                },
                {
                    "name": "Scikit-Learn Workflow",
                    "subs": [
                        "Data Loading",
                        "Train-Test Split",
                        "Model Selection",
                        "Tuning",
                        "Prediction"
                    ]
                }
            ]
        },
        {
            "title": "Supervised Learning",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Regression",
                    "subs": [
                        "Linear",
                        "Polynomial",
                        "Lasso",
                        "Ridge"
                    ]
                },
                {
                    "name": "Classification",
                    "subs": [
                        "KNN",
                        "Logistic Regression",
                        "SVM",
                        "Decision Trees",
                        "Random Forest",
                        "Gradient Boosting"
                    ]
                }
            ]
        },
        {
            "title": "Unsupervised Learning",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Clustering",
                    "subs": [
                        "K-Means",
                        "Hierarchical",
                        "DBSCAN"
                    ]
                },
                {
                    "name": "Dimensionality Reduction",
                    "subs": [
                        "PCA",
                        "Autoencoders"
                    ]
                },
                {
                    "name": "Model Evaluation",
                    "subs": [
                        "Accuracy",
                        "Precision",
                        "Recall",
                        "F1-Score",
                        "ROC-AUC",
                        "Confusion Matrix",
                        "Cross-Validation"
                    ]
                }
            ]
        },
        {
            "title": "Deep Learning",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Basics",
                    "subs": [
                        "Perceptrons",
                        "Backpropagation",
                        "Activation Functions",
                        "Loss Functions"
                    ]
                },
                {
                    "name": "Libraries",
                    "subs": [
                        "TensorFlow",
                        "PyTorch",
                        "Keras"
                    ]
                },
                {
                    "name": "Architectures",
                    "subs": [
                        "CNNs",
                        "RNNs",
                        "GRU",
                        "LSTM",
                        "Transformers (Self-attention",
                        "Multi-head attention)"
                    ]
                },
                {
                    "name": "Advanced ML",
                    "subs": [
                        "NLP (Tokenization",
                        "Embeddings)",
                        "Generative Adversarial Networks (GANs)",
                        "Explainable AI"
                    ]
                }
            ]
        }
    ],
    "Android Developer": [
        {
            "title": "Pick a Language",
            "nsqf": "Level 5",
            "topics": [
                {
                    "name": "Pick a Language",
                    "subs": [
                        "Kotlin",
                        "Java"
                    ]
                },
                {
                    "name": "The Fundamentals",
                    "subs": [
                        "Basics of Kotlin",
                        "OOP",
                        "Data Structures",
                        "Gradle",
                        "Hello World App"
                    ]
                },
                {
                    "name": "Version Control",
                    "subs": [
                        "Git (GitHub",
                        "Bitbucket",
                        "GitLab)"
                    ]
                },
                {
                    "name": "App Components",
                    "subs": [
                        "Services",
                        "Content Provider",
                        "Broadcast Receiver",
                        "Intents",
                        "Activity Lifecycle",
                        "Tasks & Backstack"
                    ]
                }
            ]
        },
        {
            "title": "Interface & Navigation",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Layouts",
                    "subs": [
                        "Frame",
                        "Linear",
                        "Relative",
                        "Constraint",
                        "RecyclerView"
                    ]
                },
                {
                    "name": "Elements",
                    "subs": [
                        "TextView",
                        "Toast",
                        "Fragments",
                        "Buttons",
                        "Edittext",
                        "Animations"
                    ]
                },
                {
                    "name": "Modern",
                    "subs": [
                        "Jetpack Compose",
                        "Navigation Components"
                    ]
                },
                {
                    "name": "Design & Architecture",
                    "subs": [
                        "MVVM",
                        "MVI",
                        "MVP",
                        "MVC",
                        "Repository Pattern",
                        "Dependency Injection (Dagger",
                        "Hilt",
                        "Koin)"
                    ]
                },
                {
                    "name": "Storage",
                    "subs": [
                        "Shared Preferences",
                        "Room Database",
                        "File System"
                    ]
                },
                {
                    "name": "Network",
                    "subs": [
                        "Retrofit",
                        "OkHttp",
                        "Apollo-Android"
                    ]
                },
                {
                    "name": "Asynchronism",
                    "subs": [
                        "Coroutines",
                        "Threads",
                        "RxJava",
                        "WorkManager"
                    ]
                },
                {
                    "name": "Common Services",
                    "subs": [
                        "Firebase (Auth",
                        "Firestore",
                        "Cloud Messaging)",
                        "Google Maps",
                        "AdMob"
                    ]
                },
                {
                    "name": "Testing",
                    "subs": [
                        "JUnit",
                        "Espresso",
                        "Linting (Ktlint)"
                    ]
                },
                {
                    "name": "Distribution",
                    "subs": [
                        "Signed APK",
                        "Play Store"
                    ]
                }
            ]
        }
    ],
    "Software Architect": [
        {
            "title": "Understand the Basics",
            "nsqf": "Level 5",
            "topics": [
                {
                    "name": "Understand the Basics",
                    "subs": [
                        "Levels of Architecture (Application",
                        "Solution",
                        "Enterprise)"
                    ]
                },
                {
                    "name": "Responsibilities",
                    "subs": [
                        "Tech Decisions",
                        "Design Decisions",
                        "Requirements Elicitation",
                        "Enforcing Standards",
                        "Mentoring"
                    ]
                },
                {
                    "name": "Programming Languages",
                    "subs": [
                        "Java",
                        "Kotlin",
                        "Python",
                        "Ruby",
                        "Go",
                        "JavaScript",
                        ".NET"
                    ]
                },
                {
                    "name": "Important Skills",
                    "subs": [
                        "Documentation",
                        "Communication",
                        "Estimation",
                        "Decision Making",
                        "Simplifying Things"
                    ]
                },
                {
                    "name": "Design Principles",
                    "subs": [
                        "SOLID",
                        "TDD",
                        "DDD",
                        "ACID",
                        "CAP Theorem",
                        "OOP",
                        "Aspect"
                    ]
                },
                {
                    "name": "Patterns",
                    "subs": [
                        "MVC",
                        "MVVM",
                        "MVP",
                        "CQRS",
                        "Eventual Consistency"
                    ]
                },
                {
                    "name": "Tools",
                    "subs": [
                        "Git",
                        "Slack",
                        "Trello",
                        "Atlassian"
                    ]
                },
                {
                    "name": "Architecture Styles",
                    "subs": [
                        "Microservices",
                        "Serverless",
                        "Client-Server",
                        "Layered",
                        "SOA"
                    ]
                },
                {
                    "name": "Security",
                    "subs": [
                        "Hashing",
                        "PKI",
                        "OWASP",
                        "Auth Strategies"
                    ]
                },
                {
                    "name": "Working with Data",
                    "subs": [
                        "SQL",
                        "NoSQL",
                        "ETL",
                        "Data Warehousing",
                        "Analytics (Spark",
                        "Hadoop)"
                    ]
                },
                {
                    "name": "Web/Mobile",
                    "subs": [
                        "Reactive",
                        "Functional",
                        "SPA",
                        "SSR",
                        "SSG",
                        "Microfrontends"
                    ]
                },
                {
                    "name": "Operations Knowledge",
                    "subs": [
                        "Cloud Providers",
                        "Infrastructure as Code",
                        "CI/CD",
                        "Containers",
                        "Service Mesh"
                    ]
                },
                {
                    "name": "Management",
                    "subs": [
                        "Agile (Scrum",
                        "Kanban)",
                        "LeSS",
                        "SaFe"
                    ]
                },
                {
                    "name": "Enterprise Software",
                    "subs": [
                        "SAP",
                        "Salesforce",
                        "MS Dynamics"
                    ]
                }
            ]
        }
    ],
    "Game Developer": [
        {
            "title": "Game Mathematics",
            "nsqf": "Level 5",
            "topics": [
                {
                    "name": "Game Mathematics",
                    "subs": [
                        "Linear Algebra (Vectors",
                        "Matrices",
                        "Transformations)",
                        "Geometry",
                        "Quaternions",
                        "Euler Angles",
                        "Curves (Spline",
                        "Bezier)"
                    ]
                },
                {
                    "name": "Game Physics",
                    "subs": [
                        "Dynamics (Mass",
                        "Inertia",
                        "Friction)",
                        "Collision Detection (SAT",
                        "GJK)",
                        "Bounding Volumes"
                    ]
                },
                {
                    "name": "Game Engine",
                    "subs": [
                        "Unity 3D",
                        "Unreal Engine",
                        "Godot"
                    ]
                },
                {
                    "name": "Programming Languages",
                    "subs": [
                        "C++",
                        "C#",
                        "Rust",
                        "Python",
                        "GDScript"
                    ]
                },
                {
                    "name": "Computer Graphics",
                    "subs": [
                        "Ray Tracing",
                        "Rasterization",
                        "Graphics Pipeline",
                        "Shaders",
                        "Rendering Equation"
                    ]
                },
                {
                    "name": "Graphics API",
                    "subs": [
                        "DirectX",
                        "OpenGL",
                        "Vulkan",
                        "Metal",
                        "WebGL"
                    ]
                },
                {
                    "name": "Game AI",
                    "subs": [
                        "Pathfinding (A*)",
                        "Decision Making (State Machines",
                        "Behavior Trees",
                        "Fuzzy Logic)",
                        "Movement"
                    ]
                },
                {
                    "name": "Advanced Rendering",
                    "subs": [
                        "Physically-Based Rendering (PBR)",
                        "Real-time Ray Tracing"
                    ]
                }
            ]
        }
    ],
    "Product Manager": [
        {
            "title": "Introduction",
            "nsqf": "Level 5",
            "topics": [
                {
                    "name": "Introduction",
                    "subs": [
                        "What is PM",
                        "Lifecycle",
                        "Key Skills"
                    ]
                },
                {
                    "name": "Idea Generation",
                    "subs": [
                        "Mind Mapping",
                        "Brainstorming",
                        "Problem Identification"
                    ]
                },
                {
                    "name": "Market Analysis",
                    "subs": [
                        "Blue Ocean Strategy",
                        "User Research",
                        "Personas",
                        "Competitive Analysis"
                    ]
                },
                {
                    "name": "Product Strategy",
                    "subs": [
                        "Positioning",
                        "Value Proposition",
                        "Vision & Mission"
                    ]
                },
                {
                    "name": "Product Planning",
                    "subs": [
                        "Requirements (PRDs)",
                        "Roadmaps",
                        "Backlog Management"
                    ]
                },
                {
                    "name": "Product Design",
                    "subs": [
                        "UX/UI Design",
                        "Wireframing",
                        "Prototyping",
                        "Design Thinking",
                        "A/B Testing"
                    ]
                },
                {
                    "name": "Agile Methodology",
                    "subs": [
                        "Scrum",
                        "Kanban"
                    ]
                },
                {
                    "name": "Product Metrics",
                    "subs": [
                        "KPIs (Retention",
                        "Churn",
                        "LTV",
                        "CAC)",
                        "Data-Driven Decision Making"
                    ]
                },
                {
                    "name": "Stakeholder Management",
                    "subs": [
                        "Conflict Resolution",
                        "Negotiation",
                        "Leadership"
                    ]
                },
                {
                    "name": "Risk Management",
                    "subs": [
                        "Identifying Risks",
                        "Assessment",
                        "Mitigation"
                    ]
                }
            ]
        }
    ],
    "DevOps": [
        {
            "title": "Programming Language",
            "nsqf": "Level 5",
            "topics": [
                {
                    "name": "Programming Language",
                    "subs": [
                        "Python",
                        "Go",
                        "Node.js",
                        "Ruby",
                        "Rust"
                    ]
                },
                {
                    "name": "Operating System",
                    "subs": [
                        "Linux (Ubuntu",
                        "RHEL",
                        "SUSE)",
                        "Unix (FreeBSD",
                        "OpenBSD)"
                    ]
                },
                {
                    "name": "Terminal Knowledge",
                    "subs": [
                        "Bash/PowerShell",
                        "Vim/Nano",
                        "Text Manipulation",
                        "Networking Tools"
                    ]
                },
                {
                    "name": "Version Control",
                    "subs": [
                        "Git",
                        "VCS Hosting (GitHub",
                        "GitLab",
                        "Bitbucket)"
                    ]
                },
                {
                    "name": "Containers",
                    "subs": [
                        "Docker",
                        "LXC"
                    ]
                },
                {
                    "name": "Networking & Protocols",
                    "subs": [
                        "HTTP/S",
                        "DNS",
                        "SSH",
                        "SSL/TLS",
                        "OSI Model"
                    ]
                },
                {
                    "name": "Web Server",
                    "subs": [
                        "Nginx",
                        "Apache",
                        "Caddy",
                        "IIS"
                    ]
                },
                {
                    "name": "Cloud Providers",
                    "subs": [
                        "AWS",
                        "Azure",
                        "Google Cloud",
                        "DigitalOcean"
                    ]
                },
                {
                    "name": "Infrastructure as Code",
                    "subs": [
                        "Terraform",
                        "CloudFormation",
                        "Pulumi",
                        "Ansible",
                        "Chef",
                        "Puppet"
                    ]
                },
                {
                    "name": "CI/CD Tools",
                    "subs": [
                        "Jenkins",
                        "GitHub Actions",
                        "GitLab CI",
                        "CircleCI"
                    ]
                },
                {
                    "name": "Monitoring & Logging",
                    "subs": [
                        "Prometheus",
                        "Grafana",
                        "ELK Stack",
                        "Datadog"
                    ]
                },
                {
                    "name": "Orchestration",
                    "subs": [
                        "Kubernetes",
                        "Docker Swarm",
                        "OpenShift"
                    ]
                }
            ]
        }
    ],
    "QA Engineer": [
        {
            "title": "Fundamentals",
            "nsqf": "Level 5",
            "topics": [
                {
                    "name": "Fundamentals",
                    "subs": [
                        "QA Mindset",
                        "Testing Approaches (White/Grey/Black Box)",
                        "SDLC (Waterfall",
                        "Agile)"
                    ]
                },
                {
                    "name": "Testing Methodologies",
                    "subs": [
                        "TDD",
                        "BDD",
                        "ATDD"
                    ]
                },
                {
                    "name": "Manual Testing",
                    "subs": [
                        "Test Cases",
                        "Scenarios",
                        "Verification & Validation"
                    ]
                }
            ]
        },
        {
            "title": "Automated Testing",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "UI/Frontend",
                    "subs": [
                        "Selenium",
                        "Playwright",
                        "Cypress",
                        "Puppeteer"
                    ]
                },
                {
                    "name": "Backend/API",
                    "subs": [
                        "Postman",
                        "Rest Assured",
                        "SoapUI"
                    ]
                },
                {
                    "name": "Mobile",
                    "subs": [
                        "Appium",
                        "Espresso",
                        "Detox"
                    ]
                },
                {
                    "name": "Non-Functional Testing",
                    "subs": [
                        "Load (JMeter)",
                        "Security (OWASP)",
                        "Accessibility (Axe)"
                    ]
                },
                {
                    "name": "Monitoring & Tools",
                    "subs": [
                        "Jira",
                        "Allure",
                        "Git",
                        "Jenkins",
                        "Docker"
                    ]
                }
            ]
        }
    ],
    "Data Engineer": [
        {
            "title": "Introduction",
            "nsqf": "Level 5",
            "topics": [
                {
                    "name": "Introduction",
                    "subs": [
                        "Data Engineering Lifecycle",
                        "Choosing Tech"
                    ]
                },
                {
                    "name": "Learn the Basics",
                    "subs": [
                        "Python/Java/Scala",
                        "SQL",
                        "Linux",
                        "Networking Fundamentals"
                    ]
                }
            ]
        },
        {
            "title": "Data Storage",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Relational",
                    "subs": [
                        "MySQL",
                        "PostgreSQL",
                        "Oracle"
                    ]
                },
                {
                    "name": "NoSQL",
                    "subs": [
                        "MongoDB (Document)",
                        "Cassandra (Column)",
                        "Redis (Key-Value)",
                        "Neo4j (Graph)"
                    ]
                },
                {
                    "name": "Data Warehousing",
                    "subs": [
                        "BigQuery",
                        "Snowflake",
                        "Redshift"
                    ]
                },
                {
                    "name": "Data Ingestion",
                    "subs": [
                        "Batch vs Streaming (Kafka",
                        "RabbitMQ",
                        "Pub/Sub)"
                    ]
                },
                {
                    "name": "Data Processing",
                    "subs": [
                        "ETL/ELT",
                        "Spark",
                        "Flink",
                        "Apache Airflow"
                    ]
                },
                {
                    "name": "Cloud Computing",
                    "subs": [
                        "AWS",
                        "Azure",
                        "Google Cloud (S3",
                        "EC2",
                        "Lambda)"
                    ]
                },
                {
                    "name": "Security & Privacy",
                    "subs": [
                        "Encryption",
                        "GDPR",
                        "HIPAA",
                        "Data Lineage"
                    ]
                }
            ]
        }
    ],
    "AI Engineer": [
        {
            "title": "Introduction",
            "nsqf": "Level 5",
            "topics": [
                {
                    "name": "Introduction",
                    "subs": [
                        "What is an AI Engineer?",
                        "Roles and Responsibilities",
                        "Impact on Product Development",
                        "AI Engineer vs ML Engineer"
                    ]
                }
            ]
        },
        {
            "title": "Working with LLMs",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Core LLM Elements",
                    "subs": [
                        "Tokens",
                        "Context",
                        "Sampling Parameters (Temperature",
                        "Top-K",
                        "Top-P",
                        "Repetition Penalty)"
                    ]
                },
                {
                    "name": "Common Terminology",
                    "subs": [
                        "AI vs ML",
                        "Large Language Model (LLM)",
                        "Embeddings",
                        "Training",
                        "Inference",
                        "Vector DBs",
                        "AI Agents",
                        "RAG",
                        "Fine-tuning",
                        "Prompt Engineering",
                        "Context Engineering"
                    ]
                }
            ]
        },
        {
            "title": "Prompt vs Context Engineering",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Prompt Engineering",
                    "subs": [
                        "Zero-shot",
                        "Few-shot",
                        "FLAN",
                        "CoT (Chain of Thought)",
                        "Input Prompt",
                        "Function Calling",
                        "Prompt Caching",
                        "Streaming Responses",
                        "System Prompting"
                    ]
                },
                {
                    "name": "Context Engineering",
                    "subs": [
                        "External Memory",
                        "Fixed and Dynamic Filters",
                        "Context Composition",
                        "Context Limitation"
                    ]
                },
                {
                    "name": "Types of Models",
                    "subs": [
                        "Pre-trained Models",
                        "Closed vs Open Source",
                        "Self-Hosted Models"
                    ]
                },
                {
                    "name": "Closed",
                    "subs": [
                        "Anthropic Claude",
                        "Google Gemini",
                        "OpenAI (GPT)",
                        "Cohere",
                        "Mistral"
                    ]
                },
                {
                    "name": "Open",
                    "subs": [
                        "Meta Llama",
                        "DeepSeek",
                        "Qwen",
                        "Mistral"
                    ]
                }
            ]
        },
        {
            "title": "Embeddings & Vector Databases",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "What are Embeddings",
                    "subs": [
                        "Semantic Search",
                        "Data Classification",
                        "Recommendation Systems",
                        "Anomaly Detection"
                    ]
                },
                {
                    "name": "Embedding Models",
                    "subs": [
                        "OpenAI Embeddings API",
                        "Gemini Embedding",
                        "Cohere",
                        "Sentence Transformers (Open Source)"
                    ]
                },
                {
                    "name": "Vector Databases",
                    "subs": [
                        "Chroma",
                        "Pinecone",
                        "Weaviate",
                        "FAISS",
                        "Milvus",
                        "Qdrant",
                        "LanceDB",
                        "MongoDB Atlas"
                    ]
                },
                {
                    "name": "RAG (Retrieval-Augmented Generation)",
                    "subs": [
                        "Why use RAG?",
                        "RAG vs Fine-tuning",
                        "Implementing RAG (Chunking",
                        "Embedding",
                        "Vector Database",
                        "Retrieval Process",
                        "Generation)"
                    ]
                },
                {
                    "name": "Frameworks",
                    "subs": [
                        "LangChain",
                        "LlamaIndex",
                        "Haystack",
                        "Realflow"
                    ]
                },
                {
                    "name": "AI Agents",
                    "subs": [
                        "Agent Objectives",
                        "ReAct Prompting",
                        "Multi-agents",
                        "OpenAI Assistants API",
                        "Claude Agent SDK"
                    ]
                },
                {
                    "name": "Model Context Protocol (MCP)",
                    "subs": [
                        "MCP Host",
                        "MCP Client",
                        "MCP Server",
                        "Data Layer",
                        "Transport Layer"
                    ]
                },
                {
                    "name": "AI Safety and Ethics",
                    "subs": [
                        "Prompt Injection Attacks",
                        "Bias and Fairness",
                        "Content Moderation APIs",
                        "Adversarial Testing"
                    ]
                },
                {
                    "name": "Multimodal AI",
                    "subs": [
                        "Image Understanding/Generation",
                        "Video Understanding",
                        "Audio Processing",
                        "Text-to-Speech"
                    ]
                },
                {
                    "name": "Development Tools",
                    "subs": [
                        "Claude Code",
                        "Cursor",
                        "Windsurf",
                        "Replit"
                    ]
                }
            ]
        }
    ],
    "Cyber Security Expert": [
        {
            "title": "Fundamental IT Skills",
            "nsqf": "Level 5",
            "topics": [
                {
                    "name": "Fundamental IT Skills",
                    "subs": [
                        "Computer Hardware Components",
                        "OS-independent Troubleshooting",
                        "Basics of Computer Networking"
                    ]
                },
                {
                    "name": "Operating Systems",
                    "subs": [
                        "Windows",
                        "Linux",
                        "macOS (Installation",
                        "Configuration",
                        "CLI vs GUI",
                        "Permissions",
                        "Troubleshooting)"
                    ]
                },
                {
                    "name": "Networking Knowledge",
                    "subs": [
                        "OSI Model",
                        "Common Protocols (SSH",
                        "FTP",
                        "HTTP/S",
                        "SSL/TLS)",
                        "Network Topologies",
                        "Subnetting",
                        "Public vs Private IP"
                    ]
                }
            ]
        },
        {
            "title": "Security Skills and Knowledge",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Core Concepts",
                    "subs": [
                        "Zero Trust",
                        "Compliance and Auditing",
                        "Risk Management",
                        "CIA Triad",
                        "Privilege Escalation"
                    ]
                },
                {
                    "name": "Tools",
                    "subs": [
                        "Nmap",
                        "Wireshark",
                        "Metasploit",
                        "Burp Suite",
                        "Nessus",
                        "Netcat"
                    ]
                },
                {
                    "name": "Cryptography",
                    "subs": [
                        "Hashing",
                        "Symmetric vs Asymmetric Keys",
                        "PKI",
                        "Digital Signatures"
                    ]
                },
                {
                    "name": "Attack Types",
                    "subs": [
                        "Phishing",
                        "Malware",
                        "SQL Injection",
                        "Cross-Site Scripting (XSS)",
                        "DoS/DDoS",
                        "Social Engineering"
                    ]
                },
                {
                    "name": "Incident Response",
                    "subs": [
                        "Preparation",
                        "Identification",
                        "Containment",
                        "Eradication",
                        "Recovery"
                    ]
                },
                {
                    "name": "Cloud Skills",
                    "subs": [
                        "Infrastructure as Code",
                        "Serverless",
                        "Cloud Models (Private",
                        "Public",
                        "Hybrid)",
                        "Common Vendors (AWS",
                        "GCP",
                        "Azure)"
                    ]
                },
                {
                    "name": "Programming Skills",
                    "subs": [
                        "Python",
                        "Go",
                        "JavaScript",
                        "C++",
                        "PowerShell"
                    ]
                }
            ]
        }
    ],
    "Full Stack Developer": [
        {
            "title": "Frontend Foundations",
            "nsqf": "Level 5",
            "topics": [
                {
                    "name": "Frontend Foundations",
                    "subs": [
                        "* HTML & CSS: Static Webpages",
                        "Responsive Design"
                    ]
                },
                {
                    "name": "JavaScript",
                    "subs": [
                        "Interactivity",
                        "npm",
                        "External Packages"
                    ]
                },
                {
                    "name": "Version Control",
                    "subs": [
                        "Git & GitHub (Collaborative Work)"
                    ]
                },
                {
                    "name": "Frontend Frameworks",
                    "subs": [
                        "React",
                        "Tailwind CSS (Building Frontend Apps)"
                    ]
                },
                {
                    "name": "Backend Development (Node.js)",
                    "subs": [
                        "* CLI Apps",
                        "Simple CRUD Apps"
                    ]
                },
                {
                    "name": "Database",
                    "subs": [
                        "PostgreSQL"
                    ]
                },
                {
                    "name": "Auth & APIs",
                    "subs": [
                        "JWT Auth",
                        "RESTful APIs",
                        "Redis"
                    ]
                }
            ]
        },
        {
            "title": "DevOps Foundations",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Linux Basics",
                    "subs": [
                        "Basic terminal commands"
                    ]
                },
                {
                    "name": "Basic AWS Services",
                    "subs": [
                        "Route53",
                        "SES",
                        "EC2",
                        "VPC",
                        "S3"
                    ]
                },
                {
                    "name": "CI/CD & Infrastructure",
                    "subs": [
                        "GitHub Actions",
                        "Ansible",
                        "Terraform (Automation",
                        "Infrastructure as Code)"
                    ]
                },
                {
                    "name": "Monitoring",
                    "subs": [
                        "Monit"
                    ]
                }
            ]
        }
    ],
    "UX Design": [
        {
            "title": "Human Decision Making",
            "nsqf": "Level 5",
            "topics": [
                {
                    "name": "Human Decision Making",
                    "subs": [
                        "* Frameworks: BJ Fogg's Behavior Model",
                        "CREATE Action Funnel",
                        "Dual Process Theory"
                    ]
                },
                {
                    "name": "Buzzwords",
                    "subs": [
                        "Nudge Theory",
                        "Behavioral Economics",
                        "Persuasive Technology"
                    ]
                },
                {
                    "name": "Behavior Change Strategies",
                    "subs": [
                        "BJ Fogg's Behavior Grid",
                        "Classifying Behavior"
                    ]
                },
                {
                    "name": "Creating/Changing Habits",
                    "subs": [
                        "Hook Model (Nir Eyal)",
                        "Cue-Routine-Reward Model"
                    ]
                },
                {
                    "name": "Understanding the Product",
                    "subs": [
                        "User Personas",
                        "Target Users",
                        "Clarifying Product (Target Outcome/Action)"
                    ]
                },
                {
                    "name": "Conceptual Design",
                    "subs": [
                        "User Stories",
                        "Business Model Canvas",
                        "SWOT Analysis",
                        "Competitor Analysis"
                    ]
                }
            ]
        },
        {
            "title": "Prototyping",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Tools",
                    "subs": [
                        "Figma",
                        "Adobe XD",
                        "Sketch",
                        "Balsamiq"
                    ]
                },
                {
                    "name": "Wireframing",
                    "subs": [
                        "Layout Rules"
                    ]
                }
            ]
        },
        {
            "title": "UX Best Practices",
            "nsqf": "Level 6",
            "topics": [
                {
                    "name": "Attention",
                    "subs": [
                        "Clearing distractions",
                        "Clear \"Where to Act\""
                    ]
                },
                {
                    "name": "Intuitive Reaction",
                    "subs": [
                        "Professional/Personal feel",
                        "Social Proof"
                    ]
                },
                {
                    "name": "Cognitive Load",
                    "subs": [
                        "Avoiding Choice Overload",
                        "Avoiding Cognitive Overhead"
                    ]
                },
                {
                    "name": "UX Patterns",
                    "subs": [
                        "Call to Action",
                        "Status Reports",
                        "Gamification",
                        "Goal Trackers"
                    ]
                },
                {
                    "name": "Measuring Impact",
                    "subs": [
                        "Multivariate Testing",
                        "Incremental A/B Testing"
                    ]
                }
            ]
        }
    ]
};

const roleQuestions = {
    "Data Analyst": [
        {
            "id": "q1",
            "label": "Rate your overall practical experience as a Data Analyst (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q2",
            "label": "Rate your knowledge of core principles in Data Analyst (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q3",
            "label": "Rate your familiarity with standard tools and frameworks for Data Analyst (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q4",
            "label": "Rate your problem-solving skills in complex Data Analyst scenarios (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q5",
            "label": "Rate your deployment/production experience in Data Analyst (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        }
    ],
    "Machine Learning": [
        {
            "id": "q1",
            "label": "Rate your overall practical experience as a Machine Learning (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q2",
            "label": "Rate your knowledge of core principles in Machine Learning (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q3",
            "label": "Rate your familiarity with standard tools and frameworks for Machine Learning (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q4",
            "label": "Rate your problem-solving skills in complex Machine Learning scenarios (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q5",
            "label": "Rate your deployment/production experience in Machine Learning (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        }
    ],
    "Android Developer": [
        {
            "id": "q1",
            "label": "Rate your overall practical experience as a Android Developer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q2",
            "label": "Rate your knowledge of core principles in Android Developer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q3",
            "label": "Rate your familiarity with standard tools and frameworks for Android Developer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q4",
            "label": "Rate your problem-solving skills in complex Android Developer scenarios (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q5",
            "label": "Rate your deployment/production experience in Android Developer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        }
    ],
    "Software Architect": [
        {
            "id": "q1",
            "label": "Rate your overall practical experience as a Software Architect (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q2",
            "label": "Rate your knowledge of core principles in Software Architect (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q3",
            "label": "Rate your familiarity with standard tools and frameworks for Software Architect (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q4",
            "label": "Rate your problem-solving skills in complex Software Architect scenarios (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q5",
            "label": "Rate your deployment/production experience in Software Architect (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        }
    ],
    "Game Developer": [
        {
            "id": "q1",
            "label": "Rate your overall practical experience as a Game Developer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q2",
            "label": "Rate your knowledge of core principles in Game Developer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q3",
            "label": "Rate your familiarity with standard tools and frameworks for Game Developer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q4",
            "label": "Rate your problem-solving skills in complex Game Developer scenarios (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q5",
            "label": "Rate your deployment/production experience in Game Developer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        }
    ],
    "Product Manager": [
        {
            "id": "q1",
            "label": "Rate your overall practical experience as a Product Manager (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q2",
            "label": "Rate your knowledge of core principles in Product Manager (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q3",
            "label": "Rate your familiarity with standard tools and frameworks for Product Manager (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q4",
            "label": "Rate your problem-solving skills in complex Product Manager scenarios (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q5",
            "label": "Rate your deployment/production experience in Product Manager (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        }
    ],
    "DevOps": [
        {
            "id": "q1",
            "label": "Rate your overall practical experience as a DevOps (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q2",
            "label": "Rate your knowledge of core principles in DevOps (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q3",
            "label": "Rate your familiarity with standard tools and frameworks for DevOps (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q4",
            "label": "Rate your problem-solving skills in complex DevOps scenarios (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q5",
            "label": "Rate your deployment/production experience in DevOps (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        }
    ],
    "QA Engineer": [
        {
            "id": "q1",
            "label": "Rate your overall practical experience as a QA Engineer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q2",
            "label": "Rate your knowledge of core principles in QA Engineer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q3",
            "label": "Rate your familiarity with standard tools and frameworks for QA Engineer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q4",
            "label": "Rate your problem-solving skills in complex QA Engineer scenarios (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q5",
            "label": "Rate your deployment/production experience in QA Engineer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        }
    ],
    "Data Engineer": [
        {
            "id": "q1",
            "label": "Rate your overall practical experience as a Data Engineer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q2",
            "label": "Rate your knowledge of core principles in Data Engineer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q3",
            "label": "Rate your familiarity with standard tools and frameworks for Data Engineer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q4",
            "label": "Rate your problem-solving skills in complex Data Engineer scenarios (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q5",
            "label": "Rate your deployment/production experience in Data Engineer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        }
    ],
    "AI Engineer": [
        {
            "id": "q1",
            "label": "Rate your overall practical experience as a AI Engineer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q2",
            "label": "Rate your knowledge of core principles in AI Engineer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q3",
            "label": "Rate your familiarity with standard tools and frameworks for AI Engineer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q4",
            "label": "Rate your problem-solving skills in complex AI Engineer scenarios (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q5",
            "label": "Rate your deployment/production experience in AI Engineer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        }
    ],
    "Cyber Security Expert": [
        {
            "id": "q1",
            "label": "Rate your overall practical experience as a Cyber Security Expert (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q2",
            "label": "Rate your knowledge of core principles in Cyber Security Expert (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q3",
            "label": "Rate your familiarity with standard tools and frameworks for Cyber Security Expert (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q4",
            "label": "Rate your problem-solving skills in complex Cyber Security Expert scenarios (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q5",
            "label": "Rate your deployment/production experience in Cyber Security Expert (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        }
    ],
    "Full Stack Developer": [
        {
            "id": "q1",
            "label": "Rate your overall practical experience as a Full Stack Developer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q2",
            "label": "Rate your knowledge of core principles in Full Stack Developer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q3",
            "label": "Rate your familiarity with standard tools and frameworks for Full Stack Developer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q4",
            "label": "Rate your problem-solving skills in complex Full Stack Developer scenarios (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q5",
            "label": "Rate your deployment/production experience in Full Stack Developer (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        }
    ],
    "UX Design": [
        {
            "id": "q1",
            "label": "Rate your overall practical experience as a UX Design (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q2",
            "label": "Rate your knowledge of core principles in UX Design (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q3",
            "label": "Rate your familiarity with standard tools and frameworks for UX Design (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q4",
            "label": "Rate your problem-solving skills in complex UX Design scenarios (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        },
        {
            "id": "q5",
            "label": "Rate your deployment/production experience in UX Design (1-10)?",
            "type": "number",
            "min": 1,
            "max": 10
        }
    ]
};

function navigateTo(viewId) {
    if (!localStorage.getItem('auth_token')) {
        window.location.href = '/auth.html';
        return;
    }
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link-item').forEach(l => l.classList.remove('active'));
    const pageEl = document.getElementById(`page-${viewId}`);
    if (pageEl) pageEl.classList.add('active');
    const navEl = document.getElementById(`nav-btn-${viewId}`);
    if (navEl) navEl.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('resume-upload').addEventListener('change', function(e) {
    const fileNameDisp = document.getElementById('file-name-display');
    if(this.files && this.files.length > 0) {
        fileNameDisp.innerText = this.files[0].name;
        fileNameDisp.style.display = 'inline-block';
    } else {
        fileNameDisp.style.display = 'none';
    }
});

const dropzone = document.getElementById('resume-dropzone');
if (dropzone) {
    dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.style.borderColor = 'var(--p-brand)'; });
    dropzone.addEventListener('dragleave', () => dropzone.style.borderColor = '#cbd5e1');
    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = '#cbd5e1';
        if (e.dataTransfer.files.length) {
            document.getElementById('resume-upload').files = e.dataTransfer.files;
            document.getElementById('resume-upload').dispatchEvent(new Event('change'));
        }
    });
}

const careerSelect = document.getElementById('career-select');
if (careerSelect) {
    careerSelect.addEventListener('change', function(e) {
        const role = e.target.value;
        const container = document.getElementById('dynamic-questions-container');
        if (!container) return;
        
        const questions = roleQuestions[role];
        if (questions && questions.length > 0) {
            let html = '<h3 style="margin-bottom:15px; color:white; font-size:1.1rem;"><i class="fas fa-clipboard-list" style="color:#f59e0b;"></i> Role-Specific Assessment</h3>';
            questions.forEach(q => {
                html += `
                    <div class="form-field-v5" style="margin-bottom:15px;">
                        <label>${q.label}</label>
                        <input type="${q.type}" id="${q.id}" class="custom-input dynamic-question-input" ${q.min ? `min="${q.min}"` : ''} ${q.max ? `max="${q.max}"` : ''} style="width:100%; color:var(--text); background:rgba(255,255,255,0.05); padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1);" required placeholder="Enter value...">
                    </div>
                `;
            });
            container.innerHTML = html;
            container.style.display = 'block';
        } else {
            container.innerHTML = '';
            container.style.display = 'none';
        }
    });

    // Trigger change initially
    setTimeout(() => careerSelect.dispatchEvent(new Event('change')), 100);
}

document.getElementById('skilling-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const role = document.getElementById('career-select').value;
    const fileInput = document.getElementById('resume-upload');
    
    if (!fileInput.files || fileInput.files.length === 0) {
        alert('Please upload a resume (PDF).');
        return;
    }

    document.getElementById('loading-role-text').innerText = role;
    document.getElementById('ai-loading-overlay').classList.remove('hidden');

    const formData = new FormData();
    formData.append('resume', fileInput.files[0]);
    formData.append('role', role);

    const qa = {};
    const questions = roleQuestions[role] || [];
    questions.forEach(q => {
        const el = document.getElementById(q.id);
        if (el) qa[q.label] = el.value;
    });
    formData.append('question_answers', JSON.stringify(qa));

    try {
        const token = localStorage.getItem('auth_token');
        const res = await fetch('http://127.0.0.1:5000/api/analyze-resume', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
            body: formData
        });

        const data = await res.json();
        
        if (res.ok) {
            document.getElementById('ai-match-perc').innerText = `${data.match_percentage || 0}%`;
            
            const skillsContainer = document.getElementById('missing-skills-list');
            const missing = data.missing_skills || [];
            if(missing.length > 0) {
                skillsContainer.innerHTML = missing.map(s => `<span class="skill-tag-pill">${s}</span>`).join('');
            } else {
                skillsContainer.innerHTML = '<span class="skill-tag-pill" style="background:#dcfce7; color:#166534; border-color:#bbf7d0;">Analysis confident!</span>';
            }

            masterRoadmap = (data.custom_roadmap || []).map(chapter => ({
                ...chapter,
                topics: (chapter.topics || []).map(t => ({ ...t, completedSubs: [] })),
                status: 'pending'
            }));
            
            const userCache = JSON.parse(localStorage.getItem('user_profile') || '{}');
            userCache.roadmap = masterRoadmap;
            userCache.missing_skills = missing;
            userCache.match_percentage = data.match_percentage || 0;
            userCache.target_role = role;
            localStorage.setItem('user_profile', JSON.stringify(userCache));
            
            renderRoadmap(role);
            logToLedger(`AI Analyzed Resume. Custom Path generated for ${role}`);
            loadHistoricalPaths();
            navigateTo('dashboard');
        } else {
            alert(data.message || 'Error processing resume.');
        }
    } catch (error) {
        console.error(error);
        alert('Failed to connect to the AI engine.');
    } finally {
        document.getElementById('ai-loading-overlay').classList.add('hidden');
    }
});

function renderRoadmap(roleTitle) {
    const container = document.getElementById('master-roadmap-container');
    if (!container) return;
    container.innerHTML = '';
    
    let totalSubsPossible = 0;
    let totalSubsCompleted = 0;

    masterRoadmap.forEach((chapter, idx) => {
        const totalSubs = chapter.topics.reduce((acc, t) => acc + (t.subs ? t.subs.length : 0), 0);
        const doneSubs = chapter.topics.reduce((acc, t) => acc + (t.completedSubs ? t.completedSubs.length : 0), 0);
        
        totalSubsPossible += totalSubs;
        totalSubsCompleted += doneSubs;

        const progress = totalSubs === 0 ? 0 : Math.round((doneSubs / totalSubs) * 100);
        const isDone = doneSubs === totalSubs && totalSubs > 0;

        const card = document.createElement('div');
        card.className = `milestone-v5-card ${isDone ? 'done' : ''}`;
        card.innerHTML = `
            <div class="m-content">
                <span class="nsqf-badge" style="margin-bottom:12px; display:inline-block;">${chapter.nsqf || 'Level 5'}</span>
                <h3>Module ${idx + 1}: ${chapter.title}</h3>
                <p style="color:var(--text-p); font-size:0.9rem;">${doneSubs} / ${totalSubs} Mastered</p>
                <div style="width:150px; height:6px; background:rgba(255,255,255,0.1); border-radius:6px; margin-top:12px; overflow:hidden;">
                    <div style="height:100%; width:${progress}%; background:var(--p-gradient);"></div>
                </div>
            </div>
            <i class="fas fa-chevron-right"></i>
        `;
        card.onclick = () => openChapterDetails(idx);
        container.appendChild(card);
    });

    let overallProg = totalSubsPossible === 0 ? 0 : Math.round((totalSubsCompleted / totalSubsPossible) * 100);
    const progressFill = document.getElementById('dashboard-progress-fill');
    if (progressFill) progressFill.style.width = overallProg + '%';
}

function openChapterDetails(idx) {
    const chapter = masterRoadmap[idx];
    document.getElementById('drawer-title').innerText = chapter.title || `Module ${idx+1}`;
    const nsqfBadge = document.getElementById('drawer-nsqf');
    if (nsqfBadge) nsqfBadge.innerText = `${chapter.nsqf || 'Level 5'} COMPLIANT`;
    
    const container = document.getElementById('drawer-topics-container');
    container.innerHTML = '';

    chapter.topics.forEach((topic, tIdx) => {
        let subsHtml = '';
        if (topic.subs) {
            subsHtml = topic.subs.map(sub => {
                const isDone = topic.completedSubs ? topic.completedSubs.includes(sub) : false;
                return `
                <label class="sub-item-v6 ${isDone ? 'completed' : ''}" onclick="event.preventDefault(); toggleSubTopic(${idx}, ${tIdx}, '${sub.replace(/'/g,"\\'").replace(/"/g,"&quot;")}')">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <input type="checkbox" ${isDone ? 'checked' : ''} style="accent-color: var(--success); transform:scale(1.2); pointer-events:none;">
                        <span style="${isDone ? 'text-decoration:line-through; opacity:0.6;' : ''}">${sub}</span>
                    </div>
                </label>`;
            }).join('');
        }

        const topicDiv = document.createElement('div');
        topicDiv.className = 'topic-container-v6';
        topicDiv.innerHTML = `
            <div class="topic-header-v6">
                <span><i class="fas fa-cube" style="color:var(--p-light); margin-right:8px;"></i> ${topic.name}</span>
            </div>
            <div>${subsHtml}</div>
        `;
        container.appendChild(topicDiv);
    });

    document.getElementById('detail-drawer').classList.remove('hidden');
}

function toggleSubTopic(chapterIdx, topicIdx, subName) {
    const chapter = masterRoadmap[chapterIdx];
    const topic = chapter.topics[topicIdx];
    if (!topic.completedSubs) topic.completedSubs = [];
    
    if (topic.completedSubs.includes(subName)) {
        topic.completedSubs = topic.completedSubs.filter(s => s !== subName);
    } else {
        topic.completedSubs.push(subName);
    }
    
    const userCache = JSON.parse(localStorage.getItem('user_profile') || '{}');
    userCache.roadmap = masterRoadmap;
    localStorage.setItem('user_profile', JSON.stringify(userCache));
    
    openChapterDetails(chapterIdx);
    renderRoadmap(document.getElementById('nav-target-role').innerText);
}

function closeDrawer() { 
    const drawer = document.getElementById('detail-drawer');
    if (drawer) drawer.classList.add('hidden'); 
}

function renderLedger() {
    const feed = document.getElementById('blockchain-logs');
    if (feed) {
        feed.innerHTML = activityLedger.map(a => `<div style="padding:15px; border-bottom:1px solid rgba(255,255,255,0.05);"><b style="color:var(--p-brand); min-width:85px; display:inline-block;">${a.time}</b> <span>${a.message}</span></div>`).join('');
    }
}

function logToLedger(message) {
    const time = new Date().toLocaleTimeString();
    activityLedger.unshift({ time, message });
    if (activityLedger.length > 100) activityLedger.pop();
    localStorage.setItem('activity_ledger', JSON.stringify(activityLedger));
    renderLedger();
}

window.addEventListener('DOMContentLoaded', renderLedger);

function syncBlockchain() {
    logToLedger('Synchronizing user state across secure network nodes...');
    setTimeout(() => {
        logToLedger('Synchronization complete. Ledger state immutable.');
    }, 1500);
}

function toggleChat() { 
    const chat = document.getElementById('chat-ui');
    if (chat) chat.classList.toggle('hidden'); 
}

async function sendChat() {
    const inp = document.getElementById('chat-inp');
    const msg = inp.value; if (!msg) return;
    const body = document.getElementById('chat-body');
    body.innerHTML += `<div style="margin-bottom:10px; text-align:right;"><b>You:</b> ${msg}</div>`;
    inp.value = '';
    try {
        const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${AI_GATEWAY}`, {
            method: "POST", headers: {"Content-Type": "application/json"},
            body: JSON.stringify({contents: [{parts: [{text: msg}]}]})
        });
        const data = await resp.json();
        body.innerHTML += `<div style="margin-bottom:10px; color:var(--p-brand)"><b>AI:</b> ${data.candidates[0].content.parts[0].text}</div>`;
        body.scrollTop = body.scrollHeight;
    } catch(e) { body.innerHTML += `<p style="color:red">API Error.</p>`; }
}

function logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_profile');
    window.location.href = '/auth.html';
}

// --- New Profile Logic ---
let secondsSpent = 0;

// Track Time Spent on Site
setInterval(() => {
    secondsSpent++;
    const mins = Math.floor(secondsSpent / 60);
    const secs = secondsSpent % 60;
    const timeDisplay = document.getElementById('site-time-spent');
    if(timeDisplay) timeDisplay.innerText = `${mins}m ${secs}s`;
}, 1000);

// Update navigateTo to handle profile data refresh
const originalNavigateTo = navigateTo;
navigateTo = function(viewId) {
    originalNavigateTo(viewId);
    if(viewId === 'profile') renderUserProfile();
};

function renderUserProfile() {
    try {
        const user = JSON.parse(localStorage.getItem('user_profile') || '{}');
        if (user.username) {
            const uName = user.username;
            const initials = uName.split(' ').map(n=>n[0]).join('').substring(0, 2).toUpperCase();
            
            // Navbar
            const navUName = document.getElementById('nav-user-name');
            if (navUName) navUName.innerText = uName;
            
            const navAvatar = document.getElementById('nav-avatar');
            if (navAvatar) navAvatar.innerText = initials;
            
            const navRole = document.getElementById('nav-target-role');
            if (navRole) navRole.innerText = user.target_role || 'Pending Assessment';
            
            // Profile Form / Avatar
            const pAvatar = document.getElementById('profile-page-avatar');
            if (pAvatar) pAvatar.innerText = initials;
            
            // Fill Form Internals
            const pUname = document.getElementById('edit-username');
            if (pUname) pUname.value = uName;
            
            const pCol = document.getElementById('edit-college');
            if (pCol) pCol.value = user.college_name || '';
            
            const pEdu = document.getElementById('edit-edu');
            if (pEdu) pEdu.value = user.education_level || 'Bachelors';
            
            const pMob = document.getElementById('edit-mobile');
            if (pMob) pMob.value = user.mobile_number || '';
            
            // Document active resume check
            const resumeNameDisplay = document.getElementById('active-resume-name');
            const downloadBtn = document.getElementById('download-resume-btn');
            if (user.resume_filename) {
                if (resumeNameDisplay) resumeNameDisplay.innerText = user.resume_filename.split('_').slice(1).join('_') || user.resume_filename;
                if (downloadBtn) {
                    downloadBtn.href = `/uploads/${user.resume_filename}`;
                    downloadBtn.classList.remove('hidden');
                }
            }
        }
    } catch(e) {
        console.error("Error parsing user profile", e);
    }
}

// Bind Profile Edit Upload Display
const editResumeUpload = document.getElementById('edit-resume-upload');
if (editResumeUpload) {
    editResumeUpload.addEventListener('change', function(e) {
        const fileNameDisp = document.getElementById('edit-file-name-display');
        if(this.files && this.files.length > 0) {
            fileNameDisp.innerText = this.files[0].name;
        } else {
            fileNameDisp.innerText = '';
        }
    });
}

// Bind Profile Edit Submit
const editForm = document.getElementById('profile-update-form');
if (editForm) {
    editForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const btn = document.getElementById('btn-update-profile');
        const msg = document.getElementById('profile-update-msg');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Synchronizing...';
        msg.innerText = '';
        
        const formData = new FormData();
        formData.append('username', document.getElementById('edit-username').value);
        formData.append('mobile_number', document.getElementById('edit-mobile').value);
        formData.append('college_name', document.getElementById('edit-college').value);
        formData.append('education_level', document.getElementById('edit-edu').value);
        
        const fileInput = document.getElementById('edit-resume-upload');
        if (fileInput.files.length > 0) {
            formData.append('resume', fileInput.files[0]);
        }

        try {
            const token = localStorage.getItem('auth_token');
            const res = await fetch('http://127.0.0.1:5000/api/profile/update', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData
            });
            
            const data = await res.json();
            if (res.ok) {
                msg.innerText = data.message || 'Identity parameters synchronized successfully.';
                msg.style.color = 'var(--success)';
                await refreshProfile();
                fileInput.value = '';
                document.getElementById('edit-file-name-display').innerText = '';
                logToLedger('Profile Parameters and Evidence Updated manually.');
            } else {
                msg.innerText = 'Error: ' + data.message;
                msg.style.color = '#ef4444';
            }
        } catch (err) {
            console.error(err);
            msg.innerText = 'Network Failure. Cannot synchronize.';
            msg.style.color = '#ef4444';
        } finally {
            btn.innerHTML = '<i class="fas fa-sync-alt"></i> Synchronize Identity';
        }
    });
}

// Update profile dynamically on load
async function refreshProfile() {
    const token = localStorage.getItem('auth_token');
    if(!token) return;
    try {
        const res = await fetch('http://127.0.0.1:5000/api/profile', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if(res.ok) {
            const data = await res.json();
            localStorage.setItem('user_profile', JSON.stringify(data));
            renderUserProfile();
            if (data.roadmap && data.roadmap.length > 0) {
                masterRoadmap = data.roadmap;
                const spEl = document.getElementById('ai-match-perc');
                if(spEl) spEl.innerText = `${data.match_percentage || 0}%`;
                const skillsContainer = document.getElementById('missing-skills-list');
                if (skillsContainer) {
                    const missing = data.missing_skills || [];
                    if(missing.length > 0) {
                        skillsContainer.innerHTML = missing.map(s => `<span class="skill-tag-pill">${s}</span>`).join('');
                    } else {
                        skillsContainer.innerHTML = '<span class="skill-tag-pill" style="background:#dcfce7; color:#166534; border-color:#bbf7d0;">Analysis confident!</span>';
                    }
                }
                renderRoadmap(data.target_role || 'Custom Path');
            }
        }
    } catch(e) { console.error("Profile refresh failed", e); }
}

async function loadHistoricalPaths() {
    const token = localStorage.getItem('auth_token');
    if(!token) return;
    try {
        const res = await fetch('http://127.0.0.1:5000/api/roadmaps/history', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if(res.ok) {
            const history = await res.json();
            const grid = document.getElementById('historical-paths-grid');
            if (!grid) return;
            
            if (history.length === 0) {
                grid.innerHTML = `
                <div style="text-align:center; color:#a1a1aa; grid-column: 1 / -1; padding:50px; background:var(--bg-card); border-radius:var(--radius-lg); border:1px solid var(--border-subtle);">
                    <i class="fas fa-history" style="font-size:3rem; margin-bottom:15px; opacity:0.5;"></i>
                    <p style="font-size:1.1rem;">No historical trajectories recorded.</p>
                </div>`;
                return;
            }
            
            window.historyMap = {};
            grid.innerHTML = history.map(h => {
                window.historyMap[h.id] = h;
                const date = new Date(h.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
                const chapters = h.roadmap_data ? h.roadmap_data.length : 0;
                
                return `
                <div class="form-card-v5" style="padding:25px; transition:all 0.3s; cursor:pointer;" onmouseover="this.style.borderColor='var(--p-brand)'; this.style.transform='translateY(-5px)';" onmouseout="this.style.borderColor='var(--border-subtle)'; this.style.transform='translateY(0)'">
                    <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:15px;">
                        <span style="background:rgba(16, 185, 129, 0.1); color:#10b981; border:1px solid rgba(16, 185, 129, 0.3); padding:4px 10px; border-radius:12px; font-size:0.8rem; font-weight:700;">${h.match_percentage}% MATCH</span>
                        <span style="color:#a1a1aa; font-size:0.85rem;"><i class="fas fa-calendar-alt"></i> ${date}</span>
                    </div>
                    <h3 style="color:white; margin-bottom:10px; font-size:1.4rem;">${h.target_role}</h3>
                    <p style="color:#a1a1aa; font-size:0.95rem; margin-bottom:20px; line-height:1.6;">
                        <i class="fas fa-book-open" style="margin-right:8px; width:15px;"></i> ${chapters} Technical Chapters<br>
                        <i class="fas fa-exclamation-triangle" style="margin-right:8px; width:15px;"></i> ${h.missing_skills.length} Critical Skills
                    </p>
                    <button class="btn-submit-v5" style="margin-top:0; padding:12px; font-size:0.95rem; background:linear-gradient(135deg, #18181b, #27272a); border:1px solid rgba(255,255,255,0.1);" onclick="activateHistoricalPath(${h.id})">
                        <i class="fas fa-play-circle" style="color:#8b5cf6;"></i> Mount Trajectory
                    </button>
                </div>
                `;
            }).join('');
        }
    } catch(e) { console.error("Failed to load history", e); }
}

function activateHistoricalPath(id) {
    if(!window.historyMap || !window.historyMap[id]) return;
    const h = window.historyMap[id];
    
    if(h.roadmap_data && h.roadmap_data.length > 0) {
        masterRoadmap = h.roadmap_data;
        const spEl = document.getElementById('ai-match-perc');
        if(spEl) spEl.innerText = `${h.match_percentage || 0}%`;
        
        const skillsContainer = document.getElementById('missing-skills-list');
        if (skillsContainer) {
            const missing = h.missing_skills || [];
            if(missing.length > 0) {
                skillsContainer.innerHTML = missing.map(s => `<span class="skill-tag-pill">${s}</span>`).join('');
            } else {
                skillsContainer.innerHTML = '<span class="skill-tag-pill" style="background:#dcfce7; color:#166534; border-color:#bbf7d0;">Analysis confident!</span>';
            }
        }
        
        document.getElementById('nav-target-role').innerText = h.target_role;
        renderRoadmap(h.target_role);
        
        logToLedger('Reactivated historical AI trajectory.');
        navigateTo('dashboard');
    }
}

// --- Interactive Visual Roadmaps ---
window.exploreNodeClick = function(chapterIdxStr, topicIdxStr) {
    const role = document.getElementById('explore-role-select').value;
    const chapIdx = parseInt(chapterIdxStr);
    const syllabus = syllabusBank[role];
    if (!syllabus || !syllabus[chapIdx]) return;
    
    const chapter = syllabus[chapIdx];
    document.getElementById('drawer-title').innerText = chapter.title;
    const nsqfBadge = document.getElementById('drawer-nsqf');
    if (nsqfBadge) nsqfBadge.innerText = `${chapter.nsqf} COMPLIANT`;
    
    const container = document.getElementById('drawer-topics-container');
    container.innerHTML = '';
    
    let topicsToRender = chapter.topics;
    if (topicIdxStr !== undefined && topicIdxStr !== null && topicIdxStr.toString().trim() !== '') {
        const tIdx = parseInt(topicIdxStr);
        if (!isNaN(tIdx) && tIdx >= 0 && tIdx < chapter.topics.length) {
            topicsToRender = [chapter.topics[tIdx]];
            document.getElementById('drawer-title').innerText = chapter.topics[tIdx].name;
            if (nsqfBadge) nsqfBadge.innerText = "TOPIC DETAILS";
        }
    }
    
    topicsToRender.forEach((topic) => {
        let subsHtml = '';
        if (topic.subs && topic.subs.length > 0) {
            subsHtml = topic.subs.map(sub => {
                const safeSub = sub.replace(/'/g, "\\'").replace(/"/g, "&quot;");
                const safeTop = topic.name.replace(/'/g, "\\'").replace(/"/g, "&quot;");
                return `
                <div class="sub-topic-interactive" style="cursor:pointer; padding:15px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; margin-bottom:10px; background: rgba(255,255,255,0.03); transition: 0.3s;" onmouseover="this.style.background='rgba(255, 0, 0, 0.1)'; this.style.borderColor='#ff0000'; this.style.transform='translateX(5px)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'; this.style.borderColor='rgba(255,255,255,0.1)'; this.style.transform='translateX(0)'" onclick="openYouTubeTutorial('${role}', '${safeTop}', '${safeSub}')">
                    <div style="display:flex; gap:12px; align-items:center;">
                        <i class="fab fa-youtube" style="color:#ff0000; font-size:1.2rem;"></i> 
                        <span style="font-weight:600; font-size:1.05rem; color:#fff;">${sub}</span>
                        <i class="fas fa-external-link-alt" style="margin-left:auto; color:rgba(255,255,255,0.3); font-size:0.9rem;"></i>
                    </div>
                </div>`;
            }).join('');
        } else {
            subsHtml = '<div style="padding:10px; opacity:0.6; font-style:italic;">Core foundation established here.</div>';
        }
        const topicDiv = document.createElement('div');
        topicDiv.className = 'topic-container-v6';
        topicDiv.innerHTML = `
            <div class="topic-header-v6">
                <span><i class="fas fa-cube" style="color:var(--p-light); margin-right:8px;"></i> ${topic.name}</span>
            </div>
            <div>${subsHtml}</div>
        `;
        container.appendChild(topicDiv);
    });
    
    document.getElementById('detail-drawer').classList.remove('hidden');
};

window.openYouTubeTutorial = function(role, topicName, subName) {
    const query = `${role} ${topicName} ${subName} tutorial`;
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
};

async function renderMermaidGraph(role) {
    const syllabus = syllabusBank[role];
    if (!syllabus) return;
    
    const container = document.getElementById('mermaid-render-container');
    container.innerHTML = '<div class="mermaid" id="graphDiv"></div>';
    
    let graphDef = 'graph TD\n';
    graphDef += `Root["🎯 ${role} Track"]\n`;
    graphDef += `style Root fill:#8b5cf6,stroke:#fff,stroke-width:3px,color:#fff,rx:10,ry:10\n`;
    
    syllabus.forEach((chap, idx) => {
        const cleanTitle = chap.title.replace(/["']/g, '');
        graphDef += `C${idx}["📚 ${cleanTitle}"]\n`;
        const modQuery = encodeURIComponent(`${role} ${cleanTitle} full course tutorial`);
        graphDef += `click C${idx} "https://www.youtube.com/results?search_query=${modQuery}" "Search ${cleanTitle} on YouTube"\n`;
        
        if (idx === 0) {
            graphDef += `Root --> C${idx}\n`;
        } else {
            graphDef += `C${idx-1} === C${idx}\n`;
        }
        
        chap.topics.forEach((top, tIdx) => {
            const cleanName = top.name.replace(/["']/g, '');
            graphDef += `T${idx}_${tIdx}["${cleanName}"]\n`;
            graphDef += `C${idx} --- T${idx}_${tIdx}\n`;
            // Add click to topics mapping directly to a YouTube search
            const topQuery = encodeURIComponent(`${role} ${cleanName} tutorial`);
            graphDef += `click T${idx}_${tIdx} "https://www.youtube.com/results?search_query=${topQuery}" "Search ${cleanName} on YouTube" _blank\n`;
            graphDef += `style T${idx}_${tIdx} fill:#fbbf24,stroke:#d97706,stroke-width:2px,rx:5,ry:5,color:#000\n`;
        });
        
        graphDef += `style C${idx} fill:#3b82f6,stroke:#1e3a8a,stroke-width:3px,rx:10,ry:10,color:#fff\n`;
    });
    
    try {
        if (typeof mermaid !== 'undefined') {
            mermaid.initialize({ startOnLoad: false, theme: 'dark', securityLevel: 'loose' });
            const { svg } = await mermaid.render('mermaid-chart-gen', graphDef);
            document.getElementById('graphDiv').innerHTML = svg;
        }
    } catch(e) {
        console.error("Mermaid error:", e);
    }
}

// Init Check
if (!localStorage.getItem('auth_token')) {
    window.location.href = '/auth.html';
} else {
    renderUserProfile();
    refreshProfile();
    loadHistoricalPaths();
    if (document.getElementById('explore-role-select')) {
        setTimeout(() => renderMermaidGraph(document.getElementById('explore-role-select').value), 300);
    }
}
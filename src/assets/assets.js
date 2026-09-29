import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaPython, FaFire, FaLaptopCode, FaNodeJs, FaStripe,  FaDatabase, FaVuejs, FaCloud, FaRobot, FaMagento, FaWatchmanMonitoring } from 'react-icons/fa';
import { SiVercel } from "react-icons/si"; 

import profileImg from 'profile image.jpeg';
import projectImg1 from './Screenshot(34).png';
import projectImg2 from './project2.avif';
import projectImg3 from './Screenshot(35).png';
import projectImg4 from './Screenshot(36).png';
import projectImg5 from './Screenshot(37).png';
import projectImg6 from './Screenshot(38).png';
import { FaLandMineOn, FaPlugCircleBolt } from 'react-icons/fa6';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'DATA SCIENCE',////////////
    icon: FaLandMineOn,
    description: 'i have a strong foundation in data science, including statistical analysis, data visualization, and machine learning techniques.',
    tags: [
    "Python",
    "SQL",
    "Pandas & NumPy",
    "Scikit-Learn",
    "Exploratory Data Analysis (EDA)",
    "Data Visualization (Matplotlib / Seaborn)",
    "Feature Engineering",
    "Machine Learning",
    "Deep Learning (PyTorch / TensorFlow)",
    "Statistical Analysis & Hypothesis Testing",
    "A/B Testing",
    "Model Evaluation & Tuning",
]},
  {
    title: 'AI ORCHESTRATION',
    icon: FaCode,
    description: 'Designing and implementing AI orchestration systems to manage and automate AI workflows.',
    tags: [
    "LangChain",
    "LlamaIndex",
    "LangGraph",
    "CrewAI",
    "AutoGen",
    "Multi-Agent Systems",
    "Tool Use & Function Calling",
    "RAG (Retrieval-Augmented Generation)",
    "LLM Routing & Gateways",
    "Vector Databases",
    "Prompt Engineering",
    "Agent Evaluation & Observability",
]
  },
  {
    title: 'ML Engineering',
    icon: FaDatabase,
    description: 'Designing and implementing machine learning models and pipelines for predictive analytics.',
    tags: [
    "Python",
    "PyTorch / TensorFlow",
    "MLOps & CI/CD",
    "Docker & Kubernetes",
    "Model Serving (FastAPI / Triton)",
    "Model Monitoring & Drift Detection",
    "Distributed Training",
    "Model Optimization (ONNX / Quantization)",
]
  },
  {
    title: 'LLM EVALS',
    icon: FaPython,
    description: 'LLM EVALS is a framework for evaluating the performance of large language models (LLMs) on various tasks and datasets.',
    tags: [
    "Python",
    "Ragas / TruLens",
    "LangSmith / DeepEval",
    "LLM-as-a-Judge Design",
    "Ground Truth Dataset Creation",
    "Evaluation Metrics (ROUGE, BLEU, BERTScore)",
    "RAG Evaluation (Faithfulness & Relevance)",
    "Hallucination & Bias Detection",
]
  },
  {
    title: 'RAG ',
    icon: FaLaptopCode,
    description: 'RAG (Retrieval-Augmented Generation) is a technique that combines retrieval-based methods with generative models to improve the quality and relevance of generated content.',
    tags: [
    "Retrieval",
    "Embeddings",
    "Chunking",
    "VectorDBs",
    "Reranking",
    "Parsing",
    "Evaluation",
    "GraphRAG",
]
  },
  {
    title: 'AI engineer',
    icon: FaRobot,
    description: 'AI engineer is a professional who designs, develops, and implements artificial intelligence systems and solutions.',
    tags: [ 
    "Fine-tuning",
    "Prompting",
    "Orchestration",
    "Embeddings",
    "MLOps",
    "Quantization",
    "Evaluation",
    "Deployment",
]
  }
];

export const projects = [
  {
    id: 1,
    title: "AI ORCHESTRATION",
    description: "A complete AI orchestration platform that allows users to build, deploy, and manage AI models and workflows.",
    image: projectImg1,
    tech:  [
    "FastAPI",
    "Uvicorn",
    "httpx",
    "Pydantic",
    "python-dotenv",
    "Git",
    "GitHub",
    "Groq LPU API"
],
    icons: [FaCode, FaPython, FaDatabase, FaCloud],
    code: "https://github.com/CYBERTRON-UTKARSH/async-llm-router",
    // code: "https://pokemon-card-app-alpha.vercel.app/",
  },
  {
    id: 2,
    title: "LLM-EVALS",
    description: "A complete LLM evaluation platform that allows users to evaluate the performance of large language models (LLMs) on various tasks and datasets.",
    image: projectImg2,
    tech:  [
    "Pytest",
    "Pydantic",
    "Groq API",
    "Qwen 3.8 27B",
    "OpenAI Python SDK",
    "LLM-as-a-Judge",
    "GitHub Actions",
    "Google Colab",
    "Python 3.10+",
],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    code: "https://github.com/CYBERTRON-UTKARSH/agent-eval-framework",
    // code: "https://github.com/anaskhan08274-alt/E-Commerce-Frontend",
  },
  {
    id: 3,
    title: "ADVANCED RAG EVAL PIPELINE",
    description: "A complete RAG evaluation pipeline that allows users to evaluate the performance of retrieval-augmented generation (RAG) models on various tasks and datasets.",
    image: projectImg3,
    tech: [
    "rag",
    "retrieval-augmented-generation",
    "langchain",
    "hybrid-search",
    "reranking",
    "cohere",
    "groq",
    "ragas",
    "llm-evaluation",
    "python"
],
    icons: [FaReact, FaDatabase],
    code: "https://github.com/CYBERTRON-UTKARSH/advanced-rag-eval-pipeline",
    // code: "https://github.com/anaskhan08274-alt/response",
  },
  {
    id: 4,
    title: "ML OPS PROJECT",
    description: "A complete ML Ops project that allows users to deploy and manage machine learning models in production environments.",
    image: projectImg4,
    tech:  [
    "Google Colab",
    "Python 3.10",
    "XGBoost",
    "Scikit-Learn",
    "Pandas",
    "MLflow",
    "FastAPI",
    "Uvicorn",
    "Pydantic",
    "pytest",
    "HTTPX",
    "Docker",
    "GitHub Actions",
    "Git",
    "GitHub",
],
    icons: [FaReact, FaCloud],
    code: "https://github.com/CYBERTRON-UTKARSH/mlops-credit-risk",
    ///code: "https://github.com/anaskhan08274-alt/Portfolio",
  },
  {
    id: 5,
    title: "SENTIMENT ANALYSIS AND PREDICTION",
    description: "",
    image: projectImg5,
    tech: [
    "Python",
    "Pandas",
    "NumPy",
    "NLTK",
    "SpaCy",
    "Hugging Face Transformers",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Power BI",
    "Tableau"
],
    icons: [FaReact, FaNodeJs, FaDatabase],
    code: "https://github.com/CYBERTRON-UTKARSH/Sentiment-analysis",
    ///code: "https://github.com/anaskhan08274-alt/Adding-machine",
  },
  {
    id: 6,
    title: "USA AUTO PARTS WEBSITE",
    description: "A complete full stack lead generation website for the auto parts build in HTML CSS JAVASCRIPT PHP AND MYSQL WITH BOOTSTRAP.",
    image: projectImg6,
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MYSQL", "BootStrap"],
    icons: [FaRobot, FaReact, FaCloud],
    code: "https://usaauto-parts.com/",
    ///code: "https://github.com/anaskhan08274-alt/Random-img-genrate",
  },
];

export const workData = [
  {
    role: "AI Engineer",
    company: "My own startup",
    duration: "beginner",
    description:
      "robotics and AI enthusiast working at the intersection of intelligent software and physical systems",
    color: "red"
  },
  
];



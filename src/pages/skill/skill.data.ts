import { TbBrandCss3, TbBrandFlutter, TbBrandGolang, TbBrandHtml5, TbBrandJavascript, TbBrandNodejs, TbBrandPhp, TbBrandPython, TbBrandReact, TbBrandSvelte, TbBrandTailwind, TbBrandVue } from "react-icons/tb";
import { AiOutlineJava, AiOutlineRuby } from "react-icons/ai";
import { FaApple, FaAws, FaCreditCard, FaLinux, FaWindows } from "react-icons/fa";
import { SiArgo, SiDocker, SiElasticsearch, SiGithub, SiGrafana, SiHelm, SiJenkins, SiKakao, SiKubernetes, SiMongodb, SiMysql, SiNaver, SiPostgresql, SiRedis, SiSentry, SiSphinx } from "react-icons/si";
import { SkillCategory, SkillType } from "./skill.types";

const skillCategories: SkillCategory[] = [
  {
    name: "프론트엔드",
    category: "frontend",
  },
  {
    name: "백엔드",
    category: "backend",
  },
  {
    name: "데이터베이스",
    category: "database",
  },
  {
    name: "인프라",
    category: "infra",
  },
  {
    name: "운영체제",
    category: "os",
  },
  {
    name: "기타",
    category: "etc",
  },
];

const skills: SkillType = {
  "frontend": [
    {
      icon: TbBrandHtml5,
      level: 100,
      name: "HTML",
      tags: ["웹 표준", "웹 접근성"],
    },
    {
      icon: TbBrandCss3,
      level: 100,
      name: "CSS",
      tags: ["적응형", "반응형", "애니메이션"],
    },
    {
      icon: TbBrandTailwind,
      level: 100,
      name: "Tailwind CSS",
      tags: ["Shadcn UI", "Daisy UI"],
    },
    {
      icon: TbBrandJavascript,
      level: 98,
      name: "JavaScript",
      tags: ["ES6+", "TypeScript"],
    },
    {
      icon: TbBrandReact,
      level: 96,
      name: "React",
      tags: ["Next.js", "React Query", "Redux", "Zustand"],
    },
    {
      icon: TbBrandVue,
      level: 95,
      name: "Vue",
      tags: ["Nuxt.js", "Pinia", "Vuex", "Vuex Toolkit"],
    },
    {
      icon: TbBrandSvelte,
      level: 75,
      name: "Svelte",
      tags: ["SvelteKit"],
    },
    {
      icon: TbBrandFlutter,
      level: 85,
      name: "Flutter",
      tags: ["Dart"],
    },
  ],
  "backend": [
    {
      icon: TbBrandPhp,
      level: 100,
      name: "PHP",
      tags: ["Laravel", "CodeIgniter", "Composer"],
    },
    {
      icon: AiOutlineRuby,
      level: 100,
      name: "Ruby",
      tags: ["Ruby on Rails"],
    },
    {
      icon: TbBrandGolang,
      level: 95,
      name: "Golang",
      tags: ["Gin", "Buffalo"],
    },
    {
      icon: TbBrandPython,
      level: 90,
      name: "Python",
      tags: ["Django", "FastAPI"],
    },
    {
      icon: TbBrandNodejs,
      level: 90,
      name: "Node.js",
      tags: ["Express", "Nest.js", "AdonisJS", "Socket.io", "GraphQL", "Apollo Server", "Apollo Client"],
    },
    {
      icon: AiOutlineJava,
      level: 50,
      name: "Java",
      tags: ["Spring Boot"],
    },
  ],
  "database": [
    {
      icon: SiMysql,
      level: 100,
      name: "MySQL",
      tags: ["Mysql", "MariaDB", "ORM"],
    },
    {
      icon: SiPostgresql,
      level: 100,
      name: "PostgreSQL",
      tags: ["Postgresql", "ORM"],
    },    
    {
      icon: SiMongodb,
      level: 95,
      name: "MongoDB",
      tags: ["Mongodb", "ORM"],
    },
    {
      icon: SiRedis,
      level: 90,
      name: "Redis",
      tags: ["Redis"],
    },
    {
      icon: SiElasticsearch,
      level: 99,
      name: "Elasticsearch",
      tags: ["Elasticsearch", "Kibana", "Logstash", "Beats"],
    },
    {
      icon: SiSphinx,
      level: 80,
      name: "Sphinx",
      tags: ["Sphinx"],
    },
  ],
  "infra": [
    {
      icon: FaAws,
      level: 100,
      name: "AWS",
      tags: ["App Runner", "Beanstalk", "Lambda", "ECR", "ECS - Fargate", "EKS", "RDS", "S3", "CloudFront", "Route 53", "CloudWatch", "IAM", "Athena"],
    },
    {
      icon: SiGithub,
      level: 100,
      name: "Github",
      tags: ["Code Review", "Github Actions"],
    },
    {
      icon: SiDocker,
      level: 100,
      name: "Docker",
      tags: ["Docker Compose", "Docker Swarm"],
    },
    {
      icon: SiKubernetes,
      level: 95,
      name: "Kubernetes",
      tags: ["minikube", "kubectl"],
    },
    {
      icon: SiGrafana,
      level: 90,
      name: "Grafana",
      tags: ["Resource Monitoring", "Alerting", "Logging", "Metrics"],
    },
    {
      icon: SiSentry,
      level: 95,
      name: "Sentry",
      tags: ["Issue Tracking", "Error Monitoring"],
    },
    {
      icon: SiArgo,
      level: 85,
      name: "Argo",
      tags: ["CI/CD", "Canary Release", "Blue-Green Deployment", "Zero-Downtime Deployment"],
    },
    {
      icon: SiJenkins,
      level: 80,
      name: "Jenkins",
      tags: ["CI/CD", "Canary Release", "Blue-Green Deployment", "Zero-Downtime Deployment"],
    },
    {
      icon: SiHelm,
      level: 40,
      name: "Helm",
      tags: ["Helm Chart", "Helm Values", "Helm Templates"],
    },
  ],
  "os": [
    {
      icon: FaLinux,
      level: 100,
      name: "Linux",
      tags: ["Linux"],
    },
    {
      icon: FaWindows,
      level: 65,
      name: "Windows",
      tags: ["Windows"],
    },
    {
      icon: FaApple,
      level: 95,
      name: "MacOS",
      tags: ["MacOS"],
    },
  ],
  "etc": [
    {
      icon: SiNaver,
      level: 100,
      name: "Naver",
      tags: ["Login API", "Map API", "Location API", "LINE API"],
    },
    {
      icon: SiKakao,
      level: 100,
      name: "Kakao",
      tags: ["Login API", "Map API", "AlimTalk API"],
    },
    {
      icon: FaCreditCard,
      level: 98,
      name: "결제모듈",
      tags: ["아임포트", "토스페이먼츠", "나이스페이", "네이버페이", "카카오페이", "페이팔"],
    },
  ],
};

export { skills, skillCategories };
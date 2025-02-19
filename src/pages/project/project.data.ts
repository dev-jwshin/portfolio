import { Project } from "./project.types";

const projects: Project[] = [
  {
    image: "./project/codle.png",
    title: "코들 - Codle",
    category: "온라인 코딩 교육 플랫폼 | 백엔드",
    description: [
      "학생 타겟인 코딩 교육 플랫폼 입니다.",
      "Python 교육에 특화 되어 있으며 Jupyter를 사용하여 가상 환경에서 코드 작성 및 실행을 진행할 수 있습니다.",
      "학생이 문제에 대해 AI에게 질문을 할 수 있고 제출한 문제를 자동으로 평가하여 피드백을 주는 기능을 위해 OpenAI API를 사용했습니다.",
      "백앤드 참여도는 100%에 가까우며, 약간의 프론트엔드 작업 또한 진행했습니다.",
    ],
    tags: ["React", "Next.js", "Storybook", "Ruby", "Rails", "RSpec", "Python", "Jupyter", "Mysql", "Redis", "OpenAI", "AWS", "EKS"],
    hash: "codle",
    link: "https://codle.com",
  },
  {
    image: "./project/aidt.png",
    title: "AI 디지털 교과서",
    category: "정부 사업 | 백엔드",
    description: [
      "교육부 주관으로 진행된 디지털 교과서 프로젝트 입니다.",
      "2개의 출판사에 대해 성공적으로 구현되었으며, 현재 중학교 이상 학년 교과서에 도입 중 입니다.",
      "교과서에 AI 기능을 추가하기 위해 OpenAI API를 사용했습니다.",
      "백앤드 참여도는 100%에 가까우며, 약간의 프론트엔드 작업 또한 진행했습니다.",
    ],
    tags: ["React", "Next.js", "Storybook", "Ruby", "Rails", "RSpec", "Python", "Jupyter", "Mysql", "Redis", "OpenAI", "NCP"],
    hash: "aidt",
    reason: "실제 학교의 학생만 접속 가능합니다.",
  },
  {
    image: "./project/aucshow.png",
    title: "옥쇼 - Aucshow",
    category: "옥외광고 플랫폼 | 풀스택",
    description: [
      "옥외광고를 전문적으로 취급하는 플랫폼 입니다.",
      "옥외광고 특성 상 존재하는 광고 위치 수십억개를 효율적으로 관리하기 위해 Elasticsearch를 사용했습니다.",
      "또한, 사용자의 서비스 이용 패턴을 분석하여 광고 위치를 추천해주는 기능을 위해 TensorFlow를 사용했습니다.",
      "풀스택으로 참여하였으며 시작부터 완료까지 모든 부분을 관리 / 작업하였습니다.",
    ],
    tags: ["Vue", "Nuxt", "Golang", "Gin", "Gorm", "Python", "MariaDB", "Redis", "Elasticsearch", "AWS", "TensorFlow", "S3", "CloudFront", "Lambda", "zero to one", "개발 리드"],
    hash: "aucshow",
    reason: "현재 운영사가 사실상 도산 상태로 접속이 불가능 합니다.",
  },
  {
    image: "./project/ad-astra.png",
    title: "애드 아스트라 - AD Astra",
    category: "온라인 광고 플랫폼 | 풀스택",
    description: [
      "온라인 광고를 전문적으로 취급하는 플랫폼 입니다.",
      "네이버 / 구글 API 등을 활용하여 각 플랫폼의 광고를 관리할 수 있는 온라인 광고 솔루션을 개발하였습니다.",
      "풀스택으로 참여하였으며 시작부터 완료까지 모든 부분을 관리 / 작업하였습니다.",
    ],
    tags: ["React", "Node.js", "Nest.js", "Jest", "Mongoose", "MongoDB", "Redis", "AWS", "ECS - Fargate", "zero to one", "개발 리드"],
    hash: "ad-astra",
    reason: "현재 운영사가 사실상 도산 상태로 접속이 불가능 합니다.",
  },
  {
    image: "./project/platme.png",
    title: "플랫미 - Platme",
    category: "핫플레이스 광고 플랫폼 | 풀스택",
    description: [
      "특정 핫플레이스에 광고를 노출하는 플랫폼 입니다.",
      "AOS / IOS 모두 지원하고 효율적으로 개발하기 위해 Flutter를 사용했습니다.",
      "풀스택으로 참여하였으며 시작부터 완료까지 모든 부분을 관리 / 작업하였습니다.",
    ],
    tags: ["Dart", "Flutter", "Python", "Django", "MariaDB", "Redis", "AWS", "ECS - Fargate", "zero to one", "개발 리드"],
    hash: "platme",
    reason: "현재 운영사가 사실상 도산 상태로 접속이 불가능 합니다.",
  },
  {
    image: "./project/welcome-company.png",
    title: "웰컴 컴퍼니 - Welcome Company",
    category: "사내 관리 내수 플랫폼 | 풀스택",
    description: [
      "사내 인적자원 / 일정을 관리하는 내수 플랫폼 입니다.",
      "풀스택으로 참여하였으며 시작부터 완료까지 모든 부분을 관리 / 작업하였습니다.",
    ],
    tags: ["React", "Storybook", "Node.js", "Express", "Jest", "Sequelize", "PostgreSQL", "Redis", "Elasticsearch", "물리 서버", "zero to one", "개발 리드"],
    hash: "welcome-company",
    reason: "현재 운영사가 사실상 도산 상태로 접속이 불가능 합니다.",
  },
  {
    image: "./project/myticketflex.png",
    title: "마이티켓플렉스 - MyTicketFlex",
    category: "온라인 티켓 중고 거래 플랫폼 | Part Time CTO",
    description: [
      "온라인 티켓 중고 거래 플랫폼 입니다.",
      "직접적인 개발보다 개발 로드맵 수립 및 프로젝트 관리 비중이 조금 높습니다.",
    ],
    tags: ["React", "Storybook", "Elixir", "Phoenix", "PostgreSQL", "AWS", "S3", "CloudFront", "App Runner"],
    hash: "myticketflex",
    reason: "현재 운영사가 사실상 도산 상태로 접속이 불가능 합니다.",
  },
  {
    image: "./project/hansamin.png",
    title: "한삼인몰",
    category: "건강식품 전문몰 | 풀스택",
    description: [
      "건강식품 전문 쇼핑몰 입니다.",
      "풀스택으로 유지보수를 진행하였으며 참여도가 높지 않습니다.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Mysql", "Redis", "Cafe24"],
    hash: "hansamin",
    link: "https://hansamin.com",
  },
];

export { projects };

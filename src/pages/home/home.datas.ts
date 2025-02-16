import { MusicItem } from "./home.types";

export const apps = [
  // {
  //   name: '인적 사항',
  //   image: './app/info.webp',
  //   page: 'info',
  // },
  // {
  //   name: '학력',
  //   image: './app/education.webp',
  //   page: 'education',
  // },
  // {
  //   name: '경력',
  //   image: './app/work-history.webp',
  //   page: 'work-history',
  // },
  {
    name: '이력서',
    image: './app/resume.webp',
    page: 'resume',
  },
  {
    name: '자기소개',
    image: './app/introduction.webp',
    page: 'introduction',
  },
  {
    name: '스킬',
    image: './app/skill.webp',
    page: 'skill',
  },
  {
    name: '프로젝트',
    image: './app/project.webp',
    page: 'project',
  },
];

export const musics: MusicItem[] = [
  {
    title: '수고했어, 오늘도',
    artist: '옥상달빛',
    thumbnail: './music/cheer-up/thumbnail.jpg',
    url: './music/cheer-up/audio.mp3',
    description: '담당자님, 오늘도 수고하셨어요.',
  },
  {
    title: 'Tiny Riot',
    artist: 'Lil Nas X',
    thumbnail: './music/tiny-riot/thumbnail.jpg',
    url: './music/tiny-riot/audio.mp3',
    description: '웹과 앱을 넘나드는 풀스택 개발자로서의 작지만 강한 혁신을 일으키겠습니다.',
  },
  {
    title: 'The Greatest',
    artist: 'Sia ft. Kendrick Lamar',
    thumbnail: './music/the-greatest/thumbnail.jpg',
    url: './music/the-greatest/audio.mp3',
    description: '저는 무한한 가능성을 가지고 있습니다.',
  },
  {
    title: 'Whatever It Takes',
    artist: 'Imagine Dragons',
    thumbnail: './music/whatever-it-takes/thumbnail.jpg',
    url: './music/whatever-it-takes/audio.mp3',
    description: '저는 어떠한 문제도 해결할 수 있습니다.',
  },
  {
    title: 'Hall of Fame',
    artist: 'Nicki Minaj ft. will.i.am',
    thumbnail: './music/hall-of-fame/thumbnail.jpg',
    url: './music/hall-of-fame/audio.mp3',
    description: '언젠가 명예의 전당에 오를 수 있는 개발자가 될 수 있도록 항상 노력하고 있습니다.',
  },
];

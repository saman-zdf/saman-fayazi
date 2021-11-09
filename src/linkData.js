import {
  FaLinkedin,
  FaTwitter,
  FaGithubSquare,
  FaCss3,
  FaReact,
} from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiRuby } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import html from './images/html5.jpg';
import css from './images/css2.jpg';
import js from './images/js2.jpg';
import react from './images/react-image.png';
import ruby from './images/rails2.jpeg';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },

  {
    id: 2,
    url: '/project',
    text: 'projects',
  },
];

export const socials = [
  {
    id: 1,
    url: 'https://twitter.com/Saman27858105',
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/saman-fayazi-18720b204/',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://github.com/saman-zdf',
    icon: <FaGithubSquare />,
  },
];

export const tools = [
  {
    id: 1,
    icon: <AiOutlineHtml5 />,
    title: 'HTML',
    color: '#e89700',
    image: html,
    desc: "HyperText Markup Language (HTML) is the set of markup symbols or codes inserted into a file intended for display on the Internet. The markup tells web browsers how to display a web page's words and images",
  },
  {
    id: 2,
    icon: <FaCss3 />,
    title: 'CSS',
    image: css,
    color: '#008be8',
    desc: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media',
  },
  {
    id: 3,
    icon: <SiJavascript />,
    title: 'JavaScript',
    image: js,
    color: '#fcf91c',
    desc: 'What is JavaScript ? JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities',
  },
  {
    id: 4,
    icon: <FaReact />,
    title: 'React',
    image: react,
    color: '#00c3d9',
    desc: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It's 'V' in MVC. ... It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.",
  },
  {
    id: 5,
    icon: <DiRuby />,
    title: 'Ruby on Rails',
    image: ruby,
    color: '#ff366b',
    desc: 'Ruby is most used for building web applications. However, it is a general-purpose language similar to Python, so it has many other applications like data analysis, prototyping, and proof of concepts. Probably the most obvious implementation of Ruby is Rails web, the development framework built with Ruby.',
  },
];

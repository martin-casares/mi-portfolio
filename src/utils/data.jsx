import html from '../assets/img/html.jpg';
import css from '../assets/img/css.jpg';
import node from '../assets/img/node.png';
import js from '../assets/img/js.png';
import react from '../assets/img/react.png';
import mongo from '../assets/img/mongo.png';
import bootstrap from '../assets/img/bootstrap.png';
import linux from '../assets/img/linux.png';
import git from '../assets/img/git.png';
import github from '../assets/img/github.png';
import express from '../assets/img/express-js.png';
import tailwinds from '../assets/img/tailwind.jpeg';

import { SiTailwindcss, SiJavascript } from 'react-icons/si';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa6';

export const SKILLS = [
	{ img: html, title: 'HTML' },
	{ img: css, title: 'CSS' },
	{ img: js, title: 'Javascript' },
	{ img: react, title: 'ReactJS' },
	{ img: bootstrap, title: 'Bootstrap5' },
	{ img: tailwinds, title: 'Tailwindscss' },
	{ img: node, title: 'NodeJS' },
	{ img: express, title: 'ExpressJS' },
	{ img: mongo, title: 'MongoDB' },
	{ img: git, title: 'Git' },
	{ img: github, title: 'GitHub' },
	{ img: linux, title: 'GNU/Linux' },
];

/* export const ACADEMIC_FORMATION = [
	{
		title: 'Sem viverra aliquet eget sit?',
		date: 'Junary 2022 - Present',
		description: [
			' Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus, sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque? Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque.',
		],
	},

	{
		title: 'Cras pulvinar mattis nunc, sed blandit!',
		date: 'Junary 2022 - Present',
		description: [
			' Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus, sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque? Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque.',
		],
	},

	{
		title: 'Tellus orci, ac auctor augue mauris?',
		date: 'Junary 2022 - Present',
		description: [
			' Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus, sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque? Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque.',
		],
	},
]; */

export const EXPERIENCE = [
	{
		title: 'Elementum, nibh tellus molestie nunc, non blandit?',
		date: 'Junary 2022 - Present',
		description: [
			' Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus, sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque? Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque.',
		],
	},

	{
		title: 'Eleifend donec pretium vulputate sapien nec!',
		date: 'Junary 2022 - Present',
		description: [
			' Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus, sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque? Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque.',
		],
	},

	{
		title: 'Nullam ac tortor vitae purus faucibus ornare.',
		date: 'Junary 2022 - Present',
		description: [
			' Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus, sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque? Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque.',
		],
	},

	{
		title: 'Sodales ut etiam sit amet nisl purus Eget nunc scelerisque.',
		date: 'Junary 2022 - Present',
		description: [
			' Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus, sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque? Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque.',
		],
	},
];

export const PROJECTS = [
	{
		title: 'projecto 1',
		imageUrl: 'https://musical-cucurucho-e77839.netlify.app/img/work1.jpg',
		body: 'Adipiscing at in tellus integer feugiat scelerisque variaucibus a pellen in tellus integer feugiat scelerisque ',
		tags: [
			{ name: 'React', icon: <FaReact /> },
			{ name: 'Tailwidncss', icon: <SiTailwindcss /> },
		],
	},

	{
		title: 'projecto 2',
		imageUrl: 'https://musical-cucurucho-e77839.netlify.app/img/work2.jpg',
		body: 'Cursus mattis molestie a, iaculis at erat pellentesque adipiscing commodo elit! in tellus integer feugiat scelerisque',
		tags: [
			{ name: 'HTML', icon: <FaHtml5 /> },
			{ name: 'CSS', icon: <FaCss3Alt /> },
			{ name: 'Javascript', icon: <SiJavascript /> },
		],
	},
	/* 	{
		title: 'projecto 3',
		imageUrl: 'https://musical-cucurucho-e77839.netlify.app/img/work3.jpg',
		body: 'Turpis cursus in hac habitasse platea dictumst quisque sagittis, purus.',
		tags: ['React', 'Tailwidncss'],
	},
	{
		title: 'projecto 4',
		imageUrl: 'https://musical-cucurucho-e77839.netlify.app/img/work4.jpg',
		body: 'Sit amet, mattis vulputate enim nulla aliquet porttitor lacus, luctus?',
		tags: ['React', 'Tailwidncss'],
	}, */
];

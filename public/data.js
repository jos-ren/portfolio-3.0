export const socials_data = [
	{
		id: 0,
		title: "Github",
		link: "https://github.com/jos-ren",
	},
	{
		id: 0,
		title: "Linkedin",
		link: "https://www.linkedin.com/in/josh-renema/",
	},
	{
		id: 0,
		title: "Behance",
		link: "https://www.behance.net/joshrenema",
	},
	{
		id: 0,
		title: "Email",
		link: "mailto:josh.renema@protonmail.com",
	},
	{
		id: 0,
		title: "Resume",
		link: "https://drive.google.com/file/d/1MzXEtLKZ2h67UMKlzdBGnKA1JhoJGz-1/view?usp=sharing",
	},
]

export const projects_data = [
	{
		id: 0,
		title: "Smart City Media",
		desc: "Real Estate Web App serving 20,000+ geo-tagged photos",
		icon: "/icons/scm.png",
		header_media: "https://www.youtube.com/watch?v=pUTw9OWsBIw",
		link: "https://smartcitymedia.com/",
		github_link: "",
		type: [{
			source: "Work",
			background: "var(--orange)",
		}],
		technologies: [
			"React",
			"Next.js",
			"Node.js",
			"AWS",
			"S3",
			"RDS",
		],
		role: [
			"Full Stack Developer"
		],
		introduction: [
			{
				summary: "Smart City Media (SCM) is a Real Estate Web App which includes thousands of geotagged aerial photos. Essentially SCM is a stock photo marketplace for property drone shots.",
				functions: [
					<li>Mapbox browse page with 15,000+ geotagged photos</li>,
					<li>Add photos to cart and purchase through 'Shop' API</li>,
					<li>Upload Photos to database using AWS S3</li>,
					<li>Database which uses AWS RDS</li>,
					<li>Serverless CRUD in backend</li>
				],
				members: ""
			},
		],
		purpose: [""],
		spotlight: [
			{
				killer_feature: "The photo gallery feature where you would upload photos to our database, creates a lovely gallery to display photos to clients.",
				technical_hurdles: "Some technical hurdles for this project would be learning how to use the AWS APIs. This was the first time using it and the documentation at times was hard to get through with all the different quaries which were available.",
				solutions: "Once I had got aquanted with how it worked however, I found it alot easier to use and was proud of what I had learned.",
				solution_img: "",
			},
		],
		status: "Smart City is currently being used by thousands of users from Vancouver to LA, Toronto, and even Calgary. They have expanded their photo library to over 15,000 real estate photos.",
		lessons: [
			{
				what: "Throughout the course of this project I really expanded my backend skillset, creating queries, getting to know some of AWS' libraries, and reading through documentation. I also learned alot about collaboration and how to approach tasks with this in mind, dividing up work effectively in a team setting",
				good_choice: "",
				how: "Since I've left this project, I've used my new knowledge of building front end applications in React to build this portfolio! Having real world experience such as this has really expanded my knowledge as well as my collaboration skills greatly."
			},
		],
	},
	{
		id: 1,
		title: "BCIT CRM",
		desc: "CRM with the options to text, email, and send updates to contacts",
		icon: "/icons/bcit.png",
		header_media: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
		link: "https://crm.techiesoftomorrow.com/",
		github_link: "",
		type: [{
			source: "Work",
			background: "var(--orange)",
		}],
		technologies: [
			"React",
			"Next.js",
			"Node.js",
			"AWS",
		],
		role: [
			"Full Stack Developer"
		],
		introduction: [
			{
				summary: " as,mn sakj sdmakn skand kdnas kasnd knasd knas dknas knd sakn dknsa dkns aknd skan bdkjnsa kdn sakmndbnkajsbnk,dmsan,mnad knas mnsa dmnsd mnsd mn sdamna sdmn dsamn sdmn ",
				functions: [
					<li></li>,
				],
				members: [
					<li>Joe Le</li>,
					<li>Cindy Park</li>,
					<li>Ian Bayly</li>,
				]
			},
		],
		purpose: [
			{
				why: "",
				what: "",
				designs: "",
				planning: ""
			},
		],
		spotlight: [
			{
				killer_feature: "",
				technical_hurdles: "",
				solutions: "",
				solution_img: "",
			},
		],
		status: "",

		lessons: [
			{
				what: "",
				good_choice: "",
				how: ""
			},
		],
	},
	{
		id: 2,
		title: "Petsave",
		desc: "Social media app for animal rehabilitation centers",
		icon: "/icons/petsave.png",
		header_media: "/screenshots/petsave_cover.jpg",
		link: "",
		github_link: "https://github.com/jos-ren/petsave-frontend",
		type: [{
			source: "Student",
			background: "var(--blue)",
		}],
		technologies: [
			"React",
			"Axios",
			"AWS S3"
		],
		role: [
			"Full Stack Developer",
			"UI Designer",
		],
		introduction: [
			{
				summary: "Petsave is a social media web app for Animal Rehabilitation Centers like the SPCA, etc. Users can post photos and connect with fellow animal lovers though this app. This was a student group project I created while studying at BCIT",
				functions: [
					<li>Login / Create an account</li>,
					<li>Post photos</li>,
					<li>Like and comment on posts</li>,
					<li>Follow other users</li>,
				],
				members: [
					<li>Cindy Park</li>,
					<li>Brittany Mcdonald</li>,
					<li>Yunyun Peng</li>,
				]
			},
		],
		purpose: [
			{
				why: "We as a group wanted to make a fun social media app for a charitable cause, all while improving our development and design skills.",
				what: "A MVP where users could create accounts and post photos",
				designs: "/screenshots/petsave_designs.png",
				planning: ""
			},
		],
		spotlight: [
			{
				killer_feature: "The best feature of the app would be the ability to post an image. It combined our knowledge of using a CRUD system with also using AWS S3 Buckets to store the images in the cloud.",
				technical_hurdles: "The biggest hurdle we faced was figuring out the backend of our project. This was one of the first times which we had created a database which was capable of CRUD.",
				solutions: "Solving this was a matter of studying how to create a database with CRUD functions/queries. At the same time that we were working on this project, in our class we were being taught about the backend. We first created a database diagram (shown below). From here we created an SQL query to create our database. Next was learning how to use axios to create backend functions for CRUD. Then we connected the backend functions into our frontend interface.",
				solution_img: "/screenshots/petsave_solution.png",
			},
		],
		status: "",
		lessons: [
			{
				what: "Throughout this project I learned a great deal. From improving my frontend React knowledge, to creating a functional backend with images. One of the more important lessons I found was not actually a technical one though, This was the first time I had collaborated with a group to create a Web App start to finish. My communication and collaboration skills improved greatly.",
				good_choice: "",
				how: ""
			},
		],
	},
	{
		id: 3,
		title: "Pantro",
		desc: "Pantry app which tracks food expiration dates",
		icon: "/icons/pantro.png",
		header_media: "/screenshots/pantro_cover.jpg",
		link: "",
		github_link: "https://github.com/jos-ren/bcitd3_pantro",
		type: [{
			source: "Student",
			background: "var(--blue)",
		}],
		technologies: [
			"React",
			"Next.js",
			"Node.js",
			"AWS",
		],
		role: [
			"Full Stack Developer",
			"UI Designer",
		],
		// Introduction
		// • High-level summary of what the project is
		// • List of core functionalities / interesting features
		introduction: [
			{
				summary: "Pantro is a web app where users can track the expiration dates of the foods in their fridge. This was a student group project I created while studying at BCIT.",
				functions: [
					<li>Track food expiration dates</li>,
					<li>Add / remove food from your "pantry"</li>,
					<li>Check the nutritional facts of your food</li>,
				],
				members: [
					<li>Jordan Naranja</li>,
					<li>Brittany Mcdonald</li>,
					<li>Hanbin Park</li>,
				]
			},
		],
		// Purpose and Goal
		// • Why did you build this project? Why is it important to you?
		// • What was the expected outcome of the project?
		// • What were the initial designs?
		// • Any other preliminary planning that you did which helps build a narrative 
		purpose: [
			{
				why: "",
				what: "",
				designs: "",
				planning: ""
			},
		],
		//  Spotlight
		// • What is the “killer feature” of your project? What feature does it have that took the
		// most work, or was the most technically impressive? Some possible examples:
		// ◦ User authentication
		// ◦ A feed of items fetched from a database
		// ◦ A particularly tricky UI element (eg. autocomplete, calendar, drag-and-drop)
		// ◦ Anything you’re proud of!
		// • What were the technical hurdles that got in your way? Any major problems you hit
		// during development?
		// • How did you solve those problems? What was the solution? Go deep here, and write
		// with a developer in mind. 
		spotlight: [
			{
				killer_feature: "",
				technical_hurdles: "",
				solutions: "",
				solution_img: "",
			},
		],
		// Current status
		// • This section is optional. If the project is actively being used by real people, talk a little
		// bit about the current status, who uses it, why they use it, what they say to you about
		// it, stuff like that.
		// • If the project was contrived specifically for the portfolio, omit this section. 
		status: "",
		// Lessons Learned
		// • What did you learn doing this project? Feel free to list multiple things. Also feel free to
		// cover non-technical lessons. It’s great to talk about how you learned to use an
		// advanced feature of a framework or library, but it’s just as valuable to talk about
		// project-management experience, or things you learned about shipping projects.
		// • If you used a framework or other libraries/tools, was it a good choice? How did it
		// help? In which ways was it insufficient?
		// • How has this affected the work you’ve done since then? Real examples of how this
		// project built your knowledge for future projects is fantastic. 
		lessons: [
			{
				what: "",
				good_choice: "",
				how: ""
			},
		],
	},
	{
		id: 4,
		title: "Twitter Translate Bot",
		desc: "Python bot which can translate any tweet into french",
		icon: "/icons/translate.png",
		header_media: "https://www.youtube.com/watch?v=SxiX59jA-1w",
		link: "",
		github_link: "https://github.com/jos-ren/twitter_translate",
		type: [{
			source: "Personal",
			background: "var(--green)",
		}],
		technologies: [
			"Python",
			"Google Translate API",
			"Twitter API",
		],
		role: [
			"Python Developer",
		],
		introduction: [
			{
				summary: " sdm sdajmn ja jbwliuh ljkuhladsk dlu dkldsjlfsdjuhfd ysui asfli uhf iuhfsdi u fiuy iufh iuhf hiusa iuayf iushadf iusyhf iufdsh ",
				functions: [
					<li></li>,
				],
				members: ""
			},
		],
		purpose: [
			{
				why: "",
				what: "",
				designs: "",
				planning: ""
			},
		],
		spotlight: [
			{
				killer_feature: "",
				technical_hurdles: "",
				solutions: "",
				solution_img: "",
			},
		],
		status: "",
		lessons: [
			{
				what: "",
				good_choice: "",
				how: ""
			},
		],
	},
	// {
	// 	title: "Poman",
	// 	desc: "Foodie social network app",
	// 	link: "https://www.youtube.com/watch?v=Rze68rEMxhk",
	// },
	// {
	// 	title: "Get'em",
	// 	desc: "Delivery app for everyday items",
	// 	link: "https://www.youtube.com/watch?v=HvQbuNzpwho",
	// },
]

export const school_data = [
	{
		id: 0,
		title: "BCIT",
		desc: <>Digital Design & Development | <i>Diploma</i></>,
		link: "https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/",
		icon: "/icons/bcit.png",
		info: "2 year program focused on Web development in React as well as Design & UI / UX",
	},
	{
		id: 1,
		title: "Harvard",
		desc: <>CS50P | <i> Certificate </i></>,
		link: "https://www.edx.org/course/cs50s-introduction-to-programming-with-python",
		icon: "/icons/harvard.png",
		info: "10 week program that teaches the fundamentals of Python",
	},
]

export const icons_data = [
	{
		id: 2,
		icon: "/icons/tech/react.png",
		name: "React",
	},
	{
		id: 17,
		icon: "/icons/tech/python.png",
		name: "Python",
	},
	{
		id: 7,
		icon: "/icons/tech/nextjs.png",
		name: "NextJS",
	},
	{
		id: 8,
		icon: "/icons/tech/nodejs.png",
		name: "NodeJS",
	},
	{
		id: 5,
		icon: "/icons/tech/mysql.png",
		name: "MySql",
	},
	{
		id: 6,
		icon: "/icons/tech/postgresql.png",
		name: "PostgreSQL",
	},
	{
		id: 3,
		icon: "/icons/tech/javascript.png",
		name: "Javascript",
	},
	{
		id: 9,
		icon: "/icons/tech/html.png",
		name: "HTML",
	},
	{
		id: 10,
		icon: "/icons/tech/css.png",
		name: "CSS",
	},
	{
		id: 4,
		icon: "/icons/tech/php.png",
		name: "PHP",
	},
	{
		id: 19,
		icon: "/icons/tech/wordpress.png",
		name: "Wordpress",
	},
	{
		id: 1,
		icon: "/icons/tech/aws.png",
		name: "AWS",
	},
	{
		id: 11,
		icon: "/icons/tech/adobe.png",
		name: "Adobe Creative Suite",
	},
	{
		id: 13,
		icon: "/icons/tech/figma.png",
		name: "Figma",
	},
	{
		id: 13,
		icon: "/icons/tech/styled.png",
		name: "Styled Components",
	},
	{
		id: 13,
		icon: "/icons/tech/github.png",
		name: "Github",
	},
];
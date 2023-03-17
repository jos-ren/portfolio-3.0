export const socials_data = [
	{
		id: 0,
		title: "Github",
		link: "https://github.com/jos-ren",
	},
	{
		id: 1,
		title: "Linkedin",
		link: "https://www.linkedin.com/in/josh-renema/",
	},
	{
		id: 2,
		title: "Behance",
		link: "https://www.behance.net/joshrenema",
	},
	{
		id: 3,
		title: "Email",
		link: "mailto:josh.renema@protonmail.com",
	},
	{
		id: 4,
		title: "Resume",
		link: "https://drive.google.com/file/d/1MzXEtLKZ2h67UMKlzdBGnKA1JhoJGz-1/view?usp=sharing",
	},
]

export const projects_data = [
	{
		id: 0,
		title: "Smart City Media",
		desc: "Real Estate Web App serving 15,000+ geo-tagged photos",
		icon: "/icons/scm.png",
		header_media: "https://youtu.be/WIzC-B0yrEM",
		link: "https://smartcitymedia.com/",
		twitter_link: "",
		github_link: "",
		type: [{
			source: "Work",
			background: "var(--orange)",
		}],
		technologies: [
			"React",
			"Next.js",
			"Node.js",
			"AWS S3",
			"AWS RDS",
			"Mapbox",
			"Shop",
		],
		role: [
			"Full Stack Developer"
		],
		introduction: [
			{
				summary: "Smart City Media (SCM) is a Real Estate Web App which includes thousands of geotagged aerial photos. Essentially SCM is a stock photo marketplace for property drone shots.",
				images: [""],
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
				feature_img:"",
				technical_hurdles: "Some technical hurdles for this project would be learning how to use the AWS APIs. This was one of the first times using it and the documentation at times was hard to get through with all of the different queries which were available.",
				solutions: "Once I had got acquainted with how it worked however, I found it alot easier to use and was proud of what I had learned.",
				solution_img: "",
			},
		],
		status: [
			{
				text: "Smart City is currently being used by thousands of users from Vancouver to LA, Toronto, and even Calgary. They have expanded their photo library to over 15,000 geotagged photos on their stock site.",
				img: "/screenshots/scm_map.png",
				img_caption: "A map of SCM's current geotagged photos"
			}
		],
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
		header_media: "https://www.youtube.com/watch?v=ctXTzx0o348",
		link: "https://crm.techiesoftomorrow.com/",
		twitter_link: "",
		github_link: "",
		type: [{
			source: "Work",
			background: "var(--orange)",
		}],
		technologies: [
			"React",
			"Next.js",
			"Node.js",
			"Twilio",
			"AWS SES",
			"AWS RDS",
		],
		role: [
			"Full Stack Developer"
		],
		// Introduction
		// • High-level summary of what the project is
		// • List of core functionalities / interesting features
		introduction: [
			{
				summary: "This project was created as an in-house Customer Relationship Manager for multiple departments inside of BCIT. Its purpose is to manage large groups of contacts and provide a platform to communicate with them effectively.",
				images: [
					{
						img: "/screenshots/crm_dashboard.png",
						caption: "Dashboard Page",
					},
					// {
					// 	img: "/screenshots/crm_contacts.png",
					// 	caption: "Contacts Page",
					// },
				],
				functions: [
					<li>Import and manage contacts</li>,
					<li>Create a group of contacts</li>,
					<li>Send out Emails to your groups</li>,
					<li>Send out Text messages to your groups</li>,
					<li>Task manager</li>,
					<li>Dashboard to see an overview of activity</li>,
					<li>Create a custom form to add new contacts</li>,
				],
				members: ""
			},
		],
		// Purpose and Goal
		// • Why did you build this project? Why is it important to you?
		// • What was the expected outcome of the project?
		// • What were the initial designs?
		// • Any other preliminary planning that you did which helps build a narrative 
		purpose: [""],
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
				killer_feature: "Using Twilio's API to send out text messages to large groups of phone numbers was awesome. Once I had constructed the query and sent myself a message using it, It felt great because it was a tangible effect of the code which I created, sending a text to my phone.",
				feature_img:"/screenshots/crm_twilio.png",
				feature_img_caption:"Simple diagram of how Twilio works",
				technical_hurdles: "This was my really delving into the backend and creating more complex queries. One of my tasks was creating the queries for the AWS SES (Simple Email Service). It would select an email address, subject and message; then send it as an email to them. After spending a couple days trying to get it to work I had hit a wall.",
				solutions: "Asking for guidance from my teammates & mentor really helped me clarify this issue. Sometimes when you are staring at a problem so long, which you can't make heads or tails of, asking for another perspective can really bring in fresh ideas and break through.",
				solution_img: "",
			},
		],
		// Current status
		// • This section is optional. If the project is actively being used by real people, talk a little
		// bit about the current status, who uses it, why they use it, what they say to you about
		// it, stuff like that.
		// • If the project was contrived specifically for the portfolio, omit this section. 
		status: [""],
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
				what: "Throughout this project, I learned when to ask for guidance, and to be a sponge for information ready to learn as much as you can. I learned how to code in the backend and create queries, how to use AWS' API to send emails, how to send text messages using Twilio's API, and so much more.",
				good_choice: "",
				how: ""
				// how: "Since building this web app, I've become a lot more comfortable with AWS and their services."
			},
		],
	},
	{
		id: 2,
		title: "Twitter Translate",
		desc: "Python script which can translate any Tweet into French",
		icon: "/icons/translate.png",
		header_media: "https://www.youtube.com/watch?v=SxiX59jA-1w",
		link: "",
		github_link: "https://github.com/jos-ren/twitter_translate",
		twitter_link: "https://twitter.com/CS50P",
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
				summary: "Twitter Translate is a python script which takes a tweet from Twitter, translates the tweet using Google Translate's API, then makes a new tweet using the translated text. This was my final project of the CS50P course from Harvard.",
				images: [
					{
						img: "/screenshots/translate_summary.png",
						caption: "The Python script's process",
					}
				],
				functions: [
					<li>READ Selected Twitter Tweet</li>,
					<li>Translate tweet into desired language (French)</li>,
					<li>POST translated text onto Twitter</li>
				],
				members: ""
			},
		],
		purpose: [
			{
				why: "For my final project I wanted to test my knowledge of using APIs and wanted to use 2 different ones at the same time. I noticed that on twitter to translate a tweet you has to first click on the individual tweet and then a 'translate' button would then appear. I wanted to make this easier for users and have them just scroll through an account and see their desired tweet translated.",
				what: "",
				design_desc: "",
				design: "",
				planning: "I created a new Twitter account with the name 'CanadaFR' (@CS50P is the handle) which would take the tweets from @Canada's Twitter and translate them from English to French.",
				planning_img: "/screenshots/translate_example.png",
				planning_img_caption: "An example of reposting the selected tweet into French."
			},
		],
		spotlight: [
			{
				killer_feature: "Translating the text through Google Translate's API was my favorite part of this project. It was simple to use, and just required you to input the desired text, and the language you wanted to translate it to.",
				feature_img:"",
				technical_hurdles: "Since a tweet cannot be longer than 280 chars, sometimes when I translated from English to French, the translated text would be longer than 280. This would cut off some of the text and users would be missing some information.",
				solutions: "To solve this issue, I decided to take the text that was cut off, and reply to my original tweet using it. This way all of the needed information would be translated and if it was over 280 chars, the remaining text would just be underneath the original tweet in a reply.",
				solution_img: "",
			},
		],
		status: [""],
		lessons: [
			{
				what: "Through this project, I tested out my Python skills, as well as using 2 different APIs at once in a script. It was exciting to see what I could create and challenge myself to make a cool script which had real world usecases.",
				good_choice: "",
				how: ""
			},
		],
	},
	{
		id: 3,
		title: "Petsave",
		desc: "Social media app for animal rehabilitation centers",
		icon: "/icons/petsave.png",
		header_media: "/screenshots/petsave_cover.jpg",
		link: "",
		github_link: "https://github.com/jos-ren/petsave-frontend",
		twitter_link: "",
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
				images: [""],
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
				design_desc: "Through 2 weeks of user testing and redesigning we came up with this final UI using Figma. It includes Login, Home, Create Post pages and much more.",
				design: [
					{
						img: "/screenshots/petsave_designs.png",
						caption: "Final UI",
					},
				],
				planning: ""
			},
		],
		spotlight: [
			{
				killer_feature: "The best feature of the app would be the ability to post an image. It combined our knowledge of using a CRUD system with also using AWS S3 Buckets to store the images in the cloud.",
				feature_img:"",
				technical_hurdles: "The biggest hurdle we faced was figuring out the backend of our project. This was one of the first times which we had created a database which was capable of CRUD.",
				solutions: "Solving this was a matter of studying how to create a database with CRUD functions/queries. At the same time that we were working on this project, in our class we were being taught about the backend. We first created a database diagram (shown below). From here we created an SQL query to create our database. Next was learning how to use axios to create backend functions for CRUD. Then we connected the backend functions into our frontend interface.",
				solution_img: "/screenshots/petsave_db.png",
				solution_img_caption: "Petsave's Database Diagram",
			},
		],
		status: [""],
		lessons: [
			{
				what: "Throughout this project I learned a great deal. From improving my frontend React knowledge, to creating a functional backend with images. One of the more important lessons I found was not actually a technical one though, This was the first time I had collaborated with a group to create a Web App start to finish. My communication and collaboration skills improved greatly.",
				good_choice: "",
				how: ""
			},
		],
	},
	{
		id: 4,
		title: "Pantro",
		desc: "Pantry app which tracks food expiration dates",
		icon: "/icons/pantro.png",
		header_media: "/screenshots/pantro_cover.jpg",
		link: "",
		github_link: "https://github.com/jos-ren/bcitd3_pantro",
		twitter_link: "",
		type: [{
			source: "Student",
			background: "var(--blue)",
		}],
		technologies: [
			"React",
			"Next.js",
			"Node.js",
			"Heroku",
			"Nutrition Database API"
		],
		role: [
			"Full Stack Developer",
			"UI Designer",
		],
		introduction: [
			{
				summary: "Pantro is a web app where users can track the expiration dates of the foods in their kitchen. This was a student group project I created while studying at BCIT.",
				images: [""],
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
		purpose: [
			{
				why: "We decided to build this project because we were looking for something useful which we could see ourselves actually using. We all enjoyed cooking so we thought why not make an app which would be useful in this area",
				what: "",
				design_desc: "We wanted to make a simple app which was also very functional and easy to use for the end user. We first made a very rough draft of the expected pages. After much testing we settled on the final UI below.",
				design: [
					{
						img: "/screenshots/pantro_designs_1.png",
						caption: "Rough draft of the planned pages",
					},
					{
						img: "/screenshots/pantro_designs_2.png",
						caption: "Final UI after user testing, made in Figma",
					},
				],
				planning: ""
			},
		],
		spotlight: [
			{
				killer_feature: "Using the nutritional database API was the best feature of this app. It pulls nutritional facts data from it's database with calorie info, as well as all the other macro nutrients",
				feature_img:"",
				technical_hurdles: "I was pretty new to using APIs so sorting through the data and trying to display the correct information in the frontend was a bit of a struggle for me at first.",
				solutions: "Through reading through the Nutrition API's documentation carefully and testing out queries, I was soon able to get the correct data where I wanted it. It was a struggle but with some patience I soon figured it out",
				solution_img: "",
				solution_img_caption: "",
			},
		],
		status: [""],
		lessons: [
			{
				what: "Through this project my knowledge of using axios to fetch data from 3rd party APIs was definitely strengthened. I also had a great time with my teamates coming up with the UI design and performing user testing on it.",
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
		desc: <>CS50P | <i>Certificate </i></>,
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
		icon: "/icons/tech/github.png",
		name: "Github",
	},
	{
		id: 1,
		icon: "/icons/tech/aws.png",
		name: "AWS",
	},
	{
		id: 13,
		icon: "/icons/tech/twilio.png",
		name: "Twilio",
	},
];
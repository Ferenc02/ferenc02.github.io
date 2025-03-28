<script lang="ts">
	import { base } from '$app/paths';
	let cardStyling = 'mb-8 rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700';

	import { fade } from 'svelte/transition';

	import SEO from '../components/_seo.svelte';
</script>

<SEO
	title="About Me"
	description="Learn more about Ferenc, a blockchain developer with experience in Solidity, TypeScript, JavaScript, and React."
/>

<section class="flex h-full w-full px-6 py-12 align-middle" in:fade={{ duration: 300 }}>
	<div class="container mx-auto max-w-4xl">
		<!-- Header -->
		<header class="mb-12 text-center">
			<h1 class="py-4 text-4xl font-bold">About Me</h1>

			<section class="">
				<p class="py-2 text-left text-lg text-gray-600 dark:text-gray-400">
					<img
						src="https://avatars.githubusercontent.com/u/182554237?v=4"
						alt="Github avatar of Ferenc"
						class="float-left mr-4 h-32 w-32 rounded-full shadow-md"
					/>
					Hi, my name is Ferenc, and I am a passionate blockchain developer currently studying at Medieinstitutet.
					With a strong foundation in IT support, system management, and programming, I am dedicated
					to building innovative and secure solutions using blockchain technology and building responsive
					web applications. Over the course of my studies, I have gained hands-on experience with tools
					and technologies such as
					<b>Solidity, TypeScript, JavaScript, and React.</b> My previous roles in IT have also equipped
					me with valuable problem-solving skills, the ability to collaborate effectively within a team,
					and a knack for quickly adapting to new systems.
				</p>
				<p class="py-2 text-left text-lg text-gray-600 dark:text-gray-400">
					I am especially interested in the development of dynamic and responsive web applications
					and exploring innovative technologies to enhance user experience. I am eager to contribute
					to projects that push the boundaries of web development and create seamless, efficient,
					and accessible solutions. At the same time, I view every new opportunity as a chance to
					expand my technical knowledge and collaborate with others in a forward-thinking,
					innovative environment.
				</p>
				<p class="py-2 text-left text-lg text-gray-600 dark:text-gray-400">
					I am currently seeking new opportunities to apply my skills and knowledge in blockchain
					development. If you are interested in working together or have any questions, feel free to
					reach out to me.
				</p>
				<p class="py-2 text-lg text-gray-600 dark:text-gray-400">
					<a href="{base}/contact" class="text-blue-600 hover:underline dark:text-blue-400"
						>Contact me</a
					>
				</p>
			</section>
		</header>

		<!-- Skills -->
		<section class={cardStyling}>
			<div class="py-2">
				<h3>👨‍💻 Things I code with:</h3>
				<div class="-m-1 mt-2 flex flex-wrap gap-1">
					<img
						alt="React"
						src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white"
					/>
					<img
						alt="svelte"
						src="https://img.shields.io/badge/-Svelte-ff3e00?style=flat-square&logo=svelte&logoColor=white"
					/>
					<img
						alt="JavaScript"
						src="https://img.shields.io/badge/-JavaScript-f7df1e?style=flat-square&logo=javascript&logoColor=black"
					/>
					<img
						alt="TypeScript"
						src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"
					/>
					<img
						alt="Tailwind CSS"
						src="https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white"
					/>
					<img
						alt="Python"
						src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white"
					/>
					<img
						alt="Rust"
						src="https://img.shields.io/badge/-Rust-000000?style=flat-square&logo=rust&logoColor=white"
					/>
					<img
						alt="Java"
						src="https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=white"
					/>
					<img
						alt="Sass"
						src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white"
					/>
					<img
						alt="git"
						src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white"
					/>
					<img
						alt="npm"
						src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white"
					/>
					<img
						alt="html5"
						src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"
					/>
					<img
						alt="css3"
						src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"
					/>
					<img
						alt="Nodejs"
						src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white"
					/>
				</div>
			</div>

			<div class="py-2">
				<h3>💻 Some of the technologies I have worked with:</h3>

				<div class="-m-1 mt-2 flex flex-wrap gap-1">
					- Frontend:
					<img
						alt="React"
						src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white"
					/>
					<img
						alt="Svelte"
						src="https://img.shields.io/badge/-Svelte-ff3e00?style=flat-square&logo=svelte&logoColor=white"
					/>
					<img
						alt="Tailwind CSS"
						src="https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white"
					/>
					<img
						alt="Bootstrap"
						src="https://img.shields.io/badge/-Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white"
					/>
					<img
						alt="HTML"
						src="https://img.shields.io/badge/-HTML-E34F26?style=flat-square&logo=html5&logoColor=white"
					/>
					<img
						alt="CSS"
						src="https://img.shields.io/badge/-CSS-1572B6?style=flat-square&logo=css3&logoColor=white"
					/>
					<img
						alt="JavaScript"
						src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"
					/>
					<img
						alt="TypeScript"
						src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"
					/>
				</div>

				<div class="-m-1 mt-2 flex flex-wrap gap-1">
					- Backend:
					<img
						alt="Node.js"
						src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white"
					/>
					<img
						alt="Express"
						src="https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white"
					/>
					<img
						alt="Firebase"
						src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white"
					/>
					<img
						alt="MySQL"
						src="https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white"
					/>
					<img
						alt="MongoDB"
						src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"
					/>
				</div>
			</div>
			<div class="py-2">
				<h3>🛠️ My Learning Path & Future Goals</h3>
				<ul class="ml-2 mt-2 list-item list-inside space-y-1">
					<li>
						- 📖 <b>Deepening Knowledge in Blockchain Development:</b> Solidity, Rust, and smart contract
						design.
					</li>
					<li>
						- ☁️ <b>Advanced Cloud Infrastructure Skills:</b> Exploring Azure, AWS, and hybrid cloud
						environments.
					</li>
					<li>
						- 🔗 <b>Building Decentralized Applications (dApps):</b> Focusing on Web3.js and Ethers.js.
					</li>
					<li>
						- 💡 <b>Future Interests:</b> AI integration with blockchain, advanced DevOps practices,
						and scaling microservices.
					</li>
				</ul>
			</div>
		</section>

		<!-- Skills -->
		<section class={cardStyling}>
			<h2 class="mb-4 text-2xl font-semibold">Skills</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div>
					<h3 class="text-lg font-medium">Technical Skills:</h3>
					<ul class="list-inside list-disc space-y-1">
						<li>Programming: Solidity, TypeScript, JavaScript, React, Rust</li>
						<li>Infrastructure: Azure, Active Directory, Windows Server, Linux</li>
						<li>Web Development: HTML, CSS, Svelte, Google Firebase</li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-medium">Other Skills:</h3>
					<ul class="list-inside list-disc space-y-1">
						<li>Problem-solving and debugging</li>
						<li>Effective communication and collaboration</li>
						<li>Customer service and support</li>
					</ul>
				</div>
			</div>
			<div class="mt-4">
				<h3 class="text-lg font-medium">Languages:</h3>
				<p>Swedish, English, Hungarian</p>
			</div>
		</section>

		<!-- Work Experience -->
		<section class={cardStyling}>
			<h2 class="mb-4 text-2xl font-semibold">Work Experience</h2>
			<div class="space-y-4">
				<div>
					<h3 class="font-bold">IT Technician</h3>
					<p class="text-sm text-gray-500">Jan 2024 – Aug 2024</p>
					<ul class="list-inside list-disc">
						<li>Solved technical issues related to servers, networks, and printers.</li>
						<li>
							Performed IT administration and implemented organizational changes in collaboration
							with IT managers.
						</li>
						<li>Improved support processes by automating workflows where possible.</li>
						<li>Documented and analyzed recurring IT issues to develop long-term solutions.</li>
					</ul>
				</div>
				<div>
					<h3 class="font-bold">IT Consultant as System Technician</h3>
					<p class="text-sm text-gray-500">Feb 2023 – Dec 2023</p>
					<ul class="list-inside list-disc">
						<li>
							Provided support for user issues related to the city's IT systems via ServiceNow.
						</li>
						<li>
							Coordinated effectively with different departments for quick problem resolution.
						</li>
						<li>Utilized system integrations to optimize user support and network management.</li>
						<li>
							Documented technical processes and contributed to the improvement of internal
							workflows.
						</li>
					</ul>
				</div>
				<div>
					<h3 class="font-bold">Customer Support Representative</h3>
					<p class="text-sm text-gray-500">Aug 2022 – Feb 2023</p>
					<ul class="list-inside list-disc">
						<li>Delivered customer support for technical inquiries and payment-related issues.</li>
						<li>
							Developed an understanding of system integration and troubleshooting methodologies.
						</li>
						<li>
							Contributed to the improvement of internal processes and customer service standards.
						</li>
					</ul>
				</div>
			</div>
		</section>

		<!-- Education -->
		<section class={cardStyling}>
			<h2 class="mb-4 text-2xl font-semibold">Education</h2>
			<div class="space-y-4">
				<div>
					<h3 class="font-bold">Blockchain Developer</h3>
					<p class="text-sm text-gray-500">2024 – 2026 (ongoing)</p>
					<ul class="list-inside list-disc">
						<li>Learning to develop decentralized applications and smart contracts.</li>
						<li>Tools: Solidity, TypeScript, JavaScript, React.</li>
					</ul>
				</div>
				<div>
					<h3 class="font-bold">Information and Media Technology</h3>
					<p class="text-sm text-gray-500">Focus on IT infrastructure and programming</p>
				</div>
			</div>
		</section>

		<!-- Certifications -->
		<section class={cardStyling}>
			<h2 class="mb-4 text-2xl font-semibold">Certifications</h2>
			<ul class="list-inside list-disc">
				<li>AZ-900: Microsoft Azure Fundamentals</li>
				<li>MS-900: Microsoft 365 Fundamentals</li>
			</ul>
		</section>
	</div>
</section>

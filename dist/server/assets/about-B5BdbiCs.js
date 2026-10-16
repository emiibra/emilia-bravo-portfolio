import { n as Page } from "./router-1YZY-7Lv.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/about.tsx?tsr-split=component
var stages = [
	[
		"01",
		"Oct 2022",
		"First civic automation build",
		"A Python, Puppeteer, and Cron bot monitored appointment availability in Peru and delivered real-time WhatsApp alerts."
	],
	[
		"02",
		"2023–24",
		"CS foundations at GSU",
		"Built a rigorous computer science foundation while earning Dean's and President's List honors and the Microsoft & Amazon Next Grant."
	],
	[
		"03",
		"2024–26",
		"From legal operations to production software",
		"Turned workflow friction into an event logistics platform used across 70+ community events."
	],
	[
		"04",
		"2025–Present",
		"Software engineer and data builder",
		"Building React, Next.js, Python, Supabase, and public-health data systems while finishing a Data Science concentration."
	],
	[
		"05",
		"May 2027",
		"The next finish line",
		"Graduating from Georgia State and bringing a human-centered approach to health, climate, civic, and LATAM technology."
	]
];
function About() {
	return /* @__PURE__ */ jsx(Page, {
		number: "01",
		title: "Life",
		intro: "A multi-stage race bridging global roots, rigorous engineering, and in-town Atlanta.",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-12 md:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "text-lg leading-relaxed text-[#716c65]",
				children: "I am a senior Computer Science major concentrating in Data Science at Georgia State University. I love building technology where code meets tangible human impact, especially in oncology and clinical health data, public health, climate tech, and cross-border civic infrastructure."
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-6 text-lg leading-relaxed text-[#716c65]",
				children: "Outside of tech, I ride around Atlanta, volunteer with Angels Among Us Pet Rescue, explore the world, and share the city with my cats, Soju and Pisco."
			})] }), /* @__PURE__ */ jsx("ol", {
				className: "border-l-2 border-[#d85436] pl-6",
				children: stages.map(([n, date, title, description]) => /* @__PURE__ */ jsxs("li", {
					className: "mb-10",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "mono text-[#d85436]",
							children: [
								"STAGE ",
								n,
								" · ",
								date
							]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "display mt-2 text-3xl",
							children: title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 leading-relaxed text-[#716c65]",
							children: description
						})
					]
				}, n))
			})]
		})
	});
}
//#endregion
export { About as component };

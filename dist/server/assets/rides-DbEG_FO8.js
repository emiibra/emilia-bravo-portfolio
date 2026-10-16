import { n as Page } from "./router-1YZY-7Lv.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Bike, ExternalLink } from "lucide-react";
//#region src/routes/rides.tsx?tsr-split=component
var stats = [
	["3–4", "commute days / week"],
	["39.0 mi", "personal record"],
	["4–5", "rides / week"],
	["1,500+", "miles / year"]
];
var log = [
	["Feb 26, 2025", "First Atlanta Social Bike Rides group ride to an art gallery."],
	["Apr 1, 2025", "Night Ride: 39-mile personal record."],
	["May 10, 2025", "First ride in Rome, Georgia with a new bike."],
	["Sep 19, 2026", "Bike MS: Georgia Peach Ride with Team Noodle."]
];
function Rides() {
	return /* @__PURE__ */ jsxs(Page, {
		number: "04",
		title: "Rides",
		intro: "Life on two wheels around in-town Atlanta, soon powered by my own Strava data pipeline.",
		children: [/* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-2 gap-4 md:grid-cols-4",
			children: stats.map(([value, label]) => /* @__PURE__ */ jsxs("div", {
				className: "card rounded-2xl p-6",
				children: [
					/* @__PURE__ */ jsx(Bike, {
						className: "mb-8 text-[#d85436]",
						size: 20
					}),
					/* @__PURE__ */ jsx("p", {
						className: "display text-4xl",
						children: value
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mono mt-2 text-[#716c65]",
						children: label
					})
				]
			}, label))
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-16 grid gap-12 md:grid-cols-[1.2fr_1fr]",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
				className: "display text-4xl",
				children: "Ride log & milestones"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-8 space-y-0 border-l-2 border-[#347b64] pl-6",
				children: log.map(([date, text]) => /* @__PURE__ */ jsxs("article", {
					className: "relative border-b border-[#d1c9bb] py-5 first:pt-0",
					children: [/* @__PURE__ */ jsx("span", {
						className: "mono text-[#d85436]",
						children: date
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-lg text-[#716c65]",
						children: text
					})]
				}, date))
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "rounded-2xl bg-[#347b64] p-8 text-[#fff8ed]",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "mono text-[#e8c77b]",
						children: "The route ahead"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "display mt-4 text-5xl",
						children: "Live telemetry is next."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 leading-relaxed text-[#e4eee8]",
						children: "I am building an ETL pipeline from Strava, GPX streams, and commute logs to turn every Atlanta ride into useful data."
					}),
					/* @__PURE__ */ jsxs("a", {
						className: "mono mt-8 inline-flex items-center gap-2 text-[#e8c77b]",
						href: "https://www.strava.com",
						target: "_blank",
						rel: "noreferrer",
						children: ["View Strava ", /* @__PURE__ */ jsx(ExternalLink, { size: 14 })]
					})
				]
			})]
		})]
	});
}
//#endregion
export { Rides as component };

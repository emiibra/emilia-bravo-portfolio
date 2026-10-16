import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Database, Github, Linkedin, Mail, Sparkles } from "lucide-react";
//#region src/routes/index.tsx?tsr-split=component
var focus = {
	software: {
		label: "Software",
		eyebrow: "STAGE MODE: SPRINT · FULL-STACK",
		title: "Shipping production platforms people actually use.",
		stats: [
			["70+", "events powered"],
			["~2,100", "registrations"],
			["~80%", "less manual ops"],
			["1st", "HackHers 2025"]
		],
		items: [
			"Fry Goehring Event Logistics",
			"Teresita HR Platform",
			"Voice-Only AI Messaging",
			"VR Golf Training Tool"
		],
		href: "/cs"
	},
	data: {
		label: "Data",
		eyebrow: "STAGE MODE: CLIMB · DATA ENGINEERING",
		title: "Spatially validated pipelines for public health.",
		stats: [
			["229k", "CDC PLACES rows"],
			["3,143", "U.S. counties"],
			["2-node", "Spark cluster"],
			["20%", "faster due diligence"]
		],
		items: [
			"Counties That Beat the Odds",
			"Multi-Node Apache Spark",
			"Floreo Document Analytics",
			"Strava Ride Telemetry"
		],
		href: "/data"
	}
};
function Home() {
	const [mode, setMode] = useState("software");
	const current = focus[mode];
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx("section", {
			className: "grid-paper relative min-h-[650px] overflow-hidden border-b border-[#d1c9bb] py-20 md:min-h-[calc(100vh-80px)] md:py-28",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container relative flex h-full flex-col justify-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "mono rise text-[#347b64]",
							children: "CADENCE: HIGH · STATUS: ROLLING"
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "display rise mt-6 text-7xl leading-[.86] md:text-[10rem]",
							children: [
								"Code, ",
								/* @__PURE__ */ jsx("em", {
									className: "text-[#d85436]",
									children: "data"
								}),
								/* @__PURE__ */ jsx("br", {}),
								"& the ",
								/* @__PURE__ */ jsx("em", { children: "open road." })
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "rise mt-8 max-w-2xl text-lg leading-relaxed text-[#716c65] md:text-xl",
							children: "I'm Emilia Bravo, a Computer Science senior at Georgia State University building human-centered full-stack platforms, distributed data pipelines, and public-health analytics."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: "/cs",
								className: "inline-flex items-center gap-2 rounded-full bg-[#d85436] px-5 py-3 text-sm font-bold text-[#fff8ed] hover:bg-[#b8442c]",
								children: ["Explore my work ", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
							}), /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 rounded-full border border-[#201e1c] px-5 py-3 text-sm font-bold hover:border-[#d85436] hover:text-[#d85436]",
								children: "Let's connect"
							})]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "pointer-events-none absolute -bottom-20 -right-20 hidden h-80 w-80 rounded-full border border-[#d85436]/30 md:block",
					children: /* @__PURE__ */ jsx("div", {
						className: "absolute inset-7 rounded-full border border-[#d85436]/30",
						children: /* @__PURE__ */ jsx("div", { className: "absolute inset-1/3 rounded-full bg-[#d85436]" })
					})
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container py-20",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center justify-between gap-5",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "mono text-[#d85436]",
					children: "Choose a lens"
				}), /* @__PURE__ */ jsx("h2", {
					className: "display mt-2 text-5xl",
					children: "Pick your gear"
				})] }), /* @__PURE__ */ jsx("div", {
					className: "flex rounded-full border border-[#d1c9bb] p-1",
					children: Object.keys(focus).map((key) => /* @__PURE__ */ jsx("button", {
						onClick: () => setMode(key),
						className: `rounded-full px-5 py-2 text-sm font-bold transition ${mode === key ? "bg-[#d85436] text-[#fff8ed]" : "text-[#716c65] hover:text-[#d85436]"}`,
						children: focus[key].label
					}, key))
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-10 grid gap-6 md:grid-cols-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "card rounded-2xl p-8 md:col-span-2",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "mono text-[#347b64]",
							children: current.eyebrow
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "display mt-4 text-4xl text-[#d85436]",
							children: current.title
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-8 grid grid-cols-2 gap-6 md:grid-cols-4",
							children: current.stats.map(([value, label]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "display text-3xl",
								children: value
							}), /* @__PURE__ */ jsx("p", {
								className: "mono mt-1 text-[.6rem] text-[#716c65]",
								children: label
							})] }, label))
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-10 grid gap-4 md:grid-cols-2",
							children: current.items.map((item) => /* @__PURE__ */ jsx("li", {
								className: "border-l-2 border-[#d85436] pl-4 text-[#716c65]",
								children: item
							}, item))
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: current.href,
							className: "mono mt-8 inline-flex items-center gap-2 text-[#d85436]",
							children: ["See all work ", /* @__PURE__ */ jsx(ArrowRight, { size: 14 })]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl bg-[#201e1c] p-8 text-[#f8f6f0]",
					children: [
						/* @__PURE__ */ jsx(Sparkles, { className: "text-[#e99b50]" }),
						/* @__PURE__ */ jsx("p", {
							className: "mono mt-8 text-[#e99b50]",
							children: "Currently building"
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "display mt-3 text-4xl",
							children: "Technology with a tangible human impact."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 leading-relaxed text-[#d1c9bb]",
							children: "Especially in oncology, public health, civic infrastructure, climate tech, and cross-border LATAM work."
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "border-t border-[#d1c9bb] py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container flex flex-wrap items-center justify-between gap-8",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "display text-4xl",
					children: "Open to the next stage."
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[#716c65]",
					children: "New-grad SWE, full-stack, and data engineering roles."
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "flex gap-4 text-[#716c65]",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "mailto:emiliaabravo19@gmail.com",
							"aria-label": "Email",
							className: "hover:text-[#d85436]",
							children: /* @__PURE__ */ jsx(Mail, {})
						}),
						/* @__PURE__ */ jsx("a", {
							href: "https://www.linkedin.com/in/emibra",
							"aria-label": "LinkedIn",
							className: "hover:text-[#d85436]",
							children: /* @__PURE__ */ jsx(Linkedin, {})
						}),
						/* @__PURE__ */ jsx("a", {
							href: "https://github.com/emiibra",
							"aria-label": "GitHub",
							className: "hover:text-[#d85436]",
							children: /* @__PURE__ */ jsx(Github, {})
						}),
						/* @__PURE__ */ jsx(Database, { className: "text-[#347b64]" })
					]
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };

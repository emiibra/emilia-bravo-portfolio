import { useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, useLocation } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ArrowUpRight, Bike, Menu, X } from "lucide-react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/components/site.tsx
var links = [
	["/", "Start"],
	["/about", "Life"],
	["/cs", "CS Projects"],
	["/data", "Data Eng"],
	["/rides", "Rides"],
	["/contact", "Contact"]
];
function Nav() {
	const [open, setOpen] = useState(false);
	const location = useLocation();
	return /* @__PURE__ */ jsxs("header", {
		className: "site-nav sticky top-0 z-50",
		children: [/* @__PURE__ */ jsxs("nav", {
			className: "container flex min-h-20 items-center justify-between gap-6",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-3 text-xl font-bold",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid h-9 w-9 place-items-center rounded-full bg-[#d85436] text-[#fff8ed]",
						children: /* @__PURE__ */ jsx(Bike, { size: 18 })
					}), "Emilia Bravo"]
				}),
				/* @__PURE__ */ jsx("button", {
					className: "rounded-full border border-[#d1c9bb] p-2 md:hidden",
					"aria-label": "Toggle navigation",
					onClick: () => setOpen(!open),
					children: open ? /* @__PURE__ */ jsx(X, { size: 18 }) : /* @__PURE__ */ jsx(Menu, { size: 18 })
				}),
				/* @__PURE__ */ jsx("div", {
					className: `${open ? "flex" : "hidden"} absolute left-4 right-4 top-[72px] flex-col gap-3 border border-[#d1c9bb] bg-[#f8f6f0] p-5 shadow-lg md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`,
					children: links.map(([to, label]) => /* @__PURE__ */ jsx(Link, {
						to,
						activeOptions: { exact: to === "/" },
						onClick: () => setOpen(false),
						className: `mono transition-colors hover:text-[#d85436] ${location.pathname === to ? "text-[#d85436]" : "text-[#716c65]"}`,
						children: label
					}, to))
				})
			]
		}), /* @__PURE__ */ jsx("div", { className: "h-px bg-[#201e1c] opacity-20" })]
	});
}
function Page({ number, title, intro, children }) {
	return /* @__PURE__ */ jsxs("main", {
		className: "container py-16 md:py-24",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-end gap-5 border-b border-[#d1c9bb] pb-8",
				children: [/* @__PURE__ */ jsx("span", {
					className: "display text-7xl italic text-[#d85436] md:text-9xl",
					children: number
				}), /* @__PURE__ */ jsx("h1", {
					className: "display text-6xl leading-none md:text-8xl",
					children: title
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-8 max-w-2xl text-xl leading-relaxed text-[#716c65]",
				children: intro
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-14",
				children
			})
		]
	});
}
function ProjectGrid({ items }) {
	return /* @__PURE__ */ jsx("div", {
		className: "grid gap-x-10 md:grid-cols-2",
		children: items.map((project, index) => /* @__PURE__ */ jsxs("article", {
			className: "rise border-t border-[#201e1c]/30 py-8",
			style: { animationDelay: `${index * 70}ms` },
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex justify-between gap-4",
					children: [/* @__PURE__ */ jsx("span", {
						className: "mono text-[#716c65]",
						children: project.stage
					}), /* @__PURE__ */ jsx("span", {
						className: "mono text-[#347b64]",
						children: project.status
					})]
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "display mt-3 text-4xl",
					children: project.name
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 leading-relaxed text-[#716c65]",
					children: project.desc
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: project.stack.map((tag) => /* @__PURE__ */ jsx("span", {
						className: "mono rounded-full border border-[#d1c9bb] px-3 py-1 text-[.62rem]",
						children: tag
					}, tag))
				}),
				project.href && /* @__PURE__ */ jsxs("a", {
					href: project.href,
					target: "_blank",
					rel: "noreferrer",
					className: "mono mt-5 inline-flex items-center gap-1 text-[#d85436] hover:underline",
					children: ["Open project ", /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })]
				})
			]
		}, project.name))
	});
}
function meta(title, description) {
	return { meta: [{ title }, {
		name: "description",
		content: description
	}] };
}
//#endregion
//#region src/styles.css?url
var styles_default = "/assets/styles-1Zc-1xSa.css";
//#endregion
//#region src/routes/__root.tsx
var queryClient = new QueryClient();
var Route$6 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Emilia Bravo | Portfolio" }
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ jsx(Nav, {}), /* @__PURE__ */ jsx(Outlet, {})]
	});
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$5 = () => import("./routes-LezzqQe0.js");
var Route$5 = createFileRoute("/")({
	head: () => meta("Emilia Bravo | Full-Stack & Data Engineer", "Portfolio of Emilia Bravo, a computer science senior building human-centered software and data systems."),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$4 = () => import("./about-B5BdbiCs.js");
var Route$4 = createFileRoute("/about")({
	head: () => meta("Life | Emilia Bravo", "The story behind Emilia Bravo's work in software, data, and Atlanta."),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$3 = () => import("./contact-hrtk3ZbT.js");
var Route$3 = createFileRoute("/contact")({
	head: () => meta("Contact | Emilia Bravo", "Get in touch with Emilia Bravo, Atlanta-based full-stack and data engineer."),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/cs.tsx
var $$splitComponentImporter$2 = () => import("./cs-DKU-2_l-.js");
var Route$2 = createFileRoute("/cs")({
	head: () => meta("CS Projects | Emilia Bravo", "Full-stack platforms, hackathon winners, and systems projects by Emilia Bravo."),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/data.tsx
var $$splitComponentImporter$1 = () => import("./data-TS4mj0s7.js");
var Route$1 = createFileRoute("/data")({
	head: () => meta("Data Engineering | Emilia Bravo", "Public-health data mining, Spark clusters, and pipelines by Emilia Bravo."),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/rides.tsx
var $$splitComponentImporter = () => import("./rides-DbEG_FO8.js");
var Route = createFileRoute("/rides")({
	head: () => meta("Rides | Emilia Bravo", "Atlanta cycling stats, clubs, and memorable rides by Emilia Bravo."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute: Route$4.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$6
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$6
	}),
	CsRoute: Route$2.update({
		id: "/cs",
		path: "/cs",
		getParentRoute: () => Route$6
	}),
	DataRoute: Route$1.update({
		id: "/data",
		path: "/data",
		getParentRoute: () => Route$6
	}),
	RidesRoute: Route.update({
		id: "/rides",
		path: "/rides",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreload: "intent"
	});
}
//#endregion
export { getRouter, Page as n, ProjectGrid as r, router_exports as t };

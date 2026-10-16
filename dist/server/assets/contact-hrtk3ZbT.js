import { n as Page } from "./router-1YZY-7Lv.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function Contact() {
	return /* @__PURE__ */ jsxs(Page, {
		number: "05",
		title: "Let's ride together",
		intro: "Graduating May 2027 with a B.S. in Computer Science and a Data Science concentration. Open to new-grad Software Engineering, Full-Stack, and Data Engineering roles.",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid gap-5 md:grid-cols-2",
			children: [
				/* @__PURE__ */ jsxs("a", {
					className: "card flex items-center justify-between rounded-2xl p-7 transition hover:-translate-y-1",
					href: "mailto:emiliaabravo19@gmail.com",
					children: [/* @__PURE__ */ jsxs("span", { children: [
						/* @__PURE__ */ jsx(Mail, { className: "mb-6 text-[#d85436]" }),
						/* @__PURE__ */ jsx("span", {
							className: "display block text-3xl",
							children: "Email me"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "mt-2 block text-[#716c65]",
							children: "emiliaabravo19@gmail.com"
						})
					] }), /* @__PURE__ */ jsx(ArrowUpRight, {})]
				}),
				/* @__PURE__ */ jsxs("a", {
					className: "card flex items-center justify-between rounded-2xl p-7 transition hover:-translate-y-1",
					href: "tel:+16783604682",
					children: [/* @__PURE__ */ jsxs("span", { children: [
						/* @__PURE__ */ jsx(Phone, { className: "mb-6 text-[#347b64]" }),
						/* @__PURE__ */ jsx("span", {
							className: "display block text-3xl",
							children: "Call me"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "mt-2 block text-[#716c65]",
							children: "(678) 360-4682"
						})
					] }), /* @__PURE__ */ jsx(ArrowUpRight, {})]
				}),
				/* @__PURE__ */ jsxs("a", {
					className: "card rounded-2xl p-7 text-2xl hover:text-[#d85436]",
					href: "https://www.linkedin.com/in/emibra",
					target: "_blank",
					rel: "noreferrer",
					children: ["LinkedIn ", /* @__PURE__ */ jsx(ArrowUpRight, {
						className: "inline",
						size: 18
					})]
				}),
				/* @__PURE__ */ jsxs("a", {
					className: "card rounded-2xl p-7 text-2xl hover:text-[#d85436]",
					href: "https://github.com/emiibra",
					target: "_blank",
					rel: "noreferrer",
					children: ["GitHub ", /* @__PURE__ */ jsx(ArrowUpRight, {
						className: "inline",
						size: 18
					})]
				})
			]
		}), /* @__PURE__ */ jsx("p", {
			className: "mono mt-10 text-[#716c65]",
			children: "In-Town Atlanta, GA · Midtown · BeltLine · Georgia State University"
		})]
	});
}
//#endregion
export { Contact as component };

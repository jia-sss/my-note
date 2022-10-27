import { defineConfig } from "vitepress";

export default defineConfig({
	title: "我的笔记",
	description: "笔记",
	themeConfig: {
		siteTitle: "我的笔记",
		sidebar: {
			"/css/": sidebarCss(),
			"/js/": sidebarJs(),
			"/react/": sidebarReact(),
			"/css_effect/": sidebar_css_effect(),
		},
		nav: [
			{
				text: "css",
				link: "/css/css_vw",
			},
			{
				text: "js",
				link: "/js/js-method/date",
			},
			{
				text: "react",
				link: "/react/react_note",
			},
			{
				text: "css效果",
				link: "/css_effect/shake",
			},
		],
		algolia: {
			appId: "83BCYSE4G8",
			apiKey: "6f5836dabc9b0e62955fc9f351e3d805",
			indexName: "itsme",
		},
	},
});

function sidebarJs() {
	return [
		{
			text: "JS",
			collapsible: true,
			items: [
				{ text: "数组方法", link: "/js/array" },
				{ text: "请求", link: "/js/request" },
			],
		},
		{
			text: "JS小方法",
			collapsible: true,
			items: [
				{ text: "一、日期处理", link: "/js/js-method/date" },
				{ text: "二、字符串处理", link: "/js/js-method/string" },
				{ text: "三、数组处理", link: "/js/js-method/array" },
				{ text: "四、数字操作", link: "/js/js-method/number" },
				{ text: "五、颜色操作", link: "/js/js-method/color" },
				{ text: "六、浏览器操作", link: "/js/js-method/browser" },
				{ text: "七、其他操作", link: "/js/js-method/other" },
			],
		},
	];
}

function sidebarReact() {
	return [
		{
			text: "React",
			collapsible: true,
			items: [{ text: "react", link: "/react/react_note" }],
		},
		{
			text: "React扩展",
			collapsible: true,
			items: [{ text: "React扩展", link: "/react/react_kz" }],
		},
	];
}

function sidebarCss() {
	return [
		{
			text: "Css",
			collapsible: true,
			items: [{ text: "css移动端适配", link: "/css/css_vw" }],
		},
	];
}
function sidebar_css_effect() {
	return [
		{
			text: "css效果",
			collapsible: true,
			items: [{ text: "元素左右抖动效果", link: "/css_effect/shake" }],
		},
	];
}

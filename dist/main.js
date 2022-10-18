(() => {
	"use strict";
	var e = {
			426: (e, n, t) => {
				t.d(n, { Z: () => i });
				var o = t(537),
					r = t.n(o),
					a = t(645),
					c = t.n(a)()(r());
				c.push([
					e.id,
					"body{\n   background-color: #749F82;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n   justify-content: center;\n}\n\n.title, .info{\n    color: white;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\n}\n\n.title{\n    font-size: 100px;\n}\n\nli{\n    display: inline;\n}\n\n.menuBar{\n    padding-bottom: 10px;\n}\n\n\n\n\n\n",
					"",
					{
						version: 3,
						sources: ["webpack://./src/style.css"],
						names: [],
						mappings:
							"AAAA;GACG,yBAAyB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;GACpB,uBAAuB;AAC1B;;AAEA;IACI,YAAY;IACZ;AACJ;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB",
						sourcesContent: [
							"body{\n   background-color: #749F82;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n   justify-content: center;\n}\n\n.title, .info{\n    color: white;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\n}\n\n.title{\n    font-size: 100px;\n}\n\nli{\n    display: inline;\n}\n\n.menuBar{\n    padding-bottom: 10px;\n}\n\n\n\n\n\n",
						],
						sourceRoot: "",
					},
				]);
				const i = c;
			},
			645: (e) => {
				e.exports = function (e) {
					var n = [];
					return (
						(n.toString = function () {
							return this.map(function (n) {
								var t = "",
									o = void 0 !== n[5];
								return (
									n[4] && (t += "@supports (".concat(n[4], ") {")),
									n[2] && (t += "@media ".concat(n[2], " {")),
									o &&
										(t += "@layer".concat(
											n[5].length > 0 ? " ".concat(n[5]) : "",
											" {"
										)),
									(t += e(n)),
									o && (t += "}"),
									n[2] && (t += "}"),
									n[4] && (t += "}"),
									t
								);
							}).join("");
						}),
						(n.i = function (e, t, o, r, a) {
							"string" == typeof e && (e = [[null, e, void 0]]);
							var c = {};
							if (o)
								for (var i = 0; i < this.length; i++) {
									var s = this[i][0];
									null != s && (c[s] = !0);
								}
							for (var d = 0; d < e.length; d++) {
								var u = [].concat(e[d]);
								(o && c[u[0]]) ||
									(void 0 !== a &&
										(void 0 === u[5] ||
											(u[1] = "@layer"
												.concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
												.concat(u[1], "}")),
										(u[5] = a)),
									t &&
										(u[2]
											? ((u[1] = "@media "
													.concat(u[2], " {")
													.concat(u[1], "}")),
											  (u[2] = t))
											: (u[2] = t)),
									r &&
										(u[4]
											? ((u[1] = "@supports ("
													.concat(u[4], ") {")
													.concat(u[1], "}")),
											  (u[4] = r))
											: (u[4] = "".concat(r))),
									n.push(u));
							}
						}),
						n
					);
				};
			},
			537: (e) => {
				e.exports = function (e) {
					var n = e[1],
						t = e[3];
					if (!t) return n;
					if ("function" == typeof btoa) {
						var o = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
							r =
								"sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
									o
								),
							a = "/*# ".concat(r, " */"),
							c = t.sources.map(function (e) {
								return "/*# sourceURL="
									.concat(t.sourceRoot || "")
									.concat(e, " */");
							});
						return [n].concat(c).concat([a]).join("\n");
					}
					return [n].join("\n");
				};
			},
			379: (e) => {
				var n = [];
				function t(e) {
					for (var t = -1, o = 0; o < n.length; o++)
						if (n[o].identifier === e) {
							t = o;
							break;
						}
					return t;
				}
				function o(e, o) {
					for (var a = {}, c = [], i = 0; i < e.length; i++) {
						var s = e[i],
							d = o.base ? s[0] + o.base : s[0],
							u = a[d] || 0,
							l = "".concat(d, " ").concat(u);
						a[d] = u + 1;
						var p = t(l),
							m = {
								css: s[1],
								media: s[2],
								sourceMap: s[3],
								supports: s[4],
								layer: s[5],
							};
						if (-1 !== p) n[p].references++, n[p].updater(m);
						else {
							var f = r(m, o);
							(o.byIndex = i),
								n.splice(i, 0, { identifier: l, updater: f, references: 1 });
						}
						c.push(l);
					}
					return c;
				}
				function r(e, n) {
					var t = n.domAPI(n);
					return (
						t.update(e),
						function (n) {
							if (n) {
								if (
									n.css === e.css &&
									n.media === e.media &&
									n.sourceMap === e.sourceMap &&
									n.supports === e.supports &&
									n.layer === e.layer
								)
									return;
								t.update((e = n));
							} else t.remove();
						}
					);
				}
				e.exports = function (e, r) {
					var a = o((e = e || []), (r = r || {}));
					return function (e) {
						e = e || [];
						for (var c = 0; c < a.length; c++) {
							var i = t(a[c]);
							n[i].references--;
						}
						for (var s = o(e, r), d = 0; d < a.length; d++) {
							var u = t(a[d]);
							0 === n[u].references && (n[u].updater(), n.splice(u, 1));
						}
						a = s;
					};
				};
			},
			569: (e) => {
				var n = {};
				e.exports = function (e, t) {
					var o = (function (e) {
						if (void 0 === n[e]) {
							var t = document.querySelector(e);
							if (
								window.HTMLIFrameElement &&
								t instanceof window.HTMLIFrameElement
							)
								try {
									t = t.contentDocument.head;
								} catch (e) {
									t = null;
								}
							n[e] = t;
						}
						return n[e];
					})(e);
					if (!o)
						throw new Error(
							"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
						);
					o.appendChild(t);
				};
			},
			216: (e) => {
				e.exports = function (e) {
					var n = document.createElement("style");
					return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
				};
			},
			565: (e, n, t) => {
				e.exports = function (e) {
					var n = t.nc;
					n && e.setAttribute("nonce", n);
				};
			},
			795: (e) => {
				e.exports = function (e) {
					var n = e.insertStyleElement(e);
					return {
						update: function (t) {
							!(function (e, n, t) {
								var o = "";
								t.supports && (o += "@supports (".concat(t.supports, ") {")),
									t.media && (o += "@media ".concat(t.media, " {"));
								var r = void 0 !== t.layer;
								r &&
									(o += "@layer".concat(
										t.layer.length > 0 ? " ".concat(t.layer) : "",
										" {"
									)),
									(o += t.css),
									r && (o += "}"),
									t.media && (o += "}"),
									t.supports && (o += "}");
								var a = t.sourceMap;
								a &&
									"undefined" != typeof btoa &&
									(o +=
										"\n/*# sourceMappingURL=data:application/json;base64,".concat(
											btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
											" */"
										)),
									n.styleTagTransform(o, e, n.options);
							})(n, e, t);
						},
						remove: function () {
							!(function (e) {
								if (null === e.parentNode) return !1;
								e.parentNode.removeChild(e);
							})(n);
						},
					};
				};
			},
			589: (e) => {
				e.exports = function (e, n) {
					if (n.styleSheet) n.styleSheet.cssText = e;
					else {
						for (; n.firstChild; ) n.removeChild(n.firstChild);
						n.appendChild(document.createTextNode(e));
					}
				};
			},
		},
		n = {};
	function t(o) {
		var r = n[o];
		if (void 0 !== r) return r.exports;
		var a = (n[o] = { id: o, exports: {} });
		return e[o](a, a.exports, t), a.exports;
	}
	(t.n = (e) => {
		var n = e && e.__esModule ? () => e.default : () => e;
		return t.d(n, { a: n }), n;
	}),
		(t.d = (e, n) => {
			for (var o in n)
				t.o(n, o) &&
					!t.o(e, o) &&
					Object.defineProperty(e, o, { enumerable: !0, get: n[o] });
		}),
		(t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
		(t.nc = void 0),
		(() => {
			var e = t(379),
				n = t.n(e),
				o = t(795),
				r = t.n(o),
				a = t(569),
				c = t.n(a),
				i = t(565),
				s = t.n(i),
				d = t(216),
				u = t.n(d),
				l = t(589),
				p = t.n(l),
				m = t(426),
				f = {};
			(f.styleTagTransform = p()),
				(f.setAttributes = s()),
				(f.insert = c().bind(null, "head")),
				(f.domAPI = r()),
				(f.insertStyleElement = u()),
				n()(m.Z, f),
				m.Z && m.Z.locals && m.Z.locals;
			const h = document.querySelector("#content");
			document.body.appendChild(h);
			const v = function () {
					!(function () {
						const e = document.createElement("div");
						e.classList.add("menuBar"), h.appendChild(e);
						const n = document.createElement("ul");
						e.appendChild(n);
						const t = document.createElement("button");
						t.classList.add("main"), (t.innerText = "Main Page");
						const o = document.createElement("button");
						o.classList.add("menu"), (o.innerText = "Menu");
						const r = document.createElement("button");
						r.classList.add("about"),
							(r.innerText = "About Us"),
							e.appendChild(t),
							e.appendChild(o),
							e.appendChild(r);
					})(),
						(function () {
							const e = document.createElement("div");
							e.classList.add("contentMain"), h.appendChild(e);
							const n = document.createElement("h1");
							n.classList.add("title");
							const t = document.createElement("p");
							t.classList.add("info"),
								(n.innerText = "Dani's"),
								(t.innerText = "Packed with protein for all your gym needs"),
								h.appendChild(n),
								h.appendChild(t);
						})();
				},
				y = document.querySelector("#content");
			document.body.appendChild(y);
			const A = document.querySelector("#content");
			document.body.appendChild(A);
			v(),
				(function () {
					const e = document.querySelector(".main"),
						n = document.querySelector(".menu");
					document.querySelector(".about").addEventListener("click", () => {
						document.querySelector(".contentMenu").remove(),
							(function () {
								const e = document.createElement("div");
								e.classList.add("contentAbout"), A.appendChild(e);
								const n = document.createElement("p");
								n.classList.add("bio"),
									(n.innerText =
										"We're a fake non family owned place that serves vegetarian food. Come pay outrageously high prices on things you could easily make at home"),
									e.appendChild(n);
							})();
					}),
						e.addEventListener("click", () => {
							document.querySelector(".contentMenu").remove(), v();
						}),
						n.addEventListener("click", () => {
							document.querySelector(".title").remove(),
								document.querySelector(".info").remove(),
								(function () {
									const e = document.createElement("div");
									e.classList.add("contentMenu"), y.appendChild(e);
									const n = document.createElement("div");
									n.classList.add("firstContainer"), e.appendChild(n);
									const t = document.createElement("div");
									(t.innerText = "Protein Shake $7.99"), n.appendChild(t);
									const o = document.createElement("img");
									(o.src =
										"/Users/danny/Desktop/the_odin_project/restaurant-page2022/strawberry-banana-protein-shake.webp"),
										(o.style.width = "15em"),
										(o.style.height = "15em"),
										t.appendChild(o);
									const r = document.createElement("div");
									e.appendChild(r);
									const a = document.createElement("div");
									(a.innerText = "Veggie Tacos $10.99"), r.appendChild(a);
									const c = document.createElement("img");
									(c.src =
										"/Users/danny/Desktop/the_odin_project/restaurant-page2022/delicious-vegetarian-tacos-recipe.jpeg"),
										(c.style.width = "15em"),
										(c.style.height = "15em"),
										a.appendChild(c);
									const i = document.createElement("div");
									e.appendChild(i);
									const s = document.createElement("div");
									(s.innerText = "Sweet Potato Bowl $15.99"), i.appendChild(s);
									const d = document.createElement("img");
									(d.src =
										"/Users/danny/Desktop/the_odin_project/restaurant-page2022/sweet-potato-burrito-bowls-1.jpeg"),
										(d.style.width = "15em"),
										(d.style.height = "15em"),
										s.appendChild(d);
								})();
						});
				})();
		})();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzlDeUQsRUFBZWhCLFVBQVVDLElBQUksa0JBQzdCTyxFQUFXbkQsWUFBWTJELEdBQ3ZCLE1BQU1DLEVBQVlyRSxTQUFTVyxjQUFjLE9BQ3pDMEQsRUFBVWIsVUFBWSxzQkFDdEJZLEVBQWUzRCxZQUFZNEQsR0FDM0IsTUFBTUMsRUFBY3RFLFNBQVNXLGNBQWMsT0FDM0MyRCxFQUFZQyxJQUNYLGlHQUNERCxFQUFZekUsTUFBTTJFLE1BQVEsT0FDMUJGLEVBQVl6RSxNQUFNNEUsT0FBUyxPQUMzQkosRUFBVTVELFlBQVk2RCxHQUV0QixNQUFNSSxFQUFrQjFFLFNBQVNXLGNBQWMsT0FDL0NpRCxFQUFXbkQsWUFBWWlFLEdBQ3ZCLE1BQU1DLEVBQWEzRSxTQUFTVyxjQUFjLE9BQzFDZ0UsRUFBV25CLFVBQVksc0JBQ3ZCa0IsRUFBZ0JqRSxZQUFZa0UsR0FDNUIsTUFBTUMsRUFBVTVFLFNBQVNXLGNBQWMsT0FDdkNpRSxFQUFRTCxJQUNQLG1HQUNESyxFQUFRL0UsTUFBTTJFLE1BQVEsT0FDdEJJLEVBQVEvRSxNQUFNNEUsT0FBUyxPQUN2QkUsRUFBV2xFLFlBQVltRSxHQUV2QixNQUFNQyxFQUFpQjdFLFNBQVNXLGNBQWMsT0FDOUNpRCxFQUFXbkQsWUFBWW9FLEdBQ3ZCLE1BQU1DLEVBQVk5RSxTQUFTVyxjQUFjLE9BQ3pDbUUsRUFBVXRCLFVBQVksMkJBQ3RCcUIsRUFBZXBFLFlBQVlxRSxHQUMzQixNQUFNQyxFQUFVL0UsU0FBU1csY0FBYyxPQUN2Q29FLEVBQVFSLElBQ1AsOEZBQ0RRLEVBQVFsRixNQUFNMkUsTUFBUSxPQUN0Qk8sRUFBUWxGLE1BQU00RSxPQUFTLE9BQ3ZCSyxFQUFVckUsWUFBWXNFLEVBR3ZCLENFVEUsRUFBWSxHQUVkLENBR0FDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyMDIyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyMDIyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyMDIyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMjAyMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyMDIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyMDIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTIwMjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMjAyMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTIwMjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyMDIyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTIwMjIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMjAyMi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMjAyMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTIwMjIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTIwMjIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMjAyMi8uL3NyYy9pbml0aWFscGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyMDIyLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMjAyMi8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyMDIyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ5RjgyO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlLCAuaW5mb3tcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZlxcbn1cXG5cXG4udGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxufVxcblxcbmxpe1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5tZW51QmFye1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtHQUNHLHlCQUF5QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0dBQ3BCLHVCQUF1QjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICM3NDlGODI7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUsIC5pbmZve1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmXFxufVxcblxcbi50aXRsZXtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG59XFxuXFxubGl7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLm1lbnVCYXJ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuXHRjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudE1haW5cIik7XG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcblx0Y29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRwYWdlVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuXHRjb25zdCBwYWdlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRwYWdlSW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcblx0cGFnZVRpdGxlLmlubmVyVGV4dCA9IFwiRGFuaSdzXCI7XG5cdHBhZ2VJbmZvLmlubmVyVGV4dCA9IFwiUGFja2VkIHdpdGggcHJvdGVpbiBmb3IgYWxsIHlvdXIgZ3ltIG5lZWRzXCI7XG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlVGl0bGUpO1xuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUluZm8pO1xuXG5cdHJldHVybiBjb250ZW50RGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24oKSB7XG5cdGNvbnN0IG1lbnVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRtZW51QmFyLmNsYXNzTGlzdC5hZGQoXCJtZW51QmFyXCIpO1xuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJhcik7XG5cdGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cdG1lbnVCYXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG5cdGNvbnN0IG1lbnViYXJNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0bWVudWJhck1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cdG1lbnViYXJNYWluLmlubmVyVGV4dCA9IFwiTWFpbiBQYWdlXCI7XG5cdGNvbnN0IG1lbnViYXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0bWVudWJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cdG1lbnViYXJNZW51LmlubmVyVGV4dCA9IFwiTWVudVwiO1xuXHRjb25zdCBtZW51YmFyQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRtZW51YmFyQWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xuXHRtZW51YmFyQWJvdXQuaW5uZXJUZXh0ID0gXCJBYm91dCBVc1wiO1xuXHRtZW51QmFyLmFwcGVuZENoaWxkKG1lbnViYXJNYWluKTtcblx0bWVudUJhci5hcHBlbmRDaGlsZChtZW51YmFyTWVudSk7XG5cdG1lbnVCYXIuYXBwZW5kQ2hpbGQobWVudWJhckFib3V0KTtcblxuXHRyZXR1cm4gbWVudUJhcjtcbn1cblxuZnVuY3Rpb24gbG9hZEluaXRpYWxQYWdlKCkge1xuXHRjcmVhdGVCdXR0b24oKTtcblx0Y3JlYXRlSGVhZGVyKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRJbml0aWFsUGFnZTtcbiIsImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcblx0Y29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRNZW51XCIpO1xuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG5cdGNvbnN0IGZpcnN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Zmlyc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZpcnN0Q29udGFpbmVyXCIpO1xuXHRjb250ZW50RGl2LmFwcGVuZENoaWxkKGZpcnN0Q29udGFpbmVyKTtcblx0Y29uc3QgZmlyc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Zmlyc3RJdGVtLmlubmVyVGV4dCA9IFwiUHJvdGVpbiBTaGFrZSAkNy45OVwiO1xuXHRmaXJzdENvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdEl0ZW0pO1xuXHRjb25zdCBzbW9vdGhpZVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdHNtb290aGllUGljLnNyYyA9XG5cdFx0XCIvVXNlcnMvZGFubnkvRGVza3RvcC90aGVfb2Rpbl9wcm9qZWN0L3Jlc3RhdXJhbnQtcGFnZTIwMjIvc3RyYXdiZXJyeS1iYW5hbmEtcHJvdGVpbi1zaGFrZS53ZWJwXCI7XG5cdHNtb290aGllUGljLnN0eWxlLndpZHRoID0gXCIxNWVtXCI7XG5cdHNtb290aGllUGljLnN0eWxlLmhlaWdodCA9IFwiMTVlbVwiO1xuXHRmaXJzdEl0ZW0uYXBwZW5kQ2hpbGQoc21vb3RoaWVQaWMpO1xuXG5cdGNvbnN0IHNlY29uZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoc2Vjb25kQ29udGFpbmVyKTtcblx0Y29uc3Qgc2Vjb25kSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNlY29uZEl0ZW0uaW5uZXJUZXh0ID0gXCJWZWdnaWUgVGFjb3MgJDEwLjk5XCI7XG5cdHNlY29uZENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRJdGVtKTtcblx0Y29uc3QgdGFjb1BpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdHRhY29QaWMuc3JjID1cblx0XHRcIi9Vc2Vycy9kYW5ueS9EZXNrdG9wL3RoZV9vZGluX3Byb2plY3QvcmVzdGF1cmFudC1wYWdlMjAyMi9kZWxpY2lvdXMtdmVnZXRhcmlhbi10YWNvcy1yZWNpcGUuanBlZ1wiO1xuXHR0YWNvUGljLnN0eWxlLndpZHRoID0gXCIxNWVtXCI7XG5cdHRhY29QaWMuc3R5bGUuaGVpZ2h0ID0gXCIxNWVtXCI7XG5cdHNlY29uZEl0ZW0uYXBwZW5kQ2hpbGQodGFjb1BpYyk7XG5cblx0Y29uc3QgdGhpcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb250ZW50RGl2LmFwcGVuZENoaWxkKHRoaXJkQ29udGFpbmVyKTtcblx0Y29uc3QgdGhpcmRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGhpcmRJdGVtLmlubmVyVGV4dCA9IFwiU3dlZXQgUG90YXRvIEJvd2wgJDE1Ljk5XCI7XG5cdHRoaXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXJkSXRlbSk7XG5cdGNvbnN0IGJvd2xQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRib3dsUGljLnNyYyA9XG5cdFx0XCIvVXNlcnMvZGFubnkvRGVza3RvcC90aGVfb2Rpbl9wcm9qZWN0L3Jlc3RhdXJhbnQtcGFnZTIwMjIvc3dlZXQtcG90YXRvLWJ1cnJpdG8tYm93bHMtMS5qcGVnXCI7XG5cdGJvd2xQaWMuc3R5bGUud2lkdGggPSBcIjE1ZW1cIjtcblx0Ym93bFBpYy5zdHlsZS5oZWlnaHQgPSBcIjE1ZW1cIjtcblx0dGhpcmRJdGVtLmFwcGVuZENoaWxkKGJvd2xQaWMpO1xuXG5cdHJldHVybiBjb250ZW50RGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51O1xuIiwiY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5mdW5jdGlvbiBjcmVhdGVBYm91dCgpIHtcblx0Y29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRBYm91dFwiKTtcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuXHRjb25zdCBiaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0YmlvLmNsYXNzTGlzdC5hZGQoXCJiaW9cIik7XG5cdGJpby5pbm5lclRleHQgPVxuXHRcdFwiV2UncmUgYSBmYWtlIG5vbiBmYW1pbHkgb3duZWQgcGxhY2UgdGhhdCBzZXJ2ZXMgdmVnZXRhcmlhbiBmb29kLiBDb21lIHBheSBvdXRyYWdlb3VzbHkgaGlnaCBwcmljZXMgb24gdGhpbmdzIHlvdSBjb3VsZCBlYXNpbHkgbWFrZSBhdCBob21lXCI7XG5cdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYmlvKTtcblx0cmV0dXJuIGNvbnRlbnREaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFib3V0O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vaW5pdGlhbHBhZ2UuanNcIjtcbmltcG9ydCBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IFwiLi9hYm91dC5qc1wiO1xuaW1wb3J0IGxvYWRJbml0aWFsUGFnZSBmcm9tIFwiLi9pbml0aWFscGFnZS5qc1wiO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGNyZWF0ZUFib3V0IGZyb20gXCIuL2Fib3V0LmpzXCI7XG5cbmZ1bmN0aW9uIHRhYlN3aXRjaCgpIHtcblx0Y29uc3QgbWFpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcblx0Y29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcblx0Y29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0XCIpO1xuXG5cdGFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRNZW51XCIpO1xuXHRcdG1lbnVDb250ZW50LnJlbW92ZSgpO1xuXHRcdC8vIGNvbnN0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIik7XG5cdFx0Ly8gcGFnZVRpdGxlLnJlbW92ZSgpO1xuXHRcdC8vIGNvbnN0IHBhZ2VJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuXHRcdC8vIHBhZ2VJbmZvLnJlbW92ZSgpO1xuXHRcdGNyZWF0ZUFib3V0KCk7XG5cdH0pO1xuXG5cdG1haW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudE1lbnVcIik7XG5cdFx0bWVudUNvbnRlbnQucmVtb3ZlKCk7XG5cdFx0bG9hZEluaXRpYWxQYWdlKCk7XG5cdH0pO1xuXG5cdG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuXHRcdHBhZ2VUaXRsZS5yZW1vdmUoKTtcblx0XHRjb25zdCBwYWdlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcblx0XHRwYWdlSW5mby5yZW1vdmUoKTtcblx0XHQvLyBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRBYm91dFwiKTtcblx0XHQvLyBhYm91dENvbnRlbnQucmVtb3ZlKCk7XG5cdFx0Y3JlYXRlTWVudSgpO1xuXHR9KTtcbn1cblxubG9hZEluaXRpYWxQYWdlKCk7XG50YWJTd2l0Y2goKTtcbiJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJfayIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzdHlsZXNJbkRPTSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsIm1vZHVsZXNUb0RvbSIsIm9wdGlvbnMiLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJiYXNlIiwiY291bnQiLCJpbmRleEJ5SWRlbnRpZmllciIsIm9iaiIsImNzcyIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkRWxlbWVudFN0eWxlIiwiYnlJbmRleCIsInNwbGljZSIsImFwaSIsImRvbUFQSSIsInVwZGF0ZSIsIm5ld09iaiIsInJlbW92ZSIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJpbmRleCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pIiwiX2luZGV4IiwibWVtbyIsImluc2VydCIsInN0eWxlIiwidGFyZ2V0Iiwic3R5bGVUYXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwiZ2V0VGFyZ2V0IiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJzdHlsZUVsZW1lbnQiLCJub25jZSIsInNldEF0dHJpYnV0ZSIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlVGFnVHJhbnNmb3JtIiwiYXBwbHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImZpcnN0Q2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJuIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibmMiLCJjb250YWluZXIiLCJib2R5IiwibWVudUJhciIsImNsYXNzTGlzdCIsImFkZCIsImxpc3RDb250YWluZXIiLCJtZW51YmFyTWFpbiIsImlubmVyVGV4dCIsIm1lbnViYXJNZW51IiwibWVudWJhckFib3V0IiwiY3JlYXRlQnV0dG9uIiwiY29udGVudERpdiIsInBhZ2VUaXRsZSIsInBhZ2VJbmZvIiwiY3JlYXRlSGVhZGVyIiwibWFpbkJ0biIsIm1lbnVCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiYmlvIiwiZmlyc3RDb250YWluZXIiLCJmaXJzdEl0ZW0iLCJzbW9vdGhpZVBpYyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwic2Vjb25kQ29udGFpbmVyIiwic2Vjb25kSXRlbSIsInRhY29QaWMiLCJ0aGlyZENvbnRhaW5lciIsInRoaXJkSXRlbSIsImJvd2xQaWMiLCJ0YWJTd2l0Y2giXSwic291cmNlUm9vdCI6IiJ9

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1871],
  {
    165: (t, e, a) => {
      "use strict";
      a.d(e, { Vt: () => i, v1: () => s });
      var x = a(9509);
      let s = "0000000000000000000000000000",
        i = "00000000-0000-0000-0000-000000000000";
      x.env.JWT_SECRET_KEY;
    },
    191: (t, e, a) => {
      "use strict";
      a.d(e, { V: () => o.Vt, N: () => k });
      var x = a(5695),
        s = a(2115),
        i = a(4477);
      let r = (0, i.createServerReference)(
        "60d7ce557c6a2c4e3b865bc11edd5c8cc98944f0b0",
        i.callServer,
        void 0,
        i.findSourceMapURL,
        "remixProject"
      );
      var o = a(165),
        n = a(565),
        y = a(239),
        l = a(6139),
        m = a(8436),
        c = a(9003);
      let d = (t) =>
          ({
            remix: "Failed to remix project, please try again later",
            create: "Failed to create project, please try again later",
          }[t]),
        k = () => {
          let t = (0, x.useRouter)(),
            e = (0, y.I)(),
            { checkAuth: a } = (0, c.M)(),
            [i, o] = (0, s.useState)(!1);
          return {
            remixAction: (0, s.useCallback)(
              async (e, x) =>
                a(
                  async () => {
                    o(!0);
                    try {
                      let a = await (0, n.i)(),
                        s = await r(e, a);
                      if (s.data) {
                        let e = (0, l.$)(),
                          a = { enter_from: x };
                        "create" === x && (a.createWeb = "true"),
                          t.push(
                            ""
                              .concat(e, "/editor/")
                              .concat(s.data.project_id, "?")
                              .concat(new URLSearchParams(a).toString())
                          );
                      } else (0, m.P)({ message: d(x), type: "error" });
                    } catch (t) {
                      console.log("error", t),
                        (0, m.P)({ message: d(x), type: "error" });
                    } finally {
                      o(!1);
                    }
                    setTimeout(() => {
                      o(!1);
                    }, 1e3);
                  },
                  {
                    title: "Want to remix this project?",
                    description: "Log in to remix and customize it your way.",
                    cancelText: "Cancel",
                    confirmText: "Log in",
                  }
                )(),
              [e, t]
            ),
            isRemixing: i,
          };
        };
    },
    565: (t, e, a) => {
      "use strict";
      a.d(e, { i: () => s });
      let x = null,
        s = () =>
          x
            ? Promise.resolve(x)
            : new Promise((t) => {
                if (!window.collectEvent) {
                  t("");
                  return;
                }
                try {
                  window.collectEvent("getToken", (e) => {
                    e && e.ssid ? ((x = e.ssid), t(e.ssid)) : t("");
                  });
                } catch (e) {
                  t("");
                }
              });
    },
    1884: (t, e, a) => {
      "use strict";
      function x(t) {
        return t > 1e3 && t < 1e6
          ? (t / 1e3).toFixed(1) + "K"
          : t > 1e6
          ? (t / 1e6).toFixed(1) + "M"
          : t > 1e9
          ? (t / 1e9).toFixed(1) + "B"
          : t;
      }
      a.d(e, { Z: () => x });
    },
    2801: (t, e, a) => {
      "use strict";
      a.d(e, { A: () => x });
      let x = (t) => {
        try {
          let e = (t.includes("://") ? new URL(t).hostname : t).split(".");
          if (e.length >= 2) return e[0];
        } catch (t) {
          console.error("Failed to parse URL:", t);
        }
        return t;
      };
    },
    2919: (t, e, a) => {
      "use strict";
      a.d(e, { d: () => m });
      var x = a(5155),
        s = a(5427),
        i = a(2115),
        r = a(750),
        o = a(239),
        n = a(6846),
        y = a(7023);
      let l = (t) => {
          let {
              isOpen: e,
              onEmojiSelect: a,
              onClose: s,
              onMouseEnter: o,
              onMouseLeave: n,
              className: l,
            } = t,
            [m, c] = (0, i.useState)([]),
            { asyncGetEmojis: d } = (0, r.k)(),
            k = (0, i.useRef)(null);
          (0, i.useEffect)(() => {
            e &&
              d().then((t) => {
                console.log("asyncGetEmojis", t), c(t);
              });
          }, [e]);
          let p = (t) => {
            a(t), s();
          };
          return e
            ? (0, x.jsx)("div", {
                className:
                  "absolute top-[-50px] right-0 z-50 h-[54px] w-[268px] items-start justify-items-start ".concat(
                    l
                  ),
                onMouseEnter: o,
                onMouseLeave: n,
                children: (0, x.jsx)("div", {
                  className:
                    "flex h-[44px] w-full flex-col items-center justify-center rounded-[8px] bg-white shadow-lg",
                  id: "emoji-picker",
                  ref: k,
                  children: (0, x.jsx)("div", {
                    className:
                      "flex flex-wrap items-center justify-center gap-3",
                    children: m.map((t) =>
                      (0, x.jsx)(
                        "button",
                        {
                          className:
                            "flex h-5 w-5 cursor-pointer items-center justify-center border-none",
                          onClick: (e) => {
                            e.stopPropagation(), e.preventDefault(), p(t);
                          },
                          title: t.display_name,
                          children: (0, x.jsx)(y.m, {
                            emoji: t,
                            className: "h-5 w-5",
                          }),
                        },
                        t.interaction_type
                      )
                    ),
                  }),
                }),
              })
            : null;
        },
        m = (t) => {
          let {
              emojiCounts: e,
              emojiStatuses: a,
              className: m,
              pickerClassName: c,
              onEmojiClick: d,
              showAddButton: k = !1,
              scrollable: p = !0,
              fromMask: u = "from-[#fff]",
            } = t,
            { emojis: b } = (0, r.k)(),
            [f, h] = (0, i.useState)(!1),
            [_, v] = (0, i.useState)(!1),
            [$, g] = (0, i.useState)(!1),
            [w, j] = (0, i.useState)(!1),
            S = (0, o.I)(),
            E = (0, i.useRef)(null),
            R = (0, i.useRef)(null);
          (0, i.useEffect)(() => {
            let t = () => {
                if (R.current) {
                  let {
                    scrollLeft: t,
                    scrollWidth: e,
                    clientWidth: a,
                  } = R.current;
                  g(t > 0), j(t < e - a);
                }
              },
              e = R.current;
            return (
              e &&
                (t(),
                e.addEventListener("scroll", t),
                window.addEventListener("resize", t)),
              () => {
                e &&
                  (e.removeEventListener("scroll", t),
                  window.removeEventListener("resize", t));
              }
            );
          }, []);
          let N = (t) => {
            var e;
            return (
              (null === (e = a.find((e) => e.interaction_type === t)) ||
              void 0 === e
                ? void 0
                : e.status) === !0
            );
          };
          return (0, x.jsxs)("div", {
            className: (0, n.cn)("relative flex justify-end gap-[6px]", m),
            children: [
              p &&
                (0, x.jsxs)(x.Fragment, {
                  children: [
                    $ &&
                      (0, x.jsx)("div", {
                        className: (0, n.cn)(
                          "pointer-events-none absolute top-0 bottom-0 left-[-2px] z-10 w-6 bg-gradient-to-r to-transparent",
                          u
                        ),
                      }),
                    w &&
                      (0, x.jsx)("div", {
                        className: (0, n.cn)(
                          "pointer-events-none absolute top-0 bottom-0 z-10 w-6 bg-gradient-to-l to-transparent",
                          u,
                          k ? "right-7" : "right-0"
                        ),
                      }),
                  ],
                }),
              (0, x.jsx)("div", {
                ref: R,
                className: (0, n.cn)(
                  "flex max-h-[26px] min-w-0 gap-[6px]",
                  p
                    ? "flex-nowrap overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    : "flex-wrap overflow-hidden"
                ),
                children: e.map((t) =>
                  (0, x.jsxs)(
                    "div",
                    {
                      className: (0, n.cn)(
                        "flex h-[26px] cursor-pointer items-center gap-[6px] rounded-[8px] px-[6px] py-1",
                        N(t.interaction_type)
                          ? "bg-brand/6 ring-brand/30 ring-1 ring-inset"
                          : "bg-black/3"
                      ),
                      style: { direction: "ltr" },
                      onClick: (e) => {
                        e.stopPropagation(),
                          e.preventDefault(),
                          d(t.interaction_type);
                      },
                      children: [
                        (0, x.jsx)(y.m, {
                          emoji: b.find(
                            (e) => e.interaction_type === t.interaction_type
                          ),
                          className: "h-4 w-4",
                          width: 16,
                          height: 16,
                          triggerType: y.Z.Click,
                          selected: N(t.interaction_type),
                        }),
                        (0, x.jsx)("span", {
                          className: (0, n.cn)(
                            "text-xs font-medium",
                            (N(t.interaction_type), "text-black/95")
                          ),
                          children: t.count,
                        }),
                      ],
                    },
                    t.interaction_type
                  )
                ),
              }),
              k &&
                (0, x.jsx)("div", {
                  className:
                    "flex h-[26px] w-[26px] shrink-0 cursor-pointer items-center justify-center rounded-[8px] bg-black/3 p-1",
                  style: { direction: "ltr" },
                  onClick: (t) => {
                    t.stopPropagation(), t.preventDefault(), h(!f);
                  },
                  onMouseEnter: () => {
                    S || (E.current && clearTimeout(E.current), h(!0));
                  },
                  onMouseLeave: () => {
                    S ||
                      _ ||
                      (E.current = setTimeout(() => {
                        h(!1);
                      }, 100));
                  },
                  children: (0, x.jsx)(s.kpC, {
                    className: "h-4 w-4 text-black/12",
                  }),
                }),
              f &&
                (0, x.jsx)(l, {
                  isOpen: f,
                  className: c,
                  onEmojiSelect: (t) => {
                    d(t.interaction_type), h(!1);
                  },
                  onClose: () => {
                    h(!1);
                  },
                  onMouseEnter: () => {
                    S || (E.current && clearTimeout(E.current), v(!0));
                  },
                  onMouseLeave: () => {
                    S ||
                      (v(!1),
                      (E.current = setTimeout(() => {
                        h(!1);
                      }, 100)));
                  },
                }),
            ],
          });
        };
    },
    3971: (t, e, a) => {
      Promise.resolve().then(a.bind(a, 5821)),
        Promise.resolve().then(a.bind(a, 9710));
    },
    5821: (t, e, a) => {
      "use strict";
      a.d(e, { default: () => F });
      var x = a(5155),
        s = a(5427),
        i = a(2115),
        r = a(4477);
      let o = (0, r.createServerReference)(
          "70c5e629d912d70fed32c3bdeeb5f5ba6f9d082416",
          r.callServer,
          void 0,
          r.findSourceMapURL,
          "reportStatsProjectIncr"
        ),
        n = (0, r.createServerReference)(
          "40a9f7c9d3c0b1b945836e6893d81fdc8a1469fc19",
          r.callServer,
          void 0,
          r.findSourceMapURL,
          "viewProject"
        );
      var y = a(6389),
        l = a(565),
        m = a(6846),
        c = a(8834),
        d = a.n(c),
        k = a(5695),
        p = a(7928),
        u = a(2919),
        b = a(165),
        f = a(750),
        h = a(191),
        _ = a(4821),
        v = a(6139),
        $ = a(1884);
      let g = JSON.parse(
        '{"nm":"newScene","ddd":0,"h":30,"w":30,"meta":{"g":"SVG to Lottie v0.15.1-0.6.0"},"layers":[{"ty":4,"nm":"","sr":1,"st":0,"op":85,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"nm":"","it":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[-0.7749000000000006,-0.44858],[0,0],[0,-0.892100000000001],[0,0],[0.7719999999999985,-0.4469999999999992],[0,0],[0.774799999999999,0.448599999999999],[0,0],[0,0.8920999999999992],[0,0],[-0.7720500000000006,0.44697999999999993],[0,0]],"o":[[0.774799999999999,-0.44858],[0,0],[0.7719999999999985,0.44697999999999993],[0,0],[0,0.8920999999999992],[0,0],[-0.7749000000000006,0.448599999999999],[0,0],[-0.7720500000000006,-0.4469999999999992],[0,0],[0,-0.892100000000001],[0,0],[0,0]],"v":[[13.7474,1.97706],[16.2526,1.97706],[25.6276,7.40469],[26.875,9.56826],[26.875,20.4355],[25.6276,22.5991],[16.2526,28.0267],[13.7474,28.0267],[4.37241,22.5991],[3.125,20.4355],[3.125,9.56826],[4.37241,7.40469],[13.7474,1.97706]]}}},{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,-0.4815000000000005],[0,0],[-0.7720500000000001,-0.4469999999999992],[0,0],[0,0.4815000000000005],[0,0],[0.7720000000000002,0.4469999999999992],[0,0]],"o":[[-0.4166699999999999,-0.24126000000000047],[0,0],[0,0.8920999999999992],[0,0],[0.41660000000000075,0.2411999999999992],[0,0],[0,-0.8920000000000012],[0,0],[0,0]],"v":[[6.56315,10.1174],[5.625,10.6583],[5.625,18.9941],[6.87241,21.1577],[14.0619,25.32],[15,24.7791],[15,16.4432],[13.7526,14.2797],[6.56315,10.1174]]}}},{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0.5978999999999992,-0.3451599999999999],[-0.5979000000000028,-0.3451499999999994],[-0.5978999999999992,0.3451700000000013],[0.5978999999999992,0.3451599999999999]],"o":[[-0.5978999999999992,-0.3451599999999999],[-0.5979000000000028,0.3451599999999999],[0.5978999999999992,0.3451700000000013],[0.5978999999999992,-0.3451499999999994],[0,0]],"v":[[19.7101,6.89832],[17.545,6.89832],[17.545,8.14824],[19.7101,8.14824],[19.7101,6.89832]]}}},{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0.597900000000001,-0.3451599999999999],[-0.597859999999999,-0.345159999999999],[-0.597900000000001,0.3451700000000013],[0.5978999999999992,0.3451500000000003]],"o":[[-0.597900000000001,-0.3451599999999999],[-0.597859999999999,0.3451500000000003],[0.597900000000001,0.3451700000000013],[0.5978999999999992,-0.345159999999999],[0,0]],"v":[[12.4603,6.89837],[10.2952,6.89837],[10.2952,8.14829],[12.4603,8.14829],[12.4603,6.89837]]}}},{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[-0.00009999999999976694,0.8628999999999998],[0.7472999999999992,-0.4314999999999998],[0,-0.8628999999999998],[-0.7471999999999994,0.4314999999999998]],"o":[[0.7472999999999992,-0.4314999999999998],[0,-0.8629999999999995],[-0.7471999999999994,0.4314999999999998],[0,0.8629999999999995],[0,0]],"v":[[21.2406,19.8083],[22.5937,17.4646],[21.2407,16.6833],[19.8876,19.0271],[21.2406,19.8083]]}}},{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0.000030000000000640625,0.6904000000000003],[0.5978499999999993,0.34529999999999994],[-0.000030000000000640625,-0.6904000000000003],[-0.5978500000000002,-0.3452000000000002]],"o":[[0.5978500000000002,0.34529999999999994],[-0.000019999999999242846,-0.6904000000000003],[-0.5978599999999998,-0.3452000000000002],[0.000019999999999242846,0.6904000000000003],[0,0]],"v":[[7.95775,15.2522],[9.04022,14.6272],[7.95767,12.7522],[6.8752,13.3772],[7.95775,15.2522]]}}},{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0.5977999999999994,0.3451999999999984],[0,0.6903000000000006],[-0.597900000000001,-0.34520000000000195],[0,-0.6904000000000003]],"o":[[0,0.6904000000000003],[-0.597900000000001,-0.34520000000000195],[0,-0.6904000000000003],[0.5977999999999994,0.3451999999999984],[0,0]],"v":[[13.3689,22.1246],[12.2864,22.7495],[11.2038,20.8745],[12.2863,20.2495],[13.3689,22.1246]]}}},{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0.5978500000000002,0.3451999999999984],[0.000019999999999242846,0.690299999999997],[-0.5978599999999998,-0.34520000000000195],[-0.000019999999999242846,-0.6903000000000006]],"o":[[0.000030000000000640625,0.690299999999997],[-0.5978500000000002,-0.34520000000000195],[-0.000030000000000640625,-0.6904000000000003],[0.5978499999999993,0.3451999999999984],[0,0]],"v":[[9.04022,19.626],[7.95775,20.251],[6.8752,18.376],[7.95767,17.751],[9.04022,19.626]]}}},{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0.5978999999999992,0.34520000000000195],[0,0.6904000000000003],[-0.597900000000001,-0.3451000000000004],[0,-0.6903000000000006]],"o":[[0,0.6904000000000003],[-0.5977999999999994,-0.34529999999999816],[0,-0.6904000000000003],[0.5977999999999994,0.3452000000000002],[0,0]],"v":[[13.3682,17.1266],[12.2857,17.7516],[11.2032,15.8766],[12.2857,15.2516],[13.3682,17.1266]]}}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[1,1,1]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[15,15]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[15,15]},"r":{"a":1,"k":[{"o":{"x":0.34,"y":1.55},"i":{"x":0.65,"y":1},"s":[0],"t":0},{"s":[360],"t":60}]},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":1}],"v":"5.7.0","fr":60,"op":85,"ip":0,"assets":[]}'
      );
      function w(t) {
        var e;
        let {
            project: a,
            handleFullScreen: r,
            onUpdate: o,
            onRoll: n,
            rolling: l,
          } = t,
          {
            emojis: c,
            registerInteractionCallback: w,
            interact: j,
          } = (0, f.k)(),
          [S, E] = (0, i.useState)(null),
          [R, N] = (0, i.useState)(!1),
          { track: A } = (0, y.s)(),
          D = (0, k.useRouter)(),
          { remixAction: V, isRemixing: B } = (0, h.N)(),
          M = (0, i.useRef)(null),
          F = (0, i.useRef)(null),
          L = (null === (e = a.user) || void 0 === e ? void 0 : e.uid) === b.v1;
        (0, i.useEffect)(() => {
          D.prefetch((0, v.$)());
        }, []),
          (0, i.useEffect)(() => {
            w(a.project_id, (t, e) => {
              o(a, e);
            });
          }, [a.project_id, w]),
          (0, i.useEffect)(() => {
            R && E(window.innerWidth <= 440);
          }, [R]),
          (0, i.useEffect)(() => {
            N(!0);
          }, []),
          (0, i.useEffect)(
            () => (
              l && M.current
                ? F.current ||
                  (F.current = d().loadAnimation({
                    container: M.current,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    animationData: g,
                  }))
                : F.current && (F.current.destroy(), (F.current = null)),
              () => {
                F.current && (F.current.destroy(), (F.current = null));
              }
            ),
            [l]
          );
        let P = (t) => {
            var e, x, s, i;
            let r =
              null === (x = a.interaction) || void 0 === x
                ? void 0
                : null ===
                    (e = x.status.find((e) => e.interaction_type === t)) ||
                  void 0 === e
                ? void 0
                : e.status;
            j(a, t, r ? p.f.Cancel : p.f.Add),
              A("emoji_reaction_click", {
                action: r ? "false" : "true",
                project_url: a.project_url,
                emoji: t,
                location: "app_page",
                count:
                  ((null === (i = a.interaction) || void 0 === i
                    ? void 0
                    : null ===
                        (s = i.count.find((e) => e.interaction_type === t)) ||
                      void 0 === s
                    ? void 0
                    : s.count) || 0) + (r ? -1 : 1),
              });
          },
          G = (0, i.useCallback)(async () => {
            if (!a.allow_remix) {
              (0, _.S)({
                title: "Remix Not Supported",
                description: "This project doesn't allow remixing",
                confirmText: "Got it",
                onConfirm: () => {},
              });
              return;
            }
            A("remix_button_click", {
              origin_project_url: a.project_url,
              remix_count: a.remix_count,
              location: "project_page",
              access_control: a.allow_remix ? "allowed" : "not_allowed",
            }),
              await V(a.project_id, "remix");
          }, [V]),
          I = () =>
            (0, x.jsx)("div", { className: "h-[16px] w-[1px] bg-black/6" });
        return R && null !== S
          ? (0, x.jsxs)("div", {
              className: (0, m.cn)(
                "bg-body flex h-12 w-full max-w-full flex-row items-center justify-between gap-4 overflow-visible px-4",
                S && "h-[72px] border-t border-black/6"
              ),
              children: [
                (0, x.jsxs)("div", {
                  id: "left-container",
                  className: "flex flex-1 shrink-0 flex-row items-center gap-2",
                  children: [
                    (0, x.jsxs)("a", {
                      id: "logo-container",
                      className:
                        "flex cursor-pointer flex-row items-center gap-1",
                      onClick: () => {
                        A("app_watermark_button_click", {
                          project_url: a.project_url,
                        }),
                          D.push((0, v.$)());
                      },
                      children: [
                        (0, x.jsx)("img", {
                          src: "/icons/logo.svg",
                          alt: "Logo",
                          className: "text-brand h-6 w-6",
                        }),
                        (0, x.jsx)("div", {
                          className:
                            "text-base leading-5 text-black/95 max-[400px]:hidden",
                          children: "YouWare",
                        }),
                      ],
                    }),
                    !L && !S && I(),
                    !L &&
                      !S &&
                      (() => {
                        var t, e;
                        let s = (0, v.$)();
                        return (0, x.jsxs)("div", {
                          id: "user-container",
                          className:
                            "flex cursor-pointer flex-row items-center gap-2",
                          onClick: () => {
                            var t;
                            D.push(
                              ""
                                .concat(s, "/profile/")
                                .concat(
                                  null === (t = a.user) || void 0 === t
                                    ? void 0
                                    : t.uid
                                )
                            ),
                              A("app_creator_info_click", {
                                project_url: a.project_url,
                              });
                          },
                          children: [
                            (0, x.jsx)("img", {
                              src:
                                null === (t = a.user) || void 0 === t
                                  ? void 0
                                  : t.photo_url,
                              alt: "",
                              className:
                                "h-5 w-5 rounded-full bg-gray-200 object-cover",
                            }),
                            !S &&
                              (0, x.jsx)("div", {
                                className: "text-xs font-medium text-black/95",
                                children:
                                  null === (e = a.user) || void 0 === e
                                    ? void 0
                                    : e.display_name,
                              }),
                          ],
                        });
                      })(),
                  ],
                }),
                (0, x.jsx)("div", {
                  className: (0, m.cn)(
                    "hover:bg-brand border-brand text-brand absolute left-1/2 z-10 flex h-[36px] w-[86px] -translate-x-1/2 transform cursor-pointer items-center justify-center rounded-[12px] border hover:text-white",
                    l && "bg-brand text-white",
                    S &&
                      "bg-brand h-[48px] w-[96px] rounded-[16px] border-none text-white shadow-[0px_8px_20px_0px_rgba(55,67,45,0.30)] active:bg-[#44503B] active:shadow-none"
                  ),
                  onClick: () => {
                    n(a);
                  },
                  children: (0, x.jsx)("div", {
                    className: "flex items-center gap-1",
                    children: l
                      ? (0, x.jsx)("div", {
                          ref: M,
                          style: {
                            width: S ? "28px" : "20px",
                            height: S ? "28px" : "20px",
                          },
                        })
                      : (0, x.jsx)(s.OB8, {
                          className: (0, m.cn)(
                            "h-5 w-5",
                            S && "h-[28px] w-[28px]"
                          ),
                        }),
                  }),
                }),
                (0, x.jsxs)("div", {
                  className:
                    "flex min-w-0 flex-1 items-center justify-end gap-2",
                  children: [
                    !L &&
                      (0, x.jsxs)("div", {
                        className: "ml-auto flex shrink-0 items-center gap-2",
                        children: [
                          (0, x.jsxs)("div", {
                            id: "view-count-container",
                            className: "flex flex-row items-center gap-1",
                            children: [
                              (0, x.jsx)(s.tLq, {
                                className: (0, m.cn)(
                                  "h-3 w-3 text-black/30",
                                  S && "h-4 w-4"
                                ),
                              }),
                              (0, x.jsx)("div", {
                                id: "view-count-text",
                                className: (0, m.cn)(
                                  "text-xs font-medium tracking-tighter text-black/30",
                                  S && "text-[14px]"
                                ),
                                children: (0, $.Z)(a.view_count || 0),
                              }),
                            ],
                          }),
                          !S && I(),
                        ],
                      }),
                    !L &&
                      !S &&
                      (0, x.jsx)("div", {
                        className: "min-w-0",
                        children: (() => {
                          var t, e;
                          let s =
                            (null === (t = a.interaction) || void 0 === t
                              ? void 0
                              : t.count.filter((t) => t.count > 0)) || [];
                          return (0, x.jsx)("div", {
                            id: "emoji-container",
                            className: "relative flex flex-row items-center",
                            children: (0, x.jsx)(u.d, {
                              className: "w-full min-w-0 items-center",
                              emojiCounts: s,
                              emojiStatuses:
                                (null === (e = a.interaction) || void 0 === e
                                  ? void 0
                                  : e.status) || [],
                              scrollable: !0,
                              showAddButton:
                                (null == s ? void 0 : s.length) != c.length,
                              pickerClassName: "top-[-50px] right-[-8px]",
                              fromMask: "from-[#f6f4f1]",
                              onEmojiClick: (t) => {
                                P(t);
                              },
                            }),
                          });
                        })(),
                      }),
                    !S &&
                      (0, x.jsxs)("div", {
                        className: "flex shrink-0 items-center gap-2",
                        children: [
                          !L && I(),
                          !L &&
                            (0, x.jsx)("button", {
                              className: (0, m.cn)(
                                "flex h-8 w-8 cursor-pointer flex-row items-center justify-center rounded-[10px] border border-black/6 text-black/95 hover:border-none hover:bg-black/6",
                                !a.allow_remix && "opacity-30 hover:opacity-30"
                              ),
                              onClick: G,
                              disabled: B,
                              children: B
                                ? (0, x.jsx)(s.xNY, {
                                    className:
                                      "h-4 w-4 animate-spin text-black/95",
                                  })
                                : (0, x.jsx)(s.xP3, {
                                    className: "h-4 w-4 text-black/95",
                                  }),
                            }),
                          !S &&
                            (0, x.jsx)("div", {
                              id: "full-screen-button",
                              className:
                                "flex h-8 w-8 cursor-pointer items-center justify-center rounded-[10px] border border-black/6 hover:border-none hover:bg-black/6",
                              onClick: r,
                              children: (0, x.jsx)(s.nHt, {
                                className: "h-4 w-4",
                                color: "black",
                              }),
                            }),
                        ],
                      }),
                  ],
                }),
              ],
            })
          : (0, x.jsx)("div", {
              className: (0, m.cn)(
                "flex h-12 w-full max-w-full flex-row items-center justify-between gap-4 px-4",
                S && "px-6"
              ),
            });
      }
      let j = JSON.parse(
        '{"nm":"Comp 2","ddd":0,"h":500,"w":500,"meta":{"g":"@lottiefiles/toolkit-js 0.33.2"},"layers":[{"ty":0,"nm":"1","sr":1,"st":-239.00000973467,"op":341.000013889215,"ip":-239.00000973467,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":1},{"ty":0,"nm":"1","sr":1,"st":-267.000010875133,"op":313.000012748751,"ip":-267.000010875133,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":2},{"ty":0,"nm":"1","sr":1,"st":-365.000014866755,"op":215.000008757129,"ip":-365.000014866755,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":3},{"ty":0,"nm":"1","sr":1,"st":-347.0000141336,"op":233.000009490284,"ip":-347.0000141336,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":4},{"ty":0,"nm":"1","sr":1,"st":-319.000012993136,"op":261.000010630748,"ip":-319.000012993136,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":5},{"ty":0,"nm":"1","sr":1,"st":-290.000011811942,"op":290.000011811942,"ip":-290.000011811942,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":6},{"ty":0,"nm":"1","sr":1,"st":-308.000012545097,"op":272.000011078787,"ip":-308.000012545097,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":7},{"ty":0,"nm":"1","sr":1,"st":-342.000013929946,"op":238.000009693939,"ip":-342.000013929946,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":8},{"ty":0,"nm":"1","sr":1,"st":-326.000013278252,"op":254.000010345632,"ip":-326.000013278252,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":9},{"ty":0,"nm":"1","sr":1,"st":-302.000012300712,"op":278.000011323172,"ip":-302.000012300712,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":10},{"ty":0,"nm":"1","sr":1,"st":-251.00001022344,"op":329.000013400445,"ip":-251.00001022344,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":11},{"ty":0,"nm":"1","sr":1,"st":-291.000011852673,"op":289.000011771211,"ip":-291.000011852673,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":12},{"ty":0,"nm":"1","sr":1,"st":-281.000011445365,"op":299.00001217852,"ip":-281.000011445365,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":13},{"ty":0,"nm":"1","sr":1,"st":-240.0000097754,"op":340.000013848484,"ip":-240.0000097754,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":14},{"ty":0,"nm":"1","sr":1,"st":-269.000010956595,"op":311.00001266729,"ip":-269.000010956595,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":15},{"ty":0,"nm":"1","sr":1,"st":-230.000009368092,"op":350.000014255792,"ip":-230.000009368092,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":16},{"ty":0,"nm":"1","sr":1,"st":-192.00000782032,"op":388.000015803564,"ip":-192.00000782032,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":17},{"ty":0,"nm":"1","sr":1,"st":-209.000008512745,"op":371.00001511114,"ip":-209.000008512745,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":18},{"ty":0,"nm":"1","sr":1,"st":-169.000006883511,"op":411.000016740373,"ip":-169.000006883511,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,37.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    0,\\n    x\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":19},{"ty":0,"nm":"1","sr":1,"st":-149.000006068894,"op":431.00001755499,"ip":-149.000006068894,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[250,12.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,12.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":500,"h":25,"refId":"comp_0","ind":20}],"v":"5.5.9","fr":29.9700012207031,"op":150.000006109625,"ip":0,"assets":[{"nm":"","id":"comp_0","layers":[{"ty":3,"nm":"Null 1","sr":1,"st":0,"op":633.000025782619,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250,250,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":0,"ix":11}},"ef":[],"ind":1},{"ty":4,"nm":"Shape Layer 20","sr":1,"st":127.000005172816,"op":536.000021831728,"ip":127.000005172816,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":127},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":132.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":138.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":144.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":150.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":156.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":162.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":168.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":174.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":180.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":186.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":192.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":198.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":204.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":210.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":216.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":222.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":228.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":234.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":240.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":246.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":252.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":258.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":264.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":270.856},{"s":[0],"t":276.00001124171}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":2,"parent":1},{"ty":4,"nm":"Shape Layer 19","sr":1,"st":141.000005743048,"op":550.000022401959,"ip":141.000005743048,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":141},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":146.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":152.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":158.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":164.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":170.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":176.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":182.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":188.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":194.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":200.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":206.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":212.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":218.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":224.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":230.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":236.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":242.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":248.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":254.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":260.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":266.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":272.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":278.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":284.856},{"s":[0],"t":290.000011811942}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":3,"parent":1},{"ty":4,"nm":"Shape Layer 18","sr":1,"st":192.00000782032,"op":601.000024479232,"ip":192.00000782032,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":192},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":197.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":203.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":209.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":215.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":221.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":227.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":233.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":239.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":245.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":251.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":257.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":263.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":269.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":275.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":281.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":287.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":293.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":299.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":305.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":311.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":317.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":323.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":329.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":335.856},{"s":[0],"t":341.000013889215}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":4,"parent":1},{"ty":4,"nm":"Shape Layer 17","sr":1,"st":72.0000029326201,"op":481.000019591532,"ip":72.0000029326201,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":72},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":77.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":83.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":89.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":95.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":101.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":107.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":113.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":119.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":125.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":131.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":137.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":143.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":149.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":155.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":161.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":167.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":173.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":179.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":185.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":191.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":197.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":203.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":209.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":215.856},{"s":[0],"t":221.000009001515}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":5,"parent":1},{"ty":4,"nm":"Shape Layer 16","sr":1,"st":151.000006150356,"op":560.000022809268,"ip":151.000006150356,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":151},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":156.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":162.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":168.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":174.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":180.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":186.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":192.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":198.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":204.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":210.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":216.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":222.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":228.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":234.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":240.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":246.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":252.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":258.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":264.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":270.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":276.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":282.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":288.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":294.856},{"s":[0],"t":300.00001221925}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":6,"parent":1},{"ty":4,"nm":"Shape Layer 15","sr":1,"st":178.000007250089,"op":587.000023909,"ip":178.000007250089,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":178},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":183.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":189.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":195.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":201.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":207.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":213.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":219.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":225.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":231.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":237.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":243.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":249.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":255.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":261.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":267.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":273.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":279.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":285.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":291.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":297.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":303.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":309.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":315.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":321.856},{"s":[0],"t":327.000013318983}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":7,"parent":1},{"ty":4,"nm":"Shape Layer 14","sr":1,"st":196.000007983244,"op":605.000024642155,"ip":196.000007983244,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":196},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":201.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":207.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":213.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":219.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":225.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":231.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":237.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":243.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":249.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":255.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":261.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":267.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":273.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":279.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":285.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":291.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":297.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":303.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":309.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":315.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":321.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":327.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":333.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":339.856},{"s":[0],"t":345.000014052138}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":8,"parent":1},{"ty":4,"nm":"Shape Layer 13","sr":1,"st":129.000005254278,"op":538.000021913189,"ip":129.000005254278,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":129},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":134.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":140.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":146.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":152.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":158.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":164.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":170.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":176.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":182.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":188.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":194.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":200.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":206.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":212.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":218.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":224.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":230.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":236.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":242.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":248.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":254.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":260.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":266.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":272.856},{"s":[0],"t":278.000011323172}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":9,"parent":1},{"ty":4,"nm":"Shape Layer 12","sr":1,"st":0,"op":409.000016658911,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":0},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":5.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":11.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":17.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":23.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":29.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":35.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":41.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":47.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":53.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":59.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":65.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":71.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":77.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":83.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":89.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":95.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":101.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":107.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":113.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":119.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":125.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":131.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":137.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":143.856},{"s":[0],"t":149.000006068894}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":10,"parent":1},{"ty":4,"nm":"Shape Layer 11","sr":1,"st":41.0000016699642,"op":450.000018328876,"ip":41.0000016699642,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":41},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":46.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":52.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":58.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":64.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":70.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":76.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":82.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":88.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":94.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":100.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":106.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":112.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":118.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":124.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":130.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":136.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":142.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":148.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":154.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":160.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":166.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":172.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":178.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":184.856},{"s":[0],"t":190.000007738859}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":11,"parent":1},{"ty":4,"nm":"Shape Layer 10","sr":1,"st":110.000004480392,"op":519.000021139303,"ip":110.000004480392,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":110},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":115.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":121.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":127.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":133.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":139.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":145.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":151.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":157.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":163.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":169.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":175.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":181.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":187.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":193.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":199.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":205.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":211.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":217.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":223.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":229.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":235.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":241.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":247.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":253.856},{"s":[0],"t":259.000010549286}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":12,"parent":1},{"ty":4,"nm":"Shape Layer 9","sr":1,"st":86.0000035028518,"op":495.000020161763,"ip":86.0000035028518,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":86},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":91.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":97.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":103.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":109.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":115.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":121.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":127.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":133.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":139.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":145.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":151.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":157.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":163.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":169.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":175.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":181.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":187.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":193.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":199.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":205.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":211.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":217.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":223.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":229.856},{"s":[0],"t":235.000009571746}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":13,"parent":1},{"ty":4,"nm":"Shape Layer 8","sr":1,"st":110.000004480392,"op":519.000021139303,"ip":110.000004480392,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":110},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":115.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":121.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":127.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":133.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":139.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":145.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":151.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":157.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":163.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":169.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":175.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":181.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":187.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":193.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":199.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":205.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":211.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":217.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":223.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":229.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":235.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":241.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":247.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":253.856},{"s":[0],"t":259.000010549286}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":14,"parent":1},{"ty":4,"nm":"Shape Layer 7","sr":1,"st":140.000005702317,"op":549.000022361228,"ip":140.000005702317,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":140},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":145.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":151.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":157.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":163.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":169.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":175.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":181.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":187.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":193.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":199.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":205.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":211.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":217.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":223.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":229.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":235.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":241.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":247.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":253.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":259.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":265.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":271.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":277.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":283.856},{"s":[0],"t":289.000011771211}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":15,"parent":1},{"ty":4,"nm":"Shape Layer 6","sr":1,"st":184.000007494474,"op":593.000024153385,"ip":184.000007494474,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":184},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":189.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":195.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":201.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":207.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":213.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":219.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":225.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":231.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":237.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":243.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":249.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":255.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":261.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":267.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":273.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":279.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":285.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":291.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":297.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":303.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":309.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":315.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":321.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":327.856},{"s":[0],"t":333.000013563368}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":16,"parent":1},{"ty":4,"nm":"Shape Layer 5","sr":1,"st":191.000007779589,"op":600.000024438501,"ip":191.000007779589,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":191},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":196.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":202.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":208.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":214.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":220.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":226.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":232.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":238.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":244.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":250.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":256.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":262.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":268.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":274.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":280.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":286.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":292.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":298.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":304.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":310.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":316.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":322.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":328.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":334.856},{"s":[0],"t":340.000013848484}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":17,"parent":1},{"ty":4,"nm":"Shape Layer 4","sr":1,"st":197.000008023974,"op":606.000024682886,"ip":197.000008023974,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":197},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":202.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":208.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":214.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":220.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":226.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":232.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":238.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":244.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":250.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":256.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":262.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":268.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":274.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":280.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":286.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":292.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":298.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":304.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":310.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":316.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":322.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":328.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":334.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":340.856},{"s":[0],"t":346.000014092869}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":18,"parent":1},{"ty":4,"nm":"Shape Layer 3","sr":1,"st":173.000007046434,"op":582.000023705346,"ip":173.000007046434,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":173},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":178.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":184.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":190.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":196.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":202.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":208.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":214.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":220.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":226.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":232.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":238.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":244.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":250.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":256.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":262.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":268.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":274.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":280.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":286.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":292.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":298.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":304.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":310.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":316.856},{"s":[0],"t":322.000013115329}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":19,"parent":1},{"ty":4,"nm":"Shape Layer 2","sr":1,"st":148.000006028164,"op":557.000022687075,"ip":148.000006028164,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-212.5,-237.5,0],"ix":2,"x":"var $bm_rt;\\nvar x;\\nx = $bm_mul($bm_sub(index, 1), 25);\\n$bm_rt = $bm_sum(value, [\\n    x,\\n    0\\n]);"},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":148},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":153.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":159.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":165.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":171.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":177.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":183.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":189.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":195.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":201.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":207.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":213.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":219.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":225.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":231.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":237.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":243.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":249.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":255.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":261.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":267.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":273.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":279.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":285.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":291.856},{"s":[0],"t":297.000012097058}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":20,"parent":1},{"ty":4,"nm":"Shape Layer 1","sr":1,"st":153.000006231818,"op":633.000025782619,"ip":153.000006231818,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = transform.opacity;\\n$bm_rt = [\\n    temp,\\n    temp\\n];"},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-237.5,-237.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0,"y":0},"i":{"x":0.363,"y":-2.635},"s":[0],"t":153},{"o":{"x":0.282,"y":-1.608},"i":{"x":0.618,"y":0.157},"s":[17.191],"t":158.994},{"o":{"x":0.305,"y":-0.194},"i":{"x":0.64,"y":0.582},"s":[0],"t":164.988},{"o":{"x":0.315,"y":-1.112},"i":{"x":0.649,"y":-0.648},"s":[59.655],"t":170.983},{"o":{"x":0.32,"y":1.54},"i":{"x":0.654,"y":-0.107},"s":[40.08],"t":176.976},{"o":{"x":0.323,"y":-0.384},"i":{"x":0.657,"y":1.35},"s":[20.988],"t":182.97},{"o":{"x":0.326,"y":0.275},"i":{"x":0.659,"y":0.701},"s":[72.393],"t":188.964},{"o":{"x":0.327,"y":1.757},"i":{"x":0.661,"y":1.023},"s":[10.196],"t":194.958},{"o":{"x":0.329,"y":0.005},"i":{"x":0.663,"y":0.842},"s":[0],"t":200.953},{"o":{"x":0.33,"y":-0.154},"i":{"x":0.664,"y":1.644},"s":[49.309],"t":206.946},{"o":{"x":0.331,"y":0.339},"i":{"x":0.665,"y":0.651},"s":[0],"t":212.94},{"o":{"x":0.332,"y":-2.054},"i":{"x":0.666,"y":0.432},"s":[92.254],"t":218.934},{"o":{"x":0.333,"y":0.136},"i":{"x":0.667,"y":1.493},"s":[76.733],"t":224.928},{"o":{"x":0.334,"y":2.836},"i":{"x":0.668,"y":1.432},"s":[12.192],"t":230.923},{"o":{"x":0.335,"y":-0.162},"i":{"x":0.669,"y":1.374},"s":[23.447],"t":236.916},{"o":{"x":0.336,"y":0.214},"i":{"x":0.67,"y":1.294},"s":[53.813],"t":242.91},{"o":{"x":0.338,"y":16.159},"i":{"x":0.671,"y":1.017},"s":[0],"t":248.904},{"o":{"x":0.339,"y":-0.018},"i":{"x":0.673,"y":-7.044},"s":[0],"t":254.898},{"o":{"x":0.341,"y":8.376},"i":{"x":0.675,"y":-15.035},"s":[0],"t":260.893},{"o":{"x":0.343,"y":16.917},"i":{"x":0.677,"y":5.496},"s":[0],"t":266.886},{"o":{"x":0.347,"y":-4.828},"i":{"x":0.681,"y":-21.564},"s":[0],"t":272.88},{"o":{"x":0.352,"y":24.884},"i":{"x":0.686,"y":10.404},"s":[0],"t":278.874},{"o":{"x":0.362,"y":-10.861},"i":{"x":0.697,"y":9.933},"s":[0],"t":284.868},{"o":{"x":0.388,"y":-3.104},"i":{"x":0.724,"y":-4.753},"s":[0],"t":290.863},{"o":{"x":0.64,"y":-11.458},"i":{"x":1,"y":1},"s":[3.684],"t":296.856},{"s":[0],"t":302.000012300712}],"ix":11,"x":"var $bm_rt;\\n$bm_rt = loopOut();"}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[25,25],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":21,"parent":1}]}]}'
      );
      function S(t) {
        let { isPlaying: e } = t,
          a = (0, i.useRef)(null),
          s = (0, i.useRef)(null);
        return ((0, i.useEffect)(() => {
          if (e && a.current)
            return (
              (a.current.innerHTML = ""),
              (s.current = d().loadAnimation({
                container: a.current,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                animationData: j,
              })),
              () => {
                s.current && (s.current.destroy(), (s.current = null));
              }
            );
          !e && s.current && (s.current.destroy(), (s.current = null));
        }, [e]),
        e)
          ? (0, x.jsx)("div", {
              className:
                "absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-black",
              children: (0, x.jsx)("div", {
                ref: a,
                className:
                  "aspect-square h-[70%] items-center justify-center opacity-30",
                style: { pointerEvents: "none" },
              }),
            })
          : null;
      }
      var E = a(7835),
        R = a(9269);
      function N(t) {
        let { subdomain: e, onVerificationSuccess: a } = t,
          [r, o] = (0, i.useState)(["", "", "", ""]),
          [n, l] = (0, i.useState)("idle"),
          [m, c] = (0, i.useState)(""),
          { track: d } = (0, y.s)();
        (0, i.useEffect)(() => {
          d("verify_passcode_page_show", {
            project_url: window.location.origin,
          });
        }, []);
        let k = (0, i.useRef)([]);
        (0, i.useEffect)(() => {
          k.current[0] && k.current[0].focus();
        }, []);
        let p = (t, e) => {
            if ("Backspace" === t.key && !r[e] && e > 0) {
              var a;
              null === (a = k.current[e - 1]) || void 0 === a || a.focus();
            }
          },
          u = (t, e) => {
            let a = t.target.value;
            if ("" === a || /^[0-9a-zA-Z]$/.test(a)) {
              let t = [...r];
              if (((t[e] = a), o(t), "" !== a && e < 3)) {
                var x;
                null === (x = k.current[e + 1]) || void 0 === x || x.focus();
              }
              "" !== a && 3 === e && t.every((t) => "" !== t) && f(t.join(""));
            }
          },
          b = (t) => {
            t.preventDefault();
            let e = t.clipboardData.getData("text");
            if (/^[0-9a-zA-Z]+$/.test(e)) {
              var a, x;
              let t = e.split(""),
                s = [...r];
              for (let e = 0; e < Math.min(4, t.length); e++) s[e] = t[e];
              if ((o(s), s.every((t) => "" !== t)))
                null === (a = k.current[3]) || void 0 === a || a.focus(),
                  f(s.join(""));
              else {
                let t = s.findIndex((t) => "" === t);
                -1 !== t &&
                  (null === (x = k.current[t]) || void 0 === x || x.focus());
              }
            }
          },
          f = async (t) => {
            l("pending");
            try {
              let x = await (0, E.a)(e, t);
              (null == x ? void 0 : x.verified) &&
              (null == x ? void 0 : x.iframe_url)
                ? (l("success"),
                  d("verify_passcode_success", {
                    project_url: window.location.origin,
                  }),
                  a(null == x ? void 0 : x.iframe_url))
                : (l("error"), c("Code mismatch - verify with the owner"));
            } catch (t) {
              l("error"), c("Verification failed. Please try again.");
            }
          };
        return (0, x.jsxs)("div", {
          className: "min-h-screen",
          children: [
            (0, x.jsx)(R.default, {}),
            (0, x.jsxs)("div", {
              className:
                "flex min-h-[calc(100vh-64px)] flex-col items-center justify-center pb-[15vh]",
              children: [
                (0, x.jsx)("h1", {
                  className:
                    "font-montserrat text-transform-capitalize mb-3 text-[40px] leading-[40px] font-medium",
                  children: "Locked Project",
                }),
                (0, x.jsx)("p", {
                  className: "",
                  children: "A password is required to view this creation",
                }),
                (0, x.jsx)("div", {
                  className: "my-12 flex justify-center space-x-4",
                  children: r.map((t, e) =>
                    (0, x.jsx)(
                      "input",
                      {
                        ref: (t) => {
                          k.current[e] = t;
                        },
                        type: "text",
                        inputMode: "text",
                        autoComplete: "off",
                        maxLength: 1,
                        value: t,
                        onChange: (t) => u(t, e),
                        onKeyDown: (t) => p(t, e),
                        onPaste: 0 === e ? b : void 0,
                        className:
                          "h-24 w-18 rounded-[20px] border-none text-center text-[40px] font-medium [box-shadow:12.171px_4.868px_65.722px_0px_rgba(0,0,0,0.09)] transition-all focus:outline-black",
                        disabled: "pending" === n,
                      },
                      e
                    )
                  ),
                }),
                (0, x.jsxs)("div", {
                  className: "h-6 w-auto",
                  children: [
                    "pending" === n &&
                      (0, x.jsxs)("div", {
                        className: "flex items-center justify-center gap-2",
                        children: [
                          (0, x.jsx)(s.xNY, {
                            className: "h-6 w-6 animate-spin",
                          }),
                          (0, x.jsx)("p", {
                            className: "text-center",
                            children: "Verifying...",
                          }),
                        ],
                      }),
                    "success" === n &&
                      (0, x.jsx)("p", {
                        className: "text-center text-green-600",
                        children: "✨ Access granted!",
                      }),
                    "error" === n &&
                      (0, x.jsx)("p", {
                        className: "text-center text-[#E60023]",
                        children: m,
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let A = (0, r.createServerReference)(
        "6094db7d95bc817cbd363649e3519d549850b71da8",
        r.callServer,
        void 0,
        r.findSourceMapURL,
        "getRandomSelectedProjects"
      );
      var D = a(2801);
      let V = "viewed_projects",
        B = () => {
          try {
            let t = localStorage.getItem(V);
            if (!t) return [];
            let e = JSON.parse(t),
              a = Date.now();
            return e.filter((t) => a - t.timestamp < 36e5).map((t) => t.id);
          } catch (t) {
            return console.error("Error getting viewed projects:", t), [];
          }
        },
        M = (t) => {
          if (t)
            try {
              let e = localStorage.getItem(V),
                a = e ? JSON.parse(e) : [],
                x = Date.now(),
                s = a.filter((t) => x - t.timestamp < 36e5),
                i = s.findIndex((e) => e.id === t);
              i >= 0 ? (s[i].timestamp = x) : s.push({ id: t, timestamp: x }),
                localStorage.setItem(V, JSON.stringify(s));
            } catch (t) {
              console.error("Error saving viewed project:", t);
            }
        };
      function F(t) {
        let {
            projectViewDetail: e,
            subdomain: a,
            screenStatus: r,
            enterFrom: c,
          } = t,
          d = (0, i.useRef)(null),
          [k, p] = (0, i.useState)(c),
          [u, b] = (0, i.useState)(e.iframe_url),
          [f, h] = (0, i.useState)(e.need_passcode && !e.iframe_url),
          { track: _ } = (0, y.s)(),
          {
            isFullScreen: v,
            handleFullScreen: $,
            disableExitFullScreen: g,
          } = (function () {
            let { initialState: t = !1, forceFullScreen: e = !1 } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              [a, x] = (0, i.useState)(t);
            return (
              (0, i.useEffect)(() => {
                let t = (t) => {
                  "Escape" === t.key && a && !e && x(!1);
                };
                return (
                  window.addEventListener("keydown", t),
                  () => {
                    window.removeEventListener("keydown", t);
                  }
                );
              }, [a, e]),
              {
                isFullScreen: a,
                setIsFullScreen: x,
                handleFullScreen: () => {
                  e || x(!a);
                },
                disableExitFullScreen: e,
              }
            );
          })({
            initialState: "force_full" === r || "default_full" === r,
            forceFullScreen: "force_full" === r,
          }),
          {
            rolling: j,
            project: E,
            handleRoll: R,
            handleFinishRoll: V,
            setProject: F,
          } = (function (t) {
            let {
                initialProject: e,
                isLoading: a = !1,
                onProjectChange: x,
                onUrlChange: s,
              } = t,
              [r, o] = (0, i.useState)(!1),
              [n, l] = (0, i.useState)(0),
              [m, c] = (0, i.useState)(e),
              { track: d } = (0, y.s)(),
              k = (0, i.useRef)(null);
            (0, i.useEffect)(
              () => () => {
                k.current && clearTimeout(k.current);
              },
              []
            );
            let p = (t, e) => {
                let a = "";
                try {
                  a = (0, D.A)(e);
                } catch (e) {
                  return console.error("Failed to get subdomain:", e), t;
                }
                if (!a) return console.error("Invalid subdomain extracted"), t;
                try {
                  let e = new URL(t),
                    x = "/project/".concat(a),
                    s = new URL(x, e.origin);
                  return (
                    e.searchParams.forEach((t, e) => {
                      "enter_from" !== e && s.searchParams.set(e, t);
                    }),
                    s.toString()
                  );
                } catch (e) {
                  return console.error("URL construction error:", e), t;
                }
              },
              u = async () => {
                if (r || a) return;
                o(!0),
                  l(Date.now()),
                  k.current && clearTimeout(k.current),
                  (k.current = setTimeout(() => {
                    console.log(
                      "roll timeout (including API and iframe load), auto stop"
                    ),
                      o(!1);
                  }, 5e3));
                let t = B();
                d("app_page_random_button_click", {
                  project_url: m.project_url,
                });
                let e = await A(t);
                if (!k.current) {
                  console.log(
                    "API request completed but timeout already occurred"
                  );
                  return;
                }
                if (e.data && e.data.projects.length > 0) {
                  let t = e.data.projects[0],
                    a = { ...t, need_passcode: !1 };
                  c(a),
                    x && x(a),
                    s && t.iframe_url && s(t.iframe_url),
                    t.project_id && M(t.project_id);
                } else
                  o(!1),
                    k.current && (clearTimeout(k.current), (k.current = null));
              };
            return {
              rolling: r,
              project: m,
              handleRoll: u,
              handleFinishRoll: () => {
                let t = Date.now() - n;
                if (
                  (k.current && (clearTimeout(k.current), (k.current = null)),
                  !m.project_url)
                ) {
                  o(!1), l(0);
                  return;
                }
                let e = p(window.location.href, m.project_url);
                t > 1e3
                  ? (o(!1), window.history.pushState({}, "", e))
                  : setTimeout(() => {
                      o(!1), window.history.pushState({}, "", e);
                    }, 1e3 - t),
                  l(0);
              },
              setProject: c,
            };
          })({
            initialProject: e,
            isLoading: f,
            onProjectChange: (t) => {
              p("random_button");
            },
            onUrlChange: (t) => {
              b(t);
            },
          });
        return ((0, i.useEffect)(() => {
          let t = async () => {
            let t = await n(a);
            b((null == t ? void 0 : t.iframe_url) || ""), h(!1);
          };
          e.need_passcode && !e.iframe_url && t();
        }, [e.need_passcode, e.iframe_url]),
        (0, i.useEffect)(() => {
          u &&
            (_("app_page_view", { project_url: e.project_url, enter_from: k }),
            (0, l.i)().then((t) => {
              o(e.project_id, "view", t);
            }));
        }, [u]),
        f)
          ? (0, x.jsxs)("div", {
              className:
                "flex min-h-screen flex-col items-center justify-center",
              children: [
                (0, x.jsx)(s.xNY, {
                  className:
                    "mx-auto mb-3 h-10 w-10 animate-spin text-gray-400",
                }),
                (0, x.jsx)("p", {
                  className: "text-sm text-gray-500",
                  children: "Loading...",
                }),
              ],
            })
          : e.need_passcode && !u
          ? (0, x.jsx)(N, {
              subdomain: a,
              onVerificationSuccess: (t) => {
                b(t);
              },
            })
          : (0, x.jsxs)("div", {
              className: "relative flex min-h-screen flex-col overflow-hidden",
              style: { minHeight: "100dvh" },
              children: [
                (0, x.jsx)("div", {
                  className: (0, m.cn)(
                    "relative flex flex-1 overflow-hidden transition-all duration-300 sm:px-2 sm:pt-2",
                    v ? "pb-2" : "pb-[72px] sm:pb-12"
                  ),
                  children: (0, x.jsxs)("div", {
                    className:
                      "relative flex flex-1 overflow-hidden border-black/6 sm:rounded-lg sm:border",
                    children: [
                      (0, x.jsx)(S, { isPlaying: j }),
                      (0, x.jsx)("iframe", {
                        ref: d,
                        src: u,
                        className:
                          "flex-1 overflow-hidden transition-all duration-300 ".concat(
                            v ? "!m-0 !rounded-none !border-none" : ""
                          ),
                        loading: "eager",
                        allowFullScreen: !0,
                        seamless: !0,
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; camera; microphone; geolocation; fullscreen; payment",
                        sandbox:
                          "allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation",
                        onLoad: () => {
                          V();
                        },
                      }),
                    ],
                  }),
                }),
                (0, x.jsx)("button", {
                  onClick: $,
                  className:
                    "fixed right-2 bottom-2 z-50 cursor-pointer rounded-[10px] border border-black/12 bg-white p-2 transition-all duration-300 hover:bg-gray-100 ".concat(
                      v && !g
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    ),
                  children: (0, x.jsx)(s.a3o, { className: "h-4 w-4" }),
                }),
                (0, x.jsx)("div", {
                  className:
                    "fixed bottom-0 left-0 z-50 w-full transition-all duration-300 ".concat(
                      v ? "translate-y-full" : "translate-y-0"
                    ),
                  children: (0, x.jsx)(w, {
                    project: E,
                    rolling: j,
                    handleFullScreen: $,
                    onRoll: () => {
                      R();
                    },
                    onUpdate: (t, a) => {
                      F({
                        ...t,
                        need_passcode: e.need_passcode,
                        interaction: a,
                      });
                    },
                  }),
                }),
              ],
            });
      }
    },
    7835: (t, e, a) => {
      "use strict";
      a.d(e, { a: () => s });
      var x = a(4477);
      let s = (0, x.createServerReference)(
        "609f96f93197757e98f3ef53379cb0fd45a3f2d999",
        x.callServer,
        void 0,
        x.findSourceMapURL,
        "verifyPasscode"
      );
    },
    9710: (t, e, a) => {
      "use strict";
      a.d(e, { default: () => o });
      var x = a(5155),
        s = a(6874),
        i = a.n(s);
      a(2115);
      var r = a(9269);
      function o(t) {
        let { error: e = "Something went wrong!", reset: a } = t;
        return (0, x.jsxs)("div", {
          className: "flex min-h-screen flex-col",
          children: [
            (0, x.jsx)(r.default, { hideRight: !0 }),
            (0, x.jsxs)("main", {
              className:
                "mb-20 flex w-full flex-1 flex-col items-center justify-center px-6 sm:px-4",
              children: [
                (0, x.jsx)("h2", {
                  className:
                    "text-center text-[28px]/8 sm:text-[32px]/9 md:text-[40px]/10",
                  children: e,
                }),
                (0, x.jsx)("p", {
                  className:
                    "mt-3 text-center text-sm text-black/45 sm:text-base",
                  children:
                    "Please try again later or contact support if the problem persists.",
                }),
                (0, x.jsxs)("div", {
                  className: "mt-12 flex gap-4 sm:mt-16 md:mt-20",
                  children: [
                    (0, x.jsx)("button", {
                      onClick: () => {
                        a ? a() : window.location.reload();
                      },
                      className:
                        "shine-effect flex h-12 w-36 cursor-pointer items-center justify-center rounded-full bg-black/95 text-sm text-white sm:h-14 sm:w-40 sm:text-base",
                      children: "Try Again",
                    }),
                    (0, x.jsx)(i(), {
                      href: "https://www.youware.com",
                      className:
                        "shine-effect flex h-12 w-36 cursor-pointer items-center justify-center rounded-full border border-black/95 text-sm text-black/95 sm:h-14 sm:w-40 sm:text-base",
                      children: "Go Home",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
  },
  (t) => {
    var e = (e) => t((t.s = e));
    t.O(
      0,
      [
        8823, 8888, 8229, 9066, 9721, 9342, 770, 7935, 750, 9269, 8441, 1684,
        7358,
      ],
      () => e(3971)
    ),
      (_N_E = t.O());
  },
]);

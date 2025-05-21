"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9269],
  {
    239: (e, t, r) => {
      r.d(t, { I: () => s });
      var a = r(2115);
      let s = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 480,
          [r, s] = (0, a.useState)(e);
        return (
          (0, a.useEffect)(() => {
            let e = () => {
              s(window.innerWidth <= t);
            };
            if ((e(), "undefined" == typeof ResizeObserver))
              return (
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            {
              let t = new ResizeObserver(() => {
                e();
              });
              return (
                t.observe(document.body),
                () => {
                  t.disconnect();
                }
              );
            }
          }, [t]),
          r
        );
      };
    },
    3030: (e, t, r) => {
      r.d(t, {
        SQ: () => u,
        _2: () => x,
        mB: () => f,
        rI: () => c,
        ty: () => d,
      });
      var a = r(5155),
        s = r(5427),
        n = r(2115),
        l = r(6846);
      let o = (0, n.createContext)(void 0),
        i = () => {
          let e = (0, n.useContext)(o);
          if (!e)
            throw Error(
              "DropdownMenu components must be used within a DropdownMenu provider"
            );
          return e;
        },
        c = (e) => {
          let {
              children: t,
              className: r,
              triggerType: s = "click",
              onOpenChange: i,
            } = e,
            [c, d] = (0, n.useState)(!1),
            u = (0, n.useRef)(null),
            x = (0, n.useRef)(null),
            f = (0, n.useRef)(null),
            p = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              if (c) {
                let e = (e) => {
                  var t;
                  !x.current ||
                    x.current.contains(e.target) ||
                    (null === (t = u.current) || void 0 === t
                      ? void 0
                      : t.contains(e.target)) ||
                    (e.stopPropagation(), e.preventDefault(), d(!1));
                };
                return (
                  document.addEventListener("mousedown", e),
                  () => {
                    document.removeEventListener("mousedown", e);
                  }
                );
              }
            }, [c]),
            (0, n.useEffect)(
              () => () => {
                p.current && clearTimeout(p.current);
              },
              []
            ),
            (0, n.useEffect)(() => {
              null == i || i(c);
            }, [c, i]),
            (0, a.jsx)(o.Provider, {
              value: {
                isOpen: c,
                setIsOpen: d,
                triggerRef: u,
                menuRef: x,
                triggerType: s,
              },
              children: (0, a.jsx)("div", {
                ref: f,
                className: (0, l.cn)("relative", r),
                onMouseLeave:
                  "hover" === s
                    ? () => {
                        p.current = setTimeout(() => {
                          d(!1);
                        }, 200);
                      }
                    : void 0,
                onMouseEnter:
                  "hover" === s
                    ? () => {
                        p.current &&
                          (clearTimeout(p.current), (p.current = null));
                      }
                    : void 0,
                children: t,
              }),
            })
          );
        },
        d = (e) => {
          let { children: t, className: r } = e,
            { setIsOpen: s, triggerRef: n, triggerType: o } = i();
          return (0, a.jsx)("div", {
            ref: n,
            className: (0, l.cn)("cursor-pointer", r),
            onClick: (e) => {
              e.stopPropagation(), e.preventDefault(), s(!0);
            },
            onMouseEnter: () => {
              "hover" === o && s(!0);
            },
            children: t,
          });
        },
        u = (e) => {
          let { children: t, className: r } = e,
            { isOpen: s, menuRef: n } = i();
          return s
            ? (0, a.jsx)("div", {
                ref: n,
                className: (0, l.cn)(
                  "absolute z-50 space-y-1 rounded-[10px] bg-white p-1 shadow-[0px_0px_10px_4px_rgba(0,0,0,0.06)]",
                  r
                ),
                children: t,
              })
            : null;
        },
        x = (e) => {
          let {
              className: t,
              icon: r,
              label: o,
              rightBlock: c,
              disabled: d,
              children: u,
              onClick: x,
            } = e,
            { setIsOpen: f } = i(),
            [p, m] = (0, n.useState)(!1);
          return (0, a.jsx)("div", {
            className: (0, l.cn)(
              "flex h-[30px] cursor-pointer items-center justify-between gap-2 rounded-[8px] px-2 hover:bg-black/3",
              d && "cursor-not-allowed text-black/30",
              t
            ),
            onClick: async (e) => {
              if ((e.stopPropagation(), e.preventDefault(), !d))
                try {
                  m(!0), await x(e), m(!1), f(!1);
                } catch (e) {
                  m(!1);
                }
            },
            children:
              u ||
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      r &&
                        (p
                          ? (0, a.jsx)(s.xNY, {
                              className: "h-4 w-4 animate-spin",
                            })
                          : (0, a.jsx)(r, { className: "h-4 w-4" })),
                      (0, a.jsx)("span", {
                        className: "text-[14px] whitespace-nowrap",
                        style: { letterSpacing: "-0.4px" },
                        children: o,
                      }),
                    ],
                  }),
                  c,
                ],
              }),
          });
        },
        f = (e) => {
          let { className: t } = e;
          return (0, a.jsx)("div", {
            className: (0, l.cn)("my-1 h-[1px] w-full bg-black/6 px-2", t),
          });
        };
    },
    6846: (e, t, r) => {
      r.d(t, { cn: () => n });
      var a = r(2596),
        s = r(9688);
      function n() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, s.QP)((0, a.$)(t));
      }
    },
    7023: (e, t, r) => {
      r.d(t, { Z: () => i, m: () => c });
      var a = r(5155),
        s = r(8834),
        n = r.n(s),
        l = r(2115),
        o = r(750),
        i = (function (e) {
          return (e.Hover = "hover"), (e.Click = "click"), (e.None = "none"), e;
        })({});
      let c = (e) => {
        let {
            emoji: t,
            className: r,
            width: s = 20,
            height: i = 20,
            selected: c = !1,
            triggerType: d = "hover",
            ...u
          } = e,
          x = (0, l.useRef)(null),
          [f, p] = (0, l.useState)(!1),
          m = (0, l.useRef)(null),
          { getLottieData: h } = (0, o.k)(),
          v = (0, l.useRef)(""),
          [b, j] = (0, l.useState)(!1),
          g = (0, l.useCallback)(() => {
            m.current && (m.current.destroy(), (m.current = null)), j(!1);
          }, []),
          w = (0, l.useCallback)(
            function () {
              let e =
                !(arguments.length > 0) ||
                void 0 === arguments[0] ||
                arguments[0];
              if (!x.current || !(null == t ? void 0 : t.lottie)) return;
              if (t.lottie === v.current && m.current) {
                j(!0);
                return;
              }
              (v.current = t.lottie), g();
              let r = h(t.lottie);
              (m.current = n().loadAnimation({
                container: x.current,
                renderer: "svg",
                loop: e,
                autoplay: !0,
                ...(r ? { animationData: r } : { path: t.lottie }),
              })),
                m.current.addEventListener("DOMLoaded", () => {
                  j(!0);
                }),
                m.current.addEventListener("error", g);
            },
            [null == t ? void 0 : t.lottie, h, g]
          );
        (0, l.useEffect)(() => {
          "hover" === d && (f ? w() : g());
        }, [f, w, g, d]),
          (0, l.useEffect)(() => {
            "click" === d && (c ? w(!1) : g());
          }, [c, w, g, d]),
          (0, l.useEffect)(() => g, [g]);
        let y = ""
            .concat(null == t ? void 0 : t.interaction_type, "-")
            .concat(s, "-")
            .concat(i),
          k = () => "none" !== d && ("hover" === d ? f : "click" === d && c);
        return (0, a.jsx)("div", {
          className: r,
          ...u,
          onMouseEnter: () => p(!0),
          onMouseLeave: () => p(!1),
          children: (0, a.jsxs)("div", {
            style: { position: "relative", width: s, height: i },
            children: [
              (0, a.jsx)("div", {
                ref: x,
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: s,
                  height: i,
                  opacity: b && k() ? 1 : 0,
                  zIndex: 1,
                },
              }),
              (0, a.jsx)("div", {
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: s,
                  height: i,
                  opacity: b && k() ? 0 : 1,
                },
                children: (null == t ? void 0 : t.icon)
                  ? (0, a.jsx)(
                      "img",
                      {
                        src: t.icon,
                        alt: (null == t ? void 0 : t.display_name) || "",
                        width: s,
                        height: i,
                        style: { width: s, height: i },
                      },
                      y
                    )
                  : null,
              }),
            ],
          }),
        });
      };
    },
    7606: (e, t, r) => {
      r.d(t, { A: () => o });
      var a = r(5155),
        s = r(2115),
        n = r(6389),
        l = r(6846);
      let o = (e) => {
        let { className: t, hoverAlign: r = "center", points: o } = e,
          [i, c] = (0, s.useState)(!1),
          d = (0, s.useRef)(null),
          { track: u } = (0, n.s)(),
          [x, f] = (0, s.useState)(0);
        return (
          (0, s.useEffect)(() => {
            d.current && f(d.current.offsetWidth);
          }, [d.current]),
          (0, s.useEffect)(() => {
            u("knot_num_show", { knot_num: o });
          }, [o]),
          (0, a.jsxs)("div", {
            className: (0, l.cn)("relative inline-block", t),
            children: [
              i &&
                (0, a.jsxs)("div", {
                  className: (0, l.cn)(
                    "absolute bottom-full z-10 mb-3 w-[280px] rounded-[12px] bg-white p-4 shadow-lg",
                    "left" === r ? "left-0" : "left-1/2 -translate-x-1/2"
                  ),
                  children: [
                    (0, a.jsxs)("div", {
                      className: "text-[12px] text-black/65",
                      children: [
                        "Knot is earned through views, emoji reactions, and remixes on your projects—designed to reward creativity and real engagement. Suspicious or inauthentic activity won't count. ",
                        (0, a.jsx)("br", {}),
                        " ",
                        (0, a.jsx)("br", {}),
                        "You’ll be able to cash out your knot in the future.",
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "absolute top-full h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-white",
                      style: {
                        left: "left" === r ? x / 2 : "50%",
                        transform: "translateX(-50%)",
                      },
                    }),
                  ],
                }),
              (0, a.jsxs)("div", {
                ref: d,
                className:
                  "bg-brand/10 flex h-[18px] cursor-pointer items-center gap-0.5 rounded-[4px] px-1",
                onMouseEnter: () => c(!0),
                onMouseLeave: () => c(!1),
                children: [
                  (0, a.jsx)("span", {
                    className: "text-brand text-[12px] font-bold",
                    children: o.toLocaleString("en-US", {
                      maximumFractionDigits: 0,
                    }),
                  }),
                  (0, a.jsx)("span", {
                    className: "text-brand/65 text-[12px]",
                    children: "Knot",
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    8161: (e, t, r) => {
      r.d(t, { A: () => h });
      var a = r(5155),
        s = r(8834),
        n = r.n(s),
        l = r(2115),
        o = (function (e) {
          return (
            (e.Image = "image"),
            (e.Video = "video"),
            (e.Unsupported = "unsupported"),
            e
          );
        })(o || {});
      let i = ["jpg", "jpeg", "png"],
        c = ["mp4"],
        d = (e) => {
          var t, r;
          if (!e || e.includes("placehold.co")) return "image";
          if (!URL.canParse(e)) return "unsupported";
          let a = new URL(e).pathname.split("."),
            s =
              a.length > 1 &&
              null !==
                (r =
                  null === (t = a.pop()) || void 0 === t
                    ? void 0
                    : t.toLowerCase()) &&
              void 0 !== r
                ? r
                : "";
          return c.includes(s)
            ? "video"
            : i.includes(s)
            ? "image"
            : "unsupported";
        },
        u = (e) => {
          let { isLoading: t } = e;
          return (0, a.jsxs)("div", {
            className:
              "flex h-full w-full flex-col items-center justify-center bg-black/3",
            children: [
              (0, a.jsx)("img", {
                src: "/images/failed-image.svg",
                alt: "failed",
                className: "h-[50px] w-[50px]",
              }),
              (0, a.jsx)("div", {
                className: "mt-3 text-[16px] text-black/30",
                children: t
                  ? "No Cover Detected"
                  : "The cover format is wrong.",
              }),
            ],
          });
        },
        x = () => {
          let e = (0, l.useRef)(null);
          return (
            (0, l.useEffect)(() => {
              if (e.current) {
                let t = n().loadAnimation({
                  container: e.current,
                  renderer: "svg",
                  loop: !0,
                  autoplay: !0,
                  path: "/animations/lottie-task-loading.json",
                });
                return () => {
                  t.destroy();
                };
              }
            }, []),
            (0, a.jsxs)("div", {
              className:
                "flex h-full w-full flex-col items-center justify-center bg-black/3 pb-10",
              children: [
                (0, a.jsx)("div", { ref: e, className: "h-[110px] w-[110px]" }),
                (0, a.jsx)("div", {
                  className: "mt-[-18px] text-[16px] font-normal text-black/30",
                  children: "Uploading...",
                }),
              ],
            })
          );
        },
        f = (0, l.memo)((e) => {
          let { url: t, alt: r, className: s } = e,
            [n, o] = (0, l.useState)(!1);
          return !t || t.includes("placehold.co")
            ? (0, a.jsx)(u, { isLoading: !0 })
            : n
            ? (0, a.jsx)(u, { isLoading: !1 })
            : (0, a.jsx)("div", {
                className: "relative h-full w-full",
                children: (0, a.jsx)("img", {
                  src: t,
                  alt: null != r ? r : "",
                  loading: "lazy",
                  sizes: "100%",
                  width: "100%",
                  height: "100%",
                  className: "h-full w-full bg-black/3 object-cover ".concat(s),
                  onError: () => {
                    o(!0);
                  },
                }),
              });
        });
      f.displayName = "ImageCover";
      let p = (0, l.forwardRef)((e, t) => {
          let { url: r, className: s } = e,
            n = (0, l.useRef)(null),
            [o, i] = (0, l.useState)(!1);
          return (
            (0, l.useEffect)(() => {
              t &&
                "object" == typeof t &&
                (t.current = {
                  play: () => {
                    if (!e.alwaysAnimated) {
                      var t;
                      null === (t = n.current) || void 0 === t || t.play();
                    }
                  },
                  pause: () => {
                    if (!e.alwaysAnimated) {
                      var t;
                      null === (t = n.current) || void 0 === t || t.pause();
                    }
                  },
                });
            }, [e.alwaysAnimated]),
            (0, a.jsx)("div", {
              className:
                "relative h-full w-full overflow-hidden bg-black/3 ".concat(s),
              children: o
                ? (0, a.jsx)(u, { isLoading: !1 })
                : (0, a.jsx)("video", {
                    ref: n,
                    src: r,
                    className: "h-full w-full object-cover",
                    muted: !0,
                    playsInline: !0,
                    loop: !0,
                    controls: !1,
                    autoPlay: e.alwaysAnimated,
                    onError: () => {
                      i(!0);
                    },
                  }),
            })
          );
        }),
        m = (0, l.memo)(
          (0, l.forwardRef)((e, t) => {
            if (e.isUploading) return (0, a.jsx)(x, {});
            switch (d(e.url)) {
              case "image":
                return (0, a.jsx)(f, { ...e });
              case "video":
                return (0, a.jsx)(p, { ...e, ref: t });
              case "unsupported":
                return (0, a.jsx)(u, { isLoading: !1 });
            }
            return null;
          })
        );
      m.displayName = "MediaCover";
      let h = m;
    },
    8538: (e, t, r) => {
      r.d(t, { X: () => a });
      let a = (e, t) => {
        let r = window.location.host.includes("youware.com")
          ? "youware.com"
          : "yourware.so";
        if ("upload" === t) return e.replace(/(youware\.com|yourware\.so)/, r);
        let a = new URLSearchParams();
        t && a.set("enter_from", t);
        let s = a.toString();
        return (
          e.replace(/(youware\.com|yourware\.so)/, r) + (s ? "?".concat(s) : "")
        );
      };
    },
    9269: (e, t, r) => {
      r.r(t), r.d(t, { default: () => B });
      var a = r(5155),
        s = r(5427),
        n = r(6874),
        l = r.n(n),
        o = r(5695),
        i = r(2115),
        c = r(3030),
        d = r(862),
        u = r(239),
        x = r(6139),
        f = r(6846);
      let p = {
          showBanner: () => {
            try {
              let e = localStorage.getItem("banner_close_date");
              if (!e) return !0;
              let t = new Date().toISOString().split("T")[0];
              return e !== t;
            } catch (e) {
              return !1;
            }
          },
          closeBanner: () => {
            try {
              let e = new Date().toISOString().split("T")[0];
              localStorage.setItem("banner_close_date", e);
            } catch (e) {}
          },
        },
        m = (e) => {
          let { showBanner: t = !0, onClose: r } = e,
            [n, l] = (0, i.useState)(!1),
            o = (0, u.I)(!1, 840);
          (0, i.useEffect)(() => {
            l(p.showBanner());
          }, []);
          let c = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              window.open(
                "https://www.youware.com/project/596akdc6od?screen_status=force_full",
                "_blank"
              );
          };
          return t && n
            ? (0, a.jsx)("div", {
                className:
                  "fixed top-0 right-0 left-0 z-[40] flex h-[64px] items-center px-4 min-[840px]:h-[50px]",
                style: {
                  backgroundImage: "url('/banner/retro-bg.png')",
                  backgroundRepeat: "repeat-x",
                  backgroundSize: "contain",
                  backgroundColor: "#3E413C",
                },
                onClick: o ? c : void 0,
                children: (0, a.jsxs)("div", {
                  className:
                    "z-10 flex flex-1 items-center justify-between min-[840px]:justify-center",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, a.jsx)("img", {
                          src: "/banner/retro-logo.png",
                          alt: "Retro Computer",
                          className: "mr-3 h-10 w-10",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "text-[12px] text-white min-[840px]:text-[16px]",
                          children: (0, a.jsxs)("span", {
                            children: [
                              "YouWare Retro Challenge: Build a retro site.",
                              " ",
                              (0, a.jsx)("span", {
                                className: "font-bold min-[840px]:text-[20px]",
                                children: "Win up to $1000.",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "ml-3 flex items-center",
                      children: [
                        !o &&
                          (0, a.jsx)("img", {
                            src: "/banner/retro-btn.png",
                            alt: "Get more info",
                            className:
                              "hidden h-[32px] w-[130px] hover:cursor-pointer hover:opacity-85 min-[840px]:block",
                            onClick: c,
                          }),
                        (0, a.jsx)(s.Qks, {
                          className:
                            "ml-1 h-5 w-5 text-white hover:cursor-pointer hover:opacity-85 min-[840px]:absolute min-[840px]:right-[22px]",
                          onClick: (e) => {
                            e.stopPropagation(),
                              e.preventDefault(),
                              l(!1),
                              p.closeBanner(),
                              r && r();
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : null;
        };
      var h = r(4477);
      let v = (0, h.createServerReference)(
          "00f3bc92f685a0f844c2d09a49c128dfdbbe4dca53",
          h.callServer,
          void 0,
          h.findSourceMapURL,
          "getUnreadCount"
        ),
        b = (0, h.createServerReference)(
          "00c129a22f40e70098856953d0c19e90c003042b7c",
          h.callServer,
          void 0,
          h.findSourceMapURL,
          "markAllAsRead"
        );
      var j = r(6389),
        g = r(2128);
      let w = (0, h.createServerReference)(
        "4098bf77ecf0e98f35cdcf3d1f804470b881e2cedc",
        h.callServer,
        void 0,
        h.findSourceMapURL,
        "getNotifications"
      );
      var y = r(7023),
        k = r(8161),
        N = r(750),
        _ = r(8538),
        S = r(832),
        C = r.n(S),
        E = r(6004),
        R = r.n(E),
        L = r(617),
        z = r.n(L);
      C().extend(R()), C().extend(z());
      let I = (e) => {
        var t, r, s, n, l, o, i, c, d, u;
        let { notification: x } = e,
          { emojis: p } = (0, N.k)(),
          { track: m } = (0, j.s)(),
          h = "official" === x.type,
          v = (e) => {
            e.stopPropagation(),
              window.open("/profile/".concat(x.user.uid), "_blank"),
              m("notification_user_profile_click", {
                user_profile_url: "/user/".concat(x.user.uid),
              });
          },
          b =
            null !==
              (u =
                null !==
                  (d =
                    null === (t = x.project) || void 0 === t
                      ? void 0
                      : t.custom_cover_url) && void 0 !== d
                  ? d
                  : null === (r = x.project) || void 0 === r
                  ? void 0
                  : r.cover_url) && void 0 !== u
              ? u
              : "";
        return (0, a.jsxs)("div", {
          className:
            "flex w-full cursor-pointer items-center gap-2 overflow-visible rounded-[12px] p-4 transition-all hover:bg-black/3",
          onClick: () => {
            if (x.project) {
              let e = (0, _.X)(x.project.project_url, "notification_center");
              window.open(e, "_blank"),
                m("notification_project_cover_click", { project_url: e });
            }
          },
          children: [
            (0, a.jsxs)("div", {
              className: (0, f.cn)(
                "group relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-black/3",
                h ? "" : "cursor-pointer"
              ),
              onClick: h ? void 0 : v,
              children: [
                h
                  ? (0, a.jsx)("img", {
                      src: "/icons/logo-with-bg.svg",
                      alt: "",
                      className: "h-full w-full rounded-full",
                    })
                  : (
                      null === (s = x.user) || void 0 === s
                        ? void 0
                        : s.photo_url
                    )
                  ? (0, a.jsx)("img", {
                      src:
                        null === (n = x.user) || void 0 === n
                          ? void 0
                          : n.photo_url,
                      alt: "",
                      className: "h-full w-full rounded-full",
                    })
                  : (0, a.jsx)("div", {
                      className:
                        "flex h-full w-full items-center justify-center rounded-full bg-black/3 text-[14px] text-black/30",
                      children:
                        (null === (i = x.user) || void 0 === i
                          ? void 0
                          : null === (o = i.display_name) || void 0 === o
                          ? void 0
                          : null === (l = o.charAt(0)) || void 0 === l
                          ? void 0
                          : l.toUpperCase()) || "U",
                    }),
                h
                  ? null
                  : (0, a.jsx)("div", {
                      className:
                        "absolute inset-0 bg-black/12 opacity-0 transition-all group-hover:opacity-100",
                    }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "flex flex-1 flex-shrink-1 flex-col justify-between overflow-x-auto",
              children: [
                (0, a.jsx)("div", {
                  className: (0, f.cn)(
                    "flex items-center gap-2 self-start",
                    h ? "" : "cursor-pointer hover:underline"
                  ),
                  onClick: h ? void 0 : v,
                  children: (0, a.jsx)("div", {
                    children: h ? "YouWare Team" : x.user.display_name,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "no-scrollbar flex w-auto items-center overflow-x-auto text-[12px] text-black/66",
                  children: [
                    h
                      ? (0, a.jsx)("span", {
                          className: "flex-shrink-0",
                          children: x.content,
                        })
                      : "remix" === x.type
                      ? (0, a.jsx)("span", {
                          className: "flex-shrink-0",
                          children: "Remixed your project",
                        })
                      : (0, a.jsxs)("div", {
                          className:
                            "flex flex-shrink-1 items-center overflow-x-auto",
                          children: [
                            (0, a.jsx)("span", {
                              className: "mr-[3px] flex-shrink-0",
                              children: "Reacted:",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "no-scrollbar flex flex-shrink-1 items-center gap-0.5 overflow-scroll",
                              children:
                                null === (c = x.emojis) || void 0 === c
                                  ? void 0
                                  : c.map((e) =>
                                      (0, a.jsx)(
                                        y.m,
                                        {
                                          emoji: p.find(
                                            (t) => t.interaction_type === e
                                          ),
                                          width: 12,
                                          height: 12,
                                        },
                                        e
                                      )
                                    ),
                            }),
                          ],
                        }),
                    (0, a.jsxs)("div", {
                      className: "flex-shrink-0",
                      children: [
                        (0, a.jsx)("span", {
                          className: "mx-2",
                          children: "\xb7",
                        }),
                        (0, a.jsx)("span", {
                          children: (function (e) {
                            let t = C()(e);
                            return t.isToday()
                              ? t.format("HH:mm")
                              : t.format("M/D");
                          })(x.timestamp),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "group relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-[4px] border border-black/3",
              children: [
                b && !b.includes("placehold.co")
                  ? (0, a.jsx)(k.A, {
                      url: b,
                      className: "h-10 w-10 object-cover",
                    })
                  : (0, a.jsx)("div", { className: "h-10 w-10 bg-black/6" }),
                (0, a.jsx)("div", {
                  className:
                    "absolute inset-0 bg-black/12 opacity-0 transition-all group-hover:opacity-100",
                }),
              ],
            }),
          ],
        });
      };
      function A(e) {
        let { onClose: t, hasBanner: r = !1 } = e,
          [n, l] = (0, i.useState)([]),
          [o, c] = (0, i.useState)(!0),
          [d, u] = (0, i.useState)(!1),
          [x, p] = (0, i.useState)(void 0),
          [m, h] = (0, i.useState)(!1),
          v = (0, i.useRef)(null),
          b = (0, i.useRef)(null),
          j = (0, i.useRef)(null),
          y = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
          k();
        }, []),
          (0, i.useEffect)(
            () => (
              (document.body.style.overflow = "hidden"),
              () => {
                document.body.style.overflow = "auto";
              }
            ),
            []
          );
        let k = async () => {
          try {
            c(!0), h(!1);
            let r = await w({ cursor: null != x ? x : "", page_size: 12 });
            if (0 === r.code && r.data) {
              var e, t;
              l((e) => {
                var t;
                return [
                  ...e,
                  ...((null === (t = r.data) || void 0 === t
                    ? void 0
                    : t.notifications) || []),
                ];
              }),
                u(
                  (null === (e = r.data) || void 0 === e
                    ? void 0
                    : e.page_info.has_more) || !1
                ),
                p(
                  (null === (t = r.data) || void 0 === t
                    ? void 0
                    : t.page_info.next_cursor) || void 0
                );
            } else
              g.vF.error("Failed to fetch notifications: ", void 0, r), h(!0);
          } catch (e) {
            g.vF.error("Failed to fetch notifications:", e), h(!0);
          } finally {
            c(!1);
          }
        };
        (0, i.useEffect)(() => {
          if ((b.current && b.current.disconnect(), !j.current || !d || m))
            return;
          let e = new IntersectionObserver(
            (e) => {
              e[0].isIntersecting && !o && d && !m && k();
            },
            { root: y.current, rootMargin: "300px", threshold: 0.2 }
          );
          return (
            e.observe(j.current),
            (b.current = e),
            () => {
              b.current && b.current.disconnect();
            }
          );
        }, [o, d, m]);
        let N = () => {
          k();
        };
        return (0, a.jsxs)("div", {
          className: (0, f.cn)(
            "z-10 flex flex-col items-stretch rounded-[16px] border border-black/3 bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.1)]",
            "absolute top-8 -right-12 m-1 w-[400px]",
            "max-sm:fixed max-sm:right-0 max-sm:bottom-0 max-sm:left-0 max-sm:m-0 max-sm:w-screen max-sm:rounded-b-none",
            r ? "max-sm:top-28" : "max-sm:top-12"
          ),
          children: [
            (0, a.jsx)("div", {
              ref: v,
              className: "fixed top-0 left-0 -z-1 h-full w-full",
              onClick: (e) => {
                e.target === v.current &&
                  (e.stopPropagation(), e.preventDefault(), t());
              },
            }),
            (0, a.jsxs)("div", {
              className: "m-5 mb-2 flex items-start justify-between",
              children: [
                (0, a.jsx)("h3", {
                  className: "text-[20px] font-bold",
                  children: "Notification",
                }),
                (0, a.jsx)(s.Qks, {
                  className: "hover:text-brand h-4 w-4 cursor-pointer",
                  onClick: t,
                }),
              ],
            }),
            (0, a.jsx)(a.Fragment, {
              children:
                0 === n.length
                  ? (0, a.jsx)("div", {
                      className:
                        "mb-2 flex h-36 w-full max-w-full items-center justify-center px-5",
                      children: o
                        ? (0, a.jsx)(s.xNY, {
                            className: "h-6 w-6 animate-spin text-black/65",
                          })
                        : m
                        ? (0, a.jsxs)("button", {
                            onClick: N,
                            className:
                              "border-brand hover:bg-brand/10 flex cursor-pointer items-center gap-2 rounded-[8px] border px-2 py-1 text-[14px]",
                            children: [
                              (0, a.jsx)(s.Ll9, { className: "h-4 w-4" }),
                              (0, a.jsx)("span", { children: "Retry" }),
                            ],
                          })
                        : (0, a.jsx)("p", {
                            className: "text-[12px] text-black/66",
                            children: "You don't have any notifications.",
                          }),
                    })
                  : (0, a.jsxs)("div", {
                      ref: y,
                      className:
                        "mb-2 w-full max-w-full flex-1 space-y-2 overflow-y-scroll px-1 sm:max-h-[min(600px,calc(100vh-240px))]",
                      children: [
                        n.map((e, t) =>
                          (0, a.jsxs)(
                            i.Fragment,
                            {
                              children: [
                                t > 0 &&
                                  e.is_read &&
                                  !n[t - 1].is_read &&
                                  (0, a.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "flex items-center gap-1 p-4 text-[12px] text-black/65",
                                      children: [
                                        (0, a.jsx)("span", {
                                          children: "Earlier",
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "h-px flex-1 bg-black/6",
                                        }),
                                      ],
                                    },
                                    "divider-".concat(t)
                                  ),
                                (0, a.jsx)(I, { notification: e }, e.id),
                              ],
                            },
                            e.id
                          )
                        ),
                        d &&
                          (0, a.jsx)("div", {
                            ref: j,
                            className: "flex items-center justify-center py-4",
                            children: o
                              ? (0, a.jsx)(s.xNY, {
                                  className:
                                    "h-6 w-6 animate-spin text-black/65",
                                })
                              : m
                              ? (0, a.jsxs)("button", {
                                  onClick: N,
                                  className:
                                    "border-brand hover:bg-brand/10 flex cursor-pointer items-center gap-2 rounded-[8px] border px-2 py-1 text-[14px]",
                                  children: [
                                    (0, a.jsx)(s.Ll9, { className: "h-4 w-4" }),
                                    (0, a.jsx)("span", {
                                      children: "Load more",
                                    }),
                                  ],
                                })
                              : (0, a.jsx)("div", { className: "h-4 w-full" }),
                          }),
                      ],
                    }),
            }),
          ],
        });
      }
      function M(e) {
        let { hasBanner: t = !1 } = e,
          [r, n] = (0, i.useState)(!1),
          [l, c] = (0, i.useState)(0),
          { track: u } = (0, j.s)(),
          { user: p } = (0, d.A)(),
          m = (0, o.useRouter)();
        (0, i.useEffect)(() => {
          p &&
            setTimeout(() => {
              h();
            }, 200);
        }, []);
        let h = async () => {
            try {
              var e;
              let t = await v();
              "number" ==
                typeof (null === (e = t.data) || void 0 === e
                  ? void 0
                  : e.unread_count) &&
                (c(t.data.unread_count),
                u("notification_entrance_show", {
                  unread_message_num: t.data.unread_count,
                }));
            } catch (e) {
              g.vF.error("Failed to fetch notification count:", e);
            }
          },
          w = async () => {
            if ((n(!1), l)) {
              c(0);
              try {
                await b();
              } catch (e) {
                g.vF.error("Failed to mark all notifications as read:", e);
              }
            }
          };
        return (0, a.jsxs)("div", {
          className: "relative ml-2",
          children: [
            (0, a.jsxs)("button", {
              className: (0, f.cn)(
                "cursor-pointer rounded-[10px] p-2 transition-all hover:bg-black/3",
                r && "bg-white"
              ),
              onClick: () => {
                if (!p) {
                  let e = (0, x.$)(!0);
                  m.push(
                    ""
                      .concat(e, "/login?returnTo=")
                      .concat(
                        encodeURIComponent(
                          window.location.pathname + window.location.search
                        )
                      )
                  );
                  return;
                }
                n(!0),
                  u("notification_entrance_click", { unread_message_num: l });
              },
              "aria-label": "Notifications",
              children: [
                (0, a.jsx)(s.EWM, {
                  size: 16,
                  className: "cursor-pointer text-black/95",
                }),
                l > 0 &&
                  (0, a.jsx)("div", {
                    className:
                      "absolute top-[6px] right-[5px] h-[11px] rounded-full bg-[#D42727] px-1 text-[8px] leading-[11px] text-white",
                    children: l > 99 ? "99+" : l,
                  }),
              ],
            }),
            r && (0, a.jsx)(A, { hasBanner: t, onClose: w }),
          ],
        });
      }
      var U = r(9137),
        D = r.n(U),
        F = r(7606),
        P = r(8436);
      let T = () => {
          var e, t;
          let { user: r, logout: n } = (0, d.A)(),
            [l, c] = (0, i.useState)(!1),
            x = (0, i.useRef)(null),
            p = (0, o.useRouter)(),
            [m, h] = (0, i.useState)(""),
            { track: v } = (0, j.s)(),
            b = (0, i.useRef)(null),
            g = (0, u.I)(!1, 1200),
            w = (0, i.useMemo)(
              () => (null == r ? void 0 : r.plan) === "Pro",
              [null == r ? void 0 : r.plan]
            );
          (0, i.useEffect)(() => {
            h(window.location.pathname);
          }, []),
            (0, i.useEffect)(() => {
              let e = (e) => {
                x.current && !x.current.contains(e.target) && c(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, []);
          let y = async () => {
              try {
                await n(), p.push("/home");
              } catch (e) {
                (0, P.P)({
                  message: "Failed to logout, please try again later",
                  type: "error",
                });
              }
              c(!1);
            },
            k = () => {
              (null == r ? void 0 : r.uid) && p.push("/profile/".concat(r.uid));
            },
            N = (e) => {
              (null == r ? void 0 : r.uid) &&
                (w || v("sub_upgrade_click", { click_from: "subscribe" }),
                window.open("/subscription", "_blank"));
            };
          return r
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className: (0, f.cn)(
                      "bg-brand mr-3 flex cursor-pointer items-center gap-[3px] px-[5px] text-[12px] text-white",
                      w
                        ? "h-5 rounded-[6px] font-bold"
                        : "h-[26px] rounded-[8px] px-2"
                    ),
                    onClick: () => N("header"),
                    children: [
                      w && (0, a.jsx)(s.xsv, { className: "h-3 w-3" }),
                      (0, a.jsx)("span", { children: w ? "Pro" : "Upgrade" }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    ref: x,
                    onMouseEnter: () => {
                      b.current &&
                        (clearTimeout(b.current), (b.current = null)),
                        c(!0);
                    },
                    onMouseLeave: () => {
                      b.current = setTimeout(() => {
                        c(!1);
                      }, 300);
                    },
                    onClick: () => {
                      g ? c(!0) : k();
                    },
                    className:
                      "jsx-29af56ad2ef10cea " +
                      "relative cursor-pointer rounded-full p-1 ".concat(
                        l && "bg-black/6"
                      ),
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "jsx-29af56ad2ef10cea flex cursor-pointer items-center",
                        children: (0, a.jsx)("div", {
                          "aria-label": "Go to profile",
                          className:
                            "jsx-29af56ad2ef10cea " +
                            "rounded-full bg-black/6 transition-transform focus:outline-none ".concat(
                              m === "/profile/".concat(r.uid) &&
                                "ring ring-black ring-offset-2"
                            ),
                          children: (0, a.jsx)("img", {
                            src: r.photo_url || "/images/avatar.svg",
                            alt: "",
                            className:
                              "jsx-29af56ad2ef10cea h-6 w-6 overflow-hidden rounded-full object-cover",
                          }),
                        }),
                      }),
                      l &&
                        (0, a.jsxs)("div", {
                          style: { animation: "fadeIn 0.2s ease-out" },
                          className:
                            "jsx-29af56ad2ef10cea absolute top-10 right-0 z-10 w-[260px] rounded-[16px] border border-black/3 bg-white p-1 shadow-lg",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "jsx-29af56ad2ef10cea flex flex-col items-center gap-2 px-3 py-6",
                              children: [
                                r.photo_url
                                  ? (0, a.jsx)("div", {
                                      onClick: k,
                                      className:
                                        "jsx-29af56ad2ef10cea h-16 w-16 cursor-pointer overflow-hidden rounded-full bg-black/6",
                                      children: (0, a.jsx)("img", {
                                        src: r.photo_url,
                                        alt: "User avatar",
                                        className:
                                          "jsx-29af56ad2ef10cea h-16 w-16 rounded-full object-cover",
                                      }),
                                    })
                                  : (0, a.jsx)("div", {
                                      className:
                                        "jsx-29af56ad2ef10cea flex h-16 w-16 items-center justify-center rounded-full bg-black/6 text-xl text-gray-600",
                                      children:
                                        (null === (e = r.display_name) ||
                                        void 0 === e
                                          ? void 0
                                          : e.charAt(0)) ||
                                        (null === (t = r.email) || void 0 === t
                                          ? void 0
                                          : t.charAt(0)) ||
                                        "U",
                                    }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "jsx-29af56ad2ef10cea w-full space-y-0.5",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "jsx-29af56ad2ef10cea line-clamp-2 w-full text-center text-[16px] sm:text-[20px]",
                                      children: r.display_name || "User",
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "jsx-29af56ad2ef10cea w-full truncate text-center text-[12px] text-black/65",
                                      children: r.email,
                                    }),
                                  ],
                                }),
                                "number" == typeof r.coins &&
                                  (0, a.jsx)(F.A, {
                                    points: r.coins,
                                    hoverAlign: "center",
                                  }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "jsx-29af56ad2ef10cea mx-3 my-1 h-px bg-black/6",
                            }),
                            (0, a.jsxs)("button", {
                              onClick: k,
                              className:
                                "jsx-29af56ad2ef10cea flex h-10 w-full cursor-pointer items-center gap-2 rounded-[12px] px-3 text-black transition-colors hover:bg-black/6",
                              children: [
                                (0, a.jsx)(s.IuU, { className: "h-4 w-4" }),
                                (0, a.jsx)("span", {
                                  className:
                                    "jsx-29af56ad2ef10cea text-black/95",
                                  children: "Profile",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("button", {
                              onClick: () => N("subscribe"),
                              className:
                                "jsx-29af56ad2ef10cea flex h-10 w-full cursor-pointer items-center gap-2 rounded-[12px] px-3 text-black transition-colors hover:bg-black/6",
                              children: [
                                (0, a.jsx)(s.GDL, { className: "h-4 w-4" }),
                                (0, a.jsx)("span", {
                                  className:
                                    "jsx-29af56ad2ef10cea text-black/95",
                                  children: "Subscribe",
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "jsx-29af56ad2ef10cea mx-3 my-1 h-px bg-black/6",
                            }),
                            (0, a.jsxs)("button", {
                              onClick: y,
                              className:
                                "jsx-29af56ad2ef10cea flex h-10 w-full cursor-pointer items-center gap-2 rounded-[12px] px-3 text-black transition-colors hover:bg-black/6",
                              children: [
                                (0, a.jsx)(s.jfQ, { className: "h-4 w-4" }),
                                (0, a.jsx)("span", {
                                  className:
                                    "jsx-29af56ad2ef10cea text-black/95",
                                  children: "Logout",
                                }),
                              ],
                            }),
                          ],
                        }),
                      (0, a.jsx)(D(), {
                        id: "29af56ad2ef10cea",
                        children:
                          "@-webkit-keyframes fadeIn{from{opacity:0;-webkit-transform:translatey(-10px);transform:translatey(-10px)}to{opacity:1;-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes fadeIn{from{opacity:0;-moz-transform:translatey(-10px);transform:translatey(-10px)}to{opacity:1;-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes fadeIn{from{opacity:0;-o-transform:translatey(-10px);transform:translatey(-10px)}to{opacity:1;-o-transform:translatey(0);transform:translatey(0)}}@keyframes fadeIn{from{opacity:0;-webkit-transform:translatey(-10px);-moz-transform:translatey(-10px);-o-transform:translatey(-10px);transform:translatey(-10px)}to{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}",
                      }),
                    ],
                  }),
                ],
              })
            : null;
        },
        B = (e) => {
          let { showBanner: t = !1, hideRight: r = !1 } = e,
            { user: n } = (0, d.A)(),
            h = (0, o.useRouter)(),
            [v, b] = (0, i.useState)("/"),
            [j, g] = (0, i.useState)(!1),
            [w, y] = (0, i.useState)(!1),
            k = (0, u.I)(!1, 768);
          (0, i.useEffect)(() => {
            location.origin.includes(".app") && b((0, x.$)());
          }, []),
            (0, i.useEffect)(() => {
              g(p.showBanner());
            }, []);
          let N = t && j;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(m, {
                showBanner: N,
                onClose: () => {
                  g(!1);
                },
              }),
              (0, a.jsx)("header", {
                className: "h-14 w-full",
                children: (0, a.jsxs)("div", {
                  className:
                    "bg-body fixed right-0 left-0 z-50 flex h-14 w-full items-center justify-between px-4 transition-all duration-300 ".concat(
                      N ? "top-[64px] min-[840px]:top-[50px]" : "top-0"
                    ),
                  children: [
                    (0, a.jsx)(l(), {
                      href: v,
                      children: (0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, a.jsx)("img", {
                            src: "/icons/logo.svg",
                            alt: "",
                            className: "text-brand h-6 w-6",
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "mt-[3px] text-base text-black/95 lg:text-xl xl:text-[20px] ".concat(
                                !r && "max-[400px]:hidden"
                              ),
                            children: "YouWare",
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "rounded-sm border-[0.5px] border-black px-1 py-0.5 text-[10px] text-black",
                            children: "Alpha",
                          }),
                        ],
                      }),
                    }),
                    !r &&
                      (0, a.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          !k &&
                            (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)(l(), {
                                  href: "/blog",
                                  className:
                                    "ml-2 cursor-pointer rounded-[10px] px-3 py-2 text-[14px] transition-all hover:bg-black/3",
                                  children: "Blogs",
                                }),
                                (0, a.jsx)(l(), {
                                  href: "/affiliate",
                                  className:
                                    "ml-2 cursor-pointer rounded-[10px] px-3 py-2 text-[14px] transition-all hover:bg-black/3",
                                  children: "Affiliate",
                                }),
                                (0, a.jsx)(l(), {
                                  href: "https://discord.gg/youware",
                                  target: "_blank",
                                  className:
                                    "ml-2 cursor-pointer rounded-[10px] px-3 py-2 text-[14px] transition-all hover:bg-black/3",
                                  children: "Community",
                                }),
                              ],
                            }),
                          (0, a.jsx)(M, { hasBanner: N }),
                          (0, a.jsx)("div", {
                            className: "ml-3 h-[12px] w-[0px] bg-black/12",
                          }),
                          n
                            ? (0, a.jsx)(T, {})
                            : (0, a.jsx)(l(), {
                                href: (0, x.$)(!0) + "/login",
                                className:
                                  "bg-brand rounded-[10px] px-3 py-2 text-sm leading-[16px] text-white",
                                children: "Sign up",
                              }),
                          k &&
                            (0, a.jsxs)(c.rI, {
                              triggerType: "hover",
                              onOpenChange: (e) => {
                                y(e);
                              },
                              children: [
                                (0, a.jsx)(c.ty, {
                                  className: (0, f.cn)(
                                    "ml-2 rounded-[10px] p-2 hover:bg-black/3",
                                    w && "bg-black/6 hover:bg-black/6"
                                  ),
                                  children: (0, a.jsx)(s.tOc, {
                                    size: 18,
                                    className: "text-black/95",
                                  }),
                                }),
                                (0, a.jsxs)(c.SQ, {
                                  className: "right-0 mt-2 w-36",
                                  children: [
                                    (0, a.jsx)(c._2, {
                                      icon: s.L4U,
                                      label: "Blogs",
                                      onClick: () => h.push("/blog"),
                                    }),
                                    (0, a.jsx)(c._2, {
                                      icon: s.C_5,
                                      label: "Affiliate",
                                      onClick: () => h.push("/affiliate"),
                                    }),
                                    (0, a.jsx)(c._2, {
                                      icon: s.cyn,
                                      label: "Community",
                                      onClick: () => {
                                        window.open(
                                          "https://discord.gg/youware",
                                          "_blank"
                                        );
                                      },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                  ],
                }),
              }),
            ],
          });
        };
    },
  },
]);

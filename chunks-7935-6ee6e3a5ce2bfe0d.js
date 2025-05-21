"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7935],
  {
    212: (e, t, r) => {
      r.d(t, { A: () => a });
      var o = r(2128),
        i = r(2341);
      class n {
        async init() {
          return new Promise((e) => {
            i.Ay.init("phc_QH92qoJ9zYh2LUuj5goa6NgqgnMOAkdR6gqUCEJL1Eq", {
              api_host: "https://us.i.posthog.com",
              capture_pageview: !0,
              loaded: () => {
                (this.initialized = !0), e();
              },
            });
          });
        }
        track(e, t) {
          i.Ay.capture(e, t);
        }
        registerPublicProperties(e) {
          i.Ay.register(e || {});
        }
        identify(e) {
          e
            ? i.Ay.register({
                user_id: e.uid,
                user_anonymous: e.is_anonymous,
                user_email: e.email,
                user_name: e.display_name,
              })
            : i.Ay.register({
                user_id: "",
                user_anonymous: "",
                user_email: "",
                user_name: "",
              });
        }
        constructor() {
          this.initialized = !1;
        }
      }
      class s {
        init() {
          return o.vF.info("Volcano initialized"), Promise.resolve();
        }
        track(e, t) {
          window.collectEvent && window.collectEvent(e, t);
        }
        registerPublicProperties(e) {
          window.collectEvent &&
            (window.collectEvent("config", e), window.collectEvent("send"));
        }
        identify(e) {
          window.collectEvent &&
            (e
              ? (window.collectEvent("config", { user_unique_id: e.uid }),
                window.collectEvent("profileSet", {
                  user_anonymous: e.is_anonymous,
                  user_email: e.email,
                  user_name: e.display_name,
                  user_is_subscribed: +("Pro" === e.plan),
                }))
              : (window.collectEvent("config", { user_unique_id: null }),
                window.collectEvent("profileSet", {
                  user_unique_id: "",
                  user_anonymous: "",
                  user_email: "",
                  user_name: "",
                  user_is_subscribed: null,
                })));
        }
      }
      class a {
        static getInstance() {
          return a.instance || (a.instance = new a()), a.instance;
        }
        async init() {
          this.initialized ||
            ((this.providers = [new n(), new s()]),
            await Promise.all(this.providers.map((e) => e.init())),
            (this.initialized = !0),
            o.vF.info("Initialized"),
            this.processQueue());
        }
        track(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!this.initialized) {
            this.queue.push({ event: e, properties: t });
            return;
          }
          this.providers.forEach((r) => {
            /(staging|localhost)/.test("https://www.yourware.so") &&
            /(staging|localhost)/.test("https://www.youware.com")
              ? r instanceof s && console.log("Tracking event", e, t)
              : r.track(e, t);
          });
        }
        trackGoogleAds(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          window.gtag && window.gtag("event", e, t);
        }
        registerPublicProperties(e) {
          this.providers.forEach((t) => {
            t.registerPublicProperties(e);
          });
        }
        identify(e) {
          this.providers.forEach((t) => {
            t.identify(e);
          });
        }
        processQueue() {
          this.queue.forEach((e) => {
            this.providers.forEach((t) => {
              t.track(e.event, e.properties);
            });
          }),
            (this.queue = []);
        }
        constructor() {
          (this.initialized = !1), (this.queue = []), (this.providers = []);
        }
      }
    },
    862: (e, t, r) => {
      let o, i;
      r.d(t, { AuthProvider: () => E, A: () => _ });
      var n = r(5155),
        s = r(6203),
        a = r(2115),
        l = r(4477);
      let c = (0, l.createServerReference)(
          "40a8a1d7b76b028e9bf52155eb1abb4a747ce2827b",
          l.callServer,
          void 0,
          l.findSourceMapURL,
          "login"
        ),
        u = (0, l.createServerReference)(
          "406db448e0db1df23268a6bc20a59a30c534d4aa0e",
          l.callServer,
          void 0,
          l.findSourceMapURL,
          "fetchUserInfo"
        ),
        d = (0, l.createServerReference)(
          "403d795df721b4ab0b4147576234222d98e414aecc",
          l.callServer,
          void 0,
          l.findSourceMapURL,
          "linkProjects"
        );
      var h = r(6389),
        g = r(4842),
        f = r(3915);
      let p = (0, l.createServerReference)(
          "00b825ebf0c0f04721726aadfa9eebd9ce3f069994",
          l.callServer,
          void 0,
          l.findSourceMapURL,
          "logout"
        ),
        y = JSON.parse(
          '{"apiKey":"AIzaSyB9Jdqpb4h5RgHmRRJSfqTOfBT-DPV34jA","authDomain":"gglogin.youware.com","projectId":"yourware-arco","storageBucket":"yourware-arco.firebasestorage.app","messagingSenderId":"541265544701","appId":"1:541265544701:web:d52622395895582c9c4594"}'
        );
      function v() {
        if (!i) {
          let { auth: e } = y
            ? ((o = (0, f.Dk)().length ? (0, f.Dk)()[0] : (0, f.Wp)(y)),
              (i = (0, s.xI)(o)),
              (0, s.oM)(i, s.gz),
              { app: o, auth: i })
            : (console.error("firebaseConfig is undefined"),
              { app: void 0, auth: void 0 });
          i = e;
        }
        return i;
      }
      async function w() {
        let e = v();
        if (!e)
          throw (
            (console.error("auth is undefined"), Error("auth is undefined"))
          );
        try {
          return (
            await e.signOut(), console.log("sign out successfully"), await p()
          );
        } catch (e) {
          throw (console.error("sign out error:", e), e);
        }
      }
      var m = r(2128),
        b = r(6834);
      let A = (0, a.createContext)({
          user: null,
          isLoading: !1,
          loginWithGoogle: async () => {},
          sendLinkToEmail: async (e, t) => {},
          signInWithEmailLink: async (e, t) => {},
          isSignInWithEmailLink: (e) => !1,
          logout: async () => {},
          updateProfile: async (e, t) =>
            Promise.resolve({
              code: 0,
              message: "Success",
              request_id: "",
              data: null,
            }),
          syncSubscription: async () => {},
        }),
        E = (e) => {
          let { currentUser: t, children: r } = e,
            [o, i] = (0, a.useState)(t),
            [l, f] = (0, a.useState)(!1),
            p = v(),
            y = new s.HF(),
            { identify: E } = (0, h.s)();
          (0, a.useEffect)(() => {
            E(o), m.Ay.info("auth context user", { user: o });
          }, [o]),
            (0, a.useEffect)(() => {
              if (o) {
                let e = g.X.onMessage("SubscriptionUpdated", () => {
                  m.Ay.info("Received subscription update from another tab"),
                    j().catch((e) => {
                      m.Ay.error(
                        "Error syncing subscription after broadcast",
                        e
                      );
                    });
                });
                return () => {
                  e();
                };
              }
            }, [o]);
          let _ = async () => {
              try {
                if ((f(!0), !p))
                  throw (
                    (m.Ay.error("auth is undefined"),
                    Error("auth is undefined"))
                  );
                y.setCustomParameters({ prompt: "select_account" }),
                  y.addScope(
                    "https://www.googleapis.com/auth/userinfo.profile"
                  );
                let e = await (0, s.df)(p, y);
                if ((await p.signOut(), !e)) throw Error("Failed to login");
                await I(e);
                let t = await C(e);
                i(t),
                  await j(t),
                  F(t),
                  m.Ay.info("sign in with google success");
              } catch (e) {
                throw (m.Ay.error("sign in with google error", e), e);
              } finally {
                f(!1);
              }
            },
            k = async (e, t) => {
              if (!p)
                throw (
                  (m.Ay.error("auth is undefined"), Error("auth is undefined"))
                );
              try {
                let r = await (0, s.hK)(p, e, t);
                if ((await p.signOut(), !r))
                  throw Error("Failed to sign in with email link");
                let o = await C(r);
                await j(o),
                  m.Ay.info("sign in with email link success", {
                    loginUser: o,
                  }),
                  i(o),
                  F(o);
              } catch (e) {
                throw (m.Ay.error("sign in with email link error", e), e);
              } finally {
                f(!1);
              }
            },
            S = async (e, t) => {
              try {
                if ((m.Ay.info("login with email", { email: e }), !p))
                  throw (
                    (m.Ay.error("auth is undefined"),
                    Error("auth is undefined"))
                  );
                await (0, s.MN)(p, e, { url: t, handleCodeInApp: !0 }),
                  m.Ay.info("send sign in link to email success", { email: e });
              } catch (e) {
                throw (m.Ay.error("send sign in link to email error:", e), e);
              }
            },
            P = async () => {
              try {
                console.log("sign out"), await w(), i(null);
              } catch (e) {
                throw (console.error("sign out error:", e), e);
              }
            },
            L = async (e, t) => {
              try {
                let r = new FormData();
                return (
                  e && r.append("name", e),
                  t && r.append("photo", t),
                  await (0, b.qM)("/user/refresh", { method: "POST", body: r })
                );
              } catch (e) {
                throw (m.Ay.error("update profile error:", e), e);
              }
            },
            j = async (e) => {
              try {
                m.Ay.info("sync subscription with user", { userInfo: e });
                let t = await u({
                  id:
                    (null == e ? void 0 : e.uid) ||
                    (null == o ? void 0 : o.uid) ||
                    "",
                });
                if (!t || 0 !== t.code || !t.data)
                  throw Error("Failed to sync subscription");
                m.Ay.info("sync subscription success", { response: t }),
                  i({ ...t.data });
              } catch (e) {
                throw (m.Ay.error("sync subscription error:", e), e);
              }
            },
            I = async (e) => {
              let t = e.user;
              m.Ay.info("sync google user profile", { user: t });
              let r = t.providerData.find((e) => "google.com" === e.providerId);
              if (
                (m.Ay.info("sync google providerInfo", { providerInfo: r }), r)
              ) {
                let { displayName: e, photoURL: o } = r;
                if (
                  (!t.displayName &&
                    e &&
                    (await (0, s.r7)(t, { displayName: e })),
                  !t.photoURL && o)
                ) {
                  let e = o.replace(/=s\d+-c$/, "=s400-c");
                  await (0, s.r7)(t, { photoURL: e });
                }
              }
            },
            C = async (e) => {
              var t;
              let r = e.user;
              m.Ay.info("sync user to server", { user: r });
              let o = await r.getIdToken(),
                i = await c(o);
              if (
                200 !== i.code ||
                !(null === (t = i.data) || void 0 === t ? void 0 : t.userInfo)
              )
                throw Error("sync user to server failed");
              return i.data.userInfo;
            },
            F = async (e) => {
              if (
                (m.Ay.info("handle anonymous projects"),
                null == e ? void 0 : e.uid)
              ) {
                let t = JSON.parse(
                  localStorage.getItem("Anonymous_Projects") || "[]"
                );
                if (t.length > 0)
                  try {
                    d({ uid: e.uid, project_ids: t }),
                      localStorage.removeItem("Anonymous_Projects"),
                      m.Ay.info("Projects linked successfully in background");
                  } catch (e) {
                    m.Ay.error("Background project linking failed:", e);
                  }
              }
            };
          return (0, n.jsx)(A.Provider, {
            value: {
              user: o,
              isLoading: l,
              loginWithGoogle: _,
              sendLinkToEmail: S,
              isSignInWithEmailLink: (e) =>
                p ? (0, s.Pj)(p, e) : (m.Ay.error("auth is undefined"), !1),
              signInWithEmailLink: k,
              logout: P,
              updateProfile: L,
              syncSubscription: j,
            },
            children: r,
          });
        },
        _ = () => (0, a.useContext)(A);
    },
    2128: (e, t, r) => {
      r.d(t, { Ay: () => a, vF: () => s });
      var o = r(1584),
        i = r.n(o);
      class n {
        static getInstance(e) {
          return (
            n.instance
              ? e && (n.instance.options = { ...n.instance.options, ...e })
              : (n.instance = new n(e)),
            n.instance
          );
        }
        setLevel(e) {
          this.log.setLevel(e);
        }
        getLevel() {
          return this.log.getLevel();
        }
        setOptions(e) {
          this.options = { ...this.options, ...e };
        }
        formatLogEntryAsJson(e, t, r, o) {
          let i = {
            timestamp: new Date().toISOString(),
            level: e,
            message: t,
            context: r || {},
            metadata: { environment: "production" },
          };
          return (
            o &&
              (i.error = { name: o.name, message: o.message, stack: o.stack }),
            JSON.stringify(i, null, void 0)
          );
        }
        formatLogEntryAsPretty(e, t, r, o) {
          let i = new Date(new Date().getTime() + 288e5)
              .toISOString()
              .replace("T", " ")
              .replace("Z", ""),
            n = "";
          if (
            (this.options.useSymbols && (n += "".concat(this.symbols[e], " ")),
            (n += "[".concat(i, "] [").concat(e.toUpperCase(), "] ").concat(t)),
            r && Object.keys(r).length > 0)
          )
            for (let [e, t] of Object.entries(r))
              n += "\n  └─ ".concat(e, ": ").concat(this.formatValue(t));
          return (
            o &&
              ((n += "\n  └─ 错误: ".concat(o.name, " - ").concat(o.message)),
              o.stack &&
                (n += "\n      ".concat(
                  o.stack.split("\n").slice(1).join("\n      ")
                ))),
            n
          );
        }
        formatValue(e) {
          if ("object" == typeof e && null !== e) {
            if (Array.isArray(e))
              return 0 === e.length
                ? "[]"
                : 1 === e.length
                ? "[".concat(this.formatValue(e[0]), "]")
                : JSON.stringify(e);
            try {
              return JSON.stringify(e);
            } catch (e) {
              return "[Object]";
            }
          }
          return String(e);
        }
        formatLogEntry(e, t, r, o) {
          return "json" === this.options.format
            ? this.formatLogEntryAsJson(e, t, r, o)
            : this.formatLogEntryAsPretty(e, t, r, o);
        }
        trace(e, t) {
          if (0 >= this.log.getLevel()) {
            let r = this.formatLogEntry("trace", e, t);
            this.log.trace(r);
          }
        }
        debug(e, t) {
          if (1 >= this.log.getLevel()) {
            let r = this.formatLogEntry("debug", e, t);
            this.log.debug(r);
          }
        }
        info(e, t) {
          if (2 >= this.log.getLevel()) {
            let r = this.formatLogEntry("info", e, t);
            this.log.info(r);
          }
        }
        warn(e, t) {
          if (3 >= this.log.getLevel()) {
            let r = this.formatLogEntry("warn", e, t);
            this.log.warn(r);
          }
        }
        error(e, t, r) {
          if (4 >= this.log.getLevel()) {
            let o = this.formatLogEntry("error", e, r, t);
            this.log.error(o);
          }
        }
        constructor(e) {
          (this.options = { useSymbols: !0, format: "pretty" }),
            (this.symbols = {
              trace: "\uD83D\uDD0D",
              debug: "\uD83D\uDD27",
              info: "ℹ️",
              warn: "⚠️",
              error: "❌",
            }),
            (this.log = i().getLogger("youware")),
            e && (this.options = { ...this.options, ...e }),
            "https://www.yourware.so".includes("staging") ||
            "https://www.youware.com".includes("staging")
              ? this.log.setLevel(0)
              : this.log.setLevel(3);
        }
      }
      let s = n.getInstance(),
        a = s;
    },
    4821: (e, t, r) => {
      r.d(t, { B: () => n, S: () => i });
      let o = () => {},
        i = (e) => {
          o(e);
        },
        n = (e) => (o = e);
    },
    4842: (e, t, r) => {
      r.d(t, { X: () => n });
      var o = r(2128);
      class i {
        onMessage(e, t) {
          this.listeners.has(e) || this.listeners.set(e, new Set());
          let r = this.listeners.get(e);
          return (
            r.add(t),
            o.vF.info('Subscribed to event "'.concat(e, '"'), {
              listenersCount: r.size,
            }),
            () => {
              let r = this.listeners.get(e);
              r &&
                (r.delete(t),
                o.vF.info('Unsubscribed from event "'.concat(e, '"'), {
                  remainingListeners: r.size,
                }),
                0 === r.size &&
                  (this.listeners.delete(e),
                  o.vF.info(
                    'Removed event "'.concat(e, '" as it has no more listeners')
                  )));
            }
          );
        }
        sendMessage(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          try {
            var r;
            let i = { event: e, data: t, timestamp: Date.now() };
            o.vF.info('send message to channel "'.concat(e, '"'), { data: t }),
              null === (r = this.channel) || void 0 === r || r.postMessage(i);
          } catch (t) {
            o.vF.error("Error send message to channel (".concat(e, "):"), t);
          }
        }
        handleMessage(e) {
          try {
            let { event: t, data: r } = e.data;
            o.vF.info(
              'Received message from another tab for event "'.concat(t, '"'),
              { data: r }
            );
            let i = this.listeners.get(t);
            i &&
              i.size > 0 &&
              (o.vF.info(
                "Notifying "
                  .concat(i.size, ' listeners for event "')
                  .concat(t, '"'),
                { data: r }
              ),
              i.forEach((e) => {
                e(r);
              }));
          } catch (e) {
            o.vF.error("Error handling broadcast message:", e);
          }
        }
        cleanup() {
          try {
            this.channel &&
              (o.vF.info("Closing broadcast channel"),
              this.channel.close(),
              (this.channel = null)),
              this.listeners.clear(),
              o.vF.info("Cleared all listeners");
          } catch (e) {
            o.vF.error("Error during cleanup:", e);
          }
        }
        constructor(e) {
          (this.channel = null), (this.listeners = new Map());
          try {
            (this.channel = new BroadcastChannel(e || "global_broadcast")),
              (this.channel.onmessage = this.handleMessage.bind(this));
          } catch (e) {
            o.vF.error("Failed to initialize BroadcastChannel:", e);
          }
        }
      }
      let n = new i();
    },
    6139: (e, t, r) => {
      function o() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        {
          let r = window.location.host;
          if (r.includes("localhost")) return "http://" + r;
          if (i(r) && e && t)
            return "https://" + r.replace(".yourware.so", ".youware.com");
          if (r.includes("yourware.so") && !e) return "https://www.yourware.so";
        }
        return "https://www.youware.com";
      }
      r.d(t, { $: () => o });
      let i = (e) =>
        null !==
        ((null == e
          ? void 0
          : e.match(/^([^.]+)\.app(-staging\d*)?\.yourware\.so$/)) ||
          (null == e
            ? void 0
            : e.match(/^([^.]+)\.app(-staging\d*)?\.youware\.com$/)));
    },
    6389: (e, t, r) => {
      r.d(t, { s: () => n });
      var o = r(2115),
        i = r(9891);
      function n() {
        let e = (0, o.useContext)(i.I);
        if (!e)
          throw Error("useAnalytics must be used within AnalyticsProvider");
        return {
          track: (0, o.useCallback)(
            function (t) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              e.track(t, r);
            },
            [e]
          ),
          trackGoogleAds: (0, o.useCallback)(
            function (t) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              e.trackGoogleAds(t, r);
            },
            [e]
          ),
          registerPublicProperties: (0, o.useCallback)(
            function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              e.registerPublicProperties(t);
            },
            [e]
          ),
          identify: (0, o.useCallback)(
            (t) => {
              e.identify(t);
            },
            [e]
          ),
        };
      }
    },
    6834: (e, t, r) => {
      r.d(t, { qM: () => s });
      var o = r(3464),
        i = r(6139);
      let n = o.A.create({
        baseURL:
          "http://yourware-backend-prod.yourware-service-discovery-prod:8000",
        timeout: 6e4,
      });
      n.interceptors.request.use(
        async (e) => (
          e.headers["Content-Type"] ||
            (e.headers["Content-Type"] = "application/json"),
          e
        ),
        (e) => Promise.reject(e)
      ),
        n.interceptors.response.use(
          (e) => e.data,
          (e) => {
            var t, r, o, i, n, s, a, l, c, u;
            return e.mock && e.data
              ? e.data
              : (
                  null === (r = e.response) || void 0 === r
                    ? void 0
                    : null === (t = r.data) || void 0 === t
                    ? void 0
                    : t.status_code
                )
              ? Promise.reject(e.response.data)
              : Promise.reject({
                  status_code:
                    (null === (o = e.response) || void 0 === o
                      ? void 0
                      : o.status) || 500,
                  code:
                    (null === (n = e.response) || void 0 === n
                      ? void 0
                      : null === (i = n.data) || void 0 === i
                      ? void 0
                      : i.code) ||
                    (null === (s = e.response) || void 0 === s
                      ? void 0
                      : s.status) ||
                    500,
                  message:
                    (null === (l = e.response) || void 0 === l
                      ? void 0
                      : null === (a = l.data) || void 0 === a
                      ? void 0
                      : a.message) ||
                    e.message ||
                    "Unknown error",
                  request_id:
                    (null === (u = e.response) || void 0 === u
                      ? void 0
                      : null === (c = u.data) || void 0 === c
                      ? void 0
                      : c.request_id) || "",
                  data: null,
                });
          }
        );
      let s = async (e, t, r) => {
        let o = ""
            .concat(null != r ? r : "/api", "/")
            .concat(e.startsWith("/") ? e.replace("/", "") : e),
          n = new URLSearchParams();
        (null == t ? void 0 : t.params) &&
          Object.entries(t.params).forEach((e) => {
            let [t, r] = e;
            n.append(t, r);
          });
        let s = n.toString(),
          a = s ? "".concat(o, "?").concat(s) : o;
        try {
          var l, c, u, d, h;
          let e = { ...(null == t ? void 0 : t.headers) };
          e["Content-Type"] ||
            (null == t ? void 0 : t.body) instanceof FormData ||
            (e["Content-Type"] = "application/json");
          let r = await fetch(a, {
              headers: e,
              method:
                null !== (l = null == t ? void 0 : t.method) && void 0 !== l
                  ? l
                  : "GET",
              body: (null == t ? void 0 : t.data)
                ? JSON.stringify(t.data)
                : null == t
                ? void 0
                : t.body,
            }),
            o = await r.json();
          if (!r.ok) {
            if (401 === r.status) {
              let e = (0, i.$)(!0),
                t = window.location.pathname + window.location.search;
              window.location.href = ""
                .concat(e, "/login?returnTo=")
                .concat(encodeURIComponent(t));
            }
            if (
              (null == o ? void 0 : o.status_code) &&
              (null == o ? void 0 : o.code)
            )
              return Promise.reject(o);
            let e =
              ((c = r.status),
              (u = (null == o ? void 0 : o.code) || r.status),
              (d = (null == o ? void 0 : o.message) || r.statusText),
              (h = (null == o ? void 0 : o.request_id) || ""),
              {
                status_code: c,
                code: u,
                message: d,
                request_id: h,
                data: null,
              });
            return Promise.reject(e);
          }
          return o;
        } catch (t) {
          return (
            console.log("commonFetch API ".concat(e, " error"), t),
            Promise.reject(t)
          );
        }
      };
    },
    8436: (e, t, r) => {
      let o;
      r.d(t, { B: () => s, P: () => n });
      let i = () => {},
        n = (e) => {
          clearTimeout(o),
            i(e),
            (o = setTimeout(() => {
              (null == e ? void 0 : e.message) === e.message && i(null);
            }, e.duration || 3e3));
        },
        s = (e) => (i = e);
    },
    9891: (e, t, r) => {
      r.d(t, { AnalyticsProvider: () => a, I: () => s });
      var o = r(5155),
        i = r(2115),
        n = r(212);
      let s = (0, i.createContext)(null);
      function a(e) {
        let { children: t } = e;
        return (
          (0, i.useEffect)(() => {
            n.A.getInstance().init();
          }, []),
          (0, o.jsx)(s.Provider, { value: n.A.getInstance(), children: t })
        );
      }
    },
  },
]);

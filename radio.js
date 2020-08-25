/*
 * Native Flashradio V3.16.05.11
 * http://native.flashradio.info
 *
 * Copyright (C) SODAH | JOERG KRUEGER
 * http://www.sodah.de
 * 
 * COMPRESSOR: http://closure-compiler.appspot.com/home
 */
(function(a, m) {
    "function" === typeof define && define.amd ? define(["jquery"], m) : a.jQuery ? m(a.jQuery) : m(a.Zepto)
})(this, function(a, m) {
    a.fn.flashradio = function(u) {
        var k = "string" === typeof u,
            J = Array.prototype.slice.call(arguments, 1),
            K = this;
        u = !k && J.length ? a.extend.apply(null, [!0, u].concat(J)) : u;
        if (k && "_" === u.charAt(0)) return K;
        k ? this.each(function() {
            var k = a(this).data("flashradio"),
                L = k && a.isFunction(k[u]) ? k[u].apply(k, J) : k;
            if (L !== k && L !== m) return K = L, !1
        }) : this.each(function() {
            var k = a(this).data("flashradio");
            k ? k.option(u || {}) : a(this).data("flashradio", new a.flashradio(this, u))
        });
        return K
    };
    a.flashradio = function(u, k) {
        function J(f) {
            "" != M && a("#" + b + "contextmenu").css({
                visibility: "visible"
            });
            return !1
        }

        function K(f) {
            a("#" + b + "contextmenu").css({
                visibility: "hidden"
            });
            return !1
        }

        function gb() {
            if (Ma != m) a.get(Ma + "?hash=" + Math.random(), function(b) {
                a(b).find("THEME").attr("COLOR") && (q = a(b).find("THEME").attr("COLOR"));
                a(b).find("THEME").attr("FONTCOLOR") && (r = a(b).find("THEME").attr("FONTCOLOR"));
                a(b).find("THEME").attr("STARTVOLUME") &&
                    (l = a(b).find("THEME").attr("STARTVOLUME"));
                if (q == m || "" == q) q = "#0d72bf";
                X = Y(q, -.5);
                T = Y(q, -.9);
                w = "";
                a(b).find("TITLEFONT").attr("FONTNAME") && "" != a(b).find("TITLEFONT").attr("FONTNAME") && (U = a(b).find("TITLEFONT").attr("FONTNAME"));
                a(b).find("TITLEFONT").attr("GOOGLEFONT") && "" != a(b).find("TITLEFONT").attr("GOOGLEFONT") && (Z = a(b).find("TITLEFONT").attr("GOOGLEFONT"));
                a(b).find("SONGFONT").attr("FONTNAME") && "" != a(b).find("SONGFONT").attr("FONTNAME") && (la = a(b).find("SONGFONT").attr("FONTNAME"));
                a(b).find("SONGFONT").attr("GOOGLEFONT") &&
                    "" != a(b).find("SONGFONT").attr("GOOGLEFONT") && (aa = a(b).find("SONGFONT").attr("GOOGLEFONT"));
                a(b).find("RADIO").each(function() {
                    a(this).attr("NAME") && "" != a(this).attr("NAME") && (t = a(this).attr("NAME"));
                    a(this).attr("SCROLL") && "" != a(this).attr("SCROLL") && (y = a(this).attr("SCROLL").toUpperCase());
                    a(this).attr("AUTOPLAY") && "" != a(this).attr("AUTOPLAY") && (ba = "TRUE" == a(this).attr("AUTOPLAY").toUpperCase() ? !0 : !1);
                    a(this).attr("DEBUG") && "" != a(this).attr("DEBUG") && (N = "TRUE" == a(this).attr("DEBUG").toUpperCase() ?
                        !0 : !1);
                    a(this).attr("SONGTITLEURL") && "" != a(this).attr("SONGTITLEURL") && (ma = ca(a(this).attr("SONGTITLEURL")));
                    a(this).attr("SONGINFORMATIONINTERVAL") && "" != a(this).attr("SONGINFORMATIONINTERVAL") && (na = parseInt(a(this).attr("SONGINFORMATIONINTERVAL")));
                    a(this).attr("FIRSTSOLUTION") && "" != a(this).attr("FIRSTSOLUTION") && (oa = a(this).attr("FIRSTSOLUTION").toUpperCase());
                    a(this).attr("STARTVOLUME") && "" != a(this).attr("STARTVOLUME") && (l = parseInt(a(this).attr("STARTVOLUME")));
                    a(this).attr("INFOTEXT") ? "FALSE" !=
                        a(this).attr("INFOTEXT") && (M = a(this).attr("INFOTEXT")) : M = "NATIVE FLASH RADIO (ENVATO EXCLUSIVE) V3.16.05.11 (c) by sodah.de";
                    da = a(this).attr("INFOLINK") ? a(this).attr("INFOLINK") : "http://native.flashradio.info/"
                });
                a(b).find("CHANNEL").each(function() {
                    var b = "mpeg";
                    a(this).attr("TYPE") && (b = a(this).attr("TYPE"));
                    var f = ca(a(this).attr("URL")),
                        f = Na(f),
                        c = f.split("/");
                    "" == O && (O = f);
                    pa.push(f);
                    P = P + "|" + b;
                    4 > c.length ? (C.push(f + "/;"), w = w + "|" + f + "/;") : (C.push(f), w = w + "|" + f)
                });
                "NATIVE FLASH RADIO V3 BY SODAH.DE" ==
                t && (t = "", ea(), Oa());
                Pa()
            }).done(function() {}).fail(function() {}).always(function() {}).always(function() {});
            else {
                Qa != m && (r = Qa);
                Ra != m && (q = Ra);
                X = Y(q, -.5);
                T = Y(q, -.9);
                P = w = "";
                qa != m && "" != qa && (t = qa);
                ra != m && "" != ra && (y = ra);
                sa != m && "" != sa && (ba = "TRUE" == sa.toUpperCase() ? !0 : !1);
                ta != m && "" != ta && (N = "TRUE" == ta.toUpperCase() ? !0 : !1);
                ua != m && "" != ua && (ma = ca(ua));
                va != m && "" != va && (l = parseInt(va));
                wa != m ? "FALSE" != wa && (M = wa) : M = "NATIVE FLASH RADIO (ENVATO EXCLUSIVE) V3.16.05.11 (c) by sodah.de";
                da = Sa != m ? Sa : "http://native.flashradio.info/";
                xa != m && "" != xa && (na = parseInt(xa));
                Ta != m && (U = Ta);
                Ua != m && (Z = Ua);
                Va != m && (la = Va);
                Wa != m && (aa = Wa);
                ya != m && "" != ya && (oa = ya);
                for (var b = [], b = za != m && "" != za ? za.split("|") : ["http://46.165.232.53:80", "http://46.165.233.194:80"], c = [], c = Aa != m && "" != Aa ? Aa.split("|") : "mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg mpeg".split(" "), d = 0; d < b.length; d += 1) {
                    var e = ca(b[d]),
                        e = Na(e),
                        g = e.split("/");
                    "" == O && (O = e);
                    pa.push(e);
                    thisstreamtype = c[d];
                    P = P + "|" + thisstreamtype;
                    4 > g.length ? (C.push(e + "/;"), w = w + "|" + e + "/;") : (C.push(e), w = w + "|" + e)
                }
                "NATIVE FLASH RADIO V3 BY SODAH.DE" == t && (t = "", ea(), Oa());
                Pa()
            }
        }

        function L(a) {
            var b = document.createElement("link");
            b.type = "text/css";
            b.rel = "stylesheet";
            b.href = "http://fonts.googleapis.com/css?family=" + a;
            document.getElementsByTagName("head")[0].appendChild(b)
        }

        function Pa() {
            navigator.userAgent.toLowerCase();
            "HTML" == oa && html5audiocheck() && (x = !0);
            if (mobilecheck() || 10.1 > getFlashPluginVersion()) x = !0;
            try {
                var f = window.localStorage.getItem(b +
                    "volume");
                null !== f && (l = f)
            } catch (c) {}
            "" != Z && L(Z);
            "" != aa && L(aa);
            D = document.getElementById(b);
            D.innerHTML = "";
            a("#" + b).addClass("sodahnativeflashradio3").css({
                overflow: "hidden",
                display: "block"
            });
            v = document.createElement("div");
            v.id = b + "containerinside";
            D.appendChild(v);
            a("#" + b + "containerinside").css({
                position: "relative",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                "background-color": T
            });
            Ba = document.createElement("div");
            Ba.id = b + "volumecontroller";
            v.appendChild(Ba);
            a("#" + b + "volumecontroller").css({
                position: "absolute",
                "background-color": X
            }).disableSelection();
            try {
                g = document.createElement("canvas"), g.id = b + "canvas", v.appendChild(g), a("#" + b + "canvas").css({
                    display: "block",
                    background: "none",
                    position: "absolute"
                }), n = g.getContext("2d"), n.fillStyle = q
            } catch (c) {}
            N && (Ca = document.createElement("div"), Ca.id = b + "engineimg", v.appendChild(Ca), x ? a("#" + b + "engineimg").html('<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 800 800"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.525,2.618c232.592,0.259,466.157-0.517,698.114,0.388 c-3.238,30.279-4.717,60.505-8.145,90.367c-3.441,29.981-4.391,60.055-7.758,89.593c-6.67,58.566-9.676,117.851-15.9,176.856 c-6.229,59.042-10.229,118.037-15.902,179.181c-4.486,48.371-8.879,95.215-13.186,145.83c-0.301,3.551,0.008,7.338-0.387,10.471 c-0.686,5.453-0.836,18.672-2.717,20.943c-1.596,1.932-12.559,4.459-17.451,5.818c-30.516,8.486-59.248,17.035-89.592,24.822 c-24.125,6.188-47.324,13.043-71.363,20.168c-23.922,7.088-47.176,13.266-71.75,19.779c-5.695,1.51-11.645,3.85-17.455,5.428 c-6.242,1.697-12.537,2.641-17.839,5.043c-1.712,0.777-6.343-1.832-9.696-2.713c-56.986-15.016-112.917-32.281-169.487-47.705 c-29.603-8.07-58.689-16.725-89.204-25.209c-5.459-1.52-17.055-3.465-17.84-6.207c-1.669-5.82-1.78-15.773-2.327-22.494 c-1.857-22.834-3.101-45.906-5.818-67.098c-1.921-14.984-2.994-30.393-3.878-44.988c-0.904-14.924-2.328-29.387-3.879-43.051 c-6.841-60.273-9.375-119.945-15.902-178.019c-2.513-22.376-3.721-44.675-5.816-67.873c-1.93-21.358-5.132-44.933-6.206-67.485 c-0.353-7.403-0.852-15.017-1.552-22.494C62.466,136.526,56.203,68.699,50.361,3.393C50.645,3.032,51.066,2.806,51.525,2.618z M180.675,149.61c7.869,89.508,14.756,175.751,23.658,264.507c100.983,0.515,203.807-1.03,303.293,0.776 c-3.727,38.486-6.939,73.595-10.861,111.698c-27.486,8.334-56.738,15.738-85.324,23.27c-4.539,1.197-8.959,3.178-12.798,3.104 c-3.766-0.07-7.824-2.023-12.023-3.104c-28.608-7.342-57.42-15.168-84.938-23.27c-2.163-21.918-3.886-46.148-6.593-68.648 c-27.16-1.543-58.684-0.781-86.489-0.387c3.112,45.97,6.694,92.33,10.859,137.684c14.5,5.201,29.63,8.57,44.602,12.799 c44.98,12.705,90.719,25.016,135.745,37.621c59.063-17.344,119.907-32.904,179.182-50.033 c9.227-89.506,16.777-180.44,25.211-269.937c-105.619-1.163-213.961,0.387-319.582-0.776c-2.962-29.674-5.488-61.569-7.369-89.204 c110.202-0.498,223.087,0.294,334.32-0.387c2.838-28.512,5.787-59.488,7.758-86.489c-145.043-0.905-291.792-0.13-437.487-0.388 C181.281,148.664,180.893,149.051,180.675,149.61z"/></svg>') :
                a("#" + b + "engineimg").html('<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  viewBox="0 0 800 800"><path fill-rule="evenodd" clip-rule="evenodd" d="M726.507,9.066c0,49.226,0,98.451,0,147.676 c-58.974,2.59-100.493,22.606-131.476,53.587c-30.418,30.419-57.412,67.194-74.148,110.912c7.043,5.124,17.595,3.739,27.418,3.739 c29.407,0,62.955,0,92.218,0c0,50.056,0,100.112,0,150.168c-61.503-0.231-121.437,1.106-183.193,0.623 C384.034,635.521,306.268,790.792,73.493,791.063c0-49.226,0-98.451,0-147.676c98.958-1.012,153.559-60.644,191.294-124.622 c39.066-66.234,65.338-145.271,95.958-219.955c14.918-36.386,32.717-71.464,52.964-105.305 c19.781-33.064,41.026-65.008,67.918-89.727C535.296,54.447,605.624,15.429,702.83,9.689C708.328,9.364,718.608,8.646,726.507,9.066 z"/></svg>'),
                a("#" + b + "engineimg").css({
                    fill: r,
                    position: "absolute",
                    opacity: "0.1"
                }).disableSelection());
            channelname = document.createElement("div");
            channelname.id = b + "channelname";
            v.appendChild(channelname);
            a("#" + b + "channelname").css({
                "font-family": U,
                overflow: "visible",
                position: "absolute",
                color: r,
                "text-align": "left",
                "white-space": "nowrap"
            }).disableSelection();
            Da = document.createElement("div");
            Da.id = b + "statustext";
            v.appendChild(Da);
            a("#" + b + "statustext").css({
                position: "absolute",
                overflow: "visible",
                "font-family": la,
                color: r,
                "white-space": "nowrap",
                "text-align": "left"
            }).disableSelection();
            E = document.createElement("div");
            E.id = b + "volumesetcontainer";
            v.appendChild(E);
            a("#" + b + "volumesetcontainer").css({
                position: "absolute",
                "background-color": q
            }).disableSelection();
            Ea = document.createElement("div");
            Ea.id = b + "volumeupbutton";
            E.appendChild(Ea);
            a("#" + b + "volumeupbutton").css({
                position: "absolute",
                fill: r
            }).html('<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 800 800"><path fill-rule="evenodd" clip-rule="evenodd" d="M545.676,86.489c14.686-2.451,25.617,5.51,36.586,10.976 c50.467,25.145,90.846,61.559,121.957,105.695c36.729,52.107,62.104,111.54,63.418,197.163 c0.619,40.392-6.879,78.427-18.293,110.574c-11.559,32.553-26.215,59.762-44.717,85.369 c-27.123,37.537-59.275,70.676-100.818,94.313c-6.74,3.836-13.5,8.24-20.732,11.789c-13.199,6.479-33.148,18.762-49.189,6.098 c-9.744-7.693-15.137-23.627-7.316-36.586c5.221-8.65,14.797-12.842,24.391-17.074c19.174-8.459,36.504-19.939,52.441-32.521 c42.008-33.164,74.291-75.611,93.092-132.932c8.752-26.68,17.211-60.645,14.23-97.159c-0.783-9.597-0.719-18.443-1.627-26.831 c-2.674-24.729-8.688-46.792-17.074-67.482c-10.945-26.999-23.814-50.801-40.652-72.36c-7.646-9.793-16.938-20.547-26.83-29.676 c-19.475-17.972-41.15-34.263-65.855-47.156c-14.627-7.633-34.898-12.01-36.182-33.741 C521.668,100.793,533.361,88.544,545.676,86.489z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M342.417,131.613c13.52-0.659,24.913,8.526,28.049,19.919 c2.251,8.171,1.22,19.046,1.22,30.083c0,145.936,0,287.211,0,434.165c0,10.596,1.203,21.74-0.407,30.488 c-2.75,14.943-20.474,27.541-38.619,19.92c-7.665-3.219-14.735-11.482-21.139-17.887c-42.516-42.516-83.082-83.488-126.021-126.428 c-3.266-3.268-7.283-7.953-10.569-8.539c-9.47-1.68-20.244,0-30.083,0c-19.667,0-39.878,0-60.166,0 c-10.165,0-20.518,1.055-29.27-0.813c-10.942-2.334-20.231-10.883-22.358-21.139c-1.349-6.498-0.407-14.875-0.407-22.764 c0-46.528,0-90.371,0-137.405c0-10.514-0.845-21.152,2.439-28.049c3.64-7.646,11.651-14.358,22.358-15.854 c17.026-2.38,39.482-0.407,58.133-0.407c21.264,0,40.268,0,58.539,0c5.924,0,17.312-14.872,21.139-18.7 c38.748-38.748,76.943-76.537,116.265-115.858C320.443,143.423,326.955,132.366,342.417,131.613z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M504.212,190.151c11.813-0.833,23.587,6.137,33.741,11.789 c28.867,16.071,53.221,37.1,71.547,62.604c12.014,16.717,24.061,35.695,31.709,57.726c7.678,22.119,12.268,47.98,13.414,75.207 c1.213,28.769-5.297,54.604-12.602,76.831c-14.658,44.607-41.742,77.303-74.393,104.477c-7.686,6.396-16.842,12.406-26.83,17.887 c-12.879,7.066-29.714,18.773-46.343,10.977c-12.367-5.799-21.715-23.805-12.604-39.434c5.439-9.326,16.416-13.232,25.611-18.293 c33.083-18.203,60.483-44.904,76.019-81.303c10.098-23.66,17.5-53.273,13.822-87.81c-2.361-22.174-9.406-41.17-17.074-56.913 c-8.992-18.46-23.578-37.04-38.619-50.002c-12.168-10.487-24.719-18.474-39.839-26.423c-12.549-6.597-28.033-16.262-22.766-37.4 C481.554,199.86,491.683,191.036,504.212,190.151z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M456.649,294.627c12.543-2.064,22.457,3.727,31.303,8.943 c18.758,11.064,33.714,28.004,43.089,48.376c5.629,12.23,10.859,30.956,10.57,47.969c-0.658,38.536-18.93,70.033-41.466,88.215 c-4.451,3.594-10.027,6.871-15.854,10.164c-5.461,3.084-11.988,6.908-17.887,7.723c-14.371,1.984-26.4-7.043-30.488-16.666 c-2.91-6.854-3.279-16.693,0.406-23.58c7.52-14.049,26.189-18.113,36.586-30.082c5.488-6.314,9.74-14.529,11.383-23.577\tc4.76-26.199-5.623-44.244-19.512-54.475c-9.348-6.883-21.275-12.916-28.457-23.171 C428.942,315.932,439.655,297.505,456.649,294.627z"/></svg>').disableSelection();
            Fa = document.createElement("div");
            Fa.id = b + "volumeoffbutton";
            E.appendChild(Fa);
            a("#" + b + "volumeoffbutton").css({
                position: "absolute",
                fill: r,
                visibility: "hidden"
            }).html('<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 800 800"><path fill-rule="evenodd" clip-rule="evenodd" d="M342.417,131.613c13.52-0.659,24.913,8.526,28.049,19.919 c2.251,8.171,1.22,19.046,1.22,30.083c0,145.936,0,287.211,0,434.165c0,10.596,1.203,21.74-0.407,30.488 c-2.75,14.943-20.474,27.541-38.619,19.92c-7.665-3.219-14.735-11.482-21.139-17.887c-42.516-42.516-83.082-83.488-126.021-126.428 c-3.266-3.268-7.283-7.953-10.569-8.539c-9.47-1.68-20.244,0-30.083,0c-19.667,0-39.878,0-60.166,0 c-10.165,0-20.518,1.055-29.27-0.813c-10.942-2.334-20.231-10.883-22.358-21.139c-1.349-6.498-0.407-14.875-0.407-22.764 c0-46.528,0-90.371,0-137.405c0-10.514-0.845-21.152,2.439-28.049c3.64-7.646,11.651-14.358,22.358-15.854 c17.026-2.38,39.482-0.407,58.133-0.407c21.264,0,40.268,0,58.539,0c5.924,0,17.312-14.872,21.139-18.7 c38.748-38.748,76.943-76.537,116.265-115.858C320.443,143.423,326.955,132.366,342.417,131.613z"/></svg>').disableSelection();
            Q = document.createElement("div");
            Q.id = b + "volumetext";
            E.appendChild(Q);
            a("#" + b + "volumetext").css({
                position: "absolute",
                "font-family": U,
                color: r,
                "white-space": "nowrap",
                "text-align": "center"
            }).disableSelection();
            ga = document.createElement("img");
            ga.id = b + "volumehit";
            E.appendChild(ga);
            ga.src = "data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw%3D%3D";
            a("#" + b + "volumehit").css({
                position: "absolute",
                cursor: "pointer"
            }).mouseenter(function() {
                0 == l ? (a("#" + b + "volumeoffbutton").stop(),
                    a("#" + b + "volumeoffbutton").animate({
                        opacity: .5
                    }, 200, function() {})) : (a("#" + b + "volumeupbutton").stop(), a("#" + b + "volumeupbutton").animate({
                    opacity: .5
                }, 200, function() {}))
            }).mouseleave(function() {
                0 == l ? (a("#" + b + "volumeoffbutton").stop(), a("#" + b + "volumeoffbutton").animate({
                    opacity: 1
                }, 200, function() {})) : (a("#" + b + "volumeupbutton").stop(), a("#" + b + "volumeupbutton").animate({
                    opacity: 1
                }, 200, function() {}))
            }).click(function() {
                0 == l ? (l = Xa, ha(l)) : (Xa = l, ha(0, l), l = 0);
                ia()
            }).disableSelection();
            ja = document.createElement("img");
            ja.id = b + "volumegrab";
            ja.src = "data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw%3D%3D";
            v.appendChild(ja);
            a("#" + b + "volumegrab").css({
                position: "absolute"
            }).disableSelection();
            R = document.createElement("div");
            R.id = b + "playstopcontainer";
            v.appendChild(R);
            a("#" + b + "playstopcontainer").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                "background-color": q,
                cursor: "pointer"
            }).mouseenter(function() {
                z ? (a("#" + b + "stopbutton").stop(), a("#" + b + "stopbutton").animate({
                        opacity: .5
                    }, 200,
                    function() {})) : (a("#" + b + "playbutton").stop(), a("#" + b + "playbutton").animate({
                    opacity: .5
                }, 200, function() {}))
            }).mouseleave(function() {
                z ? (a("#" + b + "stopbutton").stop(), a("#" + b + "stopbutton").animate({
                    opacity: 1
                }, 200, function() {})) : (a("#" + b + "playbutton").stop(), a("#" + b + "playbutton").animate({
                    opacity: 1
                }, 200, function() {}))
            }).click(function() {
                (z = !z) ? ka(): Ya()
            }).disableSelection();
            V = document.createElement("div");
            V.id = b + "player";
            R.appendChild(V);
            a("#" + b + "player").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "0px",
                height: "0px"
            });
            Ga = document.createElement("div");
            Ga.id = b + "playbutton";
            R.appendChild(Ga);
            a("#" + b + "playbutton").css({
                position: "absolute",
                fill: r
            }).html('<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 800 800"><path fill-rule="evenodd" clip-rule="evenodd" d="M629.318,422.4c-60.371,32.947-118.049,65.133-177.576,98.177\tc-39.247,21.786-77.668,43.592-117.944,65.562c-39.382,21.482-78.573,44.241-117.943,65.561 c-14.424,7.811-28.84,16.088-44.147,24.709c-4.936,2.78-11.06,6.705-15.814,6.919c-5.791,0.262-9.43-3.366-10.872-6.26\tc-3.001-6.021-1.646-22.158-1.646-33.274c0-162.162,0-322.539,0-484.625c0-15.976-3.786-41.944,10.542-42.5\tc5.909-0.228,12.552,3.985,17.791,6.919c79.265,44.385,157.067,87.993,236.877,131.781c78.956,43.32,157.618,87.595,236.877,131.782\tc5.054,2.818,12.511,7.062,11.529,13.837C655.287,412.766,636.421,415.384,629.318,422.4z"/></svg>').disableSelection();
            Ha = document.createElement("div");
            Ha.id = b + "stopbutton";
            R.appendChild(Ha);
            a("#" + b + "stopbutton").css({
                position: "absolute",
                visibility: "hidden",
                fill: r
            }).html('<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 800 800"><path fill-rule="evenodd" clip-rule="evenodd" d="M340.665,658.724c-8.406,2.006-17.307,1.162-26.155,1.162 c-45.611-0.003-90.096,0.003-136.293,0c-10.014,0-18.387,0.725-24.992-2.324c-5.795-2.676-11.13-7.672-12.496-14.531 c-1.672-8.393-0.291-19.367-0.291-29.933c0-142.301,0-284.455,0-427.768c0-10.579-1.218-21.771,0.582-29.352 c1.931-8.133,10.189-14.542,19.761-15.692c7.036-0.846,14.813,0,22.376,0c43.766,0,88.526,0,132.806,0 c7.418,0,15.05-0.682,21.795,0.291c9.333,1.345,17.031,8.313,18.599,16.855c1.598,8.708,0.29,19.862,0.29,30.223 c0,141.114,0,282.891,0,425.443c0,10.412,1.162,21.337-0.581,29.643C354.305,651.135,348.716,656.32,340.665,658.724z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M463.3,140.577c16.503-1.65,36.622-0.291,54.054-0.291 c36.183,0,70.441,0,107.522,0c9.068,0,17.816-0.569,23.829,2.906c5.403,3.124,9.812,8.565,10.754,15.984 c1.205,9.495,0.29,20.106,0.289,30.223c-0.003,68.998,0.003,143.314,0,211.559c-0.003,66.995,0.003,142.417,0,211.851\tc0,10.345,1.091,21.271-0.582,29.641c-1.589,7.961-7.26,13.781-14.82,16.274c-7.406,2.443-20.666,1.162-29.932,1.162 c-43.781-0.003-81.251,0.003-124.378,0c-10.702,0-22.326,1.222-30.224-0.872c-8.923-2.366-15.14-9.265-16.273-19.18 c-1.084-9.479-0.291-19.711-0.291-29.933c0-140.69,0-281.595,0-422.537c0-10.013-1.137-20.483,0.291-29.06\tC445.167,148.519,453.397,141.568,463.3,140.577z"/></svg>').disableSelection();
            a("#" + b + "volumegrab").mouseover(function(f) {
                a("#" + b + "volumegrab").css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto")
            });
            a("#" + b + "volumegrab").grab({
                onstart: function(f) {
                    a("#" + b + "volumegrab").css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAAKmSURBVEiJ7ZbPaxNBFMc/m4lttYtNBem9F3MrgvRawR78C/wbemz/CS3Yf8OLXgQ9KAgi9gcBLz2oh0IOhfZSLdUkTZN9s+NhZtpNdrJZFeyhDgzz2GTn8977vnmzkTGGyxiVS6H+B18JcDX0MIqiMu9GbgKYoTU4sicoCC4BU8BLZz8CUkC7mToHis+pMSY3C6CvgRbwRkRMr9czwDugDbwFbgExMOmcG8kqC47iODbGGCMiJo5j0+12TafTMUDn5OTEHB8fG6DjHLntHLjGhRwDjLLFFbXb7baIICIAZOxKxo4ODg4eAC+AWeAGVs5c0ZQFK4AkSUJgRIQkSQAiEaHZbC4Bz4Cag+fSXlRcvpAq3msRIU1T9vf3ERG01hweHk552zvh7HtYzROgjy28cx2LIn4F/HBrnI3SR661Pn8mIuzt7U1lshIBN4FprNYDrFERV4ClVqsVp2n6cGZm5nk2Yq11cM3abkw6aC7VoyKOgE0f0dHR0X0P9hGFpv9te3sb4CuDTaYUmGq1ul6r1d77TZeXl6+HIKG5srKyi9VTGNJ2HNiIyCel1Mbc3NzHJElYXV0NwkLPgDvAY2xR5QoLRmucAonWugGIiFCv1xnWOKRzo9Hwe/SBM6DnIh8AF1W1AKfVanV9fn7+Q5Gm2bm2trYLfPkbcAr0RWRHKfW0Xq9vjiuqTJqfOOgZ9hynw5uP61wp0NNa7yilNhYWFrY8ZJTebvSBrpv9EHjctegr81RrvaWUihYXF+9ScEyAzw54yog0A0Sh2yjwIVDBNoNpbPOfxXazCQazZrAR/gS+Ad+xN5aGP/sQSJ33JmP7m2cYLNiIW+5/uTRD+Yj98BfGhFtzrdCBBBu5byDWqwzrd8FwoW+Rzj4zA5uPBf+LcfW+q38BmqVkrsNuDnIAAAAASUVORK5CYII%3D), auto");
                    F = A ? a("#" + b + "volumecontroller").height() : a("#" + b + "volumecontroller").width()
                },
                onmove: function(f) {
                    if (A) {
                        F + f.offset.y < a("#" + b + "volumegrab").height() ? a("#" + b + "volumecontroller").css({
                            height: F + f.offset.y + "px"
                        }) : a("#" + b + "volumecontroller").css({
                            height: a("#" + b + "volumegrab").height() + "px"
                        });
                        0 > F + f.offset.y && a("#" + b + "volumecontroller").css({
                            height: "0px"
                        });
                        try {
                            g.height = a("#" + b + "volumecontroller").height()
                        } catch (c) {}
                        l = 100 * a("#" + b + "volumecontroller").height() / a("#" + b + "volumegrab").height()
                    } else {
                        F + f.offset.x <
                            a("#" + b + "volumegrab").width() ? a("#" + b + "volumecontroller").css({
                                width: F + f.offset.x + "px"
                            }) : a("#" + b + "volumecontroller").css({
                                width: a("#" + b + "volumegrab").width() + "px"
                            });
                        0 > F + f.offset.x && a("#" + b + "volumecontroller").css({
                            width: "0px"
                        });
                        try {
                            g.width = a("#" + b + "volumecontroller").width()
                        } catch (c) {}
                        l = 100 * a("#" + b + "volumecontroller").width() / a("#" + b + "volumegrab").width()
                    }
                    ia();
                    Q.innerHTML = Math.ceil(l) + "%";
                    x ? h.volume = l / 100 : p.fl_volume(l / 100)
                },
                onfinish: function(f) {
                    a("#" + b + "volumegrab").css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto");
                    try {
                        window.localStorage.removeItem(b + "volume"), window.localStorage.setItem(b + "volume", l)
                    } catch (c) {}
                }
            });
            a(window).resize(function() {
                Za()
            });
            Ia = document.createElement("div");
            Ia.id = b + "contextmenu";
            v.appendChild(Ia);
            a("#" + b + "contextmenu").css({
                "z-index": "987",
                position: "absolute",
                "background-color": T,
                visibility: "hidden",
                "white-space": "nowrap",
                color: r,
                "font-family": U,
                "text-align": "left",
                cursor: "pointer"
            }).mouseenter(function() {
                a(this).css({
                    "background-color": X,
                    color: r
                });
                mouseOverContext = !0
            }).mouseleave(function() {
                a(this).css({
                    "background-color": T,
                    color: r
                });
                mouseOverContext = !1
            }).click(function() {
                top.location != Ja.location ? top.location.href = da : Ja.location.href = da;
                a(this).css({
                    visibility: "hidden",
                    display: "none"
                });
                mouseOverContext = !1
            });
            D.oncontextmenu = J;
            Ka(D, "contextmenu", J);
            Ka(D, "mousedown", K);
            Ka(D, "touchstart", K);
            Za();
            x ? (h = document.createElement("audio"), h.id = b + "html5audio", h.controls = !0, V.appendChild(h), a("#" + b + "html5audio").css({
                    position: "absolute",
                    width: "0px",
                    height: "0px"
                }), h.preload = "auto", h.onabort = function() {}, h.onended = function() {}, h.oncanplay =
                function() {}, h.ondurationchange = function() {
                    N && "console" in window && console.log(h.currentSrc)
                }, h.onerror = function() {}, h.onloadeddata = function() {}, h.onloadedmetadata = function() {}, h.onloadstart = function() {}, h.onpause = function() {}, h.onplay = function() {}, h.onplaying = function() {}, h.onprogress = function() {}, h.onseeked = function() {}, h.onstalled = function() {}, h.onsuspend = function() {}, h.onwaiting = function() {
                    //h.play()
                }, h.addEventListener("timeupdate", function() {}, !1), ba && !mobilecheck() && (z = !0, ka())) : ib();
            
            setInterval(function() {
                    
                },
                na);
            A ? a("#" + b + "volumecontroller").css({
                height: "0px"
            }) : a("#" + b + "volumecontroller").css({
                width: "0px"
            });
            ia();
            ha(l, 0)
        }

        function ia() {
            0 == l ? (a("#" + b + "volumeoffbutton").css({
                visibility: "visible"
            }), a("#" + b + "volumeupbutton").css({
                visibility: "hidden"
            })) : (a("#" + b + "volumeoffbutton").css({
                visibility: "hidden"
            }), a("#" + b + "volumeupbutton").css({
                visibility: "visible"
            }))
        }

        function ha(f, fa) {
            fa = fa || 0;
            fa != f && a({
                countNum: fa
            }).animate({
                countNum: Math.floor(f)
            }, {
                duration: 800,
                easing: "linear",
                step: function() {
                    Q.innerHTML = Math.ceil(this.countNum) +
                        "%";
                    try {
                        0 == Math.ceil(this.countNum) % 5 && (x ? h.volume = this.countNum / 100 : p.fl_volume(Math.floor(this.countNum) / 100))
                    } catch (a) {}
                },
                complete: function() {
                    Q.innerHTML = Math.floor(f) + "%";
                    try {
                        x ? h.volume = f / 100 : p.fl_volume(Math.round(f) / 100)
                    } catch (a) {}
                }
            });
            if (A) {
                a("#" + b + "volumecontroller").css({
                    left: "0px",
                    top: d + "px"
                });
                a("#" + b + "volumecontroller").stop();
                a("#" + b + "volumecontroller").animate({
                    height: e / 100 * f + "px"
                }, {
                    duration: 800,
                    progress: function() {
                        try {
                            g.height = Math.round(a("#" + b + "volumecontroller").height())
                        } catch (f) {}
                    },
                    complete: function() {
                        try {
                            g.height = Math.round(a("#" + b + "volumecontroller").height())
                        } catch (f) {}
                    }
                });
                a("#" + b + "volumecontroller").css({
                    width: d + "px",
                    "border-bottom": "solid 1px " + q,
                    "border-right": "none"
                });
                try {
                    a("#" + b + "canvas").css({
                        top: d + "px",
                        left: "0px"
                    }), g.width = d
                } catch (hb) {}
            } else {
                a("#" + b + "volumecontroller").css({
                    top: "0px",
                    left: c + "px"
                });
                a("#" + b + "volumecontroller").stop();
                a("#" + b + "volumecontroller").animate({
                    width: e / 100 * f + "px"
                }, {
                    duration: 800,
                    progress: function() {
                        try {
                            g.width = Math.round(a("#" + b + "volumecontroller").width())
                        } catch (f) {}
                    },
                    complete: function() {
                        try {
                            g.width = Math.round(a("#" + b + "volumecontroller").width())
                        } catch (f) {}
                    }
                });
                a("#" + b + "volumecontroller").css({
                    "border-right": "solid 1px " + q,
                    "border-bottom": "none",
                    height: c + "px"
                });
                try {
                    a("#" + b + "canvas").css({
                        top: "0px",
                        left: c + "px"
                    }), g.height = c
                } catch (hb) {}
            }
        }

        function Za() {
            d = a("#" + b).width();
            c = a("#" + b).height();
            if (A = d < c ? !0 : !1) {
                e = c - 2 * d;
                a("#" + b + "volumecontroller").css({
                    left: "0px",
                    top: d + "px",
                    width: d + "px",
                    height: e / 100 * l + "px",
                    "border-bottom": "solid 1px " + q,
                    "border-right": "none"
                }).stop();
                try {
                    a("#" +
                        b + "canvas").css({
                        left: "0px",
                        top: d + "px"
                    }), g.width = d, g.height = Math.round(e / 100 * l)
                } catch (f) {}
                a("#" + b + "playstopcontainer").css({
                    height: d + "px",
                    width: d + "px"
                });
                a("#" + b + "playbutton, #" + b + "stopbutton").css({
                    top: "0px",
                    left: "0px",
                    height: d + "px",
                    width: d + "px"
                });
                N && a("#" + b + "engineimg").css({
                    height: d / 2 + "px",
                    width: d / 2 + "px",
                    top: c - d - d / 2 + "px",
                    right: "0px",
                    rotate: "90deg"
                });
                a("#" + b + "channelname").css({
                    "font-size": d / 2 + "px",
                    "line-height": d / 2 + "px",
                    width: e + "px",
                    height: d / 2 + "px",
                    top: d + e / 2 + "px",
                    left: d - d / 2 / 2 - e / 2 + "px",
                    rotate: "90deg"
                });
                a("#" + b + "volumegrab").css({
                    left: "0px",
                    top: d + "px",
                    height: e + "px",
                    width: d + "px"
                });
                a("#" + b + "volumesetcontainer").css({
                    left: "0px",
                    top: d + e + "px",
                    width: d + "px",
                    height: d + "px"
                });
                a("#" + b + "volumeupbutton , #" + b + "volumeoffbutton").css({
                    height: d / 2 + "px",
                    width: d / 2 + "px",
                    top: (d - d / 2) / 2 + "px",
                    left: d - (d / 20 + d / 2) + "px",
                    rotate: "90deg"
                });
                a("#" + b + "volumetext").css({
                    "font-size": d / 4 + "px",
                    "line-height": d / 4 + "px",
                    height: d / 4 + "px",
                    width: d + "px",
                    top: d / 2 - d / 8 + "px",
                    left: d / 4 / 2 - d / 2 + d / 10 + "px",
                    rotate: "90deg"
                });
                a("#" + b + "volumehit").css({
                    width: d +
                        "px",
                    height: d + "px",
                    left: "0px",
                    top: "0px"
                });
                a("#" + b + "statustext").css({
                    "font-size": d / 4 + "px",
                    "line-height": d / 4 + "px",
                    height: d / 4 + "px",
                    width: e + "px",
                    top: d + e / 2 + "px",
                    left: 0 - e / 2 + d / 10 + d / 4 / 2 + "px",
                    rotate: "90deg"
                });
                a("#" + b + "contextmenu").css({
                    left: 0 - (e / 2 - d / 2) + "px",
                    top: e / 2 - d / 2 + d + "px",
                    width: e + "px",
                    height: d + "px",
                    "font-size": d / 2 + "px",
                    "line-height": d + "px",
                    rotate: "90deg"
                })
            } else {
                e = d - 2 * c;
                a("#" + b + "volumecontroller").css({
                    top: "0px",
                    left: c + "px",
                    height: c + "px",
                    width: e / 100 * l + "px",
                    "border-right": "solid 1px " + q,
                    "border-bottom": "none"
                }).stop();
                try {
                    a("#" + b + "canvas").css({
                        top: "0px",
                        left: c + "px"
                    }), g.width = Math.round(e / 100 * l), g.height = c
                } catch (f) {}
                a("#" + b + "playstopcontainer").css({
                    height: c + "px",
                    width: c + "px"
                });
                a("#" + b + "playbutton, #" + b + "stopbutton").css({
                    top: "0px",
                    left: "0px",
                    height: c + "px",
                    width: c + "px"
                });
                N && a("#" + b + "engineimg").css({
                    top: c / 20 + "px",
                    right: c + "px",
                    height: c / 2 + "px",
                    width: width = c / 2 + "px",
                    rotate: "0deg"
                });
                a("#" + b + "channelname").css({
                    top: "0px",
                    left: c + "px",
                    width: e + "px",
                    height: c / 2 + "px",
                    "font-size": c / 2 + "px",
                    lineHeight: "1",
                    "margin-left": c / 10 +
                        "px",
                    padding: "0",
                    rotate: "0deg"
                });
                a("#" + b + "volumegrab").css({
                    top: "0px",
                    left: c + "px",
                    width: e + "px",
                    height: c + "px"
                });
                a("#" + b + "volumeupbutton, #" + b + "volumeoffbutton").css({
                    top: c / 20 + "px",
                    left: (c - c / 2) / 2 + "px",
                    width: c / 2 + "px",
                    height: c / 2 + "px",
                    rotate: "0deg"
                });
                a("#" + b + "volumetext").css({
                    "font-size": c / 4 + "px",
                    "line-height": c / 4 + "px",
                    height: c / 4 + "px",
                    width: c + "px",
                    top: c - c / 4 - c / 10 + c / 40 + "px",
                    left: "0px",
                    rotate: "0deg"
                });
                a("#" + b + "statustext").css({
                    "font-size": c / 4 + "px",
                    "line-height": c / 4 + "px",
                    height: c / 4 + "px",
                    width: e + "px",
                    top: c -
                        c / 4 - c / 10 + c / 40 + "px",
                    left: c + "px",
                    "margin-left": c / 10 + "px",
                    rotate: "0deg"
                });
                a("#" + b + "volumesetcontainer").css({
                    left: c + e + "px",
                    top: "0px",
                    width: c + "px",
                    height: c + "px"
                });
                a("#" + b + "volumehit").css({
                    width: c + "px",
                    height: c + "px",
                    left: "0px",
                    top: "0px"
                });
                a("#" + b + "contextmenu").css({
                    top: "0px",
                    left: c + "px",
                    width: e + "px",
                    height: c + "px",
                    "font-size": c / 2 + "px",
                    "line-height": c + "px",
                    rotate: "0deg"
                })
            }
            ea();
            ab();
            a("#" + b + "contextmenu").html('<div style="height:' + c + "px; overflow: hidden; width:" + e + 'px;" class="' + b + 'marquee_contextmenu">' +
                M + "</div>");
            try {
                bb.marquee("destroy")
            } catch (f) {}
            bb = a("." + b + "marquee_contextmenu").marquee({
                duration: 2E3 * e / 300,
                gap: 0,
                delayBeforeStart: 0,
                direction: "left",
                duplicated: !1
            })
        }

        function ea() {
            a("#" + b + "channelname").html("<span>" + t + "</span>");
            "TRUE" == y.toUpperCase() && a("#" + b + "channelname").html('<div style="height:' + c + "px; vertical-align: top; overflow: hidden; width:" + e + 'px;" class="' + b + 'marquee_channelname">' + t + "</div>");
            "FALSE" == y.toUpperCase() && a("#" + b + "channelname").html('<div style="height:' + c + "px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width:" +
                e + 'px;">' + t + "</div>");
            "AUTO" == y.toUpperCase() && (a("#" + b + "channelname").html("<span>" + t + "</span>"), A ? a("#" + b + "channelname").find("span:first").width() > c - 2 * d && a("#" + b + "channelname").html('<div style="height:' + c + "px; vertical-align: top; overflow: hidden; width:" + e + 'px;" class="' + b + 'marquee_channelname">' + t + "</div>") : a("#" + b + "channelname").find("span:first").width() > d - 2 * c && a("#" + b + "channelname").html('<div style="height:' + c + "px; vertical-align: top; overflow: hidden; width:" + e + 'px;" class="' + b + 'marquee_channelname">' +
                t + "</div>"));
            try {
                cb.marquee("destroy")
            } catch (f) {}
            cb = a("." + b + "marquee_channelname").marquee({
                duration: 5E3 * e / 300,
                gap: 0,
                delayBeforeStart: 0,
                direction: "left",
                duplicated: !1
            })
        }

        function ab() {
            a("#" + b + "statustext").html("<span>" + B + "</span>");
            "TRUE" == y.toUpperCase() && a("#" + b + "statustext").html('<div style="height:' + c + "px; vertical-align: top; overflow: hidden; width:" + e + 'px;" class="' + b + 'marquee_statustext">' + B + "</div>");
            "FALSE" == y.toUpperCase() && a("#" + b + "statustext").html('<div style="height:' + c + "px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width:" +
                e + 'px;">' + B + "</div>");
            "AUTO" == y.toUpperCase() && (a("#" + b + "statustext").html("<span>" + B + "</span>"), A ? a("#" + b + "statustext").find("span:first").width() > c - 2 * d && a("#" + b + "statustext").html('<div style="height:' + c + "px; vertical-align: top; overflow: hidden; width:" + e + 'px;" class="' + b + 'marquee_statustext">' + B + "</div>") : a("#" + b + "statustext").find("span:first").width() > d - 2 * c && a("#" + b + "statustext").html('<div style="height:' + c + "px; vertical-align: top; overflow: hidden; width:" + e + 'px;" class="' + b + 'marquee_statustext">' +
                B + "</div>"));
            try {
                db.marquee("destroy")
            } catch (f) {}
            db = a("." + b + "marquee_statustext").marquee({
                duration: 5E3 * e / 300,
                gap: 0,
                delayBeforeStart: 0,
                direction: "left",
                duplicated: !1
            })
        }

        function ib() {
            if (G.msie && (9 > Number(G.version) || 9 > G.documentMode)) {
                var a = ['<param name="movie" value="' + W + 'flashradio.swf" />', '<param name="FlashVars" value="id=' + b + '" />', '<param name="allowScriptAccess" value="always" />', '<param name="bgcolor" value="#ffffff" />', '<param name="wmode" value="transparent" />'];
                p = document.createElement('<object id="' +
                    b + 'flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>');
                for (var c = 0; c < a.length; c++) p.appendChild(document.createElement(a[c]))
            } else a = function(a, b, f) {
                    var c = document.createElement("param");
                    c.setAttribute("name", b);
                    c.setAttribute("value", f);
                    a.appendChild(c)
                }, p = document.createElement("object"), p.setAttribute("id", b + "flash"), p.setAttribute("name", b + "flash"), p.setAttribute("data", W + "flashradio.swf"), p.setAttribute("type", "application/x-shockwave-flash"),
                p.setAttribute("width", "1"), p.setAttribute("height", "1"), p.setAttribute("tabindex", "-1"), a(p, "flashvars", "id=" + b), a(p, "allowscriptaccess", "always"), a(p, "bgcolor", "#ffffff"), a(p, "wmode", "transparent");
            V.appendChild(p)
        }

        function ka() {
            try {
                a(".sodahnativeflashradio3").each(function() {
                    a(this).attr("id") != b && a(this).data("flashradio").stopradio()
                })
            } catch (c) {}
            if (0 < C.length)
                if (x) {
                    for (var f = 0; f < C.length; f += 1) {
                        var d = document.createElement("source");
                        d.src = C[f];
                        h.appendChild(d)
                    }
                    h.load();
                    h.play()
                } else z = !0, p.fl_setStream(w,
                    P), p.fl_play();
            a("#" + b + "playbutton").css({
                visibility: "hidden"
            });
            a("#" + b + "stopbutton").css({
                visibility: "visible"
            });
            S()
        }

        function Ya() {
            z = !1;
            if (x) {
                for (h.pause(); h.firstChild;) h.removeChild(h.firstChild);
                //h.load()
            } else document[b + "flash"].fl_pause();
            a("#" + b + "playbutton").css({
                visibility: "visible"
            });
            a("#" + b + "stopbutton").css({
                visibility: "hidden"
            })
        }

        function S() {
            try {
                window.requestAnimationFrame(S) || window.mozRequestAnimationFrame(S) || window.webkitRequestAnimationFrame(S) || window.msRequestAnimationFrame(S) ||
                    window.oRequestAnimationFrame(S), n.clearRect(0, 0, g.width, g.height), n.lineWidth = 1, n.miterLimit = 1, n.beginPath(), H += (eb - H) / 6, I += (fb - I) / 6, A ? (n.moveTo(g.width, 1), n.lineTo(g.width, H / 100 * g.height), n.lineTo(g.width / 2, H / 100 * g.height), n.lineTo(g.width / 2, I / 100 * g.height), n.lineTo(0, I / 100 * g.height), n.lineTo(0, 0), n.lineTo(g.width, 1)) : (n.moveTo(1, 0), n.lineTo(H / 100 * g.width, 0), n.lineTo(H / 100 * g.width, g.height / 2), n.lineTo(I / 100 * g.width, g.height / 2), n.lineTo(I / 100 * g.width, g.height), n.lineTo(1, g.height), n.lineTo(1, 0)),
                    n.strokeStyle = q, n.stroke(), n.fillStyle = q, n.fill(), n.closePath()
            } catch (a) {}
        }

        function Oa() {
            a.ajax({
                method: "POST",
                crossDomain: !0,
                url: W + "radioname.php",
                data: {
                    url: pa[0]
                }
            }).done(function(a) {
                t = a;
                ea()
            })
        }

        function $a() {
            if ("" != O) a.ajax({
                method: "POST",
                crossDomain: !0,
                url: W + "currentsong.php",
                data: {
                    url: O,
                    ownurl: ma
                }
            }).done(function(a) {
                B != a && (B = a, ab())
            });
            else try {
                a("#" + b + "statustext").html("")
            } catch (f) {}
        }

        function Ka(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && (a["e" + b + c] = c, a[b + c] = function() {
                a["e" +
                    b + c](window.event)
            }, a.attachEvent("on" + b, a[b + c]))
        }

        function ca(a) {
            /^(f|ht)tps?:\/\//i.test(a) || (a = "http://" + a);
            return a
        }

        function Na(a) {
            "/" == a.slice(a.length - 1, a.length) && (a = a.slice(0, a.length - 1));
            "/;" == a.slice(a.length - 2, a.length) && (a = a.slice(0, a.length - 2));
            return a
        }

        function Y(a, b) {
            a = String(a).replace(/[^0-9a-f]/gi, "");
            6 > a.length && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]);
            b = b || 0;
            var c = "#",
                d, e;
            for (e = 0; 3 > e; e++) d = parseInt(a.substr(2 * e, 2), 16), d = Math.round(Math.min(Math.max(0, d + d * b), 255)).toString(16), c += ("00" +
                d).substr(d.length);
            return c
        }
        var jb = u.id;
        if (arguments.length) {
            this.element = a(u);
            this.options = a.extend(!0, {}, this.options, k);
            var Ja = this;
            this.element.bind("remove.flashradio", function() {
                Ja.destroy()
            })
        }
        var r = "#FFFFFF",
            q = "#0d72bf",
            t = "NATIVE FLASH RADIO V3 BY SODAH.DE",
            y = "AUTO",
            ba = !1,
            N = !1,
            O = "",
            ma = "",
            M = "",
            da = "",
            Qa = k.themefontcolor,
            Ra = k.themecolor,
            za = k.channelurls,
            Aa = k.channeltypes,
            qa = k.radioname,
            ra = k.scroll,
            sa = k.autoplay,
            ta = k.debug,
            ua = k.songtitleurl,
            va = k.startvolume,
            Ma = k.settings,
            wa = k.infotext,
            Sa = k.infolink,
            xa = k.songinformationinterval,
            Ta = k.titlefontname,
            Ua = k.titlegooglefontname,
            Va = k.songfontname,
            Wa = k.songgooglefontname,
            ya = k.firstsolution,
            b, D, v, R, Ga, Ha, p, Ba, E, ga, Ca, Ea, Fa, T, X, z = !1,
            A = !1,
            ja, F, e, l = 75,
            Q, C = [],
            pa = [],
            na = 2E4,
            U = "Roboto",
            Z = "Roboto:100",
            la = "Open Sans",
            aa = "Open+Sans:600",
            oa = "FLASH",
            x = !1,
            g, n, Da, B = "",
            d = 0,
            c = 0,
            Xa = 0,
            Ia, db, cb, bb, h, V, w, P, G = {},
            eb = 0,
            H = 0,
            fb = 0,
            I = 0,
            W;
        a(document).ready(function() {
            b = jb;
            var a = document.getElementsByTagName("script"),
                c, d;
            for (c = 0; d = a[c]; c++)
                if (d = d.src, 0 <= d.indexOf("nativeflashradiov3.js")) var e =
                    d.substring(0, d.indexOf("nativeflashradiov3.js"));
            W = e;
            gb()
        });
        this.FlashStreamStarted = function() {};
        this.FlashStreamStoped = function(a) {};
        this.PeakmeterLeft = function(a) {
            eb = a
        };
        this.stopradio = function() {
            Ya()
        };
        this.startradio = function() {
            ka()
        };
        this.setvolume = function(a) {
            l = parseInt(a);
            ia();
            ha(l)
        };
        this.PeakmeterRight = function(a) {
            fb = a
        };
        this.FlashIsReady = function() {
            ba && (z = !0, ka())
        };
        getFlashPluginVersion = function() {
            var a = 0,
                b;
            if (window.ActiveXObject) try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                var c =
                    b.GetVariable("$version");
                c && (c = c.split(" ")[1].split(","), a = parseInt(c[0], 10) + "." + parseInt(c[1], 10))
            } catch (d) {} else navigator.plugins && 0 < navigator.mimeTypes.length && (b = navigator.plugins["Shockwave Flash"]) && (a = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1"));
            return 1 * a
        };
        html5audiocheck = function() {
            var a = !1;
            try {
                var b = document.createElement("audio"),
                    a = !(!b.canPlayType || !b.canPlayType("audio/mpeg;").replace(/no/, ""))
            } catch (c) {
                a = !1
            }
            a && (a = /chrome/.test(navigator.userAgent.toLowerCase()) ||
                /Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent) || /OPR\/(\d+\.\d+)/i.test(navigator.userAgent) || /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? !0 : !1);
            return a
        };
        mobilecheck = function() {
            return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
        };
        uaBrowser = function(a) {
            a =
                a.toLowerCase();
            var b = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                c = /(msie) ([\w.]+)/,
                d = /(mozilla)(?:.*? rv:([\w.]+))?/;
            a = /(webkit)[ \/]([\w.]+)/.exec(a) || b.exec(a) || c.exec(a) || 0 > a.indexOf("compatible") && d.exec(a) || [];
            return {
                browser: a[1] || "",
                version: a[2] || "0"
            }
        };
        uaPlatform = function(a) {
            var b = a.toLowerCase(),
                c = /(android)/,
                d = /(mobile)/;
            a = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/.exec(b) || [];
            b = /(ipad|playbook)/.exec(b) || !d.exec(b) && c.exec(b) || [];
            a[1] && (a[1] = a[1].replace(/\s/g, "_"));
            return {
                platform: a[1] ||
                    "",
                tablet: b[1] || ""
            }
        };
        var La = uaBrowser(navigator.userAgent);
        La.browser && (G[La.browser] = !0, G.version = La.version);
        uaPlatform(navigator.userAgent);
        getDocMode = function() {
            var a;
            G.msie && (document.documentMode ? a = document.documentMode : (a = 5, document.compatMode && "CSS1Compat" === document.compatMode && (a = 7)));
            return a
        };
        G.documentMode = getDocMode()
    }
});




/*
jQuery grab 
https://github.com/jussi-kalliokoski/jQuery.grab
Ported from Jin.js::gestures   
https://github.com/jussi-kalliokoski/jin.js/
Created by Jussi Kalliokoski
Licensed under MIT License. 

Includes fix for IE
*/
(function($) {
    function unbind(e, t, n) {
        if (t.substr(0, 5) !== "touch") {
            return $(e).unbind(t, n)
        }
        var r, i;
        for (i = 0; i < bind._binds.length; i++) {
            if (bind._binds[i].elem === e && bind._binds[i].type === t && bind._binds[i].func === n) {
                if (document.addEventListener) {
                    e.removeEventListener(t, bind._binds[i].fnc, false)
                } else {
                    e.detachEvent("on" + t, bind._binds[i].fnc)
                }
                bind._binds.splice(i--, 1)
            }
        }
    }

    function bind(e, t, n, r) {
        if (t.substr(0, 5) !== "touch") {
            return $(e).bind(t, r, n)
        }
        var i, s;
        if (bind[t]) {
            return bind[t].bind(e, t, n, r)
        }
        i = function(t) {
            if (!t) {
                t = window.event
            }
            if (!t.stopPropagation) {
                t.stopPropagation = function() {
                    this.cancelBubble = true
                }
            }
            t.data = r;
            n.call(e, t)
        };
        if (document.addEventListener) {
            e.addEventListener(t, i, false)
        } else {
            e.attachEvent("on" + t, i)
        }
        bind._binds.push({
            elem: e,
            type: t,
            func: n,
            fnc: i
        })
    }

    function grab(e, t) {
        var n = {
            move: {
                x: 0,
                y: 0
            },
            offset: {
                x: 0,
                y: 0
            },
            position: {
                x: 0,
                y: 0
            },
            start: {
                x: 0,
                y: 0
            },
            affects: document.documentElement,
            stopPropagation: false,
            preventDefault: true,
            touch: true
        };
        extend(n, t);
        n.element = e;
        bind(e, mousedown, mouseDown, n);
        if (n.touch) {
            bind(e, touchstart, touchStart, n)
        }
    }

    function ungrab(e) {
        unbind(e, mousedown, mousedown)
    }

    function mouseDown(e) {
        e.data.position.x = e.pageX;
        e.data.position.y = e.pageY;
        e.data.start.x = e.pageX;
        e.data.start.y = e.pageY;
        e.data.event = e;
        if (e.data.onstart && e.data.onstart.call(e.data.element, e.data)) {
            return
        }
        if (e.preventDefault && e.data.preventDefault) {
            e.preventDefault()
        }
        if (e.stopPropagation && e.data.stopPropagation) {
            e.stopPropagation()
        }
        bind(e.data.affects, mousemove, mouseMove, e.data);
        bind(e.data.affects, mouseup, mouseUp, e.data)
    }

    function mouseMove(e) {
        if (e.preventDefault && e.data.preventDefault) {
            e.preventDefault()
        }
        if (e.stopPropagation && e.data.preventDefault) {
            e.stopPropagation()
        }
        e.data.move.x = e.pageX - e.data.position.x;
        e.data.move.y = e.pageY - e.data.position.y;
        e.data.position.x = e.pageX;
        e.data.position.y = e.pageY;
        e.data.offset.x = e.pageX - e.data.start.x;
        e.data.offset.y = e.pageY - e.data.start.y;
        e.data.event = e;
        if (e.data.onmove) {
            e.data.onmove.call(e.data.element, e.data)
        }
    }

    function mouseUp(e) {
        if (e.preventDefault && e.data.preventDefault) {
            e.preventDefault()
        }
        if (e.stopPropagation && e.data.stopPropagation) {
            e.stopPropagation()
        }
        unbind(e.data.affects, mousemove, mouseMove);
        unbind(e.data.affects, mouseup, mouseUp);
        e.data.event = e;
        if (e.data.onfinish) {
            e.data.onfinish.call(e.data.element, e.data)
        }
    }

    function touchStart(e) {
        e.data.position.x = e.touches[0].pageX;
        e.data.position.y = e.touches[0].pageY;
        e.data.start.x = e.touches[0].pageX;
        e.data.start.y = e.touches[0].pageY;
        e.data.event = e;
        if (e.data.onstart && e.data.onstart.call(e.data.element, e.data)) {
            return
        }
        if (e.preventDefault && e.data.preventDefault) {
            e.preventDefault()
        }
        if (e.stopPropagation && e.data.stopPropagation) {
            e.stopPropagation()
        }
        bind(e.data.affects, touchmove, touchMove, e.data);
        bind(e.data.affects, touchend, touchEnd, e.data)
    }

    function touchMove(e) {
        if (e.preventDefault && e.data.preventDefault) {
            //e.preventDefault()
        }
        if (e.stopPropagation && e.data.stopPropagation) {
            e.stopPropagation()
        }
        e.data.move.x = e.touches[0].pageX - e.data.position.x;
        e.data.move.y = e.touches[0].pageY - e.data.position.y;
        e.data.position.x = e.touches[0].pageX;
        e.data.position.y = e.touches[0].pageY;
        e.data.offset.x = e.touches[0].pageX - e.data.start.x;
        e.data.offset.y = e.touches[0].pageY - e.data.start.y;
        e.data.event = e;
        if (e.data.onmove) {
            e.data.onmove.call(e.data.elem, e.data)
        }
    }

    function touchEnd(e) {
        if (e.preventDefault && e.data.preventDefault) {
            e.preventDefault()
        }
        if (e.stopPropagation && e.data.stopPropagation) {
            e.stopPropagation()
        }
        unbind(e.data.affects, touchmove, touchMove);
        unbind(e.data.affects, touchend, touchEnd);
        e.data.event = e;
        if (e.data.onfinish) {
            e.data.onfinish.call(e.data.element, e.data)
        }
    }
    var extend = $.extend,
        mousedown = "mousedown",
        mousemove = "mousemove",
        mouseup = "mouseup",
        touchstart = "touchstart",
        touchmove = "touchmove",
        touchend = "touchend",
        touchcancel = "touchcancel";
    bind._binds = [];
    $.fn.grab = function(e, t) {
        return this.each(function() {
            return grab(this, e, t)
        })
    };
    $.fn.ungrab = function(e) {
        return this.each(function() {
            return ungrab(this, e)
        })
    }
})(jQuery);

// This jQuery Plugin will disable drag or selection for Android and iOS devices.
jQuery.fn.extend({
    disableSelection: function() {
        this.each(function() {
            this.onselectstart = function() {
                return false;
            };
            this.onmousedown = function(ev) { //drag unterbinden
                return false;
            };
            this.unselectable = "on";
            jQuery(this).css('-moz-user-select', 'none');
            jQuery(this).css('-webkit-user-select', 'none');
            jQuery(this).css('-webkit-touch-callout', 'none');
            jQuery(this).css('-khtml-user-select', 'none');
            jQuery(this).css('-ms-user-select', 'none');
            jQuery(this).css('user-select', 'none');
            jQuery(this).css('tap-highlight-color', 'rgba(0, 0, 0, 0)');
            jQuery(this).css('-o-tap-highlight-color', 'rgba(0, 0, 0, 0)');
            jQuery(this).css('-moz-tap-highlight-color', 'rgba(0, 0, 0, 0)');
            jQuery(this).css('-webkit-tap-highlight-color', 'rgba(0, 0, 0, 0)');
        });
    }
});

/*
 * rotate: A jQuery cssHooks adding a cross browser 'rotate' property to $.fn.css() and $.fn.animate()
 *
 * Limitations:
 * - requires jQuery 1.4.3+
 * - cannot be used together with jquery.scale.js
 *
 * Copyright (c) 2010 Louis-RÃƒÂ©mi BabÃƒÂ© twitter.com/louis_remi
 * Licensed under the MIT license.
 * 
 * This saved you an hour of work? 
 * Send me music http://www.amazon.fr/wishlist/HNTU0468LQON
 *
 */
(function($) {
    var div = document.createElement('div'),
        divStyle = div.style,
        support = $.support;
    support.transform = divStyle.MozTransform === '' ? 'MozTransform' : (divStyle.MsTransform === '' ? 'MsTransform' : (divStyle.WebkitTransform === '' ? 'WebkitTransform' : (divStyle.OTransform === '' ? 'OTransform' : (divStyle.transform === '' ? 'transform' : false))));
    support.matrixFilter = !support.transform && divStyle.filter === '';
    div = null;
    $.cssNumber.rotate = true;
    $.cssHooks.rotate = {
        set: function(elem, value) {
            var _support = support,
                supportTransform = _support.transform,
                cos, sin, centerOrigin;
            if (typeof value === 'string') {
                value = toRadian(value)
            }
            $.data(elem, 'transform', {
                rotate: value
            });
            if (supportTransform) {
                elem.style[supportTransform] = 'rotate(' + value + 'rad)'
            } else if (_support.matrixFilter) {
                cos = Math.cos(value);
                sin = Math.sin(value);
                elem.style.filter = ["progid:DXImageTransform.Microsoft.Matrix(", "M11=" + cos + ",", "M12=" + (-sin) + ",", "M21=" + sin + ",", "M22=" + cos + ",", "SizingMethod='auto expand'", ")"].join('');
                if (centerOrigin = $.rotate.centerOrigin) {
                    elem.style[centerOrigin == 'margin' ? 'marginLeft' : 'left'] = -(elem.offsetWidth / 2) + (elem.clientWidth / 2) + "px";
                    elem.style[centerOrigin == 'margin' ? 'marginTop' : 'top'] = -(elem.offsetHeight / 2) + (elem.clientHeight / 2) + "px"
                }
            }
        },
        get: function(elem, computed) {
            var transform = $.data(elem, 'transform');
            return transform && transform.rotate ? transform.rotate : 0
        }
    };
    $.fx.step.rotate = function(fx) {
        $.cssHooks.rotate.set(fx.elem, fx.now + fx.unit)
    };

    function radToDeg(rad) {
        return rad * 180 / Math.PI
    }

    function toRadian(value) {
        if (~value.indexOf("deg")) {
            return parseInt(value, 10) * (Math.PI * 2 / 360)
        } else if (~value.indexOf("grad")) {
            return parseInt(value, 10) * (Math.PI / 200)
        }
        return parseFloat(value)
    }
    $.rotate = {
        centerOrigin: 'margin',
        radToDeg: radToDeg
    }
})(jQuery);


/**
 * jQuery.marquee - scrolling text like old marquee element
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin
 */
;
(function(e) {
    e.fn.marquee = function(t) {
        return this.each(function() {
            var n = e.extend({}, e.fn.marquee.defaults, t),
                r = e(this),
                i, s, o, u, a, f = 3,
                l = "animation-play-state",
                c = false,
                h = function(e, t, n) {
                    var r = ["webkit", "moz", "MS", "o", ""];
                    for (var i = 0; i < r.length; i++) {
                        if (!r[i]) t = t.toLowerCase();
                        e.addEventListener(r[i] + t, n, false)
                    }
                },
                p = function(e) {
                    var t = [];
                    for (var n in e) {
                        if (e.hasOwnProperty(n)) {
                            t.push(n + ":" + e[n])
                        }
                    }
                    t.push();
                    return "{" + t.join(",") + "}"
                },
                d = function() {
                    r.timer = setTimeout(M, n.delayBeforeStart)
                },
                v = {
                    pause: function() {
                        if (c && n.allowCss3Support) {
                            i.css(l, "paused")
                        } else {
                            if (e.fn.pause) {
                                i.pause()
                            }
                        }
                        r.data("runningStatus", "paused");
                        r.trigger("paused")
                    },
                    resume: function() {
                        if (c && n.allowCss3Support) {
                            i.css(l, "running")
                        } else {
                            if (e.fn.resume) {
                                i.resume()
                            }
                        }
                        r.data("runningStatus", "resumed");
                        r.trigger("resumed")
                    },
                    toggle: function() {
                        v[r.data("runningStatus") == "resumed" ? "pause" : "resume"]()
                    },
                    destroy: function() {
                        clearTimeout(r.timer);
                        r.find("*").andSelf().unbind();
                        r.html(r.find(".js-marquee:first").html())
                    }
                };
            if (typeof t === "string") {
                if (e.isFunction(v[t])) {
                    if (!i) {
                        i = r.find(".js-marquee-wrapper")
                    }
                    if (r.data("css3AnimationIsSupported") === true) {
                        c = true
                    }
                    v[t]()
                }
                return
            }
            var m = {},
                g;
            e.each(n, function(e, t) {
                g = r.attr("data-" + e);
                if (typeof g !== "undefined") {
                    switch (g) {
                        case "true":
                            g = true;
                            break;
                        case "false":
                            g = false;
                            break
                    }
                    n[e] = g
                }
            });
            n.duration = n.speed || n.duration;
            u = n.direction == "up" || n.direction == "down";
            n.gap = n.duplicated ? n.gap : 0;
            r.wrapInner('<div class="js-marquee"></div>');
            var y = r.find(".js-marquee").css({
                "margin-right": n.gap,
                "float": "left"
            });
            if (n.duplicated) {
                y.clone(true).appendTo(r)
            }
            r.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');
            i = r.find(".js-marquee-wrapper");
            if (u) {
                var b = r.height();
                i.removeAttr("style");
                r.height(b);
                r.find(".js-marquee").css({
                    "float": "none",
                    "margin-bottom": n.gap,
                    "margin-right": 0
                });
                if (n.duplicated) r.find(".js-marquee:last").css({
                    "margin-bottom": 0
                });
                var w = r.find(".js-marquee:first").height() + n.gap;
                n.duration = (parseInt(w, 10) + parseInt(b, 10)) / parseInt(b, 10) * n.duration
            } else {
                a = r.find(".js-marquee:first").width() + n.gap;
                s = r.width();
                n.duration = (parseInt(a, 10) + parseInt(s, 10)) / parseInt(s, 10) * n.duration
            }
            if (n.duplicated) {
                n.duration = n.duration / 2
            }
            if (n.allowCss3Support) {
                var E = document.body || document.createElement("div"),
                    S = "marqueeAnimation-" + Math.floor(Math.random() * 1e7),
                    x = "Webkit Moz O ms Khtml".split(" "),
                    T = "animation",
                    N = "",
                    C = "";
                if (E.style.animation) {
                    C = "@keyframes " + S + " ";
                    c = true
                }
                if (c === false) {
                    for (var k = 0; k < x.length; k++) {
                        if (E.style[x[k] + "AnimationName"] !== undefined) {
                            var L = "-" + x[k].toLowerCase() + "-";
                            T = L + T;
                            l = L + l;
                            C = "@" + L + "keyframes " + S + " ";
                            c = true;
                            break
                        }
                    }
                }
                if (c) {
                    N = S + " " + n.duration / 1e3 + "s " + n.delayBeforeStart / 1e3 + "s infinite " + n.css3easing;
                    r.data("css3AnimationIsSupported", true)
                }
            }
            var A = function() {
                    i.css("margin-top", n.direction == "up" ? b + "px" : "-" + w + "px")
                },
                O = function() {
                    i.css("margin-left", n.direction == "left" ? s + "px" : "-" + a + "px")
                };
            if (n.duplicated) {
                if (u) {
                    i.css("margin-top", n.direction == "up" ? b : "-" + (w * 2 - n.gap) + "px")
                } else {
                    i.css("margin-left", n.direction == "left" ? s + "px" : "-" + (a * 2 - n.gap) + "px")
                }
                f = 1
            } else {
                if (u) {
                    A()
                } else {
                    O()
                }
            }
            var M = function() {
                if (n.duplicated) {
                    if (f === 1) {
                        n._originalDuration = n.duration;
                        if (u) {
                            n.duration = n.direction == "up" ? n.duration + b / (w / n.duration) : n.duration * 2
                        } else {
                            n.duration = n.direction == "left" ? n.duration + s / (a / n.duration) : n.duration * 2
                        }
                        if (N) {
                            N = S + " " + n.duration / 1e3 + "s " + n.delayBeforeStart / 1e3 + "s " + n.css3easing
                        }
                        f++
                    } else if (f === 2) {
                        n.duration = n._originalDuration;
                        if (N) {
                            S = S + "0";
                            C = e.trim(C) + "0 ";
                            N = S + " " + n.duration / 1e3 + "s 0s infinite " + n.css3easing
                        }
                        f++
                    }
                }
                if (u) {
                    if (n.duplicated) {
                        if (f > 2) {
                            i.css("margin-top", n.direction == "up" ? 0 : "-" + w + "px")
                        }
                        o = {
                            "margin-top": n.direction == "up" ? "-" + w + "px" : 0
                        }
                    } else {
                        A();
                        o = {
                            "margin-top": n.direction == "up" ? "-" + i.height() + "px" : b + "px"
                        }
                    }
                } else {
                    if (n.duplicated) {
                        if (f > 2) {
                            i.css("margin-left", n.direction == "left" ? 0 : "-" + a + "px")
                        }
                        o = {
                            "margin-left": n.direction == "left" ? "-" + a + "px" : 0
                        }
                    } else {
                        O();
                        o = {
                            "margin-left": n.direction == "left" ? "-" + a + "px" : s + "px"
                        }
                    }
                }
                r.trigger("beforeStarting");
                if (c) {
                    i.css(T, N);
                    var t = C + " { 100%  " + p(o) + "}",
                        l = e("style");
                    if (l.length !== 0) {
                        l.filter(":last").append(t)
                    } else {
                        e("head").append("<style>" + t + "</style>")
                    }
                    h(i[0], "AnimationIteration", function() {
                        r.trigger("finished")
                    });
                    h(i[0], "AnimationEnd", function() {
                        M();
                        r.trigger("finished")
                    })
                } else {
                    i.animate(o, n.duration, n.easing, function() {
                        r.trigger("finished");
                        if (n.pauseOnCycle) {
                            d()
                        } else {
                            M()
                        }
                    })
                }
                r.data("runningStatus", "resumed")
            };
            r.bind("pause", v.pause);
            r.bind("resume", v.resume);
            if (n.pauseOnHover) {
                r.bind("mouseenter mouseleave", v.toggle)
            }
            if (c && n.allowCss3Support) {
                M()
            } else {
                d()
            }
        })
    };
    e.fn.marquee.defaults = {
        allowCss3Support: true,
        css3easing: "linear",
        easing: "linear",
        delayBeforeStart: 1e3,
        direction: "left",
        duplicated: false,
        duration: 5e3,
        gap: 20,
        pauseOnCycle: false,
        pauseOnHover: false
    }
})(jQuery);
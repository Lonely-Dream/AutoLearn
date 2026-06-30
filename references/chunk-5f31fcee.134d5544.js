(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-5f31fcee"], {
    "03ec1": function(e, t, s) {
        "use strict";
        s("c8fe3")
    },
    "04ca": function(e, t, s) {},
    "0d291": function(e, t, s) {},
    "0f09": function(e, t, s) {
        "use strict";
        s("1a8e")
    },
    1431: function(e, t, s) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("a-modal", {
                attrs: {
                    destroyOnClose: "",
                    footer: null,
                    visible: e.visible,
                    maskClosable: !1,
                    closable: !1,
                    width: e.modalWidth,
                    wrapClassName: "course-face-modal"
                },
                on: {
                    cancel: e.handleCancel
                }
            }, [s("div", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: e.loading,
                    expression: "loading"
                }],
                staticClass: "course-face",
                class: {
                    "course-face--dark": e.isDarkScene
                }
            }, [e.canClose ? s("button", {
                staticClass: "course-face-close",
                class: {
                    "course-face-close--dark": e.isDarkScene
                },
                attrs: {
                    type: "button",
                    "aria-label": e.$t("关闭")
                },
                on: {
                    click: e.handleCancel
                }
            }) : e._e(), e.isGuideMode ? [s("div", {
                staticClass: "course-face-guide",
                class: {
                    "course-face-guide--input": "inputIntro" === e.mode
                }
            }, [e.showCountdown ? s("span", {
                staticClass: "course-face-countdown"
            }, [e._v(e._s(e.countdown))]) : e._e(), s("div", {
                staticClass: "course-face-guide__visual"
            }, [s("img", {
                attrs: {
                    src: e.faceGuideImg,
                    alt: e.$t("人脸验证")
                }
            }), s("h3", [e._v(e._s(e.guideTitle))])]), s("div", {
                staticClass: "course-face-guide__content"
            }, ["inputIntro" === e.mode ? [s("ol", {
                staticClass: "course-face-input-tips"
            }, [s("li", [e._v(e._s(e.$t("1. 本功能需要采集用户的人脸数据，采集过程中全程加密；")))]), s("li", [e._v(e._s(e.$t("2. 采集的数据只用于课程验证、考试验证，不做其他任何用途；")))]), s("li", [e._v(e._s(e.$t("3. 录入时请保证图像清晰，如录入后无法识别，请重新录入；")))]), s("li", [e._v(e._s(e.$t("4. 拍照成功后，请确保照片中只有本人的照片")))])])] : [s("h4", [e._v(e._s(e.$t("请遵守以下要求，以便顺利通过验证")))]), s("div", {
                staticClass: "course-face-guide__rules"
            }, [s("div", {
                staticClass: "course-face-rule"
            }, [s("img", {
                attrs: {
                    src: e.cameraIcon,
                    alt: ""
                }
            }), s("span", [e._v(e._s(e.$t("拍照验证身份方可继续看课")))])]), s("div", {
                staticClass: "course-face-rule"
            }, [s("img", {
                attrs: {
                    src: e.lightIcon,
                    alt: ""
                }
            }), s("span", [e._v(e._s(e.$t("正脸对准屏幕保持光线充足")))])]), s("div", {
                staticClass: "course-face-rule"
            }, [s("img", {
                attrs: {
                    src: e.timeIcon,
                    alt: ""
                }
            }), s("span", [e._v(e._s(e.$t("60s内完成识别超时即为失败")))])])])]], 2), s("a-button", {
                staticClass: "course-face-primary course-face-guide__button",
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.handleGuidePrimary
                }
            }, [e._v("\n          " + e._s(e.guideButtonText) + "\n        ")])], 1)] : [s("div", {
                staticClass: "course-face-camera"
            }, [s("video", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showCameraVideo,
                    expression: "showCameraVideo"
                }],
                ref: "video",
                attrs: {
                    autoplay: "",
                    playsinline: "",
                    muted: ""
                },
                domProps: {
                    muted: !0
                }
            }), e.capturedImage ? s("img", {
                staticClass: "course-face-camera__capture",
                attrs: {
                    src: e.capturedImage,
                    alt: "Captured face"
                }
            }) : e._e(), s("canvas", {
                ref: "canvas"
            }), s("div", {
                staticClass: "course-face-camera__shade"
            }), e.showCountdown ? s("span", {
                staticClass: "course-face-countdown"
            }, [e._v(e._s(e.countdown))]) : e._e(), e.isCameraMode ? [e.capturedImage ? e._e() : s("div", {
                staticClass: "course-face-scan"
            }, [s("div", {
                staticClass: "course-face-scan__oval"
            }, [s("div", {
                staticClass: "course-face-scan__grid"
            }), s("div", {
                staticClass: "course-face-scan__line"
            })]), s("span", {
                staticClass: "course-face-bubble course-face-bubble--left"
            }, [e._v(e._s(e.$t("正脸对准屏幕")))]), s("span", {
                staticClass: "course-face-bubble course-face-bubble--right"
            }, [e._v(e._s(e.$t("60s内完成验证")))]), s("span", {
                staticClass: "course-face-bubble course-face-bubble--bottom"
            }, [e._v(e._s(e.$t("保证光线充足")))])]), s("div", {
                staticClass: "course-face-camera__actions"
            }, [e.capturedImage ? [s("a-button", {
                staticClass: "retake-button",
                on: {
                    click: e.retake
                }
            }, [e._v(e._s(e.$t("重新拍摄")))]), s("a-button", {
                staticClass: "course-face-primary",
                attrs: {
                    type: "primary",
                    loading: e.submitting
                },
                on: {
                    click: e.confirmCaptured
                }
            }, [e._v("\n                " + e._s(e.isInputMode ? e.$t("确认上传") : e.$t("开始验证")) + "\n              ")])] : s("a-button", {
                staticClass: "course-face-primary",
                attrs: {
                    type: "primary",
                    disabled: !e.cameraReady
                },
                on: {
                    click: e.capturePhoto
                }
            }, [e._v("\n              " + e._s(e.$t("拍 摄")) + "\n            ")])], 2)] : e._e(), e.isNoticeMode ? s("div", {
                staticClass: "course-face-notice"
            }, [s("span", {
                staticClass: "course-face-notice__icon",
                class: "course-face-notice__icon--" + e.noticeType
            }, [e._v(e._s(e.noticeIcon))]), s("div", {
                staticClass: "course-face-notice__body"
            }, [s("h3", [e._v(e._s(e.noticeTitle))]), s("p", [e._v(e._s(e.noticeText))])]), e.noticeActions.length ? s("div", {
                staticClass: "course-face-notice__actions"
            }, [e._l(e.noticeActions, (function(t) {
                return [t.text === e.$t("APP验证") ? s("a-tooltip", {
                    key: t.text,
                    attrs: {
                        placement: "top"
                    }
                }, [s("template", {
                    slot: "title"
                }, [s("span", [e._v(e._s(e.$t("去云端学习APP验证")))])]), s("a-button", {
                    class: {
                        "course-face-primary": t.primary
                    },
                    attrs: {
                        type: t.primary ? "primary" : "default"
                    },
                    on: {
                        click: t.handler
                    }
                }, [e._v("\n                  " + e._s(t.text) + "\n                ")])], 2) : s("a-button", {
                    key: t.text,
                    class: {
                        "course-face-primary": t.primary
                    },
                    attrs: {
                        type: t.primary ? "primary" : "default"
                    },
                    on: {
                        click: t.handler
                    }
                }, [e._v("\n                " + e._s(t.text) + "\n              ")])]
            }
            ))], 2) : e._e()]) : e._e(), "success" === e.mode ? s("div", {
                staticClass: "course-face-success"
            }, [s("span", {
                staticClass: "course-face-success__icon"
            }, [s("img", {
                attrs: {
                    src: e.passIcon,
                    alt: ""
                }
            })]), s("p", [e._v(e._s(e.successText))])]) : e._e()], 2)]], 2)])
        }
          , n = []
          , a = (s("34ef"),
        s("28a5"),
        s("ac6a"),
        s("96cf"),
        s("3b8d"))
          , r = (s("6762"),
        s("2fdb"),
        s("c5f6"),
        s("f64c"))
          , o = s("b775");
        function c() {
            return Object(o["a"])({
                url: "/biz-oim/user/get.do",
                method: "post"
            })
        }
        function u(e) {
            return Object(o["a"])({
                url: "/biz-oim/face/saveFaceDetect.do",
                method: "post",
                data: e
            })
        }
        function l(e) {
            return Object(o["a"])({
                url: "/ems/html/examCenter/faceCompare.do",
                method: "post",
                data: e,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        }
        var d = s("3045")
          , h = s.n(d)
          , m = s("4761")
          , p = s.n(m)
          , f = s("1810")
          , v = s.n(f)
          , g = s("5a68")
          , y = s.n(g)
          , C = s("556d")
          , I = s.n(C)
          , A = {
            name: "CourseFaceRecognition",
            props: {
                visible: {
                    type: Boolean,
                    default: !1
                },
                courseId: {
                    type: [String, Number],
                    default: ""
                },
                source: {
                    type: String,
                    default: "COURSE"
                },
                type: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    loading: !1,
                    submitting: !1,
                    mode: "idle",
                    countdown: 60,
                    countdownTimer: null,
                    capturedImage: "",
                    videoStream: null,
                    cameraReady: !1,
                    hasFaceInfo: !1,
                    uploader: null,
                    successMessage: "",
                    faceGuideImg: h.a,
                    cameraIcon: p.a,
                    lightIcon: v.a,
                    timeIcon: y.a,
                    passIcon: I.a
                }
            },
            computed: {
                modalWidth: function() {
                    return this.isGuideMode,
                    "660px"
                },
                isGuideMode: function() {
                    return ["verifyIntro", "inputIntro"].includes(this.mode)
                },
                isDarkScene: function() {
                    return !this.isGuideMode
                },
                isSignInType: function() {
                    return "signIn" === this.type
                },
                isPreventCheatType: function() {
                    return !this.isSignInType
                },
                isInputMode: function() {
                    return "input" === this.mode
                },
                isCameraMode: function() {
                    return ["verify", "input"].includes(this.mode)
                },
                isNoticeMode: function() {
                    return ["noFace", "cameraDenied", "fail"].includes(this.mode)
                },
                showCameraVideo: function() {
                    return this.isCameraMode && !this.capturedImage
                },
                showCountdown: function() {
                    return this.isSignInType ? ["verify", "fail", "cameraDenied", "noFace"].includes(this.mode) : "idle" !== this.mode && "success" !== this.mode
                },
                canClose: function() {
                    return "success" !== this.mode
                },
                guideTitle: function() {
                    return this.$t("通过人脸拍摄验证身份")
                },
                guideButtonText: function() {
                    return "inputIntro" === this.mode ? this.$t("开始录入") : this.$t("开 始")
                },
                noticeType: function() {
                    return "fail" === this.mode ? "error" : "warning"
                },
                noticeIcon: function() {
                    return this.mode,
                    "!"
                },
                noticeTitle: function() {
                    return "fail" === this.mode || this.mode,
                    this.$t("通知")
                },
                noticeText: function() {
                    return "fail" === this.mode ? this.$t("人脸验证失败，请重新验证！") : "cameraDenied" === this.mode ? this.$t("无法访问摄像头，请允许浏览器使用摄像头后再继续看课。") : this.$t("该账号未录入人脸识别信息，请先录入人脸信息后再进行识别")
                },
                noticeActions: function() {
                    return "fail" === this.mode ? [{
                        text: this.$t("关闭课程"),
                        handler: this.closeCourse
                    }, {
                        text: this.$t("重新验证"),
                        primary: !0,
                        handler: this.retryVerify
                    }] : "cameraDenied" === this.mode ? [{
                        text: this.$t("关闭课程"),
                        handler: this.closeCourse
                    }, {
                        text: this.$t("重新授权"),
                        primary: !0,
                        handler: this.retryCamera
                    }, {
                        text: this.$t("APP验证"),
                        primary: !0,
                        handler: this.closeCarema
                    }] : "noFace" === this.mode ? [{
                        text: this.$t("取消"),
                        handler: this.handleCancel
                    }, {
                        text: this.$t("去录入"),
                        primary: !0,
                        handler: this.startInput
                    }] : []
                },
                successText: function() {
                    return this.successMessage || this.$t("验证通过")
                }
            },
            watch: {
                visible: {
                    immediate: !0,
                    handler: function(e) {
                        e ? this.open() : this.resetAll()
                    }
                }
            },
            beforeDestroy: function() {
                this.resetAll()
            },
            methods: {
                open: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.resetAll(),
                                    e.loading = !0,
                                    t.prev = 2,
                                    t.next = 5,
                                    c();
                                case 5:
                                    s = t.sent,
                                    i = s.bizResult || s.data || {},
                                    e.hasFaceInfo = Boolean(i.faceInfo && i.faceInfo.imgUrl),
                                    e.mode = e.hasFaceInfo ? "verifyIntro" : "noFace",
                                    e.isPreventCheatType && e.startCountdown(!1),
                                    t.next = 15;
                                    break;
                                case 12:
                                    t.prev = 12,
                                    t.t0 = t["catch"](2),
                                    e.isPreventCheatType ? e.handleVerifyFailure("load_failed") : e.mode = "fail";
                                case 15:
                                    return t.prev = 15,
                                    e.loading = !1,
                                    t.finish(15);
                                case 18:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[2, 12, 15, 18]])
                    }
                    )))()
                },
                handleGuidePrimary: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if ("inputIntro" !== e.mode) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 3,
                                    e.openInputCamera();
                                case 3:
                                    t.next = 7;
                                    break;
                                case 5:
                                    return t.next = 7,
                                    e.startVerify();
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                startInput: function() {
                    this.isSignInType && this.clearCountdown(),
                    this.stopStream(),
                    this.mode = "inputIntro",
                    this.capturedImage = ""
                },
                openInputCamera: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.mode = "input",
                                    e.capturedImage = "",
                                    t.next = 4,
                                    e.startCamera();
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                startVerify: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.mode = "verify",
                                    e.capturedImage = "",
                                    t.next = 4,
                                    e.startCamera();
                                case 4:
                                    "verify" === e.mode && e.isSignInType && e.startCountdown();
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                retryCamera: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.hasFaceInfo) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 3,
                                    e.startVerify();
                                case 3:
                                    t.next = 7;
                                    break;
                                case 5:
                                    return t.next = 7,
                                    e.openInputCamera();
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                closeCarema: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    e.$emit("closeCarema");
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                retryVerify: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.startVerify();
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                startCamera: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.stopStream(),
                                    e.cameraReady = !1,
                                    t.prev = 2,
                                    navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                                        t.next = 6;
                                        break
                                    }
                                    return e.mode = "cameraDenied",
                                    t.abrupt("return");
                                case 6:
                                    return t.next = 8,
                                    navigator.mediaDevices.getUserMedia({
                                        video: {
                                            facingMode: "user"
                                        },
                                        audio: !1
                                    });
                                case 8:
                                    return s = t.sent,
                                    e.videoStream = s,
                                    t.next = 12,
                                    e.$nextTick();
                                case 12:
                                    i = e.$refs.video,
                                    i && (i.srcObject = s,
                                    i.onloadedmetadata = function() {
                                        e.cameraReady = !0
                                    }
                                    ),
                                    t.next = 19;
                                    break;
                                case 16:
                                    t.prev = 16,
                                    t.t0 = t["catch"](2),
                                    e.mode = "cameraDenied";
                                case 19:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[2, 16]])
                    }
                    )))()
                },
                startCountdown: function() {
                    var e = this
                      , t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.clearCountdown(),
                    t && (this.countdown = 60),
                    this.countdownTimer = setInterval((function() {
                        e.countdown -= 1,
                        e.countdown <= 0 && (e.countdown = 0,
                        e.clearCountdown(),
                        e.stopStream(),
                        e.isSignInType ? e.mode = "fail" : e.handleVerifyFailure("timeout"))
                    }
                    ), 1e3)
                },
                clearCountdown: function() {
                    this.countdownTimer && (clearInterval(this.countdownTimer),
                    this.countdownTimer = null)
                },
                capturePhoto: function() {
                    var e = this.$refs.video
                      , t = this.$refs.canvas;
                    if (e && t && e.videoWidth) {
                        t.width = e.videoWidth,
                        t.height = e.videoHeight;
                        var s = t.getContext("2d");
                        s.save(),
                        s.scale(-1, 1),
                        s.drawImage(e, -t.width, 0, t.width, t.height),
                        s.restore(),
                        this.capturedImage = t.toDataURL("image/jpeg", .92)
                    } else
                        r["a"].warning(this.$t("摄像头尚未准备好"))
                },
                retake: function() {
                    this.capturedImage = ""
                },
                confirmCaptured: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.capturedImage && !e.submitting) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (e.submitting = !0,
                                    t.prev = 3,
                                    !e.isInputMode) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 7,
                                    e.uploadAndSaveFace();
                                case 7:
                                    t.next = 11;
                                    break;
                                case 9:
                                    return t.next = 11,
                                    e.compareFace();
                                case 11:
                                    return t.prev = 11,
                                    e.submitting = !1,
                                    t.finish(11);
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[3, , 11, 14]])
                    }
                    )))()
                },
                compareFace: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return s = new FormData,
                                    s.append("face_rectangle2", ""),
                                    s.append("faceFile", e.base64ToFile(e.capturedImage, "face.jpg")),
                                    t.next = 5,
                                    l(s);
                                case 5:
                                    i = t.sent,
                                    i && i.data && i.data.faceCompare ? e.resolveSuccess(e.$t("验证通过")) : e.isSignInType ? (e.clearCountdown(),
                                    e.stopStream(),
                                    e.mode = "fail") : e.handleVerifyFailure("compare_failed");
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                handleVerifyFailure: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "compare_failed";
                    this.clearCountdown(),
                    this.stopStream(),
                    this.capturedImage = "",
                    this.cameraReady = !1,
                    this.$emit("verify-fail", {
                        reason: e,
                        type: this.type,
                        source: this.source
                    })
                },
                uploadAndSaveFace: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.uploadFaceImage(e.base64ToFile(e.capturedImage, "face.jpg"));
                                case 2:
                                    return s = t.sent,
                                    t.next = 5,
                                    u({
                                        storeFileId: s,
                                        source: "PERSONAL",
                                        description: "",
                                        supplier: "baidu",
                                        platform: "PC"
                                    });
                                case 5:
                                    i = t.sent,
                                    i && !0 === i.bizResult ? e.resolveSuccess(e.$t("录入成功")) : r["a"].error(i && (i.msg || i.message) || e.$t("录入失败，请重新拍摄录入"));
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                uploadFaceImage: function(e) {
                    var t = this;
                    return new Promise((function(s, i) {
                        if (!window.__TBC_UPLOAD || !window.__TBC_UPLOAD.default)
                            return i(new Error("Upload SDK is not ready")),
                            void r["a"].error(t.$t("上传组件未初始化，无法录入人脸"));
                        t.uploader = new window.__TBC_UPLOAD.default({
                            event: {
                                addFile: function(e) {
                                    var s = (e.data && e.data.success || []).map((function(e) {
                                        return e.fileId
                                    }
                                    ));
                                    t.uploader.startUpload(s)
                                },
                                fail: function(e) {
                                    i(e),
                                    r["a"].warning(t.$t("录入失败，请重新拍摄录入"))
                                },
                                success: function(e) {
                                    var t = e && e.data && e.data.unifiedData && e.data.unifiedData.resourceRelId;
                                    t ? s(t) : i(new Error("resourceRelId is empty"))
                                }
                            }
                        }),
                        t.uploader.addFile([e])
                    }
                    ))
                },
                resolveSuccess: function(e) {
                    var t = this;
                    this.clearCountdown(),
                    this.stopStream(),
                    this.mode = "success",
                    this.successMessage = e,
                    setTimeout((function() {
                        t.$emit("success")
                    }
                    ), 800)
                },
                handleCancel: function() {
                    this.$emit("cancel")
                },
                closeCourse: function() {
                    this.$emit("cancel"),
                    setTimeout((function() {
                        top.open("about:blank", "_self").close()
                    }
                    ), 300)
                },
                resetAll: function() {
                    this.clearCountdown(),
                    this.stopStream(),
                    this.loading = !1,
                    this.submitting = !1,
                    this.mode = "idle",
                    this.countdown = 60,
                    this.capturedImage = "",
                    this.cameraReady = !1,
                    this.successMessage = ""
                },
                stopStream: function() {
                    this.videoStream && (this.videoStream.getTracks().forEach((function(e) {
                        return e.stop()
                    }
                    )),
                    this.videoStream = null);
                    var e = this.$refs && this.$refs.video;
                    e && (e.srcObject = null)
                },
                base64ToFile: function(e, t) {
                    for (var s = e.split(";base64,"), i = s[0].split(":")[1], n = window.atob(s[1]), a = new Uint8Array(n.length), r = 0; r < n.length; r += 1)
                        a[r] = n.charCodeAt(r);
                    return new File([new Blob([a],{
                        type: i
                    })],t,{
                        type: i
                    })
                }
            }
        }
          , S = A
          , T = (s("5ced"),
        s("df69"),
        s("2877"))
          , w = Object(T["a"])(S, i, n, !1, null, "4508aed7", null);
        t["a"] = w.exports
    },
    "14eb": function(e, t, s) {
        "use strict";
        s("c3ba")
    },
    "14f2": function(e, t, s) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return e.hangUpFlag ? s("div", {
                staticClass: "hangUp-box",
                staticStyle: {
                    width: "100%",
                    height: "100%"
                }
            }, [e.loginFlag ? s("div", {
                staticClass: "loginOut-wrap"
            }, [s("div", {
                staticClass: "header-tips"
            }, [e._v(e._s(e.$t("系统提示")))]), s("div", {
                staticClass: "tips-content",
                staticStyle: {
                    padding: "20px",
                    "font-size": "18px"
                }
            }, [e._v("\n          " + e._s(e.$t("由于您长时间没操作，系统已自动退出平台。")) + "\n        ")]), s("div", {
                staticClass: "confirmBtn"
            }, [s("div", {
                staticClass: "btn",
                on: {
                    click: e.loginOutConfirm
                }
            }, [e._v(e._s(e.$t("确定")))])])]) : s("div", {
                staticClass: "hangUp-wrap"
            }, [s("div", {
                staticClass: "header-tips"
            }, [e._v(e._s(e.$t("系统提示")))]), s("div", {
                staticClass: "tips-content",
                staticStyle: {
                    padding: "20px",
                    "font-size": "18px"
                }
            }, [e._v("\n          " + e._s(e.$t("长时间未操作页面,"))), s("span", {
                staticStyle: {
                    color: "#eb5352"
                }
            }, [e._v(e._s(e.timeCount))]), e._v(e._s(e.$t("秒后退出登录")) + "\n        ")]), s("div", {
                staticClass: "confirmBtn"
            }, [s("div", {
                staticClass: "btn",
                on: {
                    click: e.confirm
                }
            }, [e._v(e._s(e.$t("确定")))])])])]) : e._e()
        }
          , n = []
          , a = (s("c5f6"),
        s("8e44"))
          , r = {
            data: function() {
                return {
                    hangUpFlag: !1,
                    operateTime: 0,
                    timeCount: 60,
                    timer: null,
                    timeInterval: 3e4,
                    xys: {
                        x0: 0,
                        y0: 0
                    },
                    xy: {
                        x0: 0,
                        y0: 0
                    },
                    loginFlag: !1,
                    timerNoOperate: null
                }
            },
            props: {
                preventHangTime: {
                    type: Number,
                    default: 0
                }
            },
            computed: {},
            watch: {},
            methods: {
                initHangUp: function() {
                    var e = this;
                    document.body.onmousemove = function(t) {
                        e.xys = {
                            x0: t.clientX,
                            y0: t.clientY
                        }
                    }
                    ,
                    this.startTimer()
                },
                startTimer: function() {
                    var e = this;
                    clearInterval(this.timerNoOperate),
                    clearInterval(this.timer),
                    this.timerNoOperate = setInterval((function() {
                        e.checkMouseMove(e.xys)
                    }
                    ), e.timeInterval)
                },
                exitfullscreen: function() {
                    try {
                        document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
                    } catch (e) {}
                },
                checkMouseMove: function(e) {
                    var t = this;
                    this.xy.x0 == e.x0 && this.xy.y0 == e.y0 ? (this.operateTime += this.timeInterval,
                    this.operateTime / 1e3 / 60 >= this.preventHangTime && (t.timeCount = 60,
                    this.$emit("pauseOrPlay", !1),
                    this.$emit("saveStudyLog", "PREVENT_HANG_POPUP"),
                    this.exitfullscreen(),
                    this.hangUpFlag = !0,
                    clearInterval(this.timerNoOperate),
                    this.timer = setInterval((function() {
                        if (t.timeCount--,
                        t.timeCount < 0) {
                            var e = 0;
                            document.body.onmousemove = function() {
                                0 == e && (console.log("PREVENT_HANG_LOGOUT"),
                                t.$emit("saveStudyLog", "PREVENT_HANG_LOGOUT"),
                                t.hangUpFlag = !0,
                                t.loginFlag = !0,
                                console.log("loginOut!!"),
                                a["a"].APILoginOut()),
                                e++
                            }
                            ,
                            t.hangUpFlag = !1,
                            clearInterval(t.timer),
                            console.log("退出登录")
                        }
                    }
                    ), 1e3))) : (this.operateTime = 0,
                    this.xy.x0 = e.x0,
                    this.xy.y0 = e.y0)
                },
                confirm: function() {
                    this.timeCount = 0,
                    clearInterval(this.timer),
                    this.operateTime = 0,
                    this.xys = {
                        x0: 0,
                        y0: 0
                    },
                    this.xy = {
                        x0: 0,
                        y0: 0
                    },
                    this.$emit("pauseOrPlay", !0),
                    this.hangUpFlag = !1,
                    this.startTimer(),
                    this.$emit("saveStudyLog", "PREVENT_HANG_OPERATE")
                },
                loginOutConfirm: function() {
                    top.open("/login/login.logout.do", "_self")
                }
            },
            mounted: function() {
                clearInterval(this.timer),
                this.initHangUp()
            },
            beforeDestroy: function() {
                clearInterval(this.timerNoOperate),
                clearInterval(this.timer)
            }
        }
          , o = r
          , c = (s("16d5"),
        s("2877"))
          , u = Object(c["a"])(o, i, n, !1, null, "6def2b32", null);
        t["a"] = u.exports
    },
    "15b4": function(e, t, s) {},
    "15ba": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAABZLkSWAAAB+UlEQVRYCe2WvUrEQBDHLyKKhSAogoUnovgJvoDvoI2tja0IlloIgoJgLZaWvoCIT2CrnahY+FWI2lkoCsbf6F7IXXK3s6uJV2RhmM3szPz/mZkNKZWKVVTgfysQ2ODDMFzEZ9rmpzh/xGcnCIIrhW/k0hLt6m/+gpxk70VWeeHh+lDJE00F903YHvoumcJqmcNjMub1yn5LW8nWWKBte0vSS5tT7TkVezG2E3QZ6UGkkiqSmhab/L9Wz2TYQER3IKp250mwRAeeXEnmShBy9UgOyVnacpnBtHgX2yhzNx8LuGYv8yjtXkKWkcTKg+CHQR1Ai6Qt+QSlrjwIHoAsn7O2FAad2MZT7JEpc4JcjHvQdiPE2IaWj/C4HjMltrlfkgQDi6EgaCmQ9bjpK+h9SRjwGV5/ylqCaodTLs1htanxkxdByEnlZxH5yLqsQWKPIPmpDfIiKAAAbQMygVh/2QyZEH3uQk7ivAhKIEAXKJFMV9NfkqYn6N1iZlBmr92lv4zFm4u/+HoTJHYNGZMk2sVLnUFyU+svfl4tNtXrcgEyvt0mVh3qVUGqAE64AkqfGunH8UFiXWK8CAoAQO+oGxcwH1+vFvsA+cYUBH0rV4lzmcGy6w2sgDTQ/Q3Ovo9cCC7YkmVxrpnB4yyAa3LmgVEDWTwWFdBV4Av/IG+Sf2qUhwAAAABJRU5ErkJggg=="
    },
    1631: function(e, t, s) {
        "use strict";
        s("ca1e")
    },
    "16d5": function(e, t, s) {
        "use strict";
        s("655a")
    },
    1737: function(e, t, s) {},
    1810: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAPKADAAQAAAABAAAAPAAAAACL3+lcAAAH40lEQVRoBe1Z+09TSRRuS1sKFSguLLC4gBqNMcb4//8JmrjJakzU6LILCsgbpDwKvfud882cO7339nW7JPsDk93hzHl+c+bM49ZiFEWFkVv75ubm+roQRSDEHYgoKhYKxWJR/kcrldCNlculsbGRoxWKuUHD8KbVAlYAHQoHcAP9WKWCaQxlaMp5QAPl9dWVpHa0BujlajVH7ocDLVVwddWRWlYXcgaCPWZiw/SsUvoAXRkfHwr6oKCjdrul2cWKchOQsAUG02hCDdVkImpoOgl9Zh2ln55mmjMQaKS2dXGRu/rTUTM5KPFKrTZIyvvPDPVwRcTcN+j5HyMbE0Pjp5nkUCfsA03k/ur8/LrVouMefZ9Mty4vR99wPcJnilAqqPJMEZndQUcREtxut3sY356oVCpVazVZuqzWtTxGRPzH69fv377NijgQD8kCgG6q2aBRFdh2nCb2Bxrs2ZPA2Ek93ynpEEcNVvDaH+QU9dDP9C/n1eVlJu5ymot7zp3EBjNA5vQ5DW/sFE2/WLw3NYUlNgYXmrhhlNT3nIQ+YAAM7k4fx/1NgobeIPs34SUxBDiCTvBzDAEGh3fiHOwoD5QEDrjYdWIf2JCEDc3Ac3B4TdTr4xMT7mjvp+8ceHO3//wQkBJXRMfpATEWhIsY3mfgcEjv6SH4hwcHu9vbZz9/Ns/OzptNudXRisUJtHodiZ9fXGzcvy88ESSv1d7+kWm8UtROuhh0j8I37TRxeX7+z/r67s7Opb8ypS59Zkgzc+DVarX5paWVtbVxHGdDNpzcdsnHoOXEsFNZA2e79SIcDhvr69/W1/F0dq+lTAN7SHG5owhpW15Z+f3hQzzyMiy8/w4RZo9L3t84DrSkOazmDouMwdHBwaf374Eb+YM7n9lY05hGQEaafaVSefriBQsmNutJVapVJtvFQzUPfvltb27+8/WrS3AABRFtDkCWGErVaqEbdBArjx4tPnjQE2osxCnCyhbQaNf+GOeG4FazDWdDOPj7y5cfW1uxJ1DpBU1zQoNO6a9LS6uPHyOuzDLVEnjKqOxiUaoqCr6XzJJEYrj97dv+jx940LgitnplvsWXRiEszTYy4mblmXG+VR8O8cxYWl5OARZGAgCgFrkVpDDgMWyMBI4RhcLR/v7O9+9i4osYNpYhEm6o+BS+Ru2nv7u1NVGrNebmQggdtIeBu69E0JKMRLM5eAI309bGBvShbEVJQxvCh0lBa6JjDtXIp1qo/31z897MTDl1Y0NHmodBoOX4mKO4S48cIyq+o7vI/wM2QiyvrvZ1BMBlOQT8PMTAhkYUCrjkmqenTDOdurTBkKtEQnNrybbUwmQQ/XPcps3mZL3OEK43GJ4AYNmILE0ScI8lEA4RqOnJ/j4LyTnSUnb6SofFDT49mDI5g+gjEED3xVMu6C0IPWukrccNgvc4Tww3H52VrI8WNbMoc/RDt1wc2hwCBa5GWh9vAXzdIUE98ACwHAUWw9GSE7XSFcGqSSmTozODDOitZQz9UlInQ8GMuaqBPsJNNRodqKAc4AGttz9ZYe+iCXTMHpuaudHcuYCuTHUU0mBY7nPoI9xUiIQ0Y3pajzC/gmH+JDYziidO+A1Ce+3dKkNNz0GTJIZpfkKhY6ifeVaHZguCeKDsqkdSqlz9G3dymOMnT71QhIt1DBumnuCYlFlJSAfTx5ueZytRmUsQ5HSpaSoWi23dFoKU4RUKLTFjqQNdjZgDv3r+jKKPT+JC+FIw1JwzatrFkFloaPZeb6xalXMDTUEzzwY0MRQPNre8+sBT4kdKFh5JCRqOGMmZZp4gPGD5C3w37Xb4ojIpoePL6tOHD/G1StxhL17iySDi0+fPJyYn6YdOzKfojo1hCwmhaxiKyIQ3KQ+IkSGXNovneVJe8BJoiYXXv263jw8PxUOooPEcUzXNBIScxJpLSEynwzzwT8OEVDai5lljcl6eFIPuHMqmpqcnJyfjDwiNR0POC7SAU1ck8DDyXvv7F00Pw/BoTbss09VwPW4vfGYj2VLNiphhHFAFLsEoLRSmG42uT7nBIsObnh5BsDi2Mc2XcTqJ31ZXL5pN+AozCiMmhkwFL46W19bc3MxJP/9JfUaKF9fshyQOdnYO9/aw2AKOaEJMnjM7N3d/YWFI30l1uekQho1CCezVQho8G54eH+Mzce3JE+xRYx7t7p4dHxti+GSmbenqjQa+TUwfN8j6588oLRRMOrSHEAclAPhHc09TUwJi+EVzh4kJlIDo58nJp3fvEHJ+YWFmdtb0G/Pzk1NTzeNj+SlQUwvvgA4ac6vPzOBXMrqlfzzQ97a3j/b2nr18eW96mnEoCmOa/xCP+uWyIgBauKyhNeko+uvjRzxW8TPX4soKYKX1IW3zX8Dknzzx43i14y3u/WM+OxsbpycnmNKjZ8/ET2bz+iKULItaADrTJsU8OzqCcR256RYmZdKVEUXINy4mVE5XnU5BB2iIZCn/342IgVHfFYo1sTxhDYGGlD10Q5FNM2Tehn64sK48LLZt9lAplgpkPdSMxWGCadLb0U+BDuONQP/55g1uvuevXo3go6tpXB5dVYYX4NPh4uzMfk4e3kEfi1sBjdJqzM52LbA+kPqLbwU0Tudf5ufR94+fS+O2ajoXmEGNbisZg8bPpXcHOlfachjdZTpH0nKZ3GU6V9pyGN1lOkfScpn8C/dp0mFoFn2wAAAAAElFTkSuQmCC"
    },
    "19ce": function(e, t, s) {},
    "1a8e": function(e, t, s) {},
    2007: function(e, t, s) {},
    "219e": function(e, t, s) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "course-test__wrap"
            }, [s("Exam", {
                attrs: {
                    visible: e.visible,
                    tipCount: e.tipCount,
                    list: e.list,
                    view: e.view,
                    analysis: e.originData.answerAnalysis,
                    time: e.time,
                    disabled: e.isSubmit || e.isPreview,
                    answer: e.answer,
                    originData: e.originData
                },
                on: {
                    cancel: e.onCancel
                }
            }, [s("template", {
                slot: "footer"
            }, [e.view || e.isPreview ? s("a-button", {
                staticClass: "submit",
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.onContinue
                }
            }, [e._v(e._s(e.$t("知道了")))]) : s("a-button", {
                staticClass: "submit",
                attrs: {
                    type: "primary",
                    loading: e.isSubmit
                },
                on: {
                    click: e.onSubmit
                }
            }, [e._v(e._s(e.$t("提交")))])], 1)], 2), s("Result", e._b({
                on: {
                    cancel: e.onCancelResult
                }
            }, "Result", e.resultModal, !1))], 1)
        }
          , n = []
          , a = (s("8e6e"),
        s("456d"),
        s("75fc"))
          , r = (s("20d6"),
        s("ac6a"),
        s("96cf"),
        s("3b8d"))
          , o = s("bd86")
          , c = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("a-modal", e._g(e._b({
                attrs: {
                    width: "960px",
                    destroyOnClose: "",
                    dialogClass: "custome-course__modal"
                },
                scopedSlots: e._u([{
                    key: "title",
                    fn: function() {
                        return [s("span", {
                            staticClass: "title"
                        }, [e._v(e._s(e.$t("随堂测试"))), e.view ? s("span", {
                            class: ["PASS" === e.originData.userState ? "pass" : "nopass"]
                        }, [e._v(e._s("PASS" === e.originData.userState ? e.$t("已通过") : e.$t("未通过")))]) : e._e(), e.time ? s("span", {
                            class: ["time", e.time < "00:00:11" && "time__red"]
                        }, [e._v(e._s(e.time))]) : e._e()])]
                    },
                    proxy: !0
                }, {
                    key: "footer",
                    fn: function() {
                        return [e._t("footer")]
                    },
                    proxy: !0
                }], null, !0)
            }, "a-modal", e.$attrs, !1, !0), e.$listeners), [s("div", {
                staticClass: "content"
            }, [e._l(e.list, (function(t, i) {
                return s("div", {
                    key: t.title + "--" + i,
                    class: ["subject-item", t.required && "subject-item__require", e.view && "subject-item__view"]
                }, [s("h6", {
                    staticClass: "subject-item__title",
                    class: {
                        "is-right": e.view && t.isRight,
                        "is-wrong": e.view && !t.isRight
                    }
                }, [s("span", {
                    staticClass: "subject-item__required"
                }, [e._v("*")]), s("span", {
                    staticClass: "subject-item__index"
                }, [e._v(e._s(i + 1 < 10 ? "0" + (i + 1) : i + 1))]), e._v("\n        " + e._s(t.title) + "\n        "), e.view ? s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        "icon-class": t.isRight ? "zhengque" : "cuowu"
                    }
                }) : e._e(), "checkbox" === t.type ? s("span", {
                    staticClass: "tag"
                }, [e._v(e._s(e.$t("多选")))]) : e._e(), "radio" === t.type ? s("span", {
                    staticClass: "tag"
                }, [e._v(e._s(t.options && 2 === t.options.length && ["是", "正确", e.$t("是"), e.$t("正确")].includes(t.options[0].label) ? e.$t("判断") : e.$t("单选")))]) : e._e()], 1), "checkbox" === t.type ? s("div", {
                    staticClass: "checkbox__item"
                }, [e.view ? s("a-checkbox-group", {
                    staticClass: "view-checkbox-group",
                    attrs: {
                        disabled: e.view,
                        value: e.answer[t.id]
                    }
                }, e._l(t.options, (function(t, i) {
                    return s("div", {
                        key: t.value,
                        staticClass: "checkbox__item__option",
                        class: {
                            "is-select": t.userItem
                        }
                    }, [s("a-checkbox", {
                        attrs: {
                            value: t.value
                        }
                    }, [e._v("\n              " + e._s(e.strList[i]) + "、" + e._s(t.label) + "\n            ")])], 1)
                }
                )), 0) : s("a-checkbox-group", {
                    attrs: {
                        disabled: e.disabled
                    },
                    on: {
                        change: t.onChange
                    }
                }, e._l(t.options, (function(i) {
                    return s("div", {
                        key: i.value,
                        staticClass: "checkbox__item__option",
                        on: {
                            click: t.onChange
                        }
                    }, [s("a-checkbox", {
                        attrs: {
                            value: i.value
                        }
                    }, [e._v("\n              " + e._s(i.label) + "\n            ")])], 1)
                }
                )), 0)], 1) : e._e(), "radio" === t.type ? s("div", {
                    staticClass: "radio__item"
                }, [e.view ? s("a-radio-group", {
                    staticClass: "view-radio-group",
                    attrs: {
                        disabled: e.view,
                        value: e.view ? e.answer[t.id][0] : e.answer[t.id]
                    }
                }, e._l(t.options, (function(t, i) {
                    return s("div", {
                        key: t.value,
                        staticClass: "radio__item__option",
                        class: {
                            "is-select": t.userItem
                        }
                    }, [s("a-radio", {
                        attrs: {
                            value: t.value
                        }
                    }, [e._v("\n              " + e._s(e.strList[i]) + "、" + e._s(e.$t(t.label)) + "\n            ")])], 1)
                }
                )), 0) : s("a-radio-group", {
                    attrs: {
                        disabled: e.disabled
                    },
                    on: {
                        change: t.onChange
                    }
                }, e._l(t.options, (function(i) {
                    return s("div", {
                        key: i.value,
                        staticClass: "radio__item__option",
                        on: {
                            click: t.onChange
                        }
                    }, [s("a-radio", {
                        attrs: {
                            value: i.value
                        }
                    }, [e._v("\n              " + e._s(e.$t(i.label)) + "\n            ")])], 1)
                }
                )), 0)], 1) : e._e(), e.showResult && e.view ? s("div", {
                    staticClass: "answer-box"
                }, [s("div", {
                    staticClass: "answer",
                    class: [t.isRight ? "is-right" : "is-wrong"]
                }, [s("div", {
                    staticClass: "l-box"
                }, [t.isRight ? s("i", {
                    staticClass: "el-icon-check"
                }) : s("i", {
                    staticClass: "el-icon-close"
                })]), e._v("\n          " + e._s(e.$t("你的回答")) + ":"), s("span", {
                    class: t.isRight ? "a-w a-r" : "a-w"
                }, [e._v(e._s(e.getAnswer(t)))]), e._v("\n          " + e._s(e.$t("正确答案")) + ":"), s("span", {
                    staticClass: "a-r"
                }, [e._v(e._s(e.getCorrect(t)))])]), t.questionAnalysis ? s("div", {
                    staticClass: "analysis"
                }, [s("div", {
                    staticClass: "analysis-title"
                }, [e._v(e._s(e.$t("试题解析")))]), s("div", {
                    staticClass: "analysis-content"
                }, [e._v(e._s(t.questionAnalysis))])]) : e._e()]) : e._e()])
            }
            )), e.tipCount ? s("div", {
                staticClass: "tip"
            }, [s("p", {
                staticClass: "tip__title"
            }, [e._v(e._s(e.$t("提示")))]), s("p", {
                staticClass: "tip__text"
            }, [e._v("\n        " + e._s(e.$t("1.倒计时结束后将自动收卷，以卷面答题情况判定分数；"))), s("br"), e._v(e._s(2 === e.tipCount ? e.$t("2.该随堂测试已开启强制测试，及格后方可观看后续课程内容；") : "") + "\n      ")])]) : e._e()], 2), e._t("default")], 2)
        }
          , u = []
          , l = (s("6762"),
        s("2fdb"),
        s("c5f6"),
        {
            list: Array,
            time: String,
            tipCount: Number,
            view: Boolean,
            analysis: Boolean,
            answer: Object,
            disabled: Boolean,
            originData: Object
        })
          , d = {
            props: l,
            data: function() {
                return {
                    strList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
                }
            },
            computed: {
                showResult: function() {
                    return this.analysis && "PASS" === this.originData.userState || this.originData.answerFailAnalysis && "PASS" !== this.originData.userState
                }
            },
            methods: {
                getSlot: function(e) {
                    console.log(e)
                },
                getCorrect: function(e) {
                    var t = this
                      , s = "";
                    if ("radio" === e.type) {
                        var i = e.options.findIndex((function(e) {
                            return e.isRight
                        }
                        ));
                        if (s = this.strList[i],
                        e.options && 2 === e.options.length) {
                            var n = e.options[0].label;
                            ["是", "正确", this.$t("是"), this.$t("正确")].includes(n) && (s = [this.$t("正确"), this.$t("错误")][i])
                        }
                    } else if ("checkbox" === e.type) {
                        var a = [];
                        e.options.map((function(e, s) {
                            e.isRight && a.push(t.strList[s])
                        }
                        )),
                        s = a.join("，")
                    }
                    return s
                },
                getAnswer: function(e) {
                    var t = this
                      , s = "";
                    if ("radio" === e.type) {
                        var i = e.options.findIndex((function(s) {
                            return s.value === t.answer[e.id][0]
                        }
                        ));
                        if (s = this.strList[i],
                        e.options && 2 === e.options.length) {
                            var n = e.options[0].label;
                            ["是", "正确", this.$t("是"), this.$t("正确")].includes(n) && (s = [this.$t("正确"), this.$t("错误")][i])
                        }
                    } else if ("checkbox" === e.type) {
                        var a = [];
                        e.options.map((function(s, i) {
                            t.answer[e.id].includes(s.value) && a.push(t.strList[i])
                        }
                        )),
                        s = a.join("，")
                    }
                    return s
                }
            }
        }
          , h = d
          , m = (s("2637"),
        s("2877"))
          , p = Object(m["a"])(h, c, u, !1, null, null, null)
          , f = p.exports
          , v = s("f64c")
          , g = s("79fa")
          , y = {
            ERROR: {
                img: s("2e5a"),
                result: Object(g["a"])("很遗憾，未通过！"),
                tip: Object(g["a"])("测试结果与你本节课程的完成度相关哦"),
                visible: !0,
                footer: !1,
                status: "ERROR"
            },
            SUCCESS: {
                img: s("5add"),
                result: Object(g["a"])("恭喜您，已通过！"),
                tip: Object(g["a"])("请继续后面的学习吧！"),
                visible: !0,
                footer: !1,
                status: "SUCCESS"
            },
            TIP: {
                img: "",
                tip: Object(g["a"])("当前测试为强制测试，通过测试后才能继续学习"),
                visible: !0,
                footer: !1,
                status: "TIP"
            }
        }
          , C = {
            TRUE_FALSE: "radio",
            MULTIPLE: "checkbox",
            SINGLE: "radio"
        }
          , I = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("a-modal", e._g(e._b({
                attrs: {
                    visible: e.visible,
                    width: "660px",
                    dialogClass: "custome-course-reault__modal"
                }
            }, "a-modal", e.$attrs, !1), e.$listeners), [e.img ? s("img", {
                attrs: {
                    src: e.img,
                    alt: ""
                }
            }) : e._e(), s("div", {
                staticClass: "result"
            }, [e._v("\n    " + e._s(e.result) + "\n  ")]), s("div", {
                staticClass: "tip",
                class: {
                    "tip--error": e.viewFailPaper
                }
            }, [e._v("\n    " + e._s(e.tip) + "\n  ")]), e.viewFailPaper ? s("div", {
                staticClass: "view"
            }, [s("div", {
                staticClass: "view-btn",
                on: {
                    click: e.viewFailPaper
                }
            }, [e._v("\n      " + e._s(e.$t("查看答卷")) + "\n      "), s("a-icon", {
                attrs: {
                    type: "right"
                }
            })], 1)]) : e._e(), s("div", {
                staticClass: "buttons"
            }, e._l(e.buttons, (function(t) {
                return s("a-button", e._b({
                    key: t.text,
                    on: {
                        click: t.click
                    }
                }, "a-button", t, !1), [e._v("\n      " + e._s(t.text) + "\n    ")])
            }
            )), 1)])
        }
          , A = []
          , S = {
            img: File | String,
            result: String,
            tip: String,
            buttons: Array,
            visible: Boolean,
            viewFailPaper: Function
        }
          , T = {
            props: S,
            data: function() {
                return {}
            }
        }
          , w = T
          , b = (s("22fe"),
        Object(m["a"])(w, I, A, !1, null, null, null))
          , _ = b.exports
          , x = s("5c44")
          , E = s("7e0a")
          , k = s("c1df")
          , O = s.n(k)
          , R = s("2ef0")
          , D = s.n(R);
        function L(e, t) {
            var s = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                s.push.apply(s, i)
            }
            return s
        }
        function P(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? L(Object(s), !0).forEach((function(t) {
                    Object(o["a"])(e, t, s[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : L(Object(s)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                }
                ))
            }
            return e
        }
        var N = {
            data: function() {
                return {
                    resultModal: {},
                    view: !1,
                    isPreview: !1,
                    time: "",
                    visible: !1,
                    isSubmit: !1,
                    originData: {},
                    questionList: [],
                    timer: null,
                    options: {},
                    answer: {},
                    isVideo: !1
                }
            },
            components: {
                Exam: f,
                Result: _
            },
            props: {
                allInFixTest: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            computed: {
                list: function() {
                    var e = this
                      , t = this.questionList
                      , s = this.options
                      , i = this.view;
                    return null === t || void 0 === t ? void 0 : t.map((function(t) {
                        var n = t.itemType
                          , a = t.content
                          , r = t.questionId
                          , o = s[r] || {}
                          , c = o.options
                          , u = o.rightContent
                          , l = o.questionAnalysis
                          , d = o.isRight
                          , h = i ? {
                            rightContent: u,
                            questionAnalysis: l,
                            isRight: d
                        } : {};
                        return P({
                            type: C[n],
                            require: !0,
                            title: a,
                            onChange: e.onChange.bind(e, r),
                            options: c,
                            id: r
                        }, h)
                    }
                    ))
                },
                tipCount: function() {
                    var e;
                    return this.view || this.isPreview ? 0 : null !== (e = this.originData) && void 0 !== e && e.mandatoryTest ? 2 : 1
                }
            },
            methods: {
                show: function(e) {
                    var t = this;
                    return Object(r["a"])(regeneratorRuntime.mark((function s() {
                        var i, n, a, r, o, c;
                        return regeneratorRuntime.wrap((function(s) {
                            while (1)
                                switch (s.prev = s.next) {
                                case 0:
                                    if (i = e.infixTest,
                                    n = e.isTag,
                                    a = e.time,
                                    r = e.isVideo,
                                    o = e.isPreview,
                                    console.log("🚀 ~ infixTest, isTag, time, isVideo, isPreview:", i, n, a, r, o),
                                    s.prev = 2,
                                    c = null === i || void 0 === i ? void 0 : i.data,
                                    t.visible = !1,
                                    t.isSubmit = !1,
                                    t.isVideo = r,
                                    t.answer = {},
                                    t.options = {},
                                    t.resultModal = {},
                                    t.originData = {},
                                    t.closeCalcTime(),
                                    !("NO_JOIN" === (null === c || void 0 === c ? void 0 : c.userState) && n && a < (null === i || void 0 === i ? void 0 : i.offset)) || o) {
                                        s.next = 14;
                                        break
                                    }
                                    return s.abrupt("return", v["a"].info(t.$t("未达到弹出时间，无法提前作答")));
                                case 14:
                                    if (!o) {
                                        s.next = 20;
                                        break
                                    }
                                    return t.isPreview = !0,
                                    t.isSubmit = !1,
                                    t.visible = !0,
                                    s.next = 20,
                                    t.getCourseList(c);
                                case 20:
                                    if (t.originData = Object.assign({}, c),
                                    "PASS" !== (null === c || void 0 === c ? void 0 : c.userState)) {
                                        s.next = 26;
                                        break
                                    }
                                    return s.next = 24,
                                    t.onViewResult();
                                case 24:
                                    s.next = 28;
                                    break;
                                case 26:
                                    return s.next = 28,
                                    t.onStart(c);
                                case 28:
                                    s.next = 35;
                                    break;
                                case 30:
                                    s.prev = 30,
                                    s.t0 = s["catch"](2),
                                    t.visible = !1,
                                    t.view = !1,
                                    v["a"].error(t.$t("获取随堂测试数据失败，请重试！"));
                                case 35:
                                case "end":
                                    return s.stop()
                                }
                        }
                        ), s, null, [[2, 30]])
                    }
                    )))()
                },
                onCancel: function() {
                    var e = this.view
                      , t = this.isPreview;
                    e || t || (this.closeCalcTime(),
                    this.onPlayControl("PAUSE")),
                    (e || t) && this.onContinue()
                },
                onSubmit: function(e) {
                    var t = this;
                    return Object(r["a"])(regeneratorRuntime.mark((function s() {
                        var i, n, a, r, o, c, u, l, d, h;
                        return regeneratorRuntime.wrap((function(s) {
                            while (1)
                                switch (s.prev = s.next) {
                                case 0:
                                    if (t.isSubmit = !0,
                                    i = t.list,
                                    n = t.answer,
                                    s.prev = 2,
                                    !t.timer || !e) {
                                        s.next = 9;
                                        break
                                    }
                                    for (r = [],
                                    o = 0; o < i.length; o++)
                                        c = i[o],
                                        n[c.id] || r.push(o + 1);
                                    if (!r.length) {
                                        s.next = 9;
                                        break
                                    }
                                    return t.isSubmit = !1,
                                    s.abrupt("return", v["a"].info(t.$t("第{num}题未作答", {
                                        num: r[0]
                                    })));
                                case 9:
                                    return t.isSubmit = !1,
                                    u = t.originData.infixSettingId,
                                    l = [],
                                    null === (a = t.list) || void 0 === a || a.map((function(e) {
                                        Array.isArray(t.answer[e.id]) ? t.answer[e.id].forEach((function(t) {
                                            l.push({
                                                questionId: e.id,
                                                answerId: t
                                            })
                                        }
                                        )) : l.push({
                                            questionId: e.id,
                                            answerId: t.answer[e.id] || null
                                        })
                                    }
                                    )),
                                    d = {
                                        settingId: u,
                                        questionAndAnswerList: l,
                                        sourceCorpCode: t.originData.corpCode
                                    },
                                    s.next = 16,
                                    Object(E["m"])(d);
                                case 16:
                                    h = s.sent,
                                    t.closeCalcTime(),
                                    t.showResult(null === h || void 0 === h ? void 0 : h.data),
                                    t.syncInFixTestData(null === h || void 0 === h ? void 0 : h.data),
                                    v["a"].success(t.$t("提交成功！")),
                                    s.next = 29;
                                    break;
                                case 23:
                                    s.prev = 23,
                                    s.t0 = s["catch"](2),
                                    console.log(s.t0),
                                    t.closeCalcTime(),
                                    v["a"].error(t.$t("提交失败，请重试！")),
                                    t.isSubmit = !1;
                                case 29:
                                case "end":
                                    return s.stop()
                                }
                        }
                        ), s, null, [[2, 23]])
                    }
                    )))()
                },
                onChange: function(e, t) {
                    this.isPreview ? v["a"].info(this.$t("预览中无法答题")) : t.target ? this.answer[e] = t.target.value : this.answer[e] = t
                },
                showResult: function(e) {
                    var t = this.originData.mandatoryTest;
                    this.view = !1,
                    e ? this.generalSuccess() : t ? this.generalError({
                        buttons: [{
                            text: this.$t("重新学习"),
                            type: "primary",
                            ghost: !0,
                            click: this.onReStart
                        }]
                    }) : this.generalError()
                },
                onReStart: function() {
                    var e = this.allInFixTest.length
                      , t = this.originData.popupTime;
                    if (console.log(this.allInFixTest, this.originData),
                    e <= 1)
                        this.onPlayControl("RE_START");
                    else {
                        var s = this.allInFixTest.findIndex((function(e) {
                            return e.popupTime === t
                        }
                        ));
                        s <= 0 ? this.onPlayControl("RE_START") : this.onPlayControl("SEEK", this.allInFixTest[s - 1].popupTime + 1)
                    }
                },
                onPlayControl: function(e, t) {
                    var s = this;
                    this.$nextTick((function() {
                        s.visible = !1,
                        s.view = !1,
                        s.hiddenResultModal()
                    }
                    )),
                    this.isVideo && ("RE_START" === e && x["a"].replay(),
                    "CONTINUE" === e && x["a"].player.play(),
                    "SEEK" === e && x["a"].player.seek(t))
                },
                hiddenResultModal: function() {
                    var e = this;
                    this.resultModal.visible = !1,
                    setTimeout((function() {
                        e.resultModal = Object.assign({}, {
                            visible: !1
                        })
                    }
                    ), 300)
                },
                onViewResult: function() {
                    var e = this;
                    return Object(r["a"])(regeneratorRuntime.mark((function t() {
                        var s, i, n, r, o, c;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.hiddenResultModal(),
                                    t.next = 3,
                                    Object(E["g"])({
                                        settingId: null === (s = e.originData) || void 0 === s ? void 0 : s.infixSettingId,
                                        sourceCorpCode: e.originData.corpCode
                                    });
                                case 3:
                                    n = t.sent,
                                    r = e.getDealQuestList((null === n || void 0 === n ? void 0 : n.data) || []),
                                    o = r.questionList,
                                    c = r.options,
                                    e.questionList = Object.assign([], Object(a["a"])(o)),
                                    e.options = c,
                                    null === n || void 0 === n || null === (i = n.data) || void 0 === i || i.forEach((function(t) {
                                        var s;
                                        e.options[t.questionId]["isRight"] = null === t || void 0 === t ? void 0 : t.userRight;
                                        var i = [];
                                        null === t || void 0 === t || null === (s = t.questionItems) || void 0 === s || s.forEach((function(e) {
                                            e.userItem && i.push(e.itemId)
                                        }
                                        )),
                                        e.answer[t.questionId] = i
                                    }
                                    )),
                                    e.view = !0,
                                    e.visible = !0;
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                onContinue: function() {
                    this.onPlayControl("CONTINUE")
                },
                onCancelResult: function() {
                    this.visible = !1,
                    this.view = !1,
                    this.hiddenResultModal()
                },
                onSkip: function() {
                    this.onPlayControl("CONTINUE")
                },
                onStart: function(e) {
                    var t = this;
                    return Object(r["a"])(regeneratorRuntime.mark((function s() {
                        return regeneratorRuntime.wrap((function(s) {
                            while (1)
                                switch (s.prev = s.next) {
                                case 0:
                                    return t.answer = {},
                                    t.options = {},
                                    s.prev = 2,
                                    t.hiddenResultModal(),
                                    s.next = 6,
                                    t.getCourseList(e);
                                case 6:
                                    t.visible = !0,
                                    t.view = !1,
                                    t.startCalcTime(null === e || void 0 === e ? void 0 : e.testDuration),
                                    s.next = 14;
                                    break;
                                case 11:
                                    throw s.prev = 11,
                                    s.t0 = s["catch"](2),
                                    new Error(s.t0);
                                case 14:
                                case "end":
                                    return s.stop()
                                }
                        }
                        ), s, null, [[2, 11]])
                    }
                    )))()
                },
                getCourseList: function(e) {
                    var t = this;
                    return Object(r["a"])(regeneratorRuntime.mark((function s() {
                        var i, n, r, o, c, u;
                        return regeneratorRuntime.wrap((function(s) {
                            while (1)
                                switch (s.prev = s.next) {
                                case 0:
                                    return s.prev = 0,
                                    e = e || t.originData,
                                    s.next = 4,
                                    Object(E["h"])({
                                        infixSettingId: null === (i = e) || void 0 === i ? void 0 : i.infixSettingId,
                                        sourceCorpCode: null === (n = e) || void 0 === n ? void 0 : n.corpCode
                                    });
                                case 4:
                                    r = s.sent,
                                    o = t.getDealQuestList((null === r || void 0 === r ? void 0 : r.data) || []),
                                    c = o.questionList,
                                    u = o.options,
                                    t.questionList = Object.assign([], Object(a["a"])(c)),
                                    t.options = u,
                                    s.next = 13;
                                    break;
                                case 10:
                                    throw s.prev = 10,
                                    s.t0 = s["catch"](0),
                                    Error(s.t0);
                                case 13:
                                case "end":
                                    return s.stop()
                                }
                        }
                        ), s, null, [[0, 10]])
                    }
                    )))()
                },
                getDealQuestList: function(e) {
                    var t = {};
                    return null !== e && void 0 !== e && e.length ? (e.forEach((function(e) {
                        var s, i = e.questionId, n = e.questionAnalysis, a = e.questionItems;
                        t[i] = {
                            options: [],
                            questionAnalysis: n,
                            rightContent: []
                        },
                        t[i].options = a.map((function(e) {
                            var s = e.rightAnswer
                              , n = e.content
                              , a = e.itemId;
                            return s && t[i].rightContent.push(n),
                            {
                                value: a,
                                label: n,
                                isRight: s
                            }
                        }
                        )),
                        t[i].rightContent = null === (s = t[i]) || void 0 === s || null === (s = s.rightContent) || void 0 === s ? void 0 : s.join(",")
                    }
                    )),
                    {
                        questionList: e,
                        options: t
                    }) : {
                        questionList: [],
                        options: t
                    }
                },
                closeCalcTime: function() {
                    this.timer && (clearInterval(this.timer),
                    this.time = "",
                    this.timer = null)
                },
                startCalcTime: function(e) {
                    var t = this;
                    e && (this.time = this.secondsToStr(60 * e),
                    this.timer && this.closeCalcTime(),
                    this.timer = setInterval((function() {
                        var s = t.time ? O.a.duration(t.time).as("seconds") : 60 * e;
                        s -= 1,
                        s < 0 ? t.onSubmit(!1) : t.time = t.secondsToStr(s)
                    }
                    ), 1e3))
                },
                secondsToStr: function(e) {
                    var t = O.a.duration(e, "seconds");
                    return O()({
                        h: t.hours(),
                        m: t.minutes(),
                        s: t.seconds()
                    }).format("HH:mm:ss")
                },
                syncInFixTestData: function(e) {
                    var t = {
                        true: "PASS",
                        false: "NO_PASS"
                    }
                      , s = D.a.cloneDeep(P(P({}, this.originData), {}, {
                        userState: t[e]
                    }));
                    this.$emit("updateInFixTest", s)
                },
                generalSuccess: function() {
                    this.visible = !1,
                    this.originData.userState = "PASS",
                    this.resultModal = Object.assign({}, P(P({}, y.SUCCESS), {}, {
                        originData: this.originData,
                        viewFailPaper: null,
                        buttons: [{
                            text: this.$t("查看试卷"),
                            type: "primary",
                            ghost: !0,
                            click: this.onViewResult
                        }, {
                            text: this.$t("继续学习"),
                            type: "primary",
                            click: this.onContinue
                        }]
                    }))
                },
                generalError: function(e) {
                    var t;
                    this.visible = !1,
                    this.originData.userState = "NO_PASS",
                    this.resultModal = Object.assign({}, P(P({}, y.ERROR), {}, {
                        originData: this.originData,
                        viewFailPaper: this.originData.answerFailSheetDetail ? this.onViewResult : null,
                        buttons: [(null === e || void 0 === e || null === (t = e.buttons) || void 0 === t ? void 0 : t[0]) || {
                            text: this.$t("暂时跳过"),
                            type: "primary",
                            ghost: !0,
                            click: this.onSkip
                        }, {
                            text: this.$t("重新答题"),
                            type: "primary",
                            click: this.onStart.bind(this, this.originData)
                        }]
                    }))
                },
                generalTip: function() {
                    this.visible = !1,
                    this.resultModal = Object.assign({}, P(P({}, y.TIP), {}, {
                        buttons: [{
                            text: this.$t("知道了"),
                            type: "primary",
                            click: this.onStart.bind(this, this.originData)
                        }]
                    }))
                }
            }
        }
          , $ = N
          , U = (s("2f6a"),
        Object(m["a"])($, i, n, !1, null, null, null));
        t["a"] = U.exports
    },
    "22fe": function(e, t, s) {
        "use strict";
        s("5e19")
    },
    "23b2": function(e, t, s) {},
    2637: function(e, t, s) {
        "use strict";
        s("6663")
    },
    "29a7": function(e, t, s) {
        "use strict";
        s("b283")
    },
    "2ca1": function(e, t, s) {},
    "2d4d": function(e, t, s) {
        "use strict";
        s("86e3")
    },
    "2d5a": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAB6CAYAAADeb1FlAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAegAAAAD97ZejAAAEiUlEQVRoBe2Z3WsVRxjGn2M+jEkTm5ho4hcVsSBeVArmxt6L+AdoL6zohWiroSoIQQrthaKFCvUqYMCPk96IoqipiOmFWgN6EaP0pihSiCClfiV+NG2Ss77PoZOz8Zw9O7M7exbKDExm8p7deX7z7Dtz9uzC87wFUquQUpkluh9IXSIQ9WkwEICFDnQIRJtUFct/kPSf98WaRHCxQNQlLazGfx+A8RqpiwSiRWpGHZhUWwpAaTVLh27UqkASbTkA6lGcCfphUm6EAahJz5POQoHg5bFadAEoysSkG0xUa8UEgKJMSi5VLtlqGxSmAEqTmxbdaFCBqG1UAOrx3HaBmC818jiRT/TNuFH6dGOOL6bdtQFAMeYDV0mrqRu2ANSM50qHm9dsFQhrbQNQj3sFIZqlhm7lSQCoSbdIh98pZbfyJAEIwktBN3hpSpakASjKy8DkZJIWbV6VAFAz5zLlcuUd2HSpJABFqcd7UH7V50ulAZQub3a4geWJVLDSLfOiKi0H1OQb0wQgREPaADVpA6SaA/mkT9uBVJehc8A54BxwDjgHnAPOAeeAc8Dcgf1XsSJ/lsU/2jelnT3oyt7D5fWnsMGivt5NKcVHRtEFD1XDf+KoTYhQB2j7yBi+mp61ZYhQgO/X4cGnHdgrzzmmkoAIBaBo/2b0B0FsyMbLCS0ABbF6QbETQ09wNA6ENgAhrmxBv20II4AkIIwBbENEArAJERnAFkQsABsQsQEIUVeDcdmmPfZVyXiYaqjBmPo/qI0NsPEMPrv9GMdEwP8ceLJzKbrObMLNIGEVjwXwxXms+fUP9Hhe/qm4GjO3uh37LnyOARUo1/qpyx1X9NmOi/hk4AGOi3jhRXcG3qo2dHPDKjohIBDJga9/xspLv+OEiM948v1xK74b2IpzAVolw8YOdF/D8rO/4WTOw4w3qMuacfj6NvSVVCkTNHLg0HUszQ4jO+WB75Kny5K5ODa4Hb3TAYOONsAPt9DRcwd9UznM94/f3ojjd3bkV4E/rN3XAugdQtuPg8hO5LDQP3JbA/rufokj/phpXwvgyA0cFPGP/IO31OPs/V341h+L0tcC2LMW39RW45ESaKrD5aHd6Fb/x2kz8tZiuc4APw2j5cAvOF1bhZHBndjVOtt3j6gzQMAx2gA8/+JDNK1sxviKefg3YDzjsBGA8egaJ2jlgMY4kQ9xAM4B54BzwDngHHAOOAecA86BtB3IpQ0wmTbA27QBxtIEeJnJZCbSAngrP6We8+eU8TOiyL/BCie+lO5zmX3+wWYlASZE+C8R/rvAUhkHONMXUnnNZzzOJUjSDnC2T0U48HlCUgC5/4RfcZblShIAFH0msy685itDYBOASUa7ucS0iy0AlWS03qjEBRgXNS6twCQLo4kKwJk+k/pKxIuWVpio//MoAG9kAF7rSf9AUfsmABSkMAGsFV2AUVHk/m2cZGGkYQD/yABMMraJlCAAJha/LkdFPFaShVGXAuBGwllbSTITAG6dTLLXYSfZ/Fw5wDec3L+tJ1korLwvKLz3Cz36f3jAO1LnaxkaiWUtAAAAAElFTkSuQmCC"
    },
    "2df7": function(e, t, s) {
        "use strict";
        s("c444")
    },
    "2e5a": function(e, t, s) {
        e.exports = s.p + "static/img/nopass.d2dfa656.png"
    },
    "2f6a": function(e, t, s) {
        "use strict";
        s("5007")
    },
    3004: function(e, t, s) {
        "use strict";
        s("23b2")
    },
    3045: function(e, t, s) {
        e.exports = s.p + "static/img/rlsb_ic_rl.b3d70748.png"
    },
    "306d": function(e, t, s) {},
    "3b51": function(e, t, s) {
        "use strict";
        s("b6ba")
    },
    "45cb": function(e, t, s) {
        "use strict";
        s("849f")
    },
    4620: function(e, t, s) {
        "use strict";
        s("2ca1")
    },
    4761: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAPKADAAQAAAABAAAAPAAAAACL3+lcAAAISklEQVRoBe2Y7W8TRxDG/XJ2nEDeX4BSGilFVWlVQSVUiQ/8+XwqqkAtlYpUFBVQIDQxSWM7iZ24v5m5Ha/vzo4hoS9STrCZnX1m5tnZ2d07l/v9funcz+nJyUmvV+r3EcQdQr9fLpXK5bL856lUaKpJUqlWzx2tVP5o0hiedLtwhegH8YA37Ku1GtP4IEMHfwxpWPaOjyW153ugntTrH5H7DyMtVXB8PJRaqy5yhmAtM/FuflY5PKRrU1MfRH1S0v3T065mlxW1TWCCLzBKl41qDJOJqKFjMnjLOqWfn2ZeMxFpUts9PPzo6s9HLdRQ4rVGY5KUnz0z6uHYGNu+obV/FtmVdF2fV5rGMHEbIcn9cafT63bN8Zj2jEx3j47Ov+HGhC8colSo8sIhU44m3e+T4NPT0zHGn26oUqnUGw1ZuqJnZHn8i4zhSbIgUERYdMWkqQq2nU2T/cED1FoT6KejQZ+CtHsheDmvjo6EY+4pKA/uuUl2Q87VJ1EktRp3Z8Z1NtNy202wfzNePl0XMkN3mUYaIk1JcMANGGT2gXdN8K4bZDTePR8eSpkrYqg8GOaitmKN7zM01jV6+S56A7T++uvZkyeDGH63K28M79y7Nzc353hzlXeYCceNw1vKIDkeYEzhO3q80Ov1fnz0qHVwAMx5IPAICZ3A9PT0Dw8f1nJlqqhxDSe3X/KD8hgqZV/ZvJ/CIVX++vTpYafDiyenLAEQkORNGtm61SrXqyxF3q1rRviP6aXlYe9Dblgo8ML07u3bYzuGci9r7Xb73Zs36bte3n4Yv3rt2vSVK3IyavrrU1NoalEB5B2gAWDJTklTzeMvP4r158ePu9E7tBcA7mK5MF4Gk8fXkuS7+/evzM6OMkfPAlplJ3QoazI9KL5Awl0jbP7+O19QmEn4skw1bkUZ6c2nASbEn5ye/vHixTd374KPHyskYwJJi6uko+8lhu0xwbuHrZYxxgzWvhXomj7Yyd9YOTm+rTs49oPsBEzoc7jxvcOAFEam/JWZ2LsANU0zUzd7Kmx+aWlvd5daFyRYG9JKdZgLhonbLB7/GRqODjS4aCpGWpKRedw4CGz/frUKXYFqdr9/8IANxL786dEjPKROlDHVB6Zcrc7OzjI3TI46nVarJVWlsbxyhCUaxedXbEAq0DCiCYUyGBst8QuAOSUw0lSjAWPgtI3paU46eKRU2C5Jcv3mzZXr1zn03GW3233z6tW7rS00UI/xkouiMnPbWIBwQm0PLYp3XVALOXU1mjSlEiXx9vXr5bW1ne1tZEYhIZFLpemZmY2vv7YpydZhwzDG12u9fmtjY2F5efP5c64hxyPIHEoliRAyOmDpNIIAYanpdNFDRRJYNOJVi0G70JI1oUhIiYZ59eIF/4QQS2CMy+Wpev3LO3fq9Tp3AXtX3nV0JrhKGg3mMzc/v/7VV5u//WbZNkMpD6KEiHFctHk+CdvQePvksHGNyXQhRk3ryGCS1o3bz9bXYUyh7+/sxHpicxcetdsLq6vz8/PLq6vNCGAsyQsmcXTzEGtEpjxwx6SHWjFVZFgRAFLQ8NZ82GqaR8XK+iJAl9XnLGpub5NjUQ0/EN9vNjlzVm7c2Gs2bZD8mkP2+lBcZwUu5lMuS3mkKhuwNvizvwCENBWi5ESOHpSyDv3+7OIi6s7BQafTQWDetrLINgE0vd3d+eVl9i5FH38yi5OwkmfySUC790xuTG/hJQ3K2HjErXBS3lN6nrRbLbamAYyu+NHjwpCMsinhzSmIRpT62Sf1rc94PrhKDBi3Zun2JrC1cW28RUMA5YELk0XHhiSXXVjpdWNDgtYndKkcYLKBSa0mQjrw1nvAsOP5jKjp1FTLXWWpDz09zF3KVevRQjIlPi7B8ukvb4I6K2l5fGLgOWH4bYDtxN3GqFWaAjzTYuLmNitRDZSJxHWVDVg3VmoW02SrnqLGKp1AEA7bbYLNLSywF/kCApguDjGEuazJytoa82cpOEAltUrOCEjiBRgek2MNIxikG1Fh4jfg/a8rqen05vS0qQuo2FmLLVwPDw4aV69+vrHx/JdfdFxIgCESLZvvi9u30Rw0m7J0yliIqiCko8dDR7o0TVIeqWMdlJ7Rstzo3NCIx6AXQcvXJ+kB3u/sXJuZuXHzJpjnz56lXwzqc25p6dt799isvIewBe2GlZjBrZeHcTDnhXzKcqBidtaztbkJzJA4QjCiJsfW0FrUtw4YN//8c+/9e15FFpaWFldWAFMYO1tbBHUTnzDTuL6+7vpRAk7K1BbPKITrt1++NNgQb2MflsomQMvKc2bzQSXrHh4Ctfb3D/b2TCHTDuYmY7V261aAj/wLTE8PKwlgJsRtsDUq9CyACGH/mSxbU09rs9jf3W3t7clP/PrKzsEipRIA2GbwsW1KA0cxk4ik3og2bNEY867Jqqem5YXJLR1spTVCz4ldCr/HScmGG6rQDwskevccC6YPo/qWp8uUYjSFeVlOD2x005B1AOQmkwlb7jRwNDohPnN65DlIVA2tpG1cW190BJ4w8VLCq0K4nG2o8Kg2c7eNu2fiuds9nAaXxjyYQGuA9AVN0sY/UQ9uQemGh8uZGsUGZJpRc2GbSWEeQHrDm0z8j8dXKjNzc/xGqp6iJuZDYM10RDpCFoqcUz1+t57gqCk0H6OkmlnJwvLIWA2RZsySkQH9p7rGGErh9LC1izhqrQy9Xfjqx0NuESsNebH4dH9rvLQ8PLZUtpWRVs9A75IBMt2M0kcRMkMX4T9HOo73X5U5iP5/zyXpf2rNLjN9mekxGbgsjzHJudChy0xfaDrHOLvM9JjkXOjQ/zLTfwO0o9RYM/zVowAAAABJRU5ErkJggg=="
    },
    4847: function(e, t, s) {
        "use strict";
        s("15b4")
    },
    "49fb": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHKADAAQAAAABAAAAHAAAAABHddaYAAAB00lEQVRIDe1WPUsDQRB9ezEYvyAWgjEoIoqFgoK9nZVWgj/AJo0oKIqWllGDgiKICFpba59CsFXQRiUERJEUaqGQcObG2SMre64hl5A0koUws2/fm3fMXdgRKGN1xmmZ6UsFyfbLmkiUIXepwq8gGqfJPHCm8wPA1NOaONexUrlViqDOHWBC5Sr+hamzYtG3IQSajCJ/YQbJC/g39Ooq3v1/wwbZm5lTClym0dfQgcf0rMhW3C8fQiu6SaMXKaS+HNxlM8hENmjah65iipV3cEBAj1uB0Mb5Se8xhSquWEIoP5oxD4dN7VcMerAqbuQ7dN+jXtMhE9PP/eTdG9RlCwyEgrhOL4p3panJ3yKySTEbSMNBMpdDKpKg8ZoZDu1TKwi7/AtKE/4m2imPvZoZvn+inwiNysCNhGG1r3pLHQt8iRjrx+cnMSg1AuqGVW9svaX/o6U8fHmX5YAnQmMZPGYYWCmtxdPYjV5aCOTCLXjQMZkz7uEVw6RW1vDoNa0lApjnafjNJQjY/AALt3PiwyPgTXMIRxySGp4sYBoEuFquwXX4wuAH5drSQ5Hcybt3h8JZGyNBwv3jqnhWh7/jOpF1uIVRicdWcLUuhNFSpSl2H34DBDR9yphIIqoAAAAASUVORK5CYII="
    },
    "4b42": function(e, t, s) {
        "use strict";
        s("04ca")
    },
    5007: function(e, t, s) {},
    5136: function(e, t, s) {},
    5180: function(e, t, s) {
        "use strict";
        s("5a2c")
    },
    "52db": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE5RTQ2QzZCRjNEMzExRTBCNzM0RkZBNEEwMDU0Njk0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE5RTQ2QzZDRjNEMzExRTBCNzM0RkZBNEEwMDU0Njk0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTlFNDZDNjlGM0QzMTFFMEI3MzRGRkE0QTAwNTQ2OTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTlFNDZDNkFGM0QzMTFFMEI3MzRGRkE0QTAwNTQ2OTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz76PDNBAAAGuUlEQVR42oyZ209TWxDGadkqihcusUGimMrtkPAgIdH4/7/6AGosFqxNjSAE5Y7cjj2/dsp0mFl7c9ZDsy9rz5rLNzPfWi19+/ZtYGCg3W4P5A95WyqV9DZ5nZycnOPmO2mMrN0dyVWdrjqNIXPsTLmVmXqtF+62QL78ZqqNflMul90C0dbS9bBmWFFWmsyJVjmZui6vytEZVqe4mLMhRl9eJZ+7aFhpLvqZs9jBwinqdE0a7VZNQs2JcnI62MozRcffv3/dx+onlWs/kfm6dsSfA5bKt3Myp7L7TSJGPxkcHOQXuf92R8/QLOM503hujRTo6PKCueizXhCdTgWBE8TINUK5ODw83NnZOTg4OD09vby85PmdO3fu3bv3+PHjSqUyMjKCfldXV842u3wy6zvvWq2Wg6fTKeYB/tjf3280GuiENq5kSFyYMz4+Xq1Wnz59iiOtQHVVXrHoiPv+/XteLXU4E3GMZrNZr9fPz88Hu8NJ10xEG96+fPlybm6OC4lyMqtizmWx9OVVZBRCeq1WW19fxxl37961H0YhBJTrjY2NP3/+vH79mk8UfwWtogcSG2k7z9bMXkPIso3uYD2JgsvqZPKj/ebm5qdPnxyM0rHTImzrtRZlq6jMQxWQROxQTpPISZQ80AsViGZAhdCLPdGYUhhl1UBw4xbQ2JFQxA4VpSjYOVYPFaLZKhcYAyc4Pj6Wz8vXIy7XV8vGUR1mjUDoz58/yT7MTdrnPO28LhUOhOEzUcu5ObbasprlyrH1Fk+2trZcbcvjP67K63ooBAwuLi5cfU72Rx8IuXDqYyiVE58VpEXyWmdK9E9OTqi9gs64yg0dnL4RfYijiGOlYiUufAOtBnPuIcphXsFMFZUVN3N5eHZ2ZjGXRzTiw+gSirDtCnmo6LXVPI4loqXp2oIZJeYRTjdN+UJB9e55K5Jmt4ygKjb1pMTYsux8vCB2FrOpzFVO29s1Cvfv31fNlJ8kuX/kxNb9aPPgwQNHHyIH7Kml/TzSYrl9+PAhlVpz2/b/JLdO+k86PWzHTbMUvk+cYgmJcMFExNFoI/HKq17xFlcNDw9DxRyrLqVGuXTbEIOeP39uIRIl5tUwfYJVz549Aw+2XMcW3Cc2BWRGLUbi2NjY3t6e0JWC3WxsKeIqFIJ7JRMi5k05EoEYVoSCrYWFBYAvEImlUoFie7AOXAUZJIKISrZn91t2M6L/5S1yJycn5+fnoRJ2g5AMgbOeXJmampqZmbFFq+eV6y7k+EjZQcG+7ru0+yWa/dMdaJZXeOJ5BDqBy6WlpSSzUB/7dKZJuWLtCqC9EOO+fv26trZGRxJalzwZQG+0p3hOT08TfaZFLp93ZlGSTVUBhU/2LLQB+7DC7e1tKWa2QsoOESyOjo7Ozs5OTEzInixuaPMqamfdo6Oj2N1upVa4gV9Mgh7+/v0b5iOYIyfYJ1LkyFzUwkmiU4x1dNWNbXpSrYKNpX0lfJrosLbESPixKM0TybuC05e8kVnIR46Qd+oiQ/alsr2xJUpUFCxaDfTWta8IzSz2sgIiJYKEBWjtxlXsrYX8SE6IwxT7yY1rHpRvVPl4CpLc9QJ2rlHioDvAFjxYgaX7IuBFG3306NGT7hgaGpJMlLJy68llJ0wQ4oJDEXvugNxfv36x12CnIDQ6tkUFr6AKbdCJrkUGVCoV+o91nvPIDRBja0xRPlZeJaBmZ8xGj6TDMRJBjWNMDhUlkRUnQR+o9bRFvKgFOfdwj6qYpJSCIR7ini9fvuAnfVKcRPGYUzdqmIfDXr16RY3Fi+rvWI86nD8pHRiBm8+fP7daLSTKxjV5KOcOiRzVtCqK83AVJW1xcZHICigTk0Vll64kPHVyZWVFtof2IC/S81trb7SHpMHxNH46rPAA14L6aulnfNBoNFZXV5mt7Op/hiwZvuRXeA7lXrx4sby8zCo2DzpqyOGi3ZLThj9+/GiP1GIztgVFz7finxHxvwg3gBBN8+3bt0BNDhb73rJHtKD7w4cP7rQobgFu7R55cVQaqBJQgNrx7t07kNP3GaCTSejUbDbfv38vfkoeqcdykMyAW7uesw2fwcnevHnT706qEyUAPKlO8Yw/trDkljDJv5NdVeswXeHHjx+1Wq1/JCaNE33JOyFu7euRp5ACLvk3U/w/IelyJwTYQOBQrlerRV8gBbOTHUQBZchbuG1GnBCfR6skRKQaXafH5Xd3d6kIup1PNqxkKjnGHA+3Cv5ai/9DocDx8XG9Xu84j3u4uavjMc+L/9CKFMjVsGRlidGXw99qtfqfAAMAVXB5lHUIUuQAAAAASUVORK5CYII="
    },
    5365: function(e, t, s) {
        "use strict";
        s("6f82")
    },
    "556d": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAC6klEQVRoBe2Y+4dVURTHp6bXND/U9NDjKiUlSRIlSSKpiEQkYhgyiYiIov6AiuiHRERJiUQkejG/9EtUypQUldJMSaX3u9tncc6dY8/eZ+3d3Lvv/eFsvs7ea333Wp+9Z5x7Z5qailHcQHEDxQ0UN6DcQLlcLqHTqBf1JPOSsq0x0sAuQu+QOd4SKDU3BqadAsCFZK6gNoujhdgkS7wxQsAvQLabJ1wZvY1Ba1CANx/Jr4g2egYbe+u+hHgeENfQGA+YLg9PPAvwc9Eb7dqT/HuejfMmAmYOep3AaY8PGBbHu1qlEzCz0SuNOsl/5LlEKRkvDcwsJB9OPuMTpqXx6JROwMxEL33I8XxGy5SS8dLAzEAvkM/4gml5PDqlEzDT0XMfcjxf0QqlZLw0MNPQM+QzvmFaGY9O6QTMVPQU+YzvmFYrJfvSmOU93Im2yrwvU50ZNaegJ8hnCPwa786Y96M/mcoyP4Cq8m2VOvJ9/jHyGT8wrQ2B78ipeorcgL4vsX8yepTTI5v6yWKdN7wY2XA7W8EyP0Hsvw7BvonooaWmLfSL4Pog+OQA8ummjeMYBoUUxz8BPdAKJ3mB3xBSv+Jlo/YTSBmOMfE6BL7xqDvdqDx/k99YAQqdsLldaZBNH2WRewjy49C97KacucBvCmXu56fIyZwmZupIvwJJAONYdNfc4FjLm26zq1ZQnELN6IyjkS182GyAqQ3dsZktMYFvN2sMaE1BOcRZSzNX6FDaEMNodMtlNOJ/WXeke6v6pPAQdM5omLc8SHIUuplnyuQEfktVoc1iNBiKzmeaalPfv6QEvtPsV5M1jeQQFzTywPy2msC6igI3DF0MhHTZt7v61DQOzXB0yUXlGd9RU0iteHKIy56wpm2nVj9KHqoR6KpJp6x3RYHzbQJsC7quQKfpPb51o/qgG4m6UkrHc29UqNBmQLfmHGJfaL26+DmAfGLvRveR/KvvBlpVF5iiaXEDxQ0UN1DXG/gHSaB42zU6qBIAAAAASUVORK5CYII="
    },
    "57c0": function(e, t, s) {
        "use strict";
        s("1737")
    },
    5989: function(e, t, s) {
        "use strict";
        s("8226")
    },
    "5a2c": function(e, t, s) {},
    "5a68": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAPKADAAQAAAABAAAAPAAAAACL3+lcAAAHuUlEQVRoBe2ZWXMTRxDHtbqFbWGEoUiKsyA8+Pt/DHgIeSJVUGAMKdkuKMC2rMPa/Hp6pne0u7JXdlThwVNk3NPTx797eo5VkjRNa9du8/Pz89mslqYQYg4iTZNaLUkS+Y9Wr9M1ms16o3Ftb7XkyqBRPJ9OwQrQlXCAG/SNVoswVlI04auABuVsMpHUXq8BvdluXyH3q4GWKphMFlKr1UXOILQnEhsWoyrIA7rV6awEvSrodD6fuuyyoroJlLAFhmm0Qo3FJBCnaDI5ec06pV8Ms8ipBJrUTs/Orlz9Ra+lHEq81e1WSfnlkVEPE0Ws+4Ze/6lnYzI0fpGpHJWJ+0iS3E9Go9l0qoYv6C/J9HQ8vv6Gu8B96RSlQpWXTilzOeg0JcHz+fwC5fVN1ev1drcrS1fWlpbH/4gYnCQLAGWAhVcOmqpg22mY7A8aotorwdjPBr4XcsP/RF7Oq/FYMBZaSXlwz1XZDQVTa2E0Wy3uzpzpfKbltquwf3NW1jcEzMJd5jwtZJqSWDiPqYr4OeWGR8PhaDSK7z/qhN1K9KkT0KHUTyLGIeA7SnoNT28Wle/3+7fv3hW+uVMiDNHm/NaSU/Wm/tGewhBzSNu1hyM4Yfjnq1dHBwfMikRgyqy7w02slLhA/vGzZ3/s7opF51rUHaFD2ADjlSICrmWgKXwWAgVtOUKHZ6NRq9n06QrBSJCCOovEOJgSBJFNESvIj05PzV3Ouw4BBjy75LPykBPDTmVnN/jK/p78/Pnu7VuuyDHnkQPKnMICijIMpXIEjVZHQG/y8kRttXq93ovd3Y7dJqWusUWRBBnvSc6XySRDdxn11+vXBOCS5sFjFCVwQ4RwBC4sB9sxnZCPLUkePX36+5Mnl7nK5lvttibbl8eqd7W8J1stgyhAHWTDl48hwBVJDQzRam86Qw1IrWwBjRWpGDcpvm3FcwvqprTjmuWF4Be6IKZG1I7Kl5ptuMVRMQQUgMpbHysCUgN2oKPvJdNUIjc0W+6LyYNWJpLq2LuJiySoqYzJJ43GMvtBI4tEJVOOCr53mJZXUQjaS7sjTGgj/IT/s7G5OXefW2Ir4NOld4xQA64SVIckyVQkv9nvy1TOtbAKLcDgGKkraDW3IGiGjFiYrt3Z2RmdnIBAdJGJ9l8Ous6i7ao6k0eRyBetLh8FGLqMzeyYW65SnMEfZU0T3C5/vircMIvBIdUpmApc5euFF0XRSylHtt8s9xtAWAj1UaqmTC6a4adP4GaYpZyBWQjBZLNhilV++Pw5W/kC+34qqJhZDi5R02wpQTJ85qIkWTqR8bO1WrfX6w8GZ8fH3rqzYwLtXg9k8dmvZYMpttDg3j07fNSvmjV1hsovx8MnYElNO50q3dfDQ95YAFJMqtLb3Lxz/z5mh3t7dk6pFw6t7sbG9mBQxXipDI6ahOIzrwtBT9PCLyyNt2KSSULOTn78GB0fS52EHdkINcNGV9Bqk9yzGTY4NCrbF2w5PKDmwXqdTGsYPEWOv37ljjTcXF1ApKkAvnG0MRh0+PK7XpM1peysZLWSzGZc60wtG5r896MjblpJgVsK5GmimKacFds7Oz7BQWGZQeXbbBDPAMitRot7EzK+ESpWHKoKr5mD4dCeMaAnKfRUzm+PHkGrWNwbKwcgNzQVz5ePq6hGfQ15FP6NJiNXr6bsh4HJufnP3t7P798NaLvTkeKYzQwr9x9vOr3OvJ2gfqn9BXks+gXN4KxMTcbj/ffv6U0TfE9evgTz32/eUNnGb7fbD1+8oDfOFQgwZx+2tlKxoVKmCugUl/n+u3csF08oGpVAv3X7NjIQG1tbjIXlesJAeMwnZmiX2g+C/q/KyzklTa9fqQKhpZe/0pRyjAUOOwz3VIVUrYOriOntuwg61zgBv3z8SJBV7C/zLo8HaQpKgUZw4eusE4qCSRIutuHnz+gBSxIZNQPE/7NgQudMAlMH+/tsHhFbbl8R5byrfJM5UqWYVuq/HR6SNqBm+xh9QKTp2ekpJFHxNUlAYtb2upPhnGXXbm1vy9SKTYIBsbynFbdzqY59H1vUWThs3+n0y4cPXiuSseOc77mFyyWSYe0Q43h58PhxxPYBCydylEUbmGQhvLNgaVMi7v2E+xPEOCtYev/rRCQgTEqc4nGHBmWjkzBtSRU0YbMv8w+9YF9wa4uRBKZ75UUVoha9fNidxSEHpV93Nwcglbm0j0uRb58YdOza7MRM8eEc+aepCen6MtQyz2GxISilmjnXms3Bgwf8fGEWLiYo92/DocmYQeXkhjBL8bjy0Dy5spacKWGGywgD3en1qiPGUvfWLd5SfJ9KUiqszwIe5J1KqOnYRDVbWq+z8fjs5KQ6brlZ3A9c1L4AquCrKJOdd3G1lSVXeHwx8HTmuGEPsSCqwpraIi5TLOWzK2TFGo1b/T7f2KUyMVOCdC0TzdVTXNOKiZ6PlLn79ZrzQdRdWWenEhz4eiRDK+GKTYSLzYV97n7x77rfNRVD7DpTCojhZKD9KgRPFhZCaotevvz4ELbfKTOTK1DY0SygA0GZ8fMz3tULoRopRgOe2EFWHjH3F6ezV94vDjSGdwM6zsY66ZtMrzO7se2bTMfZWCd9k+l1Zje2fZPpOBvrpG8yvc7sxrb/Bf7kNlFng9xZAAAAAElFTkSuQmCC"
    },
    "5add": function(e, t, s) {
        e.exports = s.p + "static/img/pass.6b688506.png"
    },
    "5c44": function(e, t, s) {
        "use strict";
        var i = s("75fc")
          , n = (s("ac6a"),
        s("5df3"),
        s("f400"),
        s("55dd"),
        s("d225"))
          , a = s("b0b4")
          , r = s("bd86")
          , o = s("2ef0")
          , c = s.n(o)
          , u = function() {
            function e() {
                Object(n["a"])(this, e),
                Object(r["a"])(this, "on", function() {
                    return function(e, t, s) {
                        e && t && s && e.addEventListener(t, s, !1)
                    }
                }()),
                Object(r["a"])(this, "off", function() {
                    return function(e, t, s) {
                        e && t && e.removeEventListener(t, s, !1)
                    }
                }())
            }
            return Object(a["a"])(e, [{
                key: "bindPlayer",
                value: function(e) {
                    this.player = e,
                    this.addPlayerEvent()
                }
            }, {
                key: "initTags",
                value: function(e) {
                    this.generalTestList(e),
                    this.defineConstants(),
                    this.generateEventList(),
                    this.setPrismTag()
                }
            }, {
                key: "generalTestList",
                value: function(e) {
                    this.courseTestList = (e || []).map((function(e) {
                        return {
                            offset: e.popupTime,
                            text: "课中测试".concat(e.userState),
                            data: e
                        }
                    }
                    )).sort((function(e, t) {
                        return e.offset - t.offset
                    }
                    ))
                }
            }, {
                key: "defineConstants",
                value: function() {
                    this.isShowTagTimer = null,
                    this.startSeekTime = 0,
                    this.currentTime = 0,
                    this.inSeeking = !1,
                    this.progressMarkerContainer = null,
                    this.tagsPosition = {
                        left: {},
                        right: {}
                    }
                }
            }, {
                key: "generateEventList",
                value: function() {
                    this.eventList = new Map
                }
            }, {
                key: "destroyEventList",
                value: function() {
                    this.eventList = new Map
                }
            }, {
                key: "dispose",
                value: function() {
                    this.removePlayerEvent(),
                    this.removeElementEvent(),
                    this.destroyEventList()
                }
            }, {
                key: "replay",
                value: function() {
                    this.player.seek(0)
                }
            }, {
                key: "seek",
                value: function(e) {
                    this.player.seek(e),
                    this.completeSeekCallback(e)
                }
            }, {
                key: "getPlayTime",
                value: function() {
                    var e = Math.floor(this.player.getCurrentTime() + .1);
                    return e
                }
            }, {
                key: "timeUpdate",
                value: function() {
                    var e = this.getPlayTime();
                    e !== this.currentTime && (this.currentTime = e,
                    this.matchCourseTest())
                }
            }, {
                key: "matchCourseTest",
                value: function() {
                    var e = this;
                    this.courseTestList && this.courseTestList.length && this.courseTestList.forEach((function(t) {
                        t.offset === e.currentTime && (console.log("courseTest: ", t),
                        (e.eventList.get("onTimeMatch") || []).forEach((function(e) {
                            e(t)
                        }
                        )))
                    }
                    ))
                }
            }, {
                key: "addPlayerEvent",
                value: function() {
                    this.removeElementEvent(),
                    this.onPlayerEvent("markerDotOver", this.onMarkerDotOverCallback.bind(this)),
                    this.onPlayerEvent("startSeek", this.startSeekCallback.bind(this)),
                    this.onPlayerEvent("completeSeek", this.completeSeekCallback.bind(this)),
                    this.onPlayerEvent("seeking", this.onSeeking.bind(this)),
                    this.onPlayerEvent("timeupdate", this.timeUpdate.bind(this))
                }
            }, {
                key: "removePlayerEvent",
                value: function() {
                    this.offPlayerEvent("markerDotOver", this.onMarkerDotOverCallback.bind(this)),
                    this.offPlayerEvent("startSeek", this.startSeekCallback.bind(this)),
                    this.offPlayerEvent("completeSeek", this.completeSeekCallback.bind(this)),
                    this.offPlayerEvent("seeking", this.onSeeking.bind(this)),
                    this.onPlayerEvent("timeupdate", this.timeUpdate.bind(this))
                }
            }, {
                key: "startSeekCallback",
                value: function(e) {
                    console.log("startSeek: ", e.paramData),
                    console.log(this.courseTestList),
                    console.log("🚀 ~ this.courseTestList:", this.courseTestList),
                    this.inSeeking || (this.startSeekTime = e.paramData)
                }
            }, {
                key: "onSeeking",
                value: function() {
                    console.log("🚀 ~ this.courseTestList:", this.courseTestList),
                    this.inSeeking = !0
                }
            }, {
                key: "completeSeekCallback",
                value: function(e) {
                    var t, s, i = this;
                    this.inSeeking = !1;
                    var n = "number" === typeof e ? e : e && e.paramData || this.player.getCurrentTime()
                      , a = null === (t = this.courseTestList) || void 0 === t ? void 0 : t.some((function(e) {
                        var t = e.data
                          , i = t.popupTime
                          , a = t.userState
                          , r = t.mandatoryTest;
                        if (r && "PASS" !== a && i <= n)
                            return s = e.data,
                            !0
                    }
                    ));
                    if (console.log("🚀 ~ noPlay:", a),
                    console.log("🚀 ~ this.getPlayTime():", this.getPlayTime()),
                    a) {
                        var r = s.popupTime || 0;
                        return setTimeout((function() {
                            i.player.seek(r),
                            i.player.pause()
                        }
                        ), 100),
                        void console.log(r)
                    }
                    var o = n;
                    console.log("completeSeek: ", o, e),
                    this.startSeekTime >= o ? this.seekMatchCourseTest(-1) : this.seekMatchCourseTest(o)
                }
            }, {
                key: "seekMatchCourseTest",
                value: function(e) {
                    var t = this
                      , s = [];
                    this.courseTestList && this.courseTestList.length && this.courseTestList.forEach((function(i) {
                        Math.floor(t.startSeekTime) <= i.offset && e >= i.offset && s.push(i)
                    }
                    )),
                    (this.eventList.get("onCompleteSeek") || []).forEach((function(e) {
                        e(s)
                    }
                    ))
                }
            }, {
                key: "setPrismTag",
                value: function() {
                    this.player && (this.player.setProgressMarkers(this.courseTestList),
                    this.progressMarkerContainer && this.progressMarkerContainer.remove(),
                    this.setPrismTagText())
                }
            }, {
                key: "setTagPositionStyle",
                value: function(e, t) {
                    var s = e;
                    if (s > 3 && s < 95) {
                        this.tagsPosition.left[s] = (this.tagsPosition.left[s] || 0) + 1,
                        t.style.left = "".concat(s, "%"),
                        t.style.transform = "translate(-50%,-100%)";
                        var i = 2 * this.tagsPosition.left[s];
                        t.style.margin = "0px 0px ".concat(i, "px ").concat(i, "px"),
                        t.style.whiteSpace = "nowrap"
                    } else {
                        if (s >= 95) {
                            var n = 100 - s;
                            this.tagsPosition.right[n] = (this.tagsPosition.right[n] || 0) + 1,
                            t.style.right = "".concat(n, "%");
                            var a = 2 * this.tagsPosition.right[n];
                            t.style.margin = "0px ".concat(a, "px ").concat(a, "px 0")
                        } else {
                            this.tagsPosition.left[s] = (this.tagsPosition.left[s] || 0) + 1,
                            t.style.left = "".concat(s, "%");
                            var r = 2 * this.tagsPosition.left[s];
                            t.style.margin = "0px 0px ".concat(r, "px ").concat(r, "px")
                        }
                        t.style.transform = "translateY(-100%)"
                    }
                }
            }, {
                key: "setPrismTagText",
                value: function() {
                    var e = this
                      , t = document.querySelector(".prism-controlbar")
                      , s = document.createElement("div");
                    this.progressMarkerContainer = s,
                    t.append(s),
                    s.style.position = "absolute",
                    s.style.width = "100%",
                    s.style.fontSize = "12px";
                    var i = this.player.getDuration()
                      , n = this.courseTestList.length;
                    this.courseTestList && this.courseTestList.length && this.courseTestList.forEach((function(t, a) {
                        var r = document.createElement("div");
                        r.style.position = "absolute";
                        var o = n - a;
                        r.style.zIndex = o,
                        r.style.dataZindex = o,
                        e.setTagPositionStyle(100 * c.a.divide(t.offset, i), r),
                        r.style.padding = "2px 8px",
                        r.style.backgroundColor = "rgba(0,0,0,0.8)",
                        r.style.borderRadius = "4px",
                        r.style.userSelect = "none",
                        r.style.cursor = "pointer",
                        r.dataIndex = t,
                        r.classList = ["progress-marker-item"],
                        r.innerHTML = '<div>\n                                        <span style="color:'.concat(t.data.userStateColor, '">').concat(t.data.userStateText, "</span>\n                                      </div>"),
                        s.append(r),
                        e.on(r, "click", e.onProgressMarkerItemClick.bind(e))
                    }
                    ))
                }
            }, {
                key: "onProgressMarkerItemClick",
                value: function(e) {
                    var t = e.currentTarget.dataIndex
                      , s = this.getPlayTime()
                      , i = t.offset
                      , n = [];
                    this.courseTestList && this.courseTestList.length && this.courseTestList.forEach((function(e) {
                        s <= e.offset && i >= e.offset && n.push(e)
                    }
                    )),
                    (this.eventList.get("onTagClick") || []).forEach((function(e) {
                        e(t, n, s)
                    }
                    ))
                }
            }, {
                key: "onMarkerDotOverCallback",
                value: function() {
                    var e = document.querySelector(".prism-marker-text");
                    e.style.display = "none",
                    e.style.opacity = "0",
                    e.style.zIndex = "-100"
                }
            }, {
                key: "removeElementEvent",
                value: function() {
                    var e = this
                      , t = document.querySelectorAll(".progress-marker-item");
                    t.forEach((function(t) {
                        e.off(t, "click", e.onProgressMarkerItemClick.bind(e))
                    }
                    ))
                }
            }, {
                key: "onEvents",
                value: function(e, t) {
                    this.eventList.set(e, [].concat(Object(i["a"])(this.eventList.get(e) || []), [t]))
                }
            }, {
                key: "offEvents",
                value: function(e) {
                    this.eventList.delete(e)
                }
            }, {
                key: "onPlayerEvent",
                value: function(e, t) {
                    this.player && this.player.on(e, t)
                }
            }, {
                key: "offPlayerEvent",
                value: function(e, t) {
                    this.player && this.player && this.player.off(e, t)
                }
            }], [{
                key: "getInstance",
                value: function() {
                    return e.instance || (e.instance = new e),
                    e.instance
                }
            }])
        }();
        Object(r["a"])(u, "instance", null),
        t["a"] = u.getInstance()
    },
    "5ced": function(e, t, s) {
        "use strict";
        s("8df6")
    },
    "5e19": function(e, t, s) {},
    "5e40": function(e, t, s) {},
    "5e48": function(e, t, s) {},
    "655a": function(e, t, s) {},
    "65d9": function(e, t, s) {},
    6663: function(e, t, s) {},
    6846: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHKADAAQAAAABAAAAHAAAAABHddaYAAABk0lEQVRIDe3UP0vDUBAA8LtXxKG7k7VgimN3qYPQOjiqq4N/Ojn5CSRfwkWsHSx+AsdEHOwqCC5iVdqKWBG6SIUgOXMpfU1rkyZpAg590NC83Ltf7rXvAKZjugP/fQcw7hdc0JYKBD8bgqBaX3u+iBVM65miSeYJENiOELiZiKvCYcx2CF5iqXAUhoAGClwWUVfohgGKrXq+dhtphV5Yo/B4ycVFBvrBGJRbmr3LJpWqMseTQYdfjPPaYFpX1tsfXy3jm95T2uKxSqp8kXF4EEyCpglH1k3SPi8EB2f6eckPGhSTICK0nJUQ0U5Jq5x6oWEwCYrEzCEgvjpRAHPXDQ2LcX75L03pGQWIrq3P/CAsyvuF7aKKqsnzk2C8XoJ8Mw4tX1X2nL2xmwANPtS9c8ZzXmMA5EA31Aq8IYRcrxFzLLerIFh3DV+HhhvqDAuD8fo/FfaSeqFhMU+QH45CJ8E4p2dHaeZrT9ZxWbXiGhxsjU7Q36y7rH913dJ+CAD32fZnJwezifvmysOb89n0+/AO/AKJBfgZykzlOgAAAABJRU5ErkJggg=="
    },
    "6c58": function(e, t, s) {
        "use strict";
        s("a8cf")
    },
    "6e0d": function(e, t, s) {
        "use strict";
        s.d(t, "b", (function() {
            return n
        }
        )),
        s.d(t, "a", (function() {
            return a
        }
        ));
        var i = s("b775");
        function n(e) {
            return Object(i["a"])({
                url: "/tbc-rms/manager/getBucketNameByCode",
                method: "get",
                params: e
            })
        }
        function a(e) {
            return Object(i["a"])({
                url: "/tbc-rms/manager/getAliConfig",
                method: "get",
                params: e
            })
        }
    },
    "6f82": function(e, t, s) {},
    "72d8": function(e, t, s) {},
    "743b": function(e, t, s) {
        "use strict";
        s("0d291")
    },
    "78b0": function(e, t, s) {
        e.exports = s.p + "static/img/no-data.cabe8b52.png"
    },
    "7fa3": function(e, t, s) {},
    "7ff9": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACPTkDJAAAFWUlEQVRYCeWXe2zURRDHZ67XFkuRChHpAaWIiEoQExVRUIHgo1DBRzRiwEhMQCBRVNrDqAl/aNKKBCSRh8QQAmoUhCBBSEhFkRiswQQSRbHSUui1aigPa/H6uPUzv95d78q12mD9x01/ndnZeXx3Z3d2T+T/3rSzBRhZ6vr8rlIYcfKgOhnhRAKiko1+Jd+ujAx5p/p5Pd6Z/cASV4D+q9jmiU/W1hbra6l0LwIQWO6GRJolyMDTBO2Vyigqa1GVjRk+ef1EkRoor+Wtdlc0n5dV2M6KyYz602TcqSL9OlFmfBKAQKmb7px82CFwBUrlTuUYAVslIrfATxUn6VFnLXjZw0yPQK/D9h7G+nhjKiFoLn2Ls6Buia6J2sSJP87BRERMwWbdwrfZr7LmVFDL4ZNa7ptuKFBeJthTHhAnhfCF8O1NZUtab5nf2iB1CP3qk4z2wXYuvgI3r3PpNWclbGh9Ii+FlmhJu1pqzoC4iCzAZhrfYOZZj+1+nK6tCepBs2IvNEMMwCL2wVsdPcVX4NA8bc4tcUeYxBiW+G4U/xZA7WI9gV4w+nX0/Y/6AG5v5PiTaG/SqLed7fgeb0kAmL0HgI2YWf+H3Nfj0QmQBCBULIfIo+1c25HTPdrD/5IAqKojDTujMac9+pFL6+H4yStgwdjVOzwq0v9AtYz/zwFkZ8lnBG3wArfKjEsGoF4R6tRNUgpMq+JZDZOGPcazKR8yai1/hcsZvswN6E5ahq5wVgW9NBLoXJun5P/xQpQoDpS4J6iK75kMMJ9C7uBk5Hh9kSbqxLc43OZLl/dPvaA1Jk9s16xymRcaZUaryCvIR7MGzp8u16JbkahnfEoANts/w/Ib4/FC1dEw2o8AcC9e9vNVa6sEAHcTYwUxwKbnU1kdCurCqE0SSQnANCihZZDJOG5GaSPfV6wKf5LHxTOF9EyAvyiFyBJbBSV4WahI1tsJSxyI8Z0CyH3DPceJWAkAx7U3+GRQ2+pD1JI05UVU5uB2GqJReM+Kgq2iX4bjbXOLpWypqoHufiMN+ayCs487Yl5XHpY65xu20l1ltCu9VGOdroApDyx1h9nFN5Ln3bVBnZrKwaXKukTM8sYup8k9dTl1CYCctlXFHrycukyBc04DpXKSDTaINGwiDU/aklsx+rJS9rJCtzMWRtTI+Hnoab5fSdsJzkclzo/6s+Wb6gV6BnnKFgcwuMSNbvHJLJw+gGa2psm9ocX6Q26pW8OZfoYA9ROGyYAtj2mrbbgLYamJVbmUnmNCThFBjtHdis/N5jM2ZFQD61yWOyPr0ZqJwzgglB+uLdLtHMf7OY67PSOfTKwr1i+M5zl2F+/C8dilc9AyAZjDeeuHg1xWJQ+VvFQA0fugX7bM/W6heveNP3JW3kX5cZSt7F6A3wXdGiI4vPTuJfsaGr3LKZsydCsiDwDPsf3w9qVs+Rtcr6Z6ud61yG34noJSASGyWM2Z9Q2SSf8RM1TO+VloX+ZeSb2+M1Vt57luvxFmozeffXDUDLvbhpS6AK/TA4AZhm0DT3Tv6a6c9R0IY6+f88x+J8tYRsCDI8fKT59PUnuid7tN3Of8P5bLCHyNY9ZWugtxcrnniLdnXVC9q16vLnF9WfcNKMSv3lg0jJtYmZ8BaCchBLh6cn7O5yQMbTI9Nm0GJTkT2pdAtgfsJ9wQbIZjc9FvAca3XyYy5/gS9a5n+m1t0HI3hnzN5reg5SY/Kv63SBU34sfql001L+rhRKdxAIlCO2bhZhnLpruBWeQzls+MroTvj4Htl6zY7Og3MdZI/xz8acbsGq+Cr6IWfJ+ZLuWVi/SXRP+J/F+XK9H/d2hQCQAAAABJRU5ErkJggg=="
    },
    8137: function(e, t, s) {
        "use strict";
        s("85ce")
    },
    8170: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAB6CAYAAADeb1FlAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAegAAAAD97ZejAAADtklEQVRoBe2aW08UMRiGWRE8ICooHlCvjN4aY4x647/30niMJiYajcZoEOSgeABZ32egZCy728O028S0ybftdqZ9n37ztbPT2Yl+v39eNjlRKB2S7gnZFUEcL8EAAAkPXBTEgszUNQdyf9hiJyV4WRBHcwub/m0A6qdklwQxL+uZE3PlgwCM1pwKeGPaVOTIRwGghzgBejqXN1wAZtBnVFgUBJcnafIFQJTAxBsEarIUAoAoQclUZcoeTkERCmA0WbTwxoypiM1jAdCj7QVBnJNF9xPdsDXiWZXxxrFWnXcxBQBixAOz5GyoN1IBmBGfUoHF64ipcOWpAdBjrQBiTuZcynMAmEHPq8A9ZeRSnhMAEC4F3uDSDEy5ARDlMhCcBOmBxWscAGbkTFOmK7/A9tM4ARBFj9+g3OqbNG4Ao8uPHRawhshUjjsnLiZLecAMfrYkABAzpQGmSgMUjYEm6Et7oOg0rB6oHqgeqB6oHqgeqB6oHqgeiPJA8zjVtEz0EfKj9Lo078sWE2k33Rx4Xh/SOeIY6eZuNvFxL++U+XgAt19rqbDhAEQST/gAbEjskawvMykZhA8Aorg7C4QvQDaIEIAsEKEAySFiAJJCxAIkg+gCkASiK0BniBQAQOzwMSBtDaj7pyoFwIJ6vCVrb82zaj6ULclGpq4AbMnflrXFEWTV/ETBlboAsN97R2b38UR13ndKu7EL2Bzn5SXi9h8fnqvuvTnJJ48BYLv9rsz+LfFSdW9lQSkUgBeV92TTlsorfX9t1Xl9DQHghQPi9huxN6oDICr5AiCKuP3PineqexGlvNfIF+CGzrf/5PJBdc+6iNPWF+Cpzv3eEmOaPW59jy76AvyUwgPZuuyzjIUmSerptcnVgJ54K/pHNmztD+hq91R7Lrs6cN5cXB3Yx30vgd0u2fcKUD1QPVA9UD1QPVA9UD1QPVA9UNoDO6UBtksDbJYGWC8JsNrr9bZKAWzq0WqFx6vQZ8MUj2SriGv0zRuYcQLwYLsk4R/tUYwDgJF+lXHN2++dGo7cAIz2i4R/N2oDPnIBsIGBMG/cRqYcAIguS5ydFGdKCUCQMWqmmHdKBWCCLHjvqCsAu2dMraFB5nJFLAAjXZZtSPzA1HKJto/HALBhybXebncUWw4BQBDh9o5prO5+O1+ANbVg/Q4Osn2lIQUXwC+1I8jIs6RhAAQWt8s1iXcKMhf1IAAWEkadJMhCAFg6CbJvrkYpjxsPsA3P+p08yJyw2q63X8M42/xXJ/wFwHnm7/JFNS4AAAAASUVORK5CYII="
    },
    8226: function(e, t, s) {},
    "826e": function(e, t, s) {
        "use strict";
        s("a4b8")
    },
    "849f": function(e, t, s) {},
    "85ce": function(e, t, s) {},
    "86e3": function(e, t, s) {},
    8847: function(e, t, s) {
        "use strict";
        s("f78e")
    },
    "8d1a": function(e, t, s) {
        "use strict";
        s("5e48")
    },
    "8df6": function(e, t, s) {},
    "934f": function(e, t, s) {},
    "93cd9": function(e, t, s) {
        "use strict";
        s("306d")
    },
    "948c": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAANxJREFUOBHdky0OwkAQhTsbDArFCXoEDEGQIEkQBIVA4MpFOEQvQRAkBIUjNT1CT4BCIZfvkQkJblsck7zuT9836XZnLCNijCOGFRpqic5mdmT8BJ4Ni6lv3BkPeOrgcMnG2F+mDPKWYo3H3uEFGZ8pNEwf3wlVgYc+u0mF8WbubcQqwU/Rg751zHDpyP0dpjqY6VRczbXN6eDm8usW1g62SgCzFKcEpkmHeHMqJDVG7uWZlMe9uVj9A3WimumBVJ7qRnXaV6Hg27I/QQrBA1QEjDWTHapQashbiH0BjwFD/NVolbwAAAAASUVORK5CYII="
    },
    9768: function(e, t, s) {
        "use strict";
        s("d663")
    },
    "97b9": function(e, t, s) {
        "use strict";
        s("ffa9")
    },
    "9a48": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAADvdJREFUeF7tnXnIblUVxp+HqCgLymzULJs0lKJMNBrIqIzU1MxCK1PMKBxKqUg0HDJRLDQNyww1J8zMTJts1CIzqRC1HBqUSMsGMtEGK1YsOfd6u937feecd631neE54F/uvdbZv71/d73f++6zD6FLBERgvQQoNiIgAusnIEG0OkRgCQISRMtDBCSI1oAI9COgCtKPm3rNhIAEmclEa5j9CEiQftzUayYEJMhMJlrD7EdAgvTjpl4zISBBZjLRGmY/AhKkHzf1mgkBCTKTidYw+xGQIP24qddMCEiQmUy0htmPgATpx029ZkJAgsxkojXMfgQkSD9u6jUTAhJkBSbazHYCsAOArQBsDeAPAK4H8AsAnyR5+wrcllKug4AEKV4WZnYZgJ2XSHsfgANJnl18a0onQVZ2DZjZjQC2bHkX25O8smVbNUsioAqSBHbtsGa2F4DzO6bbhOQdHfuoeSABCRIIc32hzGwDADcA2KxjuktI7t6xj5oHEpAggTCXEGQbANf2SHUXySf16KcuQQQkSBDIpcKY2T4AzuqZajN9q9WTXEA3CRIAcbkQZnYUgCOXa7ee/68/1nuCi+gmQSIoLhNDghRATkohQZLArhlWghRATkohQZLASpACsAUpJEgBZFWQAshJKSRIElhVkAKwBSkkSAFkVZACyEkpJEgSWFWQArAFKSRIAWRVkALISSkkSBJYVZACsAUpJEgBZFWQAshJKSRIElhVkAKwBSkkSAFkVZACyEkpJEgSWFWQArAFKSRIAWRVkALISSkkSBJYVZACsAUpJEgBZFWQAshJKSRIElhVkAKwBSkkSAFkVZACyEkpJEgSWFWQArAFKSRIAWRVkALISSkkSBJYVZACsAUpJEgBZFWQAshJKSRIElhVkAKwBSkkSAFkVZACyEkpJEgSWFWQArAFKSRIAWRVkALISSkkSBJYVZACsAUpJEgBZFWQAshJKSRIElhVkAKwBSkkSAFkVZACyEkpJEgSWFWQArAFKSRIAWRVkALISSkkSBJYVZACsAUpJEgBZFWQAshJKSRIElhVkAKwBSkkSAFkVZACyEkpJEgSWFWQArAFKSRIAWRVkALISSkkSBJYVZACsAUpJEgBZFWQAshJKSRIElhVkAKwBSkkSAFkVZACyEkpJEgSWFWQArAFKSRIAWRVkALISSkkSBJYVZACsAUpJEgBZFWQAshJKSRIElhVkAKwBSkkSAFkVZACyEkpJEgSWFWQArAFKSRIAWRVkALISSkkSBLYtSrIkQCO6plqe5JX9uyrbgsSkCALAmzT3cwkSBtQA2wjQQomRYIUQE5KIUGSwOojVgHYghQSpACyKkgB5KQUEiQJrCpIAdiCFBKkALIqSAHkpBQSJAmsKkgB2IIUEqQAsipIAeSkFBIkCawqSAHYghQSpACyKkgB5KQUEiQJrCpIAdiCFBKkALI2KxZATkohQZLAqoIUgC1IIUEKIOtvkALISSkkSBLYtSqIb3X3Hb19Lm1370MtqM/kBDGznQC8BsDmAJ4P4K8AvgLghyQ/H8StU5gxVhAz2wPAiwHsCOBRAH4C4CYA55G8oROAETeelCBmdhmAnZeYj0tJ7lY9X2MSxMyeA+BYAC7I+q7jSR5WzXEl8k1GEDO7DcDTW0C8m+RjW7QLazKWb7HMbHcAJwPYpMXgTyZ5SIt2o24yCUHM7AMATugwE38huWGH9gs1HUMFMbNXAfgygId3GOzrSH6tQ/vRNR29IGb2WgB9Julmks+tmLGhC2Jm2zRyPKEjj18C2Ibk3R37jab5FAQ5EcD7ehK/iuQrevZt3W3IH7HMzL/MuBzAs1sP6H8b7kby0p59B99tCoL4tysvXID0RSTfvED/ZbsOtYKY2RObb/i2XnYQ628w6b9FpiDIPQAevcAEe9dTSR68YIz1dh+iIGb2sOaj6SsXHPflJF+/YIzBdp+CIN8FEPEx6QiSH8mYqSF+xDKzLwLYNWC8R5Pse+ZXQPrcEFMQ5FQABwZh2p/kZ4JirQ4ztApiZmcDeHvQOPckeWFQrMGFmYIgrwbwjUCyu5D0HxzDriEJYmYfBxD1cfIWAC8l+acwWAMLNHpBnKeZRVYRD+mT/oOouRrKRywz+zCAI6LGBWA/kmcGxhtcqKkI8tSmimwRSPh5UXuOhlBBzMy/CvevxKOui0kutR0lKs+KxpmEIE0V2RaA/+H55ECiTyP5m0XjrbQgZvZOAKcvOo41+n8LgP/+cW9gzEGGmowgjSS+i/cSABsE0f4PgI0W/aV4JT9imdmbAHwuiIeH+XEjx28DYw421KQEaSR5I4DIbe13+uY9ktZ3FleqgpiZf4Hh23Ae0vfe1+rnW0t2JfmzoHiDDzM5QRpJ9gMQ+XXtdSRf0Hc2V0IQM3sRgCsARG3K/GNTOcK+vOjLs7LfJAVpJDkUwMcCYV5B0jdGdr6qP2KZ2TMB+N8Jbbb/txnPvxo5/MGzWV2TFaSRZJFHXde1EM4h2fkHtsoKYmZeMb7TPE0ZtZjfSvL8qGBjijNpQRpJTgLw3sBJOZGkP3/S+qoSxMx8Pq8C8LLWN7d8wwNInrZ8s2m2mLwgjST+Y9a+gVPYad9W1UcsM/Nt6/5MftR1OMnjooKNMc4sBGkk+QKANwRO0kEkP9EmXkUFMbPzALylzf20bNO5UraMO6pmcxLEfxvxB3v80dKoa2+S5y4XLFsQM3NRD1juPjr8/zNI+o+Ls79mI0hTRZ7SSOKPmEZd/rvAl5YKlvkRK2F/VfoDZFHgK+LMSpBGEn8O3SuJH28TdS15uFtWBTGz6K+yfVe072b+RxSYsceZnSCNJNs1kvgjp1HX1iR/uq5gGYKYmX/pELmT9tpGjt9HAZlCnFkK0kiyQ7O58RFBE3mf//ZA8ldrx4v+iGVm/iSgb8yMum5t5Lg5KuBU4sxWkEaS6I18vwawHUnflrH6iqwgZuaPF/tjxlHXXc3+qmuiAk4pzqwFaSTZH8CnAyf1RwBeTvL+VTGjBDEzP2v4+wGHVKy6tX82cnw9cPyTClUiiJk9A8D9JAe5RTrhYaJvkvSt9w9cEYKY2aYAfKNgm2NB2y7SUT5PbmaPAbApyevbDrRvuzRBzMz/EPbv0n3bw7OaG/QzrL4H4BSSt/e96Yx+ZnYMgA8Fxl79xN2igjQnq18NYKvA+3s3yU8FxksP1fwt58cUrdpK4x8P/ePmtzMO2/ABpQhiZu8AcMYSxPwP2gNJ+ukag7mCDzTwcZ1Jcr8AQVzeyP1Vh5E8fjDgl7mRZuu+r5Utl2jqkkT+CPxAqnBBzOyiZY7OX3OMO5P0A5MHcwUfiePj8s2S/o6SvmdH+QkrkQeznUDyg4MBvrwc+wA4q+X93kly45ZtWzULFcTM/HwqP2Gky7UtSf8OfjBX4KFqq8Z09AJvmIrkcjrJd0UGzIxlZv48y40dH6E+iaT/gBpyhQliZo8E4N+j+wkjXa6rSb6kS4fstmbm+7b8X+5Fj+XMvtUu8S8kuWeXDivd1sz8lRadHi1o7jnsQO1IQfyR1HX+krwM6PIX2rSZeDPzfVsuySIHO7dJVdHGv8b1j7P/rkgWlcPM/ACOPm8EC9umHymI/+t0QU84zyTpP7IN6jIz37flkqz6Fm5Q99fyZvwHQJdjdKcfmpkfEuGPD3e9ziW5d9dO62ofKcgij7cO9k2uzdfVLsnjI4AXx/CPvC6HL7TRXWbW9ySZK0luHzFgCdKCopn5vi3f0t7l9WQtIqc2+Z1/+0XSz7Ea5SVBHpy2wVaQVbeYcABb5qL9eyOHn2wy2kuCjEgQv1Uzi963lbV49yB5cVbwqrgSZGSCNJJEHwIdvd5S3nESfZNt4kmQEQrSSBL9GoE266VNm/eT/GibhmNoI0FGKkgjySkADhrQQjuO5OEDup+Fb0WCjFiQRpLPAgj5vn3B1XQaychTTRa8nZjuEmTkgjSS+AEQu8QsiV5RLiAZeR5Wr5vI6CRBpiGI79vyHckRb9rtus6+SnLHrp3G0l6CTECQpor4vi2XpPcrEnosWn+AasdFX+7TI29ZFwkyEUEaSXzflkvijxdnXz9v5BjUU5nRg5YgExKkkcQfM3ZJHhe9WNaId4cfUE3yusQcgwgtQSYmSCOJ79vyU9YfmrDK/FFll+PKhNiDCylBJihII0n0eVurSIU9CDQ4G9ZxQxJkooI0kkTv29p3aIdcZEsmQSYsSCNJ1L6tQ0ienL0ghxZfgkxckEaSRfdtHUPyyKEt3or7kSAzEKSRpO++LT9g7z0Vi3GIOSTITARpJOm6b6vXG3WHuND73pMEmZEgHSvJqSQP7ruwptJPgsxMkEaSvQAcC2CzdSzk2wD4G3T7ng4zFTceGIcEmaEgzcT7IXubN/9t0Ry4dwuAW0j+bVKrfIHBSJCZCrLAmplVVwkiQWa14LsOVoJIkK5rZlbtJYgEmdWC7zpYCSJBuq6ZWbWXIBJkVgu+62AliATpumZm1V6CSJBZLfiug5UgEqTrmplVewkiQWa14LsOVoJIkK5rZlbtJYgEmdWC7zpYCSJBuq6ZWbWXIBJkVgu+62AlyIPEZnHOU9cFova9zzue3Es8tRZEIJKABImkqViTIyBBJjelGlAkAQkSSVOxJkdAgkxuSjWgSAISJJKmYk2OgASZ3JRqQJEEBinI2wCcEzlKxRKBngTOJRny9mH2vIH/62Zm2wK4Jiqe4ojAAgQOJ3ncAv1Xd40UZEMAf464KcUQgQUJhL1oKEwQH5CZHQVglkf1Lzih6h5H4CSSh0aFCxWkkcRfYjnZd3dHgVecFAJ3ktw4MnK4IKokkdOjWB0IXEcy/D31KYI0kvi3Wl7qtkx642sHdmo6YQI3AbiC5CEZY0wTZNXNmpm/DtlPMt8oYwCKOVsC9wK4leQ9mQTSBcm8ecUWgWwCEiSbsOKPmoAEGfX06eazCUiQbMKKP2oCEmTU06ebzyYgQbIJK/6oCUiQUU+fbj6bgATJJqz4oyYgQUY9fbr5bAISJJuw4o+agAQZ9fTp5rMJSJBswoo/agISZNTTp5vPJiBBsgkr/qgJSJBRT59uPpuABMkmrPijJiBBRj19uvlsAhIkm7Dij5rAfwFHMhojAvdxjgAAAABJRU5ErkJggg=="
    },
    "9b19": function(e, t, s) {
        "use strict";
        s("28a5");
        var i = s("433e")
          , n = s.n(i);
        t["a"] = {
            data: function() {
                return {
                    __watermark: null
                }
            },
            methods: {
                __initWatermark: function(e) {
                    console.log("🚀 🚀 🚀 🚀 ~ options:", e);
                    var t = e.container
                      , s = e.waterMarkHor
                      , i = e.waterMarkVer
                      , a = e.waterMarkShowContent
                      , r = e.enableWatermark
                      , o = e.employeeCode
                      , c = e.userName
                      , u = e.loginName
                      , l = e.orgName
                      , d = e.waterMarkTransparency;
                    if ("true" === r) {
                        var h = {
                            EMPLOYEE_CODE: o,
                            USER_NAME: c,
                            LOGIN_NAME: u,
                            ORG_NAME: l
                        }
                          , m = a.split(",").reduce((function(e, t) {
                            return h[t] && e.push(h[t]),
                            e
                        }
                        ), [])
                          , p = {
                            container: t,
                            content: m,
                            font: {
                                color: "#000",
                                fontSize: 16
                            },
                            offset: [0, 0],
                            gap: [s, i],
                            zIndex: 10,
                            rotate: -20,
                            globalAlpha: d / 100
                        };
                        if (this.waterMarkTransparency = d,
                        this.__watermark)
                            return console.log("🚀 updateWatermark"),
                            void this.__watermark.updateWatermark(p);
                        console.log("🚀 createWatermark"),
                        this.__watermark = new n.a(p)
                    }
                },
                __openAndClosePictureInPicture: function(e) {
                    e ? this.__watermark && this.__watermark.updateWatermark({
                        globalAlpha: 0
                    }) : this.__watermark && this.__watermark.updateWatermark({
                        globalAlpha: this.waterMarkTransparency / 100
                    })
                }
            }
        }
    },
    a2dc: function(e, t, s) {
        "use strict";
        s("b5e2")
    },
    a4b8: function(e, t, s) {},
    a6a3: function(e, t, s) {},
    a8cf: function(e, t, s) {},
    aef4: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAB6CAYAAADeb1FlAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAegAAAAD97ZejAAAEw0lEQVRoBe2bW2gVRxjH/3uOGm/xEqPxjlTBhxYjhrZUoUKliAqKUBBvqbUBbX1QrL4IpSgtSPFFpILaUrT6Kqigrb604kNRVIT2xaqgVIuXxGjSJJo0x++/ZY5zTvac2d0ze/ZlBvbM7Lc78//Nt9/M7s4myOVyDbJlkVLKiO5I2aYJxPA0GAjARA9MEojxsimbfyDpn2KxUSI4VSCGJi2s2i8GoH2wbFMEok42T52YVB4EoLTGSoHeGKIMSeTlAKhHcQbomKS8YQJQnR4nhckCwctjNYUFoCgDk95goFpLUQAoyqDkUOWQHWSDIiqA0uSkRW+MUIa4eVwA6rHuRIGYIFvsdmJX1HpcK2V6Y5hmC120AUAxxgNHSX1Ub9gCUD0eLQVOXjXKYMptA1CPcwUhxspmnMqTAFCdrpMC7yllp/IkAQjCS0Fv8NIEpqQBKMrLwOBkkA6YvKoBoHrOYcrhyiewfKomAEWpx2dQ3ur9VG0ApcuHHU5gPpEyVjtnXGTT8oDqfG2aAIQYkTbA4LQBUo0BP+jT9kCqw9B5wHnAecB5wHnAecB5wHnAeSAZDxy6jAmnbyH0WuKA12UfK+bPwSto2PsbTgzKoBMr0Lx8Fp6bmrL2VOyL/4oTvf2Y0d2Ht7adwrEwnrACoIurHhNi93m0qP1SecUAQeIUGz0UP//yKfaXElb2igDKiV/ajK31NfhPCZXKYwPYECdULABb4rEAbIpHBrAtHgkgCfHQAEmJE8A4FXNu5/TKGY4VVOI4DzvUVJ2g3DgKJtWhJ5NBT3FlWX99WVuD/mJ71H0jAG8o3yxC85AsbuuNt/dgedMBfK3b4pSNAGx07Vy07Xof6+Uud08Xae3Cqsbv8KVui1oOBcBGN72DR9sW+BAPdJFHnfh43kHs0G1RyqEB2OgX83G/pQnrZW3tsS7yTwc2v30In+u2sOVIAGz0qw9wd80cNGc9PNVF/m7H9gWHsVG3hSlHBmCj3y7GXyvfxIaMhw5d5M5T7Fr4A1brNlM5FgAbPbAMfy6djY2eh391kZut2PPhUazUbeXKsQHY6JEVuL7oDWwST7zIi+Tg/fEQe5cex5K8rUyhIgC2+9NH+P3dafiME1NeJ4fsjQfY9/01jM/bShQqBmC7J1fjYtNUbJVin6/jobdxMna0zCscLf6xoh8rAGzzzFpcaGzATrkc3e9Nx5az63CuSCtw15PPJjMDj8Q0/ngV9Z804UnY6tYBwgqr86xdAtVg1NwBOA84DzgPOA84DzgPOA84DzgPpO2B/rQB+tIG6Eob4HmaAO2e5/WmBdAlb1BtfIsyrpRGfdUKcX67nNMmvc/x3GoC9IreYxHuprBK1QBgT7mixmvu91qJM08agL19IsKvl2909QQBuIhN4YJlvCJtfzcJD1C0VcSNX8xIYBOAQcZec4iFTrYAVJBF/n5QKQA/ZHBolQwykyviArCnrbJ1iPiAoWUS1Y/HAeDaMK/1/4uSemsxylEAKEjhgsXpGJoFVcICPJNanL8jB1mBWsCOCYCr4Ayy16vhAY1UYioFwMDi7fKZiFcUZCa4IABOJOy1lSCLAsCpk0HWaapk87jyAP/ahfO39SAzwspyfdX+wdUIk8YJrwDREG917sSAdgAAAABJRU5ErkJggg=="
    },
    b0da: function(e, t, s) {
        "use strict";
        s.d(t, "b", (function() {
            return n
        }
        )),
        s.d(t, "a", (function() {
            return a
        }
        )),
        s.d(t, "c", (function() {
            return r
        }
        ));
        var i = s("b775");
        function n(e) {
            return Object(i["a"])({
                url: "/ubr/heartbeat/canStudy",
                method: "get",
                params: e
            })
        }
        function a(e) {
            return Object(i["a"])({
                url: "/ubr/heartbeat/beatV2",
                method: "get",
                params: e
            })
        }
        function r(e) {
            return Object(i["a"])({
                url: "/tbc-rms/record/openBeatHeart",
                method: "post",
                data: e
            })
        }
    },
    b283: function(e, t, s) {},
    b459b: function(e, t, s) {
        "use strict";
        s("2007")
    },
    b5e2: function(e, t, s) {},
    b6ba: function(e, t, s) {},
    b81c: function(e, t, s) {
        "use strict";
        s.d(t, "j", (function() {
            return h
        }
        )),
        s.d(t, "d", (function() {
            return m
        }
        )),
        s.d(t, "u", (function() {
            return p
        }
        )),
        s.d(t, "v", (function() {
            return f
        }
        )),
        s.d(t, "i", (function() {
            return v
        }
        )),
        s.d(t, "q", (function() {
            return g
        }
        )),
        s.d(t, "n", (function() {
            return y
        }
        )),
        s.d(t, "l", (function() {
            return C
        }
        )),
        s.d(t, "m", (function() {
            return I
        }
        )),
        s.d(t, "h", (function() {
            return A
        }
        )),
        s.d(t, "e", (function() {
            return S
        }
        )),
        s.d(t, "w", (function() {
            return T
        }
        )),
        s.d(t, "g", (function() {
            return w
        }
        )),
        s.d(t, "p", (function() {
            return b
        }
        )),
        s.d(t, "t", (function() {
            return _
        }
        )),
        s.d(t, "x", (function() {
            return x
        }
        )),
        s.d(t, "b", (function() {
            return E
        }
        )),
        s.d(t, "o", (function() {
            return k
        }
        )),
        s.d(t, "a", (function() {
            return O
        }
        )),
        s.d(t, "s", (function() {
            return R
        }
        )),
        s.d(t, "k", (function() {
            return D
        }
        )),
        s.d(t, "r", (function() {
            return L
        }
        )),
        s.d(t, "c", (function() {
            return P
        }
        ));
        var i = s("b775")
          , n = s("bc3a")
          , a = s.n(n)
          , r = s("5c96")
          , o = s("4360")
          , c = s("4328")
          , u = s.n(c)
          , l = a.a.create({
            baseURL: Object({
                NODE_ENV: "production",
                BASE_URL: "/courseSetting/"
            }).VUE_APP_BASE_API,
            timeout: 5e3,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        l.interceptors.request.use((function(e) {
            return o["a"].getters.token,
            e.data = u.a.stringify(e.data),
            e
        }
        ), (function(e) {
            return console.log(e),
            Promise.reject(e)
        }
        )),
        l.interceptors.response.use((function(e) {
            var t = e.data;
            return 0 !== t.code && 1001 !== t.code || 200 !== e.status ? (Object(r["Message"])({
                message: t.message || t.msg || "Error",
                type: "error",
                duration: 5e3
            }),
            50008 !== t.code && 50012 !== t.code && 50014 !== t.code || r["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again", "Confirm logout", {
                confirmButtonText: "Re-Login",
                cancelButtonText: "Cancel",
                type: "warning"
            }).then((function() {
                o["a"].dispatch("user/resetToken").then((function() {
                    location.reload()
                }
                ))
            }
            )),
            Promise.reject(new Error(t.message || t.msg || "Error"))) : t
        }
        ), (function(e) {
            console.log("err" + e),
            console.log(e.response.status),
            Object(r["Message"])({
                message: e.response.data.message,
                type: "error",
                duration: 5e3
            });
            var t = window.vm.$route.path
              , s = {};
            return "/login" !== t && (s.redirect = t),
            401 === e.response.status && window.vm.$router.push({
                path: "/login",
                query: s
            }),
            Promise.reject(e)
        }
        ));
        var d = l;
        function h(e) {
            return Object(i["a"])({
                url: "/els/html/course/course.getCourseReferenceJson.do?courseId=".concat(e.courseId),
                method: "get"
            })
        }
        function m(e) {
            return Object(i["a"])({
                url: "/els/html/discussAndNote/discussAndNote.batchDeleteDiscussJson.do?discussIds=".concat(e.discussIds, "&csrfToken=").concat(e.csrfToken),
                method: "get"
            })
        }
        function p(e) {
            return Object(i["a"])({
                url: "/els/html/coursebasic/coursebasic.saveDiscuss.do",
                method: "post",
                data: e,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
        }
        function f(e) {
            return Object(i["a"])({
                url: "/els/html/coursebasic/coursebasic.saveDiscuss.do",
                method: "post",
                data: e
            })
        }
        function v(e) {
            return Object(i["a"])({
                url: "/els/html/coursebasic/coursebasic.getCourseDiscussJson.do?courseType=".concat(e.courseType, "&courseId=").concat(e.courseId, "&page.pageNo=").concat(e.page.pageNo, "&page.pageSize=").concat(e.page.pageSize),
                method: "get"
            })
        }
        function g(e) {
            return Object(i["a"])({
                url: "/els/html/course/course.getCourseInfoJson.do",
                method: "get",
                params: e
            })
        }
        function y(e) {
            return d({
                url: "/els/html/course/courseStudy.saveOrUpdateCourseNoteJson.do",
                method: "post",
                data: e
            })
        }
        function C(e) {
            var t = e.courseId
              , s = e.processType
              , n = e.page
              , a = n.pageNo
              , r = n.pageSize
              , o = "?courseId=".concat(t, "&processType=").concat(s, "&page.pageNo=").concat(a, "&page.pageSize=").concat(r);
            return Object(i["a"])({
                url: "/els/html/course/courseStudy.courseNoteListJson.do".concat(o),
                method: "get"
            })
        }
        function I(e) {
            var t = e.noteId
              , s = "?noteId=".concat(t);
            return Object(i["a"])({
                url: "/els/html/course/courseStudy.deleteCourseNoteJson.do".concat(s),
                method: "get"
            })
        }
        function A(e) {
            return Object(i["a"])({
                url: "/els/html/collection/collection.collectionCourseJson.do?courseId=".concat(e.courseId),
                method: "get"
            })
        }
        function S(e) {
            return Object(i["a"])({
                url: "/els/html/collection/collection.cancelCollectionJson.do?courseId=".concat(e.courseId),
                method: "get"
            })
        }
        function T(e) {
            return Object(i["a"])({
                url: "/els/html/coursePraise/coursePraise.getCountPraiseAndUserJson.do?coursePraise.courseId=".concat(e.coursePraise.courseId, "&coursePraise.praiseStatus=").concat(e.coursePraise.praiseStatus),
                method: "get"
            })
        }
        function w(e) {
            return Object(i["a"])({
                url: "/els/html/discussAndNote/discussAndNote.checkAllowDeleteDiscuss.do?courseId=".concat(e.courseId),
                method: "get"
            })
        }
        function b(e) {
            return Object(i["a"])({
                url: "/els/html/trainCamp/trainingCamp.courseShow.do?courseId=" + e,
                method: "get"
            })
        }
        function _(e) {
            return Object(i["a"])({
                url: "/els/html/trainCamp/trainingCamp.isPrompt.do",
                method: "post",
                data: e
            })
        }
        function x(e) {
            return Object(i["a"])({
                url: "/els/html/trainCamp/trainingCamp.setUpPrompt.do",
                method: "post",
                data: e
            })
        }
        function E(e) {
            return Object(i["a"])({
                url: "/els/html/trainCamp/trainingCamp.addInterest.do",
                method: "post",
                data: e
            })
        }
        function k(e) {
            return Object(i["a"])({
                url: "/els/html/trainCamp/trainingCamp.reduceInterest.do",
                method: "post",
                data: e
            })
        }
        function O(e) {
            return Object(i["a"])({
                url: "/els/html/trainCamp/trainingCamp.addHits.do",
                method: "post",
                data: e
            })
        }
        function R(e) {
            return Object(i["a"])({
                url: "/els/html/courseRepostApply/isUserShareCourse.do",
                method: "post",
                params: e
            })
        }
        function D(e) {
            return Object(i["a"])({
                url: "/els/html/courseRepostApply/courseRepostApply.do",
                method: "post",
                params: e
            })
        }
        function L(e) {
            return Object(i["a"])({
                url: "/els/html/courseField/courseField.getCourseSystemSetingFieldMap.do",
                method: "post",
                data: e
            }).catch((function(e) {}
            ))
        }
        function P(e) {
            return Object(i["a"])({
                url: "/els/html/superior/recommend/addRecommendCourse",
                method: "post",
                data: e
            }).catch((function(e) {}
            ))
        }
    },
    c3ba: function(e, t, s) {},
    c441: function(e, t, s) {
        "use strict";
        function i() {
            var e = window.$cookies.get("corp_code") || window.$cookies.get("corpCode");
            return "davco" === e || "davcolark" === e
        }
        function n() {
            var e = window.$cookies.get("corp_code") || window.$cookies.get("corpCode");
            return "mpcn" === e
        }
        s.d(t, "a", (function() {
            return i
        }
        )),
        s.d(t, "b", (function() {
            return n
        }
        ))
    },
    c444: function(e, t, s) {},
    c5eb: function(e, t, s) {
        "use strict";
        s("72d8")
    },
    c73f: function(e, t, s) {
        "use strict";
        s("a6a3")
    },
    c80b: function(e, t, s) {},
    c8fe3: function(e, t, s) {},
    ca1e: function(e, t, s) {},
    ca74: function(e, t, s) {
        e.exports = s.p + "static/img/ai.0a0b82b3.png"
    },
    ccaa: function(e, t, s) {
        "use strict";
        s("19ce")
    },
    ccf6: function(e, t, s) {
        e.exports = s.p + "static/img/audio@2x.221e7c1f.png"
    },
    ce94: function(e, t, s) {
        "use strict";
        s("eb14")
    },
    d663: function(e, t, s) {},
    d838: function(e, t, s) {
        "use strict";
        s("5e40")
    },
    da489: function(e, t, s) {},
    da9d: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAB6CAYAAADeb1FlAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAegAAAAD97ZejAAADuUlEQVRoBe2aW28TMRBGG0opUAq0XFtagUAIgUBIvMH/l7gjXvkFIKClFyiXlobvhBi5m83a3rXXD3ikYW0n6+94duykE2aGw+EV+exMJjsm3TPydUGczsEAAEYEVgRxSW7GRi+k/qcqdlaCa4I4mVrYzF8FYHxOfk0Qy/KBeWOqax2A0VpSg2icMAMprk0A6CFOgp5PFQ0XgFn0BTVWBcHjiWq+AIiSmESDRI1mIQCIkpRsVbbs8RgUoQBGk0OLaCyYgbbXtgDoce9VQVyWt56n9Y3WihfVJhqnrDHvZgwAxMgHdsnF0GjEAjArPqcGh9e8GXBdYwOgx1kBxJLceZSnADCLXlaDz5TGozwlACA8CqLBo6m11ACI8hhITpJ04vDqA8CsnG3KduUb2D/rEwBR9PgOykf9yPoGMLp82eEAGxGZwb6v5MVsrgiYxS/mBABiITfAXG6ArDkwSvrcEci6DUsESgRKBEoESgRKBEoESgRKBJJFgHqid0Ez9pdSxJ/IH/tCxAQw4tQQqaZ6QcQCsMWlPTIgbo3bUy8xAOrEEfwgfzdVefxCV4Am8dfSGKYE6CwOXNsIRBFvCxBNvA1AVPFQgOjiIQBJxH0Bkon7AvzWGw94c8UO1Xfu88o9E12fbbivu57Jv1XuXlX/YWUsuOsDwKS/5E/l3+lYtq72fasf3PQFYOIfciC42nZDnbv2QEg7BIB59+RA/KRjGZ96t62+dzMUgInJBXKC3LDtjjo37QGfdhsA5t2VA1HdHfc0dl3ubW0BENiWP5ezTW17oM6aPdDU7gLAvF/kL+TV84DtuSJ3WlcABDbkL+U2BL8TPZLPyxstBgACH+Vv5AaCK/3qbtHQUYsFwKzv5W/lHNGvxn1dmm2gn02c31ybp5h4lbA7V27uihkBM6e3ODekADAgXtcCUCJQIlAiUCJQIlAiUCJQIlAikDsCh7kBDnID7OUG2MkJsDUYDPZzAVBr2uRPp4n/4+n191S3N23p9k2tfvSnfJ8AFLU+SfhIrbEPAFZKKYdnbgoY6v611ACs9rOEqbTWWioAqiQIU85rtBQAiG5IvFq+qwWJCUCSsWq2mLfFAjBJRuiDrCsAlXO21tQkc9G0BWClFCh3JT6xtVyi9uttAKiW86yrhWp7Xu92CACCCFd/uvEWq3ujLwCVcc7v4CSrE7XHXAAUHUmyoOKjLeBqTwMgsfi43JZ4pyRrA8BBwqqjJFkIAEcnSfbVdVPM180j2NGknN/Rk8wJq3I9vw3/v/YHErbwICLhC4UAAAAASUVORK5CYII="
    },
    db12: function(e, t, s) {
        "use strict";
        s("65d9")
    },
    dc8d: function(e, t, s) {
        "use strict";
        s("da489")
    },
    df69: function(e, t, s) {
        "use strict";
        s("7fa3")
    },
    dfcd: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAARZJREFUOBHlkkFLAkEUgHdyDx3VDoKQ4E0Jb56DTCgKoYN4qR8R/Y7wFP0LIdglwpOHDt77A0t1SAxPHrqt3yxvhp1xQe8NfL5533sz485uEHgjTdMh3Hg6wN3Bpe8PfEGum7YacdfQB2cUbeA07EqcDfiLIQsasCpY+ItrSY8th4hzsp6YE2IVXiXPhwnJI8SsSaTwpk88hraIH+KTUupdchtwMxbeIwZwJIWSbfjHE8XFnPH85i0smL9wYd9Fd0JvF38FFalP9VtoQkfEBXFE4y2bfInLAu6UyRjWYA4oZ0XzQ1MD5vBgnIm4Z4jg0DgdnS+RUz9xCdTBHzXEBz1/+YKzQb6w71zfgT9ixNKX5BGYZ7flDQm0WV3DIlGvAAAAAElFTkSuQmCC"
    },
    e2ca: function(e, t, s) {
        e.exports = s.p + "static/img/emptyNote.8090b0e6.png"
    },
    e873: function(e, t, s) {
        "use strict";
        var i = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", [e.preventCheatFlag && 2 == e.checkType ? s("div", {
                staticClass: "pCheat-box",
                staticStyle: {
                    width: "100%",
                    height: "100%"
                }
            }, [s("div", {
                staticClass: "pCheat-wrap"
            }, [s("div", {
                staticClass: "header-tips"
            }, [e._v(e._s(e.$t("系统提示")))]), s("div", {
                staticStyle: {
                    padding: "20px"
                }
            }, [s("div", {
                staticClass: "pCheat-title"
            }, [e._v("\n          " + e._s(e.$t("请完成下方的题目，"))), s("span", {
                staticClass: "pCheat-title-count",
                staticStyle: {
                    color: "#14abef"
                }
            }, [e._v(e._s(e.timeCount))]), e._v(e._s(e.$t("秒内未完成将退出课程学习")) + "\n        ")]), s("div", {
                staticClass: "pCheat-img-box"
            }, [s("img", {
                staticClass: "pCheat-img",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    id: "identifyCode",
                    src: e.imgUrl
                }
            }), s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.imgTime,
                    expression: "imgTime"
                }],
                attrs: {
                    id: "imgTime",
                    type: "hidden"
                },
                domProps: {
                    value: e.imgTime
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.imgTime = t.target.value)
                    }
                }
            }), s("a", {
                staticClass: "pCheat-img-link",
                attrs: {
                    href: "javascript:;",
                    id: "changeNext"
                },
                on: {
                    click: e.changeNext
                }
            }, [e._v(e._s(e.$t("看不清,换一个")))])]), s("div", {
                staticClass: "vld-row",
                staticStyle: {
                    "text-align": "center",
                    "margin-top": "20px"
                }
            }, [s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.answerVal,
                    expression: "answerVal"
                }],
                staticClass: "pCheat-input-text",
                attrs: {
                    type: "text",
                    id: "answer",
                    placeholder: "",
                    maxlength: "10"
                },
                domProps: {
                    value: e.answerVal
                },
                on: {
                    blur: e.validate,
                    input: function(t) {
                        t.target.composing || (e.answerVal = t.target.value)
                    }
                }
            }), s("span", {
                staticStyle: {
                    color: "#000"
                },
                attrs: {
                    id: "tip"
                }
            }, [e._v(e._s(e.tips))])])]), s("div", {
                staticClass: "confirmBtn"
            }, [s("div", {
                staticClass: "btn",
                on: {
                    click: e.submitAnswer
                }
            }, [e._v(e._s(e.$t("确定")))])])])]) : e._e(), e.preventCheatFlag && 1 == e.checkType && !e.shouldUseFaceRecognition ? s("div", {
                staticClass: "pCheat-box"
            }, [s("div", {
                staticClass: "erweima-wrap"
            }, [s("p", [e._v(e._s(e.$t("系统提示")))]), s("div", {
                attrs: {
                    id: "erweima-img"
                }
            }), s("p", {
                staticStyle: {
                    "text-align": "center"
                }
            }, [e._v("\n        " + e._s(e.$t("请通过云端学习APP的“扫一扫”完成验证")) + "\n      ")]), s("p", {
                staticStyle: {
                    "text-align": "center"
                }
            }, [s("span", [e._v(e._s(e.minute))]), e._v(e._s(e.$t("分钟"))), s("span", [e._v(e._s(e.second))]), e._v(e._s(e.$t("秒内未完成将退出课程学习")) + "\n      ")])])]) : e._e(), s("CourseFaceRecognition", {
                attrs: {
                    visible: e.faceRecognitionVisible,
                    courseId: e.$route.query.courseId,
                    type: "preventCheat",
                    source: "COURSE_PREVENT_CHEAT"
                },
                on: {
                    closeCarema: e.closeCarema,
                    success: e.handleFaceVerifySuccess,
                    "verify-fail": e.handleFaceVerifyFail,
                    cancel: e.handleFaceVerifyCancel
                }
            })], 1)
        }
          , n = []
          , a = (s("3b2b"),
        s("6762"),
        s("2fdb"),
        s("7f7f"),
        s("c5f6"),
        s("8e44"))
          , r = s("fa7d")
          , o = s("d044")
          , c = s.n(o)
          , u = s("cc7d")
          , l = s.n(u)
          , d = s("1431")
          , h = {
            components: {
                CourseFaceRecognition: d["a"]
            },
            inject: ["faceControl"],
            data: function() {
                return {
                    preventCheatFlag: !1,
                    faceRecognitionVisible: !1,
                    timeCount: 60,
                    preventCheatInterval: null,
                    countTimer: null,
                    preventCheatTime: 0,
                    imgUrl: "",
                    answerVal: "",
                    tips: "",
                    playTime: 0,
                    playTimer: null,
                    lastTimer: null,
                    nextPlayTime: 0,
                    qrcode: null,
                    minute: 2,
                    second: 59,
                    faceTimer: null,
                    userId: ""
                }
            },
            props: {
                maxTime: {
                    type: Number,
                    default: 0
                },
                minTime: {
                    type: Number,
                    default: 0
                },
                checkType: {
                    type: Number,
                    default: 2
                }
            },
            computed: {
                shouldUseFaceRecognition: function() {
                    var e = this.$route && this.$route.name
                      , t = this.$route && this.$route.path;
                    return "1" == this.checkType && this.faceControl.isOpenCarema() && ("courseLearning" === e || t && t.includes("/courseLearning/"))
                }
            },
            watch: {},
            methods: {
                openFaceRecognition: function() {
                    this.faceRecognitionVisible = !0
                },
                closeFaceRecognition: function() {
                    this.faceRecognitionVisible = !1
                },
                closeCarema: function() {
                    var e = this;
                    this.faceControl.closeCarema(),
                    this.closeFaceRecognition(),
                    this.$nextTick((function() {
                        e.initErWeima()
                    }
                    ), 100)
                },
                initPreventCheat: function(e) {
                    var t = this;
                    if ("video" == e)
                        t.exitfullscreen(),
                        t.$emit("saveStudyLog", "PREVENT_CHEAT_POPUP"),
                        t.preventCheatFlag = !0,
                        clearInterval(t.countTimer),
                        t.$emit("pauseOrPlay", !1),
                        t.shouldUseFaceRecognition ? (clearInterval(t.faceTimer),
                        t.openFaceRecognition()) : "1" == t.checkType ? setTimeout((function() {
                            t.initErWeima()
                        }
                        ), 100) : "2" == t.checkType && (t.preventCheat(),
                        t.timeCount = 60,
                        t.countTimer = setInterval((function() {
                            t.timeCount--,
                            t.timeCount <= 0 && (t.$emit("saveStudyLog", "PREVENT_CHEAT_LOGOUT"),
                            t.timeCount = 0,
                            console.log("退出登录"),
                            setTimeout((function() {
                                window.close(),
                                setTimeout((function() {
                                    top.open("about:blank", "_self").close()
                                }
                                ), 600)
                            }
                            ), 1e3),
                            clearInterval(t.countTimer))
                        }
                        ), 1e3));
                    else {
                        clearInterval(this.preventCheatInterval);
                        var s = e ? 60 * e * 1e3 : 60 * t.preventCheatTime * 1e3;
                        console.log(this.$t("自动验证的时间：") + s),
                        this.preventCheatInterval = setTimeout((function() {
                            t.exitfullscreen(),
                            t.$emit("saveStudyLog", "PREVENT_CHEAT_POPUP"),
                            t.preventCheatFlag = !0,
                            t.$emit("pauseOrPlay", !1),
                            t.shouldUseFaceRecognition ? (clearInterval(t.faceTimer),
                            t.openFaceRecognition()) : "1" == t.checkType ? setTimeout((function() {
                                t.initErWeima()
                            }
                            ), 100) : (t.preventCheat(),
                            t.timeCount = 60,
                            clearInterval(t.countTimer),
                            t.countTimer = setInterval((function() {
                                t.timeCount--,
                                t.timeCount <= 0 && (t.$emit("saveStudyLog", "PREVENT_CHEAT_LOGOUT"),
                                t.timeCount = 0,
                                console.log("退出登录"),
                                setTimeout((function() {
                                    window.close(),
                                    setTimeout((function() {
                                        top.open("about:blank", "_self").close()
                                    }
                                    ), 600)
                                }
                                ), 1e3),
                                clearInterval(t.countTimer))
                            }
                            ), 1e3))
                        }
                        ), s)
                    }
                },
                handleFaceVerifySuccess: function() {
                    clearInterval(this.faceTimer),
                    this.closeFaceRecognition(),
                    this.$emit("saveStudyLog", "PREVENT_CHEAT_VERIFY_SUCCESS"),
                    clearInterval(this.countTimer),
                    clearInterval(this.playTimer),
                    clearTimeout(this.lastTimer),
                    clearInterval(this.preventCheatInterval),
                    this.preventCheatFlag = !1,
                    this.$emit("pauseOrPlay", !0),
                    this.playTime = 0,
                    this.answerVal = "",
                    this.nextPlayTime = this.maxTime - this.preventCheatTime,
                    this.preventCheatTime = (Math.random() * (this.maxTime - this.minTime) + this.minTime).toFixed(1),
                    this.nextPlayTime = Number(this.nextPlayTime) + Number(this.preventCheatTime),
                    document.getElementsByTagName("video")[0] ? this.addVideoClick(this.nextPlayTime) : this.initPreventCheat(this.nextPlayTime)
                },
                handleFaceVerifyCancel: function() {
                    this.closeFaceRecognition(),
                    this.preventCheatFlag = !1,
                    this.$emit("saveStudyLog", "PREVENT_CHEAT_LOGOUT"),
                    setTimeout((function() {
                        window.close(),
                        setTimeout((function() {
                            top.open("about:blank", "_self").close()
                        }
                        ), 600)
                    }
                    ), 1e3)
                },
                handleFaceVerifyFail: function() {
                    clearInterval(this.faceTimer),
                    this.closeFaceRecognition(),
                    this.$emit("saveStudyLog", "PREVENT_CHEAT_VERIFY_FAIL"),
                    this.preventCheatFlag = !1,
                    setTimeout((function() {
                        window.close(),
                        setTimeout((function() {
                            top.open("about:blank", "_self").close()
                        }
                        ), 600)
                    }
                    ), 1e3)
                },
                randomWord: function(e, t, s) {
                    var i = ""
                      , n = t
                      , a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                    e && (n = Math.round(Math.random() * (s - t)) + t);
                    for (var r = 0; r < n; r++) {
                        var o = Math.round(Math.random() * (a.length - 1));
                        i += a[o]
                    }
                    return i
                },
                initErWeima: function() {
                    var e = this
                      , t = this;
                    clearInterval(this.faceTimer),
                    t.minute = 2,
                    t.second = 59,
                    this.faceTimer = setInterval((function() {
                        t.second--,
                        t.second < 0 && (t.second = 59,
                        t.minute--,
                        t.minute < 0 && (t.second = 0,
                        t.minute = 0,
                        t.$emit("saveStudyLog", "PREVENT_CHEAT_LOGOUT"),
                        setTimeout((function() {
                            window.close(),
                            setTimeout((function() {
                                top.open("about:blank", "_self").close()
                            }
                            ), 600)
                        }
                        ), 1e3),
                        clearInterval(e.faceTimer)))
                    }
                    ), 1e3),
                    this.qrcode = new c.a(document.getElementById("erweima-img"),{
                        text: "",
                        width: 200,
                        height: 200
                    }),
                    this.webSK()
                },
                webSK: function() {
                    var e, t, s = this, i = this.randomWord(!1, 10), n = window.location.origin, a = this.randomWord(!1, 32);
                    e = new l.a(n + "/biz-oim/webSocket/handler?deviceId=" + a);
                    var r = window.$cookies.get("_local");
                    e.onopen = function(t) {
                        var n = '{"code" : 1, "params" : {"qrCode" : "' + i + '", "oldQrCode" : "", "local" : "' + r + '", "type" : "QR_STUDYCOURSE_SIGN", "userId" :"' + s.userId + '" }}';
                        e.send(n)
                    }
                    ,
                    e.onmessage = function(e) {
                        var i = JSON.parse(e.data);
                        1 == i.code ? (t = i.bizResult + "&userId=" + s.userId,
                        s.qrcode.makeCode(t),
                        document.getElementById("erweima-img").setAttribute("title", "")) : 2 == i.code || (6 == i.code ? (clearInterval(this.faceTimer),
                        s.$emit("saveStudyLog", "PREVENT_CHEAT_LOGOUT"),
                        setTimeout((function() {
                            window.close(),
                            setTimeout((function() {
                                top.open("about:blank", "_self").close()
                            }
                            ), 600)
                        }
                        ), 1e3)) : 7 == i.code ? (console.log("用户扫码确认"),
                        clearInterval(s.faceTimer),
                        s.$emit("saveStudyLog", "PREVENT_CHEAT_VERIFY_SUCCESS"),
                        clearInterval(s.countTimer),
                        clearInterval(s.playTimer),
                        clearTimeout(s.lastTimer),
                        clearInterval(s.preventCheatInterval),
                        s.preventCheatFlag = !1,
                        s.$emit("pauseOrPlay", !0),
                        s.playTime = 0,
                        s.answerVal = "",
                        console.log(s.$t("上次执行的时间:") + s.preventCheatTime),
                        s.nextPlayTime = s.maxTime - s.preventCheatTime,
                        console.log(s.$t("上次剩余的时间：") + s.nextPlayTime),
                        s.preventCheatTime = (Math.random() * (s.maxTime - s.minTime) + s.minTime).toFixed(1),
                        console.log(s.$t("这次摇到的时间:") + s.preventCheatTime),
                        s.nextPlayTime = Number(s.nextPlayTime) + Number(s.preventCheatTime),
                        console.log(s.$t("下次执行的时间:") + s.nextPlayTime),
                        document.getElementsByTagName("video")[0] || document.getElementsByTagName("audio")[0] ? s.addVideoClick(s.nextPlayTime) : s.initPreventCheat(s.nextPlayTime)) : 4 == i.code && !0)
                    }
                    ,
                    e.onclose = function(e) {}
                    ,
                    e.onerror = function(e) {
                        alert("WebSocket连接发生错误，请刷新页面！")
                    }
                },
                exitfullscreen: function() {
                    try {
                        document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
                    } catch (e) {}
                },
                preventCheat: function() {
                    var e = document.getElementsByTagName("head")[0]
                      , t = document.createElement("script");
                    t.type = "text/javascript",
                    e.appendChild(t),
                    t.onload = t.onreadystatechange = function() {
                        !this.readyState || "loaded" === this.readyState || this.readyState
                    }
                    ;
                    var s = parent.location.origin + "/els"
                      , i = Object(r["getUrl"])("eln_session_id")
                      , n = "".concat(s, "/html/preventCheat/preventCheat.loadIdentifyCode.do?eln_session_id=").concat(i, "&imgTime=")
                      , a = (new Date).getTime();
                    this.imgUrl = n + a,
                    this.imgTime = a
                },
                changeNext: function() {
                    var e = parent.location.origin + "/els"
                      , t = Object(r["getUrl"])("eln_session_id")
                      , s = "".concat(e, "/html/preventCheat/preventCheat.loadIdentifyCode.do?eln_session_id=").concat(t, "&imgTime=")
                      , i = (new Date).getTime();
                    this.imgUrl = s + i,
                    this.imgTime = i
                },
                validate: function() {
                    var e = new RegExp("^[0-9]*$")
                      , t = new RegExp("^-[1-9][0-9]*$");
                    return "" == this.answerVal ? (this.tips = this.$t("请输入正确答案"),
                    !1) : e.test(this.answerVal) || t.test(this.answerVal) ? (this.tips = "",
                    !0) : (this.answerVal = "",
                    this.tips = this.$t("请输入数字"),
                    !1)
                },
                submitAnswer: function() {
                    this.imgTime,
                    Number(this.answerVal);
                    var e = Object(r["getUrl"])("courseId")
                      , t = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                      , s = new FormData;
                    s.append("imgTime", this.imgTime),
                    s.append("answer", Number(this.answerVal));
                    var i = this;
                    t && (t.open("post", parent.location.origin + "/els/html/preventCheat/preventCheat.checkAnswer.do?courseId=" + e),
                    t.onreadystatechange = function() {
                        if (4 == t.readyState && 200 == t.status) {
                            var e = JSON.stringify(t.responseText);
                            e.includes("true") ? (i.$emit("saveStudyLog", "PREVENT_CHEAT_VERIFY_SUCCESS"),
                            clearInterval(i.countTimer),
                            clearInterval(i.playTimer),
                            clearTimeout(i.lastTimer),
                            clearInterval(i.preventCheatInterval),
                            i.preventCheatFlag = !1,
                            i.$emit("pauseOrPlay", !0),
                            i.playTime = 0,
                            i.answerVal = "",
                            console.log(i.$t("上次执行的时间:") + i.preventCheatTime),
                            i.nextPlayTime = i.maxTime - i.preventCheatTime,
                            console.log(i.$t("上次剩余的时间：") + i.nextPlayTime),
                            i.preventCheatTime = (Math.random() * (i.maxTime - i.minTime) + i.minTime).toFixed(1),
                            console.log(i.$t("这次摇到的时间:") + i.preventCheatTime),
                            i.nextPlayTime = Number(i.nextPlayTime) + Number(i.preventCheatTime),
                            console.log(i.$t("下次执行的时间:") + i.nextPlayTime),
                            document.getElementsByTagName("video")[0] || document.getElementsByTagName("audio")[0] ? i.addVideoClick(i.nextPlayTime) : i.initPreventCheat(i.nextPlayTime)) : (e.includes("Error"),
                            i.$emit("saveStudyLog", "PREVENT_CHEAT_VERIFY_FAIL"),
                            i.tips = i.$t("请输入正确答案"))
                        }
                    }
                    ),
                    t.send(s)
                },
                resetPlayTime: function(e, t) {
                    clearTimeout(this.preventCheatInterval),
                    clearInterval(this.countTimer),
                    clearInterval(this.playTimer),
                    clearTimeout(this.lastTimer),
                    clearInterval(this.faceTimer),
                    this.closeFaceRecognition(),
                    this.playTime = 0,
                    this.preventCheatTime = (Math.random() * (this.maxTime - this.minTime) + this.minTime).toFixed(1)
                },
                addVideoClick: function(e) {
                    var t = this
                      , s = document.getElementsByTagName("video")[0] || document.getElementsByTagName("audio")[0];
                    s.onplay = function() {
                        clearTimeout(t.lastTimer),
                        clearInterval(t.playTimer);
                        var s = e ? 1e3 * (60 * e - t.playTime) : 1e3 * (60 * t.preventCheatTime - t.playTime);
                        console.log(t.$t("剩余触发时间:") + s),
                        t.playTimer = setInterval((function() {
                            t.playTime++
                        }
                        ), 1e3),
                        t.lastTimer = setTimeout((function() {
                            t.preventCheatFlag = !0,
                            t.initPreventCheat("video")
                        }
                        ), s)
                    }
                    ,
                    s.onpause = function() {
                        clearInterval(t.playTimer),
                        clearTimeout(t.lastTimer)
                    }
                    ,
                    s.pause(),
                    s.play(),
                    t.$store.state.home.jumpFlag && s.pause()
                },
                addPlayEvent: function() {
                    this.preventCheatTime = (Math.random() * (this.maxTime - this.minTime) + this.minTime).toFixed(1),
                    this.playTime = 0,
                    document.getElementsByTagName("video")[0] || document.getElementsByTagName("audio")[0] ? this.addVideoClick() : this.initPreventCheat(this.preventCheatTime)
                }
            },
            mounted: function() {
                var e = this;
                a["c"].getUserInfo().then((function(t) {
                    e.userId = t.bizResult.userId
                }
                )),
                this.addPlayEvent()
            },
            beforeDestroy: function() {
                clearTimeout(this.lastTimer),
                clearInterval(this.playTimer),
                clearInterval(this.countTimer),
                clearInterval(this.preventCheatInterval),
                clearInterval(this.faceTimer),
                this.closeFaceRecognition()
            }
        }
          , m = h
          , p = (s("5989"),
        s("2877"))
          , f = Object(p["a"])(m, i, n, !1, null, "53c25cd6", null);
        t["a"] = f.exports
    },
    eb14: function(e, t, s) {},
    ed21: function(e, t, s) {
        "use strict";
        s("5136")
    },
    eeba: function(e, t, s) {
        "use strict";
        s.d(t, "a", (function() {
            return i
        }
        ));
        var i = "\n// Worker 计时器变量\nlet workerTimer = null;\nlet timeTemp = 0\n// 计时器函数\nfunction startWorkerTimer(time) {\n  time && (timeTemp = time)\n  workerTimer && clearInterval(workerTimer)\n  workerTimer = setInterval(() => {\n    timeTemp++\n    postMessage({\n        type: 'update',\n        timeTemp: timeTemp\n    });\n  }, 1000);\n}\n\n// 停止 Worker 计时器\nfunction stopWorkerTimer() {\n    clearTimeout(workerTimer);\n    workerTimer = null;\n}\n\n// 重置 Worker 计时器\nfunction resetWorkerTimer() {\n    stopWorkerTimer();\n    timeTemp = 0;\n}\n\n// 处理主线程消息\nself.onmessage = function(e) {\n    console.log('worker-lissen', e)  \n    const { command, time } = e.data;\n    switch (command) {\n        case 'start':\n            startWorkerTimer(time || 0);\n            break;\n        case 'stop':\n            stopWorkerTimer();\n            break;\n        case 'reset':\n            resetWorkerTimer();\n            break;\n        case 'test':\n          console.log('test', time)\n          console.log('test-timeTemp', timeTemp)\n          break;\n    }\n};\n"
    },
    f0a6: function(e, t, s) {
        "use strict";
        s("ac6a"),
        s("28a5"),
        s("a481"),
        s("96cf");
        var i = s("3b8d")
          , n = s("d225")
          , a = s("b0b4")
          , r = s("bd86")
          , o = s("433e")
          , c = s.n(o)
          , u = s("8e44")
          , l = function() {
            function e() {
                Object(n["a"])(this, e),
                Object(r["a"])(this, "wrapDom", null),
                Object(r["a"])(this, "iframeDom", null),
                Object(r["a"])(this, "waterMarkDom", null),
                Object(r["a"])(this, "toggleFullDom", null),
                Object(r["a"])(this, "base64Url", ""),
                Object(r["a"])(this, "urlType", ""),
                Object(r["a"])(this, "url", ""),
                Object(r["a"])(this, "setting", {}),
                Object(r["a"])(this, "isViewFull", !1),
                Object(r["a"])(this, "isSystemFull", !1),
                Object(r["a"])(this, "isFull", !1),
                Object(r["a"])(this, "deviceType", ""),
                Object(r["a"])(this, "showWater", !0)
            }
            return Object(a["a"])(e, [{
                key: "init",
                value: function() {
                    var e = Object(i["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.options = t,
                                    this.destory(),
                                    this.addStyle(),
                                    e.next = 5,
                                    this.getShowWater();
                                case 5:
                                    this.initDom(),
                                    this.initUrl(),
                                    this.deviceType = this.getDeviceType(),
                                    this.addEvent(),
                                    this.initWaterMark();
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "getShowWater",
                value: function() {
                    var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                        var t, s;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = this.options.url,
                                    !t) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 4,
                                    u["a"].getUrlShowWaterMarker(t);
                                case 4:
                                    s = e.sent,
                                    this.showWater = !1 !== s.bizResult;
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "addStyle",
                value: function() {
                    var e = this.options.style;
                    e || (e = "\n            .custom-view-full{\n                position: fixed !important;\n                width: 100vw !important;\n                height: 100vh !important;\n                z-index: 99 !important;\n                left: 0 !important;\n                top: 0 !important;\n            }\n            .custom-view-full__mobile{\n                position: fixed !important;\n                width: 100vh !important;\n                height: 100vw !important;\n                z-index: 99 !important;\n                top: 0 !important;\n                left: 100% !important;\n                transform-origin: 0 0;\n                transform: rotateZ(90deg);\n                overflow: hidden;\n            }\n            .custom-view-full__water{\n                position: fixed !important;\n                width: 100vw !important;\n                height: 100vh !important;\n                z-index: 100 !important;\n                left: 0 !important;\n                top: 0 !important;\n            }\n            .custom-view-full__water__mobile{\n              position: fixed !important;\n              width: 100vh !important;\n              height: 100vw !important;\n              z-index: 100 !important;\n              left: 0 !important;\n              top: 0 !important;\n            }\n        ");
                    var t = document.getElementById("styles_js");
                    t || (t = document.createElement("style"),
                    t.type = "text/css",
                    t.id = "styles_js",
                    document.getElementsByTagName("head")[0].appendChild(t)),
                    t.appendChild(document.createTextNode(e))
                }
            }, {
                key: "destory",
                value: function() {
                    this.destoryEvent(),
                    this.wrapDom = null,
                    this.iframeDom = null,
                    this.waterMarkDom = null,
                    this.toggleFullDom = null,
                    this.base64Url = "",
                    this.urlType = "",
                    this.url = "",
                    this.setting = {},
                    this.isViewFull = !1,
                    this.isSystemFull = !1,
                    this.isFull = !1,
                    this.deviceType = "",
                    this.__watermark = null,
                    this.watermarkInfo = null
                }
            }, {
                key: "destoryEvent",
                value: function() {
                    document.removeEventListener("keydown", this.escExit.bind(this))
                }
            }, {
                key: "initDom",
                value: function() {
                    var e = this.options
                      , t = e.wrapSelector
                      , s = e.iframeSelector
                      , i = e.fullSelector;
                    t && (this.wrapDom = document.querySelector(t),
                    this.wrapDom && (this.wrapDom.style.position = "releative")),
                    s && (this.iframeDom = document.querySelector(s)),
                    i && (this.toggleFullDom = document.querySelector(i))
                }
            }, {
                key: "initUrl",
                value: function() {
                    var e = this.options
                      , t = e.url
                      , s = e.isViewFull
                      , i = e.isSystemFull;
                    if (t) {
                        var n = new URL(t)
                          , a = n.host;
                        "live.polyv.cn" === a ? (this.urlType = "live",
                        this.isViewFull = !0) : (this.urlType = "",
                        this.isSystemFull = !0)
                    }
                    void 0 !== s && (this.isViewFull = s),
                    void 0 !== i && (this.isSystemFull = i),
                    this.isSystemFull && (this.isViewFull = !1),
                    s && (this.isSystemFull = !1)
                }
            }, {
                key: "toggleFullView",
                value: function(e) {
                    console.log("🚀 ~ curretnFullStatus:", e);
                    var t = this.isSystemFull
                      , s = this.isViewFull
                      , i = this.isFull;
                    void 0 !== e && (i = e),
                    i ? (t && this.exitSystemFull(),
                    s && this.exitViewFull(this.wrapDom),
                    this.isFull = !1) : (t && this.toSystemFull(this.iframeDom),
                    s && this.toViewFull(this.wrapDom),
                    this.isFull = !0)
                }
            }, {
                key: "addEvent",
                value: function() {
                    document.addEventListener("keydown", this.escExit.bind(this)),
                    document.addEventListener("fullscreenchange", this.fullscreenchange.bind(this))
                }
            }, {
                key: "escExit",
                value: function(e) {
                    27 === e.keyCode && this.toggleFullView(!0)
                }
            }, {
                key: "fullscreenchange",
                value: function() {
                    document.fullscreenElement ? console.log("已进入全屏模式") : (console.log("已退出全屏模式"),
                    this.isFull = !1)
                }
            }, {
                key: "toViewFull",
                value: function(e) {
                    "mobile" === this.deviceType && "live" === this.urlType ? e.className += " custom-view-full__mobile" : e.className += " custom-view-full"
                }
            }, {
                key: "exitViewFull",
                value: function(e) {
                    "mobile" === this.deviceType && "live" === this.urlType ? e.className = e.className.replace("custom-view-full__mobile", "") : e.className = e.className.replace("custom-view-full", "")
                }
            }, {
                key: "toSystemFull",
                value: function(e) {
                    console.log("进行iframe系统全屏操作"),
                    e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullScreen ? e.webkitRequestFullScreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen()
                }
            }, {
                key: "exitSystemFull",
                value: function() {
                    console.log("进行网页全屏操作"),
                    document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
                }
            }, {
                key: "initWaterMark",
                value: function() {
                    var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                        var t, s, i, n, a, r, o, u, l, d, h, m, p;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.showWater) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (!this.wrapDom) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.next = 5,
                                    this.getWaterMark();
                                case 5:
                                    if (console.log("🚀 🚀 🚀 🚀 ~ options:", this.watermarkInfo),
                                    t = this.watermarkInfo,
                                    s = t.waterMarkHor,
                                    i = t.waterMarkVer,
                                    n = t.waterMarkShowContent,
                                    a = t.enableWatermark,
                                    r = t.employeeCode,
                                    o = t.userName,
                                    u = t.loginName,
                                    l = t.orgName,
                                    d = t.waterMarkTransparency,
                                    "true" === a) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 9:
                                    if (h = {
                                        EMPLOYEE_CODE: r,
                                        USER_NAME: o,
                                        LOGIN_NAME: u,
                                        ORG_NAME: l
                                    },
                                    m = n.split(",").reduce((function(e, t) {
                                        return h[t] && e.push(h[t]),
                                        e
                                    }
                                    ), []),
                                    p = {
                                        container: this.wrapDom,
                                        content: m,
                                        font: {
                                            color: "#000",
                                            fontSize: 16
                                        },
                                        offset: [0, 0],
                                        gap: [s, i],
                                        zIndex: 0,
                                        rotate: -20,
                                        globalAlpha: d / 100
                                    },
                                    !this.__watermark) {
                                        e.next = 16;
                                        break
                                    }
                                    return console.log("🚀 updateWatermark"),
                                    this.__watermark.updateWatermark(p),
                                    e.abrupt("return");
                                case 16:
                                    this.__watermark = new c.a(p);
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "getWaterMark",
                value: function() {
                    var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                        var t, s, i, n, a, r, o, c, l, d, h, m, p, f, v, g;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    u["a"].APIconfirmWatermark();
                                case 2:
                                    t = e.sent,
                                    s = t.bizResult,
                                    this.watermarkInfo = t.bizResult,
                                    i = "true" === s.enableWatermark,
                                    n = s.waterMarkShowObject ? s.waterMarkShowObject.split(",") : [],
                                    a = [],
                                    n.forEach((function(e) {
                                        "EMPLOYEE_CODE" === e ? a.push(s.employeeCode) : "USER_NAME" === e ? a.push(s.userName) : "LOGIN_NAME" === e && a.push(s.loginName)
                                    }
                                    )),
                                    a = a.join(" "),
                                    i && (r = a.length,
                                    o = "middle",
                                    c = "mobile" === this.deviceType,
                                    h = c ? s.waterMarkDensity / 100 : 1.1 - s.waterMarkDensity / 100,
                                    m = s.waterMarkTransparency / 100,
                                    p = 40 * r * h + 200 > document.documentElement.offsetWidth ? document.documentElement.offsetWidth - 150 : 40 * r * h + 200,
                                    f = .8 * p,
                                    l = (p - 100) / 1.7,
                                    d = (p - 100) / 1.5,
                                    40 * r * h + 150 > document.documentElement.offsetWidth && (o = "end"),
                                    v = '<svg xmlns="http://www.w3.org/2000/svg"  width="'.concat(p, 'px" height="').concat(f, "px\">\n                            <text \n                              x='").concat(l, "px'\n                              y='").concat(d, "px'\n                              text-anchor=\"").concat(o, '"\n                              stroke="#999"\n                              dominant-baseline="middle"\n                              stroke-opacity="0.25"\n                              fill="#999"\n                              transform="rotate(-45, 120 120)"\n                              style="font-size: 18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;opacity:').concat(m, '">\n                              ').concat(a, "\n                            </text>\n                          </svg>"),
                                    g = "data:image/svg+xml;base64,".concat(window.btoa(unescape(encodeURIComponent(v)))),
                                    this.base64Url = g);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "getDeviceType",
                value: function() {
                    var e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    return e ? "mobile" : "pc"
                }
            }], [{
                key: "getInstance",
                value: function() {
                    return e.instance || (e.instance = new e),
                    e.instance
                }
            }])
        }();
        Object(r["a"])(l, "instance", null),
        t["a"] = l.getInstance()
    },
    f78e: function(e, t, s) {},
    fae2: function(e, t, s) {
        "use strict";
        s.r(t);
        var i = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("a-spin", {
                staticClass: "course-learning",
                attrs: {
                    spinning: e.pageLoading
                }
            }, [s("CourseHeader", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isFullScreen && e.courseInfo,
                    expression: "!isFullScreen && courseInfo"
                }],
                staticClass: "course-learning-header",
                attrs: {
                    isPreview: e.isPreview,
                    courseInfo: e.courseInfo,
                    studyRate: e.studyRate,
                    courseSteps: e.courseSteps,
                    stepsQueue: e.stepsQueue,
                    showStudyRate: e.showStudyRate,
                    isOpenFromAdmin: e.isOpenFromAdmin,
                    aiLangOptions: e.aiLangOptions,
                    currentResourceAiLearnData: e.currentResourceAiLearnData,
                    currentLang: e.currentLang,
                    isPublished: e.isPublished,
                    translateLoading: e.translateLoading,
                    isTransLating: e.isTransLating,
                    fileSetting: e.fileSetting
                },
                on: {
                    handleStep: e.handleStep,
                    close: e.handleClose,
                    handleChangeLang: e.handleChangeLang,
                    nextStepByOrder: e.nextStepByOrder,
                    handleTranslateLang: e.handleTranslateLang,
                    handlePublish: e.handlePublish
                }
            }), s("main", {
                staticClass: "course-learning-main"
            }, [e.courseData.courseInfo ? s("div", {
                staticClass: "course-learning-main-course"
            }, [s("div", {
                staticClass: "course-learning-main-course-container"
            }, ["COURSE_PRETEST" !== e.learningStep || e.showMask ? e._e() : s("CoursePretest", {
                ref: "coursePretest",
                attrs: {
                    isLastStep: "COURSE_PRETEST" === e.lastStep,
                    isGetScoreStep: "COURSE_PRETEST" === e.stepToGetScore,
                    isFullScreen: e.isFullScreen,
                    courseId: e.courseData.courseId
                },
                on: {
                    toggleFullScreen: e.toggleFullScreen,
                    nextStep: e.nextStep,
                    nextStepByOrder: e.nextStepByOrder
                }
            }), "COURSE_COURSE_STUDY" === e.learningStep || e.showMask ? s("CoursePlay", {
                ref: "coursePlay",
                attrs: {
                    isLastStep: "COURSE_COURSE_STUDY" === e.lastStep,
                    isGetScoreStep: "COURSE_COURSE_STUDY" === e.stepToGetScore,
                    courseId: e.courseData.courseId,
                    providerCorpCode: e.courseData.courseInfo && e.courseData.courseInfo.providerCorpCode,
                    sourceId: e.courseData.courseInfo && e.courseData.courseInfo.sourceCourseId,
                    courseObj: e.courseInfo,
                    isPreview: e.isPreview,
                    currentStep: e.currentStep,
                    showAiLearn: e.showAiLearn,
                    captionEvent: e.captionEvent,
                    showMask: e.showMask,
                    isOpenFromAdmin: e.isOpenFromAdmin,
                    translateLoading: e.translateLoading
                },
                on: {
                    nextStep: e.nextStep,
                    updateStudyRate: e.updateStudyRate,
                    resourceChange: e.resourceChange
                }
            }, [e.showMask ? s("CourseMask", {
                attrs: {
                    courseData: e.courseData
                },
                on: {
                    enterCourse: e.enterCourse,
                    previewCourse: e.previewCourse,
                    refreshCourseData: e.refreshCourseData,
                    faceSignIn: e.initFaceSignIn
                }
            }) : e._e()], 1) : e._e(), "COURSE_EVALUATE" === e.learningStep ? s("CourseEvaluate", {
                ref: "courseEvaluate",
                attrs: {
                    isLastStep: "COURSE_EVALUATE" === e.lastStep,
                    isGetScoreStep: "COURSE_EVALUATE" === e.stepToGetScore,
                    isFullScreen: e.isFullScreen,
                    courseId: e.courseData.courseId
                },
                on: {
                    toggleFullScreen: e.toggleFullScreen,
                    nextStep: e.nextStep,
                    preStep: e.preStep,
                    nextStepByOrder: e.nextStepByOrder
                }
            }) : e._e(), "COURSE_EXAM" === e.learningStep ? s("CourseExam", {
                ref: "courseExam",
                attrs: {
                    isLastStep: "COURSE_EXAM" === e.lastStep,
                    isGetScoreStep: "COURSE_EXAM" === e.stepToGetScore,
                    isFullScreen: e.isFullScreen,
                    currentStep: e.currentStep,
                    courseId: e.courseData.courseId
                },
                on: {
                    toggleFullScreen: e.toggleFullScreen,
                    nextStep: e.examNextStep,
                    preStep: e.preStep,
                    nextStepByOrder: e.nextStepByOrder,
                    getTestError: e.init
                }
            }) : e._e()], 1), s("CourseMore", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showMask || !e.isFullScreen && "COURSE_COURSE_STUDY" === e.learningStep,
                    expression: "showMask || !isFullScreen && learningStep === 'COURSE_COURSE_STUDY'"
                }],
                ref: "CourseMoreRef",
                staticClass: "course-learning-main-more",
                attrs: {
                    courseData: e.courseData,
                    capIns: e.capIns,
                    isPreview: e.isPreview,
                    courseId: e.$route.query.courseId,
                    isOpenFromAdmin: e.isOpenFromAdmin,
                    showAiLearn: e.showAiLearn,
                    currentLangAiLearnData: e.currentLangAiLearnData,
                    currentResourceAiLearnData: e.currentResourceAiLearnData,
                    currentResourceInfo: e.currentResourceInfo,
                    currentSourceLang: e.currentSourceLang,
                    currentLang: e.currentLang,
                    translateLoading: e.translateLoading,
                    activeCaptionId: e.activeCaptionId,
                    fileSetting: e.fileSetting,
                    isPublished: e.isPublished,
                    isOpenStudyAssist: e.isOpenStudyAssist
                },
                on: {
                    tagResourceClick: e.tagResourceClick,
                    editAiLearn: e.onEditAiLearn,
                    seek: e.seek
                }
            })], 1) : e._e()]), e.openCarema ? s("CourseFaceRecognition", {
                attrs: {
                    visible: e.faceVisible,
                    courseId: e.courseData.courseId,
                    type: "signIn",
                    source: "COURSE_SIGN_IN"
                },
                on: {
                    closeCarema: e.closeCarema,
                    success: e.handleFaceSignInSuccess,
                    cancel: e.handleFaceSignInCancel
                }
            }) : s("a-modal", {
                attrs: {
                    destroyOnClose: "",
                    footer: null,
                    visible: e.faceVisible,
                    title: e.$t("课程签到")
                },
                on: {
                    cancel: function(t) {
                        e.faceVisible = !1
                    }
                }
            }, [s("div", {
                staticClass: "erweima-wrap"
            }, [s("div", {
                attrs: {
                    id: "erweima-img-index"
                }
            }), s("p", {
                staticStyle: {
                    "text-align": "center"
                }
            }, [e._v("\n        " + e._s(e.$t("请通过云端学习APP的“扫一扫”完成课程签到")) + "\n      ")])])])], 1)
        }
          , n = []
          , a = (s("8e6e"),
        s("28a5"),
        s("5df3"),
        s("20d6"),
        s("96cf"),
        s("3b8d"))
          , r = s("bd86")
          , o = (s("6762"),
        s("2fdb"),
        s("ac6a"),
        s("456d"),
        s("7514"),
        s("ed3b"))
          , c = s("f64c")
          , u = s("d044")
          , l = s.n(u)
          , d = s("cc7d")
          , h = s.n(d)
          , m = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "course-header"
            }, [s("div", {
                staticClass: "course-header-left"
            }, [s("div", {
                staticClass: "course-title"
            }, [s("div", {
                staticClass: "title",
                attrs: {
                    title: e.courseInfo.courseTitle
                }
            }, [e._v(e._s(e.courseInfo.courseTitle))]), s("div", {
                staticClass: "steps"
            }, e._l(e.courseSteps, (function(t, i) {
                return s("div", {
                    key: t.appType,
                    staticClass: "steps-item",
                    class: {
                        "is-learning": t.isLearning
                    }
                }, [s("div", {
                    staticClass: "steps-item-icon"
                }, [t.isComplete ? s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        "icon-class": "ok"
                    }
                }) : s("span", [e._v(e._s(i + 1))])], 1), s("div", {
                    staticClass: "steps-item-label",
                    class: {
                        "is-canenter": t.isCanEnter
                    },
                    on: {
                        click: function(s) {
                            return e.handleStep(t)
                        }
                    }
                }, [e._v("\n            " + e._s(t.appName) + "\n          ")]), s("div", {
                    staticClass: "steps-item-line"
                })])
            }
            )), 0)]), s("div", {
                staticClass: "course-infos"
            }, [s("div", {
                staticClass: "course-info"
            }, [s("span", {
                staticClass: "label"
            }, [e._v(e._s(e.$t("课程时长:")))]), s("span", {
                staticClass: "value"
            }, [e._v(e._s(e.courseInfo.courseDurationFormatted || "--"))])]), s("div", {
                staticClass: "course-info"
            }, [s("span", {
                staticClass: "label"
            }, [e._v(e._s(e.$t("学时:")))]), s("span", {
                staticClass: "value"
            }, [e._v(e._s(e.courseInfo.coursePeriod || "--"))])]), e.courseInfo.hideCourseScore ? e._e() : s("div", {
                staticClass: "course-info"
            }, [s("span", {
                staticClass: "label"
            }, [e._v(e._s(e.$t("学分:")))]), s("span", {
                staticClass: "value"
            }, [e._v(e._s(e.courseInfo.courseScore || "--"))])]), s("div", {
                staticClass: "course-info"
            }, [s("span", {
                staticClass: "label"
            }, [e._v(e._s(e.$t("结业条件:")))]), s("span", {
                staticClass: "value"
            }, [e._v(e._s(e.stepToGetScore || "--"))])]), e.fileSetting && e.fileSetting.courseCode.studentShow ? s("div", {
                staticClass: "course-info w300"
            }, [s("span", {
                staticClass: "label"
            }, [e._v(e._s(e.$t("课程编号:")))]), s("span", {
                staticClass: "value"
            }, [s("a-popover", {
                staticClass: "ml-4"
            }, [s("template", {
                slot: "content"
            }, [e._v("\n              " + e._s(e.courseInfo.courseCode || "--") + "\n            ")]), e._v("\n            " + e._s(e.courseInfo.courseCode || "--") + "\n          ")], 2)], 1)]) : e._e(), !e.isPreview && e.showStudyRate ? s("div", {
                staticClass: "course-info"
            }, [s("span", {
                staticClass: "label"
            }, [e._v(e._s(e.$t("学习进度:")))]), s("div", {
                staticClass: "value"
            }, [s("a-progress", {
                staticClass: "progress",
                attrs: {
                    percent: e.studyRate,
                    "show-info": !1,
                    strokeWidth: 12,
                    "stroke-color": {
                        "0%": "#0152D9",
                        "100%": "#92D1FF"
                    }
                }
            }), s("span", {
                staticClass: "value progress-value"
            }, [e._v(e._s(e.studyRate || 0) + "%")])], 1)]) : e._e()])]), s("div", {
                staticClass: "course-header-right"
            }, [e.showStudyRate && !e.isOpenFromAdmin ? ["COURSE_PRETEST" === e.courseSteps[0].appType ? s("a-button", {
                staticClass: "course-header-btn",
                staticStyle: {
                    "margin-left": "12px"
                },
                on: {
                    click: function(t) {
                        return e.handleStep(e.courseSteps[0])
                    }
                }
            }, [e._v(e._s(e.$t("上一步")))]) : e._e(), e.studyRate && 100 === e.studyRate && e.studyNextStep ? s("a-button", {
                staticClass: "course-header-btn",
                staticStyle: {
                    "margin-left": "12px"
                },
                on: {
                    click: function(t) {
                        return e.handleStep(e.studyNextStep)
                    }
                }
            }, [e._v(e._s(e.$t("下一步")))]) : e._e()] : e._e(), s("div", {
                staticClass: "course-header-admin-btns"
            }, [e.currentResourceAiLearnData && e.currentResourceAiLearnData.length > 0 && (e.isOpenFromAdmin || e.isPublished) ? s("a-dropdown", {
                on: {
                    visibleChange: e.visibleChange
                }
            }, [s("a-menu", {
                attrs: {
                    slot: "overlay",
                    overlayClassName: "translate-menu",
                    selectedKeys: [e.currentLang]
                },
                on: {
                    click: e.handleClickMenuItem
                },
                slot: "overlay"
            }, e._l(e.aiLangOptions, (function(t) {
                return s("a-menu-item", {
                    key: t.value,
                    staticClass: "menu-item"
                }, [s("div", {
                    staticClass: "translate-menu-item"
                }, [s("div", {
                    staticClass: "translate-menu-item-label"
                }, [s("span", {
                    staticClass: "ml-4"
                }, [e._v(e._s(t.label))]), t.isSourceLang ? s("span", {
                    staticClass: "source-text"
                }, [e._v(e._s(e.$t("(源语言)")))]) : e._e()]), t.isExist ? s("div", {
                    staticClass: "translate-menu-item-icon"
                }, [s("svg-icon", {
                    staticStyle: {
                        "font-size": "16px"
                    },
                    attrs: {
                        "use-svg": "",
                        "icon-class": "color-success"
                    }
                })], 1) : e._e()])])
            }
            )), 1), s("a-button", {
                staticStyle: {
                    "margin-right": "12px"
                },
                attrs: {
                    loading: e.translateLoading || e.isTransLating
                }
            }, [s("svg-icon", {
                staticStyle: {
                    "font-size": "18px"
                },
                attrs: {
                    "use-svg": "",
                    "icon-class": "translate"
                }
            }), s("span", {
                staticClass: "ml-4 mr-4"
            }, [e._v(e._s(e.$t("翻译")))]), s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    "icon-class": "arrow-filled",
                    "class-name": "icon-arrow " + (e.visible ? "visible" : "")
                }
            })], 1)], 1) : e._e(), e.showFabuAndHuishouBtn ? s("a-button", {
                staticClass: "course-header-btn",
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.handlePublish
                }
            }, [s("svg-icon", {
                staticStyle: {
                    "font-size": "18px",
                    "margin-right": "4px"
                },
                attrs: {
                    "use-svg": "",
                    "icon-class": "sending"
                }
            }), s("span", [e._v(e._s(e.isPublished ? e.$t("回收") : e.$t("发布")))])], 1) : e._e()], 1), e.isOpenFromAdmin ? e._e() : s("a-button", {
                staticClass: "course-header-btn",
                staticStyle: {
                    "margin-left": "12px"
                },
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.handleClose
                }
            }, [e._v(e._s(e.$t("关闭")))])], 2)])
        }
          , p = []
          , f = (s("c5f6"),
        s("c00a"))
          , v = {
            components: {
                SvgIcon: f["a"]
            },
            props: {
                showStudyRate: {
                    type: Boolean,
                    default: !1
                },
                stepsQueue: {
                    type: Object,
                    default: function() {}
                },
                courseInfo: {
                    type: Object,
                    default: function() {}
                },
                studyRate: {
                    type: Number,
                    default: 0
                },
                isPreview: {
                    type: Boolean,
                    default: !1
                },
                courseSteps: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                isOpenFromAdmin: {
                    type: Boolean,
                    default: !1
                },
                aiLangOptions: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                currentResourceAiLearnData: {
                    type: Array,
                    default: function() {
                        return null
                    }
                },
                currentLang: {
                    type: String,
                    default: ""
                },
                isPublished: {
                    type: Boolean,
                    default: !1
                },
                translateLoading: {
                    type: Boolean,
                    default: !1
                },
                isTransLating: {
                    type: Boolean,
                    default: !1
                },
                fileSetting: {
                    type: Object || null,
                    default: function() {
                        return null
                    }
                }
            },
            computed: {
                stepToGetScore: function() {
                    var e;
                    return (null === (e = this.courseInfo) || void 0 === e ? void 0 : e.stepToGetScore) && this.stepsQueue[this.courseInfo.stepToGetScore] || "--"
                },
                showFabuAndHuishouBtn: function() {
                    return !(!this.isOpenFromAdmin || !this.courseInfo.providerCorpCode || this.courseInfo.providerCorpCode !== this.courseInfo.createCorpCode || this.courseInfo.providerCorpCode !== (window.$cookies.get("corp_code") || window.$cookies.get("corpCode")))
                },
                studyNextStep: function() {
                    var e = this.courseSteps.findIndex((function(e) {
                        return "COURSE_COURSE_STUDY" === e.appType
                    }
                    ));
                    return e + 1 < this.courseSteps.length ? this.courseSteps[e + 1] : null
                }
            },
            data: function() {
                return {
                    visible: !1
                }
            },
            methods: {
                handleClose: function() {
                    this.$emit("close")
                },
                handlePublish: function() {
                    this.$emit("handlePublish")
                },
                handleStep: function(e) {
                    this.$emit("handleStep", e)
                },
                handleClickMenuItem: function(e) {
                    var t = e.key
                      , s = this.aiLangOptions.find((function(e) {
                        return e.value === t
                    }
                    ));
                    s.isExist ? this.$emit("handleChangeLang", t, s) : this.$emit("handleTranslateLang", t, s)
                },
                visibleChange: function(e) {
                    this.visible = e
                }
            }
        }
          , g = v
          , y = (s("6c58"),
        s("2877"))
          , C = Object(y["a"])(g, m, p, !1, null, "17100d64", null)
          , I = C.exports
          , A = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("a-spin", {
                staticClass: "player",
                attrs: {
                    spinning: e.maskLoading
                }
            }, [s("img", {
                staticClass: "player-cover",
                attrs: {
                    src: e.courseInfo.courseImage,
                    alt: ""
                }
            }), s("div", {
                staticClass: "base-player"
            }, [s("div", {
                staticClass: "base-player-mask"
            }, [s("div", {
                staticClass: "base-player-mask-btn-container"
            }, [e.courseData.hasTouristUser ? s("a-button", {
                staticClass: "ml-4 mr-4",
                attrs: {
                    type: "primary"
                }
            }, [e._v("\n          " + e._s(e.$t("受限")) + "\n        ")]) : e.courseData.isSelected ? [e.courseData.courseStudyRecord && e.courseData.courseStudyRecord.limited ? s("a-button", {
                staticClass: "ml-4 mr-4",
                attrs: {
                    type: "primary"
                }
            }, [e._v("\n            " + e._s(e.$t("受限")) + "\n          ")]) : s("a-button", {
                staticClass: "ml-4 mr-4",
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(t) {
                        return e.handleBtn("study")
                    }
                }
            }, [e._v(e._s(e.$t("进入学习")))])] : ["ACTIVE" === e.courseInfo.courseStatus ? [!e.courseInfo.needApproval || e.p && "CURRICULUM" === e.p ? s("a-button", {
                staticClass: "ml-4 mr-4",
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(t) {
                        return e.handleBtn("select")
                    }
                }
            }, [e._v("\n              " + e._s(e.$t("选择课程")) + "\n            ")]) : ["APPLYING" === e.courseInfo.selectStatus ? s("a-button", {
                staticClass: "ml-4 mr-4",
                attrs: {
                    type: "primary"
                }
            }, [e._v("\n                " + e._s(e.$t("申请中")) + "\n              ")]) : "REPULSE" === e.courseInfo.selectStatus ? s("a-button", {
                staticClass: "ml-4 mr-4",
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(t) {
                        return e.handleBtn("reapply")
                    }
                }
            }, [e._v("\n                " + e._s(e.$t("申请失败")) + "\n              ")]) : s("a-button", {
                staticClass: "ml-4 mr-4",
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(t) {
                        return e.handleBtn("apply")
                    }
                }
            }, [e._v("\n                " + e._s(e.$t("申请课程")) + "\n              ")])]] : e._e(), "DOWNLOAD" == e.courseInfo.courseStandard ? [s("a-button", {
                staticClass: "ml-4 mr-4",
                attrs: {
                    type: "primary"
                }
            }, [e._v(e._s(e.$t("下载预览")))])] : e.courseStandardList.includes(e.courseInfo.courseStandard) && e.courseData.preview ? [s("a-button", {
                staticClass: "ml-4 mr-4",
                on: {
                    click: function(t) {
                        return e.handleBtn("preview")
                    }
                }
            }, [e._v(e._s(e.$t("预览课程")))])] : e._e()]], 2)]), s("a-modal", {
                attrs: {
                    wrapClassName: "apaas-confirm new-modal-style",
                    title: e.$t("制定学习计划"),
                    visible: e.visible,
                    okText: e.$t("确定"),
                    cancelText: e.$t("取消"),
                    "confirm-loading": e.confirmLoading
                },
                on: {
                    ok: e.handleOk,
                    cancel: function(t) {
                        e.visible = !1
                    }
                }
            }, [s("div", [s("a-radio-group", {
                model: {
                    value: e.timeLimit,
                    callback: function(t) {
                        e.timeLimit = t
                    },
                    expression: "timeLimit"
                }
            }, [e.hideNoLimit ? e._e() : s("div", {
                staticClass: "mb-16"
            }, [s("a-radio", {
                attrs: {
                    value: "noLimit"
                }
            }, [e._v(e._s(e.$t("不限学习时间")))])], 1), s("div", {
                staticClass: "mb-16"
            }, [s("a-radio", {
                attrs: {
                    value: "plan"
                }
            }, [e._v(e._s(e.$t("制定学习计划的起始和截止日期")))])], 1)]), s("a-range-picker", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "plan" === e.timeLimit,
                    expression: "timeLimit === 'plan'"
                }],
                attrs: {
                    allowClear: !1,
                    dropdownClassName: "apaas-confirm",
                    "value-format": "YYYY-MM-DD"
                },
                model: {
                    value: e.timeOption,
                    callback: function(t) {
                        e.timeOption = t
                    },
                    expression: "timeOption"
                }
            })], 1)]), s("a-modal", {
                attrs: {
                    title: e.$t("提示"),
                    visible: e.reApplyVisible,
                    okText: e.$t("再次申请"),
                    cancelText: e.$t("取消"),
                    "confirm-loading": e.reApplyConfirmLoading
                },
                on: {
                    ok: e.handleReApplyOk,
                    cancel: function(t) {
                        e.reApplyVisible = !1
                    }
                }
            }, [s("div", {
                staticStyle: {
                    height: "300px"
                }
            }, [s("div", [e._v(e._s(e.$t("审批时间：")) + e._s(e.reApplyOption.createTime))]), s("div", [e._v(e._s(e.$t("审批人：")) + e._s(e.reApplyOption.userName))]), s("div", [e._v(e._s(e.$t("申请意见：")) + e._s(e.reApplyOption.reason))])])])], 1)])
        }
          , S = []
          , T = s("7618")
          , w = (s("4328"),
        s("b775"));
        function b(e) {
            return Object(w["a"])({
                url: "/els/html/guangsu/course/courseInfo",
                method: "post",
                data: e
            })
        }
        function _(e) {
            return Object(w["a"])({
                url: "/els/html/subscribe/courseCategory.subscribe.do",
                method: "get",
                params: e
            })
        }
        function x(e) {
            return Object(w["a"])({
                url: "/els/html/subscribe/courseCategory.unSubscribe.do",
                method: "get",
                params: e
            })
        }
        function E(e) {
            return Object(w["a"])({
                url: "/els/html/guangsu/coursebasic/getSubDiscussPage?courseId=".concat(e.courseId, "&page.pageNo=").concat(e.page.pageNo, "&page.pageSize=").concat(e.page.pageSize, "&page.id=").concat(e.page.id),
                method: "get"
            })
        }
        function k(e) {
            return Object(w["a"])({
                url: "/els/html/guangsu/course/listCourseInfoOfTeacherRel",
                method: "get",
                params: e
            })
        }
        function O(e) {
            return Object(w["a"])({
                url: "/els/html/courseCenter/courseCenter.checkUserCanViewCourseDetail.do",
                method: "get",
                params: e
            })
        }
        function R(e) {
            return Object(w["a"])({
                url: "/els/html/teacher/teacher.checkTeacher.do",
                method: "get",
                params: e
            })
        }
        function D(e) {
            return Object(w["a"])({
                url: "/els/html/course/course.updateCertificateInformation.do",
                method: "get",
                params: e
            })
        }
        function L(e) {
            return Object(w["a"])({
                url: "/els/html/courseCenter/courseCenter.courseIsFee.do",
                method: "get",
                params: e
            })
        }
        function P(e) {
            return Object(w["a"])({
                url: "/els/html/courseCenter/courseCenter.loadCourseSelect.do",
                method: "get",
                params: e
            })
        }
        function N(e) {
            return Object(w["a"])({
                url: "/els/html/courseCenter/courseCenter.getCourseUserProcessInstanceLog.do",
                method: "get",
                params: e
            })
        }
        function $(e) {
            return Object(w["a"])({
                url: "/els/html/coursestudyrecord/coursestudyrecord.checkHasCourseStudyRecord.do",
                method: "get",
                params: e
            })
        }
        function U(e) {
            return Object(w["a"])({
                url: "/els/html/elective/elective.studyPlanLimit.do",
                method: "get",
                params: e
            })
        }
        function M(e) {
            return Object(w["a"])({
                url: "/els/html/gloablapproval/gloablapproval.checkUserCanEnableProcess.do",
                method: "get",
                params: e
            })
        }
        function j(e) {
            return Object(w["a"])({
                url: "/els/html/guangsu/courseCenter/chooseCourse",
                method: "get",
                params: e
            })
        }
        function F(e) {
            return Object(w["a"])({
                url: "/els/html/courseCenter/courseCenter.applyCourse.do",
                method: "get",
                params: e
            })
        }
        function B(e) {
            return Object(w["a"])({
                url: "/els/html/studyCourse/studyCourse.enableSignIn.do",
                method: "get",
                params: e
            })
        }
        function V(e) {
            return Object(w["a"])({
                url: "/els/html/studyCourse/studyCourse.saveStudyLog.do",
                method: "get",
                params: e
            })
        }
        function q(e) {
            return Object(w["a"])({
                url: "/els/html/studyCourse/studyCourse.checkUserScoInitComplete.do",
                method: "get",
                params: e
            })
        }
        function Q(e) {
            return Object(w["a"])({
                url: "/els/html/guangsu/studyCourse/enterCourse",
                method: "get",
                params: e
            })
        }
        function z(e) {
            return Object(w["a"])({
                url: "/els/html/studyCourse/studyCourse.addUserToEmsExam.do",
                method: "get",
                params: e
            })
        }
        function G(e, t) {
            return Object(w["a"])({
                url: "/els/html/studyCourse/studyCourse.savePretest.do",
                method: "post",
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                params: e,
                data: t
            })
        }
        function J(e) {
            return Object(w["a"])({
                url: "/els/html/guangsu/studyCourse/viewPretestPage",
                method: "get",
                params: e
            })
        }
        function H(e) {
            return Object(w["a"])({
                url: "/els/html/guangsu/studyCourse/viewCourseExamPage",
                method: "get",
                params: e
            })
        }
        function W(e) {
            return Object(w["a"])({
                url: "/els/html/guangsu/studyCourse/saveOnLineCourseStar",
                method: "get",
                params: e
            })
        }
        function K(e, t) {
            return Object(w["a"])({
                url: "/els/html/studyCourse/studyCourse.saveCourseEvaluate.do",
                method: "post",
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                params: e,
                data: t
            })
        }
        function Y(e, t) {
            return Object(w["a"])({
                url: "/els/html/studyCourse/studyCourse.saveCourseExam.do",
                method: "post",
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                params: e,
                data: t
            })
        }
        function Z(e) {
            return Object(w["a"])({
                url: "/els/html/discussAndNote/discussAndNote.batchDeleteDiscussJson.do",
                method: "get",
                params: e
            })
        }
        function X(e) {
            return Object(w["a"])({
                url: "/els/html/guangsu/courseStudyItem/isCourseCheat",
                method: "get",
                params: e
            })
        }
        function ee(e) {
            return Object(w["a"])({
                url: "/els/html/studyCourse/studyCourse.submitEmsExamTips.do",
                method: "get",
                params: e
            })
        }
        function te(e) {
            return Object(w["a"])({
                url: "/app-tag/amis/tagManager/searchTagByCourseSource.do",
                method: "get",
                params: e
            })
        }
        function se(e) {
            return Object(w["a"])({
                url: "/els/html/studyAssisst/listResultByReferId.do",
                method: "get",
                params: e
            })
        }
        function ie(e) {
            return Object(w["a"])({
                url: e,
                method: "get"
            })
        }
        function ne(e) {
            return Object(w["a"])({
                url: "/srt/tingwu/editTingWuResult",
                method: "post",
                data: e
            })
        }
        function ae(e) {
            return Object(w["a"])({
                url: "/els/html/studyAssisst/publish.do",
                method: "post",
                data: e
            })
        }
        function re(e) {
            return Object(w["a"])({
                url: "/els/html/studyAssisst/getCoursePublish",
                method: "get",
                params: e
            })
        }
        function oe(e) {
            return Object(w["a"])({
                url: "/els/html/studyAssisst/tingwuTranslate.do",
                method: "get",
                params: e
            })
        }
        function ce(e) {
            return Object(w["a"])({
                url: "/gpt/chat/deleteVectorsAllLanguage",
                method: "post",
                data: e
            })
        }
        function ue(e) {
            return Object(w["a"])({
                url: "/els/html/studyAssisst/AIBXCourseFeedBack.do",
                method: "post",
                data: e
            })
        }
        var le = s("8e44")
          , de = {
            components: {},
            props: {
                courseData: {
                    type: Object,
                    default: function() {}
                },
                courseId: {
                    type: String,
                    default: ""
                },
                providerCorpCode: {
                    type: String,
                    default: ""
                },
                sourceId: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                p: function() {
                    return this.$route.query.p
                },
                courseInfo: function() {
                    return this.courseData.courseInfo || {}
                }
            },
            data: function() {
                return {
                    maskLoading: !1,
                    language: "zh_CN",
                    open: !0,
                    courseStandardList: ["TWOSCREEN", "THREESCREEN", "ONESCREEN", "ONLINEPACKAGE", "OLINEURL", "ONLINEDOC", "KUAIKE", "CHAPTEROLINEURL", "ONLINEVIDEOCOURSE"],
                    applyType: "",
                    visible: !1,
                    confirmLoading: !1,
                    timeOption: [],
                    timeLimit: "noLimit",
                    reApplyOption: {},
                    reApplyVisible: !1,
                    reApplyConfirmLoading: !1,
                    isSignInFlag: !1,
                    faceVisible: !1,
                    userId: "",
                    qrcode: null,
                    hideNoLimit: !1
                }
            },
            mounted: function() {
                var e = this;
                this.maskLoading = !0,
                le["c"].getUserInfo().then((function(t) {
                    e.maskLoading = !1,
                    e.userId = t.bizResult.userId
                }
                )).catch((function() {
                    e.maskLoading = !1
                }
                ))
            },
            methods: {
                handleOk: function() {
                    var e = this;
                    if (this.hideNoLimit) {
                        if ("plan" !== this.timeLimit)
                            return void c["a"].error(this.$t("请选择学习计划的起始和截止日期"));
                        if (!this.timeOption || 2 !== this.timeOption.length || !this.timeOption[0] || !this.timeOption[1])
                            return void c["a"].error(this.$t("请填写有效的起始和截止日期"))
                    } else if ("plan" === this.timeLimit && (!this.timeOption || 2 !== this.timeOption.length || !this.timeOption[0] || !this.timeOption[1]))
                        return void c["a"].error(this.$t("请填写有效的起始和截止日期"));
                    this.confirmLoading = !0,
                    this.courseData.needChangeMethod ? D().then((function() {
                        e.chooseCourse()
                    }
                    )) : this.chooseCourse()
                },
                handleReApplyOk: function() {
                    var e = this;
                    this.reApplyConfirmLoading = !0,
                    $({
                        courseId: this.courseData.courseId
                    }).then((function(t) {
                        e.reApplyConfirmLoading = !1,
                        e.reApplyVisible = !1,
                        t && t.success ? U().then((function(t) {
                            if ("boolean" != typeof t && data.indexOf(",") > 0) {
                                var s = t.split(",");
                                c["a"].error(e.$t("您当前的自选课程已超过") + s[1] + e.$t("门，请全部学习完成以后再继续选课"))
                            } else
                                t ? "reapply" === type && F({
                                    courseId: e.courseData.courseId,
                                    timeLimit: "noLimit"
                                }).then((function(e) {
                                    if (e && e.message)
                                        return c["a"].error(e.message),
                                        location.reload(!0),
                                        !1;
                                    e.success ? (c["a"].success("申请成功！"),
                                    location.reload(!0)) : c["a"].error(e.message)
                                }
                                )) : M({
                                    appCode: "up_my_course",
                                    processType: "ELS_COURSE_APPLY"
                                }).then((function(t) {
                                    t.success || 1 != res2.courseInfo.needApproval ? P({
                                        courseId: e.courseData.courseId,
                                        courseType: "NEW_COURSE_CENTER"
                                    }).then((function(t) {
                                        t && t.success && (e.timeOption = [t.jsonObj.startDate, t.jsonObj.endDate],
                                        e.visible = !0)
                                    }
                                    )) : c["a"].error("课程审核流程未定义，您当前无法申请。您可以联系管理员先创建审核流再申请学习。")
                                }
                                ))
                        }
                        )) : c["a"].error("该门课程您已经自选过了!")
                    }
                    ))
                },
                chooseCourse: function() {
                    var e = this;
                    "select" === this.applyType ? (this.maskLoading = !0,
                    j({
                        courseId: this.courseData.courseId,
                        timeLimit: this.timeLimit,
                        startDate: this.timeOption[0],
                        endDate: this.timeOption[1]
                    }).then((function(t) {
                        e.maskLoading = !1,
                        e.visible = !1,
                        e.confirmLoading = !1,
                        t.success ? t && t.jsonObj && "true" === t.jsonObj.finishNewerTask ? (c["a"].success("恭喜您已完成新手任务，奖励2个光华币！"),
                        e.goStudy()) : (c["a"].success(t.message || t.msg),
                        e.goStudy()) : c["a"].error(t.message)
                    }
                    )).catch((function() {
                        e.maskLoading = !1
                    }
                    ))) : "apply" !== this.applyType && "reapply" !== this.applyType || (this.maskLoading = !0,
                    F({
                        courseId: this.courseData.courseId,
                        timeLimit: "noLimit"
                    }).then((function(t) {
                        if (e.maskLoading = !1,
                        t && t.message)
                            return c["a"].error(t.message),
                            location.reload(!0),
                            !1;
                        t.success ? (c["a"].success("申请成功！"),
                        location.reload(!0)) : (c["a"].error("申请失败！"),
                        location.reload(!0))
                    }
                    )).catch((function() {
                        e.maskLoading = !1
                    }
                    )))
                },
                goStudy: function() {
                    var e = this;
                    if (this.$emit("refreshCourseData"),
                    this.courseData.courseStudyRecord && this.courseData.courseStudyRecord.getScore)
                        this.canGoStudy();
                    else if (this.courseData.previewLimit) {
                        if (!this.courseData.isSelected)
                            return location.reload(),
                            !1;
                        "DOWNLOAD" == this.courseInfo.courseStandard || this.courseStandardList.includes(this.courseInfo.courseStandard) && this.courseData.preview ? o["a"].confirm({
                            class: "apaas-confirm",
                            title: this.$t("抱歉，您无法学习该课程"),
                            content: "管理员设置学员单日可获得学分上限为".concat(this.courseData.userStudyRecord && this.courseData.userStudyRecord.dayScoreLimit || 0, "学分。您今日已获得").concat(this.courseData.userStudyRecord && this.courseData.userStudyRecord.daySumScore || 0, "学分，本课程的学分为").concat(this.courseData.userStudyRecord && this.courseData.userStudyRecord.shouldGetScore || 0, "。相加后将超过单日学分上限。请选择其他课程进行学习或者继续预览当前课程。"),
                            okText: this.$t("确定"),
                            cancelText: this.$t("取消"),
                            onOk: function() {
                                e.previewCourse()
                            },
                            onCancel: function() {}
                        }) : o["a"].info({
                            class: "apaas-confirm",
                            title: this.$t("抱歉，您无法学习该课程"),
                            content: "管理员设置学员单日可获得学分上限为".concat(this.courseData.userStudyRecord && this.courseData.userStudyRecord.dayScoreLimit || 0, "学分。您今日已获得").concat(this.courseData.userStudyRecord && this.courseData.userStudyRecord.daySumScore || 0, "学分，本课程的学分为").concat(this.courseData.userStudyRecord && this.courseData.userStudyRecord.shouldGetScore || 0, "。相加后将超过单日学分上限。请选择其他课程进行学习或者继续预览当前课程。"),
                            okText: this.$t("知道了")
                        })
                    } else
                        this.canGoStudy()
                },
                canGoStudy: function() {
                    var e = this;
                    this.maskLoading = !0,
                    B().then((function(t) {
                        e.maskLoading = !1,
                        t && !e.isSignInFlag ? 1 === t ? e.$emit("faceSignIn") : 2 === t && e.initSignIn() : e.checkUserCanEnterCourse()
                    }
                    )).catch((function() {
                        e.maskLoading = !1
                    }
                    ))
                },
                initSignIn: function() {
                    var e = this;
                    o["a"].confirm({
                        class: "apaas-confirm",
                        title: this.$t("课程签到"),
                        content: this.$t("是否签到？"),
                        okText: this.$t("签到"),
                        cancelText: this.$t("退出签到"),
                        onOk: function() {
                            V({
                                courseId: e.courseData.courseId,
                                eventType: "COURSE_SIGN_IN"
                            }).then((function(t) {
                                t ? (e.isSignInFlag = !0,
                                c["a"].success(e.$t("签到成功")),
                                e.checkUserCanEnterCourse()) : (e.isSignInFlag = !1,
                                c["a"].error(e.$t("签到失败")),
                                location.reload(!0))
                            }
                            ))
                        },
                        onCancel: function() {
                            e.isSignInFlag = !1
                        }
                    })
                },
                checkUserCanEnterCourse: function() {
                    var e = this;
                    this.maskLoading = !0,
                    q({
                        courseId: this.courseData.courseId
                    }).then((function(t) {
                        e.maskLoading = !1,
                        t && t.success ? e.$emit("enterCourse") : c["a"].error(t.message)
                    }
                    )).catch((function() {
                        e.maskLoading = !1
                    }
                    ))
                },
                randomWord: function(e, t, s) {
                    var i = ""
                      , n = t
                      , a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                    e && (n = Math.round(Math.random() * (s - t)) + t);
                    for (var r = 0; r < n; r++) {
                        var o = Math.round(Math.random() * (a.length - 1));
                        i += a[o]
                    }
                    return i
                },
                webSK: function() {
                    var e, t, s = this, i = this.randomWord(!1, 10), n = window.location.origin, a = this.randomWord(!1, 32);
                    e = new h.a(n + "/biz-oim/webSocket/handler?deviceId=" + a);
                    var r = window.$cookies.get("_local");
                    e.onopen = function(n) {
                        var a = '{"code" : 1, "params" : {"qrCode" : "' + i + '", "oldQrCode" : "", "local" : "' + r + '", "type" : "QR_STUDYCOURSE_SIGN", "userId" :"' + s.userId + '" }}';
                        e.send(a),
                        e.onmessage = function(e) {
                            console.log("接收客户端返回信息");
                            var i = JSON.parse(e.data);
                            console.log(i),
                            1 == i.code ? (t = i.bizResult + "&userId=" + s.userId,
                            console.log("erweima", t),
                            s.qrcode.makeCode(t),
                            document.getElementById("erweima-img").setAttribute("title", "")) : 2 == i.code || (6 == i.code ? (s.isSignInFlag = !1,
                            c["a"].error(s.$t("签到失败"))) : 7 == i.code ? (console.log("扫码成功"),
                            s.isSignInFlag = !0,
                            c["a"].success(s.$t("签到成功")),
                            s.checkUserCanEnterCourse(),
                            s.faceVisible = !1) : 4 == i.code && !0)
                        }
                        ,
                        e.onclose = function(e) {}
                        ,
                        e.onerror = function(e) {
                            c["a"].error("WebSocket连接发生错误，请刷新页面！")
                        }
                    }
                },
                previewCourse: function() {
                    var e = this;
                    this.maskLoading = !0,
                    O({
                        courseId: this.courseData.courseId,
                        processType: this.$route.query.processType
                    }).then((function(t) {
                        e.maskLoading = !1,
                        t && t.success ? o["a"].confirm({
                            class: "apaas-confirm",
                            title: e.$t("提示"),
                            content: e.$t("您正在预览课程，预览内容不计入学习进度。"),
                            okText: e.$t("确定"),
                            cancelText: e.$t("取消"),
                            onOk: function() {
                                var t = e.courseInfo.courseStandard;
                                "ONLINEDOC" == t || "DOWNLOAD" === t || "ONLINEVIDEOCOURSE" === t && e.$emit("previewCourse")
                            },
                            onCancel: function() {}
                        }) : c["a"].error("此课程未对您开放，不可以预览课程内容！")
                    }
                    ))
                },
                handleBtn: function(e) {
                    var t = this;
                    switch (e) {
                    case "reapply":
                    case "apply":
                    case "select":
                        this.courseData.needChangeMethod ? D().then((function() {
                            t.applyCourse(e)
                        }
                        )) : this.applyCourse(e);
                        break;
                    case "preview":
                        this.previewCourse();
                        break;
                    case "study":
                        this.goStudy();
                        break;
                    default:
                        break
                    }
                },
                applyCourse: function(e) {
                    var t = this;
                    this.applyType = e,
                    this.maskLoading = !0,
                    O({
                        courseId: this.courseData.courseId
                    }).then((function(s) {
                        t.maskLoading = !1,
                        s && s.success && (null == s.status || "VIP_COURSE_NO_AUTH" !== s.status) ? L({
                            courseId: t.courseData.courseId
                        }).then((function(s) {
                            if (1 == s.balanceNotFull)
                                c["a"].error("对不起，您的余额不足！");
                            else if (1 != s.courseIsFee && "true" != s.courseIsFee || !s.courseInfo || "STUDY_CHARGE" != s.courseInfo.currencyType)
                                "REPULSE" != s.courseInfo.selectStatus || 0 == s.courseInfo.needApproval ? (t.maskLoading = !0,
                                $({
                                    courseId: t.courseData.courseId
                                }).then((function(s) {
                                    t.maskLoading = !1,
                                    s && s.success ? (t.maskLoading = !0,
                                    U().then((function(s) {
                                        var i = !1
                                          , n = !1;
                                        "boolean" === typeof s ? i = !s : s && "object" === Object(T["a"])(s) && (i = !!s.enablePlanLimit,
                                        n = !!s.enablePlanLimitRequire),
                                        t.maskLoading = !1,
                                        i ? (t.timeLimit = "noLimit",
                                        t.timeOption = [],
                                        t.hideNoLimit = !!n,
                                        t.maskLoading = !0,
                                        P({
                                            courseId: t.courseData.courseId,
                                            courseType: "NEW_COURSE_CENTER"
                                        }).then((function(e) {
                                            t.maskLoading = !1,
                                            e && e.success ? (t.timeOption = [e.jsonObj.startDate, e.jsonObj.endDate],
                                            t.hideNoLimit && (t.timeLimit = "plan"),
                                            t.visible = !0) : c["a"].error(e.message)
                                        }
                                        ))) : "select" === e ? (t.maskLoading = !0,
                                        j({
                                            courseId: t.courseData.courseId,
                                            timeLimit: "noLimit"
                                        }).then((function(e) {
                                            t.maskLoading = !1,
                                            e && e.success ? (e.jsonObj && "true" === e.jsonObj.finishNewerTask && c["a"].success("恭喜您已完成新手任务，奖励2个光华币！"),
                                            t.goStudy()) : c["a"].error(e.message)
                                        }
                                        ))) : "apply" !== e && "reapply" !== e || (t.maskLoading = !0,
                                        F({
                                            courseId: t.courseData.courseId,
                                            timeLimit: "noLimit"
                                        }).then((function(e) {
                                            if (t.maskLoading = !1,
                                            e && e.message)
                                                return c["a"].error(e.message),
                                                location.reload(!0),
                                                !1;
                                            e.success ? (c["a"].success("申请成功！"),
                                            location.reload(!0)) : c["a"].error(e.message)
                                        }
                                        )))
                                    }
                                    ))) : c["a"].error("该门课程您已经自选过了!")
                                }
                                ))) : (t.maskLoading = !0,
                                N({
                                    courseId: t.courseData.courseId
                                }).then((function(e) {
                                    t.maskLoading = !1,
                                    e && e.success ? (t.reApplyOption = Object.assign({}, e.jsonObj),
                                    t.reApplyVisible = !0) : c["a"].error(e.message)
                                }
                                )));
                            else {
                                var i = 0 == s.courseInfo.currencyCount ? 0 : s.courseInfo.currencyCount.toFixed(2);
                                o["a"].confirm({
                                    class: "apaas-confirm",
                                    title: t.$t("提示"),
                                    content: "选择该课程需支付".concat(i).concat(s.currency, "，确定要选择吗？"),
                                    okText: t.$t("确定"),
                                    cancelText: t.$t("取消"),
                                    onOk: function() {
                                        P({
                                            courseId: t.courseData.courseId,
                                            courseType: "NEW_COURSE_CENTER"
                                        }).then((function(e) {
                                            e && e.success ? (t.timeOption = [e.jsonObj.startDate, e.jsonObj.endDate],
                                            t.visible = !0) : c["a"].error(e.message)
                                        }
                                        ))
                                    },
                                    onCancel: function() {}
                                })
                            }
                        }
                        )) : s && s.success && s.status && "VIP_COURSE_NO_AUTH" === s.status ? o["a"].confirm({
                            class: "apaas-confirm",
                            title: t.$t("提示"),
                            content: t.$t("此课程为会员课程，普通用户暂无权限查看"),
                            okText: t.$t("前往升级"),
                            cancelText: t.$t("取消"),
                            onOk: function() {
                                window.open("/els/html/course/login.updateRegister.do", "_update_register")
                            },
                            onCancel: function() {}
                        }) : c["a"].error(s.message)
                    }
                    ))
                }
            }
        }
          , he = de
          , me = (s("9768"),
        s("57c0"),
        Object(y["a"])(he, A, S, !1, null, "5a492620", null))
          , pe = me.exports
          , fe = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("a-spin", {
                attrs: {
                    spinning: e.loading
                }
            }, [s("div", {
                staticClass: "course-pretest",
                class: {
                    fullscreen: e.isFullScreen,
                    "is-view": e.isView
                }
            }, [s("div", {
                staticClass: "course-pretest-header"
            }, [s("div", {
                staticClass: "course-pretest-title"
            }, [s("span", [e._v(e._s(e.$t("课前测试")))]), s("div", {
                staticClass: "course-pretest-fullscreen",
                on: {
                    click: e.toggleFullScreen
                }
            }, [e.isFullScreen ? [s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    "icon-class": "fanhui",
                    "class-name": "full"
                }
            }), s("span", {
                staticClass: "full-text"
            }, [e._v(e._s(e.$t("返回")))])] : [s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    "icon-class": "quanping",
                    "class-name": "full"
                }
            }), s("span", {
                staticClass: "full-text"
            }, [e._v(e._s(e.$t("全屏")))])]], 2)]), s("div", {
                staticClass: "course-pretest-desc"
            }, [s("span", {
                staticClass: "course-pretest-tip"
            }, [e._v(e._s(e.$t("说明：课前测试是测试您对课程内容的初期掌握情况，带着问题参与学习，测试结果不计入考试成绩。")))])])]), s("div", {
                staticClass: "course-pretest-content"
            }, [s("CourseTest", {
                ref: "courseTest",
                attrs: {
                    isView: e.isView,
                    question: e.question,
                    questionScore: e.questionScore,
                    "show-result": "",
                    "show-standard": ""
                }
            })], 1), s("div", {
                staticClass: "course-pretest-footer"
            }, [e.isView ? [e.isLastStep ? e._e() : s("a-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.goNext
                }
            }, [e._v(e._s(e.$t("下一步")))])] : s("a-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.submit
                }
            }, [e._v(e._s(e.$t("提交")))])], 2)])])
        }
          , ve = []
          , ge = s("fa7d")
          , ye = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "course-test"
            }, [e.question && e.question["SINGLE"] && e.question["SINGLE"].length ? s("div", {
                staticClass: "course-test-type"
            }, [s("div", {
                staticStyle: {
                    display: "flex"
                }
            }, [s("div", {
                staticClass: "course-test-type-title"
            }, [s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    className: "type",
                    "icon-class": "shitileixing"
                }
            }), s("span", {
                staticClass: "course-test-type-title-icon"
            }), s("span", {
                staticClass: "course-test-type-title-name"
            }, [e._v(e._s(e.$t("单选题")))])], 1)]), s("div", {
                staticClass: "course-test-type-list"
            }, e._l(e.question["SINGLE"], (function(t, i) {
                return s("div", {
                    key: i,
                    staticClass: "course-test-type-list-item",
                    class: {
                        "show-result": e.isView && e.showResult
                    }
                }, [s("div", {
                    staticClass: "course-test-type-list-item-title",
                    class: {
                        "is-right": !e.isEvaluate && e.isView && t.userRight,
                        "is-wrong": !e.isEvaluate && e.isView && !t.userRight
                    }
                }, [s("span", [t.required ? s("span", {
                    staticClass: "course-test-type-list-item-title-re"
                }, [e._v("*")]) : e._e(), s("span", {
                    staticClass: "course-test-type-list-item-title-ind"
                }, [e._v(e._s(i + 1) + ".")]), s("span", {
                    staticClass: "course-test-type-list-item-title-content"
                }, [e._v(e._s(t.content) + "\n            "), !e.isEvaluate && e.isView ? s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        "icon-class": t.userRight ? "zhengque" : "cuowu"
                    }
                }) : e._e()], 1)])]), s("div", {
                    staticClass: "course-test-type-list-item-options"
                }, [e.isView ? s("a-radio-group", {
                    staticClass: "course-test-type-list-item-options-box",
                    attrs: {
                        value: e.getAnswer("SINGLE", t)
                    }
                }, e._l(t.questionItems, (function(t, i) {
                    return s("div", {
                        key: i,
                        staticClass: "course-test-type-list-item-options-item",
                        class: {
                            "is-select": t.userItem
                        }
                    }, [s("a-radio", {
                        attrs: {
                            label: t.identifier,
                            value: t.itemId
                        }
                    }, [e._v("\n                " + e._s(t.identifier.toUpperCase()) + "."), s("i", {
                        staticClass: "mr-4"
                    }), e._v("\n                " + e._s(t.content) + "\n              ")])], 1)
                }
                )), 0) : s("a-radio-group", {
                    model: {
                        value: t.answer,
                        callback: function(s) {
                            e.$set(t, "answer", s)
                        },
                        expression: "q.answer"
                    }
                }, e._l(t.questionItems, (function(t, i) {
                    return s("div", {
                        key: i,
                        staticClass: "course-test-type-list-item-options-item"
                    }, [s("a-radio", {
                        attrs: {
                            label: t.identifier,
                            value: t.itemId
                        }
                    }, [s("span", {
                        staticClass: "mr-4"
                    }, [e._v(e._s(t.identifier.toUpperCase()) + ".")]), s("span", [e._v(e._s(t.content))])])], 1)
                }
                )), 0)], 1), e.isView && e.showStandard ? s("div", {
                    staticClass: "answer-box"
                }, [s("div", {
                    staticClass: "answer",
                    class: [t.userRight ? "is-right" : "is-wrong"]
                }, [s("div", {
                    staticClass: "l-box"
                }, [t.userRight ? s("i", {
                    staticClass: "el-icon-check"
                }) : s("i", {
                    staticClass: "el-icon-close"
                })]), e._v("\n            " + e._s(e.$t("你的回答")) + ":"), s("span", {
                    class: t.userRight ? "a-w a-r" : "a-w"
                }, [e._v(e._s(e.getAnswerKey("SINGLE", t)))]), e._v("\n            " + e._s(e.$t("正确答案")) + ":"), s("span", {
                    staticClass: "a-r"
                }, [e._v(e._s(e.getRightAnswer("SINGLE", t)))])]), t.questionAnalysis ? s("div", {
                    staticClass: "analysis"
                }, [s("div", {
                    staticClass: "analysis-title"
                }, [e._v(e._s(e.$t("试题解析")))]), s("div", {
                    staticClass: "analysis-content"
                }, [e._v(e._s(t.questionAnalysis))])]) : e._e()]) : e._e()])
            }
            )), 0)]) : e._e(), e.question && e.question["MULTIPLE"] && e.question["MULTIPLE"].length ? s("div", {
                staticClass: "course-test-type"
            }, [s("div", {
                staticStyle: {
                    display: "flex"
                }
            }, [s("div", {
                staticClass: "course-test-type-title"
            }, [s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    className: "type",
                    "icon-class": "shitileixing"
                }
            }), s("span", {
                staticClass: "course-test-type-title-icon"
            }), s("span", {
                staticClass: "course-test-type-title-name"
            }, [e._v(e._s(e.$t("多选题")))])], 1)]), s("div", {
                staticClass: "course-test-type-list"
            }, e._l(e.question["MULTIPLE"], (function(t, i) {
                return s("div", {
                    key: i,
                    staticClass: "course-test-type-list-item",
                    class: {
                        "show-result": e.isView && e.showResult
                    }
                }, [s("div", {
                    staticClass: "course-test-type-list-item-title",
                    class: {
                        "is-right": !e.isEvaluate && e.isView && t.userRight,
                        "is-wrong": !e.isEvaluate && e.isView && !t.userRight
                    }
                }, [s("span", [t.required ? s("span", {
                    staticClass: "course-test-type-list-item-title-re"
                }, [e._v("*")]) : e._e(), s("span", {
                    staticClass: "course-test-type-list-item-title-ind"
                }, [e._v(e._s(i + 1) + ".")]), s("span", {
                    staticClass: "course-test-type-list-item-title-content"
                }, [e._v(e._s(t.content))]), !e.isEvaluate && e.isView ? s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        "icon-class": t.userRight ? "zhengque" : "cuowu"
                    }
                }) : e._e()], 1)]), s("div", {
                    staticClass: "course-test-type-list-item-options"
                }, [e.isView ? s("a-checkbox-group", {
                    staticClass: "course-test-type-list-item-options-box",
                    attrs: {
                        value: e.getAnswer("MULTIPLE", t)
                    }
                }, e._l(t.questionItems, (function(t, i) {
                    return s("div", {
                        key: i,
                        staticClass: "course-test-type-list-item-options-item",
                        class: {
                            "is-select": t.userItem
                        }
                    }, [s("a-checkbox", {
                        attrs: {
                            label: t.identifier,
                            value: t.itemId
                        }
                    }, [e._v("\n                " + e._s(t.identifier.toUpperCase()) + "."), s("i", {
                        staticClass: "mr-4"
                    }), e._v(" " + e._s(t.content) + "\n              ")])], 1)
                }
                )), 0) : s("a-checkbox-group", {
                    model: {
                        value: t.answer,
                        callback: function(s) {
                            e.$set(t, "answer", s)
                        },
                        expression: "q.answer"
                    }
                }, e._l(t.questionItems, (function(t, i) {
                    return s("div", {
                        key: i,
                        staticClass: "course-test-type-list-item-options-item"
                    }, [s("a-checkbox", {
                        attrs: {
                            label: t.identifier,
                            value: t.itemId
                        }
                    }, [s("span", {
                        staticClass: "mr-4"
                    }, [e._v(e._s(t.identifier.toUpperCase()) + ".")]), s("span", [e._v(e._s(t.content))])])], 1)
                }
                )), 0)], 1), e.isView && e.showStandard ? s("div", {
                    staticClass: "answer-box"
                }, [s("div", {
                    staticClass: "answer",
                    class: [t.userRight ? "is-right" : "is-wrong"]
                }, [s("div", {
                    staticClass: "l-box"
                }, [t.userRight ? s("i", {
                    staticClass: "el-icon-check"
                }) : s("i", {
                    staticClass: "el-icon-close"
                })]), e._v("\n            " + e._s(e.$t("你的回答")) + ":"), s("span", {
                    class: t.userRight ? "a-w a-r" : "a-w"
                }, [e._v(e._s(e.getAnswerKey("MULTIPLE", t)))]), e._v("\n            " + e._s(e.$t("正确答案")) + ":"), s("span", {
                    staticClass: "a-r"
                }, [e._v(e._s(e.getRightAnswer("MULTIPLE", t)))])]), t.questionAnalysis ? s("div", {
                    staticClass: "analysis"
                }, [s("div", {
                    staticClass: "analysis-title"
                }, [e._v(e._s(e.$t("试题解析")))]), s("div", {
                    staticClass: "analysis-content"
                }, [e._v(e._s(t.questionAnalysis))])]) : e._e()]) : e._e()])
            }
            )), 0)]) : e._e(), e.question && e.question["TRUE_FALSE"] && e.question["TRUE_FALSE"].length ? s("div", {
                staticClass: "course-test-type"
            }, [s("div", {
                staticStyle: {
                    display: "flex"
                }
            }, [s("div", {
                staticClass: "course-test-type-title"
            }, [s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    className: "type",
                    "icon-class": "shitileixing"
                }
            }), s("span", {
                staticClass: "course-test-type-title-icon"
            }), s("span", {
                staticClass: "course-test-type-title-name"
            }, [e._v(e._s(e.$t("判断题")))])], 1)]), s("div", {
                staticClass: "course-test-type-list"
            }, e._l(e.question["TRUE_FALSE"], (function(t, i) {
                return s("div", {
                    key: i,
                    staticClass: "course-test-type-list-item",
                    class: {
                        "show-result": e.isView && e.showResult
                    }
                }, [s("div", {
                    staticClass: "course-test-type-list-item-title",
                    class: {
                        "is-right": !e.isEvaluate && e.isView && t.userRight,
                        "is-wrong": !e.isEvaluate && e.isView && !t.userRight
                    }
                }, [s("span", [t.required ? s("span", {
                    staticClass: "course-test-type-list-item-title-re"
                }, [e._v("*")]) : e._e(), s("span", {
                    staticClass: "course-test-type-list-item-title-ind"
                }, [e._v(e._s(i + 1) + ".")]), s("span", {
                    staticClass: "course-test-type-list-item-title-content"
                }, [e._v(e._s(t.content))]), !e.isEvaluate && e.isView ? s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        "icon-class": t.userRight ? "zhengque" : "cuowu"
                    }
                }) : e._e()], 1)]), s("div", {
                    staticClass: "course-test-type-list-item-options"
                }, [e.isView ? s("a-radio-group", {
                    staticClass: "course-test-type-list-item-options-box",
                    attrs: {
                        value: e.getAnswer("TRUE_FALSE", t)
                    }
                }, e._l(t.questionItems, (function(t, i) {
                    return s("div", {
                        key: i,
                        staticClass: "course-test-type-list-item-options-item",
                        class: {
                            "is-select": t.userItem
                        }
                    }, [s("a-radio", {
                        attrs: {
                            label: t.identifier,
                            value: t.itemId
                        }
                    }, [e._v("\n                " + e._s(t.identifier.toUpperCase()) + "."), s("i", {
                        staticClass: "mr-4"
                    }), e._v("\n                " + e._s(e.$t(t.content)) + "\n              ")])], 1)
                }
                )), 0) : s("a-radio-group", {
                    model: {
                        value: t.answer,
                        callback: function(s) {
                            e.$set(t, "answer", s)
                        },
                        expression: "q.answer"
                    }
                }, e._l(t.questionItems, (function(t, i) {
                    return s("div", {
                        key: i,
                        staticClass: "course-test-type-list-item-options-item"
                    }, [s("a-radio", {
                        attrs: {
                            label: t.identifier,
                            value: t.itemId
                        }
                    }, [s("span", {
                        staticClass: "mr-4"
                    }, [e._v(e._s(t.identifier.toUpperCase()) + ".")]), s("span", [e._v(e._s(e.$t(t.content)))])])], 1)
                }
                )), 0)], 1), e.isView && e.showStandard ? s("div", {
                    staticClass: "answer-box"
                }, [s("div", {
                    staticClass: "answer",
                    class: [t.userRight ? "is-right" : "is-wrong"]
                }, [s("div", {
                    staticClass: "l-box"
                }, [t.userRight ? s("i", {
                    staticClass: "el-icon-check"
                }) : s("i", {
                    staticClass: "el-icon-close"
                })]), e._v("\n            " + e._s(e.$t("你的回答")) + ":"), s("span", {
                    class: t.userRight ? "a-w a-r" : "a-w"
                }, [e._v(e._s(e.getAnswerKey("TRUE_FALSE", t)))]), e._v("\n            " + e._s(e.$t("正确答案")) + ":"), s("span", {
                    staticClass: "a-r"
                }, [e._v(e._s(e.getRightAnswer("TRUE_FALSE", t)))])]), t.questionAnalysis ? s("div", {
                    staticClass: "analysis"
                }, [s("div", {
                    staticClass: "analysis-title"
                }, [e._v(e._s(e.$t("试题解析")))]), s("div", {
                    staticClass: "analysis-content"
                }, [e._v(e._s(t.questionAnalysis))])]) : e._e()]) : e._e()])
            }
            )), 0)]) : e._e(), e.question && e.question["QUESTION_ANSWER"] && e.question["QUESTION_ANSWER"].length ? s("div", {
                staticClass: "course-test-type"
            }, [s("div", {
                staticStyle: {
                    display: "flex"
                }
            }, [s("div", {
                staticClass: "course-test-type-title"
            }, [s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    className: "type",
                    "icon-class": "shitileixing"
                }
            }), s("span", {
                staticClass: "course-test-type-title-icon"
            }), s("span", {
                staticClass: "course-test-type-title-name"
            }, [e._v(e._s(e.$t("问答题")))])], 1)]), s("div", {
                staticClass: "course-test-type-list"
            }, e._l(e.question["QUESTION_ANSWER"], (function(t, i) {
                return s("div", {
                    key: i,
                    staticClass: "course-test-type-list-item"
                }, [s("div", {
                    staticClass: "course-test-type-list-item-title",
                    class: {
                        "course-test-type-list-item-title-wrong": e.isView && !t.userRight && e.showResult
                    }
                }, [s("span", [s("span", {
                    staticClass: "course-test-type-list-item-title-ind"
                }, [t.required ? s("span", {
                    staticClass: "course-test-type-list-item-title-re"
                }, [e._v("*")]) : e._e(), e._v(e._s(i + 1) + ".")]), s("span", {
                    staticClass: "course-test-type-list-item-title-content"
                }, [e._v(e._s(t.content))])]), e.isView && !t.userRight && e.showResult ? s("span", [s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        "icon-class": "cuowu"
                    }
                })], 1) : e._e()]), s("div", {
                    staticClass: "course-test-type-list-item-options"
                }, [e.isView ? s("div", {
                    staticClass: "course-test-type-list-item-options-input"
                }, [s("a-input", {
                    attrs: {
                        disabled: "",
                        type: "textarea",
                        maxLength: 1300,
                        value: e.getAnswer("QUESTION_ANSWER", t),
                        "auto-size": {
                            minRows: 6,
                            maxRows: 6
                        }
                    }
                })], 1) : s("div", {
                    staticClass: "course-test-type-list-item-options-input"
                }, [s("a-input", {
                    attrs: {
                        type: "textarea",
                        maxLength: 1300,
                        placeholder: t.inMinLimit && t.required && t.minimal ? e.$t("最少") + t.minimal + e.$t("字") : "",
                        "auto-size": {
                            minRows: 6,
                            maxRows: 6
                        }
                    },
                    model: {
                        value: t.answer,
                        callback: function(s) {
                            e.$set(t, "answer", s)
                        },
                        expression: "q.answer"
                    }
                })], 1)]), e.isView && e.showStandard ? s("div", {
                    staticClass: "right-answer"
                }, [s("span", [e._v(e._s(e.$t("正确答案：")))]), s("span", [e._v(e._s(e.getRightAnswer("QUESTION_ANSWER", t)))])]) : e._e()])
            }
            )), 0)]) : e._e()])
        }
          , Ce = []
          , Ie = (s("6b54"),
        {
            components: {},
            props: {
                questionScore: {
                    type: Number,
                    default: 0
                },
                question: {
                    type: Object,
                    default: function() {}
                },
                isView: {
                    type: Boolean,
                    default: !1
                },
                showResult: {
                    type: Boolean,
                    default: !1
                },
                showStandard: {
                    type: Boolean,
                    default: !1
                },
                isEvaluate: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                lastQuestionType: function() {
                    return this.question ? this.question["TRUE_FALSE"] && this.question["TRUE_FALSE"].length > 0 ? "TRUE_FALSE" : this.question["MULTIPLE"] && this.question["MULTIPLE"].length > 0 ? "MULTIPLE" : this.question["SINGLE"] && this.question["SINGLE"].length > 0 ? "SINGLE" : void 0 : ""
                },
                questionTotalNum: function() {
                    var e = 0;
                    for (var t in this.question)
                        e += this.question[t].length;
                    return e
                }
            },
            data: function() {
                return {
                    qItem: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]
                }
            },
            methods: {
                getAnswer: function(e, t) {
                    if ("QUESTION_ANSWER" === e) {
                        var s = t.userAnswer;
                        return s
                    }
                    if ("MULTIPLE" === e) {
                        var i = t.questionItems ? t.questionItems.filter((function(e) {
                            return e.userItem
                        }
                        )).map((function(e) {
                            return e.itemId
                        }
                        )) : [];
                        return i
                    }
                    var n, a = (null === (n = t.questionItems.find((function(e) {
                        return e.userItem
                    }
                    ))) || void 0 === n ? void 0 : n.itemId) || "";
                    return a
                },
                getAnswerKey: function(e, t) {
                    if ("QUESTION_ANSWER" === e) {
                        var s = t.userAnswer;
                        return s
                    }
                    if ("MULTIPLE" === e) {
                        var i = t.questionItems.filter((function(e) {
                            return e.userItem
                        }
                        )).map((function(e) {
                            return e && e.identifier && e.identifier.toUpperCase()
                        }
                        )).join("、");
                        return i
                    }
                    if ("TRUE_FALSE" === e) {
                        var n = t.questionItems.find((function(e) {
                            return e.userItem
                        }
                        )) && "a" === t.questionItems.find((function(e) {
                            return e.userItem
                        }
                        )).identifier ? this.$t("正确") : this.$t("错误");
                        return n
                    }
                    var a = t.questionItems.find((function(e) {
                        return e.userItem
                    }
                    )) && t.questionItems.find((function(e) {
                        return e.userItem
                    }
                    )).identifier.toUpperCase();
                    return a
                },
                getRightAnswer: function(e, t) {
                    if ("QUESTION_ANSWER" === e) {
                        var s = t.userAnswer;
                        return s
                    }
                    if ("MULTIPLE" === e) {
                        var i = t.questionItems.filter((function(e) {
                            return e.rightAnswer
                        }
                        )).map((function(e) {
                            return e && e.identifier && e.identifier.toUpperCase()
                        }
                        )).join("、");
                        return i
                    }
                    if ("TRUE_FALSE" === e) {
                        var n = t.questionItems.find((function(e) {
                            return e.rightAnswer
                        }
                        )) && "a" === t.questionItems.find((function(e) {
                            return e.rightAnswer
                        }
                        )).identifier ? this.$t("正确") : this.$t("错误");
                        return n
                    }
                    var a = t.questionItems.find((function(e) {
                        return e.rightAnswer
                    }
                    )) && t.questionItems.find((function(e) {
                        return e.rightAnswer
                    }
                    )).identifier.toUpperCase();
                    return a
                },
                getScore: function(e, t) {
                    return e === this.lastQuestionType && this.question[e].length === t + 1 ? (console.log("🚀 ~ this.lastQuestionType:", this.lastQuestionType),
                    console.log("🚀 ~ this.questionTotalNum:", this.questionTotalNum),
                    (100 - this.questionTotalNum * this.questionScore + this.questionScore).toString().slice(0, 4)) : this.questionScore
                },
                getQuestion: function() {
                    return this.question
                }
            }
        })
          , Ae = Ie
          , Se = (s("4b42"),
        Object(y["a"])(Ae, ye, Ce, !1, null, "78b79c72", null))
          , Te = Se.exports
          , we = {
            components: {
                CourseTest: Te
            },
            props: {
                isGetScoreStep: {
                    type: Boolean,
                    default: !1
                },
                isLastStep: {
                    type: Boolean,
                    default: !1
                },
                isFullScreen: {
                    type: Boolean,
                    default: !1
                },
                courseId: {
                    type: String,
                    default: ""
                },
                currentStep: {
                    type: String,
                    default: ""
                }
            },
            computed: {},
            data: function() {
                return {
                    question: {},
                    questionScore: 0,
                    isView: !1,
                    loading: !0
                }
            },
            mounted: function() {},
            methods: {
                goNext: function() {
                    this.$emit("nextStepByOrder", !0)
                },
                view: function() {
                    this.isView = !0,
                    this.init()
                },
                init: function() {
                    var e = this;
                    if (this.loading = !0,
                    this.isView) {
                        var t = {
                            courseId: this.courseId,
                            willGoStep: "COURSE_PRETEST_VIEW",
                            courseType: "NEW_COURSE_CENTER"
                        };
                        J(t).then((function(t) {
                            e.loading = !1,
                            0 === +t.status && (e.questionScore = t.data.questionScore,
                            e.question = t.data.question)
                        }
                        ))
                    } else {
                        var s = {
                            courseId: this.courseId,
                            studyType: "STUDY",
                            courseType: "NEW_COURSE_CENTER"
                        };
                        Q(s).then((function(t) {
                            if (e.loading = !1,
                            console.log("🚀 ~ res:", t),
                            0 === +t.status) {
                                for (var s in t.data.question) {
                                    var i = t.data.question[s];
                                    i.forEach((function(e, t) {
                                        "MULTIPLE" === e.itemType ? e.answer = [] : e.answer = ""
                                    }
                                    ))
                                }
                                e.question = t.data.question,
                                e.questionScore = t.data.questionScore
                            }
                        }
                        ))
                    }
                },
                submit: function() {
                    var e = this
                      , t = this.$refs.courseTest.getQuestion()
                      , s = 0;
                    for (var i in t)
                        for (var n = 0; n < t[i].length; n++)
                            ("MULTIPLE" !== t[i][n].itemType || t[i][n].answer.length) && t[i][n].answer || s++;
                    if (s > 0)
                        c["a"].error(this.$t("您还有") + s + this.$t("题未答，请继续答题。"));
                    else {
                        var a = [];
                        for (var r in t)
                            t[r].forEach((function(e, t) {
                                Array.isArray(e.answer) ? e.answer.forEach((function(t, s) {
                                    a.push("_".concat(e.questionId, "=").concat(t))
                                }
                                )) : a.push("_".concat(e.questionId, "=").concat(e.answer))
                            }
                            ));
                        var u = {
                            eln_session_id: window.$cookies.get("eln_session_id") || Object(ge["getUrl"])("eln_session_id") || "",
                            elsSign: window.$cookies.get("eln_session_id") || Object(ge["getUrl"])("eln_session_id") || "",
                            courseType: "NEW_COURSE_CENTER"
                        }
                          , l = new FormData;
                        l.append("courseId", this.courseId),
                        l.append("willGoStep", "COURSE_PRETEST_SAVE"),
                        l.append("answers", a.join("&")),
                        this.loading = !0,
                        G(u, l).then((function(t) {
                            e.loading = !1,
                            "true" === t.state ? e.isLastStep ? o["a"].info({
                                class: "apaas-confirm",
                                title: e.$t("您获得的分数为") + t.score + e.$t("分"),
                                content: t.commentMsg,
                                okText: e.$t("知道了"),
                                onOk: function() {
                                    e.view()
                                }
                            }) : o["a"].confirm({
                                class: "apaas-confirm",
                                title: e.$t("您获得的分数为") + t.score + e.$t("分"),
                                content: t.commentMsg,
                                okText: e.$t("进入下一步"),
                                cancelText: e.$t("查看结果"),
                                onOk: function() {
                                    e.$emit("nextStep", !0)
                                },
                                onCancel: function() {
                                    e.$emit("nextStep", !1),
                                    e.view()
                                }
                            }) : c["a"].error(e.$t("保存时出错！"))
                        }
                        ))
                    }
                },
                toggleFullScreen: function() {
                    this.$emit("toggleFullScreen")
                }
            }
        }
          , be = we
          , _e = (s("c5eb"),
        s("14eb"),
        Object(y["a"])(be, fe, ve, !1, null, "adfe6e64", null))
          , xe = _e.exports
          , Ee = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "course-play-main"
            }, [i("Test", {
                ref: "courseTest",
                attrs: {
                    allInFixTest: e.infixTests
                },
                on: {
                    updateInFixTest: e.updateInFixTest
                }
            }), i("div", {
                staticClass: "course-play-container",
                style: {
                    height: e.isPreview ? "100%" : e.coursePlayBoxHeight
                }
            }, [i("div", {
                staticClass: "player-container",
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.checkoutStatus.apply(null, arguments)
                    }
                }
            }, [i("div", [e.hangUpFlag ? i("hangUp", {
                attrs: {
                    preventHangTime: e.preventHangTime,
                    maxTime: e.maxTime,
                    minTime: e.minTime
                },
                on: {
                    pauseOrPlay: e.pauseOrPlay,
                    saveStudyLog: e.saveStudyLog
                }
            }) : e._e(), e.preventCheatFlag ? i("preventCheat", {
                ref: "preventCheat",
                attrs: {
                    preventCheatTime: e.preventCheatTime,
                    maxTime: e.maxTime,
                    minTime: e.minTime,
                    checkType: e.checkType
                },
                on: {
                    pauseOrPlay: e.pauseOrPlay,
                    saveStudyLog: e.saveStudyLog
                }
            }) : e._e()], 1), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.handoutVideo,
                    expression: "handoutVideo"
                }],
                staticClass: "handout-iframe-content"
            }, [e.handoutVideo ? ["video" !== e.curType && "url" !== e.curType && "audio" !== e.curType && "" !== e.curType ? i("div", {
                staticStyle: {
                    height: "100%"
                }
            }, [i("div", {
                staticStyle: {
                    height: "calc(100% - 50px)"
                }
            }, [i("iframe", {
                staticClass: "handout-iframe",
                attrs: {
                    src: e.handoutVideoNoteId
                }
            })]), i("div", {
                staticClass: "tips_area"
            }, [e.currentStudyTime > 0 && "preview" !== e.$route.query.from ? i("span", {
                staticClass: "tips"
            }, [e._v(e._s(e.$t("需要"))), i("span", {
                staticClass: "tips-content"
            }, [e._v(e._s(e._f("TimeToString")(e.currentStudyTime)))]), e._v(e._s(e.$t("完成学习")))]) : e._e(), "preview" === e.$route.query.from ? i("span", {
                staticClass: "tips"
            }, [e._v(e._s(e.$t("预览")))]) : e._e(), i("span", {
                staticClass: "handout_span",
                on: {
                    click: function(t) {
                        return e.openHandoutOperate(e.noteId)
                    }
                }
            }, [e._v(e._s(e.$t("关闭讲义")))])])]) : i("iframe", {
                staticClass: "handout-iframe",
                attrs: {
                    src: e.handoutVideoNoteId
                }
            })] : e._e()], 2), e.showMask ? [e._t("default"), i("CourseBar", {
                attrs: {
                    courseId: e.courseId
                }
            })] : [!e.isVideo || "video" !== e.curType && "audio" !== e.curType ? e._e() : i("div", {
                staticClass: "aliPlayer-content"
            }, [i("div", {
                staticClass: "ac-main",
                class: {
                    video: "video" === e.curType,
                    audio: "audio" === e.curType
                }
            }, [i("aliPlayer", {
                ref: "aliPlayer",
                attrs: {
                    resetHandoutAndVideoProps: e.resetHandoutAndVideoProps,
                    id: "aliPlayer",
                    type: e.curType,
                    isDefaultHideControl: e.isDefaultHideControl,
                    allowHighSpeed: e.allowHighSpeed,
                    allowMinStudyTime: e.allowMinStudyTime,
                    videoId: e.curVideoId,
                    curTime: e.curTime,
                    recordTime: e.recordTimeTemp,
                    noteId: e.noteId,
                    resourceRelId: e.resourceRelIdNoteId,
                    settingBtn: e.settingBtn,
                    seek: e.seek,
                    heartBeatFlag: e.heartBeatFlag,
                    courseId: e.courseId,
                    isNewPlay: !0,
                    infixTests: e.infixTests,
                    captionEvent: e.captionEvent,
                    showCaptionControl: !0
                },
                on: {
                    seeking: e.videoSeeking,
                    openAndCloseVideoParent: e.openAndCloseVideo,
                    play: e.play,
                    pause: e.pause,
                    playing: e.playing,
                    ended: e.ended,
                    ready: e.ready,
                    timeupdate: e.timeupdate,
                    isReady: e.isReady,
                    updateAndClear: e.updateCourseRecord,
                    "update:infixTests": function(t) {
                        e.infixTests = t
                    },
                    "update:infix-tests": function(t) {
                        e.infixTests = t
                    },
                    onTagClick: e.onTagClick,
                    onTimeMatch: e.onTimeMatch,
                    onCompleteSeek: e.onCompleteSeek
                }
            })], 1), i("CourseBar", {
                attrs: {
                    courseId: e.courseId
                }
            })], 1), "url" === e.curType ? [i("div", {
                staticClass: "aliPlayer-content"
            }, [i("div", {
                staticClass: "ac-main",
                staticStyle: {
                    position: "relative"
                }
            }, [e.urlJson && e.urlJson.content ? i("iframe", {
                ref: "urlContent",
                class: ["iframe-content", e.urlIframeHasControl ? "iframe-content__small" : ""],
                attrs: {
                    src: e.urlJson.content,
                    allowfullscreen: "true",
                    webkitallowfullscreen: "true",
                    mozallowfullscreen: "true"
                }
            }) : i("div", {
                ref: "urlContent",
                class: ["iframe-content", e.urlIframeHasControl ? "iframe-content__small" : ""],
                domProps: {
                    innerHTML: e._s(e.urlJson && e.urlJson.code)
                }
            }), "preview" !== e.$route.query.from && e.currentStudyTime > 0 && e.urlJson && e.urlJson.minStudyTime ? i("span", {
                staticClass: "min-study"
            }, [i("span", [e._v(e._s(e.$t("需要")) + "\n                  " + e._s(e._f("TimeToString")(e.currentStudyTime)) + "\n                  " + e._s(e.$t("完成学习")))]), i("span", {
                staticClass: "icon iconfont icon-quanping full-screen",
                on: {
                    click: function(t) {
                        return e.toFullVideo(e.$refs.urlContent)
                    }
                }
            })]) : e._e(), "preview" !== e.$route.query.from && e.urlJson && (0 === e.currentStudyTime || e.urlJson.confirmFinish) && e.urlJson.minStudyTime ? i("span", {
                staticClass: "min-study"
            }, [i("span", [e._v(e._s(e.$t("已完成学习")))]), i("span", {
                staticClass: "icon iconfont icon-quanping full-screen",
                on: {
                    click: function(t) {
                        return e.toFullVideo(e.$refs.urlContent)
                    }
                }
            })]) : e._e(), "preview" === e.$route.query.from ? i("span", {
                staticClass: "min-study"
            }, [e._v(e._s(e.$t("预览"))), i("span", {
                staticClass: "icon iconfont icon-quanping full-screen",
                on: {
                    click: function(t) {
                        return e.toFullVideo(e.$refs.urlContent)
                    }
                }
            })]) : e._e()]), i("CourseBar", {
                attrs: {
                    courseId: e.courseId
                }
            })], 1)] : e._e(), "video" !== e.curType && "url" !== e.curType && "audio" !== e.curType && "" !== e.curType ? i("div", {
                staticClass: "aliPlayer-content"
            }, [i("div", {
                staticClass: "ac-main"
            }, [e.handoutVideo ? e._e() : i("aliyun-preview", {
                key: e.curVideoId + e.curId + e.aliVersion,
                ref: "aliPreview",
                attrs: {
                    allowDrag: e.allowDrag,
                    noteId: e.noteId,
                    resourceRelId: e.curVideoId,
                    resourceId: e.curId,
                    providerCorpCode: e.providerCorpCode,
                    pageIndex: e.pageIndex,
                    aliVersion: e.aliVersion,
                    isFinish: e.curInfo.finish,
                    curType: e.curType,
                    picUrl: e.picUrl
                },
                on: {
                    isReady: e.isReady
                },
                scopedSlots: e._u([{
                    key: "handoutSpan",
                    fn: function() {
                        return [i("span", {
                            staticClass: "handout_span",
                            on: {
                                click: function(t) {
                                    return e.openHandoutOperate(e.noteId)
                                }
                            }
                        }, [e._v(e._s(e.$t("查看讲义")))])]
                    },
                    proxy: !0
                }], null, !1, 1714672105)
            }, [(e.currentStudyTime > 0 || e.infixTests.length) && "preview" !== e.$route.query.from ? i("span", {
                staticClass: "tips"
            }, [e._v(e._s(e.$t("还需观看"))), i("span", {
                staticClass: "tips-content"
            }, [e._v(e._s(e._f("TimeToString")(e.currentStudyTime)))]), e.infixTests.length ? i("span", [e._v(e._s(e.$t("并完成随堂测试后")))]) : e._e(), e._v(e._s(e.$t("完成学习"))), e.infixTests.length ? i("a-button", {
                class: ["course-test__button", e.currentStudyTime > 0 ? "course-test__button__disabled" : ""],
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.onStartDocumentTest
                }
            }, [e.infixTests[0] && "PASS" === e.infixTests[0].userState ? [e._v(e._s(e.$t("查看试卷详情")))] : [e._v(e._s(e.$t("开始随堂测试")))]], 2) : e._e()], 1) : e._e(), e.isPreview ? i("span", {
                staticClass: "tips"
            }, [e._v(e._s(e.$t("预览"))), e.infixTests.length ? i("a-button", {
                staticClass: "course-test__button",
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.onStartDocumentTest
                }
            }, [e._v(e._s(e.$t("预览随堂测试")))]) : e._e()], 1) : e._e()])], 1), i("CourseBar", {
                attrs: {
                    courseId: e.courseId
                }
            })], 1) : e._e()], i("el-dialog", {
                attrs: {
                    title: e.campData.trainingCampName,
                    visible: e.campVisible,
                    width: "50%",
                    "append-to-body": "",
                    "close-on-click-modal": !1,
                    "custom-class": "camp-dialog"
                },
                on: {
                    "update:visible": function(t) {
                        e.campVisible = t
                    }
                }
            }, [i("div", {
                staticClass: "camp-dia"
            }, [i("p", {
                domProps: {
                    innerHTML: e._s(e.campData.trainingCampIntroduction)
                }
            }), i("img", {
                staticClass: "camp-img",
                attrs: {
                    src: e.campData.trainingCampPicture || "",
                    alt: ""
                }
            })]), i("span", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [i("el-checkbox", {
                model: {
                    value: e.notShowCampAd,
                    callback: function(t) {
                        e.notShowCampAd = t
                    },
                    expression: "notShowCampAd"
                }
            }, [e._v(e._s(e.$t("今日不再弹出")))]), i("el-button", {
                attrs: {
                    size: "small"
                },
                on: {
                    click: e.closeCampAd
                }
            }, [e._v(e._s(e.$t("关闭")))]), i("el-button", {
                attrs: {
                    size: "small",
                    type: e.campData.hasInterest ? "default" : "primary"
                },
                on: {
                    click: e.toggleInterest
                }
            }, [e._v(e._s(e.campData.hasInterest ? e.$t("已报名") : e.$t("我要报名")))])], 1)]), i("div", {
                staticClass: "share-window",
                staticStyle: {
                    display: "none"
                },
                attrs: {
                    id: "sw-main-content"
                }
            }, [i("div", {
                staticClass: "sw-main",
                attrs: {
                    id: "sw-main"
                }
            }, [i("div", {
                staticStyle: {
                    "background-color": "#ffffff",
                    "border-radius": "15px"
                }
            }, [i("img", {
                attrs: {
                    crossOrigin: "anonymous",
                    id: "sw-main-img",
                    src: e.courseInfo.courseImage || "",
                    alt: ""
                }
            }), i("div", {
                staticClass: "swm-content"
            }, [i("div", {
                staticClass: "sc-top"
            }, [i("div", {
                staticClass: "top-line"
            }), i("p", {
                staticClass: "rate-title"
            }, [e._v(e._s(e.courseInfo.courseTitle || ""))]), i("div", {
                staticClass: "rate-area"
            }, [e.courseInfo && e.courseInfo.teacherList && e.courseInfo.teacherList.length ? i("div", {
                staticClass: "rate-area-span"
            }, [i("div", {
                staticStyle: {
                    width: "38px"
                }
            }, [e._v(e._s(e.$t("讲师")) + "：")]), i("div", {
                staticStyle: {
                    width: "80px",
                    "text-overflow": "ellipsis",
                    "overflow-x": "hidden",
                    "white-space": "nowrap"
                }
            }, [e._v("\n                      " + e._s(e.ellipsisSpan) + "\n                      ")]), i("span", [e._v(e._s(e.$t("等{num}人", {
                num: e.courseInfo.teacherList.length
            })))])]) : e._e(), i("el-rate", {
                attrs: {
                    disabled: "",
                    "show-score": "",
                    "text-color": "rgba(0,0,0,0.65)",
                    "score-template": "{value}"
                },
                model: {
                    value: e.courseInfo.avgPoint,
                    callback: function(t) {
                        e.$set(e.courseInfo, "avgPoint", t)
                    },
                    expression: "courseInfo.avgPoint"
                }
            }), i("span", {
                staticStyle: {
                    color: "rgba(0, 0, 0, 0.65)"
                }
            }, [e._v(e._s(e.$t("分")))])], 1)]), i("div", {
                staticClass: "sc-bottom"
            }, [i("div", {
                staticClass: "qrcode-area-title"
            }, [i("span", [e._v(e._s(e.$t("扫一扫，观看精彩课程")))]), i("span", [e._v(e._s(e.$t("学习成就卓越")))])]), i("div", {
                staticClass: "qrcode-area-download"
            }, [i("img", {
                attrs: {
                    src: "/els/html/courseInfo/courseinfo.createQRCodeForGeneral.do?courseId=" + e.courseId,
                    alt: ""
                }
            })])])])])])]), !e.isPlaying && e.isReplayBtn ? i("div", {
                staticClass: "player-endInfo",
                class: {
                    "has-replay-btn": e.mustReplayCanFinish
                }
            }, [e.mustReplayCanFinish ? i("div", {
                staticClass: "player-replay-tip"
            }, [i("span", [e._v(e._s(e.$t("课程未完成，请勿手动拖拽课程进度条，以保证课程的正常学习")))]), i("span", [e._v(e._s(e.$t("课程单次学习实际播放时长不得少于课程视频时长的50%")))])]) : e._e(), i("div", {
                staticClass: "player-opt-btn"
            }, [e.mustReplayCanFinish ? i("button", {
                staticClass: "replay-btn",
                on: {
                    click: e.rePlay
                }
            }, [e._v("\n            " + e._s(e.$t("重新观看")) + "\n          ")]) : e._e(), "unionpay" === e.corpCode ? [e.nextIndex ? e._e() : i("p", ["zh" === e.language ? i("span", [e._v(e._s(e.$t("已是最后一节")))]) : i("span", [e._v("This is the last section")])])] : [e.nextIndex ? i("button", {
                staticClass: "next-button",
                on: {
                    click: e.playNextSection
                }
            }, [e._v("\n              " + e._s(e.$t("下一节")) + "\n            ")]) : e.mustReplayCanFinish ? e._e() : i("button", {
                staticClass: "replay-btn",
                on: {
                    click: e.rePlay
                }
            }, [e._v(e._s(e.$t("重新观看")))])]], 2)]) : e._e()], 2), i("div", {
                staticClass: "rightList-container",
                style: e.open ? "" : "width:0;"
            }, [e._e(), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.open,
                    expression: "open"
                }],
                staticStyle: {
                    height: "100%"
                }
            }, [i("div", {
                staticClass: "tabs-header-row"
            }, [i("Tabs", {
                staticStyle: {
                    "background-color": "#fff"
                },
                attrs: {
                    tabs: e.tabs
                },
                on: {
                    change: e.handletabClick
                },
                model: {
                    value: e.activeName,
                    callback: function(t) {
                        e.activeName = t
                    },
                    expression: "activeName"
                }
            }), e.isMpcn ? e._e() : i("button", {
                staticClass: "ai-qa-btn",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.openAi
                }
            }, [i("svg-icon", {
                staticClass: "ai-qa-icon",
                attrs: {
                    "use-svg": "",
                    "icon-class": "bot-icon"
                }
            }), i("span", [e._v(e._s(e.$t("AI 问答")))])], 1)], 1), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "contents" === e.activeName,
                    expression: "activeName === 'contents'"
                }],
                staticClass: "chapter-container"
            }, [i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.open,
                    expression: "open"
                }],
                staticClass: "chapter-section-box"
            }, [i("div", {
                staticClass: "line-over-box"
            }), i("div", {
                staticClass: "chapter-over-box"
            }), e._l(e.courseData, (function(t, s) {
                return i("div", {
                    key: s,
                    staticClass: "chapter-box",
                    class: {
                        "chapter-box-active": e.curIndex[0] === s
                    }
                }, [i("div", {
                    staticClass: "dot-line"
                }, [i("div", {
                    staticClass: "dot"
                }, [i("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        "icon-class": e.curIndex[0] === s ? "dot-h" : "dot"
                    }
                })], 1), i("div", {
                    staticClass: "line"
                })]), i("div", {
                    staticClass: "chapter-content"
                }, [i("div", {
                    staticClass: "chapter",
                    attrs: {
                        title: t.chapterName
                    },
                    on: {
                        click: function(i) {
                            return e.toggleCollapse(t, s)
                        }
                    }
                }, [e._v("\n                  " + e._s(t.chapterName) + "\n                ")]), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.fold,
                        expression: "!item.fold"
                    }],
                    staticClass: "section"
                }, e._l(t.resourceDTOS, (function(n, a) {
                    return i("div", {
                        key: a,
                        staticClass: "section-item",
                        class: {
                            finish: n.finish,
                            "section-item-active": e.curId === n.resourceId && !e.showMask
                        },
                        on: {
                            click: function(i) {
                                return e.checkoutSection(n, s, a, t)
                            }
                        }
                    }, [i("div", {
                        class: {
                            "first-line": !0,
                            active: e.curId === n.resourceId && !e.showMask
                        }
                    }, [i("span", {
                        staticClass: "icon-box",
                        attrs: {
                            title: n.resourceName
                        }
                    }, [e._v("\n                        " + e._s(n.resourceName) + "\n                      ")]), n.finish ? i("span", {
                        staticClass: "finish-tig finish-tig-item"
                    }, [i("svg-icon", {
                        attrs: {
                            "use-svg": "",
                            className: "icon",
                            "icon-class": "wancheng"
                        }
                    }), i("span", [e._v(e._s(e.$t("已完成")))])], 1) : e.curId !== n.resourceId || e.showMask ? !e.showMask && e.hasGetRecord ? i("span", {
                        staticClass: "todo finish-tig-item"
                    }, [i("span", [e._v(e._s(e.$t("未完成")))])]) : e._e() : i("span", {
                        staticClass: "palying finish-tig-item"
                    }, [i("svg-icon", {
                        attrs: {
                            "use-svg": "",
                            className: "icon",
                            "icon-class": "playing"
                        }
                    }), i("span", [e._v(e._s(e.$t("学习中")))])], 1)]), i("div", {
                        staticClass: "second-line"
                    }, ["video" === n.resourceType ? i("div", {
                        staticClass: "icon-span-block video"
                    }, [i("svg-icon", {
                        attrs: {
                            className: "icon",
                            "use-svg": "",
                            "icon-class": "bofang"
                        }
                    }), i("span", [e._v(e._s(e.$t("视频")))])], 1) : e._e(), "audio" === n.resourceType ? i("div", {
                        staticClass: "icon-span-block audio"
                    }, [i("svg-icon", {
                        attrs: {
                            className: "icon",
                            "use-svg": "",
                            "icon-class": "radio"
                        }
                    }), i("span", [e._v(" " + e._s(e.$t("音频")))])], 1) : e._e(), "document" === n.resourceType ? i("div", {
                        staticClass: "icon-span-block doc"
                    }, [i("svg-icon", {
                        attrs: {
                            className: "icon",
                            "use-svg": "",
                            "icon-class": "wenjian"
                        }
                    }), i("span", [e._v(e._s(e.$t("文档")))])], 1) : e._e(), "url" === n.resourceType ? i("div", {
                        staticClass: "icon-span-block url"
                    }, [i("svg-icon", {
                        attrs: {
                            className: "icon",
                            "use-svg": "",
                            "icon-class": "lianjie"
                        }
                    }), i("span", [e._v(e._s(e.$t("URL")))])], 1) : e._e(), "pic" === n.resourceType ? i("div", {
                        staticClass: "icon-span-block"
                    }, [i("svg-icon", {
                        attrs: {
                            className: "icon",
                            "use-svg": "",
                            "icon-class": "tupian"
                        }
                    }), i("span", [e._v(e._s(e.$t("图片")))])], 1) : e._e(), "video" !== n.resourceType && "audio" !== n.resourceType && n.minStudyTime ? i("span", [e._v(e._s(e.$t("最短学习时长")) + ": " + e._s(e._f("TimeToString")(n.minStudyTime)))]) : e._e(), "video" === n.resourceType || "audio" === n.resourceType ? [e.allowMinStudyTime && n.minStudyTime ? i("span", [e._v(e._s(e.$t("最短学习时长")) + ": " + e._s(e._f("TimeToString")(n.minStudyTime)))]) : i("span", [e._v("\n                          " + e._s("video" === n.resourceType ? "zh_CN" === e.language ? "视频时长:" : "Video Duration: " : "zh_CN" === e.language ? "音频时长: " : "Audio Duration: ") + e._s(e._f("TimeToString")(n.playTime)) + "\n                        ")])] : e._e()], 2)])
                }
                )), 0)])])
            }
            ))], 2)]), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "note" === e.activeName,
                    expression: "activeName === 'note'"
                }],
                staticClass: "QA-container"
            }, [i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.open,
                    expression: "open"
                }],
                staticClass: "QA-section-box"
            }, [i("div", {
                staticClass: "note-nav"
            }, [i("a-tabs", {
                on: {
                    change: e.navToggle
                },
                model: {
                    value: e.navMsg,
                    callback: function(t) {
                        e.navMsg = t
                    },
                    expression: "navMsg"
                }
            }, [i("a-tab-pane", {
                key: "myNote",
                attrs: {
                    tab: e.$t("我的笔记")
                }
            }), i("a-tab-pane", {
                key: "otherNote",
                attrs: {
                    tab: e.$t("他人笔记")
                }
            })], 1)], 1), e.isCreateNote || "myNote" !== e.navMsg ? e._e() : i("div", {
                staticClass: "note-list"
            }, [i("div", {
                staticClass: "note-list-content"
            }, [e._l(e.myNotes, (function(t, s) {
                return i("div", {
                    key: s,
                    staticClass: "nlc-item",
                    on: {
                        mouseenter: function(t) {
                            return e.noteEnter("note-item-s" + s)
                        },
                        mouseleave: function(t) {
                            return e.noteLeave("note-item-s" + s)
                        }
                    }
                }, [i("svg-icon", {
                    staticClass: "mr-8",
                    attrs: {
                        "use-svg": "",
                        className: "icon",
                        "icon-class": "note"
                    }
                }), i("div", {
                    staticClass: "nlc-item-text",
                    style: {
                        width: e.noteMsg === "note-item-s" + s + "-enter" ? "120px" : "254px"
                    },
                    on: {
                        click: function(s) {
                            return e.showDownLoadDialog(t)
                        }
                    }
                }, [e._v("\n                    " + e._s(t.noteName || t.content || "") + "\n                  ")]), e.noteMsg === "note-item-s" + s + "-enter" ? i("div", {
                    staticClass: "icon-area"
                }, [i("a-tooltip", {
                    attrs: {
                        placement: "top"
                    }
                }, [i("template", {
                    slot: "title"
                }, [i("span", [e._v(e._s(e.$t("已公开")))])]), t.isSecret ? e._e() : i("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        className: "icon",
                        "icon-class": "noteView",
                        title: e.$t("已公开")
                    },
                    on: {
                        click: function(s) {
                            return e.sendNote("toggle", t, "close")
                        }
                    }
                })], 2), i("a-tooltip", {
                    attrs: {
                        placement: "top"
                    }
                }, [i("template", {
                    slot: "title"
                }, [i("span", [e._v(e._s(e.$t("已保密")))])]), t.isSecret ? i("i", {
                    staticClass: "el-icon-lock svg-icon",
                    on: {
                        click: function(s) {
                            return e.sendNote("toggle", t, "open")
                        }
                    }
                }) : e._e()], 2), i("a-tooltip", {
                    attrs: {
                        placement: "top"
                    }
                }, [i("template", {
                    slot: "title"
                }, [i("span", [e._v(e._s(e.$t("跳转")))])]), e.isShowJumpPeriod(t) ? i("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        className: "icon",
                        "icon-class": "noteLink",
                        title: e.$t("跳转")
                    },
                    on: {
                        click: function(s) {
                            return e.jumpPeriod(t)
                        }
                    }
                }) : e._e()], 2), i("a-tooltip", {
                    attrs: {
                        placement: "top"
                    }
                }, [i("template", {
                    slot: "title"
                }, [i("span", [e._v(e._s(e.$t("编辑")))])]), i("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        className: "icon",
                        "icon-class": "noteEdit",
                        title: e.$t("编辑")
                    },
                    on: {
                        click: function(s) {
                            return e.editPeriod(t)
                        }
                    }
                })], 2), i("a-tooltip", {
                    attrs: {
                        placement: "top"
                    }
                }, [i("template", {
                    slot: "title"
                }, [i("span", [e._v(e._s(e.$t("删除")))])]), i("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        className: "icon",
                        "icon-class": "noteDelete",
                        title: e.$t("删除")
                    },
                    on: {
                        click: function(s) {
                            return e.delMyNote(t)
                        }
                    }
                })], 2)], 1) : e._e()], 1)
            }
            )), e.myNotes.length ? e._e() : i("div", {
                staticClass: "note-empty"
            }, [i("img", {
                attrs: {
                    src: e.enptyNotePng,
                    alt: ""
                }
            }), i("div", {
                staticClass: "tips-empty"
            }, [e._v(e._s(e.$t("暂无笔记")) + "~~")])])], 2), i("div", {
                staticClass: "note-toggle-btn"
            }, [i("div", {
                staticClass: "note-toggle-btn__block",
                on: {
                    click: e.toggleCreateNote
                }
            }, [i("i", {
                staticClass: "el-icon-plus"
            }), i("span", [e._v(e._s(e.$t("添加笔记")))])])])]), "otherNote" === e.navMsg ? i("div", {
                staticClass: "note-list other-note-list"
            }, [e.otherNotes.length ? i("div", {
                staticStyle: {
                    width: "100%"
                }
            }, [i("div", {
                staticStyle: {
                    width: "100%",
                    height: "326px",
                    "overflow-y": "auto"
                }
            }, e._l(e.otherNotes, (function(t, n) {
                return i("div", {
                    key: n,
                    staticClass: "nlh-content nlh-content-new"
                }, [i("div", {
                    staticClass: "nc-left",
                    on: {
                        click: function(s) {
                            return e.showDownLoadDialog(t)
                        }
                    }
                }, [i("img", {
                    attrs: {
                        src: s("15ba"),
                        alt: ""
                    }
                })]), i("div", {
                    staticClass: "nc-right",
                    staticStyle: {
                        cursor: "pointer"
                    }
                }, [i("div", {
                    staticClass: "nlh-content-title nlh-content-dir",
                    on: {
                        click: function(s) {
                            return e.showDownLoadDialog(t)
                        }
                    }
                }, [i("span", {
                    staticClass: "note-name"
                }, [e._v(e._s(t.noteName || ""))])]), i("div", {
                    staticClass: "nlh-content-info"
                }, [i("div", {
                    staticClass: "info-time",
                    on: {
                        click: function(s) {
                            return e.showDownLoadDialog(t)
                        }
                    }
                }, [e._v("\n                          " + e._s(t.lastModifyTime || t.createTime || "") + "\n                        ")]), i("div", {
                    staticClass: "info-icons"
                }, [e.isShowJumpPeriod(t) ? i("div", {
                    staticClass: "info-icons-item jump",
                    attrs: {
                        title: e.$t("跳转")
                    },
                    on: {
                        click: function(s) {
                            return e.jumpPeriod(t)
                        }
                    }
                }, [i("div")]) : e._e()])])])])
            }
            )), 0)]) : e._e(), e.otherNotes.length ? e._e() : i("div", {
                staticClass: "note-empty"
            }, [i("img", {
                attrs: {
                    src: e.enptyNotePng,
                    alt: ""
                }
            }), i("div", {
                staticClass: "tips-empty"
            }, [e._v(e._s(e.$t("暂无笔记")) + "~~")])])]) : e._e(), e.isCreateNote ? i("div", {
                staticClass: "note-create"
            }, [i("el-input", {
                staticClass: "note-create-textarea-1",
                staticStyle: {
                    height: "64px"
                },
                attrs: {
                    type: "textarea",
                    placeholder: e.$t("请输入你的笔记标题（非必填）"),
                    maxlength: "50",
                    "show-word-limit": "",
                    resize: "none"
                },
                model: {
                    value: e.createNote.note_title,
                    callback: function(t) {
                        e.$set(e.createNote, "note_title", t)
                    },
                    expression: "createNote.note_title"
                }
            }), i("el-input", {
                staticClass: "note-create-textarea-2",
                attrs: {
                    type: "textarea",
                    placeholder: e.$t("请输入你的笔记内容（必填）"),
                    resize: "none",
                    maxlength: "1300",
                    "show-word-limit": ""
                },
                model: {
                    value: e.createNote.note_content,
                    callback: function(t) {
                        e.$set(e.createNote, "note_content", t)
                    },
                    expression: "createNote.note_content"
                }
            }), i("div", {
                staticClass: "secrecy_submit_footer"
            }, [i("div", {
                staticClass: "ssf-l"
            }, [i("el-checkbox", {
                class: {
                    "secrecy-create": !e.createNote.secrecy
                },
                model: {
                    value: e.createNote.secrecy,
                    callback: function(t) {
                        e.$set(e.createNote, "secrecy", t)
                    },
                    expression: "createNote.secrecy"
                }
            }), i("span", [e._v(e._s(e.$t("保密"))), i("span", [e._v("（" + e._s(e.$t("只有本人可以查看")) + "）")])])], 1), i("div", {
                staticClass: "ssf-r"
            }, [i("el-button", {
                attrs: {
                    type: "primary",
                    size: "mini",
                    disabled: e.createNote.isSendShow
                },
                on: {
                    click: e.sendNote
                }
            }, [e._v(e._s("create" === e.noteStatus ? e.$t("发布") : e.$t("保存")))])], 1)])], 1) : e._e()])])])]), i("el-dialog", {
                staticClass: "note-download-dialog",
                staticStyle: {
                    "border-radius": "15px"
                },
                attrs: {
                    width: "400px",
                    visible: e.noteDownLoadVisible,
                    "append-to-body": "",
                    "show-close": !1
                },
                on: {
                    "update:visible": function(t) {
                        e.noteDownLoadVisible = t
                    }
                }
            }, [e.otherNoteDownloadItem ? i("div", {
                staticClass: "note-download-dialog__container",
                staticStyle: {
                    "border-radius": "15px !important"
                }
            }, [i("i", {
                staticClass: "el-icon-close",
                on: {
                    click: function(t) {
                        e.noteDownLoadVisible = !1
                    }
                }
            }), i("div", {
                staticClass: "ndc_userInfo"
            }, [e.otherNoteDownloadItem && e.otherNoteDownloadItem.faceUrl ? i("img", {
                attrs: {
                    src: e.otherNoteDownloadItem.faceUrl,
                    alt: ""
                }
            }) : i("img", {
                attrs: {
                    src: e.defaultAvatar || "",
                    alt: ""
                }
            }), i("div", {
                staticClass: "ndc_userInfo__msg"
            }, [i("span", [e._v(e._s(e.otherNoteDownloadItem.createByName ? e.otherNoteDownloadItem.createByName : ""))]), i("span", [e._v(e._s(e.otherNoteDownloadItem.lastModifyTime || ""))])])]), i("div", {
                staticClass: "ndc_note_title"
            }, [e._v("\n          " + e._s(e.otherNoteDownloadItem.noteName || "") + "\n        ")]), i("div", {
                staticClass: "ndc_note_content",
                staticStyle: {
                    "min-height": "132px"
                }
            }, [i("pre", [e._v(e._s(e.otherNoteDownloadItem.content || ""))])]), i("div", {
                staticClass: "ndc_form"
            }, [e._v("\n          " + e._s(e.$t("摘自《{resourceName}》", {
                resourceName: e.chapterInfo && e.chapterInfo.resourceName ? e.chapterInfo.resourceName : ""
            })) + "\n        ")]), e.chapterInfo ? i("div", {
                staticClass: "ndc_chapter"
            }, [e._v("\n          " + e._s(e.$t("第{mIndex}章 {chapterName}", {
                mIndex: e.$options.filters.convertToChinaNum(e.chapterInfo.mIndex + 1),
                chapterName: e.chapterInfo ? e.chapterInfo.chapterName : ""
            })) + "\n        ")]) : e._e(), !e.chapterInfo || "video" !== e.chapterInfo.resourceClass && "audio" !== e.chapterInfo.resourceClass && "video" !== e.chapterInfo.resourceType && "audio" !== e.chapterInfo.resourceType ? e._e() : i("div", {
                staticClass: "ndc_time"
            }, [e._v("\n          " + e._s(e.$t("笔记所在时段")) + ":"), i("img", {
                attrs: {
                    src: s("7ff9"),
                    alt: ""
                },
                on: {
                    click: function(t) {
                        return e.jumpPeriod(e.otherNoteDownloadItem, "window")
                    }
                }
            }), i("span", {
                on: {
                    click: function(t) {
                        return e.jumpPeriod(e.otherNoteDownloadItem, "window")
                    }
                }
            }, [e._v(e._s(e.jumpPeriodTime))])]), i("div", {
                staticClass: "ndc_btns"
            }, [i("el-button", {
                staticStyle: {
                    "margin-right": "20px"
                },
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(t) {
                        return e.downLoadTxt(e.otherNoteDownloadItem.noteName, e.otherNoteDownloadItem.content)
                    }
                }
            }, [e._v(e._s(e.$t("下载")))]), i("el-button", {
                on: {
                    click: function(t) {
                        e.noteDownLoadVisible = !1
                    }
                }
            }, [e._v(e._s(e.$t("取消")))])], 1)]) : e._e()]), i("el-dialog", {
                staticClass: "note-jumpPeriod-dialog",
                staticStyle: {
                    "border-radius": "15px"
                },
                attrs: {
                    width: "480px",
                    visible: e.noteJumpPeriodVisible,
                    "append-to-body": "",
                    "show-close": !1
                },
                on: {
                    "update:visible": function(t) {
                        e.noteJumpPeriodVisible = t
                    }
                }
            }, [i("div", {
                staticClass: "njd-header"
            }, [i("span", [e._v(e._s(e.$t("提示")))]), i("i", {
                staticClass: "el-icon-close",
                on: {
                    click: e.closePositionPlay
                }
            })]), i("div", {
                staticClass: "njd-main"
            }, [e.isRead() || e.userInfo && e.notejumpPeriod && e.userInfo.userId === e.notejumpPeriod.createBy || e.userInfo && e.notejumpPeriod && e.userInfo.userId !== e.notejumpPeriod.createBy && e.notejumpPeriodInfo && e.notejumpPeriodInfo.currentPosition && e.notejumpPeriodInfo.currentPosition >= e.jumpPeriodSecond ? i("p", [e._v("\n          " + e._s(e.$t("是否要跳转至笔记所在时段")) + "：" + e._s(e.jumpPeriodTime) + "?\n        ")]) : i("p", [e._v(e._s(e.$t("笔记所在时段尚未学习，请先完成学习哦")) + "～")]), i("div", {
                staticClass: "njd-main-body"
            }, [i("el-button", {
                staticStyle: {
                    "margin-right": "24px"
                },
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.confirmPositionPlay
                }
            }, [e._v(e._s(e.$t("确定")))]), i("el-button", {
                on: {
                    click: e.closePositionPlay
                }
            }, [e._v(e._s(e.$t("取消")))])], 1)])]), e.visibleNextClick ? i("div", {
                staticClass: "msg-tip-box"
            }, [i("div", {
                staticClass: "tip-wrap"
            }, [i("div", {
                staticClass: "tip-info"
            }, [i("span", {
                staticClass: "tip-close",
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.closeNextClickFunc.apply(null, arguments)
                    }
                }
            }, [i("i", {
                staticClass: "el-icon-close"
            })]), i("div", {
                staticClass: "info-left"
            }, [i("div", {
                staticClass: "info-svg"
            }, [i("svg", {
                staticClass: "icon",
                attrs: {
                    t: "1704162294070",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "7967",
                    width: "14",
                    height: "14"
                }
            }, [i("path", {
                attrs: {
                    d: "M512 0C228.430769 0 0 228.430769 0 512s228.430769 512 512 512 512-228.430769 512-512S795.569231 0 512 0z m256 413.538462l-271.753846 271.753846c-7.876923 7.876923-19.692308 11.815385-31.507692 11.815384-11.815385 0-23.630769-3.938462-31.507693-11.815384l-169.353846-169.353846c-15.753846-15.753846-15.753846-47.261538 0-63.015385 15.753846-15.753846 47.261538-15.753846 63.015385 0l137.846154 137.846154 240.246153-240.246154c15.753846-15.753846 47.261538-15.753846 63.015385 0 19.692308 15.753846 19.692308 47.261538 0 63.015385z",
                    fill: "#52C41A",
                    "p-id": "7968"
                }
            })])]), i("div", [e._v(e._s(e.$t("课程学习已完成")) + "！" + e._s(e.$t("请点击")))]), i("div", {
                staticClass: "info-next-text",
                on: {
                    click: e.handleInNextFunc
                }
            }, [e._v("\n              " + e._s(e.$t("【下一步】")) + "\n            ")]), i("div", {
                staticClass: "info-next-hint"
            }, [e._v(e._s(e.$t("继续其他步骤")))])])])])]) : e._e()], 1)], 1)
        }
          , ke = []
          , Oe = (s("55dd"),
        s("a481"),
        s("34ef"),
        s("f559"),
        s("75fc"))
          , Re = s("527b")
          , De = s("b81c")
          , Le = s("b0da")
          , Pe = s("704d")
          , Ne = s("9ff8")
          , $e = s("e873")
          , Ue = s("14f2")
          , Me = s("6846")
          , je = s.n(Me)
          , Fe = s("49fb")
          , Be = s.n(Fe)
          , Ve = s("9a48")
          , qe = s.n(Ve)
          , Qe = s("2d5a")
          , ze = s.n(Qe)
          , Ge = s("8170")
          , Je = s.n(Ge)
          , He = s("aef4")
          , We = s.n(He)
          , Ke = s("da9d")
          , Ye = s.n(Ke)
          , Ze = s("219e")
          , Xe = s("c1df")
          , et = s.n(Xe)
          , tt = s("c0e9")
          , st = s.n(tt)
          , it = s("2ef0")
          , nt = s("52db")
          , at = s.n(nt)
          , rt = s("5c44")
          , ot = s("f0a6")
          , ct = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "player-area-info"
            }, [s("div", {
                staticClass: "player-area-info-left"
            }, [s("div", {
                staticClass: "player-area-info-item",
                on: {
                    click: function(t) {
                        return e.toggleCollection(e.courseInfo.hasCollected)
                    }
                }
            }, [s("span", {
                staticClass: "label"
            }, [s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    className: "type",
                    "icon-class": e.courseInfo.hasCollected ? "star-on" : "star-off"
                }
            })], 1), s("span", {
                staticClass: "ant-rate-text",
                class: {
                    active: e.courseInfo.hasCollected
                }
            }, [e._v(e._s(e.courseInfo.collectionCount || 0))])]), s("div", {
                staticClass: "player-area-info-item",
                on: {
                    click: function(t) {
                        return e.toggleThumbsUp(e.courseInfo.hasPraised)
                    }
                }
            }, [s("span", {
                staticClass: "label"
            }, [s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    className: "type",
                    "icon-class": e.courseInfo.hasPraised ? "like-on" : "like-off"
                }
            })], 1), s("span", {
                staticClass: "ant-rate-text",
                class: {
                    active: e.courseInfo.hasPraised
                }
            }, [e._v(e._s(e.courseInfo.praiseCount || 0))])]), s("div", {
                staticClass: "player-area-info-item",
                on: {
                    click: e.shareCourse
                }
            }, [s("span", {
                staticClass: "label"
            }, [s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    className: "type",
                    "icon-class": "share"
                }
            })], 1), s("span", {
                staticClass: "ant-rate-text"
            }, [e._v(e._s(e.$t("分享")))])])]), s("div", {
                staticClass: "player-area-info-right"
            }, [e.extMap.superior && !e.isMpcn ? s("div", {
                staticClass: "player-area-info-item pointer",
                on: {
                    click: function(t) {
                        e.recommendVisible = !0
                    }
                }
            }, [s("span", {
                staticClass: "label"
            }, [e._v(e._s(e.$t("上级荐课")))]), s("span", {
                staticClass: "value mr-12"
            }, [s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    className: "type",
                    "icon-class": "recommend"
                }
            })], 1)]) : e._e(), s("div", {
                staticClass: "player-area-info-item"
            }, [s("span", {
                staticClass: "label"
            }, [e._v(e._s(e.$t("二维码")))]), s("a-popover", {
                attrs: {
                    overlayClassName: "apaas-qrcode-conatiner",
                    placement: "bottom"
                }
            }, [s("template", {
                slot: "content"
            }, [s("div", {
                staticClass: "qrcode-img"
            }, [s("div", {
                staticClass: "qrcode-img-content"
            }, [s("img", {
                attrs: {
                    src: e.qrcodeSrc
                }
            })])]), s("div", {
                staticClass: "link"
            }, [s("span", {
                on: {
                    click: e.downloadQrcode
                }
            }, [e._v(e._s(e.$t("下载二维码")))])])]), s("span", {
                staticClass: "value"
            }, [s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    className: "type",
                    "icon-class": "qrcode"
                }
            })], 1)], 2)], 1)]), s("el-dialog", {
                staticClass: "share-window",
                attrs: {
                    width: "404px",
                    visible: e.shareVisible,
                    "append-to-body": "",
                    "show-close": !1
                },
                on: {
                    "update:visible": function(t) {
                        e.shareVisible = t
                    }
                }
            }, [s("div", {
                staticClass: "sw-main"
            }, [s("div", {
                staticStyle: {
                    "background-color": "#ffffff",
                    "border-radius": "15px"
                }
            }, [s("img", {
                attrs: {
                    src: e.courseInfo.courseImage || "",
                    alt: ""
                }
            }), s("i", {
                staticClass: "el-icon-close",
                on: {
                    click: e.closeDialog
                }
            }), s("div", {
                staticClass: "swm-content"
            }, [s("div", {
                staticClass: "sc-top"
            }, [s("div", {
                staticClass: "top-line"
            }), s("p", {
                staticClass: "rate-title"
            }, [e._v(e._s(e.courseInfo.courseTitle || ""))]), s("div", {
                staticClass: "rate-area"
            }, [e.courseInfo && e.courseInfo.teacherList && e.courseInfo.teacherList.length ? s("div", {
                staticClass: "rate-area-span"
            }, [s("div", {
                staticStyle: {
                    width: "38px"
                }
            }, [e._v(e._s(e.$t("讲师")) + "：")]), s("div", {
                staticStyle: {
                    width: "80px",
                    "text-overflow": "ellipsis",
                    "overflow-x": "hidden",
                    "white-space": "nowrap"
                }
            }, [e._v("\n                  " + e._s(e.ellipsisSpan) + "\n                ")]), e.ellipsisSpan.length > 8 || e.courseInfo.teacherList.length > 1 ? s("span", [e._v(e._s(e.$t("等{num}人", {
                num: e.courseInfo.teacherList.length
            })))]) : e._e()]) : e._e(), s("el-rate", {
                attrs: {
                    disabled: "",
                    "show-score": "",
                    "text-color": "rgba(0,0,0,0.65)",
                    "score-template": "{value}"
                },
                model: {
                    value: e.courseInfo.avgPoint,
                    callback: function(t) {
                        e.$set(e.courseInfo, "avgPoint", t)
                    },
                    expression: "courseInfo.avgPoint"
                }
            }), s("span", {
                staticStyle: {
                    color: "rgba(0, 0, 0, 0.65)"
                }
            }, [e._v(e._s(e.$t("分")))])], 1)]), s("div", {
                staticClass: "sc-bottom"
            }, [s("div", {
                staticClass: "scb-href-area"
            }, [s("div", {
                staticClass: "area-item"
            }, [s("div", {
                staticClass: "ai-l"
            }, [s("span", {
                attrs: {
                    title: e.courseInfo.courseInfoShortUrl || ""
                }
            }, [e._v(e._s(e.courseInfo.courseInfoShortUrl || ""))])]), s("div", {
                staticClass: "ai-r",
                on: {
                    click: function(t) {
                        return e.copyText(e.courseInfo.courseInfoShortUrl || "")
                    }
                }
            }, [e._v("\n                  " + e._s(e.$t("复制")) + "\n                ")])])]), s("div", {
                staticClass: "qrcode-area"
            }, [s("el-image", {
                ref: "myImg",
                staticClass: "my-img",
                attrs: {
                    src: "/els/html/courseInfo/courseinfo.createQRCodeForGeneral.do?courseId=" + e.courseId,
                    "preview-src-list": ["/els/html/courseInfo/courseinfo.createQRCodeForGeneral.do?courseId=" + e.courseId]
                }
            })], 1)])])]), s("div", {
                staticClass: "swm-download"
            }, [s("div", {
                staticClass: "swm-download-btn",
                on: {
                    click: function(t) {
                        return e.saveDownload("sw-main")
                    }
                }
            }, [s("img", {
                attrs: {
                    src: e.icon_download,
                    alt: ""
                }
            }), s("span", [e._v(e._s(e.$t("下载到本地")))])])])])]), s("div", {
                staticClass: "share-window",
                staticStyle: {
                    display: "none"
                },
                attrs: {
                    id: "sw-main-content"
                }
            }, [s("div", {
                staticClass: "sw-main",
                attrs: {
                    id: "sw-main"
                }
            }, [s("div", {
                staticStyle: {
                    "background-color": "#ffffff",
                    "border-radius": "15px"
                }
            }, [s("img", {
                attrs: {
                    crossOrigin: "anonymous",
                    id: "sw-main-img",
                    src: e.courseInfo.courseImage || "",
                    alt: ""
                }
            }), s("div", {
                staticClass: "swm-content"
            }, [s("div", {
                staticClass: "sc-top"
            }, [s("div", {
                staticClass: "top-line"
            }), s("p", {
                staticClass: "rate-title"
            }, [e._v(e._s(e.courseInfo.courseTitle || ""))]), s("div", {
                staticClass: "rate-area"
            }, [e.courseInfo && e.courseInfo.teacherList && e.courseInfo.teacherList.length ? s("div", {
                staticClass: "rate-area-span"
            }, [s("div", {
                staticStyle: {
                    width: "38px"
                }
            }, [e._v(e._s(e.$t("讲师")) + "：")]), s("div", {
                staticStyle: {
                    width: "80px",
                    "text-overflow": "ellipsis",
                    "overflow-x": "hidden",
                    "white-space": "nowrap"
                }
            }, [e._v("\n                  " + e._s(e.ellipsisSpan) + "\n                  ")]), s("span", [e._v(e._s(e.$t("等{num}人", {
                num: e.courseInfo.teacherList.length
            })))])]) : e._e(), s("el-rate", {
                attrs: {
                    disabled: "",
                    "show-score": "",
                    "text-color": "rgba(0,0,0,0.65)",
                    "score-template": "{value}"
                },
                model: {
                    value: e.courseInfo.avgPoint,
                    callback: function(t) {
                        e.$set(e.courseInfo, "avgPoint", t)
                    },
                    expression: "courseInfo.avgPoint"
                }
            }), s("span", {
                staticStyle: {
                    color: "rgba(0, 0, 0, 0.65)"
                }
            }, [e._v(e._s(e.$t("分")))])], 1)]), s("div", {
                staticClass: "sc-bottom"
            }, [s("div", {
                staticClass: "qrcode-area-title"
            }, [s("span", [e._v(e._s(e.$t("扫一扫，观看精彩课程")))]), s("span", [e._v(e._s(e.$t("学习成就卓越")))])]), s("div", {
                staticClass: "qrcode-area-download"
            }, [s("img", {
                attrs: {
                    src: "/els/html/courseInfo/courseinfo.createQRCodeForGeneral.do?courseId=" + e.courseId,
                    alt: ""
                }
            })])])])])])]), e.recommendVisible ? s("div", {
                staticClass: "user-page-iframe"
            }, [s("iframe", {
                key: e.currentTime,
                attrs: {
                    src: e.currentSrc,
                    frameborder: "0",
                    oncloseIframeRangeModal: "recommendClose"
                }
            })]) : e._e()], 1)
        }
          , ut = []
          , lt = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("a-modal", {
                attrs: {
                    width: "720px",
                    visible: e.visible,
                    "append-to-body": "",
                    title: e.$t("推荐范围"),
                    cancelText: e.$t("取消"),
                    okText: e.$t("确定")
                },
                on: {
                    "update:visible": function(t) {
                        e.visible = t
                    },
                    ok: e.handleOk,
                    cancel: e.handleCancel
                }
            }, [s("a-radio-group", {
                on: {
                    change: e.onChange
                },
                model: {
                    value: e.recommendType,
                    callback: function(t) {
                        e.recommendType = t
                    },
                    expression: "recommendType"
                }
            }, [s("a-radio", {
                style: e.radioStyle,
                attrs: {
                    value: 1
                }
            }, [e._v("\n      直接下级\n    ")]), s("a-radio", {
                style: e.radioStyle,
                attrs: {
                    value: 2
                }
            }, [e._v("\n      所有下级\n    ")]), s("a-radio", {
                style: e.radioStyle,
                attrs: {
                    value: 3
                }
            }, [e._v("\n      指定下级\n    ")]), s("a-radio", {
                style: e.radioStyle,
                attrs: {
                    value: 4
                }
            }, [e._v("\n      取消推荐\n    ")])], 1), 3 === e.recommendType ? [s("div", {
                staticClass: "handle mt-10 mb-16"
            }, [s("a-button", {
                staticClass: "mr-8",
                attrs: {
                    size: "middle"
                },
                on: {
                    click: function(t) {
                        e.addVisible = !0
                    }
                }
            }, [e._v("添加人员")]), s("a-button", {
                attrs: {
                    size: "middle",
                    type: "danger"
                },
                on: {
                    click: e.handleDelete
                }
            }, [e._v("移除")])], 1), s("a-table", {
                attrs: {
                    bordered: "",
                    pagination: !1,
                    columns: e.columns,
                    "data-source": e.userList,
                    "row-selection": e.rowSelection
                }
            }), s("div", {
                staticClass: "handle-page"
            }, [s("a-pagination", {
                attrs: {
                    "default-current": 6,
                    total: 500
                }
            })], 1)] : e._e(), s("a-modal", {
                attrs: {
                    width: "720px",
                    visible: e.addVisible,
                    "append-to-body": "",
                    title: e.$t("请选择"),
                    cancelText: e.$t("取消"),
                    okText: e.$t("确定")
                },
                on: {
                    "update:visible": function(t) {
                        e.addVisible = t
                    },
                    ok: e.handleUserOk,
                    cancel: e.handleUserCancel
                }
            }, [s("div", {
                staticClass: "mb-24"
            }, [e._v("\n      工号/姓名/用户名："), s("a-input", {
                staticStyle: {
                    width: "180px"
                }
            }), s("a-button", {
                staticClass: "mr-8 ml-32",
                attrs: {
                    size: "middle",
                    type: "primary"
                },
                on: {
                    click: function(t) {
                        e.addVisible = !0
                    }
                }
            }, [e._v("查询")]), s("a-button", {
                attrs: {
                    size: "middle"
                },
                on: {
                    click: e.handleDelete
                }
            }, [e._v("重置")])], 1), s("a-table", {
                attrs: {
                    bordered: "",
                    pagination: !1,
                    columns: e.columns,
                    "data-source": e.userList,
                    "row-selection": e.rowSelection
                }
            }), s("div", {
                staticClass: "handle-page"
            }, [s("a-pagination", {
                attrs: {
                    "default-current": 6,
                    total: 500
                }
            })], 1)], 1)], 2)
        }
          , dt = []
          , ht = [{
            title: "姓名",
            dataIndex: "name",
            key: "name"
        }, {
            title: "工号",
            dataIndex: "age",
            key: "age",
            width: "12%"
        }, {
            title: "部门",
            dataIndex: "address",
            width: "30%",
            key: "address"
        }]
          , mt = {
            name: "",
            props: {
                recommendVisible: {
                    type: Boolean,
                    default: !1
                },
                extMap: {
                    type: Object,
                    default: function() {}
                },
                courseId: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    visible: !1,
                    radioStyle: {
                        display: "block",
                        height: "30px",
                        lineHeight: "30px"
                    },
                    recommendType: 1,
                    columns: ht,
                    userList: [{
                        key: 1,
                        name: "John Brown sr.",
                        age: 60,
                        address: "New York No. 1 Lake Park"
                    }, {
                        key: 2,
                        name: "Joe Black",
                        age: 32,
                        address: "Sidney No. 1 Lake Park"
                    }],
                    rowSelection: {
                        onChange: function(e, t) {
                            console.log("selectedRowKeys: ".concat(e), "selectedRows: ", t)
                        },
                        onSelect: function(e, t, s) {
                            console.log(e, t, s)
                        },
                        onSelectAll: function(e, t, s) {
                            console.log(e, t, s)
                        }
                    },
                    addVisible: !1
                }
            },
            components: {},
            methods: {
                handleCancel: function() {
                    this.visible = !1,
                    this.$emit("update:recommendVisible", !1)
                },
                handleOk: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (1 !== e.recommendType && 2 !== e.recommendType) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 3,
                                    Object(De["c"])({
                                        courseIds: [e.courseId],
                                        condition: 2 === e.recommendType ? "ALL_UNDER" : "DIRECT_UNDER"
                                    });
                                case 3:
                                    t.sent,
                                    t.next = 16;
                                    break;
                                case 6:
                                    if (3 !== e.recommendType) {
                                        t.next = 12;
                                        break
                                    }
                                    return t.next = 9,
                                    Object(De["cancelCourse"])();
                                case 9:
                                    t.sent,
                                    t.next = 16;
                                    break;
                                case 12:
                                    if (4 !== e.recommendType) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.next = 15,
                                    Object(De["cancelCourse"])();
                                case 15:
                                    t.sent;
                                case 16:
                                    e.$emit("update:recommendVisible", !1);
                                case 17:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                handleUserCancel: function() {
                    this.addVisible = !1
                },
                handleUserOk: function() {
                    this.addVisible = !1
                },
                getRecommendList: function() {
                    return Object(a["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                }
            },
            mounted: function() {
                var e;
                if (this.recommendVisible && (this.visible = !0),
                null !== (e = this.extMap) && void 0 !== e && e.recommendStatus)
                    switch (this.extMap.recommendStatus) {
                    case "DIRECT_UNDER":
                        this.recommendType = 1;
                        break;
                    case "ALL_UNDER":
                    case "ALL_RECOMMEND":
                        this.recommendType = 2;
                        break;
                    case "ASSIGN_UNDER":
                        this.recommendType = 3,
                        this.getRecommendList();
                        break
                    }
            }
        }
          , pt = mt
          , ft = (s("5180"),
        Object(y["a"])(pt, lt, dt, !1, null, "bd5d4cd6", null))
          , vt = ft.exports
          , gt = s("c441")
          , yt = {
            components: {
                Recommend: vt
            },
            props: {
                courseId: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                p: function() {
                    return this.$route.query.p
                },
                qrcodeSrc: function() {
                    if (this.courseInfo.courseId) {
                        var e = window.$cookies.get("eln_session_id") || getUrl("eln_session_id") || "";
                        return "/els/html/courseInfo/courseinfo.createQRCodeForGeneral.do?eln_session_id=".concat(e, "&elsSign=").concat(e, "&courseId=").concat(this.courseInfo.courseId)
                    }
                    return ""
                },
                showPc: function() {
                    if (this.courseInfo.terminal) {
                        var e = this.courseInfo.terminal.split(",");
                        return e.includes("COMPUTER")
                    }
                    return !1
                },
                showMobile: function() {
                    if (this.courseInfo.terminal) {
                        var e = this.courseInfo.terminal.split(",");
                        return e.includes("IPHONE") || e.includes("IPAD") || e.includes("ANDROIDPHONE") || e.includes("ANDROIDPAD")
                    }
                    return !1
                },
                ellipsisSpan: function() {
                    if (this.courseInfo.teacherList && this.courseInfo.teacherList.length) {
                        var e = "";
                        return this.courseInfo.teacherList.forEach((function(t, s) {
                            e += "".concat(0 === s ? "" : ",").concat(t.teacherName)
                        }
                        )),
                        e.length > 8 ? e.slice(0, 8) + "..." : e
                    }
                    return ""
                },
                currentSrc: function() {
                    return "".concat(location.origin, "/user-page/range-in-iframe?courseId=").concat(this.courseId, "&recommendStatus=").concat(this.courseInfo.extMap.recommendStatus, "&_t=").concat(this.currentTime)
                }
            },
            data: function() {
                return {
                    icon_download: qe.a,
                    icon_learning: Be.a,
                    courseInfo: {},
                    shareVisible: !1,
                    recommendVisible: !1,
                    extMap: {},
                    currentTime: (new Date).getTime(),
                    isMpcn: Object(gt["b"])()
                }
            },
            created: function() {
                window.recommendClose = this.recommendClose,
                window.closeIframeRangeModal = this.recommendClose
            },
            mounted: function() {
                this.getCourseInfo()
            },
            methods: {
                recommendClose: function(e, t) {
                    console.log(123456),
                    console.log(e),
                    console.log(t),
                    this.currentTime = (new Date).getTime(),
                    this.recommendVisible = !1,
                    this.courseInfo.extMap.recommendStatus = t
                },
                getImage: function(e, t) {
                    return Object(a["a"])(regeneratorRuntime.mark((function s() {
                        return regeneratorRuntime.wrap((function(s) {
                            while (1)
                                switch (s.prev = s.next) {
                                case 0:
                                    return s.abrupt("return", new Promise((function(s, i) {
                                        if (e.includes("data:image"))
                                            return s();
                                        var n = new XMLHttpRequest;
                                        n.open("get", e, !0),
                                        n.setRequestHeader("Cache-Control", "no-cache"),
                                        n.responseType = "blob",
                                        n.onload = function() {
                                            200 == this.status && (document.getElementById(t).src = URL.createObjectURL(this.response),
                                            s())
                                        }
                                        ,
                                        n.onerror = function(e) {
                                            i(e)
                                        }
                                        ,
                                        n.send()
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return s.stop()
                                }
                        }
                        ), s)
                    }
                    )))()
                },
                getImageBase64: function(e, t) {
                    return Object(a["a"])(regeneratorRuntime.mark((function s() {
                        var i, n;
                        return regeneratorRuntime.wrap((function(s) {
                            while (1)
                                switch (s.prev = s.next) {
                                case 0:
                                    return s.prev = 0,
                                    s.next = 3,
                                    fetch(e, {
                                        credentials: "same-origin"
                                    });
                                case 3:
                                    if (i = s.sent,
                                    i.ok) {
                                        s.next = 6;
                                        break
                                    }
                                    throw new Error("HTTP error! status: ".concat(i.status));
                                case 6:
                                    return s.next = 8,
                                    i.blob();
                                case 8:
                                    return n = s.sent,
                                    s.abrupt("return", new Promise((function(e, s) {
                                        var i = new FileReader;
                                        i.onloadend = function() {
                                            document.getElementById(t).src = i.result,
                                            e(i.result)
                                        }
                                        ,
                                        i.onerror = s,
                                        i.readAsDataURL(n)
                                    }
                                    )));
                                case 12:
                                    return s.prev = 12,
                                    s.t0 = s["catch"](0),
                                    console.error("获取图片失败:", s.t0),
                                    s.abrupt("return", null);
                                case 16:
                                case "end":
                                    return s.stop()
                                }
                        }
                        ), s, null, [[0, 12]])
                    }
                    )))()
                },
                saveDownload: function(e) {
                    var t = this
                      , s = this
                      , i = document.querySelector("#sw-main-img")
                      , n = i.src.includes("tbc-rms/nfs/getImgUrl?") ? this.getImageBase64 : this.getImage;
                    n(i.src, "sw-main-img").then((function(e) {
                        console.log("res", e)
                    }
                    )).finally((function() {
                        var e = document.getElementById("sw-main-content");
                        e.style.display = "block",
                        s.$nextTick((function() {
                            st()(document.getElementById("sw-main"), {
                                allowTaint: !1,
                                useCORS: !0
                            }).then((function(i) {
                                var n = i.toDataURL("image/png")
                                  , a = s.courseInfo && s.courseInfo.courseTitle ? s.courseInfo.courseTitle + t.$t("分享") : t.$t("默认课程分享");
                                s.downloadShareFile(a, n),
                                e.style.display = "none"
                            }
                            ))
                        }
                        ))
                    }
                    ))
                },
                downloadShareFile: function(e, t) {
                    var s = function(e) {
                        for (var t = e.split(";base64,"), s = t[0].split(":")[1], i = window.atob(t[1]), n = i.length, a = new Uint8Array(n), r = 0; r < n; ++r)
                            a[r] = i.charCodeAt(r);
                        return new Blob([a],{
                            type: s
                        })
                    }
                      , i = document.createElement("a")
                      , n = s(t)
                      , a = document.createEvent("HTMLEvents");
                    a.initEvent("click", !0, !0),
                    i.download = e,
                    i.href = URL.createObjectURL(n),
                    i.click()
                },
                copyText: function(e) {
                    var t = document.createElement("input");
                    t.setAttribute("id", "cp_hgz_input"),
                    t.value = e,
                    document.getElementsByTagName("body")[0].appendChild(t),
                    document.getElementById("cp_hgz_input").select(),
                    document.execCommand("copy"),
                    document.getElementById("cp_hgz_input").remove(),
                    c["a"].success("课程链接已复制，快去分享吧~")
                },
                closeDialog: function() {
                    this.shareVisible = !1
                },
                shareCourse: function() {
                    this.shareVisible = !0
                },
                downloadQrcode: function() {
                    window.open("/els/html/courseInfo/courseinfo.downloadQRCodeImgForGeneral.do?courseId=".concat(this.courseInfo.courseId), "_blank")
                },
                toggleThumbsUp: Object(it["throttle"])((function(e) {
                    var t = this
                      , s = {
                        coursePraise: {
                            courseId: this.courseId,
                            praiseStatus: !e
                        }
                    };
                    Object(De["w"])(s).then((function() {
                        t.getCourseInfo()
                    }
                    ))
                }
                ), 300),
                toggleCollection: Object(it["throttle"])((function(e) {
                    var t = this
                      , s = {
                        courseId: this.courseId
                    };
                    e ? Object(De["e"])(s).then((function() {
                        t.getCourseInfo()
                    }
                    )) : Object(De["h"])(s).then((function() {
                        t.getCourseInfo()
                    }
                    ))
                }
                ), 300),
                getCourseInfo: function() {
                    var e = this
                      , t = {
                        courseId: this.courseId
                    };
                    Object(De["q"])(t).then((function(t) {
                        var s;
                        e.courseInfo = t.bizResult || {
                            selectCount: 0,
                            coursePeriod: 0,
                            courseScore: 0,
                            categoryNamePath: "",
                            getWay: "",
                            publishDate: "",
                            teacherList: [],
                            meaning: "",
                            orientObj: "",
                            objectives: "",
                            avgPoint: 0
                        },
                        null !== (s = t.bizResult) && void 0 !== s && s.extMap && (e.extMap = t.bizResult.extMap)
                    }
                    ))
                }
            }
        }
          , Ct = yt
          , It = (s("dc8d"),
        Object(y["a"])(Ct, ct, ut, !1, null, "ced3fef8", null))
          , At = It.exports
          , St = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                class: ["tabs", e.type, e.size]
            }, [s("div", {
                staticClass: "tabs-header"
            }, [s("div", {
                staticClass: "tabs-header-tab"
            }, e._l(e.tabs, (function(t) {
                return s("div", {
                    key: t.value,
                    staticClass: "tabs-header-item",
                    class: ["tabs-header-item", e.currentTab === t.value ? "tabs-header-item-active" : ""],
                    on: {
                        click: function(s) {
                            return e.changeTab(t)
                        }
                    }
                }, [s("span", {
                    staticClass: "tabs-header-item-text"
                }, [s("span", [e._v(e._s(t.label))]), t.showAIIcon ? [!e.isPublished || e.currentResourceAiLearnData && 0 === e.currentResourceAiLearnData.length ? s("svg-icon", {
                    attrs: {
                        "icon-class": "ai-star",
                        "class-name": "tabs-header-item-text-AI",
                        "use-svg": ""
                    }
                }) : s("svg-icon", {
                    attrs: {
                        "icon-class": "AI2",
                        "class-name": "tabs-header-item-text-AI",
                        "use-svg": ""
                    }
                })] : e._e()], 2), e.currentTab === t.value ? s("div", {
                    staticClass: "highlight-line"
                }) : e._e()])
            }
            )), 0), e._t("extra")], 2)])
        }
          , Tt = []
          , wt = {
            components: {},
            props: {
                value: {
                    type: String,
                    default: ""
                },
                tabs: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                type: {
                    type: String,
                    default: ""
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                size: {
                    type: String,
                    default: "default"
                },
                currentResourceAiLearnData: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                isPublished: {
                    type: Boolean,
                    default: !1
                }
            },
            watch: {
                value: function(e) {
                    this.currentTab = e
                }
            },
            data: function() {
                return {
                    currentTab: this.value
                }
            },
            mounted: function() {
                this.currentTab = this.value || this.tabs[0].value,
                this.$emit("input", this.currentTab),
                console.log("555555555555555", this.isPublished)
            },
            methods: {
                changeTab: function(e) {
                    this.disabled || this.currentTab !== e.value && (this.currentTab = e.value,
                    this.$emit("input", e.value),
                    this.$emit("change", e))
                }
            }
        }
          , bt = wt
          , _t = (s("ce94"),
        Object(y["a"])(bt, St, Tt, !1, null, "eaea6172", null))
          , xt = _t.exports
          , Et = s("eeba")
          , kt = s("e2ca")
          , Ot = s.n(kt);
        function Rt(e, t) {
            var s = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                s.push.apply(s, i)
            }
            return s
        }
        function Dt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Rt(Object(s), !0).forEach((function(t) {
                    Object(r["a"])(e, t, s[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : Rt(Object(s)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                }
                ))
            }
            return e
        }
        var Lt = null;
        try {
            var Pt = new Blob([Et["a"]],{
                type: "application/javascript"
            });
            Lt = new Worker(URL.createObjectURL(Pt))
        } catch (fn) {
            console.log(fn)
        }
        var Nt = function(e) {
            return window.$cookies.get(e)
        }
          , $t = {
            name: "course-play",
            props: {
                isGetScoreStep: {
                    type: Boolean,
                    default: !1
                },
                isLastStep: {
                    type: Boolean,
                    default: !1
                },
                isPreview: {
                    type: Boolean,
                    default: !1
                },
                courseId: {
                    type: String,
                    default: ""
                },
                providerCorpCode: {
                    type: String,
                    default: ""
                },
                sourceId: {
                    type: String,
                    default: ""
                },
                courseObj: {
                    type: Object,
                    default: function() {}
                },
                currentStep: {
                    type: String,
                    default: ""
                },
                isOpenFromAdmin: {
                    type: Boolean,
                    default: !1
                },
                showAiLearn: {
                    type: Boolean,
                    default: !1
                },
                captionEvent: {
                    type: Function,
                    default: function() {}
                },
                translateLoading: {
                    type: Boolean,
                    default: !1
                },
                showMask: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    urlJson: null,
                    isPlaying: !0,
                    TimeId1: null,
                    courseData: [],
                    curId: "",
                    curType: "",
                    minStudyTime: "",
                    curVideoId: "",
                    noteId: "",
                    resourceRelIdNoteId: "",
                    resourceRelId: "",
                    curTime: null,
                    seek: 0,
                    curIndex: [0, 0],
                    open: !0,
                    recordList: [],
                    recordTime: 0,
                    recordTimeId: null,
                    recordTimeTemp: 0,
                    workerRecordTimeTemp: 0,
                    recordTimeIdTemp: null,
                    studyRate: 0,
                    isReplayBtn: !1,
                    canSaveRecord: !0,
                    recordSaveState: {
                        resourceId: "",
                        timeCheckpoint: 0,
                        minStudyTime: !1
                    },
                    seeking: !1,
                    seeked: "",
                    videoCheck: !0,
                    canRecord: !0,
                    startTime: 0,
                    endTime: 0,
                    continueTime: 0,
                    isVideo: !1,
                    pageIndex: 0,
                    pcEdgeBrowerPreview: !1,
                    curTimeToFinish: 0,
                    noPreviewCurTimeToFinish: 0,
                    corpCode: "",
                    excludeCorpCodeList: [],
                    isIE11: !1,
                    isEdge: !1,
                    mustReplayCanFinish: !1,
                    verificationType: "",
                    hangUpFlag: !1,
                    preventCheatFlag: !1,
                    preventCheatTime: 0,
                    preventHangTime: 0,
                    pauseCountTime: 0,
                    maxTime: 0,
                    minTime: 0,
                    checkType: 2,
                    pausecountTimer: null,
                    firstEnterStudyFlag: !1,
                    studyLogData: {
                        studyLogVO: {
                            minStudyTime: "",
                            courseCode: "",
                            courseStandard: "ONLINEVIDEOCOURSE",
                            courseItemId: "",
                            courseTitle: "",
                            videoDuration: "",
                            courseItemName: "",
                            courseId: "",
                            mark: ""
                        },
                        eventType: ""
                    },
                    allowDrag: !1,
                    allowHighSpeed: !1,
                    allowMinStudyTime: !1,
                    addVideoClickFlag: !1,
                    settingBtn: !1,
                    heartBeatFlag: !1,
                    handoutVideo: !1,
                    handoutVideoNoteId: "/courseSetting/preview/handout?id=null",
                    resetHandoutAndVideoProps: !1,
                    seekingTimer: null,
                    seekingSaveFlag: !0,
                    activeName: "contents",
                    icon_completed: je.a,
                    icon_learning: Be.a,
                    shareVisible: !1,
                    teacherValue: 3.7,
                    icon_download: qe.a,
                    isHoverActive: !1,
                    btnRightActive: ze.a,
                    btnRightDefault: Je.a,
                    btnLeftActive: We.a,
                    btnLeftDefault: Ye.a,
                    navMsg: "myNote",
                    noteMsg: "",
                    isCreateNote: !1,
                    createNote: {
                        note_title: "",
                        note_content: "",
                        secrecy: !1,
                        isSendShow: !1,
                        noteId: ""
                    },
                    noteDownLoadVisible: !1,
                    otherNoteDownloadItem: null,
                    noteJumpPeriodVisible: !1,
                    navActive: "1",
                    discussionValue: "",
                    replyValue: "",
                    commentList: [],
                    sendCommentIsShow: !1,
                    sendReplyIsShow: !1,
                    referenceMaterial: [],
                    courseInfo: {
                        selectCount: 0,
                        coursePeriod: 0,
                        courseScore: 0,
                        categoryNamePath: "",
                        getWay: "",
                        publishDate: "",
                        teacherList: [],
                        meaning: "",
                        orientObj: "",
                        objectives: "",
                        avgPoint: 0
                    },
                    extendMsgs: [],
                    moment: et.a,
                    userInfo: null,
                    loading: !1,
                    condition: {
                        pageNo: 1,
                        pageSize: 10
                    },
                    satelliteList: [],
                    totalNumber: 0,
                    totalPages: 0,
                    listLoading: !1,
                    myNotes: [],
                    myNoteCondition: {
                        pageNo: 1,
                        pageSize: 1e4
                    },
                    otherNotes: [],
                    otherNoteCondition: {
                        pageNo: 1,
                        pageSize: 1e4
                    },
                    jumpPeriodSecond: 0,
                    jumpPeriodTime: 0,
                    noteStatus: "create",
                    defaultAvatar: at.a,
                    notejumpPeriod: null,
                    singleNoteInfo: null,
                    notejumpPeriodInfo: null,
                    chapterInfo: null,
                    isfullscreen: "",
                    timer: null,
                    isbizResultShow: !1,
                    hostName: window.location.origin,
                    coursePlayBoxHeight: "670px",
                    infixTests: [],
                    infixTest: {},
                    campData: {},
                    showCamp: !1,
                    campVisible: !1,
                    notShowCampAd: !1,
                    visibleNextClick: !1,
                    tipRemainder: 5,
                    isOpenHeartbeat: !1,
                    beatV2Time: 6e4,
                    beatV2Timer: null,
                    isWdhacELearning: !0,
                    hasModalSuccess: !1,
                    tbcAIKitMittTimer: null,
                    tbcAIKitDelayTimer: null,
                    tbcAIKitMitt: null,
                    templateSeek: null,
                    templateSeek1: null,
                    playerInstance: null,
                    picUrl: "",
                    enptyNotePng: Ot.a,
                    aliVersion: null,
                    hasGetRecord: !1,
                    isMpcn: Object(gt["b"])()
                }
            },
            components: {
                AliPlayer: Pe["a"],
                AliyunPreview: Ne["a"],
                PreventCheat: $e["a"],
                HangUp: Ue["a"],
                Test: Ze["a"],
                CourseBar: At,
                Tabs: xt
            },
            computed: {
                tabs: function() {
                    return this.isPreview || this.showMask ? [{
                        label: this.$t("目录"),
                        value: "contents"
                    }] : [{
                        label: this.$t("目录"),
                        value: "contents"
                    }, {
                        label: this.$t("笔记"),
                        value: "note"
                    }]
                },
                isRead: function() {
                    return function() {
                        var e = this.courseData[this.curIndex[0]] ? this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].itemId : "";
                        if (e && this.notejumpPeriod && this.notejumpPeriod.chapterId && this.curChapterId && this.userInfo && this.userInfo.userId && this.notejumpPeriod.createBy && this.notejumpPeriod.sectionId === e && this.curChapterId === this.notejumpPeriod.chapterId && this.userInfo.userId !== this.notejumpPeriod.createBy) {
                            var t = "";
                            "video" === this.curType ? t = document.querySelector("#J_prismPlayer>video") : "audio" === this.curType && (t = document.querySelector("#J_prismPlayer>audio"),
                            t || (t = document.querySelector("#J_prismPlayer>video")));
                            var s = 0;
                            if (t && (s = t.currentTime ? t.currentTime : 0),
                            s >= this.notejumpPeriod.playbackPosition)
                                return !0
                        }
                        return !1
                    }
                },
                ellipsisSpan: function() {
                    if (this.courseInfo.teacherList && this.courseInfo.teacherList.length) {
                        var e = "";
                        return this.courseInfo.teacherList.forEach((function(t, s) {
                            e += "".concat(0 === s ? "" : ",").concat(t.teacherName)
                        }
                        )),
                        e.length > 8 ? e.slice(0, 8) + "..." : e
                    }
                    return ""
                },
                isShowJumpPeriod: function() {
                    var e = this;
                    return function(t) {
                        var s = "";
                        return e.courseData.forEach((function(e, i) {
                            e.chapterId === t.chapterId && e.resourceDTOS.forEach((function(e, i) {
                                e.itemId === t.sectionId && (s = e.resourceType || e.resourceClass || "")
                            }
                            ))
                        }
                        )),
                        "video" === s || "audio" === s
                    }
                },
                gWay: function() {
                    if (this.courseInfo) {
                        var e = this.courseInfo.getWay;
                        if (e) {
                            if ("STUDYPLAN" === e || "STUDY_PLAN" === e)
                                return this.$t("安排课程");
                            if ("SELF" === e)
                                return this.$t("自选");
                            if ("BTM_PROJECT" === e)
                                return this.$t("培训项目");
                            if ("RM_PORJECT" === e)
                                return this.$t("学习地图");
                            if ("POST_SYSTEM" === e)
                                return this.$t("岗位体系");
                            if ("EP_PROJECT" === e)
                                return this.$t("时光易培");
                            if ("CIRCLE_PROJECT" === e)
                                return this.$t("岗位课程包")
                        }
                        return ""
                    }
                    return ""
                },
                noMore: function() {
                    return this.commentList.length === this.totalNumber
                },
                disabled: function() {
                    return this.loading || this.noMore
                },
                language: function() {
                    return window.$cookies.get("local_") || "zh_CN"
                },
                aliPlayer: function() {
                    return "video" === this.curType || "audio" === this.curType ? this.$refs.aliPlayer : null
                },
                player: function() {
                    var e;
                    return this.playerInstance || (null === (e = this.$refs.aliPlayer) || void 0 === e ? void 0 : e.player) || null
                },
                curChapterId: function() {
                    return this.courseData[this.curIndex[0]].chapterId
                },
                curChapterName: function() {
                    return this.courseData[this.curIndex[0]] && this.courseData[this.curIndex[0]].chapterName ? this.courseData[this.curIndex[0]].chapterName : ""
                },
                curChapterContent: function() {
                    return this.courseData[this.curIndex[0]]
                },
                curInfo: function() {
                    return this.curIndex && this.courseData && this.courseData.length > 0 ? this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]] : null
                },
                currentStudyTime: function() {
                    var e = this.curIndex && this.courseData && this.courseData.length > 0 ? this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]] : null
                      , t = e && e.currentStudyTime ? e.currentStudyTime : 0;
                    return e ? e.minStudyTime - t - this.recordTime : 0
                },
                nextIndex: function() {
                    if (this.courseData[this.curIndex[0]] && !this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1] + 1])
                        return this.courseData[this.curIndex[0] + 1] ? [this.curIndex[0] + 1, 0] : null;
                    var e = [this.curIndex[0], this.curIndex[1] + 1];
                    return e && this.exitFullscreen(),
                    e
                },
                nextInfo: function() {
                    return this.nextIndex ? this.courseData[this.nextIndex[0]].resourceDTOS[this.nextIndex[1]] : null
                },
                nextId: function() {
                    return this.nextInfo ? this.nextInfo.resourceId : ""
                },
                isDefaultHideControl: function() {
                    return this.isVideo && !this.noteId
                },
                urlIframeHasControl: function() {
                    var e = this.$route.query.from
                      , t = this.currentStudyTime
                      , s = this.urlJson;
                    return "preview" === e || (!!("preview" !== e && t > 0 && s && s.minStudyTime) || !("preview" === e || !s || 0 !== t && !s.confirmFinish || !s.minStudyTime))
                }
            },
            watch: {
                curIndex: {
                    handler: function() {
                        var e = this;
                        this.curVideoId = this.courseData[this.curIndex[0]] ? this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].resourceRelId : "",
                        this.noteId = this.courseData[this.curIndex[0]] ? this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].noteId : "",
                        this.infixTests = this.courseData[this.curIndex[0]] && this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].infixTests || [],
                        this.resourceRelIdNoteId = this.courseData[this.curIndex[0]] ? (this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].noteResource || {}).resourceRelId : "",
                        this.curTime = {
                            minStudyTime: this.courseData[this.curIndex[0]] && this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].minStudyTime ? this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].minStudyTime : "",
                            currentStudyTime: this.courseData[this.curIndex[0]] && this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].currentStudyTime ? this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].currentStudyTime : 0
                        },
                        this.courseData[this.curIndex[0]] && "url" === this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].resourceType && this.$store.dispatch("preview/fetchPreviewAction", {
                            param: {
                                providerCorpCode: this.providerCorpCode,
                                chapterId: this.courseData[this.curIndex[0]].chapterId,
                                id: this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].resourceId
                            },
                            callback: function(t) {
                                e.urlJson = t;
                                var s = e.recordList.find((function(t) {
                                    return t.resourceId === e.curId
                                }
                                ));
                                s && e.$set(e.urlJson, "confirmFinish", s.confirmFinish),
                                t.content || (setTimeout((function() {
                                    var e = document.getElementsByTagName("iframe")[0];
                                    e.style.display = "none"
                                }
                                ), 0),
                                setTimeout((function() {
                                    var e = document.getElementsByTagName("iframe")[0];
                                    e.style.display = "block",
                                    e.style.height = "100%",
                                    e.style.width = "100%"
                                }
                                ), 0))
                            }
                        })
                    },
                    deep: !0
                },
                courseData: {
                    handler: function() {
                        var e = this;
                        this.curVideoId = this.courseData[this.curIndex[0]] ? this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].resourceRelId : "",
                        this.noteId = this.courseData[this.curIndex[0]] ? this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].noteId : "",
                        this.infixTests = this.courseData[this.curIndex[0]] && this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].infixTests || [],
                        this.resourceRelIdNoteId = this.courseData[this.curIndex[0]] ? (this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].noteResource || {}).resourceRelId : "",
                        this.curTime = {
                            minStudyTime: this.courseData[this.curIndex[0]] ? this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].minStudyTime : "",
                            currentStudyTime: this.courseData[this.curIndex[0]] && this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].currentStudyTime ? this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].currentStudyTime : 0
                        },
                        this.courseData[this.curIndex[0]] && "url" === this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].resourceType && this.$store.dispatch("preview/fetchPreviewAction", {
                            param: {
                                providerCorpCode: this.providerCorpCode,
                                chapterId: this.courseData[this.curIndex[0]].chapterId,
                                id: this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].resourceId
                            },
                            callback: function(t) {
                                e.urlJson = t;
                                var s = e.recordList.find((function(t) {
                                    return t.resourceId === e.curId
                                }
                                ));
                                e.initHeart(),
                                s && e.$set(e.urlJson, "confirmFinish", s.confirmFinish),
                                t.content || (setTimeout((function() {
                                    var e = document.getElementsByTagName("iframe")[0];
                                    e.style.display = "none"
                                }
                                ), 0),
                                setTimeout((function() {
                                    var e = document.getElementsByTagName("iframe")[0];
                                    e.style.display = "block",
                                    e.style.height = "100%",
                                    e.style.width = "100%"
                                }
                                ), 0))
                            }
                        })
                    },
                    deep: !0
                },
                currentStudyTime: function(e, t) {
                    this.canTrackStudy() ? 0 === e ? "video" !== this.curType && "audio" !== this.curType && (this.recordTimeId && clearInterval(this.recordTimeId),
                    this.recordTimeIdTemp && (clearInterval(this.recordTimeIdTemp),
                    Lt && Lt.postMessage({
                        command: "stop"
                    })),
                    this.updateCourseRecord()) : e < 0 && 0 === t && "video" !== this.curType && "audio" !== this.curType && this.checkNowStudyStatusFunc() : this.stopStudyTimers()
                },
                recordTime: function(e) {
                    var t = this;
                    if ("video" !== this.curType && "audio" !== this.curType && e % 180 === 0 && 0 !== e && (this.updateCourseRecord(1),
                    this.recordTimeId && clearInterval(this.recordTimeId)),
                    ("video" === this.curType || "audio" === this.curType) && this.isEdge && this.excludeCorpCodeList.indexOf(this.corpCode) > -1) {
                        var s;
                        try {
                            s = this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].minStudyTime
                        } catch (fn) {
                            console.log(fn)
                        }
                        this.curTimeToFinish = s || Math.round(this.player.getDuration() * this.courseData[this.curIndex[0]].finishPercent),
                        this.noPreviewCurTimeToFinish = Math.round(.5 * this.player.getDuration())
                    }
                    ("video" === this.curType || "audio" === this.curType) && this.isEdge && this.excludeCorpCodeList.indexOf(this.corpCode) > -1 && e === this.noPreviewCurTimeToFinish && (this.canRecord && (this.updateCourseRecord(),
                    this.canRecord = !1),
                    this.TimeId1 && clearTimeout(this.TimeId1),
                    this.TimeId1 = setTimeout((function() {
                        t.canRecord = !0
                    }
                    ), 1e3)),
                    ("video" === this.curType || "audio" === this.curType) && this.isIE11 && this.excludeCorpCodeList.indexOf(this.corpCode) > -1 && e === this.noPreviewCurTimeToFinish && !this.allowDrag && (this.canRecord && (this.updateCourseRecord(),
                    this.canRecord = !1),
                    this.TimeId1 && clearTimeout(this.TimeId1),
                    this.TimeId1 = setTimeout((function() {
                        t.canRecord = !0
                    }
                    ), 1e3))
                },
                urlJson: {
                    handler: function(e, t) {
                        t || (t = {
                            content: ""
                        }),
                        "url" === this.curType && e.content && e.content !== t.content && ot["a"].init({
                            wrapSelector: ".aliPlayer-content .ac-main",
                            iframeSelector: ".iframe-content",
                            fullSelector: ".icon.iconfont.icon-quanping.full-screen",
                            url: e.content
                        })
                    },
                    deep: !0
                },
                curId: function() {
                    this.$emit("resourceChange", {
                        courseId: this.courseData[this.curIndex[0]].courseId,
                        chapterId: this.courseData[this.curIndex[0]].chapterId,
                        resourceId: this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].resourceId,
                        resourceType: this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].resourceType,
                        resourceName: this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].resourceName,
                        resourceRelId: this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].resourceRelId
                    })
                },
                showMask: {
                    handler: function(e, t) {
                        e && this.stopStudyTimers(),
                        t && !e && this.onMounted()
                    }
                }
            },
            directives: {
                focus: {
                    inserted: function(e, t) {
                        var s = t.value;
                        s && e.focus()
                    }
                }
            },
            methods: {
                initDocumentPreventCheat: function() {
                    var e = this;
                    this.canTrackStudy() && "audio" != this.curType && "video" != this.curType && this.$nextTick((function() {
                        e.preventCheatFlag && e.$refs.preventCheat ? e.$refs.preventCheat.initPreventCheat(e.preventCheatTime) : e.getSystemSeting()
                    }
                    ))
                },
                canTrackStudy: function() {
                    return !this.isPreview && !this.showMask && !1 === this.pcEdgeBrowerPreview
                },
                stopStudyTimers: function() {
                    this.recordTimeId && (clearInterval(this.recordTimeId),
                    this.recordTimeId = null),
                    this.recordTimeIdTemp && (clearInterval(this.recordTimeIdTemp),
                    this.recordTimeIdTemp = null),
                    Lt && Lt.postMessage({
                        command: "stop"
                    })
                },
                syncPlayerInstance: function() {
                    var e;
                    return this.playerInstance = (null === (e = this.$refs.aliPlayer) || void 0 === e ? void 0 : e.player) || null,
                    this.playerInstance
                },
                getPlayer: function() {
                    return this.player || this.syncPlayerInstance()
                },
                onMounted: function() {
                    var e = this
                      , t = window.$cookies.get("corpCode") || window.$cookies.get("corp_code");
                    this.isWdhacELearning = !t || "wdhac_e_learning" !== t,
                    this.coursePlayBoxHeight = document.getElementsByClassName("player-container")[0].offsetWidth / 1.777 + (this.showMask ? 44 : 48) + "px",
                    this.isPreview && (document.getElementsByClassName("course-play-container")[0].style.height = document.getElementsByClassName("player-container")[0].offsetWidth / 1.777 + 48 + "px"),
                    window.addEventListener("resize", (function() {
                        document.getElementsByClassName("course-play-container")[0].style.height = document.getElementsByClassName("player-container")[0].offsetWidth / 1.777 + 48 + "px"
                    }
                    )),
                    this.corpCode = window.$cookies.get("corp_code") || window.$cookies.get("corpCode"),
                    this.registerClosePageEvent(),
                    this.registerSpaceEvent(),
                    this.clickCloseSaveRecord(),
                    this.$store.dispatch("nav1/fetchGetAuthCorpsAction", {
                        type: 0
                    }).then((function(t) {
                        e.excludeCorpCodeList = t,
                        e.pcEdgeBrowerPreview = e.checkBrowerIsEdgeAndIE11(),
                        e.syncStudyRecord(),
                        e.getCourseData(),
                        e.getStudyRate(),
                        e.startTime = Date.now()
                    }
                    )),
                    Re["a"].getUserInfo().then((function(t) {
                        e.userInfo = t.bizResult
                    }
                    )),
                    this.getMyNoteAndOtherNoteList("me", this.myNoteCondition),
                    Object(De["g"])({
                        courseId: this.courseId
                    }).then((function(t) {
                        var s = t.bizResult;
                        e.isbizResultShow = s
                    }
                    ));
                    try {
                        var s = window.parent.contentWindow || window.parent.window
                          , i = s && s.document.querySelector("#onlineDiv div")
                          , n = s && s.document.querySelector("#goBack .cl-go-link");
                        if (n && (n.innerText = this.$t("关闭")),
                        i) {
                            if (i.innerText = this.$t("在线客服"),
                            "zh" === this.language)
                                return;
                            i.style.lineHeight = "12px",
                            i.style.bottom = "5px"
                        }
                    } catch (fn) {
                        console.log(fn)
                    }
                    if (!this.showMask && (Lt && Lt.postMessage({
                        command: "reset"
                    }),
                    this.workerRecordTimeTemp = 0,
                    Lt && (Lt.onmessage = function(t) {
                        var s = t.data
                          , i = s.type
                          , n = s.timeTemp;
                        "update" === i && (console.log("主计时器:".concat(e.recordTimeTemp, "--副计时器:").concat(n)),
                        e.workerRecordTimeTemp = n)
                    }
                    ),
                    !this.isPreview)) {
                        var a = !1;
                        Object(Le["c"])().then((function(t) {
                            e.isOpenHeartbeat = t.bizResult,
                            a = !0
                        }
                        )).catch((function(e) {
                            console.log(e),
                            a = !0
                        }
                        ));
                        var r = setInterval((function() {
                            e.curInfo && e.curInfo.itemId && a && (clearInterval(r),
                            e.isOpenHeartbeat && e.stopCurrentAndStartNextBeatV2())
                        }
                        ), 100)
                    }
                },
                handleOpen: function() {
                    this.open = !this.open,
                    this.$nextTick((function() {
                        document.getElementsByClassName("course-play-container")[0].style.height = document.getElementsByClassName("player-container")[0].offsetWidth / 1.777 + 48 + "px"
                    }
                    ))
                },
                downLoadTxt: function(e, t) {
                    var s = document.createElement("a");
                    if (s.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)),
                    s.setAttribute("download", e),
                    document.createEvent) {
                        var i = document.createEvent("MouseEvents");
                        i.initEvent("click", !0, !0),
                        s.dispatchEvent(i)
                    } else
                        s.click();
                    this.noteDownLoadVisible = !1
                },
                toggleThumbsUp: Object(it["throttle"])((function(e) {
                    var t = this
                      , s = {
                        coursePraise: {
                            courseId: this.courseId,
                            praiseStatus: !e
                        }
                    };
                    Object(De["w"])(s).then((function() {
                        t.getCourseInfo()
                    }
                    ))
                }
                ), 300),
                toggleCollection: Object(it["throttle"])((function(e) {
                    var t = this
                      , s = {
                        courseId: this.courseId
                    };
                    e ? Object(De["e"])(s).then((function() {
                        t.getCourseInfo()
                    }
                    )) : Object(De["h"])(s).then((function() {
                        t.getCourseInfo()
                    }
                    ))
                }
                ), 300),
                downLoadRefer: function(e) {
                    window.open(e.refStoredFileId, "target")
                },
                showRefer: function(e) {
                    window.open(e.refStoredFileId, "target")
                },
                queryReferences: function() {
                    var e = this
                      , t = {
                        courseId: this.courseId
                    };
                    Object(De["j"])(t).then((function(t) {
                        var s = t.bizResult;
                        e.referenceMaterial = s || []
                    }
                    ))
                },
                initScroll: function() {
                    this.loading = !1,
                    this.condition.pageNo = 1,
                    this.commentList = [],
                    this.totalNumber = 0,
                    this.totalPages = 0
                },
                load: function() {
                    this.commentList.length < this.totalNumber && (this.loading = !0),
                    this.getCourseDiscuss("load")
                },
                delComment: function(e, t) {
                    var s = this;
                    this.$confirm(this.$t("确认删除当前评论吗？"), this.$t("提示"), {
                        confirmButtonText: this.$t("确定"),
                        cancelButtonText: this.$t("取消"),
                        type: "warning"
                    }).then((function() {
                        var t = {
                            discussIds: e.discussId || "",
                            csrfToken: ""
                        };
                        Object(De["d"])(t).then((function(e) {
                            "1001" == e.code && (s.$message.success(s.$t("讨论删除成功！")),
                            s.getCourseDiscuss("init"))
                        }
                        ))
                    }
                    )).catch((function() {}
                    ))
                },
                choiceReply: function(e, t) {
                    e.isReplyShow = !e.isReplyShow,
                    this.commentList[t] = e
                },
                sendReply: function(e) {
                    var t = this;
                    if (this.replyValue) {
                        var s = new FormData;
                        s.append("discuss.objectId", this.courseId),
                        s.append("discuss.contentPreview", this.replyValue || ""),
                        s.append("discuss.idPath", e.idPath),
                        this.sendReplyIsShow = !0,
                        Object(De["u"])(s).then((function(e) {
                            t.sendReplyIsShow = !1,
                            e.bizResult ? (t.$message.success(t.$t("回复成功！")),
                            t.replyValue = "",
                            t.getCourseDiscuss("init")) : t.$message.warning(t.$t("回复失败！"))
                        }
                        ))
                    } else
                        this.$message.warning(this.$t("请先输入回复信息。"))
                },
                sendDiscuss: function() {
                    var e = this;
                    if (this.discussionValue) {
                        var t = new FormData;
                        t.append("discuss.objectId", this.courseId),
                        t.append("discuss.contentPreview", this.discussionValue),
                        t.append("isShare", !0),
                        this.sendCommentIsShow = !0,
                        Object(De["v"])(t).then((function(t) {
                            e.sendCommentIsShow = !1,
                            t.bizResult ? (e.$message.success(e.$t("发表成功！")),
                            e.discussionValue = "",
                            e.getCourseDiscuss("init")) : e.$message.warning(e.$t("发表失败！"))
                        }
                        )).catch((function() {
                            e.sendCommentIsShow = !1
                        }
                        )).finally((function() {
                            e.sendCommentIsShow = !1
                        }
                        ))
                    } else
                        this.$message.warning(this.$t("请先输入评论信息。"))
                },
                getCourseDiscuss: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    "init" === t && (this.condition.pageNo = 1,
                    this.condition.pageSize = 10,
                    this.initScroll());
                    var s = {
                        courseType: "NEW_COURSE_CENTER",
                        courseId: this.courseId,
                        page: {
                            pageNo: this.condition.pageNo,
                            pageSize: this.condition.pageSize
                        }
                    };
                    Object(De["i"])(s).then((function(t) {
                        var s = t.bizResult
                          , i = s.rows
                          , n = s.total
                          , a = s.totalPages;
                        i && (e.commentList = [].concat(Object(Oe["a"])(e.commentList), Object(Oe["a"])(i.map((function(e) {
                            return Dt(Dt({}, e), {}, {
                                isReplyShow: !1
                            })
                        }
                        ))))),
                        e.totalNumber = n,
                        e.totalPages = a,
                        e.loading = !1,
                        e.condition.pageNo > e.totalPages || e.condition.pageNo++
                    }
                    ))
                },
                navToTeacherPage: function(e) {
                    if (this.courseInfo.teacherList.length) {
                        var t = "NEW_COURSE_CENTER";
                        window.open(location.origin + "/els/html/teacher/teacher.teacherTopHeader.do?teacherId=".concat(e, "&courseType=").concat(t))
                    }
                },
                getCourseInfo: function() {
                    var e = this
                      , t = {
                        courseId: this.courseId
                    };
                    Object(De["q"])(t).then((function(t) {
                        var s;
                        e.courseInfo = Object.assign({}, t.bizResult || {
                            selectCount: 0,
                            coursePeriod: 0,
                            courseScore: 0,
                            categoryNamePath: "",
                            getWay: "",
                            publishDate: "",
                            teacherList: [],
                            meaning: "",
                            orientObj: "",
                            objectives: "",
                            avgPoint: 0
                        }),
                        e.extendMsgs = (null === (s = t.bizResult) || void 0 === s ? void 0 : s.extendMsgs) || [],
                        e.checkEntryNextTip()
                    }
                    ))
                },
                toggleNavItem: function(e) {
                    "4" === e && 4 !== this.navActive && this.addHits(),
                    this.navActive = e
                },
                jumpPeriod: function(e, t) {
                    var s = this;
                    this.updateCourseRecord();
                    var i = null;
                    if ("video" === this.curType ? i = document.querySelector("#J_prismPlayer>video") : "audio" === this.curType && (i = document.querySelector("#J_prismPlayer>audio"),
                    i || (i = document.querySelector("#J_prismPlayer>video"))),
                    i && i.pause(),
                    this.notejumpPeriod = e,
                    this.courseData.forEach((function(e, t) {
                        e.chapterId === s.notejumpPeriod.chapterId && e.resourceDTOS.forEach((function(e, t) {
                            e.itemId === s.notejumpPeriod.sectionId && (s.notejumpPeriodInfo = Dt({}, e))
                        }
                        ))
                    }
                    )),
                    this.jumpPeriodSecond = e.playbackPosition || 0,
                    this.jumpPeriodTime = this.showTime(e.playbackPosition),
                    "window" === t) {
                        var n = this.userInfo
                          , a = this.notejumpPeriod
                          , r = this.notejumpPeriodInfo
                          , o = this.jumpPeriodSecond;
                        !n || !a || n.userId !== a.createBy || n && a && n.userId !== a.createBy && r && r.currentPosition && r.currentPosition >= o ? this.noteJumpPeriodVisible = !0 : this.confirmPositionPlay()
                    } else
                        this.noteJumpPeriodVisible = !0
                },
                showTime: function(e) {
                    if (e < 60)
                        return e < 10 ? "00:0" + e : "00:" + e;
                    var t = Math.floor(e / 60)
                      , s = Math.floor(e % 60);
                    if (t < 60)
                        return t < 10 ? s < 10 ? "0" + t + ":0" + s : "0" + t + ":" + s : s < 10 ? t + ":0" + s : t + ":" + s;
                    var i = Math.floor(t / 60)
                      , n = Math.floor(t % 60)
                      , a = i < 10 ? "0" + i : i
                      , r = n < 10 ? "0" + n : n
                      , o = s < 10 ? "0" + s : s;
                    return a + ":" + r + ":" + o
                },
                editPeriod: function(e) {
                    this.singleNoteInfo = e,
                    this.createNote.note_title = e.noteName,
                    this.createNote.note_content = e.content,
                    this.createNote.secrecy = e.isSecret,
                    this.createNote.noteId = e.noteId,
                    this.isCreateNote = !0,
                    this.noteStatus = "update"
                },
                confirmPositionPlay: function() {
                    var e = this;
                    this.noteJumpPeriodVisible = !1;
                    var t = this.userInfo
                      , s = this.notejumpPeriod
                      , i = this.notejumpPeriodInfo
                      , n = this.jumpPeriodSecond;
                    (t && s && t.userId === s.createBy || t && s && t.userId !== s.createBy && i && i.currentPosition && i.currentPosition >= n) && this.$nextTick((function() {
                        e.courseData.forEach((function(t, s) {
                            t.chapterId === e.notejumpPeriod.chapterId && t.resourceDTOS.forEach((function(t, i) {
                                t.itemId === e.notejumpPeriod.sectionId && (e.curIndex = [s, i],
                                e.curId = t.resourceId,
                                e.curVideoId = t.resourceRelId,
                                e.isVideo = !0,
                                e.curType = t.resourceType || t.resourceClass,
                                "pic" === e.curType && (e.picUrl = t.content),
                                setTimeout((function() {
                                    e.seek = e.jumpPeriodSecond || 0,
                                    e.$refs.aliPlayer.aliPlayer(e.curVideoId, "pause")
                                }
                                ), 0))
                            }
                            ))
                        }
                        ))
                    }
                    ))
                },
                closePositionPlay: function() {
                    this.noteJumpPeriodVisible = !1
                },
                showDownLoadDialog: function(e) {
                    var t = this;
                    this.noteDownLoadVisible = !0,
                    this.jumpPeriodTime = this.showTime(e.playbackPosition),
                    this.otherNoteDownloadItem = e,
                    this.otherNoteDownloadItem.faceUrl = this.otherNoteDownloadItem.faceUrl.startsWith("/") ? this.otherNoteDownloadItem.faceUrl : "/".concat(this.otherNoteDownloadItem.faceUrl),
                    this.courseData.forEach((function(s, i) {
                        s.chapterId === e.chapterId && s.resourceDTOS.forEach((function(n, a) {
                            n.itemId === e.sectionId && (t.chapterInfo = Dt(Dt(Dt({}, n), s), {}, {
                                mIndex: i
                            }))
                        }
                        ))
                    }
                    ))
                },
                initNoteInfo: function() {
                    this.createNote = {
                        note_title: "",
                        note_content: "",
                        secrecy: "",
                        isSendShow: !1
                    },
                    this.isCreateNote = !1
                },
                sendNote: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , s = arguments.length > 1 ? arguments[1] : void 0
                      , i = arguments.length > 2 ? arguments[2] : void 0;
                    "toggle" === t && (this.createNote.note_title = s.noteName,
                    this.createNote.note_content = s.content,
                    this.createNote.secrecy = s.isSecret,
                    this.createNote.noteId = s.noteId,
                    this.noteStatus = "update",
                    this.createNote.secrecy = !this.createNote.secrecy);
                    var n = this.createNote
                      , a = n.note_title
                      , r = n.note_content
                      , o = n.secrecy
                      , c = n.noteId;
                    if (r.trim()) {
                        var u = "";
                        "video" === this.curType ? u = document.querySelector("#J_prismPlayer>video") : "audio" === this.curType && (u = document.querySelector("#J_prismPlayer>audio"),
                        u || (u = document.querySelector("#J_prismPlayer>video")));
                        var l = 0;
                        u && (l = u.currentTime ? parseInt(u.currentTime) : 0),
                        "toggle" === t && s.playbackPosition && (l = s.playbackPosition);
                        var d = this.curChapterContent.chapterId || ""
                          , h = this.curInfo.itemId || "";
                        s && (d = s.chapterId || "",
                        h = s.sectionId || ""),
                        !s && this.singleNoteInfo && "update" === this.noteStatus && (d = this.singleNoteInfo.chapterId || "",
                        h = this.singleNoteInfo.sectionId || "",
                        l = this.singleNoteInfo.playbackPosition || "");
                        var m = {
                            "courseNote.courseId": this.courseId,
                            "courseNote.noteId": "create" === this.noteStatus ? "" : c,
                            "courseNote.noteName": a || r.trim().split(/\r?\n/)[0].slice(0, 30),
                            "courseNote.content": r.trim(),
                            "courseNote.isSecret": o,
                            "courseNote.playbackPosition": l,
                            "courseNote.chapterId": d,
                            "courseNote.sectionId": h
                        };
                        this.createNote.isSendShow = !0,
                        Object(De["n"])(m).then((function() {
                            e.createNote.isSendShow = !1,
                            e.initNoteInfo(),
                            "create" === e.noteStatus ? e.$message.success(e.$t("笔记发布成功！")) : i ? "open" === i ? e.$message.success(e.$t("笔记状态已公开！")) : "close" === i && e.$message.success(e.$t("笔记状态已保密！")) : e.$message.success(e.$t("笔记更新成功！")),
                            e.getMyNoteAndOtherNoteList("me", e.myNoteCondition),
                            e.singleNoteInfo = null
                        }
                        ))
                    } else
                        this.$message.warning(this.$t("笔记内容不能为空！"))
                },
                delMyNote: function(e) {
                    var t = this;
                    this.$confirm(this.$t("确认删除当前笔记吗？"), this.$t("提示"), {
                        confirmButtonText: this.$t("确定"),
                        cancelButtonText: this.$t("取消"),
                        type: "warning"
                    }).then((function() {
                        var s = {
                            noteId: e.noteId || ""
                        };
                        Object(De["m"])(s).then((function(e) {
                            t.getMyNoteAndOtherNoteList("me", t.myNoteCondition, "init")
                        }
                        ))
                    }
                    )).catch((function() {}
                    ))
                },
                toggleCreateNote: function() {
                    this.isCreateNote = !0,
                    this.noteStatus = "create",
                    this.createNote.note_title = "",
                    this.createNote.note_content = "",
                    this.createNote.secrecy = !1,
                    this.createNote.isSendShow = !1,
                    this.createNote.noteId = ""
                },
                noteEnter: function(e) {
                    this.noteMsg = e + "-enter"
                },
                noteLeave: function(e) {
                    this.noteMsg = e + "-leave"
                },
                navToggle: function() {
                    this.isCreateNote = !1,
                    "myNote" === this.navMsg ? this.getMyNoteAndOtherNoteList("me", this.myNoteCondition) : "otherNote" === this.navMsg && this.getMyNoteAndOtherNoteList("other", this.otherNoteCondition)
                },
                enterDefault: function() {
                    this.isHoverActive = !0
                },
                leaveDefault: function() {
                    this.isHoverActive = !1
                },
                getImage: function(e, t) {
                    return new Promise((function(s, i) {
                        if (e.includes("data:image"))
                            return s();
                        var n = new XMLHttpRequest;
                        n.open("get", e, !0),
                        n.setRequestHeader("Cache-Control", "no-cache"),
                        n.responseType = "blob",
                        n.onload = function() {
                            200 == this.status && (document.getElementById(t).src = URL.createObjectURL(this.response),
                            s())
                        }
                        ,
                        n.onerror = function() {
                            i()
                        }
                        ,
                        n.send()
                    }
                    ))
                },
                getImageBase64: function(e, t) {
                    return Object(a["a"])(regeneratorRuntime.mark((function s() {
                        var i, n;
                        return regeneratorRuntime.wrap((function(s) {
                            while (1)
                                switch (s.prev = s.next) {
                                case 0:
                                    return s.prev = 0,
                                    s.next = 3,
                                    fetch(e, {
                                        credentials: "same-origin"
                                    });
                                case 3:
                                    if (i = s.sent,
                                    i.ok) {
                                        s.next = 6;
                                        break
                                    }
                                    throw new Error("HTTP error! status: ".concat(i.status));
                                case 6:
                                    return s.next = 8,
                                    i.blob();
                                case 8:
                                    return n = s.sent,
                                    s.abrupt("return", new Promise((function(e, s) {
                                        var i = new FileReader;
                                        i.onloadend = function() {
                                            document.getElementById(t).src = i.result,
                                            e(i.result)
                                        }
                                        ,
                                        i.onerror = s,
                                        i.readAsDataURL(n)
                                    }
                                    )));
                                case 12:
                                    return s.prev = 12,
                                    s.t0 = s["catch"](0),
                                    console.error("获取图片失败:", s.t0),
                                    s.abrupt("return", null);
                                case 16:
                                case "end":
                                    return s.stop()
                                }
                        }
                        ), s, null, [[0, 12]])
                    }
                    )))()
                },
                saveDownload: function(e) {
                    var t = this
                      , s = this
                      , i = document.querySelector("#sw-main-img")
                      , n = i.src.includes("tbc-rms/nfs/getImgUrl?") ? this.getImageBase64 : this.getImage;
                    n(i.src, "sw-main-img").then((function(e) {
                        console.log("res", e)
                    }
                    )).finally((function() {
                        var e = document.getElementById("sw-main-content");
                        e.style.display = "block",
                        s.$nextTick((function() {
                            st()(document.getElementById("sw-main"), {
                                allowTaint: !1,
                                useCORS: !0
                            }).then((function(i) {
                                var n = i.toDataURL("image/png")
                                  , a = s.courseInfo && s.courseInfo.courseTitle ? s.courseInfo.courseTitle + t.$t("分享") : t.$t("默认课程分享");
                                s.downloadShareFile(a, n),
                                e.style.display = "none"
                            }
                            ))
                        }
                        ))
                    }
                    ))
                },
                downloadShareFile: function(e, t) {
                    var s = function(e) {
                        for (var t = e.split(";base64,"), s = t[0].split(":")[1], i = window.atob(t[1]), n = i.length, a = new Uint8Array(n), r = 0; r < n; ++r)
                            a[r] = i.charCodeAt(r);
                        return new Blob([a],{
                            type: s
                        })
                    }
                      , i = document.createElement("a")
                      , n = s(t)
                      , a = document.createEvent("HTMLEvents");
                    a.initEvent("click", !0, !0),
                    i.download = e,
                    i.href = URL.createObjectURL(n),
                    i.click()
                },
                copyText: function(e) {
                    var t = document.createElement("input");
                    t.setAttribute("id", "cp_hgz_input"),
                    t.value = e,
                    document.getElementsByTagName("body")[0].appendChild(t),
                    document.getElementById("cp_hgz_input").select(),
                    document.execCommand("copy"),
                    document.getElementById("cp_hgz_input").remove(),
                    this.$message.success(this.$t("课程链接已复制，快去分享吧~"))
                },
                closeDialog: function() {
                    this.shareVisible = !1
                },
                shareCourse: function() {
                    this.shareVisible = !0
                },
                videoSeeking: function() {
                    var e = this;
                    this.seekingSaveFlag = !1,
                    clearTimeout(this.seekingTimer),
                    this.seekingTimer = setTimeout((function() {
                        e.seekingSaveFlag = !0,
                        clearTimeout(e.seekingTimer)
                    }
                    ), 5e3)
                },
                initHeart: function() {
                    var e = this;
                    clearInterval(this.heartTimer);
                    var t = {
                        courseId: this.courseId,
                        eln_session_id: Nt("eln_session_id")
                    };
                    le["c"].loadCourseSystemSeting(t).then((function(t) {
                        "1001" == t.code && (!t.bizResult.heartBeat || e.curInfo.finish && !t.bizResult.continueHeartBeat || (e.heartTimer = setInterval((function() {
                            le["c"].heartBeatSetData(e.courseId)
                        }
                        ), 6e4),
                        e.heartBeatFlag = !0))
                    }
                    ))
                },
                resetHandoutAndVideo: function() {
                    this.resetHandoutAndVideoProps = !0
                },
                openAndCloseVideo: function(e) {
                    this.handoutVideoNoteId = "/courseSetting/preview/handout?id=" + e.noteId + "&iframeType=PIP" + "&providerCorpCode=".concat(this.providerCorpCode);
                    document.getElementById("aliPlayer");
                    this.handoutVideo = !!e.flag,
                    this.resetHandoutAndVideoProps = !e.flag
                },
                openHandoutOperate: function(e) {
                    e && (this.handoutVideoNoteId = "/courseSetting/preview/handout?id=" + e,
                    this.handoutVideo = !this.handoutVideo,
                    this.resetHandoutAndVideoProps = !this.resetHandoutAndVideoProps)
                },
                toFullVideo: function() {
                    ot["a"].toggleFullView()
                },
                exitFullscreen: function() {
                    document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
                },
                getCourseData: function() {
                    var e = this
                      , t = {
                        courseId: this.sourceId,
                        providerCorpCode: this.providerCorpCode
                    };
                    le["b"].APIshowCourseChapter(t).then((function(t) {
                        e.courseData = t.bizResult.filter((function(e) {
                            return e.resourceDTOS.length > 0
                        }
                        )),
                        e.settingBtn = e.courseData[0].customAliVideoCorp,
                        e.isPreview || !1 !== e.pcEdgeBrowerPreview ? e.setPlaytimePosition() : e.getStudyRecordList(e.setPlaytimePosition),
                        e.isPlaying = !0
                    }
                    ))
                },
                setPlaytimePosition: function() {
                    var e = this;
                    this.canTrackStudy() && (this.recordLearningStatus("ENTER_STUDY"),
                    this.recordLearningStatus("COURSE_SIGN_IN"));
                    var t, s = this.recordList.find((function(e) {
                        return 1 === e.confirmLearning
                    }
                    )), i = s ? this.courseData.findIndex((function(e) {
                        return e.resourceDTOS.some((function(e) {
                            return e.resourceId === s.resourceId
                        }
                        ))
                    }
                    )) : -1;
                    void 0 !== s && i >= 0 ? (t = this.courseData.findIndex((function(e) {
                        return e.resourceDTOS.some((function(e) {
                            return e.resourceId === s.resourceId
                        }
                        ))
                    }
                    )),
                    this.curIndex = [t, this.courseData[t].resourceDTOS.findIndex((function(e) {
                        return e.resourceId === s.resourceId
                    }
                    ))],
                    this.pageIndex = this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].pageIndex || 0,
                    this.curType = this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].resourceType,
                    "pic" === this.curType && (this.picUrl = this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].content),
                    this.minStudyTime = this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].minStudyTime,
                    "video" !== this.curType && "audio" !== this.curType || (this.isVideo = !0),
                    this.curId = s.resourceId,
                    this.minStudyTime = s.minStudyTime,
                    this.curVideoId = this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].resourceRelId,
                    this.noteId = this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].noteId,
                    this.infixTests = this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].infixTests || [],
                    this.resourceRelIdNoteId = this.courseData[this.curIndex[0]] ? (this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].noteResource || {}).resourceRelId : "",
                    this.curTime = {
                        minStudyTime: this.courseData[this.curIndex[0]] ? this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].minStudyTime : "",
                        currentStudyTime: this.courseData[this.curIndex[0]] && this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].currentStudyTime ? this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].currentStudyTime : 0
                    }) : (this.pageIndex = this.courseData[0] && this.courseData[0].resourceDTOS[0] && this.courseData[0].resourceDTOS[0].pageIndex || 0,
                    this.curType = this.courseData[0] && this.courseData[0].resourceDTOS[0] ? this.courseData[0].resourceDTOS[0].resourceType : "",
                    "pic" === this.curType && (this.picUrl = this.courseData[0].resourceDTOS[0].content),
                    this.minStudyTime = this.courseData[0] && this.courseData[0].resourceDTOS[0] ? this.courseData[0].resourceDTOS[0].minStudyTime : "",
                    "video" !== this.curType && "audio" !== this.curType || (this.isVideo = !0),
                    this.curId = this.courseData[0] && this.courseData[0].resourceDTOS[0] ? this.courseData[0].resourceDTOS[0].resourceId : "");
                    "document" === this.curType && (this.setDocCoursePreviewVersion(),
                    this.initDocumentPreventCheat()),
                    this.checkEntryNextTip();
                    var n = this.recordList.find((function(t) {
                        return t.resourceId === e.curId
                    }
                    ));
                    void 0 === n || null === n.currentPosition || 1 === n.confirmFinish || "video" !== this.curType && "audio" !== this.curType || (this.seek = n.currentPosition + 1 > this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].playTime ? 0 : n.currentPosition),
                    this.recordTimeIdTemp && (clearInterval(this.recordTimeIdTemp),
                    Lt && Lt.postMessage({
                        command: "stop"
                    })),
                    this.recordTimeTemp = this.courseData[this.curIndex[0]] && this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].currentStudyTime ? this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].currentStudyTime : 0,
                    ("video" !== this.curType && "audio" !== this.curType || ("video" === this.curType || "audio" === this.curType) && this.isEdge && this.excludeCorpCodeList.indexOf(this.corpCode) > -1) && ("video" !== this.curType && "audio" !== this.curType || this.allowDrag || this.$alert('<div class="message-tip-title"><span class="iconfont icon-info"></span><span class="message-title">' + this.$t("提示") + '</span></div><span class="message-cont">' + this.$t("请勿手动拖拽课程进度条，以保证课程的正常学习!课程单次学习实际播放时长不得少于课程视频时长的50%") + "</span>", "", {
                        confirmButtonText: this.$t("确定"),
                        showClose: !1,
                        dangerouslyUseHTMLString: !0
                    }),
                    this.recordTime = 0,
                    this.recordTimeId && clearInterval(this.recordTimeId),
                    this.recordTimeId = setInterval((function() {
                        e.recordTime++
                    }
                    ), 1e3)),
                    this.$nextTick((function() {
                        e.checkAndUpdateLearningRecord()
                    }
                    ))
                },
                syncStudyRecord: function() {
                    if (!this.isPreview && !1 === this.pcEdgeBrowerPreview) {
                        var e = {
                            courseId: this.courseId,
                            sourceId: this.sourceId,
                            providerCorpCode: this.providerCorpCode
                        };
                        le["c"].APIsyncStudyRecord(e)
                    }
                },
                getStudyRecordList: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                      , s = {
                        courseId: this.courseId,
                        sourceId: this.sourceId,
                        providerCorpCode: this.providerCorpCode
                    };
                    le["c"].APIgetStudyRecordList(s).then((function(s) {
                        var i = [];
                        s.bizResult && s.bizResult.length && s.bizResult.forEach((function(e) {
                            i.find((function(t) {
                                return t.resourceId === e.resourceId
                            }
                            )) ? i.map((function(t) {
                                t.resourceId === e.resourceId && t.currentStudyTime < e.currentStudyTime && (t.currentStudyTime = e.currentStudyTime,
                                t.confirmFinish = e.confirmFinish,
                                t.confirmLearning = e.confirmLearning)
                            }
                            )) : i.push(e)
                        }
                        )),
                        e.recordList = i,
                        e.recordList && e.recordList.length > 0 && e.recordList[0].alert && e.$alert('<div class="message-tip-title"><span class="iconfont icon-info"></span><span class="message-title">' + e.$t("提示") + '</span></div><span class="message-cont">' + e.$t("管理员调整了这门课程的内容，您的学习记录可能因此发生变化。") + "</span>", "", {
                            confirmButtonText: e.$t("确定"),
                            showClose: !1,
                            dangerouslyUseHTMLString: !0
                        }),
                        e.recordList.forEach((function(t) {
                            e.courseData.forEach((function(s) {
                                s.resourceDTOS.forEach((function(s) {
                                    s.resourceId === t.resourceId && (1 === t.confirmFinish && e.$set(s, "finish", !0),
                                    e.$set(s, "currentStudyTime", t.currentStudyTime),
                                    e.$set(s, "currentPosition", t.currentPosition),
                                    e.$set(s, "pageIndex", t.pageIndex))
                                }
                                ))
                            }
                            ))
                        }
                        )),
                        setTimeout((function() {
                            e.hasGetRecord = !0
                        }
                        )),
                        e.checkEntryNextTip(),
                        t && t()
                    }
                    ))
                },
                checkEntryNextTip: function() {
                    var e = this;
                    if (!this.isLastStep && this.courseData.length && this.recordList.length) {
                        var t = [];
                        if (this.courseData.forEach((function(e) {
                            e.resourceDTOS && e.resourceDTOS.length && e.resourceDTOS.forEach((function(e) {
                                return t.push(e)
                            }
                            ))
                        }
                        )),
                        t.length)
                            t.every((function(t) {
                                var s = e.recordList.find((function(e) {
                                    return e.resourceId === t.resourceId
                                }
                                ));
                                return s && 1 === s.confirmFinish
                            }
                            ))
                    }
                },
                updateCourseRecord: function(e, t) {
                    var s = this;
                    if (this.canTrackStudy()) {
                        if (!this.isPreview && (!this.isIE11 && !this.isEdge || (this.isIE11 || this.isEdge) && this.excludeCorpCodeList.indexOf(this.corpCode) > -1) && this.canSaveRecord) {
                            if (!this.allowDrag && !this.seekingSaveFlag && ("video" === this.curType || "audio" === this.curType))
                                return;
                            t && (clearInterval(this.recordTimeIdTemp),
                            Lt && Lt.postMessage({
                                command: "stop"
                            }));
                            var i = this.recordList.find((function(e) {
                                return e.resourceId === s.curId
                            }
                            ))
                              , n = void 0 !== i ? i.recordId : null;
                            if (void 0 !== i && 1 !== i.confirmFinish || void 0 === i) {
                                var a = 0;
                                if ("video" === this.curType || "audio" === this.curType) {
                                    var r, o = this.player || (null === (r = this.$refs.aliPlayer) || void 0 === r ? void 0 : r.player);
                                    a = this.isIE11 && this.excludeCorpCodeList.indexOf(this.corpCode) > -1 && this.recordTime < this.noPreviewCurTimeToFinish && !this.allowDrag || this.isEdge && this.excludeCorpCodeList.indexOf(this.corpCode) > -1 && this.recordTime < this.noPreviewCurTimeToFinish ? this.recordTime : this.isIE11 && this.excludeCorpCodeList.indexOf(this.corpCode) > -1 && this.recordTime >= this.noPreviewCurTimeToFinish && !this.allowDrag || this.isEdge && this.excludeCorpCodeList.indexOf(this.corpCode) > -1 && this.recordTime >= this.noPreviewCurTimeToFinish ? this.curTimeToFinish : o ? Math.round(Math.max(this.seek, o.getCurrentTime())) : Math.round(this.seek || 0)
                                }
                                var c = {
                                    recordId: n,
                                    courseId: this.courseId,
                                    sourceId: this.sourceId,
                                    providerCorpCode: this.providerCorpCode,
                                    chapterId: this.curChapterId,
                                    resourceId: this.curId,
                                    timeToFinish: this.curTimeToFinish,
                                    currentPosition: a,
                                    type: this.curType,
                                    currentStudyTime: "video" === this.curType || "audio" == this.curType ? Math.max(this.recordTimeTemp, this.workerRecordTimeTemp) - this.curTime.currentStudyTime : this.recordTime,
                                    pageIndex: "video" !== this.curType && "audio" !== this.curType && this.$refs.aliPreview ? this.$refs.aliPreview.currentCount : 0
                                };
                                this.canSaveRecord = !1,
                                le["c"].APIupdateCourseRecord(c).then((function(t) {
                                    s.getStudyRecordList((function() {
                                        e && (s.recordTime = 0,
                                        s.recordTimeId && clearInterval(s.recordTimeId),
                                        s.recordTimeId = setInterval((function() {
                                            s.recordTime++
                                        }
                                        ), 1e3)),
                                        s.canSaveRecord = !0
                                    }
                                    )),
                                    s.getStudyRate(),
                                    setTimeout((function() {
                                        s.checkFirstStudyStatusFunc()
                                    }
                                    ), 1e3)
                                }
                                ))
                            }
                        }
                    } else
                        this.stopStudyTimers()
                },
                getStudyRate: function() {
                    var e = this
                      , t = {
                        courseId: this.courseId,
                        sourceId: this.sourceId,
                        providerCorpCode: this.providerCorpCode
                    };
                    le["c"].APIgetStudyRate(t).then((function(t) {
                        e.studyRate = t.bizResult,
                        e.$emit("updateStudyRate", e.studyRate),
                        100 === t.bizResult && e.autoGoNext(),
                        100 === t.bizResult && "COURSE_COURSE_STUDY" === e.currentStep && "COURSE_COURSE_STUDY" === e.courseObj.stepToGetScore && (e.hasModalSuccess || (e.hasModalSuccess = !0,
                        o["a"].success({
                            title: e.$t("恭喜您完成课程！"),
                            zIndex: 1002,
                            content: e.$t("您获得") + e.courseObj.courseScore + e.$t("学分，") + e.courseObj.coursePeriod + e.$t("学时！"),
                            okText: e.$t("知道了")
                        })))
                    }
                    ))
                },
                tagResourceClick: function(e) {
                    var t = this
                      , s = this.getPlayer();
                    if (s) {
                        var i = this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].resourceId
                          , n = this.timeToSeconds(e.startTime)
                          , a = this.recordList.find((function(t) {
                            return t.resourceId === e.sourceId
                        }
                        ));
                        if (!(a && a.currentPosition < n && s.getCurrentTime() < n) || this.allowDrag)
                            return !a && !this.allowDrag && s.getCurrentTime() < n ? c["a"].error(this.$t("视频进度无法拖动，请联系管理员修改后台设置。")) : void (e.sourceId === i ? (this.seeked = n,
                            this.seek = n,
                            s.seek(n)) : this.courseData.forEach((function(s, i) {
                                s.resourceDTOS.forEach((function(s, a) {
                                    s.resourceId === e.sourceId && t.checkoutSection(s, i, a, null, n)
                                }
                                ))
                            }
                            )));
                        c["a"].error(this.$t("视频进度无法拖动，请联系管理员修改后台设置。"))
                    }
                },
                aiSeek: function(e) {
                    var t = this.getPlayer();
                    if (t) {
                        var s = this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].resourceId
                          , i = this.recordList.find((function(e) {
                            return e.resourceId === s
                        }
                        ));
                        if (!this.isPreview) {
                            if (i && i.currentPosition < e && t.getCurrentTime() < e && !this.allowDrag)
                                return void c["a"].error(this.$t("视频进度无法拖动，请联系管理员修改后台设置。"));
                            if (!i && !this.allowDrag && t.getCurrentTime() < e)
                                return void c["a"].error(this.$t("视频进度无法拖动，请联系管理员修改后台设置。"))
                        }
                        this.seeked = e,
                        this.seek = e,
                        this.aliPlayer.isPlay = !0,
                        t.seek(e)
                    }
                },
                timeToSeconds: function(e) {
                    var t = e.split(":");
                    return 1 === t.length ? parseInt(t[0]) : 2 === t.length ? 60 * parseInt(t[0]) + parseInt(t[1]) : 60 * parseInt(t[0]) * 60 + 60 * parseInt(t[1]) + parseInt(t[2])
                },
                getFirstUnfinishedCourseware: function() {
                    var e = this;
                    if (!this.hasGetRecord)
                        return null;
                    for (var t = 0; t < this.courseData.length; t++)
                        for (var s, i = this.courseData[t], n = i.resourceDTOS || [], a = function() {
                            var s = n[r]
                              , a = e.recordList.find((function(e) {
                                return e.resourceId === s.resourceId
                            }
                            ));
                            if (!a || 1 !== a.confirmFinish)
                                return {
                                    v: {
                                        chapter: i,
                                        resource: s,
                                        chapterIndex: t,
                                        resourceIndex: r
                                    }
                                }
                        }, r = 0; r < n.length; r++)
                            if (s = a(),
                            s)
                                return s.v;
                    return null
                },
                locateFirstUnfinishedCourseware: function() {
                    var e = this.getFirstUnfinishedCourseware();
                    if (!e)
                        return !1;
                    var t = e.chapter
                      , s = e.resource
                      , i = e.chapterIndex
                      , n = e.resourceIndex;
                    return this.open = !0,
                    this.activeName = "contents",
                    this.$set(t, "fold", !1),
                    this.checkoutSection(s, i, n, t),
                    this.scrollActiveSectionIntoView(),
                    !0
                },
                scrollActiveSectionIntoView: function() {
                    var e = this;
                    this.$nextTick((function() {
                        e.$nextTick((function() {
                            var t = e.$el.querySelector(".rightList-container .section-item-active");
                            t && t.scrollIntoView({
                                block: "center",
                                behavior: "smooth"
                            })
                        }
                        ))
                    }
                    ))
                },
                checkoutSection: function(e, t) {
                    var s = this
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , n = arguments.length > 4 ? arguments[4] : void 0;
                    if (!this.showMask) {
                        Lt && Lt.postMessage({
                            command: "reset"
                        }),
                        this.workerRecordTimeTemp = 0,
                        this.aliPlayer && (this.aliPlayer.isPlay = !0),
                        this.isOpenHeartbeat && this.stopCurrentAndStartNextBeatV2(e),
                        rt["a"].dispose(),
                        clearInterval(this.heartTimer),
                        this.firstEnterStudyFlag && this.recordLearningStatus("QUIT_COURSE_ITEM");
                        var a = e.resourceId
                          , r = e.resourceType
                          , o = e.minStudyTime;
                        if (this.mustReplayCanFinish = !1,
                        this.updateCourseRecord(),
                        this.videoCheck = !1,
                        "video" === this.curType || "audio" === this.curType) {
                            var c = this.getPlayer();
                            c && c.pause(),
                            console.log("🚀 ~ this.player:", this.player)
                        }
                        if (this.recordTimeId && clearInterval(this.recordTimeId),
                        this.recordTimeIdTemp && (clearInterval(this.recordTimeIdTemp),
                        Lt && Lt.postMessage({
                            command: "stop"
                        })),
                        e.pageIndex && (this.pageIndex = e.pageIndex),
                        this.curType = r,
                        "pic" === this.curType && (this.picUrl = e.content),
                        "video" !== this.curType && "audio" !== this.curType && (this.isPlaying = !0),
                        "video" === this.curType || "audio" === this.curType ? this.resetHandoutAndVideo() : (document.pictureInPictureElement && document.exitPictureInPicture(),
                        this.handoutVideo = !1),
                        "video" === this.curType || "audio" === this.curType) {
                            var u = this.recordList.find((function(e) {
                                return e.resourceId === a
                            }
                            ));
                            if (void 0 !== u && null !== u.currentPosition && 1 !== u.confirmFinish && u.currentPosition < u.timeToFinish ? (this.seeked = u.currentPosition,
                            this.seek = u.currentPosition) : (this.seeked = 0,
                            this.seek = 0),
                            this.$refs.aliPlayer) {
                                this.$refs.aliPlayer.seeked = this.seeked;
                                var l = this.getPlayer();
                                l && l.seek(0)
                            }
                            void 0 !== n && null !== n && (this.templateSeek = n,
                            console.log("______________", this.templateSeek))
                        }
                        this.preventCheatFlag && ("video" == this.curType || "audio" == this.curType ? this.$refs.preventCheat.resetPlayTime(this.preventCheatTime) : this.$refs.preventCheat.initPreventCheat(this.preventCheatTime)),
                        this.recordTime = 0,
                        this.recordTimeTemp = 0,
                        this.recordTimeIdTemp && (clearInterval(this.recordTimeIdTemp),
                        Lt && Lt.postMessage({
                            command: "stop"
                        })),
                        this.$nextTick((function() {
                            s.isVideo = !1,
                            s.curId = a,
                            s.minStudyTime = o,
                            s.curIndex = [t, i],
                            s.curVideoId = s.courseData[s.curIndex[0]] ? s.courseData[s.curIndex[0]].resourceDTOS[s.curIndex[1]].resourceRelId : "",
                            s.noteId = s.courseData[s.curIndex[0]] ? s.courseData[s.curIndex[0]].resourceDTOS[s.curIndex[1]].noteId : "",
                            s.infixTests = s.courseData[s.curIndex[0]] && s.courseData[s.curIndex[0]].resourceDTOS[s.curIndex[1]].infixTests || [],
                            s.resourceRelIdNoteId = s.courseData[s.curIndex[0]] ? (s.courseData[s.curIndex[0]].resourceDTOS[s.curIndex[1]].noteResource || {}).resourceRelId : "",
                            s.curTime = {
                                minStudyTime: s.courseData[s.curIndex[0]] ? s.courseData[s.curIndex[0]].resourceDTOS[s.curIndex[1]].minStudyTime : "",
                                currentStudyTime: s.courseData[s.curIndex[0]] ? s.courseData[s.curIndex[0]].resourceDTOS[s.curIndex[1]].currentStudyTime : ""
                            },
                            s.recordTimeTemp = s.courseData[s.curIndex[0]] && s.courseData[s.curIndex[0]].resourceDTOS[s.curIndex[1]].currentStudyTime ? s.courseData[s.curIndex[0]].resourceDTOS[s.curIndex[1]].currentStudyTime : 0,
                            "document" === s.curType && s.setDocCoursePreviewVersion(),
                            "video" !== s.curType && "audio" != s.curType || (s.isVideo = !0,
                            s.canTrackStudy() ? (s.recordTimeIdTemp = setInterval((function() {
                                s.recordTimeTemp++
                            }
                            ), 1e3),
                            Lt && Lt.postMessage({
                                command: "start",
                                time: Math.max(s.recordTimeTemp, 0)
                            })) : s.stopStudyTimers(),
                            s.$nextTick((function() {
                                var e = s.recordList.find((function(e) {
                                    return e.resourceId === a
                                }
                                ));
                                if (!s.isPreview && !e && s.excludeCorpCodeList.indexOf(s.corpCode) > -1) {
                                    var t = {
                                        recordId: null,
                                        courseId: s.courseId,
                                        sourceId: s.sourceId,
                                        providerCorpCode: s.providerCorpCode,
                                        chapterId: s.curChapterId,
                                        resourceId: s.curId,
                                        timeToFinish: null,
                                        currentPosition: 0,
                                        type: s.curType,
                                        currentStudyTime: 0,
                                        pageIndex: 0
                                    };
                                    le["c"].APIupdateCourseRecord(t).then((function(e) {
                                        s.getStudyRecordList()
                                    }
                                    ))
                                }
                            }
                            ))),
                            s.canTrackStudy() && ("video" !== s.curType && "audio" !== s.curType || ("video" === s.curType || "audio" === s.curType) && s.isEdge && s.excludeCorpCodeList.indexOf(s.corpCode) > -1) && ("video" !== s.curType && "audio" !== s.curType || s.allowDrag || s.$alert('<div class="message-tip-title"><span class="iconfont icon-info"></span><span class="message-title">' + s.$t("提示") + '</span></div><span class="message-cont">' + s.$t("请勿手动拖拽课程进度条，以保证课程的正常学习!课程单次学习实际播放时长不得少于课程视频时长的50%") + "</span>", "", {
                                confirmButtonText: s.$t("确定"),
                                showClose: !1,
                                dangerouslyUseHTMLString: !0
                            }),
                            s.recordTimeId && clearInterval(s.recordTimeId),
                            s.recordTimeId = setInterval((function() {
                                s.recordTime++
                            }
                            ), 1e3)),
                            s.canTrackStudy() && s.recordLearningStatus("ENTER_COURSE_ITEM"),
                            s.$nextTick((function() {
                                s.checkAndUpdateLearningRecord()
                            }
                            ))
                        }
                        ))
                    }
                },
                checkAndUpdateLearningRecord: function() {
                    var e, t = this;
                    if (this.canTrackStudy() && !this.isPreview) {
                        var s = this.recordList.find((function(e) {
                            return e.resourceId === t.curId
                        }
                        ))
                          , i = null === (e = this.courseData[this.curIndex[0]]) || void 0 === e ? void 0 : e.resourceDTOS[this.curIndex[1]];
                        if (s && i) {
                            var n = i.minStudyTime || 0
                              , a = s.currentStudyTime || 0;
                            a >= n && 1 !== s.confirmFinish && (this.curTimeToFinish = n,
                            this.updateCourseRecord())
                        }
                    }
                },
                toggleCollapse: function(e, t) {
                    e.fold = !e.fold,
                    this.$set(this.courseData, t, e)
                },
                startRecord: function() {},
                playing: function() {
                    var e = this.getPlayer();
                    this.ensureMediaStudyTimer(),
                    this.templateSeek1 && e && (console.log("+++++++++++++++++++++++++++++"),
                    this.seek = this.templateSeek1,
                    this.$refs.aliPlayer.seeked = this.templateSeek1,
                    e.seek(this.templateSeek1),
                    this.templateSeek1 = null)
                },
                play: function() {
                    var e = this
                      , t = this;
                    this.isCanPlayInTest(),
                    clearTimeout(this.pausecountTimer),
                    this.pausecountTimer = setTimeout((function() {
                        t.pauseCountTime && t.recordLearningStatus("PLAY")
                    }
                    ), 1e3),
                    ("video" === this.curType || "audio" === this.curType) && (this.isIE11 || this.isEdge) && this.excludeCorpCodeList.indexOf(this.corpCode) > -1 && (clearInterval(this.recordTimeId),
                    this.recordTimeId = setInterval((function() {
                        e.recordTime++
                    }
                    ), 1e3)),
                    "video" !== this.curType && "audio" !== this.curType || (clearInterval(this.recordTimeIdTemp),
                    this.recordTimeIdTemp = setInterval((function() {
                        e.recordTimeTemp++
                    }
                    ), 1e3),
                    Lt && Lt.postMessage({
                        command: "start",
                        time: Math.max(this.recordTimeTemp, this.workerRecordTimeTemp)
                    })),
                    this.isPlaying = !0,
                    this.videoCheck = !0;
                    var s = this.getPlayer();
                    this.templateSeek && ("video" == this.curType || "audio" === this.curType) && s && (console.log("+++++++++++++++++++++++++++++"),
                    this.seek = this.templateSeek,
                    this.$refs.aliPlayer.seeked = this.templateSeek,
                    s.seek(this.templateSeek),
                    this.templateSeek = null)
                },
                pause: function() {
                    var e = this;
                    this.pauseCountTime = 0,
                    clearTimeout(this.pausecountTimer),
                    this.pausecountTimer = setTimeout((function() {
                        e.pauseCountTime++,
                        e.recordLearningStatus("PAUSE")
                    }
                    ), 1e3),
                    ("video" === this.curType || "audio" === this.curType) && (this.isIE11 || this.isEdge) && this.excludeCorpCodeList.indexOf(this.corpCode) > -1 && clearInterval(this.recordTimeId),
                    "video" !== this.curType && "audio" !== this.curType || (clearInterval(this.recordTimeIdTemp),
                    Lt && Lt.postMessage({
                        command: "stop"
                    }))
                },
                getCurrentMediaElement: function() {
                    return document.querySelector("#J_prismPlayer>video") || document.querySelector("#J_prismPlayer>audio") || null
                },
                ensureMediaStudyTimer: function() {
                    var e = this;
                    if ("video" === this.curType || "audio" === this.curType) {
                        var t = this.getCurrentMediaElement();
                        t && !t.paused && ((this.isIE11 || this.isEdge) && this.excludeCorpCodeList.indexOf(this.corpCode) > -1 && !this.recordTimeId && (this.recordTimeId = setInterval((function() {
                            e.recordTime++
                        }
                        ), 1e3)),
                        this.recordTimeIdTemp || (this.recordTimeIdTemp = setInterval((function() {
                            e.recordTimeTemp++
                        }
                        ), 1e3),
                        Lt && Lt.postMessage({
                            command: "start",
                            time: Math.max(this.recordTimeTemp, this.workerRecordTimeTemp)
                        })),
                        this.isPlaying = !0,
                        this.videoCheck = !0)
                    }
                },
                ensureRecordSaveState: function() {
                    this.recordSaveState.resourceId !== this.curId && (this.recordSaveState = {
                        resourceId: this.curId,
                        timeCheckpoint: Math.floor((this.seek || 0) / 180),
                        minStudyTime: !1
                    })
                },
                triggerCourseRecordUpdate: function() {
                    var e = this;
                    this.canRecord && (this.updateCourseRecord(),
                    this.canRecord = !1),
                    this.TimeId1 && clearTimeout(this.TimeId1),
                    this.TimeId1 = setTimeout((function() {
                        e.canRecord = !0
                    }
                    ), 1e3)
                },
                ended: function() {
                    var e = this;
                    !this.campData.trainingCampId || this.campData.hasInterest || this.notShowCampAd || (this.campVisible = !0,
                    setTimeout((function() {
                        e.campVisible = !1
                    }
                    ), 2e4)),
                    this.recordLearningStatus("COMPLETE_COURSE_ITEM"),
                    this.getStudyRecordList((function() {
                        e.canSaveRecord = !0
                    }
                    )),
                    this.$nextTick((function() {
                        var t = e.recordList.find((function(t) {
                            return t.resourceId === e.curId
                        }
                        ));
                        !e.isIE11 && !e.isEdge || e.isIE11 && e.excludeCorpCodeList.indexOf(e.corpCode) > -1 && !e.allowDrag && e.recordTime >= e.noPreviewCurTimeToFinish ? (e.mustReplayCanFinish = !1,
                        e.updateCourseRecord(),
                        e.toResetPlayer()) : e.isIE11 && e.excludeCorpCodeList.indexOf(e.corpCode) > -1 && !e.allowDrag && e.recordTime < e.noPreviewCurTimeToFinish && (void 0 === t || 1 !== t.confirmFinish) ? (e.mustReplayCanFinish = !0,
                        clearInterval(e.recordTimeId),
                        e.updateCourseRecord()) : (e.mustReplayCanFinish = !1,
                        e.toResetPlayer()),
                        e.isPlaying = !1,
                        e.isReplayBtn = !0,
                        e.getStudyRate(),
                        setTimeout((function() {
                            e.isPlaying || e.isPreview || "unionpay" !== e.corpCode || e.playNextSection()
                        }
                        ), 1e3),
                        e.checkNowStudyStatusFunc()
                    }
                    ))
                },
                toResetPlayer: function() {
                    "unionpay" === this.corpCode || this.nextIndex
                },
                closeNextClickFunc: function() {
                    this.$emit("close-next-tip"),
                    this.visibleNextClick = !1
                },
                handleInNextFunc: function() {
                    this.visibleNextClick = !1,
                    this.$emit("close-next-tip"),
                    this.autoGoNext(!0)
                },
                ready: function() {
                    var e = this.syncPlayerInstance();
                    if (e) {
                        var t;
                        try {
                            t = this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].minStudyTime
                        } catch (fn) {
                            console.log(fn)
                        }
                        this.curTimeToFinish = t || Math.round(e.getDuration() * this.courseData[this.curIndex[0]].finishPercent),
                        this.noPreviewCurTimeToFinish = Math.round(.5 * e.getDuration());
                        var s = this;
                        "video" != this.curType && "audio" != this.curType || document.getElementsByClassName("rate-list").length && document.getElementsByClassName("rate-list")[0].addEventListener("click", (function(e) {
                            var t = e.target.innerText.replace("x", "");
                            s.studyLogData.studyLogVO.mark = t,
                            s.recordLearningStatus("SPEED_CHANGE")
                        }
                        )),
                        this.checkTbcAIKitMitt(!0)
                    }
                },
                checkTbcAIKitMitt: function(e) {
                    var t = this;
                    if (e) {
                        if (this.tbcAIKitMitt)
                            return;
                        this.tbcAIKitMittTimer = setInterval((function() {
                            window.__TBC_AI_KIT_MITT__ ? (t.tbcAIKitMitt = window.__TBC_AI_KIT_MITT__,
                            clearInterval(t.tbcAIKitMittTimer),
                            console.log("__TBC_AI_KIT_MITT__ 检测到存在，已停止检查", window.__TBC_AI_KIT_MITT__),
                            window.__TBC_AI_KIT_MITT__.on("AI-TIP", (function(e) {
                                console.log("data", e),
                                t.commonSeek(e.content.resourceId, e.time)
                            }
                            )),
                            console.log("最终结果：存在")) : console.log("__TBC_AI_KIT_MITT__ 暂未检测到")
                        }
                        ), 100),
                        this.tbcAIKitDelayTimer = setTimeout((function() {
                            t.tbcAIKitMitt || (clearInterval(t.tbcAIKitMittTimer),
                            console.log("检测结束（6s后）：window.__TBC_AI_KIT_MITT__ 未检测到"),
                            console.log("最终结果：不存在")),
                            clearTimeout(t.tbcAIKitDelayTimer)
                        }
                        ), 6e3)
                    } else
                        this.tbcAIKitMittTimer && (clearInterval(this.tbcAIKitMittTimer),
                        this.tbcAIKitMittTimer = null),
                        this.tbcAIKitDelayTimer && (clearTimeout(this.tbcAIKitDelayTimer),
                        this.tbcAIKitDelayTimer = null)
                },
                commonSeek: function(e, t) {
                    var s = this
                      , i = this.getPlayer();
                    if (i) {
                        var n = this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].resourceId
                          , a = t / 1e3
                          , r = this.recordList.find((function(t) {
                            return t.resourceId === e
                        }
                        ));
                        if (!(r && r.currentPosition < a && i.getCurrentTime() < a) || this.allowDrag)
                            return !r && !this.allowDrag && i.getCurrentTime() < a ? c["a"].error(this.$t("视频进度无法拖动，请联系管理员修改后台设置。")) : void (e === n ? this.isPlaying ? (this.seeked = a,
                            this.seek = a,
                            i.seek(a)) : this.rePlay(a) : this.courseData.forEach((function(i, n) {
                                i.resourceDTOS.forEach((function(r, o) {
                                    r.resourceId === e ? s.checkoutSection(r, n, o, null, a) : s.courseData.length - 1 === n && i.resourceDTOS.length - 1 === o && console.log(s.$t("资源引用错误，无法拖动"), e, t)
                                }
                                ))
                            }
                            )));
                        c["a"].error(this.$t("视频进度无法拖动，请联系管理员修改后台设置。"))
                    }
                },
                timeupdate: function() {
                    var e, t = this, s = this.player || (null === (e = this.$refs.aliPlayer) || void 0 === e ? void 0 : e.player);
                    if (s && this.videoCheck && ("video" === this.curType || "audio" === this.curType)) {
                        this.ensureRecordSaveState();
                        var i = this.seek || 0
                          , n = Math.floor(s.getCurrentTime() + .1)
                          , a = this.recordList.find((function(e) {
                            return e.resourceId === t.curId
                        }
                        ));
                        if (!(n > this.seek && n - this.seek > 3) || void 0 !== a && 1 === a.confirmFinish || this.allowDrag || this.isPreview || !1 !== this.pcEdgeBrowerPreview) {
                            var r = n > 2 ? n : 0;
                            this.seek = Math.max(this.seek, r)
                        } else {
                            var o;
                            if (null !== a && void 0 !== a && a.currentPosition && (null === a || void 0 === a ? void 0 : a.currentPosition) >= (null === a || void 0 === a ? void 0 : a.timeToFinish) && null !== (o = this.infixTests) && void 0 !== o && o.length) {
                                var c = n > 2 ? n : 0;
                                this.seek = Math.max(this.seek, c)
                            } else
                                s.seek(this.seek)
                        }
                        var u = Math.max(this.recordTimeTemp, this.workerRecordTimeTemp)
                          , l = Number(this.minStudyTime || this.curTime && this.curTime.minStudyTime || 0)
                          , d = Math.floor(n / 180)
                          , h = n >= 180 && d > this.recordSaveState.timeCheckpoint && d > Math.floor(i / 180)
                          , m = l > 0 && u >= l && !this.recordSaveState.minStudyTime;
                        (void 0 === a || 1 !== a.confirmFinish) && (n >= this.curTimeToFinish || m) && (!this.isIE11 && !this.isEdge || (this.isIE11 || this.isEdge) && this.excludeCorpCodeList.indexOf(this.corpCode) > -1 && this.allowDrag) && (m && (this.recordSaveState.minStudyTime = !0),
                        this.triggerCourseRecordUpdate()),
                        (n >= this.curTimeToFinish || h || m) && (!this.isIE11 && !this.isEdge || (this.isIE11 || this.isEdge) && this.excludeCorpCodeList.indexOf(this.corpCode) > -1 && this.allowDrag) && (h && (this.recordSaveState.timeCheckpoint = d),
                        m && (this.recordSaveState.minStudyTime = !0),
                        this.triggerCourseRecordUpdate())
                    }
                },
                rePlay: function(e) {
                    var t = this.getPlayer();
                    this.$refs.aliPlayer.isPlay = !0,
                    this.resetHandoutAndVideo(),
                    t && t.seek(0),
                    this.isPlaying = !0,
                    this.seek = 0,
                    this.play(e),
                    this.isReplayBtn = !1,
                    this.recordTime = 0,
                    this.recordTimeTemp = 0,
                    e && (this.templateSeek1 = e)
                },
                playNextSection: function() {
                    var e = this;
                    Lt && Lt.postMessage({
                        command: "reset"
                    }),
                    this.workerRecordTimeTemp = 0,
                    this.resetHandoutAndVideo(),
                    this.isPlaying = !0,
                    this.updateCourseRecord(),
                    this.isPreview || this.stopCurrentAndStartNextBeatV2(this.nextInfo),
                    this.$nextTick((function() {
                        e.isVideo = !1,
                        e.curType = e.nextInfo.resourceType,
                        "pic" === e.curType && (e.picUrl = e.nextInfo.content),
                        e.minStudyTime = e.nextInfo.minStudyTime,
                        e.curId = e.nextId,
                        e.curIndex = e.nextIndex ? e.nextIndex.slice(0) : null;
                        var t = e.recordList.find((function(t) {
                            return t.resourceId === e.curId
                        }
                        ));
                        void 0 !== t && null !== t.currentPosition && 1 !== t.confirmFinish ? e.seek = t.currentPosition : e.seek = 0,
                        "video" !== e.curType && "audio" !== e.curType || (e.isVideo = !0,
                        e.$refs.aliPlayer.aliPlayer(),
                        e.$nextTick((function() {
                            if (e.isPreview || (e.recordTimeTemp = t && t.currentStudyTime || 0),
                            !e.isPreview && !t && e.excludeCorpCodeList.indexOf(e.corpCode) > -1) {
                                var s = {
                                    recordId: null,
                                    courseId: e.courseId,
                                    sourceId: e.sourceId,
                                    providerCorpCode: e.providerCorpCode,
                                    chapterId: e.curChapterId,
                                    resourceId: e.curId,
                                    timeToFinish: null,
                                    currentPosition: 0,
                                    type: e.curType,
                                    currentStudyTime: 0,
                                    pageIndex: 0
                                };
                                le["c"].APIupdateCourseRecord(s).then((function(t) {
                                    e.getStudyRecordList()
                                }
                                ))
                            }
                        }
                        ))),
                        ("video" !== e.curType && "audio" !== e.curType || ("video" === e.curType || "audio" === e.curType) && e.isEdge && e.excludeCorpCodeList.indexOf(e.corpCode) > -1) && ("video" !== e.curType && "audio" !== e.curType || e.allowDrag || e.$alert('<div class="message-tip-title"><span class="iconfont icon-info"></span><span class="message-title">' + e.$t("提示") + '</span></div><span class="message-cont">' + e.$t("请勿手动拖拽课程进度条，以保证课程的正常学习!课程单次学习实际播放时长不得少于课程视频时长的50%") + "</span>", "", {
                            confirmButtonText: e.$t("确定"),
                            showClose: !1,
                            dangerouslyUseHTMLString: !0
                        }),
                        e.recordTime = 0,
                        e.recordTimeId && clearInterval(e.recordTimeId),
                        e.recordTimeId = setInterval((function() {
                            e.recordTime++
                        }
                        ), 1e3))
                    }
                    ))
                },
                writeRecordWhileClose: function() {
                    var e = this;
                    if (!this.isPreview && !1 === this.pcEdgeBrowerPreview) {
                        this.recordLearningStatus("QUIT_STUDY");
                        var t = this.recordList.find((function(t) {
                            return t.resourceId === e.curId
                        }
                        ))
                          , s = void 0 !== t ? t.recordId : null;
                        this.endTime = Date.now(),
                        this.continueTime = this.endTime - this.startTime;
                        var i = 0;
                        if ("video" === this.curType || "audio" === this.curType)
                            if ((this.isIE11 && this.excludeCorpCodeList.indexOf(this.corpCode) > -1 && this.recordTime < this.noPreviewCurTimeToFinish && !this.allowDrag || this.isEdge && this.excludeCorpCodeList.indexOf(this.corpCode) > -1 && this.recordTime < this.noPreviewCurTimeToFinish) && (i = this.recordTime),
                            this.isIE11 && this.excludeCorpCodeList.indexOf(this.corpCode) > -1 && this.recordTime >= this.noPreviewCurTimeToFinish && !this.allowDrag)
                                i = this.curTimeToFinish;
                            else if (this.isEdge && this.excludeCorpCodeList.indexOf(this.corpCode) > -1 && this.recordTime >= this.noPreviewCurTimeToFinish)
                                i = this.curTimeToFinish;
                            else {
                                var n = this.getPlayer();
                                i = n ? Math.round(Math.max(this.seek, n.getCurrentTime())) : Math.round(this.seek || 0)
                            }
                        var a = {
                            recordId: s,
                            courseId: this.courseId,
                            sourceId: this.sourceId,
                            providerCorpCode: this.providerCorpCode,
                            chapterId: this.curChapterId,
                            resourceId: this.curId,
                            timeToFinish: this.curTimeToFinish,
                            currentPosition: i,
                            type: this.curType,
                            currentStudyTime: "video" === this.curType || "audio" == this.curType ? this.recordTimeTemp - this.curTime.currentStudyTime : this.recordTime,
                            pageIndex: "video" !== this.curType && "audio" === this.curType && this.$refs.aliPreview ? this.$refs.aliPreview.currentCount : 0,
                            platform: "PC"
                        };
                        if (navigator.sendBeacon) {
                            var r = {
                                type: "text/plain; charset=UTF-8"
                            }
                              , o = new Blob([JSON.stringify(a)],r);
                            navigator.sendBeacon("/tbc-rms/record/writeRecordWhileClose", o)
                        } else {
                            var c = new XMLHttpRequest;
                            c.open("POST", "/tbc-rms/record/writeRecordWhileClose", !0),
                            c.setRequestHeader("Content-Type", "application/json"),
                            c.send(JSON.stringify(a))
                        }
                    }
                },
                registerClosePageEvent: function() {
                    window.addEventListener("beforeunload", this.writeRecordWhileClose)
                },
                handlePause: function(e) {
                    var t, s = e.target.tagName;
                    "Space" === e.code && ("TEXTAREA" !== s && "true" !== (null === (t = e.target) || void 0 === t ? void 0 : t.getAttribute("contenteditable")) && (this.checkoutStatus(!1),
                    e.preventDefault()))
                },
                registerSpaceEvent: function() {
                    document.addEventListener("keydown", this.handlePause)
                },
                checkoutStatus: function(e) {
                    "video" !== this.curType && "audio" !== this.curType || !this.player || (e ? (e && "VIDEO" === e.target.tagName || !e) && (this.$store.getters.aliPlayerLicense || document.querySelector(".prism-play-btn").click()) : document.querySelector(".prism-play-btn").click())
                },
                checkBrowerIsEdgeAndIE11: function() {
                    var e = window.navigator.userAgent
                      , t = function() {
                        return "ActiveXObject"in window
                    }();
                    t && (this.isIE11 = !0),
                    e.indexOf("Edge/") > 0 && (this.isEdge = !0);
                    return t && this.excludeCorpCodeList.indexOf(this.corpCode) < 0 && (!localStorage.getItem("IETipsTime") || Object(ge["getCurrentDateFormat"])(new Date, "yyyyMMdd") > localStorage.getItem("IETipsTime")) ? (this.$alert('<div class="message-tip-title"><span class="iconfont icon-info"></span><span class="message-title">' + this.$t("提示") + '</span></div><span class="message-cont">' + this.$t("当前课程通过IE浏览器学习，系统将不会记录学习进度。请您更换Google Chrome浏览器或登录微平台及APP进行课程的学习！") + "</span>", "", {
                        confirmButtonText: this.$t("确定"),
                        showClose: !1,
                        showCancelButton: !0,
                        cancelButtonText: this.$t("今日不再提醒"),
                        dangerouslyUseHTMLString: !0
                    }).then((function() {}
                    )).catch((function() {
                        localStorage.setItem("IETipsTime", Object(ge["getCurrentDateFormat"])(new Date, "yyyyMMdd"))
                    }
                    )),
                    !0) : e.indexOf("Edge/") > 0 && this.excludeCorpCodeList.indexOf(this.corpCode) < 0 && (!localStorage.getItem("IETipsTime") || Object(ge["getCurrentDateFormat"])(new Date, "yyyyMMdd") > localStorage.getItem("IETipsTime")) && (this.$alert('<div class="message-tip-title"><span class="iconfont icon-info"></span><span class="message-title">' + this.$t("提示") + '</span></div><span class="message-cont">' + this.$t("当前课程通过Edge浏览器学习，系统将不会记录学习进度。请您更换Google Chrome浏览器或登录微平台及APP进行课程的学习！") + "</span>", "", {
                        confirmButtonText: this.$t("确定"),
                        showClose: !1,
                        showCancelButton: !0,
                        cancelButtonText: this.$t("今日不再提醒"),
                        dangerouslyUseHTMLString: !0
                    }).then((function() {}
                    )).catch((function() {
                        localStorage.setItem("IETipsTime", Object(ge["getCurrentDateFormat"])(new Date, "yyyyMMdd"))
                    }
                    )),
                    !0)
                },
                clickCloseSaveRecord: function() {
                    var e = this;
                    window.addEventListener("message", (function(t) {
                        try {
                            var s = JSON.parse(t.data)
                        } catch (i) {
                            return
                        }
                        switch (s.action) {
                        case "studyRecordWhileClose":
                            e.writeRecordWhileClose(),
                            window.parent.postMessage(t.data, "*");
                            break
                        }
                    }
                    ), !1)
                },
                getSystemSeting: function() {
                    var e = this
                      , t = {
                        courseId: this.courseId,
                        eln_session_id: Nt("eln_session_id")
                    };
                    le["c"].loadCourseSystemSeting(t).then((function(t) {
                        "1001" == t.code && (t.bizResult.checkType && (e.checkType = t.bizResult.checkType,
                        e.maxTime = t.bizResult.preventCheatTimeTo,
                        e.minTime = t.bizResult.preventCheatTime,
                        e.preventCheatTime = (Math.random() * (t.bizResult.preventCheatTimeTo - t.bizResult.preventCheatTime) + t.bizResult.preventCheatTime).toFixed(1),
                        e.verificationType = "preventCheat",
                        e.preventCheatFlag = !0),
                        t.bizResult.enablePreventHang && (e.verificationType = "hangUp",
                        e.hangUpFlag = !0,
                        e.preventHangTime = t.bizResult.preventHangTime),
                        !t.bizResult.heartBeat || e.curInfo.finish && !t.bizResult.continueHeartBeat || (e.heartBeatFlag = !0,
                        e.$refs.aliPlayer && e.$refs.aliPlayer.addVideoClick()))
                    }
                    ))
                },
                isReady: function() {
                    var e = this;
                    ("video" == this.curType || "audio" === this.curType) && this.addVideoClickFlag && this.$refs.preventCheat && this.$refs.preventCheat.addVideoClick(),
                    this.isPreview || !1 !== this.pcEdgeBrowerPreview ? this.$refs.aliPlayer && this.$refs.aliPlayer.addVideoClick() : (this.addVideoClickFlag = !0,
                    this.getSystemSeting()),
                    this.$nextTick((function() {
                        setTimeout((function() {
                            e.ensureMediaStudyTimer()
                        }
                        ), 300)
                    }
                    ))
                },
                pauseOrPlay: function(e) {
                    var t = this;
                    if (console.log("🚀 ~ pauseOrPlay ~:", e),
                    this.isVideo) {
                        var s = this.getPlayer();
                        !e && s ? s.pause() : s && s.play()
                    } else if (e) {
                        if (!this.canTrackStudy())
                            return;
                        this.recordTimeId && clearInterval(this.recordTimeId),
                        this.recordTimeId = setInterval((function() {
                            t.recordTime++
                        }
                        ), 1e3)
                    } else
                        this.stopStudyTimers()
                },
                pauseForExternalModal: function() {
                    this.pauseOrPlay(!1),
                    this.playOrPauseReordTime(!0)
                },
                saveStudyLog: function(e) {
                    this.recordLearningStatus(e)
                },
                autoGoNext: function(e) {
                    var t = this
                      , s = {
                        enentType: "QUIT_STUDY",
                        studyLogVO: {
                            courseItemId: this.curId,
                            courseItemName: this.curInfo.resourceName,
                            courseId: this.courseId,
                            courseCode: "",
                            courseStandard: "ONLINEVIDEOCOURSE",
                            mark: "",
                            minStudyTime: null == this.curInfo.minStudyTime ? "" : this.curInfo.minStudyTime,
                            videoDuration: "video" == this.curType && this.player ? Math.floor(1e3 * this.player.getDuration()) : ""
                        }
                    };
                    le["c"].saveStudyLog(this.courseId, s).then((function(s) {
                        e ? t.$emit("nextStep", !0) : t.$emit("nextStep", !1)
                    }
                    ))
                },
                recordLearningStatus: function(e) {
                    if (this.canTrackStudy()) {
                        "PREVENT_HANG_LOGOUT" == e && window.removeEventListener("beforeunload", this.writeRecordWhileClose),
                        "ENTER_STUDY" == e && (this.firstEnterStudyFlag = !0),
                        this.studyLogData.studyLogVO.minStudyTime = null == this.curInfo.minStudyTime ? "" : this.curInfo.minStudyTime,
                        this.studyLogData.eventType = e,
                        this.studyLogData.studyLogVO.courseItemId = this.curId,
                        this.studyLogData.studyLogVO.courseItemName = this.curInfo.resourceName,
                        this.studyLogData.studyLogVO.courseId = this.courseId,
                        this.studyLogData.studyLogVO.courseTitle = this.courseObj.courseTitle;
                        try {
                            this.studyLogData.studyLogVO.videoDuration = "video" != this.curType && "audio" !== this.curType || !this.player ? "" : Math.floor(1e3 * this.player.getDuration())
                        } catch (s) {
                            console.log(s)
                        }
                        var t = JSON.parse(JSON.stringify(this.studyLogData));
                        le["c"].saveStudyLog(this.courseId, t).then((function(e) {}
                        ))
                    }
                },
                getCourseSetting: function() {
                    var e = this
                      , t = {
                        courseId: this.courseId,
                        sourceId: this.sourceId,
                        providerCorpCode: this.providerCorpCode
                    };
                    le["b"].APIshowCourseSetting(t).then((function(t) {
                        e.allowDrag = 1 == t.bizResult.allowDrag,
                        e.allowHighSpeed = 1 == t.bizResult.allowHighSpeed,
                        e.allowMinStudyTime = 1 == t.bizResult.allowMinStudyTime
                    }
                    ))
                },
                playOrPauseReordTime: function(e) {
                    var t = this;
                    e ? clearInterval(this.recordTimeId) : (this.recordTimeId && clearInterval(this.recordTimeId),
                    this.recordTimeId = setInterval((function() {
                        t.recordTime++
                    }
                    ), 1e3)),
                    e ? (clearInterval(this.recordTimeIdTemp),
                    Lt && Lt.postMessage({
                        command: "stop"
                    })) : (this.recordTimeIdTemp = setInterval((function() {
                        t.recordTimeTemp++
                    }
                    ), 1e3),
                    Lt && Lt.postMessage({
                        command: "start",
                        time: Math.max(this.recordTimeTemp, this.workerRecordTimeTemp)
                    }))
                },
                handletabClick: function(e, t) {
                    var s = this;
                    this.$nextTick((function() {
                        s.navMsg = "myNote",
                        s.isCreateNote = !1
                    }
                    ))
                },
                getMyNoteAndOtherNoteList: function(e, t) {
                    var s = this
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "init";
                    "init" === i && (this.myNoteCondition.pageNo = 1,
                    this.otherNoteCondition.pageNo = 1,
                    t.pageNo = 1);
                    var n = {
                        courseId: this.courseId,
                        processType: e,
                        page: {
                            pageNo: t.pageNo,
                            pageSize: t.pageSize
                        }
                    };
                    Object(De["l"])(n).then((function(t) {
                        var i = t.bizResult;
                        "me" === e ? s.myNotes = i || [] : "other" === e && (s.otherNotes = i || [])
                    }
                    ))
                },
                isCanPlayInTest: function() {
                    var e, t = this.$route.query.from, s = "preview" === t;
                    if (s || !this.isVideo || !this.infixTests.length)
                        return !0;
                    var i = rt["a"].currentTime
                      , n = null === (e = this.infixTests) || void 0 === e ? void 0 : e.some((function(e) {
                        var t = e.popupTime
                          , s = e.userState
                          , n = e.mandatoryTest;
                        return n && "PASS" !== s && t === i
                    }
                    ));
                    return n && (c["a"].destroy(),
                    c["a"].info(this.$t("请先完成随堂测试")),
                    rt["a"].player.pause()),
                    !n
                },
                onTagClick: function(e, t, s) {
                    var i = this.$route.query.from;
                    this.infixTest = e.data,
                    this.$refs.aliPlayer.pause(),
                    this.$refs.courseTest.show({
                        infixTest: e,
                        testList: t,
                        isTag: !0,
                        time: s,
                        isVideo: this.isVideo,
                        isPreview: "preview" === i
                    })
                },
                onStartDocumentTest: function() {
                    var e = this.$route.query.from
                      , t = "preview" === e;
                    this.currentStudyTime > 0 && !t ? c["a"].info(this.$t("还需观看{num}并完成随堂测试后完成学习", {
                        num: Object(ge["TimeToString"])(this.currentStudyTime)
                    })) : this.$refs.courseTest.show({
                        infixTest: {
                            data: this.infixTests[0],
                            offset: 1
                        },
                        time: 100,
                        isVideo: this.isVideo,
                        isPreview: t
                    })
                },
                onTimeMatch: function(e) {
                    var t, s = this, i = this.$route.query.from, n = null === e || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.userState;
                    "preview" !== i && "PASS" === n || (this.$refs.aliPlayer.pause(),
                    Object(ge["exitFullscreen"])(document.querySelector("#J_prismPlayer video")),
                    setTimeout((function() {
                        s.$refs.courseTest.show({
                            infixTest: e,
                            isVideo: s.isVideo,
                            isPreview: "preview" === i
                        })
                    }
                    ), 0))
                },
                onCompleteSeek: function(e) {
                    var t = this.$route.query.from;
                    if ("preview" !== t) {
                        var s = e.filter((function(e) {
                            var t = (null === e || void 0 === e ? void 0 : e.data) || {}
                              , s = t.userState
                              , i = t.mandatoryTest;
                            return "PASS" !== s && i
                        }
                        ));
                        if (s.length) {
                            s.sort((function(e, t) {
                                return e.offset - t.offset
                            }
                            ));
                            var i = s[0].offset - 1;
                            i = i < 0 ? 0 : i,
                            this.$refs.aliPlayer.player.seek(i),
                            c["a"].info(this.$t("请先完成随堂测试"))
                        }
                    }
                },
                updateInFixTest: function(e) {
                    var t = !0
                      , s = this.infixTests.map((function(s) {
                        return s.infixSettingId === e.infixSettingId ? "PASS" === s.userState ? s : ("PASS" !== e.userState && (t = !1),
                        e) : ("PASS" !== e.userState && (t = !1),
                        s)
                    }
                    ));
                    s = Object.assign([], s),
                    this.courseData[this.curIndex[0]] && (this.courseData[this.curIndex[0]].resourceDTOS[this.curIndex[1]].infixTests = s),
                    this.infixTests = Object.assign([], s);
                    var i = {
                        NO_JOIN: this.$t("未完成"),
                        NO_PASS: this.$t("未完成"),
                        PASS: this.$t("已完成")
                    };
                    this.isVideo && (rt["a"].generalTestList(s.map((function(e) {
                        return Dt(Dt({}, e), {}, {
                            userStateText: i[e.userState],
                            userStateColor: "#1888FF"
                        })
                    }
                    ))),
                    rt["a"].setPrismTag()),
                    t && this.updateCourseRecord("", "clear")
                },
                getCampData: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Object(De["p"])(e.courseId);
                                case 2:
                                    if (s = t.sent,
                                    s.success) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", e.$message.error(s.message));
                                case 5:
                                    e.campData = s.data,
                                    s.data.trainingCampId && (s.data.hasInterest || setTimeout((function() {
                                        e.showCamp = !0
                                    }
                                    ), 3e3),
                                    e.queryTodayCampShow());
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                addHits: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Object(De["a"])({
                                        trainingCampId: e.campData.trainingCampId
                                    });
                                case 2:
                                    s = t.sent,
                                    console.log(s);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                queryTodayCampShow: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return s = {
                                        trainingCampId: e.campData.trainingCampId,
                                        courseId: e.courseId
                                    },
                                    t.next = 3,
                                    Object(De["t"])(s);
                                case 3:
                                    if (i = t.sent,
                                    i.success) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.abrupt("return", e.$message.error(i.message));
                                case 6:
                                    e.notShowCampAd = i.data || !1;
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                closeCampAd: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.campVisible = !1,
                                    !e.notShowCampAd) {
                                        t.next = 8;
                                        break
                                    }
                                    return s = {
                                        trainingCampId: e.campData.trainingCampId,
                                        courseId: e.courseId,
                                        hasPrompt: !0
                                    },
                                    t.next = 5,
                                    Object(De["x"])(s);
                                case 5:
                                    if (i = t.sent,
                                    i.success) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return", e.$message.error(i.message));
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                toggleInterest: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return s = e.campData.hasInterest ? De["o"] : De["b"],
                                    t.next = 3,
                                    s({
                                        trainingCampId: e.campData.trainingCampId
                                    });
                                case 3:
                                    if (i = t.sent,
                                    i.success) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.abrupt("return", e.$message.error(i.message));
                                case 6:
                                    e.campData.hasInterest = !e.campData.hasInterest,
                                    e.$message.success(i.message);
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                goTrainingCamp: function() {
                    var e = location.origin;
                    window.open(e + "/frontend-page/trainingCampDetail/" + this.campData.trainingCampId)
                },
                checkFirstStudyStatusFunc: function() {
                    var e = [];
                    if (this.courseData && this.courseData.length > 0 && this.courseData.map((function(t) {
                        t.resourceDTOS && t.resourceDTOS.length > 0 && t.resourceDTOS.map((function(t) {
                            e.push(t)
                        }
                        ))
                    }
                    )),
                    !(this.recordList.length < e.length)) {
                        var t = [];
                        this.recordList && this.recordList.length > 0 && this.recordList.map((function(e) {
                            e.confirmFinish ? t.push(!0) : t.push(!1)
                        }
                        ));
                        var s = ["COURSE_EVALUATE", "COURSE_EXAM", "COURSE_EMS_EXAM"]
                          , i = this.courseInfo.courseSteps || ""
                          , n = i.split(",")
                          , a = [];
                        s.map((function(e) {
                            a.push(n.includes(e))
                        }
                        )),
                        a.includes(!0) && 100 === +this.studyRate && !t.includes(!1) && this.initDialogFunc()
                    }
                },
                checkNowStudyStatusFunc: function() {
                    var e = this;
                    if (this.canTrackStudy()) {
                        var t = Object(Oe["a"])(this.recordList);
                        this.getStudyRate(),
                        this.getCourseInfo(),
                        setTimeout((function() {
                            var s = t.find((function(t) {
                                return t.resourceId === e.curId
                            }
                            ))
                              , i = e.courseData[e.courseData.length - 1];
                            i.resourceDTOS && i.resourceDTOS.length > 0 && (i = i.resourceDTOS[i.resourceDTOS.length - 1]);
                            var n = ["COURSE_EVALUATE", "COURSE_EXAM", "COURSE_EMS_EXAM"]
                              , a = e.courseInfo.courseSteps || ""
                              , r = a.split(",")
                              , o = [];
                            n.map((function(e) {
                                o.push(r.includes(e))
                            }
                            )),
                            o.includes(!0) && 100 === +e.studyRate && s.resourceId == i.resourceId && (e.isLastStep || e.initDialogFunc())
                        }
                        ), 1e3)
                    }
                },
                initDialogFunc: function() {
                    this.visibleNextClick = !0
                },
                stopCurrentAndStartNextBeatV2: function(e) {
                    var t = this;
                    if (e) {
                        var s = {
                            courseId: this.courseId,
                            itemId: this.curInfo.itemId,
                            videoPosition: this.player && Math.floor(this.player.getCurrentTime()),
                            beatStatus: 0
                        };
                        Object(Le["a"])(s).then((function(s) {
                            var i = {
                                courseId: t.courseId,
                                itemId: e.itemId,
                                videoPosition: t.player && Math.floor(t.player.getCurrentTime())
                            };
                            Object(Le["a"])(i)
                        }
                        ))
                    } else {
                        Object(Le["b"])({
                            courseId: this.courseId
                        });
                        var i = {
                            courseId: this.courseId,
                            itemId: this.curInfo.itemId,
                            videoPosition: this.player && Math.floor(this.player.getCurrentTime())
                        };
                        Object(Le["a"])(i)
                    }
                    this.beatV2Timer && (clearInterval(this.beatV2Timer),
                    this.beatV2Timer = null),
                    this.beatV2Timer = setInterval((function() {
                        var s = {
                            courseId: t.courseId,
                            itemId: e && e.itemId || t.curInfo.itemId,
                            videoPosition: t.player && Math.floor(t.player.getCurrentTime())
                        };
                        Object(Le["a"])(s)
                    }
                    ), this.beatV2Time)
                },
                setDocCoursePreviewVersion: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    le["a"].getDocPreviewInfo({
                                        resourceId: e.curId,
                                        providerCorpCode: e.providerCorpCode
                                    });
                                case 2:
                                    s = t.sent,
                                    e.aliVersion = s.bizResult.aliVersion;
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                openAi: function() {
                    document.dispatchEvent(new KeyboardEvent("keydown",{
                        code: "KeyM",
                        ctrlKey: !0,
                        bubbles: !0
                    }))
                }
            },
            beforeDestroy: function() {
                this.visibleNextClick = !1,
                this.beatV2Timer && (clearInterval(this.beatV2Timer),
                this.beatV2Timer = null),
                clearInterval(this.heartTimer),
                document.removeEventListener("keyup", this.handlePause),
                this.timer && clearInterval(this.timer),
                this.checkTbcAIKitMitt(!1)
            },
            destroyed: function() {
                this.visibleNextClick = !1,
                window.removeEventListener("beforeunload", this.writeRecordWhileClose),
                this.timer && clearInterval(this.timer)
            },
            beforeRouteLeave: function(e, t, s) {
                this.visibleNextClick = !1,
                s()
            },
            created: function() {
                this.getCourseSetting()
            },
            mounted: function() {
                var e = this;
                return Object(a["a"])(regeneratorRuntime.mark((function t() {
                    var s;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                document.title = e.courseObj.courseTitle,
                                s = e.$route.query.courseId,
                                X({
                                    courseId: s
                                }).then((function(t) {
                                    0 === +t.status && t.data.isCourseCheat ? o["a"].confirm({
                                        class: "apaas-confirm",
                                        title: e.$t("当前已有课程正在学习中,请先关闭其他课程再重试......"),
                                        content: e.$t("课程名称：") + t.data.courseTitle + e.$t("，课程编号：") + t.data.courseCode,
                                        okText: e.$t("去学习"),
                                        cancelText: e.$t("关闭"),
                                        zIndex: 1002,
                                        onOk: function() {
                                            "ONLINEVIDEOCOURSE" === t.data.courseStandard ? e.$router.replace("/courseSetting/courseLearning/redirect/courseSetting/courseLearning/play?courseId=".concat(t.data.courseId, "&courseType=NEW_COURSE_CENTER")) : location.href = "/els/html/studyCourse/studyCourse.enterCourse.do?courseId=".concat(t.data.courseId, "&courseType=NEW_COURSE_CENTER&studyType=STUDY")
                                        },
                                        onCancel: function() {
                                            window.close()
                                        }
                                    }) : e.onMounted()
                                }
                                ));
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            }
        }
          , Ut = $t
          , Mt = (s("8137"),
        s("4620"),
        s("4847"),
        Object(y["a"])(Ut, Ee, ke, !1, null, "f66c5f1c", null))
          , jt = Mt.exports
          , Ft = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("a-spin", {
                attrs: {
                    spinning: e.loading
                }
            }, [s("div", {
                staticClass: "course-evaluate",
                class: {
                    fullscreen: e.isFullScreen,
                    "is-view": e.isView
                }
            }, [s("div", {
                staticClass: "course-evaluate-header"
            }, [s("div", {
                staticClass: "course-evaluate-title"
            }, [s("span", [e._v(e._s(e.$t("课程评估")))]), s("div", {
                staticClass: "course-evaluate-fullscreen",
                on: {
                    click: e.toggleFullScreen
                }
            }, [e.isFullScreen ? [s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    "icon-class": "fanhui",
                    "class-name": "full"
                }
            }), s("span", {
                staticClass: "full-text"
            }, [e._v(e._s(e.$t("返回")))])] : [s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    "icon-class": "quanping",
                    "class-name": "full"
                }
            }), s("span", {
                staticClass: "full-text"
            }, [e._v(e._s(e.$t("全屏")))])]], 2)]), s("div", {
                staticClass: "course-evaluate-rate"
            }, [s("div", {
                staticClass: "course-evaluate-rate-name mt-4"
            }, [e._v("\n          " + e._s(e.$t("恭喜您已经完成课程学习，请完成课程评估。")) + "\n        ")]), s("div", {
                staticClass: "course-evaluate-rate-tip mt-4"
            }, [e._v("\n          " + e._s(e.$t("课程评估问卷说明：请您根据课程学习结束后的感觉，为该课程的下列项目进行评分。按满意程度或符合程度（1分为最低，5分为最高）进行评分。")) + "\n        ")]), s("div", {
                staticClass: "course-evaluate-rate-star mt-4"
            }, [s("span", [e._v(e._s(e.$t("课程评分：")))]), s("span", [s("a-rate", {
                on: {
                    change: e.handleRate
                },
                model: {
                    value: e.star,
                    callback: function(t) {
                        e.star = t
                    },
                    expression: "star"
                }
            })], 1), s("span", {
                staticClass: "ml-8"
            }, [e._v(e._s(e.$t("点击星星进行评价")))])])]), s("div", {
                staticClass: "course-evaluate-desc"
            }, [s("span", {
                staticClass: "course-evaluate-tip"
            }, [e._v(e._s(e.$t("说明：请您根据课程学习结束后的感受，回答以下问题。")))])])]), s("div", {
                staticClass: "course-evaluate-content"
            }, [s("CourseTest", {
                ref: "courseTest",
                attrs: {
                    isView: e.isView,
                    isEvaluate: !0,
                    question: e.question
                }
            })], 1), s("div", {
                staticClass: "course-evaluate-footer"
            }, [s("a-button", {
                staticClass: "mr-12",
                on: {
                    click: e.goPre
                }
            }, [e._v(e._s(e.$t("上一步")))]), e.isView ? [e.isLastStep ? e._e() : s("a-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.goNext
                }
            }, [e._v(e._s(e.$t("下一步")))])] : s("a-button", {
                attrs: {
                    type: "primary",
                    disabled: e.submitLoading
                },
                on: {
                    click: e.submit
                }
            }, [e._v(e._s(e.$t("提交")))])], 2)])])
        }
          , Bt = []
          , Vt = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "course-test"
            }, [e.question && e.question.length ? s("div", {
                staticClass: "course-test-type"
            }, [s("div", {
                staticClass: "course-test-type-list"
            }, e._l(e.question, (function(t, i) {
                return s("div", {
                    key: i,
                    staticClass: "course-test-type-list-item",
                    class: {
                        "show-result": e.isView && e.showResult
                    }
                }, ["SINGLE" === t.itemType ? [s("div", {
                    staticStyle: {
                        display: "flex"
                    }
                }, [s("div", {
                    staticClass: "course-test-type-title"
                }, [s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        className: "type",
                        "icon-class": "shitileixing"
                    }
                }), s("span", {
                    staticClass: "course-test-type-title-icon"
                }), s("span", {
                    staticClass: "course-test-type-title-name"
                }, [e._v(e._s(e.$t("单选题")))])], 1)]), s("div", {
                    staticClass: "course-test-type-list-item-title",
                    class: {
                        "is-right": !e.isEvaluate && e.isView && t.userRight,
                        "is-wrong": !e.isEvaluate && e.isView && !t.userRight
                    }
                }, [s("span", [t.required ? s("span", {
                    staticClass: "course-test-type-list-item-title-re"
                }, [e._v("*")]) : e._e(), s("span", {
                    staticClass: "course-test-type-list-item-title-ind"
                }, [e._v(e._s(i + 1) + ".")]), s("span", {
                    staticClass: "course-test-type-list-item-title-content"
                }, [e._v(e._s(t.content) + "\n              ")])])]), s("div", {
                    staticClass: "course-test-type-list-item-options"
                }, [e.isView ? s("a-radio-group", {
                    staticClass: "course-test-type-list-item-options-box",
                    attrs: {
                        value: e.getAnswer("SINGLE", t)
                    }
                }, e._l(t.questionItems, (function(i, n) {
                    return s("div", {
                        key: n,
                        staticClass: "course-test-type-list-item-options-item",
                        class: {
                            "is-select": i.userItem
                        },
                        staticStyle: {
                            "flex-wrap": "wrap"
                        }
                    }, [s("a-radio", {
                        attrs: {
                            label: i.identifier,
                            value: i.itemId
                        }
                    }, [e._v("\n                  " + e._s(i.identifier.toUpperCase()) + "."), s("i", {
                        staticClass: "mr-4"
                    }), e._v("\n                  " + e._s(i.content) + "\n                ")]), i.allowInput && e.getAnswer("SINGLE", t) === i.itemId ? s("a-input", {
                        staticStyle: {
                            width: "100%",
                            "flex-basis": "100%",
                            "margin-top": "8px"
                        },
                        attrs: {
                            type: "textarea",
                            disabled: "",
                            rows: "3"
                        },
                        model: {
                            value: i.userOtherAnswer,
                            callback: function(t) {
                                e.$set(i, "userOtherAnswer", t)
                            },
                            expression: "qi.userOtherAnswer"
                        }
                    }) : e._e()], 1)
                }
                )), 0) : s("a-radio-group", {
                    model: {
                        value: t.answer,
                        callback: function(s) {
                            e.$set(t, "answer", s)
                        },
                        expression: "q.answer"
                    }
                }, e._l(t.questionItems, (function(i, n) {
                    return s("div", {
                        key: n,
                        staticClass: "course-test-type-list-item-options-item",
                        staticStyle: {
                            "flex-wrap": "wrap"
                        }
                    }, [s("a-radio", {
                        attrs: {
                            label: i.identifier,
                            value: i.itemId
                        }
                    }, [s("span", {
                        staticClass: "mr-4"
                    }, [e._v(e._s(i.identifier.toUpperCase()) + ".")]), s("span", [e._v(e._s(i.content))])]), i.allowInput && t.answer === i.itemId ? s("a-input", {
                        staticStyle: {
                            width: "100%",
                            "flex-basis": "100%",
                            "margin-top": "8px"
                        },
                        attrs: {
                            type: "textarea",
                            rows: "3"
                        },
                        model: {
                            value: i.userOtherAnswer,
                            callback: function(t) {
                                e.$set(i, "userOtherAnswer", t)
                            },
                            expression: "qi.userOtherAnswer"
                        }
                    }) : e._e()], 1)
                }
                )), 0)], 1), e.isView && e.showStandard ? s("div", {
                    staticClass: "answer-box"
                }, [s("div", {
                    staticClass: "answer",
                    class: [t.userRight ? "is-right" : "is-wrong"]
                }, [s("div", {
                    staticClass: "l-box"
                }, [t.userRight ? s("i", {
                    staticClass: "el-icon-check"
                }) : s("i", {
                    staticClass: "el-icon-close"
                })]), e._v("\n              " + e._s(e.$t("你的回答")) + ":"), s("span", {
                    class: t.userRight ? "a-w a-r" : "a-w"
                }, [e._v(e._s(e.getAnswerKey("SINGLE", t)))]), e._v("\n              " + e._s(e.$t("正确答案")) + ":"), s("span", {
                    staticClass: "a-r"
                }, [e._v(e._s(e.getRightAnswer("SINGLE", t)))])]), t.questionAnalysis ? s("div", {
                    staticClass: "analysis"
                }, [s("div", {
                    staticClass: "analysis-title"
                }, [e._v(e._s(e.$t("试题解析")))]), s("div", {
                    staticClass: "analysis-content"
                }, [e._v(e._s(t.questionAnalysis))])]) : e._e()]) : e._e()] : e._e(), "MULTIPLE" === t.itemType ? [s("div", {
                    staticStyle: {
                        display: "flex"
                    }
                }, [s("div", {
                    staticClass: "course-test-type-title"
                }, [s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        className: "type",
                        "icon-class": "shitileixing"
                    }
                }), s("span", {
                    staticClass: "course-test-type-title-icon"
                }), s("span", {
                    staticClass: "course-test-type-title-name"
                }, [e._v(e._s(e.$t("多选题")))])], 1)]), s("div", {
                    staticClass: "course-test-type-list-item-title",
                    class: {
                        "is-right": !e.isEvaluate && e.isView && t.userRight,
                        "is-wrong": !e.isEvaluate && e.isView && !t.userRight
                    }
                }, [s("span", [t.required ? s("span", {
                    staticClass: "course-test-type-list-item-title-re"
                }, [e._v("*")]) : e._e(), s("span", {
                    staticClass: "course-test-type-list-item-title-ind"
                }, [e._v(e._s(i + 1) + ".")]), s("span", {
                    staticClass: "course-test-type-list-item-title-content"
                }, [e._v(e._s(t.content))]), !e.isEvaluate && e.isView ? s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        "icon-class": t.userRight ? "zhengque" : "cuowu"
                    }
                }) : e._e()], 1)]), s("div", {
                    staticClass: "course-test-type-list-item-options"
                }, [e.isView ? s("a-checkbox-group", {
                    staticClass: "course-test-type-list-item-options-box",
                    attrs: {
                        value: e.getAnswer("MULTIPLE", t)
                    }
                }, e._l(t.questionItems, (function(i, n) {
                    return s("div", {
                        key: n,
                        staticClass: "course-test-type-list-item-options-item",
                        class: {
                            "is-select": i.userItem
                        },
                        staticStyle: {
                            "flex-wrap": "wrap"
                        }
                    }, [s("a-checkbox", {
                        attrs: {
                            label: i.identifier,
                            value: i.itemId
                        }
                    }, [e._v("\n                  " + e._s(i.identifier.toUpperCase()) + "."), s("i", {
                        staticClass: "mr-4"
                    }), e._v(" " + e._s(i.content) + "\n                ")]), i.allowInput && e.getAnswer("MULTIPLE", t).includes(i.itemId) ? s("a-input", {
                        staticStyle: {
                            width: "100%",
                            "flex-basis": "100%",
                            "margin-top": "8px"
                        },
                        attrs: {
                            type: "textarea",
                            disabled: "",
                            rows: "3"
                        },
                        model: {
                            value: i.userOtherAnswer,
                            callback: function(t) {
                                e.$set(i, "userOtherAnswer", t)
                            },
                            expression: "qi.userOtherAnswer"
                        }
                    }) : e._e()], 1)
                }
                )), 0) : s("a-checkbox-group", {
                    model: {
                        value: t.answer,
                        callback: function(s) {
                            e.$set(t, "answer", s)
                        },
                        expression: "q.answer"
                    }
                }, e._l(t.questionItems, (function(i, n) {
                    return s("div", {
                        key: n,
                        staticClass: "course-test-type-list-item-options-item",
                        staticStyle: {
                            "flex-wrap": "wrap"
                        }
                    }, [s("a-checkbox", {
                        attrs: {
                            label: i.identifier,
                            value: i.itemId
                        }
                    }, [s("span", {
                        staticClass: "mr-4"
                    }, [e._v(e._s(i.identifier.toUpperCase()) + ".")]), s("span", [e._v(e._s(i.content))])]), i.allowInput && t.answer.includes(i.itemId) ? s("a-input", {
                        staticStyle: {
                            width: "100%",
                            "flex-basis": "100%",
                            "margin-top": "8px"
                        },
                        attrs: {
                            type: "textarea",
                            rows: "3"
                        },
                        model: {
                            value: i.userOtherAnswer,
                            callback: function(t) {
                                e.$set(i, "userOtherAnswer", t)
                            },
                            expression: "qi.userOtherAnswer"
                        }
                    }) : e._e()], 1)
                }
                )), 0)], 1), e.isView && e.showStandard ? s("div", {
                    staticClass: "answer-box"
                }, [s("div", {
                    staticClass: "answer",
                    class: [t.userRight ? "is-right" : "is-wrong"]
                }, [s("div", {
                    staticClass: "l-box"
                }, [t.userRight ? s("i", {
                    staticClass: "el-icon-check"
                }) : s("i", {
                    staticClass: "el-icon-close"
                })]), e._v("\n              " + e._s(e.$t("你的回答")) + ":"), s("span", {
                    class: t.userRight ? "a-w a-r" : "a-w"
                }, [e._v(e._s(e.getAnswerKey("MULTIPLE", t)))]), e._v("\n              " + e._s(e.$t("正确答案")) + ":"), s("span", {
                    staticClass: "a-r"
                }, [e._v(e._s(e.getRightAnswer("MULTIPLE", t)))])]), t.questionAnalysis ? s("div", {
                    staticClass: "analysis"
                }, [s("div", {
                    staticClass: "analysis-title"
                }, [e._v(e._s(e.$t("试题解析")))]), s("div", {
                    staticClass: "analysis-content"
                }, [e._v(e._s(t.questionAnalysis))])]) : e._e()]) : e._e()] : e._e(), "TRUE_FALSE" === t.itemType ? [s("div", {
                    staticStyle: {
                        display: "flex"
                    }
                }, [s("div", {
                    staticClass: "course-test-type-title"
                }, [s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        className: "type",
                        "icon-class": "shitileixing"
                    }
                }), s("span", {
                    staticClass: "course-test-type-title-icon"
                }), s("span", {
                    staticClass: "course-test-type-title-name"
                }, [e._v(e._s(e.$t("判断题")))])], 1)]), s("div", {
                    staticClass: "course-test-type-list-item-title",
                    class: {
                        "is-right": !e.isEvaluate && e.isView && t.userRight,
                        "is-wrong": !e.isEvaluate && e.isView && !t.userRight
                    }
                }, [s("span", [t.required ? s("span", {
                    staticClass: "course-test-type-list-item-title-re"
                }, [e._v("*")]) : e._e(), s("span", {
                    staticClass: "course-test-type-list-item-title-ind"
                }, [e._v(e._s(i + 1) + ".")]), s("span", {
                    staticClass: "course-test-type-list-item-title-content"
                }, [e._v(e._s(t.content))]), !e.isEvaluate && e.isView ? s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        "icon-class": t.userRight ? "zhengque" : "cuowu"
                    }
                }) : e._e()], 1)]), s("div", {
                    staticClass: "course-test-type-list-item-options"
                }, [e.isView ? s("a-radio-group", {
                    staticClass: "course-test-type-list-item-options-box",
                    attrs: {
                        value: e.getAnswer("TRUE_FALSE", t)
                    }
                }, e._l(t.questionItems, (function(t, i) {
                    return s("div", {
                        key: i,
                        staticClass: "course-test-type-list-item-options-item",
                        class: {
                            "is-select": t.userItem
                        }
                    }, [s("a-radio", {
                        attrs: {
                            label: t.identifier,
                            value: t.itemId
                        }
                    }, [e._v("\n                  " + e._s(t.identifier.toUpperCase()) + "."), s("i", {
                        staticClass: "mr-4"
                    }), e._v("\n                  " + e._s(e.$t(t.content)) + "\n                ")])], 1)
                }
                )), 0) : s("a-radio-group", {
                    model: {
                        value: t.answer,
                        callback: function(s) {
                            e.$set(t, "answer", s)
                        },
                        expression: "q.answer"
                    }
                }, e._l(t.questionItems, (function(t, i) {
                    return s("div", {
                        key: i,
                        staticClass: "course-test-type-list-item-options-item"
                    }, [s("a-radio", {
                        attrs: {
                            label: t.identifier,
                            value: t.itemId
                        }
                    }, [s("span", {
                        staticClass: "mr-4"
                    }, [e._v(e._s(t.identifier.toUpperCase()) + ".")]), s("span", [e._v(e._s(e.$t(t.content)))])])], 1)
                }
                )), 0)], 1), e.isView && e.showStandard ? s("div", {
                    staticClass: "answer-box"
                }, [s("div", {
                    staticClass: "answer",
                    class: [t.userRight ? "is-right" : "is-wrong"]
                }, [s("div", {
                    staticClass: "l-box"
                }, [t.userRight ? s("i", {
                    staticClass: "el-icon-check"
                }) : s("i", {
                    staticClass: "el-icon-close"
                })]), e._v("\n              " + e._s(e.$t("你的回答")) + ":"), s("span", {
                    class: t.userRight ? "a-w a-r" : "a-w"
                }, [e._v(e._s(e.getAnswerKey("TRUE_FALSE", t)))]), e._v("\n              " + e._s(e.$t("正确答案")) + ":"), s("span", {
                    staticClass: "a-r"
                }, [e._v(e._s(e.getRightAnswer("TRUE_FALSE", t)))])]), t.questionAnalysis ? s("div", {
                    staticClass: "analysis"
                }, [s("div", {
                    staticClass: "analysis-title"
                }, [e._v(e._s(e.$t("试题解析")))]), s("div", {
                    staticClass: "analysis-content"
                }, [e._v(e._s(t.questionAnalysis))])]) : e._e()]) : e._e()] : e._e(), "QUESTION_ANSWER" === t.itemType ? [s("div", {
                    staticStyle: {
                        display: "flex"
                    }
                }, [s("div", {
                    staticClass: "course-test-type-title"
                }, [s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        className: "type",
                        "icon-class": "shitileixing"
                    }
                }), s("span", {
                    staticClass: "course-test-type-title-icon"
                }), s("span", {
                    staticClass: "course-test-type-title-name"
                }, [e._v(e._s(e.$t("问答题")))])], 1)]), s("div", {
                    staticClass: "course-test-type-list-item-title",
                    class: {
                        "course-test-type-list-item-title-wrong": e.isView && !t.userRight && e.showResult
                    }
                }, [s("span", [s("span", {
                    staticClass: "course-test-type-list-item-title-ind"
                }, [t.required ? s("span", {
                    staticClass: "course-test-type-list-item-title-re"
                }, [e._v("*")]) : e._e(), e._v(e._s(i + 1) + ".")]), s("span", {
                    staticClass: "course-test-type-list-item-title-content"
                }, [e._v(e._s(t.content))])]), e.isView && !t.userRight && e.showResult ? s("span", [s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        "icon-class": "cuowu"
                    }
                })], 1) : e._e()]), s("div", {
                    staticClass: "course-test-type-list-item-options"
                }, [e.isView ? s("div", {
                    staticClass: "course-test-type-list-item-options-input"
                }, [s("a-input", {
                    attrs: {
                        disabled: "",
                        type: "textarea",
                        maxLength: 1300,
                        value: e.getAnswer("QUESTION_ANSWER", t),
                        "auto-size": {
                            minRows: 6,
                            maxRows: 6
                        }
                    }
                })], 1) : s("div", {
                    staticClass: "course-test-type-list-item-options-input"
                }, [s("a-input", {
                    attrs: {
                        type: "textarea",
                        maxLength: 1300,
                        placeholder: t.inMinLimit && t.required && t.minimal ? e.$t("最少") + t.minimal + e.$t("字") : "",
                        "auto-size": {
                            minRows: 6,
                            maxRows: 6
                        }
                    },
                    model: {
                        value: t.answer,
                        callback: function(s) {
                            e.$set(t, "answer", s)
                        },
                        expression: "q.answer"
                    }
                })], 1)]), e.isView && e.showStandard ? s("div", {
                    staticClass: "right-answer"
                }, [s("span", [e._v(e._s(e.$t("正确答案：")))]), s("span", [e._v(e._s(e.getRightAnswer("QUESTION_ANSWER", t)))])]) : e._e()] : e._e()], 2)
            }
            )), 0)]) : e._e()])
        }
          , qt = []
          , Qt = {
            components: {},
            props: {
                questionScore: {
                    type: Number,
                    default: 0
                },
                question: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                isView: {
                    type: Boolean,
                    default: !1
                },
                showResult: {
                    type: Boolean,
                    default: !1
                },
                showStandard: {
                    type: Boolean,
                    default: !1
                },
                isEvaluate: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                lastQuestionType: function() {
                    return this.question ? this.question["TRUE_FALSE"] && this.question["TRUE_FALSE"].length > 0 ? "TRUE_FALSE" : this.question["MULTIPLE"] && this.question["MULTIPLE"].length > 0 ? "MULTIPLE" : this.question["SINGLE"] && this.question["SINGLE"].length > 0 ? "SINGLE" : void 0 : ""
                },
                questionTotalNum: function() {
                    var e = 0;
                    for (var t in this.question)
                        e += this.question[t].length;
                    return e
                }
            },
            mounted: function() {
                console.log("🚀 ~ this.question:", this.question)
            },
            data: function() {
                return {
                    qItem: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]
                }
            },
            methods: {
                getAnswer: function(e, t) {
                    if ("QUESTION_ANSWER" === e) {
                        var s = t.userAnswer;
                        return s
                    }
                    if ("MULTIPLE" === e) {
                        var i = t.questionItems ? t.questionItems.filter((function(e) {
                            return e.userItem
                        }
                        )).map((function(e) {
                            return e.itemId
                        }
                        )) : [];
                        return i
                    }
                    var n, a = (null === (n = t.questionItems.find((function(e) {
                        return e.userItem
                    }
                    ))) || void 0 === n ? void 0 : n.itemId) || "";
                    return a
                },
                getAnswerKey: function(e, t) {
                    if ("QUESTION_ANSWER" === e) {
                        var s = t.userAnswer;
                        return s
                    }
                    if ("MULTIPLE" === e) {
                        var i = t.questionItems.filter((function(e) {
                            return e.userItem
                        }
                        )).map((function(e) {
                            return e && e.identifier && e.identifier.toUpperCase()
                        }
                        )).join("、");
                        return i
                    }
                    if ("TRUE_FALSE" === e) {
                        var n = t.questionItems.find((function(e) {
                            return e.userItem
                        }
                        )) && "a" === t.questionItems.find((function(e) {
                            return e.userItem
                        }
                        )).identifier ? this.$t("正确") : this.$t("错误");
                        return n
                    }
                    var a = t.questionItems.find((function(e) {
                        return e.userItem
                    }
                    )) && t.questionItems.find((function(e) {
                        return e.userItem
                    }
                    )).identifier.toUpperCase();
                    return a
                },
                getRightAnswer: function(e, t) {
                    if ("QUESTION_ANSWER" === e) {
                        var s = t.userAnswer;
                        return s
                    }
                    if ("MULTIPLE" === e) {
                        var i = t.questionItems.filter((function(e) {
                            return e.rightAnswer
                        }
                        )).map((function(e) {
                            return e && e.identifier && e.identifier.toUpperCase()
                        }
                        )).join("、");
                        return i
                    }
                    if ("TRUE_FALSE" === e) {
                        var n = t.questionItems.find((function(e) {
                            return e.rightAnswer
                        }
                        )) && "a" === t.questionItems.find((function(e) {
                            return e.rightAnswer
                        }
                        )).identifier ? this.$t("正确") : this.$t("错误");
                        return n
                    }
                    var a = t.questionItems.find((function(e) {
                        return e.rightAnswer
                    }
                    )) && t.questionItems.find((function(e) {
                        return e.rightAnswer
                    }
                    )).identifier.toUpperCase();
                    return a
                },
                getScore: function(e, t) {
                    return e === this.lastQuestionType && this.question[e].length === t + 1 ? (console.log("🚀 ~ this.lastQuestionType:", this.lastQuestionType),
                    console.log("🚀 ~ this.questionTotalNum:", this.questionTotalNum),
                    (100 - this.questionTotalNum * this.questionScore + this.questionScore).toString().slice(0, 4)) : this.questionScore
                },
                getQuestion: function() {
                    return this.question
                }
            }
        }
          , zt = Qt
          , Gt = (s("03ec1"),
        Object(y["a"])(zt, Vt, qt, !1, null, "0d0cff1c", null))
          , Jt = Gt.exports
          , Ht = {
            components: {
                CourseTest: Jt
            },
            props: {
                isGetScoreStep: {
                    type: Boolean,
                    default: !1
                },
                isLastStep: {
                    type: Boolean,
                    default: !1
                },
                isFullScreen: {
                    type: Boolean,
                    default: !1
                },
                courseId: {
                    type: String,
                    default: ""
                },
                currentStep: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    isView: !1,
                    star: 0,
                    question: {},
                    loading: !0,
                    submitLoading: !1
                }
            },
            methods: {
                view: function() {
                    this.init()
                },
                init: function() {
                    var e = this
                      , t = {
                        courseId: this.courseId,
                        willGoStep: "COURSE_EVALUATE",
                        courseType: "NEW_COURSE_CENTER"
                    };
                    this.loading = !0,
                    Q(t).then((function(t) {
                        if (e.loading = !1,
                        console.log("🚀 ~ res:", t),
                        0 === +t.status) {
                            var s = t.data.questionList.map((function(e) {
                                return "MULTIPLE" === e.itemType ? e.answer = [] : e.answer = "",
                                e
                            }
                            ));
                            e.isView = t.data.resultView,
                            e.question = s,
                            e.star = t.data.star
                        }
                    }
                    ))
                },
                handleRate: function(e) {
                    var t = this
                      , s = {
                        courseId: this.courseId,
                        star: e
                    };
                    this.loading = !0,
                    W(s).then((function(e) {
                        t.loading = !1,
                        e.success && c["a"].success(t.$t("评价成功"))
                    }
                    ))
                },
                goPre: function() {
                    this.$emit("preStep", !0)
                },
                goNext: function() {
                    this.$emit("nextStepByOrder", !0)
                },
                submit: function() {
                    var e = this
                      , t = this.$refs.courseTest.getQuestion()
                      , s = t.filter((function(e) {
                        return "QUESTION_ANSWER" === e.itemType
                    }
                    ))
                      , i = [];
                    if (s.forEach((function(e) {
                        if (e.inMinLimit && e.required && e.minimal && e.answer && e.answer.trim() && e.answer.length < e.minimal) {
                            var s = t.findIndex((function(t) {
                                return t === e
                            }
                            ));
                            i.push({
                                index: s + 1,
                                minimal: e.minimal
                            })
                        }
                    }
                    )),
                    i.length > 0) {
                        var n = i.map((function(t) {
                            return e.$t("第{num}题（最少{minimal}字）", {
                                num: t.index,
                                minimal: t.minimal
                            })
                        }
                        )).join("、");
                        c["a"].error(n + this.$t("不满足最小字数限制"))
                    } else {
                        var a = [];
                        if (t.forEach((function(e, t) {
                            e.required && ("MULTIPLE" === e.itemType ? e.answer && 0 !== e.answer.length || a.push(t + 1) : "QUESTION_ANSWER" === e.itemType ? e.answer && e.answer.trim() || a.push(t + 1) : e.answer || a.push(t + 1))
                        }
                        )),
                        a.length > 0)
                            c["a"].error(this.$t("第{num}题为必填项，请作答", {
                                num: a.join("、")
                            }));
                        else if (this.star) {
                            var r = [];
                            t.forEach((function(e) {
                                if (Array.isArray(e.answer)) {
                                    e.answer.forEach((function(t) {
                                        r.push({
                                            name: e.questionId,
                                            value: t
                                        })
                                    }
                                    ));
                                    var t = e.questionItems.find((function(t) {
                                        return e.answer.includes(t.itemId) && t.allowInput
                                    }
                                    ));
                                    t && r.push({
                                        name: t.itemId + "Content",
                                        value: t.userOtherAnswer
                                    })
                                } else if (r.push({
                                    name: e.questionId,
                                    value: e.answer
                                }),
                                "SINGLE" === e.itemType) {
                                    var s = e.questionItems.find((function(t) {
                                        return t.itemId === e.answer
                                    }
                                    ));
                                    s && s.allowInput && r.push({
                                        name: e.answer + "Content",
                                        value: s.userOtherAnswer
                                    })
                                }
                            }
                            ));
                            var u = {
                                eln_session_id: window.$cookies.get("eln_session_id") || Object(ge["getUrl"])("eln_session_id") || "",
                                elsSign: window.$cookies.get("eln_session_id") || Object(ge["getUrl"])("eln_session_id") || ""
                            }
                              , l = new FormData;
                            l.append("answers", JSON.stringify(r)),
                            l.append("courseId", this.courseId),
                            l.append("willGoStep", "COURSE_EVALUATE"),
                            l.append("courseType", "NEW_COURSE_CENTER"),
                            this.loading = !0,
                            this.submitLoading = !0,
                            K(u, l).then((function(t) {
                                if (e.loading = !1,
                                e.submitLoading = !1,
                                e.isView = !0,
                                "true" === t.state) {
                                    var s = e.$t("您对这门课程的评估已提交!");
                                    e.isGetScoreStep && (t.courseScore || t.coursePeriod) && (s += e.$t("您获得") + t.courseScore + e.$t("学分，") + t.coursePeriod + e.$t("学时！")),
                                    e.isLastStep ? o["a"].info({
                                        class: "apaas-confirm",
                                        title: e.$t("提示"),
                                        content: s,
                                        okText: e.$t("知道了"),
                                        onOk: function() {
                                            e.init()
                                        }
                                    }) : o["a"].confirm({
                                        class: "apaas-confirm",
                                        title: e.$t("提示"),
                                        content: s,
                                        okText: e.$t("进入下一步"),
                                        cancelText: e.$t("查看结果"),
                                        onOk: function() {
                                            e.$emit("nextStepByOrder", !0)
                                        },
                                        onCancel: function() {
                                            e.$emit("nextStep", !1),
                                            e.init()
                                        }
                                    })
                                } else
                                    c["a"].error(e.$t("保存时出错！"))
                            }
                            ))
                        } else
                            c["a"].error(this.$t("请先评分"))
                    }
                },
                toggleFullScreen: function() {
                    this.$emit("toggleFullScreen")
                }
            }
        }
          , Wt = Ht
          , Kt = (s("2d4d"),
        s("1631"),
        Object(y["a"])(Wt, Ft, Bt, !1, null, "68634580", null))
          , Yt = Kt.exports
          , Zt = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("a-spin", {
                attrs: {
                    spinning: e.loading
                }
            }, [s("div", {
                staticClass: "course-exam",
                class: {
                    fullscreen: e.isFullScreen,
                    "is-view": e.isView
                }
            }, [s("div", {
                staticClass: "course-exam-header"
            }, [s("div", {
                staticClass: "course-exam-title"
            }, [s("span", [s("span", [e._v(e._s(e.$t("课后测试")))]), e.isView ? e._e() : s("span", {
                staticClass: "course-exam-title-time"
            }, [e._v(e._s(e.$t("倒计时：")) + e._s(e.relativeExamTime))])]), s("div", {
                staticClass: "course-exam-fullscreen",
                on: {
                    click: e.toggleFullScreen
                }
            }, [e.isFullScreen ? [s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    "icon-class": "fanhui",
                    "class-name": "full"
                }
            }), s("span", {
                staticClass: "full-text"
            }, [e._v(e._s(e.$t("返回")))])] : [s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    "icon-class": "quanping",
                    "class-name": "full"
                }
            }), s("span", {
                staticClass: "full-text"
            }, [e._v(e._s(e.$t("全屏")))])]], 2)]), s("div", {
                staticClass: "course-exam-desc"
            }, [s("span", {
                staticClass: "course-exam-tip"
            }, ["load" === e.examInfo.courseExamStepState ? [e.examInfo.maxResitNum > 2147483640 ? s("span", [e._v(e._s(e.$t("您的考试次数没有限制，直到考试通过为止，加油哦！")))]) : [s("span", [e._v(e._s(e.$t("说明: 您一共有")) + " " + e._s(e.examInfo.maxResitNum) + " " + e._s(e.$t("次考试机会")))]), e.examInfo.maxResitNum > 1 ? s("span", [e._v("（" + e._s(e.$t("其中包括")) + " " + e._s(e.examInfo.maxResitNum - 1) + " " + e._s(e.$t("次补考机会")) + "）,")]) : e._e(), s("span", [e._v("\n                " + e._s(e.$t("这是您第")) + "\n                " + e._s(e.examInfo.courseStudyRecord.examCount + 1) + "\n                " + e._s(e.$t("次课后测试,加油！")))]), e.examInfo.courseStudyRecord.examCount > 0 ? s("div", [e._v("\n                " + e._s(e.$t("本次为您第")) + "\n                " + e._s(e.examInfo.courseStudyRecord.examCount) + "\n                " + e._s(e.$t("次补考，通过可获得学分为原学分的")) + " " + e._s(e.examInfo.needPercent) + "%\n              ")]) : e._e(), e.examInfo.examNotPassedDispose ? s("div", [e._v("\n                " + e._s(e.$t("特别提示：如果您没有通过课后测试（含补考），学习记录自动清零。您须重新观看课程视频后，再次参加考试，依次循环，直至考试合格。")) + "\n              ")]) : e._e()]] : e._e(), "done" === e.examInfo.courseExamStepState || "submit" === e.examInfo.courseExamStepState ? [s("span", [e._v(e._s(e.$t("测试成绩"))), s("span", {
                staticClass: "score-tip"
            }, [e._v(e._s(e.examInfo.courseStudyRecord.lastExamScore))]), e._v(e._s(e.$t("分。")))]), e.examInfo.examPassed ? s("span", [e._v(e._s(e.$t("恭喜您顺利通过考试！")))]) : "COURSE_EXAM" == e.examInfo.courseStudyRecord.stepToGetScore ? [e.examInfo.courseStudyRecord.getScore ? s("span", [e._v(e._s(e.$t("很遗憾！这门课程您未能通过考试。")))]) : e.examInfo.maxResitNum > 2147483640 ? s("span", [e._v(e._s(e.$t("您的考试次数没有限制，直到考试通过为止，加油哦！")))]) : e.examInfo.maxResitNum - e.examInfo.courseStudyRecord.examCount > 0 ? s("div", [s("span", [e._v(e._s(e.$t("还有")) + "\n                  " + e._s(e.examInfo.maxResitNum - e.examInfo.courseStudyRecord.examCount) + "\n                  " + e._s(e.$t("次重测机会。请再接再厉！")))]), e.examInfo.examNotPassedDispose ? s("div", [e._v("\n                  " + e._s(e.$t("特别提示：如果您没有通过课后测试（含补考），学习记录自动清零。您须重新观看课程视频后，再次参加考试，依次循环，直至考试合格。")) + "\n                ")]) : e._e()]) : e._e()] : [e.examInfo.maxResitNum > 2147483640 ? s("span", [e._v(e._s(e.$t("您的考试次数没有限制，直到考试通过为止，加油哦！")))]) : e.examInfo.maxResitNum - e.examInfo.courseStudyRecord.examCount > 0 ? s("div", [s("span", [e._v(e._s(e.$t("还有")) + "\n                  " + e._s(e.examInfo.maxResitNum - e.examInfo.courseStudyRecord.examCount) + "\n                  " + e._s(e.$t("次重测机会。请再接再厉！")))]), e.examInfo.examNotPassedDispose ? s("div", [e._v("\n                  " + e._s(e.$t("特别提示：如果您没有通过课后测试（含补考），学习记录自动清零。您须重新观看课程视频后，再次参加考试，依次循环，直至考试合格。")) + "\n                ")]) : e._e()]) : e.examInfo.courseStudyRecord.getScore ? s("span", [e._v(e._s(e.$t("很遗憾！这门课程您未能通过考试。")))]) : e._e()]] : e._e()], 2)])]), s("div", {
                staticClass: "course-exam-content"
            }, [s("CourseTest", {
                ref: "courseTest",
                attrs: {
                    isView: e.isView,
                    question: e.question,
                    "show-result": e.userCanViewResult,
                    "show-standard": e.showStandard
                }
            })], 1), s("div", {
                staticClass: "course-exam-footer"
            }, [s("a-button", {
                staticClass: "mr-12",
                on: {
                    click: e.goPre
                }
            }, [e._v(e._s(e.$t("上一步")))]), e.examInfo.examPassed ? [e.isLastStep ? e._e() : s("a-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.goNext
                }
            }, [e._v(e._s(e.$t("下一步")))])] : [e.isView ? [e.isCanRedo ? s("a-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.goRedo
                }
            }, [e._v(e._s(e.$t("去补考")))]) : e._e(), e.isLastStep || e.isCanRedo && "COURSE_EMS_EXAM" !== e.currentStep ? e._e() : s("a-button", {
                class: {
                    "ml-16": e.isCanRedo
                },
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.goNext
                }
            }, [e._v(e._s(e.$t("下一步")))])] : s("a-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.onSubmit
                }
            }, [e._v(e._s(e.$t("提交")))])]], 2)])])
        }
          , Xt = []
          , es = (s("f576"),
        {
            components: {
                CourseTest: Te
            },
            props: {
                isGetScoreStep: {
                    type: Boolean,
                    default: !1
                },
                isLastStep: {
                    type: Boolean,
                    default: !1
                },
                isFullScreen: {
                    type: Boolean,
                    default: !1
                },
                courseId: {
                    type: String,
                    default: ""
                },
                currentStep: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                showStandard: function() {
                    return this.examInfo && this.examInfo.examPassed && this.examInfo.courseExam.passExamStandardAnswer || this.examInfo && !this.examInfo.examPassed && this.examInfo.courseExam && this.examInfo.courseExam.failExamStandardAnswer
                },
                isCanRedo: function() {
                    return (this.examInfo && this.examInfo.maxResitNum) > (this.examInfo && this.examInfo.courseStudyRecord && this.examInfo.courseStudyRecord.examCount)
                },
                userCanViewResult: function() {
                    return !!this.isView
                },
                relativeExamTime: function() {
                    if (this.examTime) {
                        var e = Math.floor(this.examTime / 60)
                          , t = this.examTime % 60;
                        return "".concat(e.toString().padStart(2, "0"), ":").concat(t.toString().padStart(2, "0"))
                    }
                    return "00:00"
                }
            },
            data: function() {
                return {
                    examInfo: {},
                    question: {},
                    isView: !0,
                    examTime: null,
                    loading: !0,
                    timer: null,
                    hasGetScore: !1
                }
            },
            mounted: function() {},
            beforeDestroy: function() {
                this.timer && (clearInterval(this.timer),
                this.timer = null)
            },
            methods: {
                init: function() {
                    var e = this;
                    if (this.loading = !0,
                    this.isView) {
                        var t = {
                            courseId: this.courseId,
                            willGoStep: "COURSE_EXAM_VIEW",
                            courseType: "NEW_COURSE_CENTER"
                        };
                        H(t).then((function(t) {
                            if (e.loading = !1,
                            0 === +t.status) {
                                for (var s in t.data.question)
                                    t.data.question[s];
                                e.examInfo = t.data,
                                e.question = t.data.question,
                                e.examTime = 60 * t.data.courseExam.examTime,
                                console.log("🚀 ~ this.examTime:", e.examTime),
                                e.isView = !0,
                                0 === e.examInfo.courseStudyRecord.examCount && (e.isView = !1,
                                e.init());
                                var i = t.data.courseStudyRecord.getScore;
                                (i || 0 === i) && (e.hasGetScore = !0)
                            } else
                                t.success || e.$emit("getTestError")
                        }
                        ))
                    } else {
                        var s = {
                            courseId: this.courseId,
                            studyType: "COURSE_EXAM",
                            courseType: "NEW_COURSE_CENTER"
                        };
                        Q(s).then((function(t) {
                            if (e.loading = !1,
                            0 === +t.status) {
                                for (var s in t.data.question) {
                                    var i = t.data.question[s];
                                    i.forEach((function(e, t) {
                                        "MULTIPLE" === e.itemType ? e.answer = [] : e.answer = ""
                                    }
                                    ))
                                }
                                e.examInfo = t.data,
                                e.question = t.data.question,
                                e.examTime = 60 * t.data.courseExam.examTime,
                                console.log("🚀 ~ this.examTime:", e.examTime),
                                e.startExam()
                            }
                        }
                        ))
                    }
                },
                startExam: function() {
                    var e = this;
                    this.timer && (clearInterval(this.timer),
                    this.timer = null),
                    this.timer = setInterval((function() {
                        e.examTime > 0 ? e.examTime-- : (clearInterval(e.timer),
                        e.submit(!0))
                    }
                    ), 1e3)
                },
                goRedo: function() {
                    this.isView = !1,
                    this.init()
                },
                goPre: function() {
                    this.$emit("preStep", !0)
                },
                goNext: function() {
                    this.$emit("nextStepByOrder", !0)
                },
                onSubmit: function() {
                    this.submit()
                },
                submit: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , s = this.$refs.courseTest.getQuestion();
                    if (!t) {
                        var i = 0;
                        for (var n in s)
                            for (var a = 0; a < s[n].length; a++)
                                ("MULTIPLE" !== s[n][a].itemType || s[n][a].answer.length) && s[n][a].answer || i++;
                        if (i > 0)
                            return void c["a"].error(this.$t("您还有") + i + this.$t("题未答，请继续答题。"))
                    }
                    var r = [];
                    for (var u in s)
                        s[u].forEach((function(e, t) {
                            Array.isArray(e.answer) ? e.answer.length ? e.answer.forEach((function(t, s) {
                                r.push({
                                    name: e.questionId,
                                    value: t
                                })
                            }
                            )) : r.push({
                                name: e.questionId,
                                value: ""
                            }) : r.push({
                                name: e.questionId,
                                value: e.answer
                            })
                        }
                        ));
                    var l = {
                        eln_session_id: window.$cookies.get("eln_session_id") || Object(ge["getUrl"])("eln_session_id") || "",
                        elsSign: window.$cookies.get("eln_session_id") || Object(ge["getUrl"])("eln_session_id") || "",
                        courseType: "NEW_COURSE_CENTER"
                    }
                      , d = new FormData;
                    d.append("courseId", this.courseId),
                    d.append("willGoStep", "COURSE_EXAM"),
                    d.append("answers", JSON.stringify(r)),
                    d.append("examUserId", this.examInfo.examUserId),
                    this.loading = !0,
                    Y(l, d).then((function(t) {
                        if (e.loading = !1,
                        "true" === t.state) {
                            if ("false" === t.examPass)
                                o["a"].confirm({
                                    class: "apaas-confirm",
                                    title: e.$t("提示"),
                                    content: e.$t("很遗憾，您只获得") + t.score + e.$t("分，没有通过考试!"),
                                    okText: e.$t("查看详情"),
                                    cancelText: e.$t("关闭"),
                                    onOk: function() {
                                        e.isView = !0,
                                        e.init()
                                    },
                                    onCancel: function() {
                                        e.isView = !0,
                                        e.init()
                                    }
                                });
                            else if ("true" === t.examPass) {
                                e.examInfo.examPassed = !0;
                                var s = e.$t("您获得的分数为") + t.score + e.$t("分");
                                e.isGetScoreStep && (t.courseScore || t.coursePeriod) && (s += e.$t("，您获得") + t.courseScore + e.$t("学分，") + t.coursePeriod + e.$t("学时！")),
                                e.isLastStep ? o["a"].info({
                                    class: "apaas-confirm",
                                    title: e.$t("恭喜您通过考试"),
                                    content: s,
                                    okText: e.$t("知道了"),
                                    onOk: function() {
                                        e.isView = !0,
                                        e.init()
                                    }
                                }) : o["a"].confirm({
                                    class: "apaas-confirm",
                                    title: e.$t("恭喜您通过考试"),
                                    content: s,
                                    okText: e.$t("进入下一步"),
                                    cancelText: e.$t("查看结果"),
                                    onOk: function() {
                                        e.$emit("nextStep", !0)
                                    },
                                    onCancel: function() {
                                        e.$emit("nextStep", !1),
                                        e.isView = !0,
                                        e.init()
                                    }
                                })
                            }
                        } else
                            c["a"].error(e.$t("保存时出错！"))
                    }
                    ))
                },
                toggleFullScreen: function() {
                    this.$emit("toggleFullScreen")
                }
            }
        })
          , ts = es
          , ss = (s("29a7"),
        s("d838"),
        Object(y["a"])(ts, Zt, Xt, !1, null, "e7788c2c", null))
          , is = ss.exports
          , ns = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "course-more"
            }, [s("div", {
                staticClass: "course-more-main"
            }, [e.tagList.length && e.fileSetting && e.fileSetting.tagList.studentShow ? s("CourseTag", e._g({
                attrs: {
                    isPreview: e.isPreview,
                    tagList: e.tagList
                }
            }, e.$listeners)) : e._e(), s("Tabs", {
                staticClass: "sticky-tabs",
                attrs: {
                    tabs: e.tabs,
                    isPublished: e.isPublished,
                    currentResourceAiLearnData: e.currentResourceAiLearnData
                },
                on: {
                    change: e.handleTabChange
                },
                scopedSlots: e._u(["translate" === e.currentTab && e.isOpenFromAdmin ? {
                    key: "extra",
                    fn: function() {
                        return [s("div", {
                            staticClass: "smart-view-btns"
                        }, [e.currentLang !== e.currentSourceLang || e.translateLoading ? e._e() : s("svg-icon", {
                            attrs: {
                                "class-name": "btn",
                                "icon-class": "edit",
                                "use-svg": ""
                            },
                            on: {
                                click: e.edit
                            }
                        }), e.currentLang !== e.currentSourceLang || e.translateLoading ? e._e() : s("div", {
                            staticClass: "divider"
                        }), s("svg-icon", {
                            attrs: {
                                "class-name": "btn",
                                "icon-class": "copy",
                                "use-svg": ""
                            },
                            on: {
                                click: e.copy
                            }
                        })], 1)]
                    },
                    proxy: !0
                } : null], null, !0),
                model: {
                    value: e.currentTab,
                    callback: function(t) {
                        e.currentTab = t
                    },
                    expression: "currentTab"
                }
            }), s("div", {
                staticClass: "course-more-content"
            }, [s("a-spin", {
                attrs: {
                    spinning: e.tabContentLoading
                }
            }, [s("FeedBack", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "smartview" === e.currentTab || "translate" === e.currentTab || "mindmap" === e.currentTab,
                    expression: "currentTab === 'smartview' || currentTab === 'translate' || currentTab === 'mindmap'"
                }],
                attrs: {
                    isPublished: e.isPublished,
                    isOpenFromAdmin: e.isOpenFromAdmin,
                    courseInfo: e.courseInfo,
                    currentResourceAiLearnData: e.currentResourceAiLearnData
                }
            }, [s("Translate", e._g({
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "translate" === e.currentTab,
                    expression: "currentTab === 'translate'"
                }],
                class: {
                    "feedback-content": e.getCourseTouchedAILearn()
                },
                attrs: {
                    activeCaptionId: e.activeCaptionId,
                    isPublished: e.isPublished,
                    isOpenFromAdmin: e.isOpenFromAdmin,
                    translateLoading: e.translateLoading,
                    currentLang: e.currentLang,
                    transcription: e.transcription
                }
            }, e.$listeners)), s("SmartView", e._g({
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "smartview" === e.currentTab,
                    expression: "currentTab === 'smartview'"
                }],
                ref: "SmartViewRef",
                class: {
                    "feedback-content": e.getCourseTouchedAILearn()
                },
                attrs: {
                    summarization: e.summarization,
                    questionAnswer: e.questionAnswer,
                    autoChapters: e.autoChapters,
                    isOpenFromAdmin: e.isOpenFromAdmin,
                    translateLoading: e.translateLoading,
                    isPublished: e.isPublished,
                    currentLangAiLearnData: e.currentLangAiLearnData,
                    sentences: e.sentences,
                    currentSourceLang: e.currentSourceLang,
                    currentLang: e.currentLang
                },
                on: {
                    updateSummarization: e.updateSummarization,
                    updateAutoChapters: e.updateAutoChapters,
                    updateQuestionAnswer: e.updateQuestionAnswer,
                    copyTingwu: e.copyTingwu
                }
            }, e.$listeners)), "mindmap" === e.currentTab ? s("MindMap", {
                class: {
                    "feedback-content": e.getCourseTouchedAILearn()
                },
                attrs: {
                    mindMap: e.mindMap,
                    translateLoading: e.translateLoading,
                    isPublished: e.isPublished,
                    isOpenFromAdmin: e.isOpenFromAdmin,
                    currentLang: e.currentLang,
                    currentResourceInfo: e.currentResourceInfo
                }
            }) : e._e(), "smartview" === e.currentTab || "translate" === e.currentTab || "mindmap" === e.currentTab ? s("div", {
                staticClass: "ai-tips"
            }, [e._v("\n            " + e._s(e.$t("内容由 AI 辅助生成，仅供参考")))]) : e._e()], 1), s("Introduction", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "introduction" === e.currentTab,
                    expression: "currentTab === 'introduction'"
                }],
                attrs: {
                    courseData: e.courseData,
                    fileSetting: e.fileSetting
                }
            }), s("Reference", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "reference" === e.currentTab,
                    expression: "currentTab === 'reference'"
                }],
                attrs: {
                    courseData: e.courseData,
                    referenceMaterial: e.referenceMaterial
                }
            }), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "discussion" === e.currentTab,
                    expression: "currentTab === 'discussion'"
                }, {
                    name: "infinite-scroll",
                    rawName: "v-infinite-scroll",
                    value: e.load,
                    expression: "load"
                }],
                staticClass: "infinite-list",
                attrs: {
                    "infinite-scroll-distance": 10,
                    "infinite-scroll-delay": 200
                }
            }, [s("Discussion", {
                attrs: {
                    courseData: e.courseData,
                    discussPage: e.discussPage,
                    userInfo: e.userInfo,
                    isbizResultShow: e.isbizResultShow
                },
                on: {
                    handleMainDiscuss: e.handleMainDiscuss,
                    handleSubDiscuss: e.handleSubDiscuss,
                    handleDel: e.handleDel,
                    handleMore: e.handleMore
                }
            })], 1)], 1)], 1)], 1), e.courseData && e.courseData.teachers && e.courseData.teachers.length ? s("div", {
                staticClass: "course-more-recommend"
            }, [s("TeacherCard", {
                attrs: {
                    courseData: e.courseData,
                    fileSetting: e.fileSetting
                }
            })], 1) : e._e(), s("a-drawer", {
                attrs: {
                    title: e.currentResourceInfo && e.currentResourceInfo.resourceName,
                    placement: "right",
                    visible: e.visible,
                    width: "640"
                },
                on: {
                    close: e.onClose
                }
            }, [e._l(e.editTranscriptionData, (function(t) {
                return s("div", {
                    key: t.paragraphId,
                    staticClass: "time-item"
                }, [s("div", {
                    staticClass: "time"
                }, [e._v(e._s(e.getTime(t)))]), e._l(t.sentences, (function(t) {
                    return s("a-textarea", {
                        key: t.id,
                        staticClass: "edit-item",
                        attrs: {
                            "auto-size": {
                                minRows: 1,
                                maxRows: 4
                            }
                        },
                        on: {
                            keydown: function(e) {
                                e.stopPropagation()
                            },
                            change: function(e) {
                                t.modified = !0
                            }
                        },
                        model: {
                            value: t.text,
                            callback: function(s) {
                                e.$set(t, "text", s)
                            },
                            expression: "sentence.text"
                        }
                    })
                }
                ))], 2)
            }
            )), s("div", {
                staticClass: "footer"
            }, [s("a-button", {
                on: {
                    click: function(t) {
                        e.visible = !1
                    }
                }
            }, [e._v(e._s(e.$t("取 消")))]), s("a-button", {
                staticClass: "ok",
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.saveTrans
                }
            }, [e._v(e._s(e.$t("确 定")))])], 1)], 2)], 1)
        }
          , as = []
          , rs = (s("ffc1"),
        s("768b"))
          , os = s("b311")
          , cs = s.n(os);
        function us(e) {
            return new Promise((function(t, s) {
                var i = document.createElement("button");
                i.style.width = "0",
                i.style.height = "0";
                var n = new cs.a(i,{
                    text: function() {
                        return e
                    },
                    action: function() {
                        return "copy"
                    }
                });
                n.on("success", (function(e) {
                    n.destroy(),
                    document.body.removeChild(i),
                    t(e)
                }
                )),
                n.on("error", (function(e) {
                    n.destroy(),
                    document.body.removeChild(i),
                    s(e)
                }
                )),
                document.body.appendChild(i),
                i.click()
            }
            ))
        }
        var ls = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "translate-box",
                class: {
                    "is-ar": "ar" === e.currentLang
                }
            }, e._l(e.transcription, (function(t) {
                return s("div", {
                    key: t.paragraphId,
                    staticClass: "text-item"
                }, [s("div", {
                    staticClass: "time"
                }, [e._v(e._s(e.getTime(t)))]), s("div", {
                    staticClass: "text"
                }, e._l(t.sentences, (function(t) {
                    return s("span", {
                        key: t.id,
                        class: {
                            active: t.id === e.activeCaptionId
                        },
                        on: {
                            click: function(s) {
                                return e.seek(t)
                            }
                        }
                    }, [e._v(e._s(t.text))])
                }
                )), 0)])
            }
            )), 0)
        }
          , ds = []
          , hs = {
            components: {},
            props: {
                transcription: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                currentLang: {
                    type: String,
                    default: ""
                },
                activeCaptionId: {
                    type: [Number, String],
                    default: ""
                }
            },
            data: function() {
                return {}
            },
            methods: {
                getTime: function(e) {
                    var t = e.sentences[0];
                    return Object(ge["TimeToString"])(t.start / 1e3, "HH:mm:ss")
                },
                seek: function(e) {
                    this.$emit("seek", e.start / 1e3)
                }
            },
            mounted: function() {}
        }
          , ms = hs
          , ps = (s("97b9"),
        Object(y["a"])(ms, ls, ds, !1, null, "563b35c0", null))
          , fs = ps.exports
          , vs = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "smart-view"
            }, [s("Summary", e._g({
                ref: "SummaryRef",
                attrs: {
                    summarization: e.summarization,
                    isOpenFromAdmin: e.isOpenFromAdmin,
                    currentLangAiLearnData: e.currentLangAiLearnData,
                    currentSourceLang: e.currentSourceLang,
                    currentLang: e.currentLang,
                    translateLoading: e.translateLoading
                }
            }, e.$listeners)), s("div", {
                staticClass: "smart-view-tabs",
                class: {
                    "is-ar": "ar" === e.currentLang
                }
            }, [s("Tabs", {
                attrs: {
                    tabs: e.tabs,
                    size: "mini"
                },
                on: {
                    change: e.handletabClick
                },
                scopedSlots: e._u([{
                    key: "extra",
                    fn: function() {
                        return [e.isOpenFromAdmin ? s("div", {
                            staticClass: "smart-view-btns"
                        }, ["overview" === e.activeName ? [e.isEditOverview ? [s("span", {
                            staticClass: "text cancel",
                            on: {
                                click: e.cancelEditOverview
                            }
                        }, [e._v(e._s(e.$t("取消")))]), s("div", {
                            staticClass: "divider"
                        }), s("span", {
                            staticClass: "text save",
                            on: {
                                click: e.saveOverview
                            }
                        }, [e._v(e._s(e.$t("保存")))])] : [e.currentLang !== e.currentSourceLang || e.translateLoading ? e._e() : s("svg-icon", {
                            attrs: {
                                "class-name": "btn",
                                "icon-class": "edit",
                                "use-svg": ""
                            },
                            on: {
                                click: e.editOverview
                            }
                        }), e.currentLang !== e.currentSourceLang || e.translateLoading ? e._e() : s("div", {
                            staticClass: "divider"
                        }), s("svg-icon", {
                            attrs: {
                                "class-name": "btn",
                                "icon-class": "copy",
                                "use-svg": ""
                            },
                            on: {
                                click: e.copyOverview
                            }
                        })]] : e._e(), "keypoint" === e.activeName ? [e.isEditKeypoint ? [s("span", {
                            staticClass: "text cancel",
                            on: {
                                click: e.cancelEditKeypoint
                            }
                        }, [e._v(e._s(e.$t("取消")))]), s("div", {
                            staticClass: "divider"
                        }), s("span", {
                            staticClass: "text save",
                            on: {
                                click: e.saveKeypoint
                            }
                        }, [e._v(e._s(e.$t("保存")))])] : [e.currentLang !== e.currentSourceLang || e.translateLoading ? e._e() : s("svg-icon", {
                            attrs: {
                                "class-name": "btn",
                                "icon-class": "edit",
                                "use-svg": ""
                            },
                            on: {
                                click: e.editKeypoint
                            }
                        }), e.currentLang !== e.currentSourceLang || e.translateLoading ? e._e() : s("div", {
                            staticClass: "divider"
                        }), s("svg-icon", {
                            attrs: {
                                "class-name": "btn",
                                "icon-class": "copy",
                                "use-svg": ""
                            },
                            on: {
                                click: e.copyKeypoint
                            }
                        })]] : e._e()], 2) : e._e()]
                    },
                    proxy: !0
                }]),
                model: {
                    value: e.activeName,
                    callback: function(t) {
                        e.activeName = t
                    },
                    expression: "activeName"
                }
            })], 1), s("div", {
                staticClass: "smart-view-content"
            }, ["overview" === e.activeName ? s("Overview", e._g({
                attrs: {
                    isEdit: e.isEditOverview,
                    autoChapters: e.autoChapters,
                    editAutoChaptersData: e.editAutoChaptersData,
                    currentLang: e.currentLang
                }
            }, e.$listeners)) : e._e(), "keypoint" === e.activeName ? s("Keypoint", e._g({
                attrs: {
                    sentences: e.sentences,
                    isEdit: e.isEditKeypoint,
                    currentLang: e.currentLang,
                    questionAnswer: e.questionAnswer,
                    editQuestionAnswerData: e.editQuestionAnswerData
                }
            }, e.$listeners)) : e._e()], 1)], 1)
        }
          , gs = []
          , ys = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "overview",
                class: {
                    "is-ar": "ar" === e.currentLang
                }
            }, [s("div", {
                staticClass: "section"
            }, [s("div", {
                staticClass: "section-content"
            }, e._l(e.displayAutoChaptersData, (function(t, i) {
                return s("div", {
                    key: t.id
                }, [s("div", {
                    staticClass: "chapter"
                }, [s("div", {
                    staticClass: "chapter-start"
                }, [s("div", {
                    staticClass: "time"
                }, [e._v(e._s(e.getTime(t.start)))]), s("div", {
                    staticClass: "dot-container"
                }, [s("div", {
                    staticClass: "dot"
                }), i < e.displayAutoChaptersData.length - 1 ? s("div", {
                    staticClass: "line"
                }) : e._e()])]), s("div", {
                    staticClass: "chapter-content",
                    class: {
                        "chapter-content-edit": e.isEdit
                    }
                }, [s("div", {
                    staticClass: "headline"
                }, [s("a-input", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isEdit,
                        expression: "isEdit"
                    }],
                    staticClass: "title-edit",
                    attrs: {
                        placeholder: e.$t("请输入章节标题")
                    },
                    on: {
                        keydown: function(e) {
                            e.stopPropagation()
                        },
                        change: function(e) {
                            t.modified = !0
                        }
                    },
                    model: {
                        value: t.headline,
                        callback: function(s) {
                            e.$set(t, "headline", s)
                        },
                        expression: "item.headline"
                    }
                }), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.isEdit,
                        expression: "!isEdit"
                    }]
                }, [e._v(e._s(t.headline))]), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.isEdit,
                        expression: "!isEdit"
                    }],
                    staticClass: "re-play",
                    on: {
                        click: function(s) {
                            return e.replay(t)
                        }
                    }
                }, [s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        "class-name": "icon",
                        "icon-class": "replay"
                    }
                }), s("span", {
                    staticClass: "text ml-4"
                }, [e._v(e._s(e.$t("回顾")))])], 1)], 1), s("div", {
                    staticClass: "summary"
                }, [s("a-textarea", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isEdit,
                        expression: "isEdit"
                    }],
                    staticClass: "content-edit",
                    attrs: {
                        "auto-size": {
                            minRows: 2,
                            maxRows: 6
                        },
                        placeholder: e.$t("请输入章节内容")
                    },
                    on: {
                        keydown: function(e) {
                            e.stopPropagation()
                        },
                        change: function(e) {
                            t.modified = !0
                        }
                    },
                    model: {
                        value: t.summary,
                        callback: function(s) {
                            e.$set(t, "summary", s)
                        },
                        expression: "item.summary"
                    }
                }), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.isEdit,
                        expression: "!isEdit"
                    }]
                }, [e._v(e._s(t.summary))])], 1)])])])
            }
            )), 0)])])
        }
          , Cs = []
          , Is = {
            components: {},
            props: {
                isEdit: {
                    type: Boolean,
                    default: !1
                },
                autoChapters: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                currentLang: {
                    type: String,
                    default: ""
                },
                editAutoChaptersData: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            computed: {
                displayAutoChaptersData: function() {
                    return this.isEdit ? this.editAutoChaptersData : this.autoChapters
                }
            },
            data: function() {
                return {}
            },
            methods: {
                replay: function(e) {
                    this.$emit("seek", e.start / 1e3)
                },
                getTime: function(e) {
                    return Object(ge["TimeToString"])(e / 1e3, "HH:mm:ss")
                }
            }
        }
          , As = Is
          , Ss = (s("c73f"),
        Object(y["a"])(As, ys, Cs, !1, null, "6477102e", null))
          , Ts = Ss.exports
          , ws = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "keypoint",
                class: {
                    "is-ar": "ar" === e.currentLang
                }
            }, [s("div", {
                staticClass: "point"
            }, [s("div", {
                staticClass: "point-content"
            }, [s("div", {
                staticClass: "ai-question-answer-summary"
            }, e._l(e.displayQuestionAnswerData, (function(t) {
                return s("div", {
                    key: t.id,
                    staticClass: "summary-container"
                }, [s("div", {
                    staticClass: "summary",
                    class: {
                        "summary-edit": e.isEdit
                    }
                }, [s("div", {
                    staticClass: "summary-tip"
                }, [s("div", {
                    staticClass: "text"
                }, [e._v(e._s(e.$t("要点")))])]), s("div", {
                    staticClass: "summary-section"
                }, [s("div", {
                    staticClass: "summary-section-question"
                }, [s("a-input", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isEdit,
                        expression: "isEdit"
                    }],
                    staticClass: "title-edit",
                    attrs: {
                        placeholder: e.$t("请输入问题")
                    },
                    on: {
                        keydown: function(e) {
                            e.stopPropagation()
                        },
                        change: function(e) {
                            t.modified = !0
                        }
                    },
                    model: {
                        value: t.question,
                        callback: function(s) {
                            e.$set(t, "question", s)
                        },
                        expression: "item.question"
                    }
                }), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.isEdit,
                        expression: "!isEdit"
                    }]
                }, [e._v(e._s(t.question))]), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.isEdit,
                        expression: "!isEdit"
                    }],
                    staticClass: "re-play",
                    on: {
                        click: function(s) {
                            return e.replay(t)
                        }
                    }
                }, [s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        "class-name": "icon",
                        "icon-class": "replay"
                    }
                }), s("span", {
                    staticClass: "text ml-4"
                }, [e._v(e._s(e.$t("回顾")))])], 1)], 1), s("div", {
                    staticClass: "summary-section-answer"
                }, [s("a-textarea", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isEdit,
                        expression: "isEdit"
                    }],
                    staticClass: "content-edit",
                    attrs: {
                        "auto-size": {
                            minRows: 2,
                            maxRows: 6
                        },
                        placeholder: e.$t("请输入答案")
                    },
                    on: {
                        keydown: function(e) {
                            e.stopPropagation()
                        },
                        change: function(e) {
                            t.modified = !0
                        }
                    },
                    model: {
                        value: t.answer,
                        callback: function(s) {
                            e.$set(t, "answer", s)
                        },
                        expression: "item.answer"
                    }
                }), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.isEdit,
                        expression: "!isEdit"
                    }]
                }, [e._v(e._s(t.answer))])], 1)])])])
            }
            )), 0)])])])
        }
          , bs = [];
        s("ac4d"),
        s("8a81"),
        s("1c4c"),
        s("7f7f");
        function _s(e, t) {
            var s = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!s) {
                if (Array.isArray(e) || (s = xs(e)) || t && e && "number" == typeof e.length) {
                    s && (e = s);
                    var i = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, r = !0, o = !1;
            return {
                s: function() {
                    s = s.call(e)
                },
                n: function() {
                    var e = s.next();
                    return r = e.done,
                    e
                },
                e: function(e) {
                    o = !0,
                    a = e
                },
                f: function() {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
            }
        }
        function xs(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return Es(e, t);
                var s = {}.toString.call(e).slice(8, -1);
                return "Object" === s && e.constructor && (s = e.constructor.name),
                "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? Es(e, t) : void 0
            }
        }
        function Es(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var s = 0, i = Array(t); s < t; s++)
                i[s] = e[s];
            return i
        }
        var ks = {
            components: {},
            props: {
                isEdit: {
                    type: Boolean,
                    default: !1
                },
                sentences: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                currentLang: {
                    type: String,
                    default: ""
                },
                questionAnswer: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                editQuestionAnswerData: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            computed: {
                displayQuestionAnswerData: function() {
                    return this.isEdit ? this.editQuestionAnswerData : this.questionAnswer
                }
            },
            data: function() {
                return {}
            },
            methods: {
                replay: function(e) {
                    var t, s, i = this, n = _s(e.sentenceIds);
                    try {
                        var a = function() {
                            var e = s.value;
                            if (t = i.sentences.find((function(t) {
                                return t.id === e
                            }
                            )),
                            t)
                                return 1
                        };
                        for (n.s(); !(s = n.n()).done; )
                            if (a())
                                break
                    } catch (r) {
                        n.e(r)
                    } finally {
                        n.f()
                    }
                    t ? this.$emit("seek", t.start / 1e3) : c["a"].error(this.$t("对应转写内容已删除!"))
                }
            }
        }
          , Os = ks
          , Rs = (s("a2dc"),
        Object(y["a"])(Os, ws, bs, !1, null, "69650650", null))
          , Ds = Rs.exports
          , Ls = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "section",
                class: {
                    "is-ar": "ar" === e.currentLang
                }
            }, [s("div", {
                staticClass: "section-title"
            }, [s("div", {
                staticClass: "section-title-label"
            }, [e._v(e._s(e.$t("全文概要")))]), e.isOpenFromAdmin ? s("div", {
                staticClass: "smart-view-btns"
            }, [e.isEdit ? [s("span", {
                staticClass: "text cancel",
                on: {
                    click: e.cancelEdit
                }
            }, [e._v(e._s(e.$t("取消")))]), s("div", {
                staticClass: "divider"
            }), s("span", {
                staticClass: "text save",
                on: {
                    click: e.save
                }
            }, [e._v(e._s(e.$t("保存")))])] : [e.currentLang !== e.currentSourceLang || e.translateLoading ? e._e() : s("svg-icon", {
                attrs: {
                    "class-name": "btn",
                    "icon-class": "edit",
                    "use-svg": ""
                },
                on: {
                    click: e.edit
                }
            }), e.currentLang !== e.currentSourceLang || e.translateLoading ? e._e() : s("div", {
                staticClass: "divider"
            }), s("svg-icon", {
                attrs: {
                    "class-name": "btn",
                    "icon-class": "copy",
                    "use-svg": ""
                },
                on: {
                    click: e.copy
                }
            })]], 2) : e._e()]), s("div", {
                staticClass: "section-content"
            }, [s("a-textarea", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isEdit,
                    expression: "isEdit"
                }],
                staticClass: "content-edit",
                attrs: {
                    "auto-size": {
                        minRows: 4,
                        maxRows: 8
                    },
                    placeholder: e.$t("请输入概要内容")
                },
                on: {
                    keydown: function(e) {
                        e.stopPropagation()
                    },
                    change: function(t) {
                        e.isModified = !0
                    }
                },
                model: {
                    value: e.editSummarization,
                    callback: function(t) {
                        e.editSummarization = t
                    },
                    expression: "editSummarization"
                }
            }), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isEdit,
                    expression: "!isEdit"
                }, {
                    name: "trunced",
                    rawName: "v-trunced",
                    value: e.trunced,
                    expression: "trunced"
                }],
                staticClass: "section-content-text",
                class: {
                    isOpen: e.isOpen
                }
            }, [s("span", [e._v(e._s(e.summarization))]), e.trunced ? s("span", {
                staticClass: "trunced-text",
                on: {
                    click: function(t) {
                        e.isOpen = !e.isOpen
                    }
                }
            }, [s("span", [e._v(e._s(e.$t("展开")))]), s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    "icon-class": "arrow-down",
                    "class-name": "icon"
                }
            })], 1) : e._e(), e.isOpen ? s("span", {
                staticClass: "open-text",
                on: {
                    click: function(t) {
                        e.isOpen = !e.isOpen
                    }
                }
            }, [s("span", [e._v(e._s(e.$t("收起")))]), s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    "icon-class": "arrow-down",
                    "class-name": "icon"
                }
            })], 1) : e._e()])], 1)])
        }
          , Ps = []
          , Ns = {
            components: {},
            props: {
                currentLangAiLearnData: {
                    type: Object,
                    default: function() {
                        return null
                    }
                },
                isOpenFromAdmin: {
                    type: Boolean,
                    default: !1
                },
                summarization: {
                    type: String,
                    default: ""
                },
                currentLang: {
                    type: String,
                    default: ""
                },
                currentSourceLang: {
                    type: String,
                    default: ""
                },
                translateLoading: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    isEdit: !1,
                    isModified: !1,
                    editSummarization: "",
                    trunced: !1,
                    isOpen: !1
                }
            },
            methods: {
                edit: function() {
                    this.isEdit = !0,
                    this.editSummarization = this.summarization,
                    this.isModified = !1
                },
                cancelEdit: function() {
                    this.isEdit = !1
                },
                copy: function() {
                    this.$emit("copyTingwu", "summarization")
                },
                save: function() {
                    var e = this;
                    if (this.isModified)
                        if (this.editSummarization.trim()) {
                            var t = {
                                editContent: JSON.stringify(this.editSummarization),
                                id: this.currentLangAiLearnData.id,
                                resultType: "summary"
                            };
                            ne(t).then((function() {
                                e.$emit("editAiLearn"),
                                c["a"].success(e.$t("保存成功！")),
                                e.$emit("updateSummarization", e.editSummarization),
                                e.isEdit = !1
                            }
                            )).catch((function() {
                                c["a"].error(e.$t("保存失败！"))
                            }
                            ))
                        } else
                            c["a"].error(this.$t("概要内容不能为空！"));
                    else
                        this.isEdit = !1
                }
            }
        }
          , $s = Ns
          , Us = (s("fc8a"),
        Object(y["a"])($s, Ls, Ps, !1, null, "eab75650", null))
          , Ms = Us.exports
          , js = {
            components: {
                Tabs: xt,
                Overview: Ts,
                Keypoint: Ds,
                Summary: Ms
            },
            props: {
                currentLangAiLearnData: {
                    type: Object,
                    default: function() {
                        return null
                    }
                },
                isOpenFromAdmin: {
                    type: Boolean,
                    default: !1
                },
                summarization: {
                    type: String,
                    default: ""
                },
                autoChapters: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                questionAnswer: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                sentences: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                currentLang: {
                    type: String,
                    default: ""
                },
                currentSourceLang: {
                    type: String,
                    default: ""
                },
                translateLoading: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    isEditOverview: !1,
                    editAutoChaptersData: [],
                    isEditKeypoint: !1,
                    editQuestionAnswerData: [],
                    activeName: "overview",
                    tabs: [{
                        label: this.$t("章节速览"),
                        value: "overview"
                    }, {
                        label: this.$t("要点回顾"),
                        value: "keypoint"
                    }]
                }
            },
            methods: {
                handletabClick: function(e) {
                    console.log("🚀 ~ tab:", e)
                },
                editOverview: function() {
                    this.isEditOverview = !0,
                    this.editAutoChaptersData = JSON.parse(JSON.stringify(this.autoChapters))
                },
                cancelEditOverview: function() {
                    this.isEditOverview = !1
                },
                copyOverview: function() {
                    this.$emit("copyTingwu", "autoChapters")
                },
                saveOverview: function() {
                    var e = this
                      , t = this.editAutoChaptersData.some((function(e) {
                        return !e.headline.trim()
                    }
                    ));
                    if (t)
                        c["a"].error(this.$t("章节标题不能为空！"));
                    else {
                        var s = this.editAutoChaptersData.some((function(e) {
                            return !e.summary.trim()
                        }
                        ));
                        if (s)
                            c["a"].error(this.$t("章节内容不能为空！"));
                        else {
                            var i = this.editAutoChaptersData.filter((function(e) {
                                return e.modified
                            }
                            ));
                            if (i.length) {
                                var n = {
                                    editContent: JSON.stringify(i.reduce((function(e, t) {
                                        var s = t.headline
                                          , i = t.summary
                                          , n = t.id
                                          , a = t.start
                                          , r = t.end;
                                        return e[n] = "".concat(a, "::").concat(r, "::").concat(s, "::").concat(i),
                                        e
                                    }
                                    ), {})),
                                    id: this.currentLangAiLearnData.id,
                                    resultType: "chapter"
                                };
                                ne(n).then((function() {
                                    e.$emit("editAiLearn"),
                                    c["a"].success(e.$t("保存成功")),
                                    e.isEditOverview = !1,
                                    e.$emit("updateAutoChapters", e.editAutoChaptersData)
                                }
                                )).catch((function() {
                                    c["a"].error(e.$t("保存失败"))
                                }
                                ))
                            } else
                                this.isEditOverview = !1
                        }
                    }
                },
                editKeypoint: function() {
                    this.isEditKeypoint = !0,
                    this.editQuestionAnswerData = JSON.parse(JSON.stringify(this.questionAnswer))
                },
                cancelEditKeypoint: function() {
                    this.isEditKeypoint = !1
                },
                copyKeypoint: function() {
                    this.$emit("copyTingwu", "questionAnswer")
                },
                saveKeypoint: function() {
                    var e = this
                      , t = this.editQuestionAnswerData.some((function(e) {
                        return !e.question.trim()
                    }
                    ));
                    if (t)
                        c["a"].error(this.$t("问题不能为空！"));
                    else {
                        var s = this.editQuestionAnswerData.some((function(e) {
                            return !e.answer.trim()
                        }
                        ));
                        if (s)
                            c["a"].error(this.$t("答案不能为空！"));
                        else {
                            var i = this.editQuestionAnswerData.filter((function(e) {
                                return e.modified
                            }
                            ));
                            if (i.length) {
                                var n = {
                                    editContent: JSON.stringify(i.reduce((function(e, t) {
                                        var s = t.question
                                          , i = t.answer
                                          , n = t.sentenceIds
                                          , a = t.id;
                                        return e[a] = "".concat(JSON.stringify(n), "::").concat(s, "::").concat(i),
                                        e
                                    }
                                    ), {})),
                                    id: this.currentLangAiLearnData.id,
                                    resultType: "question"
                                };
                                ne(n).then((function() {
                                    e.$emit("editAiLearn"),
                                    c["a"].success(e.$t("保存成功")),
                                    e.isEditKeypoint = !1,
                                    e.$emit("updateQuestionAnswer", e.editQuestionAnswerData)
                                }
                                )).catch((function() {
                                    c["a"].error(e.$t("保存失败"))
                                }
                                ))
                            } else
                                this.isEditKeypoint = !1
                        }
                    }
                }
            }
        }
          , Fs = js
          , Bs = (s("8d1a"),
        Object(y["a"])(Fs, vs, gs, !1, null, "4128ae36", null))
          , Vs = Bs.exports
          , qs = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "mind-map"
            })
        }
          , Qs = []
          , zs = s("c83b");
        function Gs(e, t) {
            var s = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                s.push.apply(s, i)
            }
            return s
        }
        function Js(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Gs(Object(s), !0).forEach((function(t) {
                    Object(r["a"])(e, t, s[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : Gs(Object(s)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                }
                ))
            }
            return e
        }
        var Hs = {
            components: {},
            props: {
                currentResourceInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                translateLoading: {
                    type: Boolean,
                    default: !1
                },
                currentLang: {
                    type: String,
                    default: ""
                },
                mindMap: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    mindMapInstance: null,
                    currentLocal: ""
                }
            },
            watch: {
                mindMap: {
                    handler: function(e) {
                        var t = this;
                        e && this.$nextTick((function() {
                            if (("ar" === t.currentLang || "ar" === t.currentLocal) && t.currentLocal !== t.currentLang)
                                return t.mindMapInstance && t.mindMapInstance.destroy(),
                                t.initMindMap(t.setMindMapData);
                            t.setMindMapData()
                        }
                        ))
                    },
                    immediate: !0
                }
            },
            mounted: function() {
                this.initMindMap()
            },
            created: function() {
                this.initMindMap = Object(it["debounce"])(this.initMindMap, 100)
            },
            methods: {
                initMindMap: function(e) {
                    this.currentLocal = this.currentLang;
                    var t = "ar" === this.currentLang
                      , s = {};
                    t && (s.textAlign = "right",
                    s.textDecoration = "rtl"),
                    this.mindMapInstance = new zs["a"]({
                        el: this.$el,
                        layout: t ? "logicalStructureLeft" : "logicalStructure",
                        mousewheelAction: "zoom",
                        readonly: !0,
                        initRootNodePosition: t ? ["90%", "center"] : ["left", "center"],
                        expandBtnStyle: {
                            strokeColor: "#1159ff",
                            color: "#1159ff"
                        },
                        data: {
                            data: {
                                text: this.currentResourceInfo.resourceName
                            },
                            children: []
                        },
                        theme: t ? "mindRight" : "mind",
                        themeConfig: Js(Js({
                            iconSize: 10,
                            lineColor: "#1159ff",
                            lineStyle: "curve",
                            rootLineKeepSameInCurve: !0,
                            rootLineStartPositionKeepSameInCurve: !0,
                            backgroundColor: "#fff"
                        }, s), {}, {
                            root: Js({
                                color: "#595959",
                                fontSize: 14,
                                fontWeight: "normal",
                                hoverRectColor: "transparent",
                                fillColor: "transparent"
                            }, s),
                            second: Js({
                                color: "#595959",
                                fontSize: 14,
                                fontWeight: "normal",
                                hoverRectColor: "transparent",
                                fillColor: "transparent",
                                borderColor: "transparent"
                            }, s),
                            node: Js({
                                color: "#595959",
                                fontSize: 14,
                                fontWeight: "normal",
                                hoverRectColor: "transparent",
                                fillColor: "transparent",
                                borderColor: "transparent"
                            }, s)
                        })
                    }),
                    e && e()
                },
                setMindMapData: Object(it["debounce"])((function() {
                    var e = function e(t) {
                        var s = {
                            data: {
                                text: t.Title || t.title
                            },
                            children: (t.Topic || t.topic).map((function(t) {
                                return e(t)
                            }
                            ))
                        };
                        return s
                    }
                      , t = {
                        data: {
                            text: this.currentResourceInfo.resourceName
                        },
                        children: this.mindMap.map((function(t) {
                            return e(t)
                        }
                        ))
                    };
                    this.mindMapInstance && this.mindMapInstance.setData(t)
                }
                ), 100)
            }
        }
          , Ws = Hs
          , Ks = (s("0f09"),
        Object(y["a"])(Ws, qs, Qs, !1, null, "700daa2a", null))
          , Ys = Ks.exports
          , Zs = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "introduction"
            }, [s("div", {
                staticClass: "introduction-base"
            }, [s("div", {
                staticClass: "introduction-base-item"
            }, [s("div", {
                staticClass: "introduction-base-item-label"
            }, [e._v(e._s(e.$t("学习人次")))]), s("div", {
                staticClass: "introduction-base-item-value"
            }, [e._v("\n        " + e._s(e.courseInfo.selectCount || 0) + "\n      ")])]), s("div", {
                staticClass: "introduction-base-item"
            }, [s("div", {
                staticClass: "introduction-base-item-label"
            }, [e._v(e._s(e.$t("学时")))]), s("div", {
                staticClass: "introduction-base-item-value"
            }, [e._v("\n        " + e._s(e.courseInfo.coursePeriod || 0) + "\n      ")])]), s("div", {
                staticClass: "introduction-base-item"
            }, [s("div", {
                staticClass: "introduction-base-item-label"
            }, [e._v(e._s(e.$t("学分")))]), s("div", {
                staticClass: "introduction-base-item-value"
            }, [e._v("\n        " + e._s(e.courseInfo.courseScore || 0) + "\n      ")])]), s("div", {
                staticClass: "introduction-base-item"
            }, [s("div", {
                staticClass: "introduction-base-item-label"
            }, [e._v(e._s(e.$t("评分")))]), s("div", {
                staticClass: "introduction-base-item-value"
            }, [e._l(Math.floor(e.courseInfo.avgPoint || 0), (function(e, t) {
                return s("svg-icon", {
                    key: "active" + t,
                    staticClass: "mr-4 fs-24",
                    attrs: {
                        "use-svg": "",
                        "icon-class": "rate_star_active"
                    }
                })
            }
            )), e.courseInfo.avgPoint && Math.ceil(e.courseInfo.avgPoint) !== Math.floor(e.courseInfo.avgPoint) ? s("svg-icon", {
                staticClass: "mr-4 fs-24",
                attrs: {
                    "use-svg": "",
                    "icon-class": "rate_star_half"
                }
            }) : e._e(), e._l(5 - Math.ceil(e.courseInfo.avgPoint || 0), (function(e, t) {
                return s("svg-icon", {
                    key: "default" + t,
                    staticClass: "mr-4 fs-24",
                    attrs: {
                        "use-svg": "",
                        "icon-class": "rate_star_default"
                    }
                })
            }
            )), e.courseInfo.avgPoint ? [e._v("\n          " + e._s(e.courseInfo.avgPoint || 0) + " " + e._s(e.$t("分")) + "\n        ")] : [e._v("\n          " + e._s(e.$t("未评分")) + "\n        ")]], 2)]), e.showTeacher && e.fileSetting && e.fileSetting.teacherList.studentShow ? s("div", {
                staticClass: "introduction-base-item"
            }, [s("div", {
                staticClass: "introduction-base-item-label"
            }, [e._v(e._s(e.$t("讲师")))]), s("div", {
                staticClass: "introduction-base-item-value"
            }, [e._v(e._s(e.teacherNames))])]) : e._e(), s("div", {
                staticClass: "introduction-base-item"
            }, [s("div", {
                staticClass: "introduction-base-item-label"
            }, [e._v(e._s(e.$t("结业条件")))]), s("div", {
                staticClass: "introduction-base-item-value"
            }, [e._v("\n        " + e._s(e.completionCondition) + "\n      ")])]), e.fileSetting && e.fileSetting.courseCode.studentShow ? s("div", {
                staticClass: "introduction-base-item"
            }, [s("div", {
                staticClass: "introduction-base-item-label"
            }, [e._v(e._s(e.$t("课程编号")))]), s("div", {
                staticClass: "introduction-base-item-value",
                staticStyle: {
                    "white-space": "pre-wrap",
                    flex: "1",
                    "word-break": "break-word"
                }
            }, [e._v(e._s(e.courseInfo.courseCode))])]) : e._e(), s("div", {
                staticClass: "introduction-base-item"
            }, [s("div", {
                staticClass: "introduction-base-item-label"
            }, [e._v(e._s(e.$t("课程分类")))]), s("div", {
                staticClass: "introduction-base-item-value"
            }, [s("span", [e._v(e._s(e.courseInfo.categoryNamePath || ""))]), e.courseData.enableCourseCategorySubscribe ? s("span", {
                staticClass: "subscribe",
                attrs: {
                    size: "small"
                },
                on: {
                    click: e.subscribe
                }
            }, [e._v("\n          " + e._s(e.subscribed ? e.$t("取消订阅") : e.$t("订阅")) + "\n          "), s("a-popover", {
                staticClass: "ml-4"
            }, [s("template", {
                slot: "content"
            }, [s("span", [e._v(e._s(e.subscribed ? e.$t("取消后，当该课程分类下有新课程启用后你将不会再收到消息通知，是否确定取消？") : e.$t("订阅后，当该课程分类下有新课程启用后你将收到消息通知")))])]), s("a-icon", {
                attrs: {
                    type: "question-circle"
                }
            })], 2)], 1) : e._e()])]), s("div", {
                staticClass: "introduction-base-item"
            }, [s("div", {
                staticClass: "introduction-base-item-label"
            }, [e._v(e._s(e.$t("学习来源")))]), s("div", {
                staticClass: "introduction-base-item-value",
                domProps: {
                    innerHTML: e._s(e.studySource)
                }
            })]), e.fileSetting && e.fileSetting.publishDate.studentShow ? s("div", {
                staticClass: "introduction-base-item"
            }, [s("div", {
                staticClass: "introduction-base-item-label"
            }, [e._v(e._s(e.$t("发布日期")))]), s("div", {
                staticClass: "introduction-base-item-value"
            }, [e._v("\n        " + e._s(e.courseInfo.publishDate ? e.$moment(e.courseInfo.publishDate).format("YYYY-MM-DD") : "") + "\n      ")])]) : e._e(), e.courseInfo.expirationDate && e.fileSetting && e.fileSetting.expirationDate.studentShow ? s("div", {
                staticClass: "introduction-base-item"
            }, [s("div", {
                staticClass: "introduction-base-item-label"
            }, [e._v(e._s(e.$t("过期日期")))]), s("div", {
                staticClass: "introduction-base-item-value"
            }, [e._v("\n        " + e._s(e.courseInfo.expirationDate ? e.$moment(e.courseInfo.expirationDate).format("YYYY-MM-DD") : "") + "\n      ")])]) : e._e(), e.courseInfo.supplierId && e.fileSetting && e.fileSetting.supplier.studentShow ? s("div", {
                staticClass: "introduction-base-item"
            }, [s("div", {
                staticClass: "introduction-base-item-label"
            }, [e._v(e._s(e.$t("所属供应商")))]), s("div", {
                staticClass: "introduction-base-item-value"
            }, [e._v(e._s(e.courseInfo.supplierName || "--"))])]) : e._e(), e.extendMsgs && e.extendMsgs.length ? e._l(e.extendMsgs, (function(t) {
                return s("div", {
                    key: t.extendId,
                    staticClass: "introduction-base-item"
                }, [s("div", {
                    staticClass: "introduction-base-item-label"
                }, [e._v("\n          " + e._s(t.extendValue) + "\n        ")]), s("div", {
                    staticClass: "introduction-base-item-value"
                }, [e._v("\n          " + e._s(t.extendInfoValue) + "\n        ")])])
            }
            )) : e._e()], 2), s("div", {
                staticClass: "introduction-html"
            }, [e.courseInfo && e.courseInfo.meaning && e.fileSetting && e.fileSetting.comments.studentShow ? s("div", {
                staticClass: "introduction-html-item"
            }, [s("div", {
                staticClass: "introduction-html-item-label"
            }, [e._v(e._s(e.$t("课程意义")))]), s("div", {
                staticClass: "introduction-html-item-value",
                domProps: {
                    innerHTML: e._s(e.courseInfo.meaning)
                }
            })]) : e._e(), e.courseInfo && e.courseInfo.orientObj && e.fileSetting && e.fileSetting.orientObj.studentShow ? s("div", {
                staticClass: "introduction-html-item"
            }, [s("div", {
                staticClass: "introduction-html-item-label"
            }, [e._v(e._s(e.$t("课程对象")))]), s("div", {
                staticClass: "introduction-html-item-value",
                domProps: {
                    innerHTML: e._s(e.courseInfo.orientObj)
                }
            })]) : e._e(), e.courseInfo && e.courseInfo.objectives && e.fileSetting && e.fileSetting.objectives.studentShow ? s("div", {
                staticClass: "introduction-html-item",
                attrs: {
                    se: ""
                }
            }, [s("div", {
                staticClass: "introduction-html-item-label"
            }, [e._v(e._s(e.$t("课程目标")))]), s("div", {
                staticClass: "introduction-html-item-value",
                domProps: {
                    innerHTML: e._s(e.courseInfo.objectives)
                }
            })]) : e._e(), e.courseInfo && e.courseInfo.outline && e.fileSetting && e.fileSetting.outline.studentShow ? s("div", {
                staticClass: "introduction-html-item"
            }, [s("div", {
                staticClass: "introduction-html-item-label"
            }, [e._v(e._s(e.$t("课程提纲")))]), s("div", {
                staticClass: "introduction-html-item-value",
                domProps: {
                    innerHTML: e._s(e.courseInfo.outline)
                }
            })]) : e._e()])])
        }
          , Xs = []
          , ei = {
            components: {},
            props: {
                courseData: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                fileSetting: {
                    type: Object || null,
                    default: function() {
                        return null
                    }
                }
            },
            data: function() {
                return {
                    subscribeCache: 0
                }
            },
            computed: {
                courseInfo: function() {
                    return this.courseData.courseInfo || {}
                },
                courseStudyRecord: function() {
                    return this.courseData.courseStudyRecord || {}
                },
                showTeacher: function() {
                    return this.courseInfo.teacherList && this.courseInfo.teacherList.length > 0
                },
                teacherNames: function() {
                    return this.courseInfo.teacherList.map((function(e) {
                        return e.teacherName
                    }
                    )).join("、")
                },
                completionCondition: function() {
                    var e = {
                        COURSE_PRETEST: this.$t("课前测试"),
                        COURSE_COURSE_STUDY: this.$t("课程学习"),
                        COURSE_EVALUATE: this.$t("课程评估"),
                        COURSE_EXAM: this.$t("课后测试"),
                        COURSE_EMS_EXAM: this.$t("课程考试")
                    };
                    return e[this.courseInfo.stepToGetScore] || "--"
                },
                studySource: function() {
                    if (this.courseStudyRecord && this.courseStudyRecord.getWay) {
                        console.log("🚀 ~ this.courseStudyRecord.getWay:", this.courseStudyRecord.getWay);
                        var e = this.courseStudyRecord.getWay
                          , t = "";
                        return e.includes("RM_PROJECT") && (t += this.$t("学习地图"),
                        t += "&nbsp;"),
                        e.includes("STUDY_PLAN") && (t += this.$t("安排课程"),
                        t += "&nbsp;"),
                        e.includes("BTM_PROJECT") && (t += this.$t("培训项目"),
                        t += "&nbsp;"),
                        e.includes("SELF") && (t += this.$t("自选"),
                        t += "&nbsp;"),
                        e.includes("CIRCLE_PROJECT") && (t += this.$t("岗位课程包"),
                        t += "&nbsp;"),
                        e.includes("EP_PROJECT") && (t += this.$t("时光易培"),
                        t += "&nbsp;"),
                        e.includes("POST_SYSTEM") && (t += this.$t("岗位体系"),
                        t += "&nbsp;"),
                        t
                    }
                    return "--"
                },
                extendMsgs: function() {
                    return this.courseInfo.extendMsgs || []
                },
                objectives: function() {
                    return this.courseInfo.objectives || []
                },
                subscribed: function() {
                    return this.subscribeCache ? 1 === this.subscribeCache : this.courseInfo.courseCategory.subscribed
                }
            },
            methods: {
                subscribe: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s, i, n, a, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (s = {
                                        objectId: e.courseInfo.courseCategory.categoryId,
                                        hasChild: !1
                                    },
                                    !e.subscribeCache) {
                                        t.next = 15;
                                        break
                                    }
                                    if (1 !== e.subscribeCache) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 5,
                                    x(s);
                                case 5:
                                    i = t.sent,
                                    i.success ? (e.subscribeCache = 2,
                                    c["a"].success(e.$t("取消订阅成功"))) : c["a"].error(i.message),
                                    t.next = 13;
                                    break;
                                case 9:
                                    return t.next = 11,
                                    _(s);
                                case 11:
                                    n = t.sent,
                                    n.success ? (e.subscribeCache = 1,
                                    c["a"].success(e.$t("订阅成功"))) : c["a"].error(n.message);
                                case 13:
                                    t.next = 26;
                                    break;
                                case 15:
                                    if (!e.courseInfo.courseCategory.subscribed) {
                                        t.next = 22;
                                        break
                                    }
                                    return t.next = 18,
                                    x(s);
                                case 18:
                                    a = t.sent,
                                    a.success ? (e.subscribeCache = 2,
                                    c["a"].success(e.$t("取消订阅成功"))) : c["a"].error(a.message),
                                    t.next = 26;
                                    break;
                                case 22:
                                    return t.next = 24,
                                    _(s);
                                case 24:
                                    r = t.sent,
                                    r.success ? (e.subscribeCache = 1,
                                    c["a"].success(e.$t("订阅成功"))) : c["a"].error(r.message);
                                case 26:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            }
        }
          , ti = ei
          , si = (s("5365"),
        Object(y["a"])(ti, Zs, Xs, !1, null, "f93c8c92", null))
          , ii = si.exports
          , ni = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "reference"
            }, [e.referenceMaterial.length ? s("div", {
                staticClass: "reference-list"
            }, e._l(e.referenceMaterial, (function(t) {
                return s("div", {
                    key: t.refId,
                    staticClass: "reference-list-item"
                }, [s("div", {
                    staticClass: "reference-list-item-type"
                }, [s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        "icon-class": e.getType(t)
                    }
                })], 1), s("div", {
                    staticClass: "reference-list-item-name"
                }, [s("span", {
                    on: {
                        click: function(s) {
                            return e.handleBtn(t)
                        }
                    }
                }, [e._v(e._s(t.refName))])]), s("svg-icon", {
                    staticClass: "ml-16 fs-16",
                    attrs: {
                        "use-svg": "",
                        "icon-class": "download-km"
                    },
                    on: {
                        click: function(s) {
                            return e.handleBtn(t)
                        }
                    }
                })], 1)
            }
            )), 0) : s("div", {
                staticClass: "p-40"
            }, [s("NoData", {
                attrs: {
                    title: e.$t("暂无参考资料")
                }
            })], 1)])
        }
          , ai = []
          , ri = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("a-empty", {
                staticClass: "no-data"
            }, [e._t("image", (function() {
                return [i("img", {
                    staticClass: "image",
                    attrs: {
                        src: s("78b0"),
                        alt: "",
                        srcset: ""
                    }
                })]
            }
            ), {
                slot: "image"
            }), e._t("description", (function() {
                return [i("span", {
                    staticClass: "text"
                }, [e._v(e._s(e.$t(e.title || "暂无数据")))])]
            }
            ), {
                slot: "description"
            })], 2)
        }
          , oi = []
          , ci = {
            components: {},
            props: {
                title: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {}
            },
            methods: {}
        }
          , ui = ci
          , li = (s("b459b"),
        Object(y["a"])(ui, ri, oi, !1, null, "25fa2d9a", null))
          , di = li.exports
          , hi = {
            components: {
                NoData: di
            },
            props: {
                referenceMaterial: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {}
            },
            methods: {
                getType: function(e) {
                    var t = e.refName.split(".")
                      , s = t[t.length - 1].toLowerCase();
                    console.log("🚀 ~ type:", s);
                    var i = ["jpg", "jpeg", "png", "gif", "bmp"]
                      , n = ["mp4", "avi", "rmvb", "rm", "asf", "divx", "mpg", "mpeg", "mpe", "wmv", "mkv", "vob", "mov", "qt", "flv", "f4v", "swf", "webm"]
                      , a = ["mp3", "wav", "wma", "ogg", "ape", "acc", "flac"]
                      , r = ["doc", "docx"]
                      , o = ["xls", "xlsx"]
                      , c = ["ppt", "pptx"]
                      , u = ["pdf"]
                      , l = ["zip", "rar", "7z"];
                    return i.includes(s) ? "tupian" : n.includes(s) ? "shipin" : a.includes(s) ? "yinpin" : r.includes(s) ? "word" : o.includes(s) ? "excel" : c.includes(s) ? "ppt" : u.includes(s) ? "pdf" : l.includes(s) ? "yasuo" : "qita"
                },
                handleBtn: function(e) {
                    window.open(e.refStoredFileId, "target")
                }
            }
        }
          , mi = hi
          , pi = (s("826e"),
        Object(y["a"])(mi, ni, ai, !1, null, "70ae08d0", null))
          , fi = pi.exports
          , vi = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "discussion"
            }, [s("Discuss", e._g({
                attrs: {
                    discussPage: e.discussPage,
                    userInfo: e.userInfo,
                    isbizResultShow: e.isbizResultShow
                }
            }, e.$listeners))], 1)
        }
          , gi = []
          , yi = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "discuss"
            }, [s("div", {
                staticClass: "discuss-input"
            }, [s("el-input", {
                attrs: {
                    autosize: {
                        minRows: 6,
                        maxRows: 6
                    },
                    type: "textarea",
                    placeholder: e.placeholder,
                    maxlength: e.maxWords,
                    "show-word-limit": e.showWordLimit
                },
                model: {
                    value: e.mainContent,
                    callback: function(t) {
                        e.mainContent = t
                    },
                    expression: "mainContent"
                }
            }), s("div", {
                staticClass: "discuss-input-action"
            }, [s("a-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.handleMainDiscuss
                }
            }, [e._v(e._s(e.$t("发布留言")))])], 1)], 1), e.discussPage.rows && e.discussPage.rows.length ? s("div", {
                staticClass: "discuss-list"
            }, [e._l(e.discussPage.rows, (function(t) {
                return s("DiscussItem", e._g(e._b({
                    key: t.discussId,
                    attrs: {
                        discuss: t
                    }
                }, "DiscussItem", {
                    subPlaceholder: e.subPlaceholder,
                    maxWords: e.maxWords,
                    showWordLimit: e.showWordLimit,
                    userInfo: e.userInfo,
                    isbizResultShow: e.isbizResultShow
                }, !1), e.$listeners))
            }
            )), s("div", {
                staticClass: "discuss-list-more"
            }, [e.hasMore ? s("span", [s("span", {
                staticClass: "mr-8"
            }, [e._v(e._s(e.$t("加载中")))]), s("a-icon", {
                attrs: {
                    type: "loading"
                }
            })], 1) : s("span", [e._v(e._s(e.$t("到底了~")))])])], 2) : s("div", {
                staticClass: "p-40"
            }, [s("NoData", {
                attrs: {
                    title: e.$t("暂无讨论")
                }
            })], 1)])
        }
          , Ci = []
          , Ii = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "discuss-item",
                class: {
                    "is-leaf": e.isLeaf
                }
            }, [s("div", {
                staticClass: "discuss-item-main"
            }, [s("div", {
                staticClass: "discuss-item-main-left"
            }, [s("img", {
                attrs: {
                    src: e.discuss.faceUrl || e.defaultAvatar || "",
                    alt: ""
                }
            })]), s("div", {
                staticClass: "discuss-item-main-right"
            }, [s("div", {
                staticClass: "discuss-item-main-right-user"
            }, [e._v("\n        " + e._s(e.discuss.userName) + "\n      ")]), s("div", {
                staticClass: "discuss-item-main-right-content"
            }, [e.isLeaf ? s("span", {
                staticClass: "discuss-item-main-right-content-pre"
            }, [s("span", {
                staticClass: "discuss-item-main-right-content-pre-label"
            }, [e._v(e._s(e.$t("回复")))]), s("span", {
                staticClass: "discuss-item-main-right-content-pre-user"
            }, [e._v(e._s(e.discuss.toCommentUserName))]), s("span", {
                staticClass: "discuss-item-main-right-content-pre-label"
            }, [e._v("：")])]) : e._e(), s("pre", {
                staticStyle: {
                    "white-space": "pre-wrap",
                    "word-break": "break-all"
                }
            }, [e._v(e._s(e.discuss.contentPreview))])]), s("div", {
                staticClass: "discuss-item-main-right-footer"
            }, [s("span", {
                staticClass: "discuss-item-main-right-footer-time"
            }, [e._v("\n          " + e._s(e.$moment(e.discuss.createTime).format("YYYY-MM-DD HH:mm")) + "\n        ")]), s("div", {
                staticClass: "discuss-item-main-right-footer-action"
            }, [s("div", {
                staticClass: "discuss-item-main-right-footer-action-item reply",
                on: {
                    click: e.handleShow
                }
            }, [s("div", {
                staticClass: "img"
            }), s("div", [e._v(e._s(e.$t("回复")))])]), e.$attrs.userInfo && e.$attrs.userInfo.userId === e.discuss.createBy && !e.$attrs.isbizResultShow || e.$attrs.isbizResultShow ? s("div", {
                staticClass: "discuss-item-main-right-footer-action-item del",
                on: {
                    click: e.handleDel
                }
            }, [s("div", {
                staticClass: "img"
            }), s("div", [e._v(e._s(e.$t("删除")))])]) : e._e()])]), e.showInput ? s("div", {
                staticClass: "discuss-item-main-right-input"
            }, [s("el-input", {
                attrs: {
                    autosize: {
                        minRows: 4,
                        maxRows: 4
                    },
                    type: "textarea",
                    placeholder: e.$attrs.subPlaceholder,
                    maxlength: e.$attrs.maxWords,
                    "show-word-limit": e.$attrs.showWordLimit
                },
                model: {
                    value: e.mainContent,
                    callback: function(t) {
                        e.mainContent = t
                    },
                    expression: "mainContent"
                }
            }), s("div", {
                staticClass: "discuss-item-main-right-input-action"
            }, [s("a-button", {
                on: {
                    click: e.handleCancel
                }
            }, [e._v(e._s(e.$t("取消")))]), s("a-button", {
                staticClass: "ml-8",
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.handleReply
                }
            }, [e._v(e._s(e.$t("回复")))])], 1)], 1) : e._e()])]), e.discuss.discussPage && e.discuss.discussPage.rows && e.discuss.discussPage.rows.length ? s("div", {
                staticClass: "discuss-item-list"
            }, [e._l(e.discuss.discussPage.rows, (function(t) {
                return s("DiscussItem", e._g(e._b({
                    key: t.discussId,
                    attrs: {
                        isLeaf: !0,
                        discuss: t
                    }
                }, "DiscussItem", e.$attrs, !1), e.$listeners))
            }
            )), e.hasMore ? s("div", {
                staticClass: "discuss-item-list-more"
            }, [s("span", {
                on: {
                    click: e.handleMore
                }
            }, [e._v(e._s(e.$t("查看更多")))])]) : e._e()], 2) : e._e()])
        }
          , Ai = []
          , Si = {
            name: "DiscussItem",
            components: {},
            props: {
                discuss: {
                    type: Object,
                    default: function() {}
                },
                isLeaf: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                hasMore: function() {
                    return this.discuss.discussPage && this.discuss.discussPage.pageNo < this.discuss.discussPage.totalPages
                }
            },
            data: function() {
                return {
                    defaultAvatar: at.a,
                    showInput: !1,
                    mainContent: ""
                }
            },
            methods: {
                handleShow: function() {
                    this.showInput = !0
                },
                handleDel: function() {
                    this.$emit("handleDel", this.discuss.discussId)
                },
                handleCancel: function() {
                    this.showInput = !1
                },
                handleReply: function() {
                    this.mainContent && "" !== this.mainContent.trim() ? (this.$emit("handleSubDiscuss", this.mainContent, this.discuss.discussId),
                    this.mainContent = "",
                    this.showInput = !1) : c["a"].warning(this.$attrs.subPlaceholder)
                },
                handleMore: function() {
                    this.$emit("handleMore", this.discuss)
                }
            }
        }
          , Ti = Si
          , wi = (s("93cd9"),
        Object(y["a"])(Ti, Ii, Ai, !1, null, "2feac8b7", null))
          , bi = wi.exports
          , _i = {
            name: "Discuss",
            components: {
                DiscussItem: bi,
                NoData: di
            },
            props: {
                discussPage: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                placeholder: {
                    type: String,
                    default: function() {
                        return this.$t("请输入讨论信息")
                    }
                },
                subPlaceholder: {
                    type: String,
                    default: function() {
                        return this.$t("写下你的回答，分享你的真实观点和经验")
                    }
                },
                maxWords: {
                    type: Number,
                    default: 2e3
                },
                showWordLimit: {
                    type: Boolean,
                    default: !0
                },
                userInfo: {
                    type: Object,
                    default: function() {}
                },
                isbizResultShow: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                hasMore: function() {
                    return this.discussPage && this.discussPage.pageNo < this.discussPage.totalPages
                }
            },
            data: function() {
                return {
                    mainContent: ""
                }
            },
            methods: {
                handleMainDiscuss: function() {
                    this.mainContent && "" !== this.mainContent.trim() ? (this.$emit("handleMainDiscuss", this.mainContent),
                    this.mainContent = "") : c["a"].warning(this.placeholder)
                }
            }
        }
          , xi = _i
          , Ei = (s("fc3e"),
        Object(y["a"])(xi, yi, Ci, !1, null, "28417b46", null))
          , ki = Ei.exports
          , Oi = {
            components: {
                Discuss: ki
            },
            props: {
                discussPage: {
                    type: Object,
                    default: function() {}
                },
                userInfo: {
                    type: Object,
                    default: function() {}
                },
                isbizResultShow: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {}
            },
            methods: {}
        }
          , Ri = Oi
          , Di = (s("3b51"),
        Object(y["a"])(Ri, vi, gi, !1, null, "0bcb4582", null))
          , Li = Di.exports
          , Pi = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "teacher-card"
            }, [e.fileSetting && e.fileSetting.teacherList.studentShow ? s("div", {
                staticClass: "teacher-card-box"
            }, [s("div", {
                staticClass: "teacher-card-swiper-container"
            }, [0 !== e.currentIndex ? s("div", {
                staticClass: "arrow left",
                on: {
                    click: function(t) {
                        return e.handleStep("prev")
                    }
                }
            }, [s("i", {
                staticClass: "el-icon-arrow-left"
            })]) : e._e(), e.currentIndex !== e.teachers.length - 1 ? s("div", {
                staticClass: "arrow right",
                on: {
                    click: function(t) {
                        return e.handleStep("next")
                    }
                }
            }, [s("i", {
                staticClass: "el-icon-arrow-right"
            })]) : e._e(), s("el-carousel", {
                ref: "teacherCardSwiper",
                staticClass: "teacher-card-swiper",
                attrs: {
                    height: "32px",
                    "indicator-position": "none",
                    arrow: "never",
                    autoplay: !1,
                    loop: !1
                },
                on: {
                    change: e.handleChange
                }
            }, e._l(e.teachers, (function(t) {
                return s("el-carousel-item", {
                    key: t.teacherId
                }, [s("div", {
                    staticClass: "teacher-card-swiper-item",
                    on: {
                        click: function(s) {
                            return e.handleTeacher(t)
                        }
                    }
                }, [s("img", {
                    attrs: {
                        src: t.faceUrl,
                        alt: ""
                    }
                }), s("div", {
                    staticClass: "teacher-card-name"
                }, [e._v("\n              " + e._s(t.teacherName) + "\n            ")])])])
            }
            )), 1)], 1), e.currentTeacher && e.currentTeacher.teacherIntroduce ? s("div", {
                ref: "teacherIntro",
                staticClass: "teacher-card-intro",
                class: {
                    "card-close": e.showBtn && !e.isExpand
                },
                domProps: {
                    innerHTML: e._s(e.currentTeacher.teacherIntroduce)
                }
            }) : s("div", {
                staticClass: "teacher-card-intro"
            }, [s("NoData", {
                attrs: {
                    title: e.$t("暂无简介")
                }
            })], 1), e.currentTeacher && e.currentTeacher.teacherIntroduce && e.showBtn ? s("div", {
                staticClass: "btn-box"
            }, [s("div", {
                staticClass: "btn",
                on: {
                    click: function(t) {
                        e.isExpand = !e.isExpand
                    }
                }
            }, [e._v("\n        " + e._s(e.isExpand ? e.$t("收起") : e.$t("展开")) + "\n        "), s("i", {
                class: e.isExpand ? "el-icon-arrow-up" : "el-icon-arrow-down"
            })])]) : e._e()]) : e._e(), e.recommendList.length ? s("div", {
                staticClass: "teacher-card-recommend"
            }, [s("div", {
                staticClass: "teacher-card-recommend-title"
            }, [s("span", {
                staticClass: "teacher-card-recommend-title-left"
            }, [s("svg-icon", {
                attrs: {
                    "use-svg": "",
                    "icon-class": "biaoti"
                }
            }), s("span", {
                staticClass: "teacher-card-recommend-title-left-name"
            }, [e._v(e._s(e.$t("讲师系列课程")))])], 1), s("span", {
                staticClass: "renew",
                on: {
                    click: e.renew
                }
            }, [s("span", [e._v(e._s(e.$t("换一组")))]), s("a-icon", {
                attrs: {
                    type: "reload"
                }
            })], 1)]), s("a-spin", {
                attrs: {
                    spinning: e.listLoading
                }
            }, [s("div", {
                staticClass: "teacher-card-recommend-list"
            }, e._l(e.recommendList, (function(t) {
                return s("div", {
                    key: t.courseId,
                    staticClass: "teacher-card-recommend-list-item",
                    on: {
                        click: function(s) {
                            return e.handleCourse(t)
                        }
                    }
                }, [s("div", {
                    staticClass: "teacher-card-recommend-list-item-img"
                }, [s("img", {
                    attrs: {
                        src: t.courseImage || "/els/courseV2/coverImg/default.png",
                        alt: ""
                    }
                })]), s("div", {
                    staticClass: "teacher-card-recommend-list-item-right"
                }, [s("div", {
                    staticClass: "teacher-card-recommend-list-item-right-title"
                }, [e._v("\n              " + e._s(t.courseTitle) + "\n            ")]), s("div", {
                    staticClass: "teacher-card-recommend-list-item-right-time"
                }, [e._v("\n                " + e._s(t.selectCount) + e._s(e.$t("人观看")) + "\n            ")])])])
            }
            )), 0)])], 1) : e._e()])
        }
          , Ni = []
          , $i = {
            components: {
                NoData: di
            },
            props: {
                courseData: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                fileSetting: {
                    type: Object || null,
                    default: function() {
                        return null
                    }
                }
            },
            computed: {
                courseInfo: function() {
                    return this.courseData.courseInfo || {}
                },
                teachers: function() {
                    return this.courseData.teachers || []
                },
                currentTeacher: function() {
                    return this.teachers[this.currentIndex] || {}
                }
            },
            data: function() {
                return {
                    pageNo: 1,
                    totalPages: 0,
                    currentIndex: 0,
                    recommendList: [],
                    listLoading: !1,
                    showBtn: !1,
                    isExpand: !1
                }
            },
            watch: {
                currentTeacher: {
                    handler: function(e) {
                        var t = this;
                        this.$nextTick((function() {
                            console.log("innerHeight", t.$refs.teacherIntro && t.$refs.teacherIntro.offsetHeight),
                            t.showBtn = !!(t.$refs.teacherIntro && t.$refs.teacherIntro.offsetHeight > 132),
                            t.isExpand = !1
                        }
                        ))
                    },
                    deep: !0,
                    immediate: !0
                }
            },
            mounted: function() {
                this.getCourseList()
            },
            methods: {
                handleStep: function(e) {
                    console.log("🚀 ~ type:", e),
                    "prev" === e ? this.$refs.teacherCardSwiper.prev() : this.$refs.teacherCardSwiper.next()
                },
                renew: function() {
                    this.pageNo < this.totalPages ? this.pageNo++ : this.pageNo = 1,
                    this.getCourseList()
                },
                getCourseList: function() {
                    var e = this;
                    this.listLoading = !0;
                    var t = {
                        courseId: this.courseInfo.courseId,
                        courseType: this.courseInfo.courseType || "NEW_COURSE_CENTER",
                        teacherId: this.currentTeacher.teacherId,
                        "page.pageNo": this.pageNo,
                        "page.pageSize": 4
                    };
                    k(t).then((function(t) {
                        e.listLoading = !1,
                        0 === +t.status ? (e.totalPages = t.data.totalPages,
                        e.recommendList = t.data.rows || []) : c["a"].error(t.msg || t.message || t.errorMsg)
                    }
                    )).catch((function() {
                        e.listLoading = !1
                    }
                    ))
                },
                handleChange: function(e) {
                    this.currentIndex = e,
                    this.pageNo = 1,
                    this.getCourseList()
                },
                handleCourse: function(e) {
                    var t = {
                        courseId: e.courseId
                    };
                    O(t).then((function(t) {
                        if (t.success)
                            if ("ONLINEVIDEOCOURSE" === e.courseStandard)
                                window.open("".concat(location.origin, "/courseSetting/courseLearning/play?courseId=").concat(e.courseId, "&courseType=NEW_COURSE_CENTER"), "_self");
                            else {
                                var s = window.$cookies.get("eln_session_id") || ""
                                  , i = "/els/html/course/course.courseInfo.do?eln_session_id=" + s + "&elsSign=" + s + "&courseId=" + e.courseId + "&courseType=NEW_COURSE_CENTER&p=";
                                window.open(i, "_self")
                            }
                        else
                            c["a"].error(t.msg || t.message || t.errorMsg)
                    }
                    ))
                },
                handleTeacher: function(e) {
                    var t = {
                        teacherId: e.teacherId
                    };
                    R(t).then((function() {
                        window.open("/lecturer-pc/style/home?teacherId=" + e.teacherId)
                    }
                    ))
                }
            }
        }
          , Ui = $i
          , Mi = (s("ed21"),
        Object(y["a"])(Ui, Pi, Ni, !1, null, "4dc9d0ee", null))
          , ji = Mi.exports
          , Fi = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "course-tag-container"
            }, [s("div", {
                staticClass: "course-tag-content",
                class: {
                    "course-tag-content--open": e.isOpen
                }
            }, [s("div", {
                directives: [{
                    name: "trunced",
                    rawName: "v-trunced",
                    value: e.trunced,
                    expression: "trunced"
                }],
                staticClass: "course-tag-list",
                class: {
                    "course-tag-list--open": e.isOpen
                }
            }, e._l(e.tagList, (function(t, i) {
                return s("div", {
                    key: i
                }, [t.tagResources && t.tagResources.length ? s("a-tooltip", {
                    attrs: {
                        placement: "bottom",
                        overlayClassName: "course-tag-tooltip",
                        overlayStyle: e.overlayStyle
                    }
                }, [s("template", {
                    slot: "title"
                }, [s("div", {
                    staticClass: "course-tag-item-drop"
                }, e._l(t.tagResources, (function(t) {
                    return s("div", {
                        key: t.tagResourceId,
                        staticClass: "course-tag-item-drop-item",
                        on: {
                            click: function(e) {}
                        }
                    }, [e._v("\n                " + e._s(t.startTime) + "\n              ")])
                }
                )), 0)]), s("div", {
                    staticClass: "course-tag-item"
                }, ["AI" === t.createMode ? s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        "icon-class": "ai_new"
                    }
                }) : e._e(), s("span", {
                    staticClass: "course-tag-item-ai"
                }, [e._v(e._s(t.tagName))]), s("svg-icon", {
                    attrs: {
                        className: "arrow",
                        "use-svg": "",
                        "icon-class": "arrow-down"
                    }
                })], 1)], 2) : s("div", {
                    staticClass: "course-tag-item"
                }, ["AI" === t.createMode ? s("svg-icon", {
                    attrs: {
                        "use-svg": "",
                        "icon-class": "ai_new"
                    }
                }) : e._e(), s("span", {
                    staticClass: "course-tag-item-ai"
                }, [e._v(e._s(t.tagName))])], 1)], 1)
            }
            )), 0), e.trunced || e.isOpen ? s("div", {
                staticClass: "course-tag-collapse",
                on: {
                    click: function(t) {
                        e.isOpen = !e.isOpen
                    }
                }
            }, [s("div", {
                staticClass: "course-tag-collapse-icon",
                class: {
                    "course-tag-collapse-icon--open": e.isOpen
                }
            }, [s("svg-icon", {
                attrs: {
                    className: "arrow-down",
                    "use-svg": "",
                    "icon-class": "arrow-down"
                }
            })], 1)]) : e._e()])])
        }
          , Bi = []
          , Vi = {
            components: {},
            props: {
                tagList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                isPreview: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    trunced: !1,
                    isOpen: !1,
                    overlayStyle: {
                        borderRadius: "8px"
                    }
                }
            },
            methods: {
                handleTagResourceClick: function(e) {
                    this.isPreview ? c["a"].error("预览模式下无法操作") : this.$emit("tagResourceClick", e)
                }
            }
        }
          , qi = Vi
          , Qi = (s("3004"),
        s("743b"),
        Object(y["a"])(qi, Fi, Bi, !1, null, "ee80c89a", null))
          , zi = Qi.exports
          , Gi = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                staticClass: "feed-back-container"
            }, [e.showFeedBackTip ? s("div", {
                staticClass: "feed-back-tip"
            }, [!e.isPublished || e.currentResourceAiLearnData && 0 === e.currentResourceAiLearnData.length ? s("div", {
                staticClass: "back-tip"
            }, [s("div", {
                staticClass: "tip-content"
            }, [s("svg-icon", {
                attrs: {
                    "icon-class": "open-tip",
                    "class-name": "open-tip",
                    "use-svg": ""
                }
            }), s("div", {
                staticClass: "text-level-1 mb-4"
            }, [e._v(e._s(e.$t("该资源暂未启用AI功能")))]), s("div", {
                staticClass: "text-level-2 mb-12"
            }, [e._v(e._s(e.$t("点击可提醒创建人开启")))]), s("a-button", {
                staticClass: "text-btn",
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.feedbackAILearn
                }
            }, [e._v(e._s(e.$t("点击反馈")))])], 1)]) : s("div", {
                staticClass: "back-tip-2"
            }, [s("div", {
                staticClass: "img-container"
            }, [s("img", {
                attrs: {
                    src: e.aiPng,
                    alt: ""
                }
            })]), s("div", {
                staticClass: "tip-content-2"
            }, [s("div", {
                staticClass: "text-level-1 mb-4"
            }, [e._v(e._s(e.$t("你的 AI 学习搭档已就位！")))]), s("div", {
                staticClass: "text-level-2 mb-12"
            }, [e._v(e._s(e.$t("一键开启，体验智能速览、课程转写、导图等高效学习新功能")))]), s("a-button", {
                staticClass: "text-btn",
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.enterAILearn
                }
            }, [e._v(e._s(e.$t("一键开启")))])], 1)])]) : e._t("default"), s("a-modal", {
                attrs: {
                    wrapClassName: "feedback-modal",
                    title: e.$t("反馈"),
                    visible: e.visible,
                    "ok-text": e.$t("提交"),
                    "cancel-text": e.$t("关闭"),
                    "confirm-loading": e.confirmLoading
                },
                on: {
                    ok: e.handleOk,
                    cancel: e.handleCancel
                }
            }, [s("a-textarea", {
                attrs: {
                    "auto-size": {
                        minRows: 5,
                        maxRows: 5
                    },
                    maxLength: 200,
                    placeholder: e.$t("请输入你想反馈的内容")
                },
                model: {
                    value: e.feedbackContent,
                    callback: function(t) {
                        e.feedbackContent = t
                    },
                    expression: "feedbackContent"
                }
            })], 1)], 2)
        }
          , Ji = []
          , Hi = s("ca74")
          , Wi = s.n(Hi)
          , Ki = {
            components: {},
            props: {
                isOpenFromAdmin: {
                    type: Boolean,
                    default: !1
                },
                isPublished: {
                    type: Boolean,
                    default: !1
                },
                courseInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                currentResourceAiLearnData: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    visible: !1,
                    confirmLoading: !1,
                    feedbackContent: "",
                    courseTouchedAILearn: !1,
                    aiPng: Wi.a
                }
            },
            computed: {
                showFeedBackTip: function() {
                    return !this.isOpenFromAdmin && (!this.isPublished || !(this.courseTouchedAILearn && this.currentResourceAiLearnData && this.currentResourceAiLearnData.length > 0))
                }
            },
            created: function() {
                this.courseTouchedAILearn = localStorage.getItem("courseTouchedAILearn")
            },
            methods: {
                enterAILearn: function() {
                    localStorage.setItem("courseTouchedAILearn", !0),
                    this.courseTouchedAILearn = !0
                },
                feedbackAILearn: function() {
                    this.visible = !0
                },
                handleCancel: function() {
                    this.visible = !1,
                    this.feedbackContent = ""
                },
                handleOk: function() {
                    var e = this;
                    this.feedbackContent.trim() ? (this.confirmLoading = !0,
                    ue({
                        courseId: this.courseInfo.courseId,
                        feedbackContent: this.feedbackContent
                    }).then((function() {
                        e.confirmLoading = !1,
                        e.visible = !1,
                        e.feedbackContent = ""
                    }
                    ))) : this.$message.error(this.$t("请输入反馈内容"))
                }
            }
        }
          , Yi = Ki
          , Zi = (s("ccaa"),
        s("db12"),
        Object(y["a"])(Yi, Gi, Ji, !1, null, "5c1200d0", null))
          , Xi = Zi.exports;
        function en(e, t) {
            var s = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                s.push.apply(s, i)
            }
            return s
        }
        function tn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? en(Object(s), !0).forEach((function(t) {
                    Object(r["a"])(e, t, s[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : en(Object(s)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                }
                ))
            }
            return e
        }
        var sn = {
            components: {
                Tabs: xt,
                Translate: fs,
                SmartView: Vs,
                MindMap: Ys,
                Introduction: ii,
                Reference: fi,
                Discussion: Li,
                TeacherCard: ji,
                CourseTag: zi,
                FeedBack: Xi
            },
            props: {
                currentLangAiLearnData: {
                    type: Object,
                    default: function() {
                        return null
                    }
                },
                courseData: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                currentResourceInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                isPreview: {
                    type: Boolean,
                    default: !1
                },
                showAiLearn: {
                    type: Boolean,
                    default: !1
                },
                isOpenFromAdmin: {
                    type: Boolean,
                    default: !1
                },
                currentLang: {
                    type: String,
                    default: ""
                },
                currentSourceLang: {
                    type: String,
                    default: ""
                },
                capIns: {
                    type: Object,
                    default: null
                },
                activeCaptionId: {
                    type: [Number, String],
                    default: ""
                },
                translateLoading: {
                    type: Boolean,
                    default: !1
                },
                fileSetting: {
                    type: Object || null,
                    default: function() {
                        return null
                    }
                },
                isPublished: {
                    type: Boolean,
                    default: !1
                },
                isOpenStudyAssist: {
                    type: Boolean,
                    default: !1
                },
                currentResourceAiLearnData: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            computed: {
                courseInfo: function() {
                    return this.courseData.courseInfo || {}
                },
                tabs: {
                    get: function() {
                        var e, t = (null === (e = this.courseData) || void 0 === e || null === (e = e.courseInfo) || void 0 === e ? void 0 : e.openDsc) || !1, s = t ? this.defaultTabs : this.defaultTabs.filter((function(e) {
                            return "discussion" !== e.value
                        }
                        ));
                        if (this.isOpenFromAdmin)
                            return this.currentLangAiLearnData ? s.filter((function(e) {
                                return "ai" == e.type
                            }
                            )) : s.filter((function(e) {
                                return "ai" !== e.type
                            }
                            ));
                        var i, n, a = ["video", "audio"];
                        return this.isOpenStudyAssist ? a.includes(null === (i = this.currentResourceInfo) || void 0 === i ? void 0 : i.resourceType) ? s : s.filter((function(e) {
                            return "ai" !== e.type
                        }
                        )) : a.includes(null === (n = this.currentResourceInfo) || void 0 === n ? void 0 : n.resourceType) && this.currentResourceAiLearnData.length && this.isPublished ? s : s.filter((function(e) {
                            return "ai" !== e.type
                        }
                        ))
                    },
                    set: function(e) {
                        this.defaultTabs = e
                    }
                }
            },
            data: function() {
                return {
                    defaultTabs: [{
                        label: this.$t("课程简介"),
                        value: "introduction"
                    }, {
                        label: this.$t("智能速览"),
                        value: "smartview",
                        type: "ai",
                        isNew: !0,
                        showAIIcon: !0
                    }, {
                        label: this.$t("课程转写"),
                        value: "translate",
                        type: "ai",
                        showAIIcon: !0,
                        isNew: !0
                    }, {
                        label: this.$t("导图"),
                        value: "mindmap",
                        type: "ai",
                        showAIIcon: !0,
                        isNew: !0
                    }, {
                        label: this.$t("参考资料"),
                        value: "reference"
                    }, {
                        label: this.$t("讨论区"),
                        value: "discussion"
                    }],
                    currentTab: "introduction",
                    tabContentLoading: !1,
                    referenceMaterial: [],
                    totalPages: 0,
                    queryParams: {
                        courseId: "",
                        courseType: "",
                        page: {
                            pageNo: 1,
                            pageSize: 10
                        }
                    },
                    discussPage: {},
                    isInfiniteScrollDisabled: !0,
                    userInfo: {},
                    isbizResultShow: !1,
                    tagList: [],
                    autoChapters: [],
                    meetingAssistance: [],
                    mindMap: [],
                    summarization: "",
                    transcription: [],
                    questionAnswer: [],
                    visible: !1,
                    editTranscriptionData: [],
                    currentVideo: {},
                    sentences: [],
                    hasInitCapIns: !1
                }
            },
            watch: {
                currentLangAiLearnData: {
                    handler: function(e) {
                        console.log("🚀🚀🚀 newVal~ currentLangAiLearnData:", e),
                        e && this.fetchAiLearnData(e)
                    },
                    immediate: !0
                },
                capIns: function(e) {
                    this.setCaptions()
                },
                tabs: {
                    handler: function(e) {
                        console.log("🚀 ~ newTabs:", e),
                        e.length && (this.currentTab = e[0].value,
                        console.log("🚀 ~ this.currentTab:", this.currentTab))
                    },
                    immediate: !0
                }
            },
            created: function() {
                this.setTabs(),
                this.getCommentPermission(),
                this.getTagList()
            },
            methods: {
                getCourseTouchedAILearn: function() {
                    return !localStorage.getItem("courseTouchedAILearn")
                },
                setCaptions: function() {
                    var e = this
                      , t = this.sentences.map((function(e) {
                        return tn(tn({}, e), {}, {
                            startTime: e.start / 1e3,
                            endTime: e.end / 1e3
                        })
                    }
                    ));
                    this.capIns && (this.capIns.setCaptionList(t),
                    this.capIns.timeupdate(),
                    this.$nextTick((function() {
                        e.capIns.toggleControl(!!t.length)
                    }
                    )))
                },
                setTabs: function() {
                    var e = localStorage.getItem("courseTouchedTabs");
                    if (e) {
                        var t = JSON.parse(e);
                        this.defaultTabs.forEach((function(e) {
                            var s = t.find((function(t) {
                                return t === e.value
                            }
                            ));
                            s && (e.isNew = !1)
                        }
                        ))
                    }
                    this.isOpenFromAdmin && this.tabs.some((function(e) {
                        return "smartview" === e.value
                    }
                    )) && (this.currentTab = "smartview")
                },
                copyTingwu: function(e) {
                    var t, s = this;
                    switch (e) {
                    case "meetingAssistance":
                        t = this.meetingAssistance.join(", ");
                        break;
                    case "summarization":
                        t = this.summarization;
                        break;
                    case "autoChapters":
                        t = this.autoChapters.map((function(e) {
                            return "".concat(e.id, ": ").concat(e.headline, " - ").concat(e.summary)
                        }
                        )).join("\n");
                        break;
                    case "questionAnswer":
                        t = this.questionAnswer.map((function(e) {
                            return "".concat(e.id, ": ").concat(e.question, " - ").concat(e.answer)
                        }
                        )).join("\n");
                        break;
                    case "transcription":
                        t = this.transcription.map((function(e) {
                            return e.sentences.map((function(e) {
                                return "".concat(e.id, ": ").concat(e.text)
                            }
                            )).join("\n")
                        }
                        )).join("\n");
                        break;
                    default:
                        break
                    }
                    us(t).then((function() {
                        c["a"].success(s.$t("复制成功"))
                    }
                    )).catch((function() {
                        c["a"].error(s.$t("复制失败"))
                    }
                    ))
                },
                updateSummarization: function(e) {
                    this.summarization = e
                },
                updateAutoChapters: function(e) {
                    this.autoChapters = e.map((function(e) {
                        return tn(tn({}, e), {}, {
                            modified: !1
                        })
                    }
                    ))
                },
                updateQuestionAnswer: function(e) {
                    this.questionAnswer = e.map((function(e) {
                        return tn(tn({}, e), {}, {
                            modified: !1
                        })
                    }
                    ))
                },
                getTime: function(e) {
                    var t = e.sentences[0];
                    return Object(ge["TimeToString"])(t.start / 1e3, "HH:mm:ss")
                },
                onClose: function() {
                    this.visible = !1
                },
                saveTrans: function() {
                    var e = this
                      , t = this.editTranscriptionData.reduce((function(e, t) {
                        var s = t.paragraphId
                          , i = t.sentences;
                        return i.forEach((function(t) {
                            var i = t.id
                              , n = t.start
                              , a = t.end
                              , r = t.text
                              , o = t.modified
                              , c = t.talker;
                            o && ("" === r.trim() ? e[i] = "" : e[i] = "".concat(s, "::").concat(n, "::").concat(a, "::").concat(r).concat(c ? "::" + c : ""))
                        }
                        )),
                        e
                    }
                    ), {});
                    if (Object.keys(t).length) {
                        var s = {
                            editContent: JSON.stringify(t),
                            id: this.currentLangAiLearnData.id,
                            resultType: "trans"
                        };
                        ne(s).then((function() {
                            c["a"].success(e.$t("保存成功")),
                            e.$emit("editAiLearn"),
                            e.visible = !1,
                            e.transcription = e.editTranscriptionData.filter((function(e) {
                                return e.sentences.length && e.sentences.some((function(e) {
                                    return "" !== e.text.trim()
                                }
                                ))
                            }
                            )).map((function(e) {
                                return {
                                    paragraphId: e.paragraphId,
                                    sentences: e.sentences.filter((function(e) {
                                        return "" !== e.text.trim()
                                    }
                                    )).map((function(e) {
                                        return tn(tn({}, e), {}, {
                                            modified: !1
                                        })
                                    }
                                    ))
                                }
                            }
                            )),
                            e.sentences = e.transcription.reduce((function(e, t) {
                                return e.concat(t.sentences.map((function(e) {
                                    return tn(tn({}, e), {}, {
                                        startTime: e.start / 1e3,
                                        endTime: e.end / 1e3
                                    })
                                }
                                )))
                            }
                            ), []),
                            e.setCaptions()
                        }
                        )).catch((function() {
                            c["a"].error(e.$t("保存失败"))
                        }
                        ))
                    } else
                        this.visible = !1
                },
                edit: function() {
                    this.visible = !0,
                    this.editTranscriptionData = JSON.parse(JSON.stringify(this.transcription))
                },
                copy: function() {
                    this.copyTingwu("transcription")
                },
                fetchAiLearnData: function(e) {
                    var t = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function s() {
                        var i, n, a, r, o, c, u, l, d, h, m, p, f, v;
                        return regeneratorRuntime.wrap((function(s) {
                            while (1)
                                switch (s.prev = s.next) {
                                case 0:
                                    return i = e.autoChapters,
                                    n = e.meetingAssistance,
                                    a = e.mindMap,
                                    r = e.summarization,
                                    o = e.transcription,
                                    c = e.questionsAnswer,
                                    s.next = 3,
                                    Promise.all([ie(i), ie(n), ie(a), ie(r), ie(o), ie(c)]);
                                case 3:
                                    u = s.sent,
                                    l = Object(rs["a"])(u, 6),
                                    d = l[0],
                                    h = l[1],
                                    m = l[2],
                                    p = l[3],
                                    f = l[4],
                                    v = l[5],
                                    t.mindMap = m,
                                    t.autoChapters = Object.entries(d).reduce((function(e, t) {
                                        var s = Object(rs["a"])(t, 2)
                                          , i = s[0]
                                          , n = s[1]
                                          , a = n.split("::")
                                          , r = Object(rs["a"])(a, 4)
                                          , o = r[0]
                                          , c = r[1]
                                          , u = r[2]
                                          , l = r[3]
                                          , d = {
                                            id: Number(i),
                                            start: Number(o),
                                            end: Number(c),
                                            headline: u,
                                            summary: l,
                                            modified: !1
                                        };
                                        return e.push(d),
                                        e
                                    }
                                    ), []),
                                    t.meetingAssistance = h.split(","),
                                    t.summarization = p,
                                    t.transcription = Object.entries(f).reduce((function(e, s) {
                                        var i = Object(rs["a"])(s, 2)
                                          , n = i[0]
                                          , a = i[1]
                                          , r = a.split("::")
                                          , o = Object(rs["a"])(r, 5)
                                          , c = o[0]
                                          , u = o[1]
                                          , l = o[2]
                                          , d = o[3]
                                          , h = o[4]
                                          , m = {
                                            id: Number(n),
                                            start: Number(u),
                                            end: Number(l),
                                            text: d,
                                            modified: !1,
                                            talker: h
                                        };
                                        t.sentences.push(m);
                                        var p = e.findIndex((function(e) {
                                            return e.paragraphId === c
                                        }
                                        ));
                                        return -1 === p ? e.push({
                                            paragraphId: c,
                                            sentences: [m]
                                        }) : e[p].sentences.push(m),
                                        e
                                    }
                                    ), []),
                                    t.questionAnswer = Object.entries(v).reduce((function(e, t) {
                                        var s = Object(rs["a"])(t, 2)
                                          , i = s[0]
                                          , n = s[1]
                                          , a = n.split("::")
                                          , r = Object(rs["a"])(a, 3)
                                          , o = r[0]
                                          , c = r[1]
                                          , u = r[2]
                                          , l = {
                                            id: Number(i),
                                            sentenceIds: JSON.parse(o),
                                            question: c,
                                            answer: u,
                                            modified: !1
                                        };
                                        return e.push(l),
                                        e
                                    }
                                    ), []),
                                    t.setCaptions(),
                                    console.log(" 🚀 ~ this.TbcAIEven:", JSON.stringify({
                                        courseId: t.courseInfo.courseId,
                                        lang: t.currentLang
                                    })),
                                    window.TbcAIEven && window.TbcAIEven.setConfig({
                                        courseId: t.courseInfo.courseId,
                                        lang: t.currentLang
                                    }),
                                    t.$emit("fetchAiLearnDataDone", {
                                        autoChapters: t.autoChapters,
                                        meetingAssistance: t.meetingAssistance,
                                        mindMap: t.mindMap,
                                        summarization: t.summarization,
                                        transcription: t.transcription,
                                        questionAnswer: t.questionAnswer,
                                        sentences: t.sentences
                                    });
                                case 21:
                                case "end":
                                    return s.stop()
                                }
                        }
                        ), s)
                    }
                    )))()
                },
                getCommentPermission: function() {
                    var e = this;
                    Promise.all([Re["a"].getUserInfo(), Object(De["g"])({
                        courseId: this.$route.query.courseId
                    })]).then((function(t) {
                        var s = Object(rs["a"])(t, 2)
                          , i = s[0]
                          , n = s[1];
                        e.userInfo = i.bizResult,
                        e.isbizResultShow = n.bizResult
                    }
                    )),
                    Re["a"].getUserInfo().then((function(t) {
                        e.userInfo = t.bizResult
                    }
                    ))
                },
                getTagList: function() {
                    var e = this;
                    te({
                        courseId: this.$route.query.courseId
                    }).then((function(t) {
                        e.tagList = t.data || []
                    }
                    ))
                },
                handleTabChange: function(e) {
                    var t = this
                      , s = e.value
                      , i = localStorage.getItem("courseTouchedTabs") || "[]"
                      , n = JSON.parse(i);
                    n.includes(s) || (n.push(s),
                    localStorage.setItem("courseTouchedTabs", JSON.stringify(n))),
                    this.defaultTabs.forEach((function(e) {
                        "ai" === e.type && (e.isNew = !n.includes(e.value))
                    }
                    ));
                    var a = {
                        courseId: this.courseInfo.courseId,
                        courseType: this.courseInfo.courseType || "NEW_COURSE_CENTER"
                    };
                    "introduction" === s || ("reference" === s ? (this.tabContentLoading = !0,
                    Object(De["j"])(a).then((function(e) {
                        t.tabContentLoading = !1,
                        1001 === +e.code ? t.referenceMaterial = e.bizResult || [] : c["a"].error(e.msg || e.message || e.errorMsg)
                    }
                    )).catch((function(e) {
                        console.log("🚀 ~ err:", e),
                        t.tabContentLoading = !1
                    }
                    ))) : "discussion" === s && (this.queryParams.page.pageNo = 1,
                    this.getDiscussList()))
                },
                load: function() {
                    this.getDiscussList(!0)
                },
                getDiscussList: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (t) {
                        if (this.queryParams.page.pageNo >= this.totalPages)
                            return;
                        this.queryParams.page.pageNo++
                    }
                    this.tabContentLoading = !0,
                    this.queryParams.courseId = this.courseInfo.courseId,
                    this.queryParams.courseType = this.courseInfo.courseType || "NEW_COURSE_CENTER",
                    Object(De["i"])(this.queryParams).then((function(s) {
                        if (e.tabContentLoading = !1,
                        1001 === +s.code)
                            if (e.totalPages = s.bizResult.totalPages,
                            t) {
                                var i = e.discussPage.rows.concat(s.bizResult.rows || []);
                                e.discussPage = Object.assign({}, s.bizResult, {
                                    rows: i
                                })
                            } else
                                e.discussPage = Object.assign({}, s.bizResult);
                        else
                            c["a"].error(s.msg || s.message || s.errorMsg)
                    }
                    )).catch((function(t) {
                        e.tabContentLoading = !1,
                        console.log("🚀 ~ err:", t)
                    }
                    ))
                },
                handleMore: function(e) {
                    var t = this
                      , s = {
                        courseId: this.courseInfo.courseId,
                        page: {
                            id: e.discussId,
                            pageNo: e.discussPage.pageNo + 1,
                            pageSize: e.discussPage.pageSize
                        }
                    };
                    E(s).then((function(s) {
                        0 === +s.status ? t.discussPage.rows.forEach((function(t) {
                            if (t.discussId === e.discussId) {
                                var i = t.discussPage.rows.concat(s.data.rows || []);
                                t.discussPage = Object.assign({}, s.data, {
                                    rows: i
                                })
                            }
                        }
                        )) : c["a"].error(s.msg || s.message || s.errorMsg)
                    }
                    )).catch((function(e) {
                        console.log("🚀 ~ err:", e)
                    }
                    ))
                },
                handleMainDiscuss: function(e) {
                    var t = this
                      , s = new FormData;
                    s.append("discuss.objectId", this.courseInfo.courseId),
                    s.append("discuss.contentPreview", e),
                    s.append("isShare", !0),
                    Object(De["v"])(s).then((function(e) {
                        1001 === +e.code ? (c["a"].success(t.$t("发表成功")),
                        t.queryParams.page.pageNo = 1,
                        t.getDiscussList()) : c["a"].error(e.msg || e.message || e.errorMsg)
                    }
                    )).catch((function(e) {
                        console.log("🚀 ~ err:", e)
                    }
                    ))
                },
                handleDel: function(e) {
                    var t = this;
                    console.log("🚀 ~ id:", e);
                    var s = {
                        discussIds: e,
                        csrfToken: ""
                    };
                    Z(s).then((function(e) {
                        1001 === +e.code ? (c["a"].success(t.$t("删除成功")),
                        t.queryParams.page.pageNo = 1,
                        t.getDiscussList()) : c["a"].error(e.msg || e.message || e.errorMsg)
                    }
                    )).catch((function(e) {
                        console.log("🚀 ~ err:", e)
                    }
                    ))
                },
                handleSubDiscuss: function(e, t) {
                    var s = this
                      , i = new FormData;
                    i.append("discuss.objectId", this.courseInfo.courseId),
                    i.append("discuss.contentPreview", e),
                    i.append("discuss.idPath", t + "."),
                    Object(De["u"])(i).then((function(e) {
                        1001 === +e.code ? (c["a"].success(s.$t("回复成功")),
                        s.queryParams.page.pageNo = 1,
                        s.getDiscussList()) : c["a"].error(e.msg || e.message || e.errorMsg)
                    }
                    )).catch((function(e) {
                        console.log("🚀 ~ err:", e)
                    }
                    ))
                },
                tagResourceClick: function() {}
            }
        }
          , nn = sn
          , an = (s("45cb"),
        Object(y["a"])(nn, ns, as, !1, null, "4c50639a", null))
          , rn = an.exports
          , on = s("1431");
        function cn(e, t) {
            var s = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                s.push.apply(s, i)
            }
            return s
        }
        function un(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? cn(Object(s), !0).forEach((function(t) {
                    Object(r["a"])(e, t, s[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : cn(Object(s)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                }
                ))
            }
            return e
        }
        var ln = Object.keys(window).find((function(e) {
            return e.toLowerCase().includes("quark")
        }
        ))
          , dn = navigator.userAgent.toLowerCase().includes("quark") || ln
          , hn = {
            components: {
                CourseHeader: I,
                CourseMask: pe,
                CoursePretest: xe,
                CoursePlay: jt,
                CourseEvaluate: Yt,
                CourseExam: is,
                CourseMore: rn,
                CourseFaceRecognition: on["a"]
            },
            props: {},
            provide: function() {
                var e = this;
                return {
                    faceControl: {
                        isOpenCarema: function() {
                            return e.openCarema
                        },
                        closeCarema: function() {
                            e.openCarema = !1,
                            e.$cookies.set("openCarema", "false")
                        }
                    }
                }
            },
            data: function() {
                var e = this;
                return {
                    stepsQueue: {
                        COURSE_PRETEST: this.$t("课前测试"),
                        COURSE_COURSE_STUDY: this.$t("课程学习"),
                        COURSE_EVALUATE: this.$t("课程评估"),
                        COURSE_EXAM: this.$t("课后测试"),
                        COURSE_EMS_EXAM: this.$t("课程考试")
                    },
                    showMask: !0,
                    pageLoading: !1,
                    courseData: {},
                    isSignInFlag: !1,
                    faceVisible: !1,
                    userId: "",
                    qrcode: null,
                    stepsData: null,
                    studyRate: 0,
                    learningStep: "",
                    isFullScreen: !1,
                    unfinishedCoursewareModalVisible: !1,
                    currentResourceInfo: null,
                    currentLang: "",
                    aiLearnData: {},
                    translatingAiLearnData: {},
                    capIns: null,
                    activeCaptionId: "",
                    captionEvent: function(t, s) {
                        "init" === t && (e.capIns = s),
                        "CAPTION:selectListItem" === t && (e.activeCaptionId = s.data.id)
                    },
                    isPublished: !1,
                    translateLoading: !1,
                    loadingMessage: null,
                    transltingTimer: null,
                    fileSetting: null,
                    isOpenStudyAssist: !1,
                    openCarema: "false" !== this.$cookies.get("openCarema")
                }
            },
            computed: {
                isTransLating: function() {
                    var e = this;
                    return !!this.translatingAiLearnData && Object.keys(this.translatingAiLearnData).some((function(t) {
                        var s = e.translatingAiLearnData[t];
                        return s && s.some((function(e) {
                            return "translating" === e.status
                        }
                        ))
                    }
                    ))
                },
                showStudyRate: function() {
                    return "COURSE_COURSE_STUDY" === this.learningStep
                },
                isPreview: function() {
                    return "preview" === this.$route.query.from || this.isOpenFromAdmin
                },
                courseInfo: function() {
                    return this.courseData.courseInfo || {}
                },
                lastStep: function() {
                    return this.courseData && this.courseData.courseSteps && this.courseData.courseSteps.length ? this.courseData.courseSteps[this.courseData.courseSteps.length - 1] : ""
                },
                stepToGetScore: function() {
                    return this.courseInfo.stepToGetScore
                },
                courseSteps: function() {
                    var e = this;
                    if (!this.courseData.courseSteps)
                        return [];
                    var t = {};
                    this.courseData.courseSteps.forEach((function(s) {
                        t[s] = e.stepsQueue[s]
                    }
                    ));
                    var s = Object.keys(t);
                    if (!this.stepsData)
                        return s.map((function(i, n) {
                            return {
                                appName: t[i],
                                isComplete: !1,
                                isLearning: e.learningStep === i,
                                isCanEnter: !1,
                                isLast: n === s.length - 1
                            }
                        }
                        ));
                    var i = s.map((function(i, n) {
                        var a = e.stepsData && e.stepsData.appIdentifierList && e.stepsData.appIdentifierList.find((function(e) {
                            return e.appType === i
                        }
                        ));
                        if (!a)
                            return {};
                        if (a.isComplete = s.indexOf(i) < s.indexOf(e.currentStep),
                        "COURSE_EMS_EXAM" === i && console.log("🚀 ~ step:", i),
                        "COURSE_EXAM" === i && (a.isComplete = e.stepsData.examPassed),
                        0 === n)
                            a.isCanEnter = !0;
                        else {
                            var r = e.stepsData.appIdentifierList.find((function(e) {
                                return e.appType === s[n - 1]
                            }
                            ));
                            a.isCanEnter = r && r.isComplete,
                            a.isCanEnter || a.appType === e.stepsData.userRelStep && (a.isCanEnter = !0)
                        }
                        return un(un({}, a), {}, {
                            isLearning: i === e.learningStep,
                            appName: t[i],
                            isLast: n === s.length - 1
                        })
                    }
                    ));
                    return i
                },
                currentStep: function() {
                    return this.stepsData && this.stepsData.willGoStep
                },
                isOpenFromAdmin: function() {
                    return "admin" === this.$route.query.openFrom
                },
                showAiLearn: function() {
                    return !0
                },
                currentResourceAiLearnData: function() {
                    return this.currentResourceInfo && this.currentResourceInfo.resourceId ? this.aiLearnData[this.currentResourceInfo.resourceId] : null
                },
                currentSourceLangId: function() {
                    var e, t = this;
                    return this.currentResourceAiLearnData && (null === (e = this.currentResourceAiLearnData.find((function(e) {
                        return e.language === t.currentSourceLang
                    }
                    ))) || void 0 === e ? void 0 : e.id) || ""
                },
                currentSourceLang: function() {
                    return console.log("🚀🚀🚀 ~ this.currentResourceAiLearnData:", this.currentResourceAiLearnData),
                    this.currentResourceAiLearnData && this.currentResourceAiLearnData.length ? this.currentResourceAiLearnData[0].sourceLanguage : ""
                },
                currentLangAiLearnData: function() {
                    var e = this;
                    return console.log("🚀 ~ this.currentLang:", this.currentLang),
                    console.log("🚀 ~ this.currentResourceAiLearnData:", this.currentResourceAiLearnData),
                    this.currentResourceAiLearnData && this.currentLang ? this.currentResourceAiLearnData.find((function(t) {
                        return t.language === e.currentLang
                    }
                    )) : null
                },
                aiLangOptions: function() {
                    var e = this
                      , t = [{
                        label: "简体中文",
                        value: "cn",
                        isSourceLang: !1,
                        isExist: !1
                    }, {
                        label: "English",
                        value: "en",
                        isSourceLang: !1,
                        isExist: !1
                    }, {
                        label: "日本語",
                        value: "ja",
                        isSourceLang: !1,
                        isExist: !1
                    }, {
                        label: "한국어",
                        value: "ko",
                        isSourceLang: !1,
                        isExist: !1
                    }, {
                        label: "Français",
                        value: "fr",
                        isSourceLang: !1,
                        isExist: !1
                    }, {
                        label: "Русский",
                        value: "ru",
                        isSourceLang: !1,
                        isExist: !1
                    }, {
                        label: "ไทย",
                        value: "th",
                        isSourceLang: !1,
                        isExist: !1
                    }, {
                        label: "Tiếng Việt",
                        value: "vi",
                        isSourceLang: !1,
                        isExist: !1
                    }, {
                        label: "Español",
                        value: "es",
                        isSourceLang: !1,
                        isExist: !1
                    }, {
                        label: "العربية",
                        value: "ar",
                        isSourceLang: !1,
                        isExist: !1
                    }, {
                        label: "Bahasa Indonesia",
                        value: "id",
                        isSourceLang: !1,
                        isExist: !1
                    }];
                    return t.forEach((function(t) {
                        e.currentSourceLang === t.value && (t.isSourceLang = !0)
                    }
                    )),
                    this.currentResourceAiLearnData && this.currentResourceAiLearnData.length && this.currentResourceAiLearnData.forEach((function(e) {
                        t.forEach((function(t) {
                            e.language === t.value && (t.isExist = !0)
                        }
                        ))
                    }
                    )),
                    t
                }
            },
            watch: {
                faceVisible: function(e) {
                    e && this.pauseCourseForSignIn()
                }
            },
            created: function() {
                var e = this;
                return Object(a["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                if (console.log("🚀 ~ this.$store.state.user.loginInfo:", e.$store.state.user.loginInfo),
                                !e.$store.state.user.loginInfo.openAi) {
                                    t.next = 4;
                                    break
                                }
                                return t.next = 4,
                                e.getTwData();
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            mounted: function() {
                var e = this
                  , t = this.$route.query.courseId;
                ee({
                    courseId: t
                }).then((function(t) {
                    if (t.msg && "TIP" === t.msg) {
                        var s = e.$t("您获得") + t.data.getScore + e.$t("学分，") + t.data.coursePeriod + e.$t("学时！");
                        t.data.transAmount && 0 !== +t.data.transAmount && (s += t.data.transAmount + t.data.dimLabel),
                        o["a"].success({
                            title: t.data.msgInfo,
                            content: s,
                            onOk: function() {
                                e.onMounted()
                            }
                        })
                    } else
                        e.onMounted()
                }
                )),
                this.getCourseSystemSetingFieldMap()
            },
            beforeDestroy: function() {
                var e, t;
                this.initListenEvent(!1),
                this.stopElsHeartbeat(),
                this._elsConflictTimer && clearTimeout(this._elsConflictTimer);
                var s = (null === (e = this.courseInfo) || void 0 === e ? void 0 : e.courseId) || (null === (t = this.$route) || void 0 === t || null === (t = t.query) || void 0 === t ? void 0 : t.courseId);
                s && (navigator.sendBeacon("/els/html/guangsu/courseStudyItem/saveAndLeave", new Blob([JSON.stringify({
                    courseId: s
                })],{
                    type: "application/json"
                })),
                navigator.sendBeacon("/els/html/courseStudyItem/courseStudyItem.exitStudyForRms.do?courseId=" + s))
            },
            methods: {
                handlePublish: function() {
                    var e = this;
                    o["a"].confirm({
                        zIndex: 1100,
                        content: this.isPublished ? this.$t("确认回收吗？") : this.$t("确认发布吗？"),
                        okText: this.$t("确认"),
                        cancelText: this.$t("取消"),
                        onOk: function() {
                            e.pageLoading = !0,
                            e.isPublished && ce({
                                resource_id: e.$route.query.courseId
                            });
                            var t = {
                                courseId: e.$route.query.courseId,
                                isPublish: !e.isPublished
                            };
                            ae(t).then((function() {
                                e.pageLoading = !1,
                                e.isPublished = !e.isPublished,
                                c["a"].success(e.$t("操作成功!"))
                            }
                            ))
                        }
                    })
                },
                onEditAiLearn: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.transltingTimer && (clearTimeout(e.transltingTimer),
                                    e.transltingTimer = null),
                                    s = {
                                        courseId: e.$route.query.courseId,
                                        status: "translating"
                                    },
                                    t.next = 4,
                                    se(s);
                                case 4:
                                    i = t.sent,
                                    e.translatingAiLearnData = i.data || {},
                                    e.isTransLating ? e.transltingTimer = setTimeout((function() {
                                        e.onEditAiLearn()
                                    }
                                    ), 3e3) : e.getAiLearnData();
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                handleChangeLang: function(e, t) {
                    this.currentLang = e
                },
                handleTranslateLang: function(e, t) {
                    var s = this;
                    this.isOpenFromAdmin && (this.$refs.CourseMoreRef.$refs.SmartViewRef.isEditKeypoint || this.$refs.CourseMoreRef.$refs.SmartViewRef.isEditOverview || this.$refs.CourseMoreRef.$refs.SmartViewRef.$refs.SummaryRef.isEdit) ? c["a"].error(this.$t("请先完成编辑后再进行翻译！")) : o["a"].confirm({
                        zIndex: 1100,
                        content: this.$t("无该语言数据，是否进行翻译？"),
                        okText: this.$t("确认"),
                        cancelText: this.$t("取消"),
                        onOk: function() {
                            var t = {
                                courseId: s.$route.query.courseId,
                                language: e
                            };
                            oe(t).then((function() {
                                s.startTranslate(e)
                            }
                            ))
                        }
                    })
                },
                isLeagueAiData: function(e) {
                    var t = ["autoChapters", "meetingAssistance", "mindMap", "summarization", "transcription", "questionsAnswer"];
                    return t.every((function(t) {
                        return !!e[t]
                    }
                    ))
                },
                getTwData: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s, i, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.pageLoading = !0,
                                    s = {
                                        courseId: e.$route.query.courseId,
                                        status: "success"
                                    },
                                    t.next = 4,
                                    re(s);
                                case 4:
                                    return i = t.sent,
                                    n = i.data,
                                    console.log("🚀 ~ data:", n),
                                    e.isPublished = n.isPublish,
                                    e.isOpenStudyAssist = n.openStudyAssist,
                                    t.next = 11,
                                    e.getAiLearnData();
                                case 11:
                                    e.isOpenFromAdmin && e.onEditAiLearn(),
                                    e.pageLoading = !1;
                                case 13:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                getAiLearnData: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return s = {
                                        courseId: e.$route.query.courseId,
                                        status: "success"
                                    },
                                    t.next = 3,
                                    se(s);
                                case 3:
                                    i = t.sent,
                                    e.aiLearnData = i.data || {},
                                    console.log("🚀 🚀 ~ this.aiLearnData:", e.aiLearnData),
                                    e.$nextTick((function() {
                                        e.currentLang || e.resourceChange(e.currentResourceInfo)
                                    }
                                    ));
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                startTranslate: function(e) {
                    var t = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function s() {
                        var i, n, a;
                        return regeneratorRuntime.wrap((function(s) {
                            while (1)
                                switch (s.prev = s.next) {
                                case 0:
                                    return t.transltingTimer && (clearTimeout(t.transltingTimer),
                                    t.transltingTimer = null),
                                    t.translateLoading = !0,
                                    i = {
                                        courseId: t.$route.query.courseId,
                                        status: "generating"
                                    },
                                    s.next = 5,
                                    se(i);
                                case 5:
                                    if (n = s.sent,
                                    a = n.data && Object.keys(n.data || {}).some((function(e) {
                                        var t = n.data[e];
                                        return t && t.some((function(e) {
                                            return "generating" === e.status
                                        }
                                        ))
                                    }
                                    )),
                                    !a) {
                                        s.next = 11;
                                        break
                                    }
                                    t.transltingTimer = setTimeout((function() {
                                        t.startTranslate(e)
                                    }
                                    ), 3e3),
                                    s.next = 16;
                                    break;
                                case 11:
                                    return s.next = 13,
                                    t.getAiLearnData();
                                case 13:
                                    t.currentLang = e,
                                    t.translateLoading = !1,
                                    c["a"].success(t.$t("翻译完成！"));
                                case 16:
                                case "end":
                                    return s.stop()
                                }
                        }
                        ), s)
                    }
                    )))()
                },
                resourceChange: function(e) {
                    this.$refs.CourseMoreRef && (this.$refs.CourseMoreRef.sentences = []),
                    this.currentResourceInfo = e,
                    console.log("🚀🚀 ~ this.currentResourceInfo:", this.currentResourceInfo),
                    this.currentLang = this.currentSourceLang,
                    console.log("🚀🚀 ~ this.currentLang:", this.currentLang)
                },
                tagResourceClick: function(e) {
                    this.$refs.coursePlay && this.$refs.coursePlay.tagResourceClick(e)
                },
                seek: function(e) {
                    this.$refs.coursePlay && this.$refs.coursePlay.aiSeek(e)
                },
                onMounted: function() {
                    this.init(),
                    this.initListenEvent(!0),
                    this.startElsHeartbeat(!0)
                },
                initListenEvent: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    e ? (window.addEventListener("unload", this.handleUnload),
                    window.addEventListener("pagehide", this.handleUnload)) : (window.removeEventListener("unload", this.handleUnload),
                    window.removeEventListener("pagehide", this.handleUnload))
                },
                handleUnload: function() {
                    var e, t, s = (null === (e = this.courseInfo) || void 0 === e ? void 0 : e.courseId) || (null === (t = this.$route) || void 0 === t || null === (t = t.query) || void 0 === t ? void 0 : t.courseId);
                    s && (navigator.sendBeacon("/els/html/guangsu/courseStudyItem/saveAndLeave", new Blob([JSON.stringify({
                        courseId: s
                    })],{
                        type: "application/json"
                    })),
                    navigator.sendBeacon("/els/html/courseStudyItem/courseStudyItem.exitStudyForRms.do?courseId=" + s))
                },
                handleClose: function() {
                    this.handleUnload(),
                    window.close()
                },
                startElsHeartbeat: function(e) {
                    var t = this;
                    "preview" === this.$route.query.from || this.isOpenFromAdmin || window.self === window.top && (this.stopElsHeartbeat(),
                    e && this._doElsHeartbeat(),
                    this._elsHeartbeatTimer = setInterval((function() {
                        t._doElsHeartbeat()
                    }
                    ), 6e4))
                },
                _doElsHeartbeat: function() {
                    var e, t, s, i = this, n = (null === (e = this.courseInfo) || void 0 === e ? void 0 : e.courseId) || (null === (t = this.$route) || void 0 === t || null === (t = t.query) || void 0 === t ? void 0 : t.courseId);
                    n && fetch("/els/html/guangsu/courseStudyItem/studyHeartbeat?courseId=" + n + "&from=" + ((null === (s = this.$route) || void 0 === s || null === (s = s.query) || void 0 === s ? void 0 : s.from) || "")).then((function(e) {
                        return e.json()
                    }
                    )).then((function(e) {
                        var t = e.data || e.extraModel;
                        t && t.isCourseCheat && i._handleElsStudyConflict(t)
                    }
                    )).catch((function() {}
                    ))
                },
                _handleElsStudyConflict: function(e) {
                    this.stopElsHeartbeat();
                    try {
                        var t;
                        null === (t = this.$refs) || void 0 === t || null === (t = t.coursePlay) || void 0 === t || null === (t = t.player) || void 0 === t || t.pause(),
                        document.querySelectorAll("video").forEach((function(e) {
                            return e.pause()
                        }
                        )),
                        document.querySelectorAll("audio").forEach((function(e) {
                            return e.pause()
                        }
                        ))
                    } catch (fn) {}
                    var s = this
                      , i = this.$createElement;
                    o["a"].confirm({
                        zIndex: 9999,
                        closable: !1,
                        maskClosable: !1,
                        keyboard: !1,
                        okCancel: !1,
                        okText: this.$t("关闭窗口"),
                        content: i("div", [this.$t("你正在学习课程：{courseTitle}，请勿同时学习多门课程。", {
                            courseTitle: e.courseTitle || ""
                        })]),
                        onOk: function() {
                            window.close(),
                            setTimeout((function() {
                                s.$router.back()
                            }
                            ), 300)
                        }
                    })
                },
                stopElsHeartbeat: function() {
                    this._elsHeartbeatTimer && (clearInterval(this._elsHeartbeatTimer),
                    this._elsHeartbeatTimer = null)
                },
                enterCourse: function() {
                    this.nextStep(!0, !0, !0)
                },
                preStep: function() {
                    var e = this;
                    console.log(this.currentStep),
                    console.log(this.learningStep);
                    var t = this.courseSteps.findIndex((function(t) {
                        return t.appType === e.learningStep
                    }
                    ));
                    console.log(t),
                    this.handleStep(this.courseSteps[t - 1])
                },
                nextStep: function(e, t, s) {
                    var i = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function n() {
                        return regeneratorRuntime.wrap((function(n) {
                            while (1)
                                switch (n.prev = n.next) {
                                case 0:
                                    if (console.log(i.learningStep),
                                    !e || !i.interceptUnfinishedCourseware()) {
                                        n.next = 3;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 3:
                                    return n.next = 5,
                                    i.getStepsData(s);
                                case 5:
                                    e && (i.isFullScreen = !1,
                                    "COURSE_EMS_EXAM" !== i.stepsData.userRelStep || t || i.goEmsExam(),
                                    i.inStep(i.currentStep));
                                case 6:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))()
                },
                nextStepByOrder: function() {
                    var e = this;
                    console.log(this.learningStep),
                    console.log(this.currentStep);
                    var t = this.courseSteps.findIndex((function(t) {
                        return t.appType === e.learningStep
                    }
                    ));
                    this.interceptUnfinishedCourseware() || this.handleStep(this.courseSteps[t + 1])
                },
                handleStep: function(e) {
                    var t = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function s() {
                        var i, n;
                        return regeneratorRuntime.wrap((function(s) {
                            while (1)
                                switch (s.prev = s.next) {
                                case 0:
                                    if ("COURSE_COURSE_STUDY" === e.appType || !t.interceptUnfinishedCourseware()) {
                                        s.next = 2;
                                        break
                                    }
                                    return s.abrupt("return");
                                case 2:
                                    if (!e.isCanEnter) {
                                        s.next = 6;
                                        break
                                    }
                                    "COURSE_EMS_EXAM" === e.appType ? t.goEmsExam() : t.inStep(e.appType),
                                    s.next = 35;
                                    break;
                                case 6:
                                    return s.next = 8,
                                    t.getStepsData();
                                case 8:
                                    if (i = !1,
                                    "COURSE_COURSE_STUDY" !== t.learningStep) {
                                        s.next = 13;
                                        break
                                    }
                                    t.stepsData && t.stepsData.courseStudyRecord && "100" == t.stepsData.courseStudyRecord.currentStepRate && (i = !0),
                                    s.next = 34;
                                    break;
                                case 13:
                                    if ("COURSE_EXAM" !== t.learningStep) {
                                        s.next = 26;
                                        break
                                    }
                                    if (n = t.courseSteps.find((function(e) {
                                        return "COURSE_EVALUATE" === e.appType
                                    }
                                    )),
                                    !n || !t.stepsData || t.stepsData.hasFinishEvaluate) {
                                        s.next = 18;
                                        break
                                    }
                                    return s.next = 18,
                                    t.getStepsData(!1, {
                                        willGoStep: "COURSE_EVALUATE",
                                        courseType: "NEW_COURSE_CENTER"
                                    });
                                case 18:
                                    if (!n || !t.stepsData || t.stepsData.hasFinishEvaluate) {
                                        s.next = 23;
                                        break
                                    }
                                    return t.preStep(),
                                    s.abrupt("return");
                                case 23:
                                    i = !0;
                                case 24:
                                    s.next = 34;
                                    break;
                                case 26:
                                    if ("COURSE_EVALUATE" !== t.learningStep) {
                                        s.next = 34;
                                        break
                                    }
                                    if (!t.stepsData || !t.stepsData.hasFinishEvaluate) {
                                        s.next = 31;
                                        break
                                    }
                                    i = !0,
                                    s.next = 34;
                                    break;
                                case 31:
                                    return s.next = 33,
                                    t.getStepsData(!1, {
                                        willGoStep: "COURSE_EVALUATE",
                                        courseType: "NEW_COURSE_CENTER"
                                    });
                                case 33:
                                    t.stepsData && t.stepsData.hasFinishEvaluate && (i = !0);
                                case 34:
                                    i && ("COURSE_EMS_EXAM" === e.appType ? t.goEmsExam() : t.inStep(e.appType));
                                case 35:
                                case "end":
                                    return s.stop()
                                }
                        }
                        ), s)
                    }
                    )))()
                },
                inStep: function(e) {
                    var t = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function s() {
                        var i, n;
                        return regeneratorRuntime.wrap((function(s) {
                            while (1)
                                switch (s.prev = s.next) {
                                case 0:
                                    if (t.showMask = !1,
                                    t.learningStep = e,
                                    "COURSE_EXAM" !== e) {
                                        s.next = 6;
                                        break
                                    }
                                    if (!dn) {
                                        s.next = 6;
                                        break
                                    }
                                    return t.preStep(),
                                    s.abrupt("return", t.$message.error(t.$t("夸克浏览器参与课后测试/课程考试目前存在兼容性问题，建议使用谷歌浏览器")));
                                case 6:
                                    if (i = e === t.currentStep,
                                    "COURSE_PRETEST" !== e) {
                                        s.next = 11;
                                        break
                                    }
                                    t.$nextTick((function() {
                                        i ? t.$refs.coursePretest.init() : t.$refs.coursePretest.view()
                                    }
                                    )),
                                    s.next = 26;
                                    break;
                                case 11:
                                    if ("COURSE_EVALUATE" !== e) {
                                        s.next = 15;
                                        break
                                    }
                                    t.$nextTick((function() {
                                        t.$refs.courseEvaluate.init()
                                    }
                                    )),
                                    s.next = 26;
                                    break;
                                case 15:
                                    if ("COURSE_EXAM" !== e) {
                                        s.next = 26;
                                        break
                                    }
                                    if (n = t.courseSteps.find((function(e) {
                                        return "COURSE_EVALUATE" === e.appType
                                    }
                                    )),
                                    !n || !t.stepsData || t.stepsData.hasFinishEvaluate) {
                                        s.next = 20;
                                        break
                                    }
                                    return s.next = 20,
                                    t.getStepsData(!1, {
                                        willGoStep: "COURSE_EVALUATE",
                                        courseType: "NEW_COURSE_CENTER"
                                    });
                                case 20:
                                    if (!n || !t.stepsData || t.stepsData.hasFinishEvaluate) {
                                        s.next = 25;
                                        break
                                    }
                                    return t.preStep(),
                                    s.abrupt("return");
                                case 25:
                                    t.$nextTick((function() {
                                        t.$refs.courseExam.init()
                                    }
                                    ));
                                case 26:
                                case "end":
                                    return s.stop()
                                }
                        }
                        ), s)
                    }
                    )))()
                },
                examNextStep: function(e) {
                    this.nextStep(),
                    e && this.goEmsExam()
                },
                goEmsExam: function() {
                    var e = this;
                    if (dn)
                        return this.$message.error(this.$t("夸克浏览器参与课后测试/课程考试目前存在兼容性问题，建议使用谷歌浏览器"));
                    var t = {
                        courseId: this.courseData.courseId,
                        examId: this.courseData.examId
                    };
                    z(t).then((function(t) {
                        var s = location.origin;
                        window.open(s + "/ems/html/examCenter/examDetailLeft.do?courseId=".concat(e.courseData.courseId, "&examType=NATIVE&sourceType=view&examId=") + e.courseData.examId + "&resourceType=lcms_course_manage&eln_session_id=" + window.$cookies.get("eln_session_id") + "&elsSign=" + window.$cookies.get("eln_session_id"), "_blank")
                    }
                    ))
                },
                toggleFullScreen: function() {
                    this.isFullScreen = !this.isFullScreen
                },
                init: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.isPreview) {
                                        t.next = 4;
                                        break
                                    }
                                    e.getCourseData(),
                                    t.next = 9;
                                    break;
                                case 4:
                                    return t.next = 6,
                                    le["c"].getUserInfo();
                                case 6:
                                    s = t.sent,
                                    e.userId = s.bizResult.userId,
                                    Promise.all([e.getCourseData(), e.getStepsData()]).then((function() {
                                        e.pageLoading = !1
                                    }
                                    )).catch((function() {
                                        e.pageLoading = !1
                                    }
                                    ));
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                getStepsData: function(e, t) {
                    var s = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function i() {
                        var n, a;
                        return regeneratorRuntime.wrap((function(i) {
                            while (1)
                                switch (i.prev = i.next) {
                                case 0:
                                    return n = {},
                                    e && (n.studyType = "STUDY"),
                                    t && (n = un(un({}, n), t)),
                                    i.next = 5,
                                    Q(un({
                                        courseId: s.$route.query.courseId
                                    }, n));
                                case 5:
                                    a = i.sent,
                                    console.log("🚀 ~ res:", a),
                                    0 === +a.status && (s.stepsData = a.data,
                                    console.log("🚀 ~ this.stepsData:", s.stepsData));
                                case 8:
                                case "end":
                                    return i.stop()
                                }
                        }
                        ), i)
                    }
                    )))()
                },
                updateStudyRate: function(e) {
                    this.studyRate = e
                },
                interceptUnfinishedCourseware: function() {
                    var e = this;
                    if ("COURSE_COURSE_STUDY" !== this.learningStep)
                        return !1;
                    var t = this.$refs.coursePlay;
                    return !!(t && t.getFirstUnfinishedCourseware && t.getFirstUnfinishedCourseware()) && (this.unfinishedCoursewareModalVisible || (this.unfinishedCoursewareModalVisible = !0,
                    o["a"].confirm({
                        title: this.$t("提示"),
                        content: this.$t("当前存在未完成的课件，请完成后继续其他步骤。"),
                        okText: this.$t("继续学习"),
                        cancelText: this.$t("取消"),
                        onCancel: function() {
                            e.unfinishedCoursewareModalVisible = !1
                        },
                        onOk: function() {
                            e.unfinishedCoursewareModalVisible = !1,
                            t.locateFirstUnfinishedCourseware()
                        }
                    })),
                    !0)
                },
                showCourseMask: function() {
                    this.showMask = !0
                },
                previewCourse: function() {
                    var e = this.$route.fullPath.split("?")[1] + "&from=preview";
                    window.open("".concat(location.origin, "/courseSetting/courseLearning/play?").concat(e), "_self")
                },
                refreshCourseData: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return s = {
                                        courseId: e.$route.query.courseId,
                                        courseType: "NEW_COURSE_CENTER"
                                    },
                                    t.next = 3,
                                    b(s);
                                case 3:
                                    i = t.sent,
                                    0 === +i.status && (e.courseData = i.data);
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                getCourseData: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return s = {
                                        courseId: e.$route.query.courseId,
                                        courseType: "NEW_COURSE_CENTER"
                                    },
                                    t.next = 3,
                                    b(s);
                                case 3:
                                    if (i = t.sent,
                                    0 !== +i.status) {
                                        t.next = 14;
                                        break
                                    }
                                    if (e.courseData = i.data,
                                    document.title = e.courseData.courseInfo.courseTitle,
                                    e.showMask = !0,
                                    !e.isPreview) {
                                        t.next = 11;
                                        break
                                    }
                                    return e.$nextTick((function() {
                                        e.showMask = !1,
                                        e.learningStep = "COURSE_COURSE_STUDY"
                                    }
                                    )),
                                    t.abrupt("return");
                                case 11:
                                    e.courseData.hasTouristUser ? e.showMask = !0 : e.courseData.isSelected ? e.courseData.courseStudyRecord && e.courseData.courseStudyRecord.limited ? e.showMask = !0 : e.courseData.courseStudyRecord.getScore ? e.canGoStudy() : e.courseData.previewLimit ? e.showMask = !0 : e.canGoStudy() : e.showMask = !0,
                                    t.next = 15;
                                    break;
                                case 14:
                                    e.$message.error(i.msg);
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                canGoStudy: function() {
                    var e = this;
                    B().then((function(t) {
                        t && !e.isSignInFlag ? 1 === t ? e.initFaceSignIn() : 2 === t && e.initSignIn() : e.checkUserCanEnterCourse()
                    }
                    ))
                },
                pauseCourseForSignIn: function() {
                    var e = this.$refs.coursePlay;
                    e && e.pauseForExternalModal && e.pauseForExternalModal()
                },
                initFaceSignIn: function() {
                    this.pauseCourseForSignIn(),
                    this.faceVisible = !0,
                    this.openCarema || this.initQrcode()
                },
                closeCarema: function() {
                    this.openCarema = !1,
                    this.$cookies.set("openCarema", "false"),
                    this.initQrcode()
                },
                initQrcode: function() {
                    var e = this;
                    this.$nextTick((function() {
                        e.qrcode = new l.a(document.getElementById("erweima-img-index"),{
                            text: "",
                            width: 200,
                            height: 200
                        }),
                        e.webSK()
                    }
                    ))
                },
                handleFaceSignInSuccess: function() {
                    var e = this;
                    V({
                        courseId: this.courseData.courseId,
                        eventType: "COURSE_SIGN_IN"
                    }).then((function(t) {
                        t ? (e.isSignInFlag = !0,
                        e.faceVisible = !1,
                        c["a"].success(e.$t("签到成功")),
                        e.checkUserCanEnterCourse()) : (e.isSignInFlag = !1,
                        c["a"].error(e.$t("签到失败")),
                        location.reload(!0))
                    }
                    ))
                },
                handleFaceSignInCancel: function() {
                    this.isSignInFlag = !1,
                    this.faceVisible = !1
                },
                initSignIn: function() {
                    var e = this;
                    o["a"].confirm({
                        class: "apaas-confirm",
                        title: this.$t("课程签到"),
                        content: this.$t("是否签到？"),
                        okText: this.$t("签到"),
                        cancelText: this.$t("退出签到"),
                        onOk: function() {
                            V({
                                courseId: e.courseData.courseId,
                                eventType: "COURSE_SIGN_IN"
                            }).then((function(t) {
                                t ? (e.isSignInFlag = !0,
                                c["a"].success(e.$t("签到成功")),
                                e.checkUserCanEnterCourse()) : (e.isSignInFlag = !1,
                                c["a"].error(e.$t("签到失败")),
                                location.reload(!0))
                            }
                            ))
                        },
                        onCancel: function() {
                            e.isSignInFlag = !1
                        }
                    })
                },
                checkUserCanEnterCourse: function() {
                    var e = this;
                    q({
                        courseId: this.courseData.courseId
                    }).then((function(t) {
                        t && t.success ? e.enterCourse() : c["a"].error(t.message)
                    }
                    ))
                },
                randomWord: function(e, t, s) {
                    var i = ""
                      , n = t
                      , a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                    e && (n = Math.round(Math.random() * (s - t)) + t);
                    for (var r = 0; r < n; r++) {
                        var o = Math.round(Math.random() * (a.length - 1));
                        i += a[o]
                    }
                    return i
                },
                webSK: function() {
                    var e, t, s = this, i = this.randomWord(!1, 10), n = window.location.origin, a = this.randomWord(!1, 32);
                    e = new h.a(n + "/biz-oim/webSocket/handler?deviceId=" + a);
                    var r = window.$cookies.get("_local");
                    e.onopen = function(n) {
                        var a = '{"code" : 1, "params" : {"qrCode" : "' + i + '", "oldQrCode" : "", "local" : "' + r + '", "type" : "QR_STUDYCOURSE_SIGN", "userId" :"' + s.userId + '" }}';
                        e.send(a),
                        e.onmessage = function(e) {
                            console.log("接收客户端返回信息");
                            var i = JSON.parse(e.data);
                            console.log(i),
                            1 == i.code ? (t = i.bizResult + "&userId=" + s.userId,
                            console.log("erweima", t),
                            s.qrcode.makeCode(t),
                            document.getElementById("erweima-img-index").setAttribute("title", "")) : 2 == i.code || (6 == i.code ? (s.isSignInFlag = !1,
                            c["a"].error(s.$t("签到失败"))) : 7 == i.code ? (console.log("扫码成功"),
                            s.isSignInFlag = !0,
                            c["a"].success(s.$t("签到成功")),
                            s.checkUserCanEnterCourse(),
                            s.faceVisible = !1) : 4 == i.code && !0)
                        }
                        ,
                        e.onclose = function(e) {}
                        ,
                        e.onerror = function(e) {
                            c["a"].error("WebSocket连接发生错误，请刷新页面！")
                        }
                    }
                },
                getCourseSystemSetingFieldMap: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var s;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Object(De["r"])();
                                case 2:
                                    s = t.sent,
                                    s.success && s.data && (e.fileSetting = s.data);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            }
        }
          , mn = hn
          , pn = (s("8847"),
        s("2df7"),
        Object(y["a"])(mn, i, n, !1, null, "3f930dc7", null));
        t["default"] = pn.exports
    },
    fc3e: function(e, t, s) {
        "use strict";
        s("934f")
    },
    fc8a: function(e, t, s) {
        "use strict";
        s("c80b")
    },
    ffa9: function(e, t, s) {}
}]);

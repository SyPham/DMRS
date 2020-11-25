(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! F:\dmr\dmr-spa\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2zK7":
    /*!********************************************!*\
      !*** ./src/app/_core/_model/pagination.ts ***!
      \********************************************/

    /*! exports provided: PaginatedResult */

    /***/
    function zK7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginatedResult", function () {
        return PaginatedResult;
      });

      var PaginatedResult = function PaginatedResult() {
        _classCallCheck(this, PaginatedResult);
      };
      /***/

    },

    /***/
    "3zqh":
    /*!****************************************************************************!*\
      !*** ./src/app/views/layout/header/avatar-modal/avatar-modal.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AvatarModalComponent */

    /***/
    function zqh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvatarModalComponent", function () {
        return AvatarModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_core_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_core/_service/user.service */
      "MAxt");
      /* harmony import */


      var src_app_core_service_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_core/_service/header.service */
      "4IKR");
      /* harmony import */


      var src_app_core_service_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_core/_service/alertify.service */
      "HJFG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-inputs */
      "QYJQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-image-cropper */
      "rIor");

      var _c0 = ["defaultupload"];

      function AvatarModalComponent_image_cropper_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "image-cropper", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function AvatarModalComponent_image_cropper_12_Template_image_cropper_imageCropped_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.imageCropped($event);
          })("imageLoaded", function AvatarModalComponent_image_cropper_12_Template_image_cropper_imageLoaded_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.imageLoaded();
          })("cropperReady", function AvatarModalComponent_image_cropper_12_Template_image_cropper_cropperReady_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.cropperReady();
          })("loadImageFailed", function AvatarModalComponent_image_cropper_12_Template_image_cropper_loadImageFailed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.loadImageFailed();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChangedEvent", ctx_r1.imageChangedEvent)("maintainAspectRatio", true)("aspectRatio", 4 / 3);
        }
      }

      function AvatarModalComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Preview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.croppedImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function AvatarModalComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Preview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.croppedImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function AvatarModalComponent_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvatarModalComponent_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AvatarModalComponent_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvatarModalComponent_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AvatarModalComponent_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvatarModalComponent_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.activeModal.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AvatarModalComponent = /*#__PURE__*/function () {
        function AvatarModalComponent(activeModal, modalService, userService, headerService, alertify, sanitizer) {
          _classCallCheck(this, AvatarModalComponent);

          this.activeModal = activeModal;
          this.modalService = modalService;
          this.userService = userService;
          this.headerService = headerService;
          this.alertify = alertify;
          this.sanitizer = sanitizer;
        }

        _createClass(AvatarModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "fileChangeEvent",
          value: function fileChangeEvent(event) {
            this.show = !this.show;
            this.imageChangedEvent = event;
          }
        }, {
          key: "imageCropped",
          value: function imageCropped(event) {
            this.croppedImage = event.base64;
          }
        }, {
          key: "imageLoaded",
          value: function imageLoaded() {// show cropper
          }
        }, {
          key: "cropperReady",
          value: function cropperReady() {// cropper ready
          }
        }, {
          key: "loadImageFailed",
          value: function loadImageFailed() {// show message
          }
        }, {
          key: "back",
          value: function back() {
            this.show = !this.show;
            this.imageChangedEvent = '';
            this.croppedImage = '';
            this.uploadObj.clearAll();
          }
        }, {
          key: "save",
          value: function save() {
            var _this = this;

            var user = {
              userid: JSON.parse(localStorage.getItem('user')).User.ID,
              imagebase64: this.croppedImage.replace('data:image/png;base64,', '')
            };
            this.userService.changeAvatar(user).subscribe(function (res) {
              if (res) {
                _this.alertify.success('The avatar has been uploaded!!');

                _this.headerService.changeImage(_this.croppedImage);

                _this.modalService.dismissAll();
              } else {
                _this.alertify.warning('Failed to upload the avatar');
              }
            });
          }
        }, {
          key: "openPreviewModal",
          value: function openPreviewModal() {
            var modalRef = this.modalService.open(AvatarModalComponent, {
              size: 'lg'
            });
            modalRef.componentInstance.title = 'Add Routine Main Task'; // modalRef.componentInstance.user = 1;

            modalRef.result.then(function (result) {}, function (reason) {});
          }
        }]);

        return AvatarModalComponent;
      }();

      AvatarModalComponent.ɵfac = function AvatarModalComponent_Factory(t) {
        return new (t || AvatarModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]));
      };

      AvatarModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AvatarModalComponent,
        selectors: [["app-avatar-modal"]],
        viewQuery: function AvatarModalComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.uploadObj = _t.first);
          }
        },
        inputs: {
          name: "name"
        },
        decls: 19,
        vars: 9,
        consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [3, "change"], ["defaultupload", ""], [1, "col-lg-6"], ["format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed", 4, "ngIf"], ["class", "col-lg-3", 4, "ngIf"], [1, "modal-footer", "justify-content-between"], ["type", "button", "class", "btn btn-outline-dark", 3, "click", 4, "ngIf"], ["format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"], [1, "col-lg-3"], [1, "text-center", "align-content-center"], ["width", "100", "height", "100", 1, "img-thumbnail", 3, "src"], [1, "text-gray"], ["width", "100", "height", "100", 1, "img-thumbnail", 2, "border-radius", "100%!important", 3, "src"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
        template: function AvatarModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvatarModalComponent_Template_button_click_3_listener() {
              return ctx.activeModal.dismiss("Cross click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ejs-uploader", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AvatarModalComponent_Template_ejs_uploader_change_9_listener($event) {
              return ctx.fileChangeEvent($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AvatarModalComponent_image_cropper_12_Template, 1, 3, "image-cropper", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AvatarModalComponent_div_13_Template, 5, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AvatarModalComponent_div_14_Template, 5, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AvatarModalComponent_button_16_Template, 2, 0, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AvatarModalComponent_button_17_Template, 2, 0, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AvatarModalComponent_button_18_Template, 2, 0, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](!ctx.show ? "col-lg-12" : "d-none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
          }
        },
        directives: [_syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_6__["UploaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__["ImageCropperComponent"]],
        styles: ["[_nghost-%COMP%] {\r\n    display: flex;\r\n    position: relative;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    overflow: hidden;\r\n    padding: 5px;\r\n    text-align: center;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    user-select: none;\r\n\r\n    > div {\r\n        position: relative;\r\n        width: 100%;\r\n\r\n        img.source-image {\r\n            max-width: 100%;\r\n            max-height: 100%;\r\n            transform-origin: center;\r\n        }\r\n    }\r\n\r\n    .overlay {\r\n        position: absolute;\r\n        background-color: transparent!important;\r\n        pointer-events: none;\r\n        touch-action: none;\r\n        outline-width: 100vw;\r\n        outline-style: solid;\r\n        outline-color: white;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    .cropper {\r\n        position: absolute;\r\n        display: flex;\r\n        color: #53535C;\r\n        background: transparent;\r\n        outline-color: rgba(255,255,255,0.3);\r\n        outline-width: 100vw;\r\n        outline-style: solid;\r\n        touch-action: none;\r\n\r\n\r\n        @media (orientation: portrait) {\r\n            outline-width: 100vh;\r\n        }\r\n\r\n        &:after {\r\n            position: absolute;\r\n            content: '';\r\n            top: 0;\r\n            bottom: 0;\r\n            left: 0;\r\n            right: 0;\r\n            pointer-events: none;\r\n            border: dashed 1px;\r\n            opacity: .75;\r\n            color: inherit;\r\n            z-index: 1;\r\n        }\r\n\r\n        .move {\r\n            width: 100%;\r\n            cursor: move;\r\n            border: 1px solid rgba(255,255,255,0.5);\r\n        }\r\n\r\n        &:focus {\r\n            .move {\r\n                border-color: dodgerblue;\r\n                border-width: 2px;\r\n            }\r\n        }\r\n\r\n        .resize {\r\n            position: absolute;\r\n            display: inline-block;\r\n            line-height: 6px;\r\n            padding: 8px;\r\n            opacity: .85;\r\n            z-index: 1;\r\n\r\n            .square {\r\n                display: inline-block;\r\n                background: #53535C;\r\n                width: 6px;\r\n                height: 6px;\r\n                border: 1px solid rgba(255, 255, 255, 0.5);\r\n                box-sizing: content-box;\r\n            }\r\n\r\n            &.topleft {\r\n                top: -12px;\r\n                left: -12px;\r\n                cursor: nwse-resize;\r\n            }\r\n            &.top {\r\n                top: -12px;\r\n                left: calc(50% - 12px);\r\n                cursor: ns-resize;\r\n            }\r\n            &.topright {\r\n                top: -12px;\r\n                right: -12px;\r\n                cursor: nesw-resize;\r\n            }\r\n            &.right {\r\n                top: calc(50% - 12px);\r\n                right: -12px;\r\n                cursor: ew-resize;\r\n            }\r\n            &.bottomright {\r\n                bottom: -12px;\r\n                right: -12px;\r\n                cursor: nwse-resize;\r\n            }\r\n            &.bottom {\r\n                bottom: -12px;\r\n                left: calc(50% - 12px);\r\n                cursor: ns-resize;\r\n            }\r\n            &.bottomleft {\r\n                bottom: -12px;\r\n                left: -12px;\r\n                cursor: nesw-resize;\r\n            }\r\n            &.left {\r\n                top: calc(50% - 12px);\r\n                left: -12px;\r\n                cursor: ew-resize;\r\n            }\r\n\r\n        }\r\n        .resize-bar {\r\n            position: absolute;\r\n            z-index: 1;\r\n\r\n            &.top {\r\n                top: -11px;\r\n                left: 11px;\r\n                width: calc(100% - 22px);\r\n                height: 22px;\r\n                cursor: ns-resize;\r\n            }\r\n            &.right {\r\n                top: 11px;\r\n                right: -11px;\r\n                height: calc(100% - 22px);\r\n                width: 22px;\r\n                cursor: ew-resize;\r\n            }\r\n            &.bottom {\r\n                bottom: -11px;\r\n                left: 11px;\r\n                width: calc(100% - 22px);\r\n                height: 22px;\r\n                cursor: ns-resize;\r\n            }\r\n            &.left {\r\n                top: 11px;\r\n                left: -11px;\r\n                height: calc(100% - 22px);\r\n                width: 22px;\r\n                cursor: ew-resize;\r\n            }\r\n        }\r\n\r\n        &.rounded {\r\n            outline-color: transparent;\r\n\r\n            &:after {\r\n                border-radius: 100%;\r\n                box-shadow: 0 0 0 100vw rgba(255,255,255,0.3);\r\n\r\n                @media (orientation: portrait) {\r\n                    box-shadow: 0 0 0 100vh rgba(255,255,255,0.3);\r\n                }\r\n            }\r\n            .move {\r\n                border-radius: 100%;\r\n            }\r\n        }\r\n    }\r\n\r\n    &.disabled {\r\n        .cropper {\r\n            .resize, .resize-bar, .move {\r\n                display: none;\r\n            }\r\n        }\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGF5b3V0L2hlYWRlci9hdmF0YXItbW9kYWwvYXZhdGFyLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBRXRCLGlCQUFpQjs7SUFFakI7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVzs7UUFFWDtZQUNJLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsd0JBQXdCO1FBQzVCO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsdUNBQXVDO1FBQ3ZDLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsTUFBTTtRQUNOLE9BQU87SUFDWDs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixvQ0FBb0M7UUFDcEMsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixrQkFBa0I7OztRQUdsQjtZQUNJLG9CQUFvQjtRQUN4Qjs7UUFFQTtZQUNJLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsTUFBTTtZQUNOLFNBQVM7WUFDVCxPQUFPO1lBQ1AsUUFBUTtZQUNSLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsWUFBWTtZQUNaLGNBQWM7WUFDZCxVQUFVO1FBQ2Q7O1FBRUE7WUFDSSxXQUFXO1lBQ1gsWUFBWTtZQUNaLHVDQUF1QztRQUMzQzs7UUFFQTtZQUNJO2dCQUNJLHdCQUF3QjtnQkFDeEIsaUJBQWlCO1lBQ3JCO1FBQ0o7O1FBRUE7WUFDSSxrQkFBa0I7WUFDbEIscUJBQXFCO1lBQ3JCLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osWUFBWTtZQUNaLFVBQVU7O1lBRVY7Z0JBQ0kscUJBQXFCO2dCQUNyQixtQkFBbUI7Z0JBQ25CLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCwwQ0FBMEM7Z0JBQzFDLHVCQUF1QjtZQUMzQjs7WUFFQTtnQkFDSSxVQUFVO2dCQUNWLFdBQVc7Z0JBQ1gsbUJBQW1CO1lBQ3ZCO1lBQ0E7Z0JBQ0ksVUFBVTtnQkFDVixzQkFBc0I7Z0JBQ3RCLGlCQUFpQjtZQUNyQjtZQUNBO2dCQUNJLFVBQVU7Z0JBQ1YsWUFBWTtnQkFDWixtQkFBbUI7WUFDdkI7WUFDQTtnQkFDSSxxQkFBcUI7Z0JBQ3JCLFlBQVk7Z0JBQ1osaUJBQWlCO1lBQ3JCO1lBQ0E7Z0JBQ0ksYUFBYTtnQkFDYixZQUFZO2dCQUNaLG1CQUFtQjtZQUN2QjtZQUNBO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixpQkFBaUI7WUFDckI7WUFDQTtnQkFDSSxhQUFhO2dCQUNiLFdBQVc7Z0JBQ1gsbUJBQW1CO1lBQ3ZCO1lBQ0E7Z0JBQ0kscUJBQXFCO2dCQUNyQixXQUFXO2dCQUNYLGlCQUFpQjtZQUNyQjs7UUFFSjtRQUNBO1lBQ0ksa0JBQWtCO1lBQ2xCLFVBQVU7O1lBRVY7Z0JBQ0ksVUFBVTtnQkFDVixVQUFVO2dCQUNWLHdCQUF3QjtnQkFDeEIsWUFBWTtnQkFDWixpQkFBaUI7WUFDckI7WUFDQTtnQkFDSSxTQUFTO2dCQUNULFlBQVk7Z0JBQ1oseUJBQXlCO2dCQUN6QixXQUFXO2dCQUNYLGlCQUFpQjtZQUNyQjtZQUNBO2dCQUNJLGFBQWE7Z0JBQ2IsVUFBVTtnQkFDVix3QkFBd0I7Z0JBQ3hCLFlBQVk7Z0JBQ1osaUJBQWlCO1lBQ3JCO1lBQ0E7Z0JBQ0ksU0FBUztnQkFDVCxXQUFXO2dCQUNYLHlCQUF5QjtnQkFDekIsV0FBVztnQkFDWCxpQkFBaUI7WUFDckI7UUFDSjs7UUFFQTtZQUNJLDBCQUEwQjs7WUFFMUI7Z0JBQ0ksbUJBQW1CO2dCQUNuQiw2Q0FBNkM7O2dCQUU3QztvQkFDSSw2Q0FBNkM7Z0JBQ2pEO1lBQ0o7WUFDQTtnQkFDSSxtQkFBbUI7WUFDdkI7UUFDSjtJQUNKOztJQUVBO1FBQ0k7WUFDSTtnQkFDSSxhQUFhO1lBQ2pCO1FBQ0o7SUFDSjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbGF5b3V0L2hlYWRlci9hdmF0YXItbW9kYWwvYXZhdGFyLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgID4gZGl2IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIGltZy5zb3VyY2UtaW1hZ2Uge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm92ZXJsYXkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lO1xyXG4gICAgICAgIG91dGxpbmUtd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIG91dGxpbmUtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jcm9wcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBjb2xvcjogIzUzNTM1QztcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBvdXRsaW5lLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XHJcbiAgICAgICAgb3V0bGluZS13aWR0aDogMTAwdnc7XHJcbiAgICAgICAgb3V0bGluZS1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lO1xyXG5cclxuXHJcbiAgICAgICAgQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgICAgb3V0bGluZS13aWR0aDogMTAwdmg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBkYXNoZWQgMXB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAuNzU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1vdmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgLm1vdmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZXNpemUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAuODU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgICAgICAuc3F1YXJlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1MzUzNUM7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi50b3BsZWZ0IHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTJweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogbndzZS1yZXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi50b3Age1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMTJweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTJweCk7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5zLXJlc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnRvcHJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5lc3ctcmVzaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDEycHgpO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBldy1yZXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ib3R0b21yaWdodCB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBud3NlLXJlc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmJvdHRvbSB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxMnB4KTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogbnMtcmVzaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYm90dG9tbGVmdCB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5lc3ctcmVzaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYubGVmdCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMTJweCk7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTJweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZXctcmVzaXplO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAucmVzaXplLWJhciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgICAgICYudG9wIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTExcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIycHgpO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBucy1yZXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5yaWdodCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDExcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTExcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIycHgpO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmJvdHRvbSB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC0xMXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTFweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogbnMtcmVzaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYubGVmdCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTFweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjJweCk7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZXctcmVzaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnJvdW5kZWQge1xyXG4gICAgICAgICAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwMHZ3IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwMHZoIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubW92ZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgIC5jcm9wcGVyIHtcclxuICAgICAgICAgICAgLnJlc2l6ZSwgLnJlc2l6ZS1iYXIsIC5tb3ZlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AvatarModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-avatar-modal',
            templateUrl: './avatar-modal.component.html',
            styleUrls: ['./avatar-modal.component.css']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }, {
            type: src_app_core_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: src_app_core_service_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]
          }, {
            type: src_app_core_service_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          uploadObj: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['defaultupload']
          }]
        });
      })();
      /***/

    },

    /***/
    "4IKR":
    /*!**************************************************!*\
      !*** ./src/app/_core/_service/header.service.ts ***!
      \**************************************************/

    /*! exports provided: HeaderService */

    /***/
    function IKR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderService", function () {
        return HeaderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        })
      };

      var HeaderService = /*#__PURE__*/function () {
        function HeaderService(http) {
          _classCallCheck(this, HeaderService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
          this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.currentMessage = this.messageSource.asObservable();
          this.imgSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
          this.currentImage = this.imgSource.asObservable();
        } // method này để change source message


        _createClass(HeaderService, [{
          key: "changeMessage",
          value: function changeMessage(message) {
            this.messageSource.next(message);
          }
        }, {
          key: "changeImage",
          value: function changeImage(message) {
            this.imgSource.next(message);
          }
        }, {
          key: "getAllNotificationCurrentUser",
          value: function getAllNotificationCurrentUser(page, pageSize, userid) {
            return this.http.get("".concat(this.baseUrl, "Home/getAllNotificationCurrentUser/").concat(page, "/").concat(pageSize, "/").concat(userid)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              // console.log('getAllNotificationCurrentUser: ', response);
              return response;
            }));
          }
        }, {
          key: "seen",
          value: function seen(item) {
            return this.http.get("".concat(this.baseUrl, "Home/Seen/").concat(item.ID));
          }
        }, {
          key: "checkTask",
          value: function checkTask() {
            var userId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            return this.http.get("".concat(this.baseUrl, "Home/TaskListIsLate"));
          }
        }]);

        return HeaderService;
      }();

      HeaderService.ɵfac = function HeaderService_Factory(t) {
        return new (t || HeaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      HeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HeaderService,
        factory: HeaderService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "5RhK":
    /*!*******************************************************!*\
      !*** ./src/app/_core/_resolvers/history.resolvers.ts ***!
      \*******************************************************/

    /*! exports provided: HistoryResolver */

    /***/
    function RhK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryResolver", function () {
        return HistoryResolver;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _service_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_service/history.service */
      "mynv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_service/alertify.service */
      "HJFG");

      var HistoryResolver = /*#__PURE__*/function () {
        function HistoryResolver(historyService, router, alertify) {
          _classCallCheck(this, HistoryResolver);

          this.historyService = historyService;
          this.router = router;
          this.alertify = alertify;
          this.currentDate = new Date();
          this.subtractDate = new Date();
          this.subtractDate.setDate(this.subtractDate.getDate() - 5);
          this.daterange = [this.subtractDate, this.currentDate];
        }

        _createClass(HistoryResolver, [{
          key: "resolve",
          value: function resolve(route) {
            var _this2 = this;

            return this.historyService.sortDateRange(this.subtractDate, this.currentDate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              _this2.alertify.error('Problem retrieving data');

              localStorage.removeItem('user');
              localStorage.removeItem('token');

              _this2.router.navigate(['/login']);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          }
        }]);

        return HistoryResolver;
      }();

      HistoryResolver.ɵfac = function HistoryResolver_Factory(t) {
        return new (t || HistoryResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]));
      };

      HistoryResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HistoryResolver,
        factory: HistoryResolver.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryResolver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _service_history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6BL3":
    /*!******************************************************************************!*\
      !*** ./src/app/views/layout/header/preview-modal/preview-modal.component.ts ***!
      \******************************************************************************/

    /*! exports provided: PreviewModalComponent */

    /***/
    function BL3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreviewModalComponent", function () {
        return PreviewModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PreviewModalComponent = /*#__PURE__*/function () {
        function PreviewModalComponent() {
          _classCallCheck(this, PreviewModalComponent);
        }

        _createClass(PreviewModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PreviewModalComponent;
      }();

      PreviewModalComponent.ɵfac = function PreviewModalComponent_Factory(t) {
        return new (t || PreviewModalComponent)();
      };

      PreviewModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PreviewModalComponent,
        selectors: [["app-preview-modal"]],
        inputs: {
          croppedImage: "croppedImage"
        },
        decls: 2,
        vars: 0,
        template: function PreviewModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " preview-modal works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xheW91dC9oZWFkZXIvcHJldmlldy1tb2RhbC9wcmV2aWV3LW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-preview-modal',
            templateUrl: './preview-modal.component.html',
            styleUrls: ['./preview-modal.component.css']
          }]
        }], function () {
          return [];
        }, {
          croppedImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "7FIR":
    /*!*****************************************************!*\
      !*** ./src/app/_core/_service/calendars.service.ts ***!
      \*****************************************************/

    /*! exports provided: CalendarsService */

    /***/
    function FIR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarsService", function () {
        return CalendarsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CalendarsService = /*#__PURE__*/function () {
        function CalendarsService() {
          _classCallCheck(this, CalendarsService);
        }

        _createClass(CalendarsService, [{
          key: "monthComparator",
          value: function monthComparator(date1, date2) {
            var d1 = new Date(date1);
            var d2 = new Date(date2);

            if (d1.getMonth() === d2.getMonth()) {
              return 1;
            }

            return -1;
          }
        }, {
          key: "addDays",
          value: function addDays(date, days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
          }
        }, {
          key: "getMondaysInMonth",
          value: function getMondaysInMonth(obj) {
            var mon = obj - 1 || new Date().getMonth();

            if (obj === 1) {
              mon = 0;
            }

            var d = new Date(new Date().getFullYear(), mon),
                month = d.getMonth(),
                mondays = [];
            d.setDate(1); // Get the first Monday in the month

            while (d.getDay() !== 1) {
              d.setDate(d.getDate() + 1);
            } // Get all the other Mondays in the month


            while (d.getMonth() === month) {
              mondays.push(new Date(d.getTime()));
              d.setDate(d.getDate() + 7);
            }

            return this.toFormatDatesArray(mondays);
          }
        }, {
          key: "getWednesdaysInMonth",
          value: function getWednesdaysInMonth(month) {
            var _this3 = this;

            var wednesdays = [];
            this.getMondaysInMonth(month).map(function (item) {
              var wednesday = _this3.addDays(item, 1);

              if (_this3.monthComparator(item, wednesday) === 1) {
                wednesdays.push(wednesday);
              }
            });
            return this.toFormatDatesArray(wednesdays);
          }
        }, {
          key: "getTuesdaysInMonth",
          value: function getTuesdaysInMonth(month) {
            var _this4 = this;

            var wednesdays = [];
            this.getMondaysInMonth(month).map(function (item) {
              var wednesday = _this4.addDays(item, 2);

              if (_this4.monthComparator(item, wednesday) === 1) {
                wednesdays.push(wednesday);
              }
            });
            return this.toFormatDatesArray(wednesdays);
          }
        }, {
          key: "getThursdaysInMonth",
          value: function getThursdaysInMonth(month) {
            var _this5 = this;

            var wednesdays = [];
            this.getMondaysInMonth(month).map(function (item) {
              var wednesday = _this5.addDays(item, 3);

              if (_this5.monthComparator(item, wednesday) === 1) {
                wednesdays.push(wednesday);
              }
            });
            return this.toFormatDatesArray(wednesdays);
          }
        }, {
          key: "getFridaysInMonth",
          value: function getFridaysInMonth(month) {
            var _this6 = this;

            var wednesdays = [];
            this.getMondaysInMonth(month).map(function (item) {
              var wednesday = _this6.addDays(item, 4);

              if (_this6.monthComparator(item, wednesday) === 1) {
                wednesdays.push(wednesday);
              }
            });
            return this.toFormatDatesArray(wednesdays);
          }
        }, {
          key: "getSaturdaysInMonth",
          value: function getSaturdaysInMonth(month) {
            var _this7 = this;

            var wednesdays = [];
            this.getMondaysInMonth(month).map(function (item) {
              var wednesday = _this7.addDays(item, 5);

              if (_this7.monthComparator(item, wednesday) === 1) {
                wednesdays.push(wednesday);
              }
            });
            return this.toFormatDatesArray(wednesdays);
          }
        }, {
          key: "getSundaysInMonth",
          value: function getSundaysInMonth(month) {
            var _this8 = this;

            var wednesdays = [];
            this.getMondaysInMonth(month).map(function (item) {
              var wednesday = _this8.addDays(item, 6);

              if (_this8.monthComparator(item, wednesday) === 1) {
                wednesdays.push(wednesday);
              }
            });
            return wednesdays;
          }
        }, {
          key: "getDatesOfMonth",
          value: function getDatesOfMonth() {
            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (index === 0) {
              return '#N/A';
            }

            var _datesOfMonth = ['#N/A', 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Nighth', 'Tenth', 'Eleventh', 'Twelfth', 'Thirteenth', 'Fourteenth', 'Fifteenth', 'Sixteenth', 'Seventeenth', 'Eighteenth', 'NineTeenth', 'Twentieth', 'Twenty-first', 'Twenty-second', 'Twenty-third', 'Twenty-fourth', 'Twenty-fifth', 'Twenty-sixth', 'Twenty-seventh', 'Twenty-eight', 'Twenty-nineth', 'Thirtieth', 'Thirty-first'];

            var _datesOfMonthShort = _datesOfMonth.map(function (item) {
              return item.substring(item.length - 2, item.length);
            });

            return index + _datesOfMonthShort[index];
          }
        }, {
          key: "getFirstDateByMonth",
          value: function getFirstDateByMonth(month) {
            var date = new Date(new Date().getFullYear(), month);
            var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            return firstDay.toLocaleString();
          }
        }, {
          key: "getLastDateByMonth",
          value: function getLastDateByMonth(month) {
            var date = new Date(new Date().getFullYear(), month);
            var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            return lastDay;
          }
        }, {
          key: "checkQuarterly",
          value: function checkQuarterly(quarterly, date) {
            var qu = ['First quarter', 'Second quarter', 'Third quarter', 'Fourth quarter'];
            var quTemp = qu.map(function (item) {
              return item.substr(0, 3);
            });
            var quarterNumber = quTemp.indexOf(quarterly);
            var q1 = [1, 2, 3, 4],
                q2 = [4, 5, 6, 7],
                q3 = [7, 8, 9, 10],
                q4 = [10, 11, 12];

            if (date === '') {
              return {
                status: false,
                quarter: qu[quarterNumber]
              };
            }

            var dateTemp = new Date(date);
            var month = dateTemp.getMonth() + 1;
            var firstDate = dateTemp.getDate();

            if (q1.includes(month) && quarterNumber === 0) {
              if (month === 4 && firstDate === 1) {
                return {
                  status: true,
                  quarter: qu[quarterNumber]
                };
              }

              if (month >= 1 && month <= 3) {
                return {
                  status: true,
                  quarter: qu[quarterNumber]
                };
              }
            }

            if (q2.includes(month) && quarterNumber === 1) {
              if (month === 7 && firstDate === 1) {
                return {
                  status: true,
                  quarter: qu[quarterNumber]
                };
              }

              if (month >= 4 && month <= 6) {
                return {
                  status: true,
                  quarter: qu[quarterNumber]
                };
              }
            }

            if (q3.includes(month) && quarterNumber === 2) {
              if (month === 10 && firstDate === 1) {
                return {
                  status: true,
                  quarter: qu[quarterNumber]
                };
              }

              if (month >= 7 && month <= 9) {
                return {
                  status: true,
                  quarter: qu[quarterNumber]
                };
              }
            }

            if (q4.includes(month) && quarterNumber === 3) {
              return {
                status: true,
                quarter: qu[quarterNumber]
              };
            }

            return {
              status: false,
              quarter: qu[quarterNumber]
            };
          }
        }, {
          key: "toFormatDatesArray",
          value: function toFormatDatesArray(dates) {
            var _this9 = this;

            return dates.map(function (date) {
              return _this9.toFormatDate(date, true);
            });
          }
        }, {
          key: "toFormatDate",
          value: function toFormatDate(dateIso) {
            var showyear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if ((dateIso || '') === '') {
              return '';
            }

            var date = new Date(dateIso);
            var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();

            if (showyear) {
              return "".concat(day, " ").concat(monthNames[monthIndex], ", ").concat(year);
            } else {
              return "".concat(day, " ").concat(monthNames[monthIndex]);
            }
          } // -------------------

        }, {
          key: "getFirstDateLastDateQuarter",
          value: function getFirstDateLastDateQuarter(numberic) {
            switch (numberic) {
              case 1:
                return {
                  firstDate: this.toFormatDate(this.getFirstDateByMonth(1)),
                  lastDate: this.toFormatDate(this.getFirstDateByMonth(3))
                };

              case 2:
                return {
                  firstDate: this.toFormatDate(this.getFirstDateByMonth(4)),
                  lastDate: this.toFormatDate(this.getFirstDateByMonth(6))
                };

              case 3:
                return {
                  firstDate: this.toFormatDate(this.getFirstDateByMonth(7)),
                  lastDate: this.toFormatDate(this.getFirstDateByMonth(9))
                };

              case 4:
                return {
                  firstDate: this.toFormatDate(this.getFirstDateByMonth(10)),
                  lastDate: this.toFormatDate(this.getFirstDateByMonth(12))
                };
            }
          }
        }, {
          key: "getQuarter",
          value: function getQuarter(d) {
            d = d || new Date();
            var q1 = [1, 2, 3],
                q2 = [4, 5, 6],
                q3 = [7, 8, 9],
                q4 = [10, 11, 12];

            if (q1.includes(d.getMonth())) {
              return 1;
            }

            if (q2.includes(d.getMonth())) {
              return 2;
            }

            if (q3.includes(d.getMonth())) {
              return 3;
            }

            if (q4.includes(d.getMonth())) {
              return 4;
            }
          }
        }, {
          key: "getDateInMonth",
          value: function getDateInMonth(month) {
            var m = new Date(new Date().getFullYear(), month, 0).getDate();
            return m;
          }
        }, {
          key: "toDateTimeNowISO",
          value: function toDateTimeNowISO() {
            var date = new Date();
            date.toISOString(); // '2011-12-19T15:28:46.493Z'

            return date;
          }
        }, {
          key: "toTitleCase",
          value: function toTitleCase(str) {
            return str.replace(/\S+/g, function (str) {
              return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
            });
          }
        }, {
          key: "convertDate",
          value: function convertDate(inputFormat) {
            function pad(s) {
              return s < 10 ? '0' + s : s;
            }

            var d = new Date(inputFormat);
            return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
          }
        }, {
          key: "dateNow",
          value: function dateNow() {
            var ch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

            function pad(s) {
              return s < 10 ? '0' + s : s;
            }

            var date = new Date();
            var day = date.getDate(); // yields date

            var month = date.getMonth() + 1; // yields month (add one as '.getMonth()' is zero indexed)

            var year = date.getFullYear(); // yields year
            // let hour = date.getHours(); // yields hours
            // let minute = date.getMinutes(); // yields minutes
            // let second = date.getSeconds(); // yields seconds
            // After this letruct a string with the above results as below

            var time = pad(month) + ch + pad(day) + ch + year; // + ' ' + hour + ':' + minute + ':' + second;

            return time;
          }
        }, {
          key: "dateFormat",
          value: function dateFormat(date) {
            var d = new Date(date);
            var m, day, month;
            m = d.getMonth() + 1;

            if (m < 10) {
              month = '0' + m;
            }

            if (d.getDate() < 10) {
              day = '0' + d.getDate();
            } else {
              day = d.getDate();
            }

            var year = d.getFullYear();
            var formattedDate = month + '-' + day + '-' + year;
            return formattedDate;
          }
        }, {
          key: "JSONDateWithTime",
          value: function JSONDateWithTime(dateStr) {
            var d = new Date(dateStr); // tslint:disable-next-line:one-variable-per-declaration

            var m, day, month;
            m = d.getMonth() + 1;

            if (m < 10) {
              month = '0' + m;
            } else {
              month = m;
            }

            if (d.getDate() < 10) {
              day = '0' + d.getDate();
            } else {
              day = d.getDate();
            }

            var year = d.getFullYear();
            var formattedDate = "".concat(day, "/").concat(month, "/").concat(year);
            var hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
            var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
            var seconds = d.getSeconds();
            var formattedTime = hours + ':' + minutes;
            formattedDate = formattedTime + ' - ' + formattedDate; // Ngày giờ hiện tại
            // tslint:disable-next-line:one-variable-per-declaration

            var date = new Date(),
                dateObj;
            var dayNow = date.getDate();
            var monthNow = date.getMonth() + 1;
            var yearNow = date.getFullYear();
            var hoursNow = date.getHours();
            var minutesNow = date.getMinutes();
            var secondsNow = date.getSeconds();
            dateObj = formattedDate;

            if (hoursNow - hours === 0 && minutesNow - minutes === 0 && yearNow - year === 0 && monthNow - month === 0 && dayNow - day === 0) {
              if (secondsNow - seconds === 0) {
                dateObj = 'just recently';
              } else if (secondsNow - seconds === 1) {
                dateObj = secondsNow - seconds + ' second ago';
              } else {
                dateObj = secondsNow - seconds + ' seconds ago';
              }
            }

            if (hoursNow - hours === 0 && minutesNow - minutes > 0 && yearNow - year === 0 && monthNow - month === 0 && dayNow - day === 0) {
              if (minutesNow - minutes === 1) {
                dateObj = minutesNow - minutes + ' minute ago';
              } else {
                dateObj = minutesNow - minutes + ' minutes ago';
              }
            }

            if (hoursNow - hours > 0 && yearNow - year === 0 && monthNow - month === 0 && dayNow - day === 0) {
              if (hoursNow - hours === 1) {
                dateObj = hoursNow - hours + ' hour ago';
              } else {
                dateObj = hoursNow - hours + ' hours ago';
              }
            }

            if (yearNow - year === 0 && monthNow - month === 0 && dayNow - day > 0 && dayNow - day <= 7) {
              if (dayNow - day === 1) {
                dateObj = dayNow - day + ' day ago';
              } else {
                dateObj = dayNow - day + ' days ago';
              }
            }

            if (yearNow - year === 0 && monthNow !== month) {
              day = dayNow - day;
              var mon = monthNow - month;
              day = mon * 30 + day;

              if (0 < day && day <= 7) {
                dateObj = day + ' days ago';
              }
            }

            return dateObj;
          }
        }]);

        return CalendarsService;
      }();

      CalendarsService.ɵfac = function CalendarsService_Factory(t) {
        return new (t || CalendarsService)();
      };

      CalendarsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CalendarsService,
        factory: CalendarsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var SYSTEM_CODE = 3;
      var environment = {
        production: true,
        systemCode: SYSTEM_CODE,
        apiUrlEC: 'http://10.4.5.64:1002/api/',
        apiUrl: 'http://10.4.5.64:1066/api/',
        apiUrl2: 'http://10.4.5.64:1066/api/',
        hub: 'http://10.4.5.64:1002/ec-hub',
        scalingHub: 'http://10.4.5.64:5000/scalingHub'
      }; // const SYSTEM_CODE = 3;
      // export const environment = {
      //   production: false,
      //   systemCode: SYSTEM_CODE,
      //   apiUrlEC: 'http://10.4.4.224:1002/api/',
      //   apiUrl: 'http://10.4.0.76:1066/api/',
      //   apiUrl2: 'http://10.4.0.76:1066/api/',
      //   hub: 'http://10.4.4.224:1002/ec-hub',
      //   scalingHub: 'http://10.4.0.76:5000/scalingHub',
      //   // apiUrlEC: 'http://10.4.4.224:10022/api/',
      //   // apiUrl: 'http://10.4.0.76:106/api/',
      //   // hub: 'http://10.4.4.224:10022/ec-hub',
      //   // scalingHub: 'http://10.4.0.76:5000/scalingHub',
      // };

      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BRdX":
    /*!*****************************************************!*\
      !*** ./src/app/_core/_service/error.interceptor.ts ***!
      \*****************************************************/

    /*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */

    /***/
    function BRdX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function () {
        return ErrorInterceptorProvider;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor() {
          _classCallCheck(this, ErrorInterceptor);
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (error.status === 401) {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.statusText);
                }

                var applicationError = error.headers.get('Application-Error');

                if (applicationError) {
                  console.error(applicationError);
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(applicationError);
                }

                var serverError = error.error;
                var modalStateErrors = '';

                if (serverError && typeof serverError === 'object') {
                  for (var key in serverError) {
                    if (serverError[key]) {
                      modalStateErrors += serverError[key] + '\n';
                    }
                  }
                }

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(modalStateErrors || serverError || 'Server Error');
              }
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)();
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      var ErrorInterceptorProvider = {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: ErrorInterceptor,
        multi: true
      };
      /***/
    },

    /***/
    "D9FI":
    /*!***************************************************!*\
      !*** ./src/app/_core/_service/signalr.service.ts ***!
      \***************************************************/

    /*! exports provided: SignalrService */

    /***/
    function D9FI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignalrService", function () {
        return SignalrService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SignalrService = /*#__PURE__*/function () {
        function SignalrService() {
          _classCallCheck(this, SignalrService);

          this.startConnection = function () {// this.hubConnection = new signalR.HubConnectionBuilder()
            //                         .withUrl(environment.hub)
            //                         .build();
            // this.hubConnection
            //   .start()
            //   .then(() => console.log('Connection started'))
            //   .catch(err => console.log('Error while starting connection: ' + err))
          };

          this.startConnection();
        } // public addTransferChartDataListener = () => {
        //   this.hubConnection.on('transferchartdata', (data) => {
        //     //this.data = data;
        //     console.log(data);
        //   });
        // }
        // public broadcastChartData = () => {
        //   this.hubConnection.invoke('broadcastchartdata', this.data)
        //   .catch(err => console.error(err));
        // }


        _createClass(SignalrService, [{
          key: "joiGroup",
          value: function joiGroup(room, user) {
            this.hubConnection.invoke('JoinGroup', room.toString(), user.toString())["catch"](function (err) {
              console.error(err.toString());
            });
          }
        }, {
          key: "stopTyping",
          value: function stopTyping(room, user) {
            this.hubConnection.invoke('StopTyping', room.toString(), user.toString())["catch"](function (err) {
              console.error(err.toString());
            });
          }
        }, {
          key: "typing",
          value: function typing(room, user) {
            this.hubConnection.invoke('Typing', room.toString(), user.toString())["catch"](function (err) {
              console.error(err.toString());
            });
          }
        }, {
          key: "sendToGroup",
          value: function sendToGroup(room, message, user) {
            this.hubConnection.invoke('SendMessageToGroup', room.toString(), message, user.toString())["catch"](function (err) {
              console.error(err.toString());
            });
          }
        }, {
          key: "checkAlert",
          value: function checkAlert(user) {
            this.hubConnection.invoke('CheckAlert', user)["catch"](function (err) {
              console.error(err.toString());
            });
          }
        }, {
          key: "receiveJoinGroup",
          value: function receiveJoinGroup(callBack) {
            this.hubConnection.on('ReceiveJoinGroup', callBack);
          }
        }, {
          key: "receiveTyping",
          value: function receiveTyping(callBack) {
            this.hubConnection.on('ReceiveTyping', callBack);
          }
        }, {
          key: "receiveStopTyping",
          value: function receiveStopTyping(callBack) {
            this.hubConnection.on('ReceiveStopTyping', callBack);
          }
        }, {
          key: "receiveMessageGroup",
          value: function receiveMessageGroup(callBack) {
            this.hubConnection.on('ReceiveMessageGroup', callBack);
          }
        }]);

        return SignalrService;
      }();

      SignalrService.ɵfac = function SignalrService_Factory(t) {
        return new (t || SignalrService)();
      };

      SignalrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SignalrService,
        factory: SignalrService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignalrService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "DAXm":
    /*!**********************************************!*\
      !*** ./src/app/views/p404/p404.component.ts ***!
      \**********************************************/

    /*! exports provided: P404Component */

    /***/
    function DAXm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P404Component", function () {
        return P404Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var P404Component = /*#__PURE__*/function () {
        function P404Component() {
          _classCallCheck(this, P404Component);
        }

        _createClass(P404Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return P404Component;
      }();

      P404Component.ɵfac = function P404Component_Factory(t) {
        return new (t || P404Component)();
      };

      P404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: P404Component,
        selectors: [["app-p404"]],
        decls: 19,
        vars: 0,
        consts: [[1, "content"], [1, "error-page"], [1, "headline", "text-warning"], [1, "error-content"], [1, "fas", "fa-exclamation-triangle", "text-warning"], ["href", "/"], [1, "search-form"], [1, "input-group"], ["type", "text", "name", "search", "placeholder", "Search", 1, "form-control"], [1, "input-group-append"], ["type", "submit", "name", "submit", 1, "btn", "btn-warning"], [1, "fas", "fa-search"]],
        template: function P404Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Oops! Page not found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " We could not find the page you were looking for. Meanwhile, you may ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "return to login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3A0MDQvcDQwNC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P404Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-p404',
            templateUrl: './p404.component.html',
            styleUrls: ['./p404.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "HJFG":
    /*!****************************************************!*\
      !*** ./src/app/_core/_service/alertify.service.ts ***!
      \****************************************************/

    /*! exports provided: AlertifyService */

    /***/
    function HJFG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertifyService", function () {
        return AlertifyService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AlertifyService = /*#__PURE__*/function () {
        function AlertifyService() {
          _classCallCheck(this, AlertifyService);

          this.$swal = Swal;
          this.Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: function onOpen(toast) {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
          });
        }

        _createClass(AlertifyService, [{
          key: "confirm",
          value: function confirm(title, message, okCallback) {
            Swal.fire({
              title: title,
              text: message,
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes',
              cancelButtonText: 'No'
            }).then(function (result) {
              if (result.value) {
                okCallback();
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
              }
            });
          }
        }, {
          key: "valid",
          value: function valid(title, message) {
            return new Promise(function (res, rejects) {
              Swal.fire({
                title: title,
                text: message,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No'
              }).then(function (result) {
                if (result.value) {
                  res(true);
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  rejects(false);
                }
              });
            });
          }
        }, {
          key: "validation",
          value: function validation(title, message) {
            Swal.fire(title, message, 'warning');
          }
        }, {
          key: "success",
          value: function success(message, noToast) {
            if (!noToast) {
              this.Toast.fire({
                icon: 'success',
                title: message
              });
            } else {
              Swal.fire('Successfully!', message, 'success');
            }
          }
        }, {
          key: "error",
          value: function error(message, noToast) {
            if (!noToast) {
              this.Toast.fire({
                icon: 'error',
                title: message
              });
            } else {
              Swal.fire('Error!', message, 'error');
            }
          }
        }, {
          key: "warning",
          value: function warning(message, noToast) {
            if (!noToast) {
              this.Toast.fire({
                icon: 'warning',
                title: message
              });
            } else {
              Swal.fire('Warning!', message, 'warning');
            }
          }
        }, {
          key: "message",
          value: function message(_message, noToast) {
            if (!noToast) {
              this.Toast.fire({
                icon: 'info',
                title: _message
              });
            } else {
              Swal.fire('Info!', _message, 'info');
            }
          }
        }]);

        return AlertifyService;
      }();

      AlertifyService.ɵfac = function AlertifyService_Factory(t) {
        return new (t || AlertifyService)();
      };

      AlertifyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AlertifyService,
        factory: AlertifyService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertifyService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "JvyZ":
    /*!*************************************************************!*\
      !*** ./src/app/_core/_resolvers/projectDetail.resolvers.ts ***!
      \*************************************************************/

    /*! exports provided: ProjectDetailResolver */

    /***/
    function JvyZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectDetailResolver", function () {
        return ProjectDetailResolver;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _service_projectDetail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_service/projectDetail.service */
      "pgXt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_service/alertify.service */
      "HJFG");

      var ProjectDetailResolver = /*#__PURE__*/function () {
        function ProjectDetailResolver(projectDetailService, router, alertify) {
          _classCallCheck(this, ProjectDetailResolver);

          this.projectDetailService = projectDetailService;
          this.router = router;
          this.alertify = alertify;
          this.pageNumber = 1;
          this.pageSize = 20;
        }

        _createClass(ProjectDetailResolver, [{
          key: "resolve",
          value: function resolve(route) {
            var _this10 = this;

            var id = route.params.id;
            return this.projectDetailService.getUserByProjectID(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              _this10.alertify.error("Problem retrieving data");

              localStorage.removeItem('user');
              localStorage.removeItem('token');

              _this10.router.navigate(['/login']);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          }
        }]);

        return ProjectDetailResolver;
      }();

      ProjectDetailResolver.ɵfac = function ProjectDetailResolver_Factory(t) {
        return new (t || ProjectDetailResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_projectDetail_service__WEBPACK_IMPORTED_MODULE_3__["ProjectDetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]));
      };

      ProjectDetailResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProjectDetailResolver,
        factory: ProjectDetailResolver.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDetailResolver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _service_projectDetail_service__WEBPACK_IMPORTED_MODULE_3__["ProjectDetailService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MAxt":
    /*!************************************************!*\
      !*** ./src/app/_core/_service/user.service.ts ***!
      \************************************************/

    /*! exports provided: UserService */

    /***/
    function MAxt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _model_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_model/pagination */
      "2zK7");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        })
      };

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
          this.baseUrlEC = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrlEC;
          this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
          this.currentMessage = this.messageSource.asObservable();
        } // method này để change source message


        _createClass(UserService, [{
          key: "changeMessage",
          value: function changeMessage(message) {
            this.messageSource.next(message);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(this.baseUrl, "Users/Delete/").concat(id));
          }
        }, {
          key: "rename",
          value: function rename(edit) {
            return this.http.post("".concat(this.baseUrl, "Users/rename"), edit, {
              headers: httpOptions.headers
            });
          }
        }, {
          key: "update",
          value: function update(_update) {
            return this.http.post("".concat(this.baseUrl, "Users/Update"), _update);
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
            var search = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '%20';
            return this.http.get("".concat(this.baseUrl, "Users/GetAllPaging/").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].systemCode, "/").concat(page, "/").concat(pageSize, "/").concat(search));
          }
        }, {
          key: "create",
          value: function create(_create) {
            return this.http.post("".concat(this.baseUrl, "Users/Create"), _create);
          }
        }, {
          key: "getAllUsers",
          value: function getAllUsers(page, pageSize) {
            var paginatedResult = new _model_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatedResult"]();
            return this.http.get("".concat(this.baseUrl, "Users/GetAllUsers/").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].systemCode, "/").concat(page, "/").concat(pageSize), {
              observe: 'response'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              paginatedResult.result = response.body;

              if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
              }

              return paginatedResult;
            }));
          }
        }, {
          key: "search",
          value: function search(page, pageSize) {
            var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '%20';
            var paginatedResult = new _model_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatedResult"]();
            return this.http.get("".concat(this.baseUrl, "Users/GetAllUsers/").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].systemCode, "/").concat(page, "/").concat(pageSize, "/").concat(text), {
              observe: 'response'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              paginatedResult.result = response.body;

              if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
              }

              return paginatedResult;
            }));
          }
        }, {
          key: "changeAvatar",
          value: function changeAvatar(img) {
            return this.http.post(this.baseUrl + 'Users/ChangedAvatar', img);
          }
        }, {
          key: "getRole",
          value: function getRole() {
            return this.http.get("".concat(this.baseUrl, "Roles/GetAll"));
          }
        }, {
          key: "getAllUserInfo",
          value: function getAllUserInfo() {
            return this.http.get("".concat(this.baseUrlEC, "UserDetail/getAllUserInfo"));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QB/w":
    /*!************************************************!*\
      !*** ./src/app/views/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function QBW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_core/_service/auth.service */
      "j7qE");
      /* harmony import */


      var src_app_core_service_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_core/_service/role.service */
      "vGTY");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");
      /* harmony import */


      var _core_service_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../_core/_service/alertify.service */
      "HJFG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var ADMIN = 1;
      var ADMIN_COSTING = 5;
      var SUPERVISOR = 2;
      var STAFF = 3;
      var WORKER = 4;
      var WORKER2 = 6;

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(route, router, authService, roleService, cookieService, alertifyService) {
          var _this11 = this;

          _classCallCheck(this, LoginComponent);

          this.route = route;
          this.router = router;
          this.authService = authService;
          this.roleService = roleService;
          this.cookieService = cookieService;
          this.alertifyService = alertifyService;
          this.user = {
            username: '',
            password: '',
            systemCode: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].systemCode
          };
          this.routerLinkAdmin = [// setting
          '/setting/account-1', '/setting/building', '/setting/supplier', '/setting/ingredient', '/setting/kind', '/setting/part', '/setting/material', '/setting/building-setting', '/setting/costing', // Establish
          '/establish/bpfc', '/establish/bpfc-schedule', '/establish/bpfc-status', // Excution
          '/execution/todolist', '/execution/output-quantity', '/execution/workplan', '/execution/incoming', // Troubleshooting
          '/troubleshooting/search', '/troubleshooting/Abnormal-List', // Report
          '/report/consumption', '/report/inventory', '/report/delivered-history'];
          this.routerLinkAdminCosting = ['/setting/costing'];
          this.routerLinkSupervisor = [// setting
          '/setting/account-1', '/setting/building', '/setting/supplier', '/setting/ingredient', '/setting/kind', '/setting/part', '/setting/material', '/setting/building-setting', // '/setting/costing',
          // Establish
          '/establish/bpfc', '/establish/bpfc-schedule', '/establish/bpfc-status', // Excution
          '/execution/todolist', '/execution/output-quantity', '/execution/workplan', '/execution/incoming', // Troubleshooting
          '/troubleshooting/search', '/troubleshooting/Abnormal-List', // Report
          '/report/consumption', '/report/inventory', '/report/delivered-history'];
          this.routerLinkStaff = [// setting
          '/setting/supplier', '/setting/ingredient', '/setting/kind', '/setting/part', '/setting/material', '/setting/building-setting', // Establish
          '/establish/bpfc', '/establish/bpfc-schedule', // Excution
          '/execution/workplan', '/execution/incoming', // Troubleshooting
          '/troubleshooting/search', '/troubleshooting/Abnormal-List'];
          this.routerLinkWorker = [// Excution
          '/execution/todolist', '/execution/incoming', '/execution/workplan'];
          this.routerLinkWorker2 = [// Excution
          '/execution/todolist', '/execution/output-quantity', '/execution/incoming', '/execution/workplan'];
          this.remember = false;

          if (this.cookieService.get('remember') !== undefined) {
            if (this.cookieService.get('remember') === 'Yes') {
              this.user = {
                username: this.cookieService.get('username'),
                password: this.cookieService.get('password'),
                systemCode: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].systemCode
              };
              this.remember = true;
              this.login();
            }
          }

          this.route.queryParams.subscribe(function (params) {
            _this11.uri = params.uri;
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem('token')) {
              var uri = decodeURI(this.uri);

              if (uri !== 'undefined') {
                this.router.navigate([uri]);
              } else {
                this.router.navigate(['/ec/execution/todolist']);
              }
            }
          }
        }, {
          key: "onChangeRemember",
          value: function onChangeRemember(args) {
            this.remember = args.target.checked;
          }
        }, {
          key: "login",
          value: function login() {
            var _this12 = this;

            this.authService.login(this.user).subscribe(function (next) {
              _this12.role = JSON.parse(localStorage.getItem('user')).User.Role;
              var userId = JSON.parse(localStorage.getItem('user')).User.ID;

              _this12.roleService.getRoleByUserID(userId).subscribe(function (res) {
                res = res || {};
                var userRole = {
                  isLock: true,
                  userID: userId,
                  roleID: res.id
                };

                _this12.roleService.isLock(userRole).subscribe(function (isLock) {
                  if (isLock) {
                    _this12.alertifyService.error('Your account has been locked!!!');

                    return;
                  } else {
                    _this12.alertifyService.success('Login Success!!');

                    if (_this12.remember) {
                      _this12.cookieService.set('remember', 'Yes');

                      _this12.cookieService.set('username', _this12.user.username);

                      _this12.cookieService.set('password', _this12.user.password);

                      _this12.cookieService.set('systemCode', _this12.user.systemCode.toString());
                    } else {
                      _this12.cookieService.set('remember', 'No');

                      _this12.cookieService.set('username', '');

                      _this12.cookieService.set('password', '');

                      _this12.cookieService.set('systemCode', '');
                    }

                    localStorage.setItem('level', JSON.stringify(res));
                    _this12.level = res.id;

                    if (_this12.level === WORKER) {
                      var currentLang = localStorage.getItem('lang');

                      if (currentLang) {
                        localStorage.setItem('lang', currentLang);
                      } else {
                        localStorage.setItem('lang', 'vi');
                      }
                    } else {
                      var _currentLang = localStorage.getItem('lang');

                      if (_currentLang) {
                        localStorage.setItem('lang', _currentLang);
                      } else {
                        localStorage.setItem('lang', 'en');
                      }
                    }

                    _this12.authService.getBuildingByUserID(userId).subscribe(function (line) {
                      return localStorage.setItem('building', JSON.stringify(line));
                    });

                    _this12.checkRole();
                  }
                });
              });
            }, function (error) {
              _this12.alertifyService.error('Login failed!!');
            }, function () {});
          }
        }, {
          key: "checkRouteAdminCosting",
          value: function checkRouteAdminCosting(uri) {
            var flag = false;
            this.routerLinkAdminCosting.forEach(function (element) {
              if (uri.includes(element)) {
                flag = true;
              }
            });
            return flag;
          }
        }, {
          key: "checkRouteAdmin",
          value: function checkRouteAdmin(uri) {
            var flag = false;
            this.routerLinkAdmin.forEach(function (element) {
              if (uri.includes(element)) {
                flag = true;
              }
            });
            return flag;
          }
        }, {
          key: "checkRouteSupervisor",
          value: function checkRouteSupervisor(uri) {
            var flag = false;
            this.routerLinkSupervisor.forEach(function (element) {
              if (uri.includes(element)) {
                flag = true;
              }
            });
            return flag;
          }
        }, {
          key: "checkRouteStaff",
          value: function checkRouteStaff(uri) {
            var flag = false;
            this.routerLinkStaff.forEach(function (element) {
              if (uri.includes(element)) {
                flag = true;
              }
            });
            return flag;
          }
        }, {
          key: "checkRouteWorker",
          value: function checkRouteWorker(uri) {
            var flag = false;
            this.routerLinkWorker.forEach(function (element) {
              if (uri.includes(element)) {
                flag = true;
              }
            });
            return flag;
          }
        }, {
          key: "checkRouteWorker2",
          value: function checkRouteWorker2(uri) {
            var flag = false;
            this.routerLinkWorker2.forEach(function (element) {
              if (uri.includes(element)) {
                flag = true;
              }
            });
            return flag;
          }
        }, {
          key: "checkRole",
          value: function checkRole() {
            var uri = decodeURI(this.uri);

            if (this.level === ADMIN_COSTING) {
              if (uri !== 'undefined') {
                if (this.checkRouteAdminCosting(uri)) {
                  this.router.navigate([uri]);
                } else {
                  this.router.navigate(['/ec/setting/costing']);
                }
              } else {
                this.router.navigate(['/ec/setting/costing']);
              }
            } else if (this.level === ADMIN) {
              if (uri !== 'undefined') {
                if (this.checkRouteAdmin(uri)) {
                  this.router.navigate([uri]);
                } else {
                  this.router.navigate(['/ec/establish/bpfc']);
                }
              } else {
                this.router.navigate(['/ec/establish/bpfc']);
              }
            } else if (this.level === SUPERVISOR) {
              if (uri !== 'undefined') {
                if (this.checkRouteSupervisor(uri)) {
                  this.router.navigate([uri]);
                } else {
                  this.router.navigate(['/ec/establish/bpfc']);
                }
              } else {
                this.router.navigate(['/ec/establish/bpfc']);
              }
            } else if (this.level === STAFF) {
              if (uri !== 'undefined') {
                if (this.checkRouteStaff(uri)) {
                  this.router.navigate([uri]);
                } else {
                  this.router.navigate(['/ec/establish/bpfc']);
                }
              } else {
                this.router.navigate(['/ec/establish/bpfc']);
              }
            } else if (this.level === WORKER) {
              if (uri !== 'undefined') {
                if (this.checkRouteWorker(uri)) {
                  this.router.navigate([uri]);
                } else {
                  this.router.navigate(['/ec/execution/todolist']);
                }
              } else {
                this.router.navigate(['/ec/execution/todolist']);
              }
            } else if (this.level === WORKER2) {
              if (uri !== 'undefined') {
                if (this.checkRouteWorker(uri)) {
                  this.router.navigate([uri]);
                } else {
                  this.router.navigate(['/ec/execution/todolist']);
                }
              } else {
                this.router.navigate(['/ec/execution/todolist']);
              }
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 31,
        vars: 6,
        consts: [[1, "login-page"], [1, "login-box"], [1, "login-logo"], ["href", "../../index2.html"], [1, "card"], [1, "card-body", "login-card-body"], [1, "login-box-msg"], [3, "ngSubmit"], ["form", "ngForm"], [1, "input-group", "mb-3"], ["type", "text", "required", "", "name", "username", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-envelope"], ["type", "password", "name", "password", "required", "", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-lock"], [1, "row"], [1, "col-8"], [1, "icheck-primary"], ["type", "checkbox", "id", "remember", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"], ["for", "remember"], [1, "col-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Digital Mixing System");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign in to start your session");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.user.username = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.user.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LoginComponent_Template_input_change_25_listener($event) {
              return ctx.onChangeRemember($event);
            })("ngModelChange", function LoginComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.remember = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Remember Me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Sign In ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.remember)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: src_app_core_service_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
          }, {
            type: _core_service_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-SG": "zavE",
        "./en-SG.js": "zavE",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'WM';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "T4rL":
    /*!*****************************************************************!*\
      !*** ./src/app/views/layout/breadcrumb/breadcrumb.component.ts ***!
      \*****************************************************************/

    /*! exports provided: BreadcrumbComponent */

    /***/
    function T4rL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
        return BreadcrumbComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function BreadcrumbComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BreadcrumbComponent_li_5_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var breadcrumb_r1 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.gotoRouter(breadcrumb_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breadcrumb_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, breadcrumb_r1.label));
        }
      }

      var BreadcrumbComponent = /*#__PURE__*/function () {
        function BreadcrumbComponent(router, activatedRoute) {
          _classCallCheck(this, BreadcrumbComponent);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.ADMIN = 1;
          this.SUPERVISOR = 2;
          this.STAFF = 3;
          this.WORKER = 4;
          this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
        }

        _createClass(BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
              return _this13.activatedRoute;
            })).subscribe(function (e) {
              _this13.breadcrumbs = _this13.buildBreadCrumb(_this13.activatedRoute.root);
            });
            this.level = JSON.parse(localStorage.getItem('level')).level;
          }
        }, {
          key: "buildBreadCrumb",
          value: function buildBreadCrumb(route) {
            var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var breadcrumbs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            // debugger
            // If no routeConfig is avalailable we are on the root path
            var label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
            var isClickable = route.routeConfig && route.routeConfig.data && route.routeConfig.data.isClickable;
            var path = route.routeConfig && route.routeConfig.data ? 'ec/' + route.routeConfig.path : ''; // If the route is dynamic route such as ':id', remove it

            var lastRoutePart = path.split('/').pop();
            var isDynamicRoute = lastRoutePart.startsWith('/');

            if (isDynamicRoute && !!route.snapshot) {
              var paramName = lastRoutePart.split('/')[1];
              path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
              label = route.snapshot.params[paramName];
            } // In the routeConfig the complete path is not available,
            // so we rebuild it each time


            var nextUrl = path;
            var breadcrumb = {
              label: label,
              url: nextUrl
            }; // Only adding route with non-empty label

            var newBreadcrumbs = breadcrumb.label ? [].concat(_toConsumableArray(breadcrumbs), [breadcrumb]) : _toConsumableArray(breadcrumbs);

            if (route.firstChild) {
              // If we are not on our current path yet,
              // there will be more children to look after, to build our breadcumb
              return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
            }

            return newBreadcrumbs;
          }
        }, {
          key: "gotoRouter",
          value: function gotoRouter(data) {
            if (data.label === 'Ingredient') {
              this.router.navigate(['/ec/setting/ingredient']);
            }

            if (data.label === 'Todolist') {
              this.router.navigate(['/ec/execution/todolist']);
            }

            if (data.label === 'Home') {
              if (this.level === this.ADMIN || this.level === this.SUPERVISOR || this.level === this.STAFF) {
                this.router.navigate(['/ec/establish/bpfc']);
              } else {
                this.router.navigate(['/ec/execution/todolist']);
              }
            }
          }
        }]);

        return BreadcrumbComponent;
      }();

      BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        decls: 6,
        vars: 1,
        consts: [[1, "content-header", "p-0"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "breadcrumb", "breadcrumb-arrow"], [4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "click"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BreadcrumbComponent_li_5_Template, 4, 3, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbs);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: ["body[_ngcontent-%COMP%]{\r\n  padding-top: 100px;\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%] {\r\n  height: 36px;\r\n  padding: 0;\r\n  line-height: 36px;\r\n  list-style: none;\r\n  margin-top: 10px;\r\n  background-color: #e6e9ed\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%] {\r\n  border-radius: 4px 0 0 4px;\r\n  -webkit-border-radius: 4px 0 0 4px;\r\n  -moz-border-radius: 4px 0 0 4px\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  vertical-align: top\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child) {\r\n  \r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]:before {\r\n  padding: 0;\r\n  content: \"\"\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  padding: 0 10px\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child)   span[_ngcontent-%COMP%] {\r\n  height: 36px;\r\n  padding: 0 10px 0 25px;\r\n  line-height: 36px\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%] {\r\n  padding: 0 10px\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #3bafda;\r\n  border: 1px solid #3bafda\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%] {\r\n  padding-left: 10px\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, .breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  top: -1px;\r\n  width: 0;\r\n  height: 0;\r\n  content: '';\r\n  border-top: 18px solid transparent;\r\n  border-bottom: 18px solid transparent\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n  right: -10px;\r\n  z-index: 3;\r\n  border-left-color: #3bafda;\r\n  border-left-style: solid;\r\n  border-left-width: 11px\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  right: -11px;\r\n  z-index: 2;\r\n  border-left: 11px solid #2494be\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #4fc1e9;\r\n  border: 1px solid #4fc1e9\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus:before, .breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before {\r\n  border-left-color: #4fc1e9\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\r\n  background-color: #2494be;\r\n  border: 1px solid #2494be\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active:after, .breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active:before {\r\n  border-left-color: #2494be\r\n}\r\n\r\n.breadcrumb-arrow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #434a54\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGF5b3V0L2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQjtBQUNGOztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQztBQUNGOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1Y7QUFDRjs7QUFDQTtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCO0FBQ0Y7O0FBQ0E7RUFDRTtBQUNGOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCO0FBQ0Y7O0FBQ0E7RUFDRTtBQUNGOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEM7QUFDRjs7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QjtBQUNGOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVjtBQUNGOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0Y7O0FBQ0E7RUFDRTtBQUNGOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0Y7O0FBQ0E7RUFDRTtBQUNGOztBQUNBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xheW91dC9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYi1hcnJvdyB7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU5ZWRcclxufVxyXG4uYnJlYWRjcnVtYi1hcnJvdyBsaTpmaXJzdC1jaGlsZCBhIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHhcclxufVxyXG4uYnJlYWRjcnVtYi1hcnJvdyBsaSwgLmJyZWFkY3J1bWItYXJyb3cgbGkgYSwgLmJyZWFkY3J1bWItYXJyb3cgbGkgc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3BcclxufVxyXG4uYnJlYWRjcnVtYi1hcnJvdyBsaTpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IC01cHggKi9cclxufVxyXG4uYnJlYWRjcnVtYi1hcnJvdyBsaStsaTpiZWZvcmUge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29udGVudDogXCJcIlxyXG59XHJcbi5icmVhZGNydW1iLWFycm93IGxpIHNwYW4ge1xyXG4gIHBhZGRpbmc6IDAgMTBweFxyXG59XHJcbi5icmVhZGNydW1iLWFycm93IGxpIGEsIC5icmVhZGNydW1iLWFycm93IGxpOm5vdCg6Zmlyc3QtY2hpbGQpIHNwYW4ge1xyXG4gIGhlaWdodDogMzZweDtcclxuICBwYWRkaW5nOiAwIDEwcHggMCAyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNnB4XHJcbn1cclxuLmJyZWFkY3J1bWItYXJyb3cgbGk6Zmlyc3QtY2hpbGQgYSB7XHJcbiAgcGFkZGluZzogMCAxMHB4XHJcbn1cclxuLmJyZWFkY3J1bWItYXJyb3cgbGkgYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2JhZmRhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYmFmZGFcclxufVxyXG4uYnJlYWRjcnVtYi1hcnJvdyBsaTpmaXJzdC1jaGlsZCBhIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHhcclxufVxyXG4uYnJlYWRjcnVtYi1hcnJvdyBsaSBhOmFmdGVyLCAuYnJlYWRjcnVtYi1hcnJvdyBsaSBhOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTFweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgY29udGVudDogJyc7XHJcbiAgYm9yZGVyLXRvcDogMThweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAxOHB4IHNvbGlkIHRyYW5zcGFyZW50XHJcbn1cclxuLmJyZWFkY3J1bWItYXJyb3cgbGkgYTpiZWZvcmUge1xyXG4gIHJpZ2h0OiAtMTBweDtcclxuICB6LWluZGV4OiAzO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjM2JhZmRhO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItbGVmdC13aWR0aDogMTFweFxyXG59XHJcbi5icmVhZGNydW1iLWFycm93IGxpIGE6YWZ0ZXIge1xyXG4gIHJpZ2h0OiAtMTFweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJvcmRlci1sZWZ0OiAxMXB4IHNvbGlkICMyNDk0YmVcclxufVxyXG4uYnJlYWRjcnVtYi1hcnJvdyBsaSBhOmZvY3VzLCAuYnJlYWRjcnVtYi1hcnJvdyBsaSBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZjMWU5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ZmMxZTlcclxufVxyXG4uYnJlYWRjcnVtYi1hcnJvdyBsaSBhOmZvY3VzOmJlZm9yZSwgLmJyZWFkY3J1bWItYXJyb3cgbGkgYTpob3ZlcjpiZWZvcmUge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjNGZjMWU5XHJcbn1cclxuLmJyZWFkY3J1bWItYXJyb3cgbGkgYTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDk0YmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzI0OTRiZVxyXG59XHJcbi5icmVhZGNydW1iLWFycm93IGxpIGE6YWN0aXZlOmFmdGVyLCAuYnJlYWRjcnVtYi1hcnJvdyBsaSBhOmFjdGl2ZTpiZWZvcmUge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjQ5NGJlXHJcbn1cclxuLmJyZWFkY3J1bWItYXJyb3cgbGkgc3BhbiB7XHJcbiAgY29sb3I6ICM0MzRhNTRcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-breadcrumb',
            templateUrl: './breadcrumb.component.html',
            styleUrls: ['./breadcrumb.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "URDZ":
    /*!********************************************************!*\
      !*** ./src/app/_core/_resolvers/todolist.resolvers.ts ***!
      \********************************************************/

    /*! exports provided: TodolistResolver */

    /***/
    function URDZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodolistResolver", function () {
        return TodolistResolver;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _service_todolist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_service/todolist.service */
      "XMGJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_service/alertify.service */
      "HJFG");

      var TodolistResolver = /*#__PURE__*/function () {
        function TodolistResolver(todolistService, router, alertify) {
          _classCallCheck(this, TodolistResolver);

          this.todolistService = todolistService;
          this.router = router;
          this.alertify = alertify;
        }

        _createClass(TodolistResolver, [{
          key: "resolve",
          value: function resolve(route) {
            var _this14 = this;

            return this.todolistService.getTasks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              console.log(error);

              _this14.alertify.error('Problem retrieving data');

              localStorage.removeItem('user');
              localStorage.removeItem('token');

              _this14.router.navigate(['/login']);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          }
        }]);

        return TodolistResolver;
      }();

      TodolistResolver.ɵfac = function TodolistResolver_Factory(t) {
        return new (t || TodolistResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_todolist_service__WEBPACK_IMPORTED_MODULE_3__["TodolistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]));
      };

      TodolistResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TodolistResolver,
        factory: TodolistResolver.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodolistResolver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _service_todolist_service__WEBPACK_IMPORTED_MODULE_3__["TodolistService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "VKDu":
    /*!*********************************************************!*\
      !*** ./src/app/views/layout/footer/footer.component.ts ***!
      \*********************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function VKDu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _assets_js_ec_client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../assets/js/ec-client.js */
      "kK9S");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            console.log('footer connected');

            if (_assets_js_ec_client_js__WEBPACK_IMPORTED_MODULE_1__["CONNECTION_HUB"].state === 'Connected') {
              _assets_js_ec_client_js__WEBPACK_IMPORTED_MODULE_1__["CONNECTION_HUB"].invoke('CheckOnline')["catch"](function (err) {
                return console.error(err);
              });

              _assets_js_ec_client_js__WEBPACK_IMPORTED_MODULE_1__["CONNECTION_HUB"].on('Online', function (users) {
                _this15.online = users;
              });
            }
          }
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 12,
        vars: 1,
        consts: [[1, "main-footer"], [1, "float-right", "d-none", "d-sm-inline"], [1, "fa", "fa-users"], ["src", "../../../../assets/img/logo-1.png", "alt", "AdminLTE Logo", "width", "25", "height", "25", 1, "img-circle", 2, "opacity", ".8"], [1, "text-danger"], ["href", "https://adminlte.io"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA9 2020-2021 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " (v1.0.1)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " - Lab Team ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.online, " ");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "VU4y":
    /*!******************************************************!*\
      !*** ./src/app/_core/_resolvers/follow.resolvers.ts ***!
      \******************************************************/

    /*! exports provided: FollowResolver */

    /***/
    function VU4y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FollowResolver", function () {
        return FollowResolver;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _service_follow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_service/follow.service */
      "Xu87");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_service/alertify.service */
      "HJFG");

      var FollowResolver = /*#__PURE__*/function () {
        function FollowResolver(followService, router, alertify) {
          _classCallCheck(this, FollowResolver);

          this.followService = followService;
          this.router = router;
          this.alertify = alertify;
        }

        _createClass(FollowResolver, [{
          key: "resolve",
          value: function resolve(route) {
            var _this16 = this;

            return this.followService.getTasks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              _this16.alertify.error('Problem retrieving data');

              localStorage.removeItem('user');
              localStorage.removeItem('token');

              _this16.router.navigate(['/login']);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          }
        }]);

        return FollowResolver;
      }();

      FollowResolver.ɵfac = function FollowResolver_Factory(t) {
        return new (t || FollowResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_follow_service__WEBPACK_IMPORTED_MODULE_3__["FollowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]));
      };

      FollowResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FollowResolver,
        factory: FollowResolver.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FollowResolver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _service_follow_service__WEBPACK_IMPORTED_MODULE_3__["FollowService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XMGJ":
    /*!****************************************************!*\
      !*** ./src/app/_core/_service/todolist.service.ts ***!
      \****************************************************/

    /*! exports provided: TodolistService */

    /***/
    function XMGJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodolistService", function () {
        return TodolistService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': 'application/json',
          Authorization: "Bearer ".concat(localStorage.getItem('token'))
        })
      };

      var TodolistService = /*#__PURE__*/function () {
        function TodolistService(http) {
          _classCallCheck(this, TodolistService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        }

        _createClass(TodolistService, [{
          key: "getTasks",
          value: function getTasks() {
            return this.http.get("".concat(this.baseUrl, "Tasks/GetListTreeTask/%20/%20/%20/%20/%20/%20/%20")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              console.log('get tasks todolist: ', response);
              return response;
            }));
          }
        }, {
          key: "sortProject",
          value: function sortProject() {
            return this.http.get("".concat(this.baseUrl, "Tasks/GetListTreeTask/project"));
          }
        }, {
          key: "sortRoutine",
          value: function sortRoutine() {
            return this.http.get("".concat(this.baseUrl, "Tasks/GetListTreeTask/routine"));
          }
        }, {
          key: "sortAbnormal",
          value: function sortAbnormal() {
            return this.http.get("".concat(this.baseUrl, "Tasks/GetListTreeTask/abnormal"));
          }
        }, {
          key: "sortHigh",
          value: function sortHigh() {
            return this.http.get("".concat(this.baseUrl, "Tasks/GetListTreeTask/H/%20"));
          }
        }, {
          key: "sortMedium",
          value: function sortMedium() {
            return this.http.get("".concat(this.baseUrl, "Tasks/GetListTreeTask/M/%20"));
          }
        }, {
          key: "sortLow",
          value: function sortLow() {
            return this.http.get("".concat(this.baseUrl, "Tasks/GetListTreeTask/L/%20"));
          }
        }, {
          key: "sortByAssignedJob",
          value: function sortByAssignedJob() {
            return this.http.get("".concat(this.baseUrl, "Tasks/SortBy/assigned/Assigned"));
          }
        }, {
          key: "sortByBeAssignedJob",
          value: function sortByBeAssignedJob() {
            return this.http.get("".concat(this.baseUrl, "Tasks/SortBy/beAssigned/BeAssigned"));
          }
        }]);

        return TodolistService;
      }();

      TodolistService.ɵfac = function TodolistService_Factory(t) {
        return new (t || TodolistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      TodolistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TodolistService,
        factory: TodolistService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodolistService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Xu87":
    /*!**************************************************!*\
      !*** ./src/app/_core/_service/follow.service.ts ***!
      \**************************************************/

    /*! exports provided: FollowService */

    /***/
    function Xu87(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FollowService", function () {
        return FollowService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        })
      };

      var FollowService = /*#__PURE__*/function () {
        function FollowService(http) {
          _classCallCheck(this, FollowService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        }

        _createClass(FollowService, [{
          key: "getTasks",
          value: function getTasks() {
            return this.http.get("".concat(this.baseUrl, "Follow/LoadFollow")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              console.log('get tasks follow: ', response);
              return response;
            }));
          }
        }, {
          key: "unfollow",
          value: function unfollow(taskid) {
            return this.http["delete"]("".concat(this.baseUrl, "Follow/Unfollow/").concat(taskid));
          }
        }, {
          key: "sortProject",
          value: function sortProject() {
            return this.http.get("".concat(this.baseUrl, "Follow/LoadFollow/project"));
          }
        }, {
          key: "sortRoutine",
          value: function sortRoutine() {
            return this.http.get("".concat(this.baseUrl, "Follow/LoadFollow/routine"));
          }
        }, {
          key: "sortAbnormal",
          value: function sortAbnormal() {
            return this.http.get("".concat(this.baseUrl, "Follow/LoadFollow/abnormal"));
          }
        }, {
          key: "sortHigh",
          value: function sortHigh() {
            return this.http.get("".concat(this.baseUrl, "Follow/LoadFollow/H/%20"));
          }
        }, {
          key: "sortMedium",
          value: function sortMedium() {
            return this.http.get("".concat(this.baseUrl, "Follow/LoadFollow/M/%20"));
          }
        }, {
          key: "sortLow",
          value: function sortLow() {
            return this.http.get("".concat(this.baseUrl, "Follow/LoadFollow/L/%20"));
          }
        }]);

        return FollowService;
      }();

      FollowService.ɵfac = function FollowService_Factory(t) {
        return new (t || FollowService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      FollowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FollowService,
        factory: FollowService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FollowService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "YB7+":
    /*!***************************************************!*\
      !*** ./src/app/_core/_service/project.service.ts ***!
      \***************************************************/

    /*! exports provided: ProjectService */

    /***/
    function YB7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
        return ProjectService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _model_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_model/pagination */
      "2zK7");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        })
      };

      var ProjectService = /*#__PURE__*/function () {
        function ProjectService(http) {
          _classCallCheck(this, ProjectService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
          this.projectSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
          this.currentProject = this.projectSource.asObservable();
          this.flagSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('0');
          this.currentFlag = this.flagSource.asObservable();
        }

        _createClass(ProjectService, [{
          key: "getProjects",
          value: function getProjects(page, itemsPerPage) {
            var paginatedResult = new _model_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginatedResult"]();
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();

            if (page != null && itemsPerPage != null) {
              params = params.append('pageNumber', page);
              params = params.append('pageSize', itemsPerPage);
            }

            return this.http.get(this.baseUrl + 'Projects/GetProjects', {
              observe: 'response',
              params: params,
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              paginatedResult.result = response.body;

              if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
              }

              return paginatedResult;
            }));
          }
        }, {
          key: "create",
          value: function create(project) {
            return this.http.post(this.baseUrl + 'Projects/create', project, httpOptions);
          }
        }, {
          key: "getAlls",
          value: function getAlls() {
            return this.http.get(this.baseUrl + 'Projects/GetAll');
          }
        }, {
          key: "changeStatus",
          value: function changeStatus(id) {
            return this.http.get(this.baseUrl + 'Projects/Open/' + id);
          }
        }, {
          key: "clone",
          value: function clone(id) {
            return this.http.get(this.baseUrl + 'Projects/Clone/' + id);
          }
        }, {
          key: "update",
          value: function update(project) {
            return this.http.post(this.baseUrl + 'Projects/Update', project, httpOptions);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + 'Projects/DeleteProject/' + id, httpOptions);
          }
        }, {
          key: "onOrOff",
          value: function onOrOff(projectId) {
            return this.http.get("".concat(this.baseUrl, "Projects/open/").concat(Number(projectId)));
          }
        }, {
          key: "search",
          value: function search(page, itemsPerPage, text) {
            var paginatedResult = new _model_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginatedResult"]();
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();

            if (page != null && itemsPerPage != null) {
              params = params.append('pageNumber', page);
              params = params.append('pageSize', itemsPerPage);
            }

            return this.http.get(this.baseUrl + 'Projects/search/' + text, {
              observe: 'response',
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              console.log(response);
              paginatedResult.result = response.body;

              if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
              }

              return paginatedResult;
            }));
          }
        }]);

        return ProjectService;
      }();

      ProjectService.ɵfac = function ProjectService_Factory(t) {
        return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProjectService,
        factory: ProjectService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: tokenGetter, HttpLoaderFactory, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
        return tokenGetter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _views_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./views/layout/layout/layout.component */
      "vnHn");
      /* harmony import */


      var _views_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./views/layout/header/header.component */
      "ap2D");
      /* harmony import */


      var _views_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./views/layout/footer/footer.component */
      "VKDu");
      /* harmony import */


      var _views_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./views/layout/breadcrumb/breadcrumb.component */
      "T4rL");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _views_p404_p404_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./views/p404/p404.component */
      "DAXm");
      /* harmony import */


      var _views_p500_p500_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./views/p500/p500.component */
      "wcaP");
      /* harmony import */


      var _core_service_alertify_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./_core/_service/alertify.service */
      "HJFG");
      /* harmony import */


      var _core_service_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./_core/_service/auth.service */
      "j7qE");
      /* harmony import */


      var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./_core/_guards/auth.guard */
      "vpVc");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _core_service_error_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./_core/_service/error.interceptor */
      "BRdX");
      /* harmony import */


      var _core_resolvers_project_resolvers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./_core/_resolvers/project.resolvers */
      "hlQC");
      /* harmony import */


      var _core_resolvers_projectDetail_resolvers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./_core/_resolvers/projectDetail.resolvers */
      "JvyZ");
      /* harmony import */


      var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-dropdowns */
      "jcQU");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var safe_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! safe-pipe */
      "jxiw");
      /* harmony import */


      var _core_resolvers_todolist_resolvers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./_core/_resolvers/todolist.resolvers */
      "URDZ");
      /* harmony import */


      var _core_resolvers_history_resolvers__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./_core/_resolvers/history.resolvers */
      "5RhK");
      /* harmony import */


      var _core_resolvers_follow_resolvers__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./_core/_resolvers/follow.resolvers */
      "VU4y");
      /* harmony import */


      var ngx_moment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ngx-moment */
      "QUrN");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "dlKe");
      /* harmony import */


      var _core_resolvers_user_resolvers__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./_core/_resolvers/user.resolvers */
      "lt89");
      /* harmony import */


      var _core_helper_basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./_core/_helper/basic-auth.interceptor */
      "g/jW");
      /* harmony import */


      var _core_resolvers_role_resolvers__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./_core/_resolvers/role.resolvers */
      "rehr");
      /* harmony import */


      var angular_mentions__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! angular-mentions */
      "z3KA");
      /* harmony import */


      var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-inputs */
      "QYJQ");
      /* harmony import */


      var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ngx-image-cropper */
      "rIor");
      /* harmony import */


      var _views_layout_header_avatar_modal_avatar_modal_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./views/layout/header/avatar-modal/avatar-modal.component */
      "3zqh");
      /* harmony import */


      var _views_layout_header_preview_modal_preview_modal_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./views/layout/header/preview-modal/preview-modal.component */
      "6BL3");
      /* harmony import */


      var _core_resolvers_glue_resolver__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./_core/_resolvers/glue.resolver */
      "pvWG");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-grids */
      "GJ+o"); // service
      // handle err
      // resolvers
      // module


      function tokenGetter() {
        return localStorage.getItem('token');
      } // AoT requires an exported function for factories


      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_40__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_core_service_alertify_service__WEBPACK_IMPORTED_MODULE_15__["AlertifyService"], _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], ngx_spinner__WEBPACK_IMPORTED_MODULE_18__["NgxSpinnerService"], _core_service_error_interceptor__WEBPACK_IMPORTED_MODULE_19__["ErrorInterceptorProvider"], _core_resolvers_project_resolvers__WEBPACK_IMPORTED_MODULE_20__["ProjectResolver"], _core_resolvers_todolist_resolvers__WEBPACK_IMPORTED_MODULE_25__["TodolistResolver"], _core_resolvers_history_resolvers__WEBPACK_IMPORTED_MODULE_26__["HistoryResolver"], _core_resolvers_follow_resolvers__WEBPACK_IMPORTED_MODULE_27__["FollowResolver"], _core_resolvers_user_resolvers__WEBPACK_IMPORTED_MODULE_30__["UserResolver"], _core_resolvers_projectDetail_resolvers__WEBPACK_IMPORTED_MODULE_21__["ProjectDetailResolver"], _core_resolvers_role_resolvers__WEBPACK_IMPORTED_MODULE_32__["RoleResolver"], _core_service_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _core_resolvers_glue_resolver__WEBPACK_IMPORTED_MODULE_38__["GlueResolver"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _core_helper_basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_31__["BasicAuthInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__["MultiSelectAllModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__["DropDownListAllModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__["MultiSelectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], safe_pipe__WEBPACK_IMPORTED_MODULE_24__["SafePipeModule"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_41__["GridAllModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_28__["MomentModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_29__["InfiniteScrollModule"], angular_mentions__WEBPACK_IMPORTED_MODULE_33__["MentionModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_35__["ImageCropperModule"], _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_34__["UploaderModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          },
          defaultLanguage: 'vi'
        }), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtModule"].forRoot({
          config: {
            tokenGetter: tokenGetter,
            allowedDomains: ['10.4.0.76:1002'],
            disallowedRoutes: ['10.4.0.76:1002/api/auth']
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _views_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"], _views_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _views_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _views_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbComponent"], _views_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _views_p404_p404_component__WEBPACK_IMPORTED_MODULE_13__["P404Component"], _views_p500_p500_component__WEBPACK_IMPORTED_MODULE_14__["P500Component"], _views_layout_header_avatar_modal_avatar_modal_component__WEBPACK_IMPORTED_MODULE_36__["AvatarModalComponent"], _views_layout_header_preview_modal_preview_modal_component__WEBPACK_IMPORTED_MODULE_37__["PreviewModalComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__["MultiSelectAllModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__["DropDownListAllModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__["MultiSelectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], safe_pipe__WEBPACK_IMPORTED_MODULE_24__["SafePipeModule"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_41__["GridAllModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_28__["MomentModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_29__["InfiniteScrollModule"], angular_mentions__WEBPACK_IMPORTED_MODULE_33__["MentionModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_35__["ImageCropperModule"], _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_34__["UploaderModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__["TranslateModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _views_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"], _views_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _views_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _views_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbComponent"], _views_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _views_p404_p404_component__WEBPACK_IMPORTED_MODULE_13__["P404Component"], _views_p500_p500_component__WEBPACK_IMPORTED_MODULE_14__["P500Component"], _views_layout_header_avatar_modal_avatar_modal_component__WEBPACK_IMPORTED_MODULE_36__["AvatarModalComponent"], _views_layout_header_preview_modal_preview_modal_component__WEBPACK_IMPORTED_MODULE_37__["PreviewModalComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__["MultiSelectAllModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__["DropDownListAllModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_22__["MultiSelectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], safe_pipe__WEBPACK_IMPORTED_MODULE_24__["SafePipeModule"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_41__["GridAllModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_28__["MomentModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_29__["InfiniteScrollModule"], angular_mentions__WEBPACK_IMPORTED_MODULE_33__["MentionModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_35__["ImageCropperModule"], _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_34__["UploaderModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__["TranslateLoader"],
                useFactory: HttpLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
              },
              defaultLanguage: 'vi'
            }), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtModule"].forRoot({
              config: {
                tokenGetter: tokenGetter,
                allowedDomains: ['10.4.0.76:1002'],
                disallowedRoutes: ['10.4.0.76:1002/api/auth']
              }
            })],
            providers: [_core_service_alertify_service__WEBPACK_IMPORTED_MODULE_15__["AlertifyService"], _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], ngx_spinner__WEBPACK_IMPORTED_MODULE_18__["NgxSpinnerService"], _core_service_error_interceptor__WEBPACK_IMPORTED_MODULE_19__["ErrorInterceptorProvider"], _core_resolvers_project_resolvers__WEBPACK_IMPORTED_MODULE_20__["ProjectResolver"], _core_resolvers_todolist_resolvers__WEBPACK_IMPORTED_MODULE_25__["TodolistResolver"], _core_resolvers_history_resolvers__WEBPACK_IMPORTED_MODULE_26__["HistoryResolver"], _core_resolvers_follow_resolvers__WEBPACK_IMPORTED_MODULE_27__["FollowResolver"], _core_resolvers_user_resolvers__WEBPACK_IMPORTED_MODULE_30__["UserResolver"], _core_resolvers_projectDetail_resolvers__WEBPACK_IMPORTED_MODULE_21__["ProjectDetailResolver"], _core_resolvers_role_resolvers__WEBPACK_IMPORTED_MODULE_32__["RoleResolver"], _core_service_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _core_resolvers_glue_resolver__WEBPACK_IMPORTED_MODULE_38__["GlueResolver"], {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
              useClass: _core_helper_basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_31__["BasicAuthInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ap2D":
    /*!*********************************************************!*\
      !*** ./src/app/views/layout/header/header.component.ts ***!
      \*********************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function ap2D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_app_core_model_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_core/_model/nav */
      "nncH");
      /* harmony import */


      var _avatar_modal_avatar_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./avatar-modal/avatar-modal.component */
      "3zqh");
      /* harmony import */


      var _core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../_core/_service/auth.service */
      "j7qE");
      /* harmony import */


      var src_app_core_service_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_core/_service/role.service */
      "vGTY");
      /* harmony import */


      var _core_service_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../_core/_service/alertify.service */
      "HJFG");
      /* harmony import */


      var src_app_core_service_signalr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_core/_service/signalr.service */
      "D9FI");
      /* harmony import */


      var src_app_core_service_header_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_core/_service/header.service */
      "4IKR");
      /* harmony import */


      var src_app_core_service_calendars_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/_core/_service/calendars.service */
      "7FIR");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-dropdowns */
      "jcQU");

      var _c0 = function _c0() {
        return ["/ec/setting/costing"];
      };

      function HeaderComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Costing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "SETTING"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      }

      var _c1 = function _c1() {
        return ["/ec/setting/account-1"];
      };

      function HeaderComponent_li_11_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "ACCOUNT1"));
        }
      }

      var _c2 = function _c2() {
        return ["/ec/setting/building"];
      };

      function HeaderComponent_li_11_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "BUILDING"));
        }
      }

      function HeaderComponent_li_11_a_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Costing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      var _c3 = function _c3() {
        return ["/ec/setting/supplier"];
      };

      var _c4 = function _c4() {
        return ["/ec/setting/ingredient"];
      };

      var _c5 = function _c5() {
        return ["/ec/setting/kind"];
      };

      var _c6 = function _c6() {
        return ["/ec/setting/part"];
      };

      var _c7 = function _c7() {
        return ["/ec/setting/material"];
      };

      var _c8 = function _c8() {
        return ["/ec/setting/building-setting"];
      };

      var _c9 = function _c9() {
        return ["/ec/setting/scaling-setting"];
      };

      function HeaderComponent_li_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_li_11_a_5_Template, 3, 5, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_11_a_6_Template, 3, 5, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HeaderComponent_li_11_a_28_Template, 2, 2, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 18, "SETTING"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.level !== ctx_r1.STAFF);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.level !== ctx_r1.STAFF);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 20, "SUPPLIER"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 22, "INGREDIENT"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 24, "KIND"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 26, "PART"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 28, "MATERIAL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 30, "Building Setting"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 32, "Scaling Setting"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.level === ctx_r1.ADMIN);
        }
      }

      var _c10 = function _c10() {
        return ["/ec/establish/bpfc-status"];
      };

      function HeaderComponent_li_12_a_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "BPFC_STATUS"));
        }
      }

      var _c11 = function _c11() {
        return ["/ec/establish/bpfc-schedule"];
      };

      var _c12 = function _c12() {
        return ["/ec/establish/bpfc"];
      };

      function HeaderComponent_li_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_li_12_a_11_Template, 3, 5, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "ESTABLISH"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c11));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "BPFC_SCHEDULE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, "BPFC"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.level === ctx_r2.ADMIN || ctx_r2.level === ctx_r2.SUPERVISOR);
        }
      }

      var _c13 = function _c13() {
        return ["/ec/execution/workplan"];
      };

      function HeaderComponent_li_13_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c13));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "WORK_PLAN"));
        }
      }

      var _c14 = function _c14() {
        return ["/ec/execution/incoming"];
      };

      function HeaderComponent_li_13_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "INCOMING_LABEL"));
        }
      }

      var _c15 = function _c15() {
        return ["/ec/execution/todolist"];
      };

      function HeaderComponent_li_13_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c15));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "TODOLIST"));
        }
      }

      var _c16 = function _c16() {
        return ["/ec/execution/output-quantity"];
      };

      function HeaderComponent_li_13_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c16));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "OUTPUT_QUANTITY"));
        }
      }

      function HeaderComponent_li_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_li_13_a_5_Template, 3, 5, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_13_a_6_Template, 3, 5, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_li_13_a_7_Template, 3, 5, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_li_13_a_8_Template, 3, 5, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "EXECUTION"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.level === ctx_r3.ADMIN || ctx_r3.level === ctx_r3.SUPERVISOR || ctx_r3.level === ctx_r3.STAFF || ctx_r3.level === ctx_r3.WORKER || ctx_r3.level === ctx_r3.WORKER2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.level === ctx_r3.ADMIN || ctx_r3.level === ctx_r3.SUPERVISOR || ctx_r3.level === ctx_r3.STAFF || ctx_r3.level === ctx_r3.WORKER || ctx_r3.level === ctx_r3.WORKER2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.level === ctx_r3.ADMIN || ctx_r3.level === ctx_r3.SUPERVISOR || ctx_r3.level === ctx_r3.WORKER || ctx_r3.level === ctx_r3.WORKER2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.level === ctx_r3.ADMIN || ctx_r3.level === ctx_r3.SUPERVISOR || ctx_r3.level === ctx_r3.WORKER || ctx_r3.level === ctx_r3.STAFF || ctx_r3.level === ctx_r3.WORKER2);
        }
      }

      var _c17 = function _c17() {
        return ["/ec/troubleshooting/search"];
      };

      function HeaderComponent_li_14_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c17));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "SEARCH_LABEL"));
        }
      }

      var _c18 = function _c18() {
        return ["/ec/troubleshooting/Abnormal-List"];
      };

      function HeaderComponent_li_14_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c18));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "BLACK_LIST_LABEL"));
        }
      }

      function HeaderComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_li_14_a_5_Template, 3, 5, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_14_a_6_Template, 3, 5, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "TROUBLESHOOTING_LABEL"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.level === ctx_r4.ADMIN || ctx_r4.level === ctx_r4.SUPERVISOR || ctx_r4.level === ctx_r4.STAFF);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.level === ctx_r4.ADMIN || ctx_r4.level === ctx_r4.SUPERVISOR || ctx_r4.level === ctx_r4.STAFF);
        }
      }

      var _c19 = function _c19() {
        return ["/ec/report/consumption"];
      };

      function HeaderComponent_li_15_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c19));
        }
      }

      var _c20 = function _c20() {
        return ["/ec/report/consumption-1"];
      };

      var _c21 = function _c21() {
        return ["/ec/report/consumption-2"];
      };

      var _c22 = function _c22() {
        return ["/ec/report/inventory"];
      };

      var _c23 = function _c23() {
        return ["/ec/report/delivered-history"];
      };

      function HeaderComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_li_15_a_5_Template, 2, 2, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, "REPORT"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.level === ctx_r5.ADMIN);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c20));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 12, "CONSUMPTION_LABEL"), " 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c21));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 14, "CONSUMPTION_LABEL"), " 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c22));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 16, "INVENTORY_LABEL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c23));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 18, "DELIVERED_HISTORY_LABEL"));
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(authService, roleService, alertify, signalrService, headerService, calendarsService, sanitizer, router, cookieService, modalService, translate) {
          _classCallCheck(this, HeaderComponent);

          this.authService = authService;
          this.roleService = roleService;
          this.alertify = alertify;
          this.signalrService = signalrService;
          this.headerService = headerService;
          this.calendarsService = calendarsService;
          this.sanitizer = sanitizer;
          this.router = router;
          this.cookieService = cookieService;
          this.modalService = modalService;
          this.translate = translate;
          this.ADMIN = 1;
          this.SUPERVISOR = 2;
          this.ADMIN_COSTING = 5;
          this.STAFF = 3;
          this.WORKER = 4;
          this.WORKER2 = 6;
          this.fields = {
            text: 'name',
            value: 'id'
          };
          var lang = localStorage.getItem('lang');

          if (lang) {
            this.value = lang;
            translate.setDefaultLang(lang);
            translate.use(lang);
          } else {
            this.value = 'vi';
            translate.setDefaultLang('vi');
            translate.use('vi');
          }
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.langsData = [{
              id: 'vi',
              name: 'VI'
            }, {
              id: 'en',
              name: 'EN'
            }];
            this.navAdmin = new src_app_core_model_nav__WEBPACK_IMPORTED_MODULE_2__["Nav"]().getNavAdmin();
            this.navClient = new src_app_core_model_nav__WEBPACK_IMPORTED_MODULE_2__["Nav"]().getNavClient();
            this.navEc = new src_app_core_model_nav__WEBPACK_IMPORTED_MODULE_2__["Nav"]().getNavEc(); // this.checkTask();

            this.getAvatar();
            this.role = JSON.parse(localStorage.getItem('level'));
            this.currentUser = JSON.parse(localStorage.getItem('user')).User.Username;
            this.page = 1;
            this.pageSize = 10; // this.signalrService.startConnection();

            this.userid = JSON.parse(localStorage.getItem('user')).User.ID;
            this.getNotifications();
            this.onService();
            this.currentTime = moment__WEBPACK_IMPORTED_MODULE_1__().format('LTS');
            setInterval(function () {
              return _this17.updateCurrentTime();
            }, 1 * 1000);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.getBuilding();
            var img = localStorage.getItem('avatar');

            if (img === 'null') {
              this.avatar = this.defaultImage();
            } else {
              this.avatar = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + img);
            }
          }
        }, {
          key: "home",
          value: function home() {
            if (this.role.id === this.STAFF) {
              return '/ec/establish/bpfc';
            } else {
              return '/ec/execution/todolist';
            }
          }
        }, {
          key: "onChange",
          value: function onChange(args) {
            if (args.itemData) {
              localStorage.removeItem('lang');
              localStorage.setItem('lang', args.itemData.id);
              this.translate.use(args.itemData.id);
            }
          }
        }, {
          key: "getBuilding",
          value: function getBuilding() {
            var _this18 = this;

            var userID = JSON.parse(localStorage.getItem('user')).User.ID;
            this.roleService.getRoleByUserID(userID).subscribe(function (res) {
              res = res || {};

              if (res !== {}) {
                _this18.level = res.id;
              }
            });
          }
        }, {
          key: "onService",
          value: function onService() {
            var _this19 = this;

            this.headerService.currentImage.subscribe(function (arg) {
              if (arg) {
                _this19.changeAvatar(arg);
              }
            });
          }
        }, {
          key: "changeAvatar",
          value: function changeAvatar(avt) {
            var avatar;

            if (avt) {
              avatar = avt.replace('data:image/png;base64,', '').trim();
              localStorage.removeItem('avatar');
              localStorage.setItem('avatar', avatar);
              this.getAvatar();
            } else {
              this.avatar = this.defaultImage();
            }
          }
        }, {
          key: "onScrollDown",
          value: function onScrollDown() {
            if (this.pageSize >= 200) {
              this.pageSize -= 10;
              this.getNotifications();
            } else {
              this.pageSize += 10;
              this.getNotifications();
            }
          }
        }, {
          key: "onScrollUp",
          value: function onScrollUp() {
            if (this.pageSize >= 200) {
              this.pageSize -= 10;
              this.getNotifications();
            } else {
              this.pageSize += 10;
              this.getNotifications();
            }
          }
        }, {
          key: "updateCurrentTime",
          value: function updateCurrentTime() {
            this.currentTime = moment__WEBPACK_IMPORTED_MODULE_1__().format('LTS');
          }
        }, {
          key: "logout",
          value: function logout() {
            this.cookieService.deleteAll();
            localStorage.clear();
            this.authService.decodedToken = null;
            this.authService.currentUser = null;
            this.alertify.message('Logged out');
            var uri = this.router.url;
            this.router.navigate(['login'], {
              queryParams: {
                uri: uri
              }
            });
          }
        }, {
          key: "openAvatarModal",
          value: function openAvatarModal() {
            var modalRef = this.modalService.open(_avatar_modal_avatar_modal_component__WEBPACK_IMPORTED_MODULE_3__["AvatarModalComponent"], {
              size: 'lg'
            });
            modalRef.componentInstance.title = 'Add Routine Main Task'; // modalRef.componentInstance.user = 1;

            modalRef.result.then(function (result) {}, function (reason) {});
          }
        }, {
          key: "pushToMainPage",
          value: function pushToMainPage() {
            var role = JSON.parse(localStorage.getItem('user')).User.Role;

            if (role === 1) {
              this.router.navigate(['/admin/dash']);
            } else if (role === 2) {
              this.router.navigate(['/todolist']);
            }
          }
        }, {
          key: "checkServer",
          value: function checkServer() {
            var _this20 = this;

            var user = JSON.parse(localStorage.getItem('user')).User.Username;
            setInterval(function () {
              _this20.checkAlert();
            }, 30000);
          }
        }, {
          key: "checkAlert",
          value: function checkAlert() {
            var userId = JSON.parse(localStorage.getItem('user')).User.ID;
            this.signalrService.checkAlert(userId);
          }
        }, {
          key: "getNotifications",
          value: function getNotifications() {
            var _this21 = this;

            this.headerService.getAllNotificationCurrentUser(this.page, this.pageSize, this.userid).subscribe(function (res) {
              _this21.data = res.model;
              _this21.total = res.total;
              _this21.totalCount = res.TotalCount;
            });
          }
        }, {
          key: "defaultImage",
          value: function defaultImage() {
            return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAJYAA\n      ACWBAMAAADOL2zRAAAAG1BMVEVsdX3////Hy86jqK1+ho2Ql521ur7a3N7s7e5Yhi\n      PTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtH\n      OTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJ\n      J0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvF\n      IXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOy\n      qPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP\n      2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg==");
          }
        }, {
          key: "getAvatar",
          value: function getAvatar() {
            var img = localStorage.getItem('avatar');

            if (img === 'null') {
              this.avatar = this.defaultImage();
            } else {
              this.avatar = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + img);
            }
          }
        }, {
          key: "imageBase64",
          value: function imageBase64(img) {
            if (img === 'null') {
              return this.defaultImage();
            } else {
              return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + img);
            }
          }
        }, {
          key: "datetime",
          value: function datetime(d) {
            return this.calendarsService.JSONDateWithTime(d);
          }
        }, {
          key: "checkTask",
          value: function checkTask() {
            this.headerService.checkTask(this.userid).subscribe(function () {});
          }
        }, {
          key: "seen",
          value: function seen(item) {
            var _this22 = this;

            this.headerService.seen(item).subscribe(function (res) {
              _this22.page = 1;
              _this22.data = [];

              _this22.getNotifications();
            });
            var obj = {
              router: item.URL.split('/')[1],
              message: item.URL.split('/')[2]
            };

            if (obj.router === 'project-detail') {
              this.router.navigate([item.URL.replace('project-detail', 'project/detail')]);
            } else {
              var url = "/".concat(obj.router);
              this.router.navigate([item.URL]);
            }
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_signalr_service__WEBPACK_IMPORTED_MODULE_7__["SignalrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_header_service__WEBPACK_IMPORTED_MODULE_8__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_service_calendars_service__WEBPACK_IMPORTED_MODULE_9__["CalendarsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 35,
        vars: 16,
        consts: [[1, "main-header", "navbar", "navbar-expand-md", "navbar-light", "navbar-white"], [1, "container-fluid"], [1, "navbar-brand", 2, "cursor", "pointer", 3, "routerLink"], ["src", "../../../../assets/img/logo-1.png", "alt", "AdminLTE Logo", 1, "brand-image", "img-circle", 2, "opacity", ".8"], [1, "brand-text", "font-weight-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "order-1"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse", "order-3"], [1, "navbar-nav"], ["class", "nav-item dropdown", 4, "ngIf"], [1, "order-1", "order-md-3", "navbar-nav", "navbar-no-expand", "ml-auto"], [1, "nav-item", 2, "width", "70px"], ["id", "langs", 3, "dataSource", "value", "fields", "change"], ["langs", ""], [1, "nav-item", "user-menu", 3, "click"], [1, "nav-link"], [1, "fa", "fa-sign-out"], [1, "user-image", "img-circle", "elevation-2", 3, "src", "alt"], [1, "font-weight-bold", "text-danger"], [1, "nav-item"], [1, "font-weight-bold", "text-info"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "fas", "fa-sign-out-alt"], [1, "nav-item", "dropdown"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 2, "cursor", "pointer"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], ["class", "dropdown-item", 3, "routerLink", 4, "ngIf"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DMR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_li_10_Template, 7, 5, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_li_11_Template, 29, 41, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_li_12_Template, 12, 14, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_li_13_Template, 9, 7, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_li_14_Template, 7, 5, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_li_15_Template, 18, 24, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ejs-dropdownlist", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HeaderComponent_Template_ejs_dropdownlist_change_18_listener($event) {
              return ctx.onChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_20_listener() {
              return ctx.openAvatarModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_33_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.home());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level === ctx.ADMIN_COSTING);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level === ctx.ADMIN || ctx.level === ctx.SUPERVISOR || ctx.level === ctx.STAFF);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level === ctx.ADMIN || ctx.level === ctx.SUPERVISOR || ctx.level === ctx.STAFF);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level === ctx.ADMIN || ctx.level === ctx.SUPERVISOR || ctx.level === ctx.STAFF || ctx.level === ctx.WORKER || ctx.level === ctx.WORKER2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level === ctx.ADMIN || ctx.level === ctx.SUPERVISOR || ctx.level === ctx.STAFF);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level === ctx.ADMIN || ctx.level === ctx.SUPERVISOR);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.langsData)("value", ctx.value)("fields", ctx.fields);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.currentUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 14, ctx.currentUser));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentTime);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_16__["DropDownListComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["TitleCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]],
        styles: [".fix-width[_ngcontent-%COMP%] {\r\n    max-width: 800px !important;\r\n    width: 800px !important;\r\n    height: 500px !important;\r\n    overflow-y: scroll !important;\r\n    text-overflow: ellipsis;\r\n  }\r\n  .fix-notify[_ngcontent-%COMP%] {\r\n    min-width: 800px !important;\r\n    max-height: 600px !important;\r\n    text-overflow: ellipsis;\r\n    overflow-y: scroll !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtFQUMvQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4LXdpZHRoIHtcclxuICAgIG1heC13aWR0aDogODAwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA4MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcbiAgLmZpeC1ub3RpZnkge1xyXG4gICAgbWluLXdpZHRoOiA4MDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogNjAwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [{
            type: _core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: src_app_core_service_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]
          }, {
            type: _core_service_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"]
          }, {
            type: src_app_core_service_signalr_service__WEBPACK_IMPORTED_MODULE_7__["SignalrService"]
          }, {
            type: src_app_core_service_header_service__WEBPACK_IMPORTED_MODULE_8__["HeaderService"]
          }, {
            type: src_app_core_service_calendars_service__WEBPACK_IMPORTED_MODULE_9__["CalendarsService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModal"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "g/jW":
    /*!*********************************************************!*\
      !*** ./src/app/_core/_helper/basic-auth.interceptor.ts ***!
      \*********************************************************/

    /*! exports provided: BasicAuthInterceptor */

    /***/
    function gJW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function () {
        return BasicAuthInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _service_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_service/alertify.service */
      "HJFG");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_service/auth.service */
      "j7qE");

      var BasicAuthInterceptor = /*#__PURE__*/function () {
        function BasicAuthInterceptor(alertify, authSerive) {
          _classCallCheck(this, BasicAuthInterceptor);

          this.alertify = alertify;
          this.authSerive = authSerive;
        }

        _createClass(BasicAuthInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this23 = this;

            // add authorization header with basic auth credentials if available
            if (localStorage.getItem('token')) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(localStorage.getItem('token'))
                }
              });
            }

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              var errorMessage = '';

              if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = "Error: ".concat(error.error.message);
              } else {
                // server-side error
                errorMessage = "Error Status: ".concat(error.status, "\nMessage: ").concat(error.message);

                switch (error.status) {
                  case 0:
                  case 500:
                  case 403:
                  case 401:
                    _this23.authSerive.logOut();

                    _this23.alertify.error("L\u1ED7i m\xE1y ch\u1EE7 vui l\xF2ng t\u1EA3i l\u1EA1i trang (nh\u1EA5n F5) v\xE0 ch\u1EDD trong \xEDt ph\xFAt!\n                        <br> Server Error! Please refresh page (press F5) and wait in a few minutes", true);

                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);

                  case 400:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
            }));
          }
        }]);

        return BasicAuthInterceptor;
      }();

      BasicAuthInterceptor.ɵfac = function BasicAuthInterceptor_Factory(t) {
        return new (t || BasicAuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
      };

      BasicAuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BasicAuthInterceptor,
        factory: BasicAuthInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicAuthInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]
          }, {
            type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "hlQC":
    /*!*******************************************************!*\
      !*** ./src/app/_core/_resolvers/project.resolvers.ts ***!
      \*******************************************************/

    /*! exports provided: ProjectResolver */

    /***/
    function hlQC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectResolver", function () {
        return ProjectResolver;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _service_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_service/project.service */
      "YB7+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_service/alertify.service */
      "HJFG");

      var ProjectResolver = /*#__PURE__*/function () {
        function ProjectResolver(projectService, router, alertify) {
          _classCallCheck(this, ProjectResolver);

          this.projectService = projectService;
          this.router = router;
          this.alertify = alertify;
          this.pageNumber = 1;
          this.pageSize = 10;
        }

        _createClass(ProjectResolver, [{
          key: "resolve",
          value: function resolve(route) {
            var _this24 = this;

            return this.projectService.getProjects(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              _this24.alertify.error('Problem retrieving data');

              localStorage.removeItem('user');
              localStorage.removeItem('token');

              _this24.router.navigate(['/login']);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          }
        }]);

        return ProjectResolver;
      }();

      ProjectResolver.ɵfac = function ProjectResolver_Factory(t) {
        return new (t || ProjectResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]));
      };

      ProjectResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProjectResolver,
        factory: ProjectResolver.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectResolver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _service_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "j7qE":
    /*!************************************************!*\
      !*** ./src/app/_core/_service/auth.service.ts ***!
      \************************************************/

    /*! exports provided: AuthService */

    /***/
    function j7qE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _alertify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./alertify.service */
      "HJFG");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, router, alertify, cookieService) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.router = router;
          this.alertify = alertify;
          this.cookieService = cookieService;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'auth/login';
          this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
          this.levelSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
          this.currentLevel = this.levelSource.asObservable();
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(model) {
            var _this25 = this;

            return this.http.post(this.baseUrl, model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              var data = response;

              if (data) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('avatar', data.user.User.image);
                _this25.decodedToken = _this25.jwtHelper.decodeToken(data.token);
                _this25.currentUser = data.user.User;

                _this25.getBuildingByUserID(data.user.User.ID).subscribe(function (res) {
                  res = res || {};
                  localStorage.setItem('level', JSON.stringify(res));

                  _this25.levelSource.next(res);
                });
              }
            }));
          }
        }, {
          key: "getBuildingByUserID",
          value: function getBuildingByUserID(userID) {
            var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrlEC, "BuildingUser/GetBuildingByUserID/").concat(userID);
            return this.http.get(url, {});
          }
        }, {
          key: "loggedIn",
          value: function loggedIn() {
            var token = localStorage.getItem('token');
            return !this.jwtHelper.isTokenExpired(token);
          }
        }, {
          key: "logOut",
          value: function logOut() {
            this.cookieService.deleteAll();
            localStorage.clear();
            this.decodedToken = null;
            this.currentUser = null; // this.alertify.message('Logged out');
            // const uri = this.router.url;

            this.router.navigate(['login']);
          }
        }, {
          key: "roleMatch",
          value: function roleMatch(allowedRoles) {
            var isMatch = false;
            var userRoles = this.decodedToken.role;
            allowedRoles.forEach(function (element) {
              if (userRoles.includes(element)) {
                isMatch = true;
                return;
              }
            });
            return isMatch;
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_alertify_service__WEBPACK_IMPORTED_MODULE_7__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _alertify_service__WEBPACK_IMPORTED_MODULE_7__["AlertifyService"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kK9S":
    /*!************************************!*\
      !*** ./src/assets/js/ec-client.js ***!
      \************************************/

    /*! exports provided: CONNECTION_HUB, SCALING_CONNECTION_HUB */

    /***/
    function kK9S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONNECTION_HUB", function () {
        return CONNECTION_HUB;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SCALING_CONNECTION_HUB", function () {
        return SCALING_CONNECTION_HUB;
      });
      /* harmony import */


      var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @microsoft/signalr */
      "6HpG");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var CONNECTION_HUB = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__["HubConnectionBuilder"]().withUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hub) // .configureLogging(signalR.LogLevel.Information)
      .build(); // Start the connection.

      start();

      function start() {
        CONNECTION_HUB.start().then(function () {
          CONNECTION_HUB.on('UserConnected', function (conId) {
            console.log("UserConnected", conId);
          });
          CONNECTION_HUB.on('UserDisconnected', function (conId) {
            console.log("UserDisconnected", conId);
          });
          console.log("Signalr connected");
        })["catch"](function (err) {
          setTimeout(function () {
            return start();
          }, 5000);
        });
      }

      var SCALING_CONNECTION_HUB = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__["HubConnectionBuilder"]().withUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].scalingHub) // .configureLogging(signalR.LogLevel.Information)
      .build(); // Start the connection.

      function startScalingHub() {
        SCALING_CONNECTION_HUB.start().then(function () {
          SCALING_CONNECTION_HUB.on('Scaling Hub UserConnected', function (conId) {
            console.log("Scaling Hub UserConnected", conId);
          });
          SCALING_CONNECTION_HUB.on('Scaling Hub User Disconnected', function (conId) {
            console.log("Scaling Hub User Disconnected", conId);
          });
          console.log("Scaling Hub Signalr connected");
        })["catch"](function (err) {
          setTimeout(function () {
            return startScalingHub();
          }, 5000);
        });
      }

      startScalingHub();
      /***/
    },

    /***/
    "lt89":
    /*!****************************************************!*\
      !*** ./src/app/_core/_resolvers/user.resolvers.ts ***!
      \****************************************************/

    /*! exports provided: UserResolver */

    /***/
    function lt89(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserResolver", function () {
        return UserResolver;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_service/user.service */
      "MAxt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_service/alertify.service */
      "HJFG");

      var UserResolver = /*#__PURE__*/function () {
        function UserResolver(todolistService, router, alertify) {
          _classCallCheck(this, UserResolver);

          this.todolistService = todolistService;
          this.router = router;
          this.alertify = alertify;
          this.page = 1;
          this.pageSize = 10;
        }

        _createClass(UserResolver, [{
          key: "resolve",
          value: function resolve(route) {
            var _this26 = this;

            return this.todolistService.getAllUsers(this.page, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              console.log(error);

              _this26.alertify.error('Problem retrieving data');

              localStorage.removeItem('user');
              localStorage.removeItem('token');

              _this26.router.navigate(['/login']);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          }
        }]);

        return UserResolver;
      }();

      UserResolver.ɵfac = function UserResolver_Factory(t) {
        return new (t || UserResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]));
      };

      UserResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserResolver,
        factory: UserResolver.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserResolver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "mynv":
    /*!***************************************************!*\
      !*** ./src/app/_core/_service/history.service.ts ***!
      \***************************************************/

    /*! exports provided: HistoryService */

    /***/
    function mynv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryService", function () {
        return HistoryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        })
      };

      var HistoryService = /*#__PURE__*/function () {
        function HistoryService(http) {
          _classCallCheck(this, HistoryService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        }

        _createClass(HistoryService, [{
          key: "getTasks",
          value: function getTasks() {
            return this.http.get("".concat(this.baseUrl, "Tasks/GetListTreeHistory")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              console.log('get tasks todolist: ', response);
              return response;
            }));
          }
        }, {
          key: "sortDateRange",
          value: function sortDateRange(start, end) {
            return this.http.get("".concat(this.baseUrl, "Tasks/GetListTreeHistory/").concat(start, "/").concat(end)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              console.log('sortDateRange: ', response);
              return response;
            }));
          }
        }, {
          key: "undo",
          value: function undo(taskid) {
            return this.http.get("".concat(this.baseUrl, "Tasks/Undo/").concat(taskid));
          }
        }]);

        return HistoryService;
      }();

      HistoryService.ɵfac = function HistoryService_Factory(t) {
        return new (t || HistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      HistoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HistoryService,
        factory: HistoryService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nncH":
    /*!*************************************!*\
      !*** ./src/app/_core/_model/nav.ts ***!
      \*************************************/

    /*! exports provided: Nav */

    /***/
    function nncH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Nav", function () {
        return Nav;
      });

      var Nav = /*#__PURE__*/function () {
        function Nav() {
          _classCallCheck(this, Nav);

          this.Nav = [{
            id: 1,
            title: 'Home',
            path: '/admin/dash',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 1,
            type: 'admin'
          }, {
            id: 2,
            title: 'Oc',
            path: '/admin/oc',
            icon: 'fas fa-cog',
            status: true,
            index: 2,
            type: 'admin'
          }, {
            id: 3,
            title: 'User',
            path: '/admin/user',
            icon: 'fas fa-users',
            status: true,
            index: 3,
            type: 'admin'
          }, {
            id: 4,
            title: 'OC User',
            path: '/admin/oc-user',
            icon: 'fas fa-user',
            status: true,
            index: 4,
            type: 'admin'
          }, {
            id: 5,
            title: 'Role',
            path: '/admin/role',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 5,
            type: 'admin'
          }, {
            id: 6,
            title: 'Project',
            path: '/project',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 1,
            type: 'client'
          }, {
            id: 7,
            title: 'Routine',
            path: '/routine',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 2,
            type: 'client'
          }, {
            id: 8,
            title: 'Abnormal',
            path: '/abnormal',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 3,
            type: 'client'
          }, {
            id: 9,
            title: 'To Do List',
            path: '/todolist',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 4,
            type: 'client'
          }, {
            id: 10,
            title: 'History',
            path: '/history',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 5,
            type: 'client'
          }, {
            id: 11,
            title: 'Follow',
            path: '/follow',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 6,
            type: 'client'
          }, {
            id: 11,
            title: 'Plan',
            path: '/ec/plan',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 6,
            type: 'ec'
          }, {
            id: 11,
            title: 'Ingredient',
            path: '/ec/ingredient',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 6,
            type: 'ec'
          }, {
            id: 11,
            title: 'Maintenance Data',
            path: '/ec/maintenace-data',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 6,
            type: 'ec'
          }, {
            id: 11,
            title: 'Guidance',
            path: '/ec/guidance',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 6,
            type: 'ec'
          }, // {
          //     id: 11,
          //     title: 'Report',
          //     path: '/report',
          //     icon: 'fas fa-shopping-cart',
          //     status: true,
          //     index: 6,
          //     type: 'ec',
          // },
          {
            id: 11,
            title: 'Guidance v2',
            path: '/ec/line',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 6,
            type: 'ec'
          }, {
            id: 11,
            title: 'Supplier',
            path: '/ec/supplier',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 6,
            type: 'ec'
          }, {
            id: 11,
            title: 'PartName1',
            path: '/ec/partname-1',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 6,
            type: 'ec'
          }, {
            id: 11,
            title: 'PartName2',
            path: '/ec/partname-2',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 6,
            type: 'ec'
          }, {
            id: 11,
            title: 'MaterialName',
            path: '/ec/material-name',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 6,
            type: 'ec'
          }, {
            id: 11,
            title: 'Model Name',
            path: '/ec/modal-name',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 6,
            type: 'ec'
          }, {
            id: 11,
            title: 'Building',
            path: '/ec/building',
            icon: 'fas fa-shopping-cart',
            status: true,
            index: 6,
            type: 'admin'
          }];
        } // constructor(id, title, icon, status) {
        //     this.id = id;
        //     this.title = title;
        //     this.icon = icon;
        //     this.status = status;
        // }


        _createClass(Nav, [{
          key: "getNavAdmin",
          value: function getNavAdmin() {
            var showDashboard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (showDashboard) {
              return this.Nav.filter(this.isAdmin);
            } else {
              return this.Nav.filter(this.isAdminShowDash);
            }
          }
        }, {
          key: "getNavClient",
          value: function getNavClient() {
            return this.Nav.filter(this.isClient);
          }
        }, {
          key: "getNavEc",
          value: function getNavEc() {
            return this.Nav.filter(this.isEc);
          }
        }, {
          key: "isAdminShowDash",
          value: function isAdminShowDash(element, index, array) {
            return element.type === 'admin';
          }
        }, {
          key: "isAdmin",
          value: function isAdmin(element, index, array) {
            return element.type === 'admin' && element.title !== 'Home';
          }
        }, {
          key: "isClient",
          value: function isClient(element, index, array) {
            return element.type === 'client';
          }
        }, {
          key: "isEc",
          value: function isEc(element, index, array) {
            return element.type === 'ec';
          }
        }]);

        return Nav;
      }();
      /***/

    },

    /***/
    "pgXt":
    /*!*********************************************************!*\
      !*** ./src/app/_core/_service/projectDetail.service.ts ***!
      \*********************************************************/

    /*! exports provided: ProjectDetailService */

    /***/
    function pgXt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectDetailService", function () {
        return ProjectDetailService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _model_projectDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_model/projectDetail */
      "r+ur");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        })
      };

      var ProjectDetailService = /*#__PURE__*/function () {
        function ProjectDetailService(http) {
          _classCallCheck(this, ProjectDetailService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
          this.titleManagerModal = 'Add Manager';
        }

        _createClass(ProjectDetailService, [{
          key: "addManager",
          value: function addManager(manager) {
            return this.http.post(this.baseUrl + 'Projects/AddManager', manager, httpOptions);
          }
        }, {
          key: "addMember",
          value: function addMember(member) {
            return this.http.post(this.baseUrl + 'Projects/AddMember', member, httpOptions);
          }
        }, {
          key: "getListUsers",
          value: function getListUsers() {
            return this.http.get(this.baseUrl + 'Projects/GetUsers');
          }
        }, {
          key: "getAreas",
          value: function getAreas() {
            return this.http.get(this.baseUrl + 'Tasks/From');
          }
        }, {
          key: "getUserByProjectID",
          value: function getUserByProjectID(id) {
            var detail = new _model_projectDetail__WEBPACK_IMPORTED_MODULE_4__["Detail"]();
            return this.http.get(this.baseUrl + 'Projects/GetUserByProjectID/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              console.log('getUserByProjectID: ', response);
              detail.createdBy = response.createdBy;
              detail.status = response.status;
              detail.selectedManager = response.selectedManager;
              detail.selectedMember = response.selectedMember;
              detail.title = response.title;
              return detail;
            }));
          }
        }, {
          key: "follow",
          value: function follow(ID) {
            return this.http.get("".concat(this.baseUrl, "Tasks/Follow/").concat(ID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              console.log('Follow: ', response);
              return response;
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + 'Tasks/Delete/' + id, httpOptions);
          }
        }, {
          key: "done",
          value: function done(id) {
            return this.http.get(this.baseUrl + 'Tasks/Done/' + id, httpOptions);
          }
        }, {
          key: "createMainTask",
          value: function createMainTask(task) {
            return this.http.post(this.baseUrl + 'Tasks/CreateTask', task, httpOptions);
          }
        }, {
          key: "createSubTask",
          value: function createSubTask(task) {
            return this.http.post(this.baseUrl + 'Tasks/CreateSubTask', task, httpOptions);
          }
        }]);

        return ProjectDetailService;
      }();

      ProjectDetailService.ɵfac = function ProjectDetailService_Factory(t) {
        return new (t || ProjectDetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ProjectDetailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProjectDetailService,
        factory: ProjectDetailService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDetailService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "pvWG":
    /*!***************************************************!*\
      !*** ./src/app/_core/_resolvers/glue.resolver.ts ***!
      \***************************************************/

    /*! exports provided: GlueResolver */

    /***/
    function pvWG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlueResolver", function () {
        return GlueResolver;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _service_glue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_service/glue.service */
      "xiVD");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_service/alertify.service */
      "HJFG");

      var GlueResolver = /*#__PURE__*/function () {
        function GlueResolver(glueService, router, alertify) {
          _classCallCheck(this, GlueResolver);

          this.glueService = glueService;
          this.router = router;
          this.alertify = alertify;
          this.pageNumber = 1;
          this.pageSize = 10;
        }

        _createClass(GlueResolver, [{
          key: "resolve",
          value: function resolve(route) {
            var _this27 = this;

            return this.glueService.getGlues(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              _this27.alertify.error('Problem retrieving data');

              _this27.router.navigate(['/dashboard']);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
          }
        }]);

        return GlueResolver;
      }();

      GlueResolver.ɵfac = function GlueResolver_Factory(t) {
        return new (t || GlueResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_glue_service__WEBPACK_IMPORTED_MODULE_3__["GlueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]));
      };

      GlueResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GlueResolver,
        factory: GlueResolver.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlueResolver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _service_glue_service__WEBPACK_IMPORTED_MODULE_3__["GlueService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "r+ur":
    /*!***********************************************!*\
      !*** ./src/app/_core/_model/projectDetail.ts ***!
      \***********************************************/

    /*! exports provided: Detail */

    /***/
    function rUr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Detail", function () {
        return Detail;
      });

      var Detail = function Detail() {
        _classCallCheck(this, Detail);
      };
      /***/

    },

    /***/
    "rehr":
    /*!****************************************************!*\
      !*** ./src/app/_core/_resolvers/role.resolvers.ts ***!
      \****************************************************/

    /*! exports provided: RoleResolver */

    /***/
    function rehr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleResolver", function () {
        return RoleResolver;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _service_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_service/role.service */
      "vGTY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_service/alertify.service */
      "HJFG");

      var RoleResolver = /*#__PURE__*/function () {
        function RoleResolver(roleService, router, alertify) {
          _classCallCheck(this, RoleResolver);

          this.roleService = roleService;
          this.router = router;
          this.alertify = alertify;
          this.page = 1;
          this.pageSize = 10;
        }

        _createClass(RoleResolver, [{
          key: "resolve",
          value: function resolve(route) {
            var _this28 = this;

            return this.roleService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              console.log(error);

              _this28.alertify.error('Problem retrieving data');

              localStorage.removeItem('user');
              localStorage.removeItem('token');

              _this28.router.navigate(['/login']);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          }
        }]);

        return RoleResolver;
      }();

      RoleResolver.ɵfac = function RoleResolver_Factory(t) {
        return new (t || RoleResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]));
      };

      RoleResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RoleResolver,
        factory: RoleResolver.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleResolver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _service_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _service_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vGTY":
    /*!************************************************!*\
      !*** ./src/app/_core/_service/role.service.ts ***!
      \************************************************/

    /*! exports provided: RoleService */

    /***/
    function vGTY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleService", function () {
        return RoleService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var RoleService = /*#__PURE__*/function () {
        function RoleService(http) {
          _classCallCheck(this, RoleService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrlEC;
          this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
          this.currentMessage = this.messageSource.asObservable();
        } // method này để change source message


        _createClass(RoleService, [{
          key: "changeMessage",
          value: function changeMessage(message) {
            this.messageSource.next(message);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.http.get("".concat(this.baseUrl, "Role/GetAll"));
          }
        }, {
          key: "mappingUserRole",
          value: function mappingUserRole(userRole) {
            return this.http.post("".concat(this.baseUrl, "UserRole/MappingUserRole"), userRole);
          }
        }, {
          key: "mapUserRole",
          value: function mapUserRole(userID, roleID) {
            return this.http.put("".concat(this.baseUrl, "UserRole/MapUserRole/").concat(userID, "/").concat(roleID), {});
          }
        }, {
          key: "lock",
          value: function lock(userRole) {
            return this.http.put("".concat(this.baseUrl, "UserRole/Lock"), userRole);
          }
        }, {
          key: "isLock",
          value: function isLock(userRole) {
            return this.http.put("".concat(this.baseUrl, "UserRole/IsLock"), userRole);
          }
        }, {
          key: "getRoleByUserID",
          value: function getRoleByUserID(userid) {
            return this.http.get("".concat(this.baseUrl, "UserRole/GetRoleByUserID/").concat(userid));
          }
        }]);

        return RoleService;
      }();

      RoleService.ɵfac = function RoleService_Factory(t) {
        return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      RoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RoleService,
        factory: RoleService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _views_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./views/layout/layout/layout.component */
      "vnHn");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _views_p404_p404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./views/p404/p404.component */
      "DAXm");
      /* harmony import */


      var _views_p500_p500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/p500/p500.component */
      "wcaP");
      /* harmony import */


      var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./_core/_guards/auth.guard */
      "vpVc");
      /* harmony import */


      var _core_preloading_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./_core/_preloading/selective-preloading-strategy.service */
      "vfzR");

      var routes = [// App routes goes here here
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: '',
        component: _views_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        runGuardsAndResolvers: 'always',
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [{
          path: 'ec',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-ec-ec-module */
            "views-ec-ec-module").then(__webpack_require__.bind(null,
            /*! ./views/ec/ec.module */
            "ht01")).then(function (m) {
              return m.ECModule;
            });
          }
        }]
      }, {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        data: {
          title: 'Login'
        }
      }, {
        path: '404',
        component: _views_p404_p404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"],
        data: {
          title: 'Not Found'
        }
      }, {
        path: '500',
        component: _views_p500_p500_component__WEBPACK_IMPORTED_MODULE_5__["P500Component"],
        data: {
          title: 'Server Error'
        }
      }, // otherwise redirect to home
      {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          // enableTracing: false, // <-- debugging purposes only
          preloadingStrategy: _core_preloading_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_7__["SelectivePreloadingStrategyService"]
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              // enableTracing: false, // <-- debugging purposes only
              preloadingStrategy: _core_preloading_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_7__["SelectivePreloadingStrategyService"]
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vfzR":
    /*!****************************************************************************!*\
      !*** ./src/app/_core/_preloading/selective-preloading-strategy.service.ts ***!
      \****************************************************************************/

    /*! exports provided: SelectivePreloadingStrategyService */

    /***/
    function vfzR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectivePreloadingStrategyService", function () {
        return SelectivePreloadingStrategyService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var SelectivePreloadingStrategyService = /*#__PURE__*/function () {
        function SelectivePreloadingStrategyService() {
          _classCallCheck(this, SelectivePreloadingStrategyService);

          this.preloadedModules = [];
        }

        _createClass(SelectivePreloadingStrategyService, [{
          key: "preload",
          value: function preload(route, load) {
            if (route.data && route.data.preload) {
              // add the route path to the preloaded module array
              this.preloadedModules.push(route.path); // log the route path to the console

              console.log('Preloaded: ' + route.path);
              return load();
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }
          }
        }]);

        return SelectivePreloadingStrategyService;
      }();

      SelectivePreloadingStrategyService.ɵfac = function SelectivePreloadingStrategyService_Factory(t) {
        return new (t || SelectivePreloadingStrategyService)();
      };

      SelectivePreloadingStrategyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SelectivePreloadingStrategyService,
        factory: SelectivePreloadingStrategyService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectivePreloadingStrategyService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vnHn":
    /*!*********************************************************!*\
      !*** ./src/app/views/layout/layout/layout.component.ts ***!
      \*********************************************************/

    /*! exports provided: LayoutComponent */

    /***/
    function vnHn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
        return LayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "ap2D");
      /* harmony import */


      var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../breadcrumb/breadcrumb.component */
      "T4rL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../footer/footer.component */
      "VKDu");

      var LayoutComponent = /*#__PURE__*/function () {
        function LayoutComponent() {
          _classCallCheck(this, LayoutComponent);
        }

        _createClass(LayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LayoutComponent;
      }();

      LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
        return new (t || LayoutComponent)();
      };

      LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LayoutComponent,
        selectors: [["app-layout"]],
        decls: 9,
        vars: 0,
        consts: [[1, "wrapper"], [1, "content-wrapper"], [1, "content-header"], [1, "content"], [1, "container-fluid"]],
        template: function LayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xheW91dC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-layout',
            templateUrl: './layout.component.html',
            styleUrls: ['./layout.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vpVc":
    /*!*********************************************!*\
      !*** ./src/app/_core/_guards/auth.guard.ts ***!
      \*********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function vpVc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_service/auth.service */
      "j7qE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router, route) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
          this.route = route;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.authService.loggedIn()) {
              return true;
            }

            this.router.navigate(['login'], {
              queryParams: {
                uri: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "wcaP":
    /*!**********************************************!*\
      !*** ./src/app/views/p500/p500.component.ts ***!
      \**********************************************/

    /*! exports provided: P500Component */

    /***/
    function wcaP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P500Component", function () {
        return P500Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var P500Component = /*#__PURE__*/function () {
        function P500Component() {
          _classCallCheck(this, P500Component);
        }

        _createClass(P500Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return P500Component;
      }();

      P500Component.ɵfac = function P500Component_Factory(t) {
        return new (t || P500Component)();
      };

      P500Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: P500Component,
        selectors: [["app-p500"]],
        decls: 12,
        vars: 0,
        consts: [[1, "content"], ["href", "mailto:sy.pham@shc.ssbshoes.com?cc=peter.tran@shc.ssbshoes.com;leo.doan@shc.ssbshoes.com\n              &subject=Maintenance%20Mode-Work%20Management%20System"]],
        template: function P500Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "We\u2019ll be back soon!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sorry for the inconvenience but we\u2019re performing some maintenance at the moment. If you need to you can always ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "contact us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " otherwise we\u2019ll be back online shortly! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u2014 The Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".content[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 150px;\r\n  }\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 50px !important;\r\n  }\r\n  .content[_ngcontent-%COMP%] {\r\n    font: 20px Helvetica, sans-serif;\r\n    color: #333;\r\n  }\r\n  article[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: left;\r\n    width: 650px;\r\n    margin: 0 auto;\r\n  }\r\n  a[_ngcontent-%COMP%] {\r\n    color: #dc8100;\r\n    text-decoration: none;\r\n  }\r\n  a[_ngcontent-%COMP%]:hover {\r\n    color: #333;\r\n    text-decoration: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcDUwMC9wNTAwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcDUwMC9wNTAwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNTBweDtcclxuICB9XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIGZvbnQ6IDIwcHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIGFydGljbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgY29sb3I6ICNkYzgxMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P500Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-p500',
            templateUrl: './p500.component.html',
            styleUrls: ['./p500.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "xiVD":
    /*!************************************************!*\
      !*** ./src/app/_core/_service/glue.service.ts ***!
      \************************************************/

    /*! exports provided: GlueService */

    /***/
    function xiVD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlueService", function () {
        return GlueService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _model_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_model/pagination */
      "2zK7");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json'
        })
      };

      var GlueService = /*#__PURE__*/function () {
        function GlueService(http) {
          _classCallCheck(this, GlueService);

          this.http = http;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrlEC;
          this.glueSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
          this.currentGlue = this.glueSource.asObservable();
        }

        _createClass(GlueService, [{
          key: "getGlues",
          value: function getGlues(page, itemsPerPage) {
            var paginatedResult = new _model_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatedResult"]();
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();

            if (page != null && itemsPerPage != null) {
              params = params.append('pageNumber', page);
              params = params.append('pageSize', itemsPerPage);
            }

            return this.http.get(this.baseUrl + 'Glue/getGlues', {
              observe: 'response',
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              // console.log(response);
              paginatedResult.result = response.body;

              if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
              }

              return paginatedResult;
            }));
          }
        }, {
          key: "getAllGlue",
          value: function getAllGlue() {
            return this.http.get(this.baseUrl + 'Glue/GetAll', {});
          }
        }, {
          key: "create",
          value: function create(ingredient) {
            return this.http.post(this.baseUrl + 'Glue/create', ingredient);
          }
        }, {
          key: "create1",
          value: function create1(ingredient) {
            return this.http.post(this.baseUrl + 'Glue/create1', ingredient);
          }
        }, {
          key: "update",
          value: function update(ingredient) {
            return this.http.put(this.baseUrl + 'Glue/update', ingredient);
          }
        }, {
          key: "updateChemical",
          value: function updateChemical(ingredient) {
            return this.http.put(this.baseUrl + 'Glue/updateChemical', ingredient);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.baseUrl + 'Glue/delete/' + id);
          }
        }, {
          key: "changeGlue",
          value: function changeGlue(glue) {
            this.glueSource.next(glue);
          }
        }, {
          key: "getGlueByModelName",
          value: function getGlueByModelName(id) {
            return this.http.get(this.baseUrl + "Glue/GetGluesByModelNameID/".concat(id), {});
          }
        }, {
          key: "getAllGluesForBPFC",
          value: function getAllGluesForBPFC(modelNameID, articleID, processID) {
            return this.http.get(this.baseUrl + "Glue/GetAllGluesForBPFC/".concat(modelNameID, "/").concat(articleID, "/").concat(processID), {});
          }
        }, {
          key: "getAllGluesByBPFCID",
          value: function getAllGluesByBPFCID(BPFCID) {
            return this.http.get(this.baseUrl + "Glue/getAllGluesByBPFCID/".concat(BPFCID), {});
          }
        }, {
          key: "getAllPartName",
          value: function getAllPartName() {
            return this.http.get(this.baseUrl + 'PartName/GetAll', {});
          }
        }, {
          key: "getAllPartName2",
          value: function getAllPartName2() {
            return this.http.get(this.baseUrl + 'PartName2/GetAll', {});
          }
        }, {
          key: "getAllMaterialName",
          value: function getAllMaterialName() {
            return this.http.get(this.baseUrl + 'MaterialName/GetAll', {});
          }
        }]);

        return GlueService;
      }();

      GlueService.ɵfac = function GlueService_Factory(t) {
        return new (t || GlueService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      GlueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GlueService,
        factory: GlueService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlueService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
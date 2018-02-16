webpackJsonp(["detail.module"],{

/***/ "../../../../../src/app/detail/detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n* {\n  box-sizing: content-box!important;\n}\n.contain {\n  margin: 0 auto;\n  width: 100%;\n  text-align: center;\n}\n.containColor{\n  background-color: #f4f4f4;\n}\n.detail{\n  text-align: center;\n  width: 1600px;\n  min-width: 1200px;\n  margin: 0 auto;\n}\n\n.banner{\n  position: relative;\n  height: 572px;\n  width: 100%;\n}\n.banner>img:nth-child(1){\n  height: 572px;\n  width: 100%;\n}\n.goBack{\n  position: absolute;\n  left: 74px;\n  top: 69px;\n  width: 50px;\n  height: 44px;\n  z-index: 2;\n}\n\n.businessScope{\n  width: 1200px;\n  margin: 0 auto;\n}\n.businessScope>div{\n   padding: 30px 0;\n   border-bottom: dashed 1px #dcdcdc;\n  text-align: left;\n  line-height: 30px;\n }\n.businessScope li{\n  margin: 50px 0 50px 25px;\n  display: inline-block;\n}\n.businessScope li:nth-child(1){\n  margin-left: 0;\n}\n.businessScope li>div{\n  background: url(" + __webpack_require__("../../../../../src/assets/png/ellipse.png") + ");\n  display: inline-block;\n  width: 150px;\n  height: 150px;\n  line-height: 150px;\n  vertical-align: middle;\n  color: white;\n}\n.variety{\n  height: 180px;\n  background-color: #f4f4f4;\n  width: 1200px;\n  margin: 0 auto;\n}\n\n.variety li{\n  display: inline-block;\n  margin:19px 0 19px 250px;\n}\n\n.variety li:nth-child(1){\n  margin-left:0;\n}\n.variety  li>div{\n  margin-top: 10px;\n  color: #949494;\n}\n\n.slow{\n  width: 1200px;\n  margin: 0 auto;\n}\n\n.slow h1{\n  margin: 50px auto 20px;\n}\n.slow ul{\n  text-align: left;\n}\n\n.slow li{\n  display: inline-block;\n}\n\n.slow li span{\n  display: inline-block;\n  height: 64px;\n  width: 136px;\n  border: #1b96ff 2px dashed;\n  margin: 30px 10px 30px 13px;\n  text-align: center;\n  line-height: 64px;\n  vertical-align: middle;\n}\n.slow li>img{\n  height: 7px;\n  width: 31px;\n}\n.intro{\n  width: 1200px;\n  height: 442px;\n  margin: 0 auto;\n  text-align: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.intro>div:nth-child(1){\n  position: relative;\n  display: inline-block;\n  width: 459px;\n  line-height: 442px;\n  vertical-align: middle;\n}\n.intro>div:nth-child(1)>img{\n  margin-top: 50px;\n}\n\n.intro>div:nth-child(2){\n  display: inline-block;\n  text-align: left;\n  width: 617px;\n  margin-left: 106px;\n}\n.intro>div:nth-child(2)>h1{\n  margin-top: 50px;\n  padding-bottom: 26px;\n  height: 30px;\n}\n\n.intro>div:nth-child(2) p{\n  line-height: 30px;\n  width: 617px;\n}\n.price{\n  width: 1200px;\n  margin: 0 auto 120px;\n}\n.price>h1{\n  margin: 50px auto;\n}\n\n.price>ul{\n  line-height: 30px;\n  text-align: left;\n}\n.price p{\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contain\" [ngStyle]=\"{'background-color': selectedBannerColor}\">\n  <img class=\"goBack\" src=\"assets/detail/go-back.png\" (click)=\"onGoback()\">\n  <div class=\"banner w_1200_1600 \">\n    <img src= \"{{selectedPic.banner}}\">\n  </div>\n</div>\n<div class=\"contain\" *ngIf=\"selectedBusinessScope.detail!== ''\">\n  <div class=\"w_1200_1600 \">\n    <div class=\"businessScope\">\n      <div class=\"fnt_16\">{{selectedBusinessScope.detail}}</div>\n      <ul>\n        <li *ngFor=\"let item of selectedBusinessScope.variety\" >\n          <div class=\"fnt_22\">{{item}}</div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"contain containColor\" *ngIf=\"selectedVariety.length!== 0\">\n  <div class=\"w_1200_1600 containColor\">\n    <div class=\"variety\">\n      <ul>\n        <li *ngFor=\"let item of selectedVariety\" >\n          <img src=\"{{item.pic}}\">\n          <div class=\"fnt_16\">{{item.title}}</div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"contain\" *ngIf=\"selectedProcess.steps.length  !== 0\">\n  <div class=\"w_1200_1600 \">\n    <div class=\"slow\" >\n      <h1 class=\"fnt_22\">{{selectedProcess.title}}</h1>\n      <div>\n        <ul>\n          <li *ngFor=\" let step of selectedProcess.steps; let i = index\">\n            <span class=\"fnt_16\">{{step}}</span>\n            <img *ngIf=\"selectedProcess.steps.length-1!==i\" src=\"assets/detail/arrow.png\">\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"contain\" *ngIf=\"selectedIntro1.detail.length !== 0\">\n  <div class=\"w_1200_1600 \">\n    <div class=\"intro\">\n      <div>\n        <img src=\"{{selectedPic.intro1}}\">\n      </div>\n      <div>\n        <h1 class=\"fnt_30\">{{selectedIntro1.title}}</h1>\n        <ul>\n          <li *ngFor=\" let p of selectedIntro1.detail\">\n            <p class=\"fnt_16\">{{p}}</p>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"contain containColor\" *ngIf=\"selectedIntro.detail.length !== 0\">\n  <div class=\"w_1200_1600 containColor\">\n    <div class=\"intro containColor\">\n      <div>\n        <img src=\"{{selectedPic.intro}}\">\n      </div>\n      <div>\n        <h1 class=\"fnt_30\">{{selectedIntro.title}}</h1>\n        <ul>\n          <li *ngFor=\" let p of selectedIntro.detail\">\n            <p class=\"fnt_16\">{{p}}</p>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"contain\" *ngIf=\"selectedRedPrice.length !== 0\">\n  <div class=\"w_1200_1600 \">\n    <div class=\"price\">\n      <h1 class=\"fnt_30\">{{selectedPriceTitle}}</h1>\n      <ul>\n        <li *ngFor=\" let p of selectedRedPrice\">\n          <p class=\"fnt_16\" [innerHTML]=\"p\"></p>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class =\"contain footerContain\">\n  <div class=\"w_1200_1600 \">\n    <app-footer></app-footer>\n  </div>\n</div>\n<app-contact></app-contact>\n"

/***/ }),

/***/ "../../../../../src/app/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailComponent = (function () {
    function DetailComponent(route, router, sanitizer) {
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.selectedRedPrice = [];
        this.allDetail = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var pathPrefix = 'assets/detail/';
        this.allDetail = [
            {
                bannerBackgroundColor: '#1b96ff',
                variety: [
                    { pic: pathPrefix + 'web1.png', title: '企业网站' },
                    { pic: pathPrefix + 'web2.png', title: '门户网站' },
                    { pic: pathPrefix + 'web3.png', title: '电商网站' },
                ],
                businessScope: {
                    detail: '',
                    variety: []
                },
                process: {
                    title: '网站制作详细流程',
                    steps: ['申请域名', '申请空间', '定位网站', '网站策划', '网站设计', '网站编辑', '网站测试', 'FTP上传', '完善资料', '网站维护'],
                },
                pics: { banner: pathPrefix + 'web-banner.png', intro: pathPrefix + 'web-one.png', intro1: '' },
                intro: {
                    title: '多端网站同一',
                    detail: [
                        '我们为你提供ＰＣ端与移动端多端一体的网站制作，设计风格统一，功能点一致访客访问时智能识别客户访问终端（例如：PC页面分享至手机，' +
                            '打开手机页面展示），保证更好的浏览体验，同时支持PC页面与移动页面的手动切换。'
                    ]
                },
                intro1: {
                    title: '',
                    detail: []
                },
                price: {
                    title: '网站价格及功能介绍',
                    detail: [
                        '网站包括：(1) 域名申请、空间申请（自付款）；(2) 可预览首页、二级页面、详情页、附加logo设计、(3)上传产品图片功能、图片官方水印功能、' +
                            '访问者记录功能、用户登录功能、二维码识别功能、留言功能（匿名留言，实名留言+注册登录）、在线支付功能。价值：<span style="color: red">￥3888。</span>',
                        '附加其他功能或者其他需求我们会根据设计开发的预算产出附加预算额度。'
                    ]
                }
            },
            {
                bannerBackgroundColor: '#1b96ff',
                variety: [],
                businessScope: {
                    detail: '',
                    variety: []
                },
                process: {
                    title: 'app制作详细流程',
                    steps: ['原型制作', 'ui设计', '代码研发', '性能测试', '机型适配', '屏幕适配', 'app开发', '后期维护', '版本升级'],
                },
                pics: { banner: pathPrefix + 'app-banner.png', intro: pathPrefix + 'app-phone.png', intro1: '' },
                intro: {
                    title: '多种类型app服务',
                    detail: [
                        '我们可为您提供社交app、视频app、直播app、电商app等类型基于安卓手机Android系统和IOS系统下的应用程序（APP）的开发，' +
                            '专业UI设计团队以及Android开发团队，开发完成的APP系统平台兼容性强，运行流畅稳定。独有的Android App加密机制，全面保障企业信息及用户数据。'
                    ]
                },
                intro1: {
                    title: '',
                    detail: []
                },
                price: {
                    title: 'app价格与功能介绍',
                    detail: [
                        'app制作页面要求50页以内+基本需求、安卓系统价值：<span style="color: red">￥8888。</span>',
                        '附加其他功能或者其他需求以及iOS系统开发我们会根据设计开发的预算产出附加预算额度。'
                    ]
                }
            },
            {
                bannerBackgroundColor: '#00052e',
                variety: [
                    { pic: pathPrefix + 'weChart1.png', title: '订阅号' },
                    { pic: pathPrefix + 'weChart2.png', title: '服务号' },
                    { pic: pathPrefix + 'weChart3.png', title: '微信小程序' },
                ],
                businessScope: {
                    detail: '',
                    variety: []
                },
                process: {
                    title: '服务与开发流程',
                    steps: ['微信公众号申请', '公众号头像设计', '内容架构完善', '发文模板提供', '营销主配图', '小程序需求获知', '小程序页面设计', '小程序页面开发'],
                },
                pics: { banner: pathPrefix + 'wechart-banner.png', intro: pathPrefix + 'wechart-phone.png', intro1: '' },
                intro: {
                    title: '企业推广之门',
                    detail: ['我们为您提供微信公众平台的一系列推广路径，更专业的朋友圈软文推送以及对固定合作客户的实时维护与业务咨询。' +
                            '使的自身企业以媒体的方式提供一种新的信息传播方式，构建与客户之间更好的沟通与管理模式，帮助企业快速实现全新的公众号服务平台。',
                        '运用最新的开发能力，拓展延伸出可在微信内被便捷的获取和椽笔，同时具有特色的使用体验的小程序开发，为企业营造最前沿的技术支持，' +
                            '便于企业营销以及与用户互动的程序延展性开发。']
                },
                intro1: {
                    title: '',
                    detail: []
                },
                price: {
                    title: '网微信端价格与功能介绍',
                    detail: [
                        '服务内容包括：(1) 微信公众号（服务号、订阅号）的开通，与内容框架完善；(2) 免费提供营销路线方案(3)免费三次技术支持' +
                            '（营销软文编写与推送，用户定期维护方法等）。（4）微信平台拓展小程序的开发。价值：<span style="color: red">￥1888起。</span>',
                        '附加其他功能或者其他需求我们会根据设计开发的预算产出附加预算额度。'
                    ]
                }
            },
            {
                bannerBackgroundColor: '#1b96ff',
                variety: [],
                businessScope: {
                    detail: '我们的业务范围包括新闻营销、论坛营销、问答营销、百科营销、报纸软文营销、微博营销、微信营销，视频营销、媒体邀约、活动策划、' +
                        '海外推广、效果广告等一站式网络整合营销服务，可为全国各大企业提供网络推广咨询服务。',
                    variety: ['软文推广', '微博推广', '微信推广', '视频营销', '直播营销', '直播营销', '社会化营销']
                },
                process: {
                    title: '',
                    steps: [],
                },
                pics: { banner: pathPrefix + 'plats-banner.png', intro: pathPrefix + 'plats-lamp.png', intro1: '' },
                intro: {
                    title: '推广优势',
                    detail: [
                        '1.通过在腾讯、搜狐、网易等媒体上发布公司新闻稿，同时在宝贝描述上展示这些新闻，可以迅速提升品牌形象:',
                        '2.来自第三方权威网站的报道，比硬广告更加有说服力，把相关媒体报道截图放到产品描述宣传上，增强品牌权威性；',
                        '3.当用户想了解您时，可以在百度搜索到您的相关信息，而且很容易被人转载发布，起到免费主动宣传作用；',
                        '4.文章里的产品网址或联系方式，可促使顾客主动与您联系，留下的宣传网址不会被去掉，长期有效，效果好！'
                    ]
                },
                intro1: {
                    title: '',
                    detail: []
                },
                price: {
                    title: '推广说明以及价格',
                    detail: ['1.一篇新闻稿的字数以800—1200字为宜，我方负责各大新闻媒体投放，任务完成后我们会提供新闻稿投放地址给客户验收！',
                        '2.一旦确定需要发布的稿件内容，不再支持修改服务或者是发布出来了需要进行修改，这方面是各大网站的编辑不允许的，所以建议客户稿件确定好再安排发布。',
                        '3.根据稿件不同，网站的编辑的休息时间不同，以及网站是否严查等相关因素有关，95%以上的情况是接了就能发布上的，如果没有发布成功的新闻是不收任何费用的。',
                        '4.大多数的网站，包括门户网站，都可以带链接（非超链接）以及图片等内容，具体的可以咨询客服，如果有特别要求的，我们会给您指出来修改。',
                        '以上服务内容价值：<span style="color: red">￥3888起。</span>']
                }
            },
            {
                bannerBackgroundColor: '#9c62fb',
                variety: [
                    { pic: pathPrefix + 'logo1.png', title: 'LOGO设计' },
                    { pic: pathPrefix + 'logo2.png', title: '企业VI' },
                    { pic: pathPrefix + 'logo3.png', title: '平面设计' },
                    { pic: pathPrefix + 'logo4.png', title: '广告设计' },
                ],
                businessScope: {
                    detail: '',
                    variety: []
                },
                process: {
                    title: '',
                    steps: [],
                },
                pics: { banner: pathPrefix + 'logo-banner.png', intro: pathPrefix + 'logo-vi.png', intro1: pathPrefix + 'logo-bird.png' },
                intro: {
                    title: '企业VI设计',
                    detail: [
                        'VI（视觉识别Visual Identity）以标志、标准字、标准色为核心展开的完整的、系统的视觉表达体系。将企业理念、企业文化、' +
                            '服务内容、企业规范等抽象概念转换为具体记忆和可识别的形象符号，从而塑造出排他性的企业形象。VI是整体的一套系统性的形象设计，' +
                            '其中包括：企业标志、名片、企业画册、台历、纸杯、展板、迎客墙、文化衫等一系列的物料产品，使企业更具有整体性、差异性、独树一帜。' +
                            '可使员工时刻铭记企业的理念与文化特色，更便于周边的形象传播。'
                    ]
                },
                intro1: {
                    title: 'LOGO设计',
                    detail: [
                        'LOGO代表着一个企业的形象、脸面是一种视觉化的信息表达方式，更便于消费者对企业的认知与铭记，使企业形象在信息化' +
                            '时代中更快速的传播。我们有专业的设计团队，可为您提供一切的LOGO需求的设计保障，LOGO尺规化设计更加的标准更加的美观，符合现代美学。',
                        '们可提供扁平化LOGO设计、多维LOGO设计、MEB风格、空间化立体化等多样风格设计方式，贴合企业特征符合企业文化使得企业得到质的飞跃。'
                    ]
                },
                price: {
                    title: '平面与广告设计',
                    detail: ['主要针对与对外物料推广、海报展架、电商营销配图、产品售卖配图、活动配图、自媒体发文配图等一系列的日常营销与' +
                            '展示性的图片设计。我们可为您提供扁平化视觉设计、轴测图现代设计、科技炫酷配图、海报合成图等多种设计方法设计而成的精美' +
                            '海报图片，只有您想不到没有我们做不到。']
                }
            },
            {
                bannerBackgroundColor: '#2d3167',
                variety: [],
                businessScope: {
                    detail: '',
                    variety: []
                },
                process: {
                    title: '',
                    steps: [],
                },
                pics: { banner: pathPrefix + 'bag-banner.png', intro: '', intro1: '' },
                intro: {
                    title: '',
                    detail: []
                },
                intro1: {
                    title: '',
                    detail: []
                },
                price: {
                    title: '',
                    detail: ['我们为您提供“互联网+”系统化一系列的服务项目，包括企业初级VI制作、网络建站包括PC站与移动站、微信公众号的营销与' +
                            '企业站的绑定。使您安心放心的直接快速进入“互联网+”的模式，快速的执行线上推广与营销方案，并定期为您免费维护系统网站，指导您' +
                            '稳定与提升线上运营的流量方案。价格：<span style="color: red">￥4999起。</span>']
                }
            },
        ];
        var selectedNode = Number(this.route.snapshot.paramMap.get('node'));
        this.selectedVariety = this.allDetail[selectedNode - 1].variety;
        this.selectedBusinessScope = this.allDetail[selectedNode - 1].businessScope;
        this.selectedProcess = this.allDetail[selectedNode - 1].process;
        this.selectedPic = this.allDetail[selectedNode - 1].pics;
        this.selectedIntro = this.allDetail[selectedNode - 1].intro;
        this.selectedIntro1 = this.allDetail[selectedNode - 1].intro1;
        this.selectedPriceTitle = this.allDetail[selectedNode - 1].price.title;
        this.selectedBannerColor = this.allDetail[selectedNode - 1].bannerBackgroundColor;
        for (var _i = 0, _a = this.allDetail[selectedNode - 1].price.detail; _i < _a.length; _i++) {
            var p = _a[_i];
            var tempP = void 0;
            tempP = this.sanitizer.bypassSecurityTrustHtml(p);
            this.selectedRedPrice.push(tempP);
        }
        window.scrollTo(0, 0);
    };
    DetailComponent.prototype.onGoback = function () {
        this.router.navigate(['/main']);
    };
    DetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-detail',
            template: __webpack_require__("../../../../../src/app/detail/detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/detail/detail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailModule", function() { return DetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_component__ = __webpack_require__("../../../../../src/app/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_routes__ = __webpack_require__("../../../../../src/app/detail/detail.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_module__ = __webpack_require__("../../../../../src/app/contact/contact.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_module__ = __webpack_require__("../../../../../src/app/footer/footer.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DetailModule = (function () {
    function DetailModule() {
    }
    DetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_5__contact_contact_module__["a" /* ContactModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__detail_routes__["a" /* routes */])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail_component__["a" /* DetailComponent */]
            ]
        })
    ], DetailModule);
    return DetailModule;
}());



/***/ }),

/***/ "../../../../../src/app/detail/detail.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_component__ = __webpack_require__("../../../../../src/app/detail/detail.component.ts");

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__detail_component__["a" /* DetailComponent */], pathMatch: 'full' },
];


/***/ }),

/***/ "../../../../../src/assets/png/ellipse.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkNDQzI5QzVFNkM0MTFFNzg0MDc4NzMxNUFCMzNBRDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkNDQzI5QzZFNkM0MTFFNzg0MDc4NzMxNUFCMzNBRDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQ0NDMjlDM0U2QzQxMUU3ODQwNzg3MzE1QUIzM0FENCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQ0NDMjlDNEU2QzQxMUU3ODQwNzg3MzE1QUIzM0FENCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhCTNxwAAAm6SURBVHja7J1tjFXVFYbXXB1mRseoJNQEKJpUES1YhiFCazO1iAJWWowmjaBOtD+MP4xRW8TWBJs0iFFSGhNNf9SiE1B/mKqAKPgBWKujCIpWxY/ED1BbI21kqjCGTtfbs65eh7lzz72zzzn77PM+yUtIZuDsvdZ7z93fu2ncHQNC/s8RqumqTtVE1UmqCapjVO2qNvu9L1R9qn+rPlK9rXpNtU31gupzhlLk8ILXf5JqgWqeaqZqVIx/02YaY+brqvhZv+o51QbVg6o3ihrYpgK+sUarLlFdrjot4WftVN2l6lHtLVKQSwWq61RL8IeqlSmYSuwZK+2ZPVYGGisQuuyrabvqYlVLBmVosWdvt7J00Vj5pUP1qGqLai6+9n1oelhZtljZOmis/DBWtcZ6aXM8LuccK+MaKzON5SnNql+qdqkuykndSlbWXVb2ZhrLL0639sutEo055Y12K/t2qwuNlTGtqltUz6gmB5CPyVYX1KmNxsqucY5P+GIJa6D3cKvTi6ppNFa6PSu0R55VnRJwrxZ1+5vVtYnGSpYx1k1He6RFwqfF6vqo1Z3GSoAfqHaozpHicY7V/Qwayy1XqzarxklxQd2fsljQWA56faskmm9rFtJssVhlsaGxGgCj0Zj66KafDqHb3uBjaaz6mKLqlUAGCxNihkRrv6bQWPGYrXpaNZ7eqcm3LVazaazar/hHVEfTM7FBrNb71mTwyVhLVX9mI70hRlnsltJY3+zpYPnuTZLDEWaPaLIY3uXDhzNrY6HL/IDqMvrCGZdZTFuLaqx2axvMpxecM99i2140Yx2r2qSaRQ8kxiyL8bFFMdZxEk1NzGTuE2emxfq40I2FncUYTf8ec54aiPVW1fGhGmu8VfBk5jp1Jlrsx4dmrDH2Sj6eOc6MCZaDb4ViLByq8YTqROY2c5CDx9No0CdtLHR3sfpxCnPqDcjFhqSHIpI0FnaZPCTRLDzxixmWm7a8GQtzV/cJx6l8Brm5X+Id3eSFsTBnhfmqnzJ33jPfctWUB2MtUy1iznLDIsuZ18a6UrWEucodSyx3XhoLX323M0e55XaXzRdXxkIXFsfxHMb85Bbk7l5xdGaXC2NhvxuWEx/J3OQenBz9sDjYvzlSY2ELOBaVceNDOIy3nLZkaaw/CgdAQ2SG5TYTY10j3EwaMt2W41SNhcMpljP2wbNcGjyIpBFjYQkMpmtGMe7BU56aG5O0sTD038PGeuEa86ulzmmfeo11rfh9xDVJhrMt94kYCwNnyxjjwrJM6hg8jWusVnsdsl1V7PbWaom5ETausX4rYR8kS+JxinnBibFwRtV1jCkxrpMY55bVMhYOl/iTcHKZfA28UPPgkVrGQk9gMmNJBvFdic6fb8hYmOG+kTEkVbhRhlkFMZyxMJzfzviRKhwhw0zrVTMWrphdyNiRGsAjHfUY62Yp1n3RpDFK5pVYxsJ9xXMZMxKTOTLEHddDGesGxorUyQ21jDVVOMlMGntrdQxnLIyq8uRiUi9NMmh2ptJYo1UXMkakQS4wDx1irEvF8xuliNe0mocOMRY3RpCR0j3YWN+xhjshI2GqeekrYy1gTIgjzq80Fm+HIK44r2wsLDnlbmbiCnhpFIzVyd4gcdw7nF7i24ok8daCsXhTBHHNRBhrIuNAkjDWCYwDccwJMNZRjANxzFEwFte1k0SM1cY4EMe0cl07SQQY6wuGgThmP4zVxzgQx+yDsfYxDiQJY73LOBDHvAtjvck4EMe8CWPtYhxIEsZ6nnEgjumFsbahe8hYEEfAS9tgrH44jPEgjsA3YH955H0d40EcsRZ/lI31F8aDOOLBSmO9o3qJMSEj5GXV25XGAnczLmSErCr/pdJY97B3SEbYG+wZylh7JbqylZBGgHc+HcpYYIVqgDEidTJg3pFqxtqheoxxInWy0bxT1VjgZsaJ1Mkh1w0OZaytfGuROt9WW+MYC+AU3P8yZiRG22rJUD+oZix8X65h3EgNVg9uW9UyVvmt9TljR6rQV+1tVctYu1W/Y/xIFXDT6p5GjAVuU73KGJJB/F31h+F+oZaxvlT9QnWQsSQGvHC5eaNhYwEs3FrBeBJjhcRYzh53i/1S1euMaeF5w7wgroyFmetFEi1jJsWk3zyw36WxAMYrfsP4FhbcAb097i/Xe9oMvl83McaFY5ONEEhSxhqw1+Eexrow7LGcDyRpLPCJ6ue1upskCL60XH9S7z9s9OC1Z1TXM+7Bc73lWtIyFvi9cANGyNxjOZa0jQWuEO6iDpFey61kZawDEl3Zupu5CAbkElc478/SWOVew7nCJTYhgBz+xMWLwtWpya+oLhJOVueZg5bDnS7+M5fHcT+suor5yS1XWQ7FN2OBO1XLmaPcsdxyJ74aC/xaorXQJB+stpyJ78bC0D8Wgq1lzrxnneVqIA/GAlhigamAJ5k7b3nScpTIUqgk79LBVSoLhAOoPtJruUlsiCjpS5pw68U8iYYjiB8gF+dKwjeSpHH7179Us8VOeiOZghycLdGRVZJ3Y4F/qmap3mduM+N9y8E/0nhYmvcVfqDqUr3FHKfOWxb7D9J6YNoXYb5nFWSbK902VZfFXkI1FvhYdabwqpU0eN5i/XHaD87q6t691qDfzNwnxmaL8d4sHp7lndD7rNu7nh5wzvo0hhR8NRbAIOr5UnE+OBkxqyymmd717cMt9tgJgvkqHIvDE5sbB7G7SWIc2FEUY3kXlBzi3Yez5FmA8BrH0tjP6JXYfGbtKa+aEyUPA4Xt3D8UbtCIw26L1eO+FazkacAwqDdTONY1HIjNDPF0sLnkceCw++dHEm2cJN+kx2Lzoa8FLHkeQOxt61Zdw0b9V410xOJS8fymtlJOArpSopn5Ip9yg7qfZbHwnlKOAvtXVYdEV2wUjY1W96fzUuBSzgKM43SwIvVXUoxjK/utrvOkgaOEaKz6wB0/OF3u+xL2gbuvWx1vkxzea1TKceBxHman6lYJa2v/QatTp9Rx5ieN5RZMtC5WnSFh3KDxqtVlsWQ8iVx0Y5XptU84EtKXw/L3Wdk7JZDtcqEYq9zQxVfIJNW9ko+VEgNW1klW9mA6JCEZqwzGexbap9/noYmNVsaFEuD4XIjGKoMLD+aofix+XUWMspxpZdsRavBDNlaZzaq5qmkSnaxyIIMyHLBnT7OybAk96EUwVuUb7GLVWInm23am8Myd9qyx9uwdRQl207g7Cr0a+FTVzyQa2cYyneYR/n+YJH5OtUH1kOq1oga26Maq5EjVdNNJqhNVE1Sj7Wet9ntYVfAfic6k+EiiXcYYJX9Btc1+Vnj+J8AAI7eehi1QPNAAAAAASUVORK5CYII="

/***/ })

});
//# sourceMappingURL=detail.module.chunk.js.map
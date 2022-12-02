"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const ElementUI = require("element-ui");
const zhCN = require("./node_modules/element-ui/lib/locale/lang/zh-CN.js");
require("./styles/index.js");
require("./cn-badge/index.js");
require("./cn-form/index.js");
const index$1 = require("./cn-pagination/src/index.js");
require("./cn-table/index.js");
require("./cn-tags/index.js");
const index = require("./cn-tags/src/index.js");
const index$2 = require("./cn-badge/src/index.js");
const index$4 = require("./cn-table/src/index.js");
const index$3 = require("./cn-form/src/index.js");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const ElementUI__default = /* @__PURE__ */ _interopDefaultLegacy(ElementUI);
const components = [
  index,
  index$1,
  index$2,
  index$3,
  index$4
];
const defaultTableConfig = {
  request: fetch
};
const install = function(Vue, config = {}) {
  Vue.use(ElementUI__default.default, zhCN);
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$CN_V2C_TABLE_CONFIG = {
    ...defaultTableConfig,
    ...config.table
  };
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
Object.defineProperty(exports, "Alert", {
  enumerable: true,
  get: () => ElementUI.Alert
});
Object.defineProperty(exports, "Aside", {
  enumerable: true,
  get: () => ElementUI.Aside
});
Object.defineProperty(exports, "Autocomplete", {
  enumerable: true,
  get: () => ElementUI.Autocomplete
});
Object.defineProperty(exports, "Avatar", {
  enumerable: true,
  get: () => ElementUI.Avatar
});
Object.defineProperty(exports, "Backtop", {
  enumerable: true,
  get: () => ElementUI.Backtop
});
Object.defineProperty(exports, "Badge", {
  enumerable: true,
  get: () => ElementUI.Badge
});
Object.defineProperty(exports, "Breadcrumb", {
  enumerable: true,
  get: () => ElementUI.Breadcrumb
});
Object.defineProperty(exports, "BreadcrumbItem", {
  enumerable: true,
  get: () => ElementUI.BreadcrumbItem
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: () => ElementUI.Button
});
Object.defineProperty(exports, "ButtonGroup", {
  enumerable: true,
  get: () => ElementUI.ButtonGroup
});
Object.defineProperty(exports, "Calendar", {
  enumerable: true,
  get: () => ElementUI.Calendar
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: () => ElementUI.Card
});
Object.defineProperty(exports, "Carousel", {
  enumerable: true,
  get: () => ElementUI.Carousel
});
Object.defineProperty(exports, "CarouselItem", {
  enumerable: true,
  get: () => ElementUI.CarouselItem
});
Object.defineProperty(exports, "Cascader", {
  enumerable: true,
  get: () => ElementUI.Cascader
});
Object.defineProperty(exports, "CascaderPanel", {
  enumerable: true,
  get: () => ElementUI.CascaderPanel
});
Object.defineProperty(exports, "Checkbox", {
  enumerable: true,
  get: () => ElementUI.Checkbox
});
Object.defineProperty(exports, "CheckboxButton", {
  enumerable: true,
  get: () => ElementUI.CheckboxButton
});
Object.defineProperty(exports, "CheckboxGroup", {
  enumerable: true,
  get: () => ElementUI.CheckboxGroup
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: () => ElementUI.Col
});
Object.defineProperty(exports, "Collapse", {
  enumerable: true,
  get: () => ElementUI.Collapse
});
Object.defineProperty(exports, "CollapseItem", {
  enumerable: true,
  get: () => ElementUI.CollapseItem
});
Object.defineProperty(exports, "ColorPicker", {
  enumerable: true,
  get: () => ElementUI.ColorPicker
});
Object.defineProperty(exports, "Container", {
  enumerable: true,
  get: () => ElementUI.Container
});
Object.defineProperty(exports, "DatePicker", {
  enumerable: true,
  get: () => ElementUI.DatePicker
});
Object.defineProperty(exports, "Descriptions", {
  enumerable: true,
  get: () => ElementUI.Descriptions
});
Object.defineProperty(exports, "DescriptionsItem", {
  enumerable: true,
  get: () => ElementUI.DescriptionsItem
});
Object.defineProperty(exports, "Dialog", {
  enumerable: true,
  get: () => ElementUI.Dialog
});
Object.defineProperty(exports, "Divider", {
  enumerable: true,
  get: () => ElementUI.Divider
});
Object.defineProperty(exports, "Drawer", {
  enumerable: true,
  get: () => ElementUI.Drawer
});
Object.defineProperty(exports, "Dropdown", {
  enumerable: true,
  get: () => ElementUI.Dropdown
});
Object.defineProperty(exports, "DropdownItem", {
  enumerable: true,
  get: () => ElementUI.DropdownItem
});
Object.defineProperty(exports, "DropdownMenu", {
  enumerable: true,
  get: () => ElementUI.DropdownMenu
});
Object.defineProperty(exports, "Empty", {
  enumerable: true,
  get: () => ElementUI.Empty
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: () => ElementUI.Footer
});
Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: () => ElementUI.Form
});
Object.defineProperty(exports, "FormItem", {
  enumerable: true,
  get: () => ElementUI.FormItem
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: () => ElementUI.Header
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: () => ElementUI.Icon
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: () => ElementUI.Image
});
Object.defineProperty(exports, "InfiniteScroll", {
  enumerable: true,
  get: () => ElementUI.InfiniteScroll
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: () => ElementUI.Input
});
Object.defineProperty(exports, "InputNumber", {
  enumerable: true,
  get: () => ElementUI.InputNumber
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: () => ElementUI.Link
});
Object.defineProperty(exports, "Loading", {
  enumerable: true,
  get: () => ElementUI.Loading
});
Object.defineProperty(exports, "Main", {
  enumerable: true,
  get: () => ElementUI.Main
});
Object.defineProperty(exports, "Menu", {
  enumerable: true,
  get: () => ElementUI.Menu
});
Object.defineProperty(exports, "MenuItem", {
  enumerable: true,
  get: () => ElementUI.MenuItem
});
Object.defineProperty(exports, "MenuItemGroup", {
  enumerable: true,
  get: () => ElementUI.MenuItemGroup
});
Object.defineProperty(exports, "Message", {
  enumerable: true,
  get: () => ElementUI.Message
});
Object.defineProperty(exports, "MessageBox", {
  enumerable: true,
  get: () => ElementUI.MessageBox
});
Object.defineProperty(exports, "Notification", {
  enumerable: true,
  get: () => ElementUI.Notification
});
Object.defineProperty(exports, "Option", {
  enumerable: true,
  get: () => ElementUI.Option
});
Object.defineProperty(exports, "OptionGroup", {
  enumerable: true,
  get: () => ElementUI.OptionGroup
});
Object.defineProperty(exports, "PageHeader", {
  enumerable: true,
  get: () => ElementUI.PageHeader
});
Object.defineProperty(exports, "Pagination", {
  enumerable: true,
  get: () => ElementUI.Pagination
});
Object.defineProperty(exports, "Popconfirm", {
  enumerable: true,
  get: () => ElementUI.Popconfirm
});
Object.defineProperty(exports, "Popover", {
  enumerable: true,
  get: () => ElementUI.Popover
});
Object.defineProperty(exports, "Progress", {
  enumerable: true,
  get: () => ElementUI.Progress
});
Object.defineProperty(exports, "Radio", {
  enumerable: true,
  get: () => ElementUI.Radio
});
Object.defineProperty(exports, "RadioButton", {
  enumerable: true,
  get: () => ElementUI.RadioButton
});
Object.defineProperty(exports, "RadioGroup", {
  enumerable: true,
  get: () => ElementUI.RadioGroup
});
Object.defineProperty(exports, "Rate", {
  enumerable: true,
  get: () => ElementUI.Rate
});
Object.defineProperty(exports, "Result", {
  enumerable: true,
  get: () => ElementUI.Result
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: () => ElementUI.Row
});
Object.defineProperty(exports, "Select", {
  enumerable: true,
  get: () => ElementUI.Select
});
Object.defineProperty(exports, "Skeleton", {
  enumerable: true,
  get: () => ElementUI.Skeleton
});
Object.defineProperty(exports, "SkeletonItem", {
  enumerable: true,
  get: () => ElementUI.SkeletonItem
});
Object.defineProperty(exports, "Slider", {
  enumerable: true,
  get: () => ElementUI.Slider
});
Object.defineProperty(exports, "Spinner", {
  enumerable: true,
  get: () => ElementUI.Spinner
});
Object.defineProperty(exports, "Step", {
  enumerable: true,
  get: () => ElementUI.Step
});
Object.defineProperty(exports, "Steps", {
  enumerable: true,
  get: () => ElementUI.Steps
});
Object.defineProperty(exports, "Submenu", {
  enumerable: true,
  get: () => ElementUI.Submenu
});
Object.defineProperty(exports, "Switch", {
  enumerable: true,
  get: () => ElementUI.Switch
});
Object.defineProperty(exports, "TabPane", {
  enumerable: true,
  get: () => ElementUI.TabPane
});
Object.defineProperty(exports, "Table", {
  enumerable: true,
  get: () => ElementUI.Table
});
Object.defineProperty(exports, "TableColumn", {
  enumerable: true,
  get: () => ElementUI.TableColumn
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: () => ElementUI.Tabs
});
Object.defineProperty(exports, "Tag", {
  enumerable: true,
  get: () => ElementUI.Tag
});
Object.defineProperty(exports, "TimePicker", {
  enumerable: true,
  get: () => ElementUI.TimePicker
});
Object.defineProperty(exports, "TimeSelect", {
  enumerable: true,
  get: () => ElementUI.TimeSelect
});
Object.defineProperty(exports, "Timeline", {
  enumerable: true,
  get: () => ElementUI.Timeline
});
Object.defineProperty(exports, "TimelineItem", {
  enumerable: true,
  get: () => ElementUI.TimelineItem
});
Object.defineProperty(exports, "Tooltip", {
  enumerable: true,
  get: () => ElementUI.Tooltip
});
Object.defineProperty(exports, "Transfer", {
  enumerable: true,
  get: () => ElementUI.Transfer
});
Object.defineProperty(exports, "Tree", {
  enumerable: true,
  get: () => ElementUI.Tree
});
Object.defineProperty(exports, "Upload", {
  enumerable: true,
  get: () => ElementUI.Upload
});
exports.CnTags = index;
exports.default = install;

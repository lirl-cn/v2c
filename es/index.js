import ElementUI from "./node_modules/element-ui/lib/element-ui.common.js";
import _default from "./node_modules/element-ui/lib/locale/lang/zh-CN.js";
import "./styles/index.js";
import "./cn-badge/index.js";
import "./cn-form/index.js";
import CnPagination from "./cn-pagination/src/index.js";
import "./cn-table/index.js";
import "./cn-tags/index.js";
import CnTags from "./cn-tags/src/index.js";
import { default as default2 } from "./cn-tags/src/index.js";
import CnBadge from "./cn-badge/src/index.js";
import CnTable from "./cn-table/src/index.js";
import { e as elementUi_common } from "./_virtual/element-ui.common.js";
import CnForm from "./cn-form/src/index.js";
const components = [
  CnTags,
  CnPagination,
  CnBadge,
  CnForm,
  CnTable
];
const defaultTableConfig = {
  request: fetch
};
const install = function(Vue, config = {}) {
  Vue.use(ElementUI, _default);
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
const Alert = elementUi_common.exports.Alert;
const Aside = elementUi_common.exports.Aside;
const Autocomplete = elementUi_common.exports.Autocomplete;
const Avatar = elementUi_common.exports.Avatar;
const Backtop = elementUi_common.exports.Backtop;
const Badge = elementUi_common.exports.Badge;
const Breadcrumb = elementUi_common.exports.Breadcrumb;
const BreadcrumbItem = elementUi_common.exports.BreadcrumbItem;
const Button = elementUi_common.exports.Button;
const ButtonGroup = elementUi_common.exports.ButtonGroup;
const Calendar = elementUi_common.exports.Calendar;
const Card = elementUi_common.exports.Card;
const Carousel = elementUi_common.exports.Carousel;
const CarouselItem = elementUi_common.exports.CarouselItem;
const Cascader = elementUi_common.exports.Cascader;
const CascaderPanel = elementUi_common.exports.CascaderPanel;
const Checkbox = elementUi_common.exports.Checkbox;
const CheckboxButton = elementUi_common.exports.CheckboxButton;
const CheckboxGroup = elementUi_common.exports.CheckboxGroup;
const Col = elementUi_common.exports.Col;
const Collapse = elementUi_common.exports.Collapse;
const CollapseItem = elementUi_common.exports.CollapseItem;
const ColorPicker = elementUi_common.exports.ColorPicker;
const Container = elementUi_common.exports.Container;
const DatePicker = elementUi_common.exports.DatePicker;
const Descriptions = elementUi_common.exports.Descriptions;
const DescriptionsItem = elementUi_common.exports.DescriptionsItem;
const Dialog = elementUi_common.exports.Dialog;
const Divider = elementUi_common.exports.Divider;
const Drawer = elementUi_common.exports.Drawer;
const Dropdown = elementUi_common.exports.Dropdown;
const DropdownItem = elementUi_common.exports.DropdownItem;
const DropdownMenu = elementUi_common.exports.DropdownMenu;
const Empty = elementUi_common.exports.Empty;
const Footer = elementUi_common.exports.Footer;
const Form = elementUi_common.exports.Form;
const FormItem = elementUi_common.exports.FormItem;
const Header = elementUi_common.exports.Header;
const Icon = elementUi_common.exports.Icon;
const Image = elementUi_common.exports.Image;
const InfiniteScroll = elementUi_common.exports.InfiniteScroll;
const Input = elementUi_common.exports.Input;
const InputNumber = elementUi_common.exports.InputNumber;
const Link = elementUi_common.exports.Link;
const Loading = elementUi_common.exports.Loading;
const Main = elementUi_common.exports.Main;
const Menu = elementUi_common.exports.Menu;
const MenuItem = elementUi_common.exports.MenuItem;
const MenuItemGroup = elementUi_common.exports.MenuItemGroup;
const Message = elementUi_common.exports.Message;
const MessageBox = elementUi_common.exports.MessageBox;
const Notification = elementUi_common.exports.Notification;
const Option = elementUi_common.exports.Option;
const OptionGroup = elementUi_common.exports.OptionGroup;
const PageHeader = elementUi_common.exports.PageHeader;
const Pagination = elementUi_common.exports.Pagination;
const Popconfirm = elementUi_common.exports.Popconfirm;
const Popover = elementUi_common.exports.Popover;
const Progress = elementUi_common.exports.Progress;
const Radio = elementUi_common.exports.Radio;
const RadioButton = elementUi_common.exports.RadioButton;
const RadioGroup = elementUi_common.exports.RadioGroup;
const Rate = elementUi_common.exports.Rate;
const Result = elementUi_common.exports.Result;
const Row = elementUi_common.exports.Row;
const Select = elementUi_common.exports.Select;
const Skeleton = elementUi_common.exports.Skeleton;
const SkeletonItem = elementUi_common.exports.SkeletonItem;
const Slider = elementUi_common.exports.Slider;
const Spinner = elementUi_common.exports.Spinner;
const Step = elementUi_common.exports.Step;
const Steps = elementUi_common.exports.Steps;
const Submenu = elementUi_common.exports.Submenu;
const Switch = elementUi_common.exports.Switch;
const TabPane = elementUi_common.exports.TabPane;
const Table = elementUi_common.exports.Table;
const TableColumn = elementUi_common.exports.TableColumn;
const Tabs = elementUi_common.exports.Tabs;
const Tag = elementUi_common.exports.Tag;
const TimePicker = elementUi_common.exports.TimePicker;
const TimeSelect = elementUi_common.exports.TimeSelect;
const Timeline = elementUi_common.exports.Timeline;
const TimelineItem = elementUi_common.exports.TimelineItem;
const Tooltip = elementUi_common.exports.Tooltip;
const Transfer = elementUi_common.exports.Transfer;
const Tree = elementUi_common.exports.Tree;
const Upload = elementUi_common.exports.Upload;
export {
  Alert,
  Aside,
  Autocomplete,
  Avatar,
  Backtop,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  CascaderPanel,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  default2 as CnTags,
  Col,
  Collapse,
  CollapseItem,
  ColorPicker,
  Container,
  DatePicker,
  Descriptions,
  DescriptionsItem,
  Dialog,
  Divider,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Empty,
  Footer,
  Form,
  FormItem,
  Header,
  Icon,
  Image,
  InfiniteScroll,
  Input,
  InputNumber,
  Link,
  Loading,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Message,
  MessageBox,
  Notification,
  Option,
  OptionGroup,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  Result,
  Row,
  Select,
  Skeleton,
  SkeletonItem,
  Slider,
  Spinner,
  Step,
  Steps,
  Submenu,
  Switch,
  TabPane,
  Table,
  TableColumn,
  Tabs,
  Tag,
  TimePicker,
  TimeSelect,
  Timeline,
  TimelineItem,
  Tooltip,
  Transfer,
  Tree,
  Upload,
  install as default
};

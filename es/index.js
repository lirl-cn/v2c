import ElementUI from "element-ui";
import { Alert, Aside, Autocomplete, Avatar, Backtop, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, Calendar, Card, Carousel, CarouselItem, Cascader, CascaderPanel, Checkbox, CheckboxButton, CheckboxGroup, Col, Collapse, CollapseItem, ColorPicker, Container, DatePicker, Descriptions, DescriptionsItem, Dialog, Divider, Drawer, Dropdown, DropdownItem, DropdownMenu, Empty, Footer, Form, FormItem, Header, Icon, Image, InfiniteScroll, Input, InputNumber, Link, Loading, Main, Menu, MenuItem, MenuItemGroup, Message, MessageBox, Notification, Option, OptionGroup, PageHeader, Pagination, Popconfirm, Popover, Progress, Radio, RadioButton, RadioGroup, Rate, Result, Row, Select, Skeleton, SkeletonItem, Slider, Spinner, Step, Steps, Submenu, Switch, TabPane, Table, TableColumn, Tabs, Tag, TimePicker, TimeSelect, Timeline, TimelineItem, Tooltip, Transfer, Tree, Upload } from "element-ui";
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

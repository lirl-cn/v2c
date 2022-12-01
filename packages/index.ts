import type { VueConstructor } from 'vue';

import ElementUI, {
  Alert, Aside, Autocomplete, Avatar, Backtop, Badge, Breadcrumb,
  BreadcrumbItem, Button,
  ButtonGroup, Calendar, Card, Carousel,
  CarouselItem, Cascader, CascaderPanel, Checkbox,
  CheckboxButton,
  CheckboxGroup, Col, Collapse,
  CollapseItem, ColorPicker, Container, DatePicker, Descriptions,
  DescriptionsItem, Dialog, Divider, Drawer, Dropdown, DropdownItem, DropdownMenu, Empty, Footer, Form,
  FormItem, Header, Icon, Image, InfiniteScroll, Input,
  InputNumber, Link, Loading, Main, Menu, MenuItem,
  MenuItemGroup, Message, MessageBox, Notification, Option,
  OptionGroup, PageHeader, Pagination, Popconfirm, Popover, Progress, Radio, RadioButton, RadioGroup, Rate, Result, Row, Select, Skeleton,
  SkeletonItem, Slider, Spinner, Step, Steps, Submenu, Switch, Table,
  TableColumn, TabPane, Tabs, Tag, Timeline,
  TimelineItem, TimePicker, TimeSelect, Tooltip, Transfer, Tree, Upload
} from 'element-ui';
import locale from 'element-ui/lib/locale/lang/zh-CN';
import './styles/index.scss';

import CnBadge from './cn-badge';
import CnForm from './cn-form';
import CnPagination from './cn-pagination/src';
import CnTable from './cn-table';
import CnTags from "./cn-tags";

const components = [
  CnTags,
  CnPagination,
  CnBadge,
  CnForm,
  CnTable,
]
type configType = {
  table?: {
    request?: () => void
  }
}
const defaultTableConfig = {
  request: fetch,
}
const install = function (Vue: VueConstructor, config: configType = {}) {
  Vue.use(ElementUI, locale)
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$CN_V2C_TABLE_CONFIG = {
    ...defaultTableConfig,
    ...config.table,
  }
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Loading,
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  MessageBox,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Notification,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Message,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  InfiniteScroll,
  PageHeader,
  CascaderPanel,
  Avatar,
  Drawer,
  Popconfirm,
  Skeleton,
  SkeletonItem,
  Empty,
  Descriptions,
  DescriptionsItem,
  Result,
  CnTags,
};
export default install
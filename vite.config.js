/** @type {import('vite').UserConfig} */
import vue from '@vitejs/plugin-vue2'
import vueJsx from '@vitejs/plugin-vue2-jsx'
import { splitVendorChunkPlugin } from 'vite'
import defaultConfig from './config/defaultConfig'
// import antdvFix from 'vite-plugin-antdv-fix' // 解决antd-vue date引入moment.js 方式会导致页面出错的问题

export default {
  plugins: [
    vue(),
    vueJsx({
      // vModel: false,
      compositionAPI: true,
    }),
    // antdvFix(),
    // viteCommonjs(),
    // legacy({
    //   targets: ['defaults', 'not IE 11']
    // }),
    splitVendorChunkPlugin(),
    // Components({
    //   resolvers: [],
    // }),
  ],
  server: {
    proxy: {
      [defaultConfig.proxyBaseUrl]: {
        target: defaultConfig.proxyTargetUrl,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          // "^/xxl": ""
        }
      }
    }
  },
  resolve: {
    alias: {
      '@@/': __dirname + '/',
      '@/': __dirname + '/examples/',
      '~/': __dirname + '/node_modules/',
    },
    extensions: ['.js', '.mjs', '.ts', '.jsx', '.tsx', '.vue', '.json'],
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        charset: false,
        //需要在styles下创建对应的文件common.scss
        additionalData: '@import "./examples/styles/common.scss";',
      },
    },
  },
  define: {
    DEFAULT_CONFIG: defaultConfig,
  },
  hmr: true,
  build: {
    target: 'modules',
    //打包文件目录
    outDir: "es",
    //压缩
    minify: false,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: ['packages/index.ts'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'es',
          preserveModulesRoot: 'packages'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'lib',
          preserveModulesRoot: 'packages'
        }
      ]
    },
    lib: {
      entry: './index.ts',
      formats: ['es', 'cjs']
    }
  }
}
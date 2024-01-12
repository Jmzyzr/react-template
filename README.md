# umi4 + react 18 + TypeScript + Antd Design

# 安装 pnpm

npm install pnpm -g

# 安装依赖

pnpm install

husky 会在 pnpm install 调用时自动执行 npm run prepare 命令，即会执行 husky install 命令，并在项目的根目录下生成 .husky 目录

# 启动运行

pnpm run dev


# 项目目录
├── .husky              # git 客户端增加 hook 的工具
│   ├── commit-msg      # git hooks的钩子，在代码提交前检查代码是否符合规范，不符合规范将不可被提交
│   ├── pre-commit      # git hooks的钩子，在代码提交前检查commit信息是否符合规范
├── config              # 配置文件，包含 Umi 所有非运行时配置
│   ├── config.dev.t    # dev 环境配置
│   ├── config.prod.    # 生产环境配置
│   ├── config.ts       # 配置文件
│   ├── proxy.ts        # 代理
│   └── routes.ts       # 系统路由
├── dist                # 打包生成文件
├── mock                # mock文件，会被 mock 服务加载，从而提供模拟数据
├── src
│   ├── assets          # 静态文件，包括样式，字体文件，图片资源
│   ├── components      # 公共组件目录
│   ├── constants       # 公共常量配置
│   ├── hooks           # 全局 hooks
│   ├── layouts         # 系统 Layout 配置
│   ├── models          # 状态管理，数据流管理
│   ├── pages           # 系统页面目录
│   ├── services        # 接口 Api
│   ├── utils           # 工具类
│   ├── access.ts       # 系统权限配置
│   ├── app.tsx         # 主入口
│   ├── theme.ts        # 主题配置
│   └── global.less     # 公共样式入口
├── .env
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .lintstagedrc
├── .env
├── .npmrc
├── .prettierignore
├── .prettierrc.js
├── .stylelintignore
├── .stylelintrc.js
├── commitlint.config.js
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── typings.d.ts
└── README.md

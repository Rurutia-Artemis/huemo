# Huemo · 彩动（公开版构建产物）

线上地址：https://rurutia.ai.studio/huemo/ （rurutia.ai.studio 的服务端把 /huemo/ 转发到本仓库的 GitHub Pages）。

本仓库只放构建产物，由 Huemo 仓库生成，不要手改：在 `Huemo/app` 里运行 `npm run build:public && npm run stage:pages`，然后在这里提交推送。
`.nojekyll` 必须保留，否则 GitHub Pages 会丢掉 `assets/_next/`。

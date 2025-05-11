// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // 设置基础路径（仓库名称）
  assetPrefix: isProd ? '3DWise-BioForge' : '',
  // 启用静态导出（SSG）
  output: 'export',
  // 可选：添加尾部斜杠自动处理
  trailingSlash: true
}

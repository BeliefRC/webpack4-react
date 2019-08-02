module.exports = function (api) {
  api.cache(true)

  const presets = [
    //使用useBuiltIns配置项需要指定core-js版本，否则会出现警告
    ["@babel/preset-env" , { "corejs": "2","useBuiltIns": "usage", }],
    "@babel/preset-react"
  ]
  const plugins = [
    '@babel/plugin-transform-runtime',
    ["import", {
      "libraryName": "antd",
      "style": true
    }],
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
    "@babel/plugin-proposal-optional-chaining"
  ]

  return {
    presets,
    plugins
  }
}

const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')
const { eslint } = require('rollup-plugin-eslint')
const pkg = require('../package.json')
const version = process.env.VERSION || pkg.version
const scriptName = pkg.config.scriptName;
const name = pkg.name;

const banner =
  '/*!\n' +
  ` * ${pkg.name} v${version}\n` +
  ` * (c) ${new Date().getFullYear()} ${pkg.author}\n` +
  ` * Released under the ${pkg.license} License.\n` +
  ' */'

const builds = {
  // CommonJS build. Used by bundlers e.g. Webpack & Browserify
  cjs: {
    entry: 'src/index.js',
    dest: `dist/${name.toLowerCase()}.common.js`,
    format: 'cjs',
    env: 'production',
    banner
  },
  // ES modules build (for bundlers)
  esm: {
    entry: 'src/index.js',
    dest: `dist/${name.toLowerCase()}.esm.js`,
    transpile: false,
    format: 'es',
    banner
  },
  //  UMD Build  (Browser)
  'web-dev': {
    name: scriptName,
    entry: 'src/index.js',
    dest: `dist/${name.toLowerCase()}.js`,
    format: 'umd',
    env: 'development',
    banner
  },
  'web-prod': {
    name: scriptName,
    entry: 'src/index.js',
    dest: `dist/${name.toLowerCase()}.min.js`,
    format: 'umd',
    env: 'production',
    banner
  }
}

function genConfig (name) {
  const opts = builds[name]
  const config = {
    input: opts.entry,
    external: opts.external,
    plugins: [eslint()].concat(opts.plugins || []),
    output: {
      file: opts.dest,
      format: opts.format,
      banner: opts.banner,
      name: opts.name || pkg.config.scriptName
    },
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    }
  }

  const vars = {
    __VERSION__: version
  }

  // build-specific env
  if (opts.env) {
    vars['process.env.NODE_ENV'] = JSON.stringify(opts.env)
  }
  config.plugins.push(replace(vars))

  if (opts.transpile !== false) {
    config.plugins.push(buble())
  }

  return config
}

if (process.env.TARGET) {
  module.exports = genConfig(process.env.TARGET)
} else {
  exports.getBuild = genConfig
  exports.getAllBuilds = () => Object.keys(builds).map(genConfig)
}

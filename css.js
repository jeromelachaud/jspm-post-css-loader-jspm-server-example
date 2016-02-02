import { CSSLoader, Plugins } from 'jspm-loader-css'
import vars from 'postcss-simple-vars' // you want to use this postcss plugin
import nested from 'postcss-nested' // you want to use this postcss plugin

const {fetch, bundle} = new CSSLoader([
  vars,
  nested,
  Plugins.localByDefault,
  Plugins.extractImports,
  Plugins.scope,
  Plugins.autoprefixer()
  ], __moduleName);

export {fetch, bundle};
export let __hotReload = true;

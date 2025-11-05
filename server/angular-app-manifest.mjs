
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/gamx/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/gamx"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 732, hash: '7059bb9233b7a544cb7ded2d10de2a595f48f1d5172a584ee2a565aa8c2216b0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: '7915cdc8057856cf6d0cc6792e4b182a6820a62de69afb3ce2e63e7e01ed4af0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7551, hash: 'ce031299a8b0bd3932a5b7579e96a5cc045eb9f0ba74e03cea574bbb713186d2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HKRXZVYZ.css': {size: 517, hash: 'vpdxhtcZtB4', text: () => import('./assets-chunks/styles-HKRXZVYZ_css.mjs').then(m => m.default)}
  },
};

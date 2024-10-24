```
[nuxt] [request error] [unhandled] [500] Cannot find module '../../build/Release/node_datachannel.node'
Require stack:
- /home/mirsella/dev/nuxt-app/.output/server/node_modules/node-datachannel/dist/esm/lib/node-datachannel.mjs
  at Function._resolveFilename (node:internal/modules/cjs/loader:1249:15)
  at Function._load (node:internal/modules/cjs/loader:1075:27)
  at TracingChannel.traceSync (node:diagnostics_channel:315:14)
  at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)
  at Module.require (node:internal/modules/cjs/loader:1340:12)
  at require (node:internal/modules/helpers:141:16)
  at ./server/node_modules/node-datachannel/dist/esm/lib/node-datachannel.mjs:13:21
  at ModuleJob.run (node:internal/modules/esm/module_job:268:25)
  at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:543:26)
  at async Object.handler (./server/chunks/runtime.mjs:2838:19)
```

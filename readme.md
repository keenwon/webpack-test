```bsh
> test@1.0.0 start /home/keenwon/Code/test
> webpack-dev-server

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://172.26.240.158:8080/
<i> [webpack-dev-server] Content not from webpack is served from '/home/keenwon/Code/test/dist' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
asset app.js 285 KiB [emitted] (name: app)
asset index.html 231 bytes [emitted]
runtime modules 26.3 KiB 13 modules
modules by path ./node_modules/ 198 KiB
  modules by path ./node_modules/webpack-dev-server/client/ 51.8 KiB 12 modules
  modules by path ./node_modules/webpack/hot/*.js 4.3 KiB 4 modules
  modules by path ./node_modules/html-entities/lib/*.js 81.3 KiB 4 modules
  modules by path ./node_modules/url/ 37.4 KiB 3 modules
  modules by path ./node_modules/querystring/*.js 4.51 KiB
    ./node_modules/querystring/index.js 127 bytes [built] [code generated]
    ./node_modules/querystring/decode.js 2.34 KiB [built] [code generated]
    ./node_modules/querystring/encode.js 2.04 KiB [built] [code generated]
  ./node_modules/ansi-html-community/index.js 4.16 KiB [built] [code generated]
  ./node_modules/events/events.js 14.5 KiB [built] [code generated]
./src/index.js 39 bytes [built] [code generated] [1 error]

ERROR in ./src/index.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
TypeError: /home/keenwon/Code/test/babel.config.mjs: Error while loading config - Invalid host defined options
    at import_ (/home/keenwon/Code/test/node_modules/@babel/core/lib/config/files/import.js:9:3)
    at /home/keenwon/Code/test/node_modules/@babel/core/lib/config/files/module-types.js:100:26
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/home/keenwon/Code/test/node_modules/@babel/core/lib/config/files/module-types.js:40:103)
    at _next (/home/keenwon/Code/test/node_modules/@babel/core/lib/config/files/module-types.js:42:194)
    at /home/keenwon/Code/test/node_modules/@babel/core/lib/config/files/module-types.js:42:364
    at new Promise (<anonymous>)
    at /home/keenwon/Code/test/node_modules/@babel/core/lib/config/files/module-types.js:42:97
    at _loadMjsDefault (/home/keenwon/Code/test/node_modules/@babel/core/lib/config/files/module-types.js:103:26)
    at loadMjsDefault (/home/keenwon/Code/test/node_modules/@babel/core/lib/config/files/module-types.js:91:26)

webpack 5.58.2 compiled with 1 error in 661 ms
```

'use strict';

/*
Let's start a section with a general overview of Modern JavaScript Development.

So basically of how we write JavaScript today. Because when we built applications, we don't just write all of our code into one big script and send that script to the browser, and call it a day. It used to be like this, but the way we built JavaScript applications, has changed tremendously over the last couple of years. So back in the day, we used to write all our codes
into one big script or maybe multiple scripts. But today, we divide our projects into multiple modules and these modules can share data between them and make our code more organized and maintainable! Now, one great thing about modules is that we can also include 3rd-party modules into our own code:

<cmg img/Picture01.jpg>

And there are thousands of open source modules, which we also call packages, that developers share on the NPM repository. And we can then use these packages for free in our own code. For example, the popular React framework or jQuery,
or even the Leaflet library, that we used before in our Mapty project.

All of these packages are available through NPM. Now NPM stands for Node Package Manager, because it was originally developed together with Node.js and 4Node.js.However, NPM has established itself as the go to repository for all kinds of packages in Modern JavaScript Development.

Now, in order to actually download and use and share packages, we use the NPM software installed on our computer. And this is just a simple command line interface that allows us to do all that. So basically NPM is both the repository
in which packages live and a program that we use on our computers to install and manage these packages.

So let's say that we are done writing our project code. So we divided it into multiple modules and we included some 3rd-party modules as well. And so now the development step is complete. However, usually that's not the end of the story.
At least not when rebuilding a real world application. Instead, our project now needs to go through a build process, where one big final JavaScript bundle is built. And that's the final file, which we will deploy to our web server for production.

<cmg img/Picture02.jpg>

So basically it's the JavaScript file, that will be sent to browsers in production. And production simply means that the application is being used by real users in the real world.

Now, a build process can be something really complex, but we gonna keep it simple here and only include two steps. And the first step, we'll bundle all our modules together into one big file. This is a pretty complex process which can eliminate unused code and compress our code as well.

<cmg img/Picture03.jpg>

Now this step is super important for two big reasons. First, older browsers don't support modules at all. And so code that's in a module could not be executed by any older browser. And second, it's also better for performance to send less files to the browser, and it's also beneficial that the bundling step compresses our code.

But anyway, as the second step, we do something called transpiling and polyfilling, which is basically to convert all modern JavaScript syntax and features back to old ES5 syntax, so that even older browsers can understand our code without breaking. And this is usually done using a tool called Babel.

<cmg img/Picture04.jpg>

So these are the two steps of our build process, and after these two steps, we end up with that final JavaScript bundle, ready to be deployed on a server for production. Now, of course we don't perform these steps ourselves. Instead, we use a special tool to implement this build process for us. And the most common build tools available, are probably webpack and Parcel.

<cmg img/Picture05.jpg>

And these are called JavaScript bundlers because well, as the name says they take our raw code and transform it into a JavaScript bundle. Now Webpack is the more popular one, but it can be really hard and confusing to set it up. So that's because there's a lot of stuff that we need to configure manually, in order to make it work properly.

Parcel, on the other hand is a zero configuration bundler, which simply works out of the box. And so in this bundler, we don't have to write any set up code, which is really amazing. So I personally absolutely love Parcel and I use it all the time, and I think that you will love it too. And so, that is the JavaScript bundler that we gonna use later in the section.

Now these development tools are actually also available on NPM. So just like packages that we include in our code, we will download and manage tools using NPM as well. And these tools include the live-server that we've been using all along, the Parcel bundler that we just talked about or Babel to transpile code back to ES5.

All right, so this is a high level overview, of how we develop Modern JavaScript applications today. And if you ask me, this is really exciting stuff, because this is how professional developers actually write JavaScript today.

And so in the rest of the section, you will take a big step in the direction of becoming a professional developer too.
*/

/*
This is an example of complex Webpack configuration:

ɪꜰ yᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴜɴᴅᴇʀꜱᴛᴀɴᴅ ᴛʜɪꜱ 🙄, yᴏᴜ ᴄᴀɴ ʀᴇᴀᴅ ᴛʜᴇ ᴄᴏᴍᴍᴇɴᴛꜱ

const path = require('path');
 
module.exports = {
  mode: "production", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "./app/entry", // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path:path.resolve(__dirname, "dist"), // string (default)
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "[name].js", // string (default)
    // the filename template for entry chunks
    publicPath: "/assets/", // string
    // the url to the output directory resolved relative to the HTML page
    library: { // There is also an old syntax for this available (click to show)
      type: "umd", // universal module definition
      // the type of the exported library
      name: "MyLibrary", // string | string[]
      // the name of the exported library
 
    //   Advanced output.library configuration (click to show) 
    },
    uniqueName: "my-application", // (defaults to package.json "name")
    // unique name for this build to avoid conflicts with other builds in the same HTML
    name: "my-config",
    // name of the configuration, shown in output
    //  Advanced output configuration (click to show) 
    //  Expert output configuration 1 (on own risk) 
    //  Expert output configuration 2 (on own risk) 
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        // Conditions:
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        exclude: [
          path.resolve(__dirname, "app/demo-files")
        ],
        // these are matching conditions, each accepting a regular expression or string
        // test and include have the same behavior, both must be matched
        // exclude must not be matched (takes preferrence over test and include)
        // Best practices:
        // - Use RegExp only in test and for filename matching
        // - Use arrays of absolute paths in include and exclude to match the full path
        // - Try to avoid exclude and prefer include
        // Each condition can also receive an object with "and", "or" or "not" properties
        // which are an array of conditions.
        issuer: /\.css$/,
        issuer: path.resolve(__dirname, "app"),
        issuer: { and: [ /\.css$/, path.resolve(__dirname, "app") ] },
        issuer: { or: [ /\.css$/, path.resolve(__dirname, "app") ] },
        issuer: { not: [ /\.css$/ ] },
        issuer: [ /\.css$/, path.resolve(__dirname, "app") ], // like "or"
        // conditions for the issuer (the origin of the import)
        //  Advanced conditions (click to show) 
 
        // Actions:
        loader: "babel-loader",
        // the loader which should be applied, it'll be resolved relative to the context
        options: {
          presets: ["es2015"]
        },
        // options for the loader
        use: [
          // apply multiple loaders and options instead
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
              // ...
            }
          }
        ],
        type: "javascript/auto",
        // specifies the module type
        //  Advanced actions (click to show) 
      },
      {
        oneOf: [
          // ... (rules)
        ]
        // only use one of these nested rules
      },
      {
        // ... (conditions)
        rules: [
          // ... (rules)
        ]
        // use all of these nested rules (combine with conditions to be useful)
      },
    ],
    //  Advanced module configuration (click to show) 
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving of loaders)
    modules: ["node_modules",path.resolve(__dirname, "app")],
    // directories where to look for modules (in order)
    extensions: [".js", ".json", ".jsx", ".css"],
    // extensions that are used
    alias: {
      // a list of module name aliases
      // aliases are imported relative to the current context
      "module": "new-module",
      // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"
      "only-module$": "new-module",
      // alias "only-module" -> "new-module", but not "only-module/path/file" -> "new-module/path/file"
      "module": path.resolve(__dirname, "app/third/module.js"),
      // alias "module" -> "./app/third/module.js" and "module/file" results in error
      "module": path.resolve(__dirname, "app/third"),
      // alias "module" -> "./app/third" and "module/file" -> "./app/third/file"
      [path.resolve(__dirname, "app/module.js")]: path.resolve(__dirname, "app/alternative-module.js"),
      // alias "./app/module.js" -> "./app/alternative-module.js"
    },
    // Alternative alias syntax (click to show) 
    //  Advanced resolve configuration (click to show) 
    //  Expert resolve configuration (click to show) 
  },
  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  devtool: "source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.
  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory
  target: "web", // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior, available external modules
  // and generated code style
  externals: ["react", /^@angular/],
  // Don't follow/bundle these modules, but request them at runtime from the environment
  externalsType: "var", // (defaults to output.library.type)
  // Type of externals, when not specified inline in externals
  externalsPresets: {  ...  },
  // presets of externals
  ignoreWarnings: [/warning/],
  stats: "errors-only",
  stats: {
    // lets you precisely control what bundle information gets displayed
    preset: "errors-only",
    // A stats preset
 
    //  Advanced global settings (click to show) 
 
    env: true,
    // include value of --env in the output
    outputPath: true,
    // include absolute output path in the output
    publicPath: true,
    // include public path in the output
 
    assets: true,
    // show list of assets in output
    //  Advanced assets settings (click to show) 
 
    entrypoints: true,
    // show entrypoints list
    chunkGroups: true,
    // show named chunk group list
    //  Advanced chunk group settings (click to show) 
 
    chunks: true,
    // show list of chunks in output
    //  Advanced chunk group settings (click to show) 
 
    modules: true,
    // show list of modules in output
    //  Advanced module settings (click to show) 
    //  Expert module settings (click to show) 
    //  Advanced optimization settings (click to show) 
 
    children: true,
    // show stats for child compilations
 
    logging: true,
    // show logging in output
    loggingDebug: /webpack/,
    // show debug type logging for some loggers
    loggingTrace: true,
    // show stack traces for warnings and errors in logging output
 
    warnings: true,
    // show warnings
 
    errors: true,
    // show errors
    errorDetails: true,
    // show details for errors
    errorStack: true,
    // show internal stack trace for errors
    moduleTrace: true,
    // show module trace for errors
    // (why was causing module referenced)
 
    builtAt: true,
    // show timestamp in summary
    errorsCount: true,
    // show errors count in summary
    warningsCount: true,
    // show warnings count in summary
    timings: true,
    // show build timing in summary
    version: true,
    // show webpack version in summary
    hash: true,
    // show build hash in summary
  },
  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },
  experiments: {
    asyncWebAssembly: true,
    // WebAssembly as async module (Proposal)
    syncWebAssembly: true,
    // WebAssembly as sync module (deprecated)
    outputModule: true,
    // Allow to output ESM
    topLevelAwait: true,
    // Allow to use await on module evaluation (Proposal)
  },
  plugins: [
    // ...
  ],
  // list of additional plugins
  optimization: {
    chunkIds: "size",
    // method of generating ids for chunks
    moduleIds: "size",
    // method of generating ids for modules
    mangleExports: "size",
    // rename export names to shorter names
    minimize: true,
    // minimize the output files
    minimizer: [new CssMinimizer(), "..."],
    // minimizers to use for the output files
 
    //  Advanced optimizations (click to show) 
 
    splitChunks: {
      cacheGroups: {
        "my-name": {
          // define groups of modules with specific
          // caching behavior
          test: /\.sass$/,
          type: "css/mini-extract",
 
        //    Advanced selectors (click to show) 
        //    Advanced effects (click to show) 
        }
      },
 
      fallbackCacheGroup: { /* Advanced (click to show)  }
 
    //    Advanced selectors (click to show) 
 
    //    Advanced effects (click to show) 
 
    //    Expert settings (click to show) 
    }
  },
//    Advanced configuration (click to show) 
//    Advanced caching configuration (click to show) 
//    Advanced build configuration (click to show) 
}

*/

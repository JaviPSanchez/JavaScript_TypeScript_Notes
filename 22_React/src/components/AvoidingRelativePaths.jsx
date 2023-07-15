/*

Avoid writing relative paths while importing files in your React app using just a single configuration.

In every application, we have import statements where we have to come out of the current folder to reach another file like this:

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

So we have to check which folder we are in and then add those numbers of double dots to import another file.

To avoid this, create a new file with name 𝗷𝘀𝗰𝗼𝗻𝗳𝗶𝗴.𝗷𝘀𝗼𝗻 in your project folder and add the following code inside it.

{
  "compilerOptions": {
    "baseUrl": "./src/components"
  }
}

Here we specified the base folder where all your files are present. (mostly it’s the 𝘀𝗿𝗰 folder in the React application).

With this configuration, it will take 𝘀𝗿𝗰 as a 𝗯𝗮𝘀𝗲𝘂𝗿𝗹 now, so we only need to specify the folder path 𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗶𝗻𝘀𝗶𝗱𝗲 𝘁𝗵𝗲 𝘀𝗿𝗰 folder while adding the import statement.

So now we can simplify the above imports as shown below:

import Sidebar from "components/sidebar/Sidebar";
import Navbar from "components/navbar/Navbar";

So using 𝗷𝘀𝗰𝗼𝗻𝗳𝗶𝗴.𝗷𝘀𝗼𝗻 file will make writing import paths really easy.


VITE


In Vite.js, you can avoid relative paths by using absolute paths or path aliases. Here's how you can do it:

1. Using Absolute Paths:
   - Configure your base path in the `vite.config.js` file. This specifies the root directory for your project.
   ```javascript
vite.config.js
   export default {
     base: '/your-base-path/',
   };
   ```
   - After setting the base path, you can use absolute paths in your code by starting the path with a forward slash (/). For example:
   ```javascript
   import MyComponent from '/src/components/MyComponent.vue';
   ```

2. Using Path Aliases:
   - Path aliases allow you to define custom shortcuts for specific paths in your project. This can help simplify and abstract away the actual file system structure.
   - In the `vite.config.js` file, add the `resolve.alias` configuration option to define your path aliases:
   ```javascript
   vite.config.js
   export default {
     resolve: {
       alias: {
         '@': '/src',
         You can add more aliases here
       },
     },
   };
   ```
   - With the above configuration, you can use `@` as a shorthand for the `/src` directory in your code:
   ```javascript
   import MyComponent from '@/components/MyComponent.vue';
   ```

By using either absolute paths or path aliases, you can avoid the use of relative paths in your Vite.js project, making your code more readable and maintainable.
*/

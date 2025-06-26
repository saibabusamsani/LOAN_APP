step 1 : 
            npm install nativewind react-native-reanimated react-native-safe-area-context@5.4.0
            npm install -D tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11
step 2 : 
         Run npx tailwindcss init to create a tailwind.config.js file

         tailwind.config.js
                         /** @type {import('tailwindcss').Config} */
              module.exports = {
                content: [
                  "./App.{js,jsx,ts,tsx}",
                  "./index.{js,jsx,ts,tsx}",
                  "./src/**/*.{js,jsx,ts,tsx}", 
                ],
                presets: [require("nativewind/preset")],
                theme: {
                  extend: {},
                },
                plugins: [],
              };

step 3 : create global.css in  src folder
            @tailwind base;
          @tailwind components;
          @tailwind utilities;

step 4:  modify  metro.config.js

        
            const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
            const { withNativeWind } = require("nativewind/metro");
            
            const defaultConfig = getDefaultConfig(__dirname);
            
            // pull the FULL default lists
            const {
              resolver: { sourceExts: defaultSourceExts, assetExts },
              transformer,
            } = defaultConfig;
            
            // create our merged config
            const customConfig = mergeConfig(defaultConfig, {
              resolver: {
                assetExts,
                // ✅ keep every default ext and just append "css"
                sourceExts: [...defaultSourceExts, "css"],
              },
              transformer: {
                ...transformer,
                // ✅ tell Metro to use css transformer
                babelTransformerPath: require.resolve("react-native-css-transformer"),
              },
            });
            
            // wrap with NativeWind
            module.exports = withNativeWind(customConfig, {
              input: "./src/global.css",
            });
            
  step 5 : modify babel.config.file
                      module.exports = {
                                          presets: ['module:@react-native/babel-preset','nativewind/babel']
                                      };
step 6:  For native wind extensions

          *** install Tailwind CSS IntelliSense( in vs code cntr+shift+x)
          *** your project/.vscode --> create settings.json
              
                ****  settings.json *****
                    {
                "tailwindCSS.classAttributes": ["class", "className"],
                "editor.quickSuggestions": {
                  "strings": true
                },
                "tailwindCSS.includeLanguages": {
                  "javascript": "javascript",
                  "javascriptreact": "javascript",
                  "typescript": "typescript",
                  "typescriptreact": "typescript"
                }
              }

          



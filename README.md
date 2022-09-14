# GUIDES

## STARTING PROJECT

- When Starting project use command line `npm install` to install all depedencies.
- Then use command line `npm start` to launch a live server of the project.

---

## HTML

THe HTML is divided into partials in `"src/partials"`, if new HTML partials is needed, make sure to add the name of the new HTML in the array in `"index.js"` located in the partials directory and that it is in the right order as the first name will be injected before the other HTML like this,

```
["navigation", "main", "footer"]
```

as shown in the example below the `"navigation"` will be injected first then the `"main"` and lastly the `"footer"`.

```
<!DOCTYPE html>
<html>
   <body>
      <nav></nav>
      <main></main>
      <footer></footer>
   </body>
</html>
```

---

## SCSS

- ### COMPONENTS

  - Add new components in `"sass/components"` folder.
  - Import/Forward in `"/components/main.scss"`.

- ### HELPERS

  1. #### Flex:

     - `"d-flex"` = `"display: flex;"`
     - `"d‑flex‑‑v"` = `"align‑items: center;"`
     - `"d-flex‑‑h"` = `"justify‑content: center;"`
     - `"d-flex‑‑vh"` = `"align‑items: center;"` and `"justify‑content: center;"`

  2. #### Margins:

     - `"m-auto"` = `"margin-inline: auto;"` Logical Property for Margin Left and Right.
     - `"d‑flex‑‑v"` = `"align‑items: center;"`
     - `"d-flex‑‑h"` = `"justify‑content: center;"`
     - `"d-flex‑‑vh"` = `"align‑items: center;"` and `"justify‑content: center;"`

  3. #### Padding:

     - `"p‑auto"` = `"padding‑inline: auto;"` Logical Properties for Padding Left and Right
     - `"p[direction]‑[pixels]"` = `"padding‑[direction]: [pixels];"` In Logical properties pixels from 0 to 50 and will convert into rem, E.g. `"pb‑20`" = `"padding‑block‑end: 1.875rem;"` Logical Properties for Padding Bottom
     - `"px‑[pixels]"` = `"padding‑inline: [pixels];"` Logical Properties for Padding Left and Right
     - `"py‑[pixels]"` = `"padding‑block: [pixels];"` // Logical Properties for Padding Top and Bottom

  4. #### Position:

     - `"pos‑relative"` = `"position: relative;"`
     - `"pos‑absolute"` = `"position: absolute;"`, `"top: 0;"` and `"left: 0;"`
     - `"pos‑absolute‑‑full"` = `"position: absolute;"`, `"top: 0;"`, `"left: 0;"`, `"right: 0;"` and `"bottom: 0;"`
     - `"pos‑fixed"` = `"position: fixed;"`
     - `"pos‑[direction]‑[percentage]"` = `"[direction]: [percentage];"` percentage from 0 to 100, E.g. `"pos‑top‑10"` = `"top: 10%;"`

  5. #### Misc:
     - `"nbsp"` work like the non‑breaking space `"&nbsp;"` in HTML.
     - `"sr‑only"` will hide the element visually but will keep it in the DOM for Screen Reader.

- ### LAYOUT

  - Typography: Every styles for typography in `"/_typography.scss"`, like styling for paragraph or headings.

  - Container: By default the max-width is set to 960px. `"container"` class to be use inside element like this.

    ```
    <nav>
      <div class="container">
         Content Here
      </div>
    </nav>
    ```

  - Resets: To reset the default styling of browsers.

- ### MEDIA QUERIES

  Two ways to add Media Queries

  1. Interpolation

     ```
     @media #{$ps‑mobile} {
     }
     ```

  2. Mixins by `@include`.

     ```
     @include mq($ps‑mobile) {
     }
     ```

- ### THEME

  To use the variables in the `"theme/"` folder import it in your SCSS file like this.

  ```
  @use "../theme" as *;
  ```

  - Add colors in `"/_colors.scss"`, the Main Colors and General Colors, example of General Colors

    ```
    $bodyBackgroundColor: #ffffff;
    ```

  - Add fonts in `"/_fonts.scss"`, like so.

    ```
    @font-face {
    font-family: 'Roboto-Regular';
    src: url('../fonts/Roboto-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }

    $primaryFontRegular: 'Roboto-Regular', sans-serif;
    ```

  - `"/_breakpoints.scss"` contain all variables for media-queries mentioned [here](#media-queries).

  - `"/_sizes.scss"` contain the heights and spacing variables.
  - `"/_transitions.scss"` contain all variables for transitions.

- ### UTILITIES

  To use the functions and mixins in the `"utilities/"` folder import it in your SCSS file like this.

  ```
  @use "../utilities" as *;
  ```

  - Contrast: The `contrast()` function calculate the contrast of the background color and return either a light color or a dark color, for example if the background color is `"white"` the `contrast()` function will return the `"black"` color. It take three arguments,the first one is the background color, second one a light color either a hex value `"#ffffff"` or a color name `"white"` and the third one a dark color either a hex value `"#000000"` or a color name `"black"`.

    ```
    background-color: #ff0000;
    color: contrast(#ff0000, white, black); // Will return white in this case
    ```

  - Fade: The `fade()` function will return the color in an rgba format and set the opacity. It take two arguments, the first one is the color either in hex value `"#0000ff"` or color name `"blue"`, the second one is the opacity a number between 0 to 100.

    ```
    background-color: fade(blue, 50); // Will return rgba(0, 0, 255, 0.5).
    ```

  - Units: The units file contain two functions `rem()` and `em()` which convert pixels into the respective unit which is base on a `16px` root value. The functions take one argument which is the pixels but without the `px` unit.

    ```
    font-size: rem(32); // Will convert 32px to 2rem.

    OR

    padding: em(18); // Will convert 18px to 1.125em.
    ```

  - Media-queries: Mixin for media-queries mentioned [here](#media-queries).

---

## TRANSLATION

Main HeadingTo change language manually import and use the function `translationToggle()` from `"js/translation.js"`. This function accept two arguments, the first one is the language and the seond one is the JSON data.
E.g.

```
import { translationToggle } from 'translation.js';
import FR from "locales/fr.json";


translationToggle("fr", FR);
```

### The data in JSON

In the JSON file located in `"locales/"` directory, you should write a key and a value but make sure that the key is the same in every JSON files.

```
{
   "head": {
      "title": "Head Title"
   },

   "main": {
      "heading": "Main Heading"
   },
}
```

In this case, `"title"` is the key and `"Head Title"` is the value.

To access the data use the attribute `data‑i18n` and pass the key to get the value as such `data‑i18n="main.heading"` to render the value `"Main Heading"`.

To use the value in an attribute such as `"aria‑label"` or `"title"` use the `data‑i18n‑attr` attribute to do so, by default this attribute is set to `innerHTML` which render the value inside the HTML element. you can pass multiple keys to multiple attribute as such `data‑i18n="main.heading head.title"` `data‑i18n‑attr="innerHTML title"` in this example the value of `"main.heading"` will render inside the HTML element and the value of `"head.title"` will render inside the attribute `"title"`.

```
<h2
   data‑i18n="main.heading head.title"
   data‑i18n‑attr="innerHTML title"
   title="Head Title"
>
   Main Heading
</h2>
```

---

## BUILD

When ready to build use command line `npm run build` to compile and minify project, all the SCSS files will be purge and minify in the final CSS, so that all unused styles will not be compiled.

The project will build in `"dist/"` directory and two folders will be created, one for FR and one for EN and a zip for each folder will be created ready for deploy like so `"dist/FR/fr.zip"` and `"dist/EN/en.zip"`.

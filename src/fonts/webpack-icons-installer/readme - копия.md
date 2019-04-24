### Installation

This one package will let you use all the icons provided by:
* **Bootstrap** Glyphicons *(**260 free glyphs** from the [Glyphicon](http://glyphicons.com/) Halflings set)*
* **Google** `material-design-icons`
* `font-awesome` icons

Use `npm install webpack-icons-installer` instead of installing all dependencies and loaders separately.

> Since icons packages consists of more than **90.000 files**, takes up more than **100MB** and takes some time while installation, it is recommended to install it globally:
>
> `npm install webpack-icons-installer -g`
>
> `npm link webpack-icons-installer`

### Configuration

##### your `webpack.config.js` file
* add `url-loader` to emit all icons files
* add `style-loader` and `css-loader` to handle css files that implement icons
```javascript
const path = require('path');

module.exports = {
  entry: {
    index:'./src/index.js'
  },
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ["style-loader","css-loader"]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name:'[name].[ext]',
          outputPath:'assets' //the icons will be stored in dist/assets folder
        }
      }
    ]
  }
};
```

##### your entry `index.js` file

```javascript
require('webpack-icons-installer');   //load ALL icons

//OR:

require('webpack-icons-installer/font-awesome'); //load only font-awesome icons
require('webpack-icons-installer/google');  //load only google material-design-icons
require('webpack-icons-installer/bootstrap');  //load only bootstrap glyphicons
```

To use icons in your HTML use the common `font-awesome`, `material-design-icons` and `bootstrap` **classes**:

```html
<html>
  <head>...</head>
  <body>
    <!-- Bootstrap glyphicons classes -->
    <i class="glyphicon glyphicon-cloud"></i>
    <i class="glyphicon glyphicon-remove"></i>
    <i class="glyphicon glyphicon-user"></i>
    <i class="glyphicon glyphicon-envelope"></i>
    <i class="glyphicon glyphicon-thumbs-up"></i>		
	
	<!-- font-awesome classes -->	
    <i class="fa fa-spinner fa-spin"></i>
    <i class="fa fa-circle-o-notch fa-spin"></i>
    <i class="fa fa-refresh fa-spin"></i>
    <i class="fa fa-cog fa-spin"></i>
    <i class="fa fa-spinner fa-pulse"></i>
    <i class="fa fa-car fa-4x fa-stack-2x"></i>		
	
	<!-- material-design-icons class and contents -->	
    <i class="material-icons">cloud</i>
    <i class="material-icons">favorite</i>
    <i class="material-icons">attachment</i>
    <i class="material-icons">computer</i>
    <i class="material-icons">traffic</i>
  </body>
</html>
```

### Links

* [Bootstrap Glyphicons docs](http://getbootstrap.com/components/#glyphicons)
* [Glyphicons](http://glyphicons.com/)
* [font-awesome docs](http://fontawesome.io/examples/)
* [material-design-icons docs](http://google.github.io/material-design-icons/)

### See also
* [styles-loader](https://www.npmjs.com/package/styles-loader)
* [webpack-jquery-ui](https://www.npmjs.com/package/webpack-jquery-ui)
* [webpack-karma-jasmine](https://www.npmjs.com/package/webpack-karma-jasmine)
* [webpack-bootstrap-installer](https://www.npmjs.com/package/webpack-bootstrap-installer)
* [webpack-babel-installer](https://www.npmjs.com/package/webpack-babel-installer)

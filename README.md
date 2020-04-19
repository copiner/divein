### webpack

所有构建工具都是基于node平台运行，模块化默认采用commomjs


### Browserslist
Browserslist config can be defined in .browserslistrc file or in browserslist section of package.json.

Browserslist is a config to share target browsers between different front-end tools.

Browserslist is used by:
```
developers
Autoprefixer
Babel
postcss-preset-env
postcss-normalize
ESLint
Stylelint
```

All tools will find target browsers automatically, when you add the following to package.json:

```
  "browserslist": [
    "defaults",
    "not IE 11",
    "not IE_Mob 11",
    "maintained node versions",
  ]
```
Or in .browserslistrc config:

```
# Browsers that we support

defaults
not IE 11
not IE_Mob 11
maintained node versions
```

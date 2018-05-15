module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": 0,
        "jsx-a11y/media-has-caption": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/label-has-for": 0,
        "no-return-assign": 0,
        "import/no-named-default": 0
    },
    "globals": {
        "document": false
      },
      "env": {
        "browser": true,
        "node": true
      }
};
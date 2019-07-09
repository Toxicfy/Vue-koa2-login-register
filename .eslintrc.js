module.exports = {
  extends: [
    'plugin:vue/recommended'
  ],
  rules: {
    "vue/singleline-html-element-content-newline": 0,
    "vue/max-attributes-per-line": ["error", {
      "singleline": 4,
      "multiline": {
        "max": 3,
        "allowFirstLine": true
      }
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
  }
}
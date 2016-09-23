module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "at-rule-empty-line-before": ["always", {
      except: ["blockless-after-same-name-blockless"],
      ignore: ["after-comment"]
    }],
    "at-rule-name-space-after": "always",
    "at-rule-no-unknown": true,
    "at-rule-no-vendor-prefix": true,
    "block-closing-brace-newline-before": "always",
    "block-no-single-line": true,
    "block-opening-brace-newline-after": "always",
    "color-named": "never",
    "declaration-block-properties-order": "alphabetical",
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-colon-space-after": "always-single-line",
    "declaration-empty-line-before": "never",
    "font-family-name-quotes": "always-where-recommended",
    "font-weight-notation": "numeric",
    "function-blacklist": ["hsla"],
    "function-comma-newline-before": "never-multi-line",
    "function-parentheses-newline-inside": "never-multi-line",
    "function-parentheses-space-inside": "never",
    "function-url-quotes": "always",
    "media-feature-name-no-vendor-prefix": true,
    "media-query-list-comma-space-after": "always",
    "no-browser-hacks": true,
    "no-duplicate-selectors": true,
    "property-no-vendor-prefix": true,
    "rule-nested-empty-line-before": [
        "always",
        {
          "ignore": ["after-comment"]
        }
      ],
    "rule-non-nested-empty-line-before": [
        "always",
        {
          "ignore": ["after-comment"]
        }
      ],
    "selector-attribute-quotes": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-pseudo-element-colon-notation": "single",
    "string-quotes": "single",
    "stylelint-disable-reason": "always-before",
    "value-keyword-case": "lower",
    "value-list-comma-space-after": "always-single-line"
  }
};

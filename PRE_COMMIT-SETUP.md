Manually setup `pre-commit` follow steps bellow:

### Setup pre-commit

1. Install packages

```shell
npm add eslint prettier lint-staged husky prettier-plugin-organize-imports -D
```

2. init pre-commit hook

```shell
npx mrm@2 lint-staged
```

3. config prettier rules (if don't have `.prettier` file in root dir, create it), example:

```json
{
	"useTabs": true,
	"printWidth": 120,
	"singleQuote": true,
	"trailingComma": "none",
	"arrowParens": "avoid",
	"singleAttributePerLine": false,
	"plugins": ["prettier-plugin-organize-imports"]
}
```

4. override `pre-commit` rules at: `$ .husky/pre-commit` to prevent console.\*

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"


red='\033[0;31m'
green='\033[0;32m'
yellow='\033[0;33m'
no_color='\033[0m'

exec 1>&2

FILES_PATTERN='\.(ts)(\..+)?$'
FORBIDDEN='console\.[dir|log|info|warn]'

#check for console. references in your code

if git diff --cached --name-only | \
    grep -E $FILES_PATTERN | \
    xargs grep --with-filename -n $FORBIDDEN | \
    grep -v '//';
then
    echo -e "\n${red} Dính console rồi, xóa đi cụ nhé.\n${no_color}"
    exit 1;
else
    npx lint-staged
fi

```

5. navigate to `package.json` file, goto end of file and override `lint-staged` property as:

```json
{
	// ...
	"lint-staged": {
		"*.{ts,js}": "eslint --fix",
		"*.{ts,html,scss,css}": "prettier --write"
	}
}
```

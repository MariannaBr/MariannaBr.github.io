# Development environment setup

* VSCode

## NodeJS install

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm install lts/erbium
node -v

## Continue development on existing project

### 1. Clone the git repo:
git clone https://github.com/MariannaBr/MariannaBr.github.io.git
cd MariannaBr.github.io

### 2. Install project dependencies
1. cd to_project_dir // for example "cd Memos/"
2. npm install

### 3. Development loop
1. "Make changes in project"
2. npm run build
3. open page in browser

## Start a new project

### 1. Set up Tailwind

Terminal:

npm init -y
npm install tailwindcss postcss postcss-cli autoprefixer
npx tailwind init

New file in main folder:

  postcss.config.js

	write: module.exports = {
		plugins: [
		   require('tailwindcss'),
		   require('autoprefixer'), ]}

New folder:
  css

New file in folder css:

  tailwind.css

	write: 	@tailwind base;
		@tailwind components;
		@tailwind utilities;

change in file package.json:

"script": "test" -> write:
	"build": "postcss css/tailwind.css -o public/build/tailwind.css"

Terminal:

npm run build

Create index.html:

shortcut: shift+1 Tab -> new html
write in head:
	<link rel="stylesheet" href="build/tailwind.css">


#### Changes in tailwind.config.js:

after changes -> npm run build -> reload editor (ctrl+shift+P -> reload)

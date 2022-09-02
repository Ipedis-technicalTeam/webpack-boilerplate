rm -rf dist && webpack --config webpack.fr.js

webpack --config webpack.en.js

cd dist

zip -r FR/fr.zip ./FR/*

zip -r EN/en.zip ./EN/*
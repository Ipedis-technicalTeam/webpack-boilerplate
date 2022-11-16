rm -rf dist && webpack --config webpack.fr.js

webpack --config webpack.en.js

cd dist

cd FR

zip -r deploy.zip ./*

cd ..

cd EN

zip -r deploy.zip ./*
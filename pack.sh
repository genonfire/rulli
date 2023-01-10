./node_modules/.bin/esbuild --bundle background.js --minify --outfile=dist/background.js
./node_modules/.bin/esbuild --bundle content.js --minify --outfile=dist/content.js
cp manifest.json icon.png dist

filename=`python3 pack.py`
cd dist
zip -r ~/Downloads/$filename *
cd ..

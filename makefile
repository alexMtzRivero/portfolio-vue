deploy:
	npm run build
	cp -r  ./dist/* ../alexMtzRivero.github.io/ 
	cd ../alexMtzRivero.github.io/
	git add .
	git commit -m "v$$(date +%Y%m%d%H%M%S)"
	git push
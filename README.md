csilinux.com

run code on 
- the server side: npm run dev
- the client side: npm start
(this is specified in the package json)

a deployment guide - https://gist.github.com/ManishPoduval/d6b5356193bcf9094b681ee8ef6aaa0e


IMPORTANT step from the guide:
* Before deployment, go to .env file and delete the first line of code with this code: "REACT_APP_SERVER_URL=http://localhost:5005". After this step, copy/paste this: REACT_APP_SERVER_URL=http://csilinux.com


EDITING GUIDE - BLOG
h4 tag - subtitle


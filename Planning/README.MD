## Description
 
Curatr is the reigns supreme as the best list creating application. One stop destination to create lists relating to published video games.
 
## Screenshots
 
![1](https://i.imgur.com/Gnpk081.png)
 
![2](https://i.imgur.com/wOaKbXG.png)
 
## Technologies Used
 
- Rawg API
- Mongo Atlas
- Heroku
- Passport.js
- Mongoose DB
- Mongoose Virtuals
- Bcrypt
 
### Installation Instructions
 
- Fork and clone front end repository on our organization page at [github.com](https://github.com/Davinki-Coders)
- Visit [Rawg](https://rawg.io/apidocs) and create an API key.
- In the front end repository create a .env.local folder.
- In the .env.local folder paste ```REACT_APP_<VARIABLE_NAME>=<PASTE_API_KEY>```into the folder.
- In the terminal run ```npm i``` to install dependencies. 
- run ```npm start``` to launch App.js in the browser
 
## User Stories
 
### Bronze
 
- As a user, I would be able to create my own lists so people can see my tastes.

- As a user, I would be able to read the home page and understand the purpose of the website and its uses.
 
- As a user, I would like to have simple navigation so that I can use the website efficiently.

- As a user, the website will be mobile friendly so that no matter the screen size, images and lists are displayed beautifully.

- As a user, I would like to be able to see some lists without logging in so that I have an idea of how the site operates and if I like it.

- As a user, I would be able to search for games to add to my lists.


### Sliver
 

- As a user, I would be able to edit my list so I can correct a mistake or add to a list.

- As a user, I would be able to sign out incase I am using a public/ shared device.

- As a user, I would be able to delete my list so that I have the option to start over.

- As a user, I would like my lists to have images and information for each game.
 
### Gold
 
- As a user, I would be able to create an account so I can interact with other users.

- As a user, I can share a list with another user that I have deemed a friend.
 
- As a user I would be able to keep some lists private so I can avoid judgment.
 
## Wire Frames
 
![1](https://media.git.generalassemb.ly/user/31365/files/e3fca700-2768-11eb-98ee-32ab0e98a25a)\
![2](https://media.git.generalassemb.ly/user/31365/files/e4953d80-2768-11eb-8293-bf7ddd1991ce)\
![3](https://media.git.generalassemb.ly/user/31365/files/e4953d80-2768-11eb-874b-60695f97f433)
 
## Major Hurdles
 
### Rodrigo Pereira
 
- A challenge Auto closing the navigation bar on a link click. Since it’s an npm package using state to manipulate it isn’t working as intended.
 

### Rashawn Gordon
 
- In my other project I wished I utilized more of the react-features / packages we installed for this project. One of my goals was to figure out the react-carousel feature. When I first attempted to do the carousel for this project I installed one that was extremely limited for sizing and scaling purposes. Rodrigo introduced another react-carousel to me and we decided to go with the nuka-carousel installment which was fun — thus I overcame a hurdle and added a beautiful feature to the project.
 
### Neely Neverson
 
- A hurdle for me was bug finding. Everytime I resolved a bug another one popped up. It was very frustrating and at times I found it hard to remain patient. I found it helpful to step away from my machine and take a breather. Doing so helped me to clear my mind after which I was able to reframe the issue and tackle it from another perspective.


 
### Jake Addis
 
- Hurdles:
- Staying within the bounds of a shared idea
- Feeling "ownership" over a particular part of an app that was a great overall team project
- Not getting lost in "stretch" features


```
useEffect(() => {
		axios.get("https://davinkibackend.herokuapp.com/api/lists").then((res) => {
			setRecentLists(
				res.data.slice(Math.max(res.data.length - 4, 0)).reverse()
			);
		});
	}, []);

```
I am proud of the dryness of the code above.
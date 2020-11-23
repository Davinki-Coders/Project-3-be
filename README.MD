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
- In the .env.local folder paste 
```
REACT_APP_<VARIABLE_NAME>=<PASTE_API_KEY>
```
into the folder.

- In the terminal run 
```
npm i
```
to install dependencies. 
- run 
``` 
npm start
```
 to launch App.js in the browser
 

## Wire Frames
 
![1](https://media.git.generalassemb.ly/user/31365/files/e3fca700-2768-11eb-98ee-32ab0e98a25a)\
![2](https://media.git.generalassemb.ly/user/31365/files/e4953d80-2768-11eb-8293-bf7ddd1991ce)\
![3](https://media.git.generalassemb.ly/user/31365/files/e4953d80-2768-11eb-874b-60695f97f433)
 
## Major Hurdles
 
### Rodrigo Pereira
 
- A challenge I have experienced is Auto closing the navigation bar on a link click. Since it’s an npm package using state to manipulate it isn’t working as intended.

- The code below represents my favorite lines of code. They are lines that I have created for error handeling.
```
<input
	className={!err ? '' : false || 'err'}
	required={required}
	type={type}
	id={id}
	value={value}
	onChange={handleChange}
/>
{!err || <p className='err-text'>*{err}</p>}
```
```
function validateUsername(e) {
		const regex = RegExp('^[a-zA-Z0-9_]*$');
		if (!e.target.value) {
			setFormState({
				...formState,
				usernameErr: 'Required',
				[e.target.id]: e.target.value,
			});
		} else if (regex.test(e.target.value) && e.target.value) {
			setFormState({
				...formState,
				usernameErr: '',
				[e.target.id]: e.target.value,
			});
		} else {
			setFormState({
				...formState,
				usernameErr: 'No special chars except underscore',
				[e.target.id]: e.target.value,
			});
		}
	}
 
 ```

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
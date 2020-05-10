# today-chrome-extension
For this first challenge, you'll build a Chrome extension and in the process learning about the key technologies of the Web (Javascript, HTML, and CSS).

## Run the starter code
First, if you don't already have a code editor, install VS Code: https://code.visualstudio.com/download

Then, download this Github repository and unzip it on your computer.

Next, let's run the starter code by:
+ opening up Chrome and going to chrome://extensions/
+ ensure you've got developer mode toggled on (top-right corner)
+ click "Load unpacked" and choose the repository folder

Now open a new tab and you should see a half-baked Chrome extension!

## Understand the code
Thought of some improvements? Great - time to open up VS Code!

Open the repository folder in VS Code and explore the three important files, namely index.html, main.css, and main.js. Don't worry about the manifest.json - it just includes a few things Chrome needs for extensions, such as version number.

At a high level, the HTML is what gets displayed, the CSS determines how it gets displayed (e.g. positioning, animation, padding), and the JS (Javascript) has the logic (e.g. deciding what happens when you click "Submit").

Knowing this, try to play around with the code and see how it changes the Chrome extension (just refresh the page or open a new tab after saving the change). E.g. try to make the buttons' font orange by changing the CSS. Change at least one simple thing in each of the files to gain an understanding of how they work.

## Implement some improvements
Did you think of some improvements before? If not, here are some ideas:
+ Hovering over the buttons does not look very nice, something is off!
+ Once I add a priority, I want the browser to remember it when I open a new tab!
+ Bonus: keep a list of the past 10 days' priorities ?

This is where the real learning starts! While working on the improvements, I suggest you:
+ View the HTML, CSS, and Javascript videos from here: https://cs50.harvard.edu/college/2020/spring/weeks/8/ (don't worry about the other content for now!)
+ Whenever you are stuck, search Google/StackOverflow (an important developer skill!) and read the documentation (for this task, w3schools is great (e.g. https://www.w3schools.com/css/css3_buttons.asp)
+ When you find a fix that works, make sure you understand *why* it works.
+ Finally, you can look at the spoilers and example code in the section below.









---- SPOILERS ----

For the button hover, I'd like the cursor to be a pointer and the font colour should change in addition to the background colour so the text doesn't disappear.

Use the browser's local storage to remember the priority even after the tab is closed.

For "inspiration", see the sample completed project here: https://github.com/miksimal/today-chrome-extension

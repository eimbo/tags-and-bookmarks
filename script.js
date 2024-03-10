
const availTagsElt = document.querySelector(".leftTagList")
const activeTagsElt = document.querySelector(".selectedTags")
const bookmarksList = document.querySelector(".bookmarksList")

var activeTags = []
var activeBookmarks = []

var tagsArr = [
	"language", "compiler", "operating system", "electronics", "reference", "my projects", "security", "code challenges", "online dev",
	"language reference", 
	"java", "python", "c++", "assembly", "php", "cloud", "github", "angular", "web dev", "crypto", "btc", "soft skills", "ui/ux", 
	"spring", "nextjs", "api", "aws", "gcp", "azure", "certification", "react", "game dev", "apis", "database", "podcasts", "news"
]

var bookmarks = [
	{
		title: "Java 17 Reference",
		url: "https://docs.oracle.com/en/java/javase/17/docs/api/index.html",
		tags: ["java", "language", "reference"]
	}, {
		title: "AWS Free Tier",
		url: "https://aws.amazon.com/free/",
		tags: ["cloud",	"aws",	"reference"]
	}, {
		title: "GitHub",
		url: "github.com",
		tags: ["github"]
	}, {
		title: "TaskPad.dev",
		url: "https://taskpad.dev",
		tags: [	"my projects", "angular","aws"]
	}, {
		title: "GCP",
		url: "https://google.com",
		tags: ["cloud", "gcp"]
	}
]

/* redraw the page based on tag arrays */
function drawTags(){
	tagsArr.sort()
	drawAvailableTags()
	drawActiveTags()
	drawBookmarks()
}

/* draw available tags from array */
function drawAvailableTags(){
	console.log("drawing available tags...")
	// draw available tags
	availTagsElt.innerHTML = '';
	for(let i = 0; i < tagsArr.length; i++){
		var newItem = document.createElement("div")
		newItem.classList.add("tag")
		newItem.innerHTML=tagsArr[i]
		newItem.addEventListener("click", tagSelect)
		availTagsElt.appendChild(newItem)
	}
}

/* draw active tags from array */
function drawActiveTags(){
	console.log("drawing active tags...")


	// draw active tags
	activeTagsElt.innerHTML = '';
	for(let i = 0; i < activeTags.length; i++){
		var newItem = document.createElement("div")
		newItem.classList.add("tag")
		newItem.innerHTML=activeTags[i]
		newItem.addEventListener("click", tagRemove)
		activeTagsElt.appendChild(newItem);
	}
}


function drawBookmarks(){
	console.log("drawing bookmarks tags...\n----------------")

	activeBookmarks = []
	bookmarksList.innerHTML = '';


	for(let i = 0; i < bookmarks.length; i++){
		currTags = bookmarks[i].tags
		var doAdd = true;
		if(activeTags.length == 0) {
			doAdd = false;
		}
		console.log(activeTags.length)
		for(let j = 0; j < activeTags.length; j++){
			if(currTags.indexOf(activeTags[j]) < 0){
				doAdd = false;
			}
		}
		if(doAdd){
			if(activeBookmarks.indexOf(bookmarks[i]) < 0 ){
				activeBookmarks.push(bookmarks[i])
			}
		} 
	}

	// if no active tags, display all bookmarks
	if(activeTags.length == 0){
		activeBookmarks = [...bookmarks]
	}

	activeBookmarks.forEach((curr) => {
		var newItem = document.createElement("div")
		newItem.innerHTML = curr.title + " <a href=" + curr.url + " target=/'blank/'>link</a>"
		bookmarksList.appendChild(newItem)
	})
}


/* add selected tag to active tags list */
function tagSelect(ev){
	var name = ev.currentTarget.innerHTML
	tagsArr = tagsArr.filter(function(t){
		return name != t 
	});
	activeTags.push(name)
	drawTags()
	
}

/* remove tag from active tags */
function tagRemove(ev){
	var name = ev.currentTarget.innerHTML
	activeTags = activeTags.filter(function(t){
		return name != t
	})
	tagsArr.push(name)
	drawTags()
}



window.onload = () => {
	drawTags()
}
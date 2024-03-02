


function allowDrop(ev) {
	ev.preventDefault();
  }
  
  function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);

  }
  
  function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
  }





const tags = [
	"language", "compiler", "operating system", "electronics", "reference", "my projects",
	"java", "python", "c++", "assembly", "php", "cloud", "github", "angular",
	"spring", "nextjs", "api", "aws", "gcp", "azure", "certification"
]

const availTags = []
const activeTags = []

const bookmarks = [
	{
		title: "Java 17 Reference",
		url: "https://docs.oracle.com/en/java/javase/17/docs/api/index.html",
		tags: ["java", "language"]
	}, {
		title: "AWS Free Tier",
		url: "https://aws.amazon.com/free/",
		tags: ["cloud",	"aws",	"reference"]
	}, {
		title: "github",
		url: "github.com",
		tags: ["github"	]
	}, {
		title: "taskpad.dev",
		url: "https://taskpad.dev",
		tags: [	"my projects", "angular","aws"]
	}
]

const tagsList = document.querySelector(".leftTagList");
function tagger(value) {
	var newItem = document.createElement("p");
	newItem.classList.add("tag");
	newItem.innerHTML=value;
	tagsList.appendChild(newItem);
}
function loader(){
	
	for(let i = 0; i < tags.length; i++){
		tagger(tags[i]);
	}
	

}


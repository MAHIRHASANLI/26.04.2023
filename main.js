let body = document.body;
body.style.backgroundColor="rgb(248, 249, 250)"
let container = document.createElement("div")
let row = document.createElement("div")
let col12 = document.createElement("div")
let col122 = document.createElement("div")
let col1 = document.createElement("div")
let col2 = document.createElement("div")
let col3 = document.createElement("div")

let col21 = document.createElement("div")
col21.style.paddingTop="20px"
let col22 = document.createElement("div")
col22.style.paddingTop="20px"
let col23 = document.createElement("div")
col23.style.paddingTop="20px"

let col31 = document.createElement("div")
col31.style.paddingTop="20px"
col31.style.textAlign="end"
col31.style.color="red"
let col32 = document.createElement("div")
col32.style.paddingTop="20px"
col32.style.textAlign="end"
col32.style.color="red"
let col33 = document.createElement("div")
col33.style.paddingTop="20px"
col33.style.textAlign="end"
col33.style.color="red"
//
container.setAttribute("class", "container")
container.style.height = "70vh"
container.style.margin = "30px auto"

row.setAttribute("class", "row")
// row.style.gap="10px"
//
col12.setAttribute("class", "col-12");
// col122.setAttribute("class","col-12");
col1.setAttribute("class", "col-4 .col-lg-3 col-md- col-sm-")
col2.setAttribute("class", "col-4 .col-lg-3 col-md- col-sm- ")
col3.setAttribute("class", "col-4 .col-lg-3 col-md- col-sm-")
//
col21.setAttribute("class", "col-4 .col-lg- col-md- col-sm-")
col22.setAttribute("class", "col-4 .col-lg- col-md- col-sm- ")
col23.setAttribute("class", "col-4 .col-lg- col-md- col-sm-")
//
col31.setAttribute("class", "col-4 .col-lg- col-md- col-sm-")
col32.setAttribute("class", "col-4 .col-lg- col-md- col-sm- ")
col33.setAttribute("class", "col-4 .col-lg- col-md- col-sm-")
// container.style.width="100%"



col12.style.height = "360px"
col12.style.backgroundColor = "yellow"
col12.style.border = "5px solid black"
col12.style.borderRadius = "5px"
col12.style.textAlign = "center"
col12.style.fontSize = "50px"
col12.textContent = "960 x 360px"

// col122.style.width="100%"
// col122.style.display="flex"
// col122.style.justifyContent="cpace-between"
// col122.style.columnGap="10px"

// col1.style.width="99%"
col1.style.height = "180px"
col1.style.backgroundColor = "yellow"
col1.style.border = "5px solid black"
col1.style.borderRadius = "5px"
col1.style.textAlign = "center"
col1.style.fontSize = "30px"
col1.textContent = "290 x 180px"

// col2.style.width="99%"
col2.style.height = "180px"
col2.style.backgroundColor = "yellow"
col2.style.border = "5px solid black"
col2.style.borderRadius = "5px"
col2.style.textAlign = "center"
col2.style.fontSize = "30px"
col2.textContent = "290 x 180px"

// col3.style.width="99%"
col3.style.height = "180px"
col3.style.backgroundColor = "yellow"
col3.style.border = "5px solid black"
col3.style.borderRadius = "5px"
col3.style.textAlign = "center"
col3.style.fontSize = "30px"
col3.textContent = "290 x 180px"

//
col21.innerHTML = "<h4>Herbert Spenser</h4> <p>Savadin en mohtesem meqsedi bilik yox, emeldir.</p>"
col22.innerHTML = "<h4>Abraham Linkoln</h4> <p>Muhakime etmeyin ki, muhakime olunmayasiz.</p>"
col23.innerHTML = "<h4>Herbert Spenser</h4> <p>Savadin en mohtesem meqsedi bilik yox, emeldir.</p>"

//
col31.innerHTML = "<p>Road More ></p>"
col32.innerHTML = "<p>Road More ></p>"
col33.innerHTML = "<p>Road More ></p>"

// col122.append(col1,col2,col3)

row.append(col12, col1, col2, col3, col21, col22, col23, col31, col32, col33)
container.appendChild(row)
body.appendChild(container)
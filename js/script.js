// question 1

const cat = {
    complain: comp("Meow!"),
};

function comp(cat) {
    console.log(cat)
}


// question 2

const heading = document.querySelector("h3");

const newHtml = "Updated heading";

heading.innerHTML = newHtml;

// question 3

heading.style.fontSize = "2em";

// question 4

heading.classList.add("subheading");

// question 5 ----------------------

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// question 6

const resultsContainer = document.querySelector(".results"); {

    const newHtml = "<p>New paragraph</p>";

    resultsContainer.innerHTML = newHtml;

    resultsContainer.style.backgroundColor = "yellow";
}

// question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];



function thiss(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

thiss(cats)


// question 8

function createCats(cats) {


    const listt = document.querySelector(".cat-container");

    console.log(listt);

    let html = "";

    for (let i = 0; i < cats.length; i++) {
        if (cats[i].age)
            html += `<div><h5>${cats[i].name}</h5><p>${cats[i].age}</p></div>`;
        else
            html += `<div><h5>${cats[i].name}</h5><p>Age unknown</p></div>`;


    }

    console.log(html);

    listt.innerHTML = html;

}
createCats(cats)


const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const root = document.getElementById("root");
    const text = "<h1> FREELANCERS </h1 >";
    root.innerHTML += text;
    const roster_create = document.createElement("ul");
    roster_create.classList.add("custom-class");



    users.forEach(user => {
        const liElement = document.createElement("li");
        liElement.textContent = `Name: ${user.name}, Age: ${user.age}, Occupation: ${user.occupation}`;
        roster_create.appendChild(liElement);
    });

    root.appendChild(roster_create);
}


main();
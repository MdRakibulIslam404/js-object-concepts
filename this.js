// console.log(this);
const kibria = {
    id: 101,
    money: 5000,
    name: "RJ Kibria",
    treatDeyArrow: () => {
        console.log(this);
    },
    treatDeyInside: function () {
        const myArrow = () => console.log(this);
        myArrow();
    },
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log("here", this);
        return this.money;
    },
};

const heroBalam = {
    id: 102,
    money: 6000,
    name: "hero balam"
};

function add() {
    console.log(this);
}
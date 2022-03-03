const kibria = {
    id: 101,
    money: 5000,
    name: "RJ Kibria",
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

const normalGolam = {
    id: 102,
    money: 6000,
    name: "normal golam"
};

kibria.treatDey(100);

const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(300);
heroTreatDey(500);
kibria.treatDey(400);

const normalTreatDey = kibria.treatDey.bind(normalGolam);
normalTreatDey(200);
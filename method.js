const student = {
    id: 101,
    money: 5000,
    name: "RJ Kibria",
    major: "Mathematics",
    isRich: false,
    subjects: ["english", "economics", "math 101", "calculus"],
    bestFriend: {
        name: "kundu",
        major: "mathematics",
    },
    takeExam: function () {
        console.log(this.name, "taking exam");
    },
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    },
};
// student.takeExam();

// const remaining = student.treatDey(900);
const remaining2 = student.treatDey(500, 50);
console.log(remaining2);
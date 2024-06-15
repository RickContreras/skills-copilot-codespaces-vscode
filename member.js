function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["JavaScript", "HTML", "CSS"],
        address: {
            street: "123 Main St",
            city: "New York"
        }
    };

    return {
        getSkills: function() {
            return member.skills;
        }
    };
}
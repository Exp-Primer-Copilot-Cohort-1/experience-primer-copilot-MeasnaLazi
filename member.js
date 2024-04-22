function skillsMember() {
  return {
    skills: ['HTML', 'CSS', 'JS'],
    addSkill: function (skill) {
      this.skills.push(skill);
    },
    removeSkill: function (skill) {
      this.skills = this.skills.filter((s) => s !== skill);
    },
  };
}
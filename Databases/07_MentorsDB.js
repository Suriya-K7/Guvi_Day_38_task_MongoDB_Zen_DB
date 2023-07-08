// selecting Database

use("Zen_class_programme");

// Creating collections for mentors

db.createCollection("mentors");

// Creating Documents for mentors

db.mentors.insertMany([
  {
    mentorId: 1,
    mentorName: "sathish",
    mentees: 55,
    mentorEmail: "sathish@gmail.com",
  },
  {
    mentorId: 2,
    mentorName: "naga",
    mentees: 40,
    mentorEmail: "naga@gmail.com",
  },
  {
    mentorId: 3,
    mentorName: "rupan",
    mentees: 10,
    mentorEmail: "rupan@gmail.com",
  },
  {
    mentorId: 4,
    mentorName: "aktar",
    mentees: 6,
    mentorEmail: "minato@gmail.com",
  },
]);

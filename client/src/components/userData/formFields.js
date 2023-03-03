const  fieldsArray =[
    {label: "first name", name: "fname" ,type:"text" , compulsory: true},
    {label: "last name", name: "lname" ,type:"text" , compulsory: true},
    {label: "gender", name: "gender" ,type:"text" , compulsory: true},
    {label: "dob", name: "dob",type:"date" ,compulsory: true},
    {label: "weight in kgs", name: "weight" ,type:"number" ,compulsory: true},
    {label: "height in centimeters", name: "height" ,type:"number",compulsory: true },
    {label: "major events in your medical history, allergies, pregnancies, surgical procedures.. (eg tonsiles, gallbladder, thyroid gland.. removed)", name: "history" ,type:"text",compulsory: true },
    {label: "known health weaknesses in the family", name: "genetics" ,type:"text" ,compulsory: false},
    {label: "do you eat gluten ? yes, no, sometimes", name: "gluten" ,type:"text" ,compulsory: false},
    {label: "dairy", name: "dairy" ,type:"text", compulsory: false },
    {label: "what are your eating habits? SAD? vegan? carnivore? intermittent fasting? fruits and vegetable?", name: "eatingHabits" ,type:"text", compulsory: false },
    {label: "dental care history: have you had root canal, implant works done? please specify which and if it is on the upper/lower jaw on the right/left side", name: "dentalHistory" ,type:"text" ,compulsory: false},
    {label: "blood type", name: "bloodType" ,type:"text",compulsory: false },
    {label: "digestion: less than 1 bowel movements a day, 2 bowel movements a day, more than 2 bowel movements a day, diarrhea, constipation, bloating, gaz, pain in the stomach, pain in the bowels", name: "digestion" ,type:"text" ,compulsory: true},
    {label: "are you currently taking any medication? supplements?", name: "medication" ,type:"text" },
    {label: "what do you expect from this reading? what is your goal? what are your concerns?", name: "comments" ,type:"text",compulsory: false }

];
export default fieldsArray;
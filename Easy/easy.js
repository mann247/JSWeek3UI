//Nia Manning
//8-3-2025
//General Inquiry Week 8


function exerciseOfTheDay(){

    const exerciseSchedule = {
        Sunday: "Running",
        Monday: "Swimming",
        Tuesday: "Dancing",
        Wednesday: "Fencing",
        Thursday: "Cycling",
        Friday: "Yoga",
        Saturday: "Boxing"
    };


    function newExercise(day){
        const exercise = exerciseSchedule[day];
        console.log(`Today's exercise: ${exercise}`);
        return exercise;
    }
    return newExercise;
}
const setExercise = exerciseOfTheDay();

window.onload = function(){
    const today = new Date().toLocaleString('en-US', {weekday : 'long'});
    const exercise = setExercise(today);
    document.getElementById("output").textContent = `Today's exercise (${today}): ${exercise}`;
};

function checkExerciseByDay(){
    const selectedDay = document.getElementById("dayOfWeek").value;
    const exercise = setExercise(selectedDay);
    document.getElementById("output").textContent = `${selectedDay}'s exercise: ${exercise}`;
}
/* setExercise("Running");
setExercise("Swimming");
setExercise("Dancing");
setExercise("Fencing"); */
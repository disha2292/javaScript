const Events = [
    {
        title: 'Workshop 2024',
        date: '2024-02-1',
        sessions: [
            {
                subtitle: 'JavaScript',
                speaker: 'Munir',
                duration: 45,
            },
        
            {
                subtitle: 'Go',
                speaker: 'Denial',
                duration: 30,
              
            }
        ]
    },
    {
        title: 'Seminar on Machine Learning',
        date: '2024-02-15',
        sessions: [
            {
                subtitle: 'Introduction to Machine Learning',
                speaker: 'Aisha',
                duration: 60,
            
            },
            {
                subtitle: 'Deep Learning Applications',
                speaker: 'Naveed',
                duration: 45,
              
            }
        ]
    },
    {
        title: 'Conference on Data Science',
        date: '2024-03-20',
        sessions: [
            {
                subtitle: 'Data Preprocessing Techniques',
                speaker: 'Sara',
                duration: 45,
         
            },
            {
                subtitle: 'Predictive Modeling',
                speaker: 'Ali',
                duration: 60,
            
            }
        ]
    }
 ];
 
 
 
 //function that returns today's events

// function todayEvent (){
//     const today = new Date().toISOString().split('T')[0];
//     return Events.filter(event => event.date === today);
// }

// console.log("events for today: " , todayEvent());


function todayEvent(){
    return new Promise((resolve,reject) =>{

const today = new Date().toISOString().split('T')[0];
    filter =  Events.filter(event => event.date === today);
     resolve(filter);
          

    })
}

todayEvent()
.then(events =>{
    console.log("events for today : " , events);
})
.catch(events => {
    console.log("error" , error);
})
 

 //function that gives title and returns total duration

//  function getTotalDurationByTitle(title) {
//     const event = Events.find(event => event.title === title);
//     if (event) {
//         return event.sessions.reduce((totalDuration, session) => totalDuration + session.duration, 0);
//     } else {
//         return 0; // Return 0 if event title is not found
//     }
// }
// console.log("Total duration of 'Workshop 2024':", getTotalDurationByTitle('Workshop 2024'));



function getTotalDurationByTitle(title){
    return new Promise ((resolve, reject)=>{
        const event = Events.find(event => event.title === title);
        if(event){
            resolve(event.sessions.reduce((totalDuration, session) => totalDuration+ session.duration,0));
        }
        else{
            reject("Event not found!");
        }
    });
}

getTotalDurationByTitle("Workshop 2024")
    .then(totalDuration => {
        console.log("Total duration of 'Workshop 2024':", totalDuration);
    })
    .catch(error => {
        console.error("Error:", error);
    });

 //function that returns events in descending order

// Events.sort((a, b) => new Date(b.date) - new Date(a.date));

// console.log("Events sorted by date (descending order):", Events);



function latestFirst(){
    return new Promise((resolve, reject)=>{
        var latest = Events.sort((a,b) => new Date(b.date) - new Date (a.date));
        resolve(latest);
    })
}

 latestFirst()
 .then(events => {
    console.log("latest first : " , events);
 })
 .catch(events =>{
    console.log("error" , error);
 })
 
 
 
 
 
 
 

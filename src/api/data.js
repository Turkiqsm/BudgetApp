const income = [
    {
        name : 1,
        salary: 3000,
        freelance: 200

    },
    {
        name : 2,
        salary: 1500,
        freelance: 2300

    },
    {
        name : 3,
        salary: 10000,
        freelance: 150

    }
];


const exp = [
    
        
    {
        name: 1,
        food: 159,
        car: 600,
        tech: 24,
    },
    {
        name: 2,
        food: 159,
        car: 1200,
        tech: 3000,
    },
    {   name: 3,
        food: 159,
        car: 0,
        tech: 15,
    }  
];





export default {
    getincome(){
        return income;
    },
    getexp(){
        return exp;
    }
}
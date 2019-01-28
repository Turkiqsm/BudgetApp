import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import data from '../api/data.js'


export default new Vuex.Store ({
    state:{
        //data
    income : [],
    exp:[],
    expt:{},
    incomet:{}
    },
    getters:{
        //computes propties 
    },
    actions:{ 
        //methods
        getincome(context){
            context.commit('setincome')
        },
        getexpt(context){
            context.commit('setexpt')
        },
        getincomet(context){
            context.commit('setincomet')
        },
        getexp(context){
            context.commit('setexp')
        },
        addincome(context,data){
            context.commit('pushincome',data)
        },
        addexp(context,data){
            context.commit('pushexp',data)
        }

    },
    mutations:{
        //changing data
        setexpt(state){
            state.expt = {
                food : 0,
                car : 0,
                tech:0
            };

            state.exp.forEach(e => {
                state.expt.food = state.expt.food + e.food;
                state.expt.car = state.expt.car + e.car;
                state.expt.tech = state.expt.tech + e.tech;
         });
        },
        setincomet(state){
            state.incomet = {
                salary : 0,
                freelance : 0,
            };

            state.income.forEach(e => {
                state.incomet.salary = state.incomet.salary + e.salary;
                state.incomet.freelance = state.incomet.freelance + e.freelance;
         });
        },
        setincome(state){
            state.income = data.getincome()

        },
        setexp(state){
            state.exp = data.getexp()

        },
        pushincome(state,data){
            var flag = 0 ;
            state.income.forEach(elm => {
                if (elm.name == data.name){
                    elm.salary = data.salary;
                    elm.freelance = data.freelance;
                    flag = 1;
                }
                
            });
            if (flag == 0){
              var  temp = {
                    name:data.name,
                    freelance: data.freelance,
                    salary: data.salary
                };
                console.log(temp);
                state.income.push(temp);
            }

        },
        pushexp(state,data){
            var flag = 0 ;
            state.exp.forEach(elm => {
                if (elm.name == data.name){
                    elm.food = data.food;
                    elm.car = data.car;
                    elm.tech = data.tech;
                    flag = 1;
                }
                
            });
            if (flag == 0){
              var  temp = {
                    name:data.name,
                    food: data.food,
                    car: data.car,
                    tech: data.tech
                };
                console.log(temp);
                state.exp.push(temp);
            }

        }
    }

})
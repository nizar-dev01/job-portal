    export default {
        namespaced: true,
        state(){
            return {
                layout: 'tst',
                users:[
                    {
                        name: 'Nizar',
                        email: 'nizar.dev01@gmail.com',
                        password: 'password',
                        type: 0,
                        id: 1
                    },
                    {
                        name: 'Jason',
                        email: 'jason@gmail.com',
                        password: 'password',
                        type: 1,
                        id: 2
                    },
                    {
                        name: 'Thomas',
                        email: 'thomas@gmail.com',
                        password: 'password',
                        type: 1,
                        id: 3
                    },
                    {
                        name: 'Melissa',
                        email: 'melissa@gmail.com',
                        password: 'password',
                        type: 1,
                        id: 4
                    }
                ],
                jobs:[
                    {
                        id: 1,
                        created_by: 1,
                        title: 'Front End Developer',
                        company: 'Imagine World Private Limited',
                        location: 'Govt Cyber Park, Clicut, Kerala',
                        description: "<p>We're looking for a front end developer for our company to help with creating a slick modern web front end. The job requires experience with the javascript ecosystem (primarily Vue.js), HTML, CSS, and related tooling. Experience with UI/UX principles and design is an added bonus. Open-source contributions and public activity (e.g. hackerrank, stack overflow, etc.) related to front-end technologies is a big bonus.</p><p>You will be in charge of developing the front end for all our products using the above-mentioned libraries. Your code should be highly performant, well documented, tested, and cleanly structured. You should mentor and help junior engineers come up to speed and over time, grow into a technical leadership role. We're working remotely now so you'll need a good net connection, familiarity with Linux, and a computer. Good written and spoken communication is vital.</p><p class=\"ql-indent-1\"><br></p><p class=\"ql-indent-1\"><strong>Call at</strong> +91 93243546574</p><p class=\"ql-indent-1\"><strong>Job Type: </strong>Full-time</p><p class=\"ql-indent-1\"><strong>Salary:</strong> ₹11,993.00 - ₹37,256.00 per month</p><p><br></p><p><strong>Schedule:</strong></p><ul><li>Monday to Friday</li></ul><p><strong>Work Remotely:</strong></p><ul><li>Temporarily due to COVID-19</li></ul>",
                        hidden: false,
                        slug: 'job-1-slug',
                        likedBy:[]
                    },
                    {
                        id: 2,
                        created_by: 1,
                        title: 'Back End Developer',
                        company: 'Imagine World Private Limited',
                        location: 'Govt Cyber Park, Clicut, Kerala',
                        description: "<p>We're looking for a front end developer for our company to help with creating a slick modern web front end. The job requires experience with the javascript ecosystem (primarily Vue.js), HTML, CSS, and related tooling. Experience with UI/UX principles and design is an added bonus. Open-source contributions and public activity (e.g. hackerrank, stack overflow, etc.) related to front-end technologies is a big bonus.</p><p>You will be in charge of developing the front end for all our products using the above-mentioned libraries. Your code should be highly performant, well documented, tested, and cleanly structured. You should mentor and help junior engineers come up to speed and over time, grow into a technical leadership role. We're working remotely now so you'll need a good net connection, familiarity with Linux, and a computer. Good written and spoken communication is vital.</p><p class=\"ql-indent-1\"><br></p><p class=\"ql-indent-1\"><strong>Call at</strong> +91 93243546574</p><p class=\"ql-indent-1\"><strong>Job Type: </strong>Full-time</p><p class=\"ql-indent-1\"><strong>Salary:</strong> ₹11,993.00 - ₹37,256.00 per month</p><p><br></p><p><strong>Schedule:</strong></p><ul><li>Monday to Friday</li></ul><p><strong>Work Remotely:</strong></p><ul><li>Temporarily due to COVID-19</li></ul>",
                        hidden: false,
                        slug: 'job-2-slug',
                        likedBy:[]
                    },
                    {
                        id: 3,
                        created_by: 2,
                        title: 'Full Stack Developer',
                        company: 'Imagine World Private Limited',
                        location: 'Govt Cyber Park, Clicut, Kerala',
                        description: "<p>We're looking for a front end developer for our company to help with creating a slick modern web front end. The job requires experience with the javascript ecosystem (primarily Vue.js), HTML, CSS, and related tooling. Experience with UI/UX principles and design is an added bonus. Open-source contributions and public activity (e.g. hackerrank, stack overflow, etc.) related to front-end technologies is a big bonus.</p><p>You will be in charge of developing the front end for all our products using the above-mentioned libraries. Your code should be highly performant, well documented, tested, and cleanly structured. You should mentor and help junior engineers come up to speed and over time, grow into a technical leadership role. We're working remotely now so you'll need a good net connection, familiarity with Linux, and a computer. Good written and spoken communication is vital.</p><p class=\"ql-indent-1\"><br></p><p class=\"ql-indent-1\"><strong>Call at</strong> +91 93243546574</p><p class=\"ql-indent-1\"><strong>Job Type: </strong>Full-time</p><p class=\"ql-indent-1\"><strong>Salary:</strong> ₹11,993.00 - ₹37,256.00 per month</p><p><br></p><p><strong>Schedule:</strong></p><ul><li>Monday to Friday</li></ul><p><strong>Work Remotely:</strong></p><ul><li>Temporarily due to COVID-19</li></ul>",
                        hidden: false,
                        slug: 'job-3-slug',
                        likedBy:[]
                    },
                ],
                loggedIn: false
            }
        },
        mutations:{
            login(s,user){
                s.loggedIn = user
            },
            logout(s){
                s.loggedIn = null
            },
            createNewJob(s,job){
                s.jobs.push(job)
            },
            removeJob(s,slug){
                let index;
                s.jobs.forEach((el,i)=>{
                    if(el.slug == slug) index = i
                })
                s.jobs.splice(index,1)
            }
        },
        actions:{
            login({commit,state},{email,password}){
                return new Promise((res,rej)=>{
                    let
                        error,
                        success =state.users.some(u=>{
                            if(u.email == email && u.password == password){
                                commit('login',u)
                                return true
                            }else if(u.email == email || u.password == password){
                                error = 1
                                return false
                            }else{
                                error = 2
                                return false
                            }
                        })
                    if(success){
                        delay(res,{
                            status: 200,
                            message: 'Successfully Logged In'
                        })    
                    }else if(error == 1) delay(rej,{
                        status: 401,
                        message: 'Wrong Credentials'
                    })
                    else if(error == 2){
                        delay(rej,{
                            status: 404,
                            message: 'No User Found'
                        })
                    }
                })
            },
            logout({commit}){ commit('logout') },
            getjobs({state}){
                return new Promise((res)=>{
                    delay(res,{
                        status:200,
                        data:state.jobs
                    })
                })
            },
            getjob({state},{slug}){
                return new Promise((res,rej)=>{
                    const job = state.jobs.find(j=>j.slug == slug)
                    if(job) delay(res,{
                        status: 200,
                        data: job
                    })
                    else delay(rej,{
                        status:404,
                        message:'No Jobs Found'
                    })
                })
            },
            updateJob({state,commit},job){
                return new Promise((res,rej)=>{
                    const target = state.jobs.find(j=>j.id==job.id)
                    if(target){
                        Object.keys(job).forEach(el=>target[el]=job[el])
                        delay(res,{
                            status: 200,
                            data: "Successfully updated"
                        })
                    }else if(job.create){
                        const
                            id = state.jobs.length + 1,
                            newJob = {
                                ...job,
                                id,
                                slug: `job-${id}-slug`,
                                hidden: false,
                                likedBy: []
                            }
                        commit('createNewJob',newJob)
                        delay(res,{
                            status: 200,
                            data: newJob
                        })
                    }
                    else delay(rej,{
                        status: 404,
                        message: 'No Jobs found'
                    })
                
                })
            },
            removeJob({commit},slug){
                return new Promise(res=>{
                    commit('removeJob',slug)
                    delay(res,{
                        status: 200,
                        data: 'Successfully deleted job'
                    })
                })
            },
            likeJob({state},{job,user}){
                const target = state.jobs.find(j=>j.slug==job)
                if(target.likedBy.includes(user)) target.likedBy.forEach((el,i)=>{
                    if(el==user) target.likedBy.splice(i,1)
                })
                else target.likedBy.push(user)
            }
        },
        getters:{
            loggedIn: s => s.loggedIn ? true : false,
            // loggedIn: ()=>true,
            userType: s => s.loggedIn ? s.loggedIn.type : null,
            // userType: () => 0,
            userId: s => s.loggedIn ? s.loggedIn.id : null
        }
    }

    function delay(fun,arg){
        setTimeout(function(){
            fun(arg)
        },500)
    }
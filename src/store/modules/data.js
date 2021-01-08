    export default {
        namespaced: true,
        state(){
            return {
                layout: 'tst',
                users:[
                    {
                        name: 'Recruiter One',
                        email: 'recruiter@job.portal',
                        password: 'password',
                        phone: '+91 768584732134',
                        address: 'Address of Recruiter 1, Example Street',
                        type: 0,
                        id: 1
                    },
                    {
                        name: 'Candidate One',
                        email: 'candidate@job.portal',
                        password: 'password',
                        phone: '+91 768584732134',
                        address: 'Address of Candidate 1, Example Street',
                        type: 1,
                        id: 2
                    },
                    {
                        name: 'Thomas',
                        email: 'thomas@job.portal',
                        password: 'password',
                        phone: '+91 768584732134',
                        address: 'Address Line 1, Example Street',
                        type: 1,
                        id: 3
                    },
                    {
                        name: 'Melissa',
                        email: 'melissa@job.portal',
                        password: 'password',
                        phone: '+91 768584732134',
                        address: 'Address Line 1, Example Street',
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
                        created_by: 1,
                        title: 'Full Stack Developer',
                        company: 'Imagine World Private Limited',
                        location: 'Govt Cyber Park, Clicut, Kerala',
                        description: "<p>We're looking for a front end developer for our company to help with creating a slick modern web front end. The job requires experience with the javascript ecosystem (primarily Vue.js), HTML, CSS, and related tooling. Experience with UI/UX principles and design is an added bonus. Open-source contributions and public activity (e.g. hackerrank, stack overflow, etc.) related to front-end technologies is a big bonus.</p><p>You will be in charge of developing the front end for all our products using the above-mentioned libraries. Your code should be highly performant, well documented, tested, and cleanly structured. You should mentor and help junior engineers come up to speed and over time, grow into a technical leadership role. We're working remotely now so you'll need a good net connection, familiarity with Linux, and a computer. Good written and spoken communication is vital.</p><p class=\"ql-indent-1\"><br></p><p class=\"ql-indent-1\"><strong>Call at</strong> +91 93243546574</p><p class=\"ql-indent-1\"><strong>Job Type: </strong>Full-time</p><p class=\"ql-indent-1\"><strong>Salary:</strong> ₹11,993.00 - ₹37,256.00 per month</p><p><br></p><p><strong>Schedule:</strong></p><ul><li>Monday to Friday</li></ul><p><strong>Work Remotely:</strong></p><ul><li>Temporarily due to COVID-19</li></ul>",
                        hidden: false,
                        slug: 'job-3-slug',
                        likedBy:[]
                    },
                ],
                applications:[
                    {
                        id: 1,
                        slug: 'app-1-slug',
                        name: 'Imaginary Candidate',
                        email: 'candidate@job.portal',
                        phone: '+91 456378213509',
                        address: 'Atlantis island',
                        resume: null,
                        cover:'<p><em>Dear Hiring Manager,</em></p> <p><em>In my five-year career as a paralegal, I have honed my legal research and writing skills, and the attorneys I’ve worked with have complimented me on my command of case law and litigation support. Spiegel Law Firm’s 20 years in practice proves that the firm has strong values and excellent attorneys, which is why I want to be a part of the Spiegel Law Firm team.</em></p> <p><em>I currently serve as a paralegal for Chandler LLC, where I work closely with the partners on a number of high-priority cases. During my time here, I implemented a new calendar system that ensures timely filing of court papers. This system has prevented missed deadlines and allowed for better organization of internal and client meetings.</em></p> <p><em>Previously, as a paralegal for the Neuerburg Law Firm, I received praise for my overall support of the legal team and my positive attitude.</em> </p> <p><em>My further qualifications include a bachelor’s degree from Rutgers University, a paralegal certificate, and training in LexisNexis, Westlaw, and Microsoft Office Suite.</em></p> <p><em>I would love the opportunity to discuss how I can contribute to your legal team. Thank you in advance for your consideration, and I look forward to hearing from you.</em></p> <p><em>Sincerely,</em><br> <em>Chase Broadstein</em><br> <em>chasebroadstein@emailcentral.com</em><br> <em>(222) 222-2222</em></p>',
                        job_slug: 'job-1-slug',
                        job_by: 1
                    }
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
                        success = state.users.some(u=>{
                            if(u.email == email && u.password == password){
                                commit('login',u)
                                u = JSON.stringify(u)
                                localStorage.setItem('auth_user',u)
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
            logout({commit}){
                commit('logout')
                localStorage.removeItem('auth_user')
            },
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
            },
            getApplications({state}){
                let apps = state.applications
                return new Promise((res,rej)=>{
                    if(apps.length){
                        apps.forEach(ap=>{
                            const job = state.jobs.find(j=>j.slug==ap.job_slug)
                            if(job) ap.job = job
                        })
                        delay(res,{
                            status: 200,
                            data: apps
                        })
                    }
                    else delay(rej,{
                        status: 404,
                        message: 'No Applications Recieved Yet!'
                    })
                })
            },
            getApp({state},slug){
                return new Promise((res,rej)=>{
                    const data = state.applications.find(a=>a.slug==slug)
                    if(data){
                        const job = state.jobs.find(j=>j.slug==data.job_slug)
                        data.job = job
                        delay(res,{
                            status: 200,
                            data
                        })
                    }
                    else delay(rej,{
                        status: 404,
                        message: 'No Application Found'
                    })
                })
            },
            applyForJob({state},app){
                return new Promise(res=>{
                    const
                        { applications , jobs } = state,
                        { job_slug } = app,
                        slug = `app-${jobs.length+1}-slug`,
                        job_by = jobs.find(j=>j.slug==job_slug).created_by
                    app.job_by = job_by
                    app.slug = slug
                    applications.push(app)
                    delay(res,{
                        status: 200
                    })
                })
            },
            S_init({dispatch}){
                const user = localStorage.getItem('auth_user')
                if(user) dispatch('login',JSON.parse(user))
            }
        },
        getters:{
            loggedIn: s => s.loggedIn ? true : false,
            // loggedIn: ()=>true,
            userType: s => s.loggedIn ? s.loggedIn.type : null,
            // userType: () => 0,
            userId: s => s.loggedIn ? s.loggedIn.id : null,
            applications: s => s.applications,
            user: s => s.loggedIn,
            users: s=> s.users
        }
    }

    function delay(fun,arg){
        setTimeout(function(){
            fun(arg)
        },500)
    }
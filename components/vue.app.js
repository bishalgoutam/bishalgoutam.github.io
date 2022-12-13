//Conatins the Vue Apps
// Create a Vue App instance and assign it to a const
const app1 = Vue.createApp(
    {   // App will have data and methods
        //Value stored in the data property is a function. We cannot change the name it has to be data only
        //data() means data is a function
        data(){
           return {
                // data returned are comma separated
                count: 0,
                imagelist: ['image-1.jpg','image-2.jpg','image-3.jpg','image-4.jpg'],
                imagecaptions: ['2001: Ready for Grade 12 Final Exams, in Bokaro Steel City, IN', '2005: Passed Engineering, in Bangalore, IN', '2010/2011: Happily working in Bangalore, IN', '2015: Enjoying snow in Dublin, OH, USA'],
                imagedisplay: '../images/aboutme/image-1.jpg',
                captiondisplay: '2001: Ready for Grade 12 Final Exams, in Bokaro Steel City, IN'
           }; //ends with semi colon
        },

        methods:{
            nextImage(event){
                this.count+= 1                
                if(this.count==4){
                    this.count = 0;
                    this.imagedisplay = '../images/aboutme/' + this.imagelist[this.count];
                    this.captiondisplay = this.imagecaptions[this.count];
                 //   console.log(this.count);
                    return this.imagedisplay;
                } 
                else{                    
                    this.imagedisplay = '../images/aboutme/' + this.imagelist[this.count];
                    this.captiondisplay = this.imagecaptions[this.count];
                 //   console.log(this.count);
                    return this.imagedisplay;
                }
            }
        }

    }
);// ends with semi colon

// Create second new Vue App instance and assign it to another const
const app2 = Vue.createApp(
    {   // App will have data and methods
        //Value stored in the data property is a function. We cannot change the name it has to be data only
        //data() means data is a function
        data(){
           return {
                // data returned are comma separated
                posts: [{
                            time: "12/10/2022 19:30",
                            comment: "Welcome to my album! Hope you will like it!",
                            author: "Bishal Goutam",
                            icon: "../images/aboutme/icon-1.jpg"
                        },
                        {
                            time: "12/10/2022 19:32",
                            comment: "Thank you for sharing! I appreciate your work.",
                            author: "Tim",
                            icon: "../images/aboutme/icon-2.jpg"
                        },
                        {
                            time: "12/10/2022 19:37",
                            comment: "This is fun! Let's meet sometime to go over.",
                            author: "Joey",
                            icon: "../images/aboutme/icon-3.jpg"
                        }],
                enteredPostValue: ''
           }; //ends with semi colon
        },

        methods:{
            addPost(){
                if(/[a-zA-Z1-9]/.test(this.enteredPostValue) && !this.posts.includes(this.enteredPostValue)){
                    let date = new Date();
                    let new_comment = this.enteredPostValue;
                    let new_date_time = date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear()+" "+date.getHours() + ":" + date.getMinutes();
                    let new_author = "Guest"
                    let new_icon = "../images/aboutme/icon-4.jpg"
                    this.posts.push({
                        time: new_date_time,
                        comment: new_comment,
                        author: new_author,
                        icon: new_icon
                    });
                }                
            },
        }

    }
);// ends with semi colon


//Mount method tell the app what area we want to control through the app
//we are connecting the Vue app to the element with id myimages
app1.mount('#myimages');

//we are connecting the Vue app to the element with id user-post
app2.mount('#user-post');






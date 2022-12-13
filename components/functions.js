document.getElementById("msgBtn").addEventListener("click", redirectMsgMe);
document.getElementById("findBtn").addEventListener("click", redirectfindmywork);

var blog = ['This is fisrt article. This is to show use of DOM manipulation using JavaScript.', 'This is second article.This is to show use of DOM manipulation using JavaScript.'];
var blogTitles = ['Web Development using HTML, CSS and JavaScript', 'Life of a developer'];
var blogExpanded =['false','false'];


var hobbies = ['This is fisrt article. This is to show use of DOM manipulation using JavaScript.', 'This is second article.This is to show use of DOM manipulation using JavaScript.'];
var hobbyTitles = ['Philately', 'Driving'];
var hobbyExpanded =['false','false'];

var travelnotes = ['This is fisrt article. This is to show use of DOM manipulation using JavaScript.', 
                    'This is second article.This is to show use of DOM manipulation using JavaScript.',
                    'This is third article.This is to show use of DOM manipulation using JavaScript.',
                    'This is fourth article.This is to show use of DOM manipulation using JavaScript.'];
var destinations = ['New York', 'Dublin', 'Miami', 'Los angeles', 'Orlando'];
var travelExpanded =['false','false', 'false','false'];
        
function redirectMsgMe(){
    if(window.location.href.includes("index.html")){
        window.location.href = "./web-pages/messageme.html";
    }
    else{
        window.location.href = "./messageme.html";
    }
    
}

function redirectfindmywork(){
    if(window.location.href.includes("index.html")){
        window.location.href = "./web-pages/findmywork.html";
    }
    else{
        window.location.href = "./findmywork.html";
    }            
}

function readfullarticle(id){
    if(blogExpanded[id-1] == 'false'){
        const new_parent_node = document.createElement("p");
        const new_child_node = document.createTextNode(blog[id-1]);
        new_parent_node.appendChild(new_child_node);
        new_parent_node.rel = 'stylesheet';     
        new_parent_node.type = 'text/css'; 
        new_parent_node.href = 'style_main.css';
        new_parent_node.className = "blog-text";
        new_parent_node.id = "blogexpanded_" + id;
        const element = document.getElementById(id);
        element.appendChild(new_parent_node); 
        blogExpanded[id-1] = 'true';
    }
    else{
        let s = "blogexpanded_" + id;
        let p = document.getElementById(id);
        let c = document.getElementById(s);
        let throwawayNode = p.removeChild(c);
        blogExpanded[id-1] = 'false';
    }         
}

//load blog Tiltles
const elements_blog = document.querySelectorAll(".blogtitle");
if(elements_blog.length>0){
    let i=0;
    elements_blog.forEach(function(element){
        element.innerHTML = blogTitles[i];
        element.className = "blog-text";
        element.style = "font-weight: bold;";
        i+=1;        
    });
}

function readfullhobby(id){
    if(hobbyExpanded[id-1] == 'false'){
        const new_parent_node = document.createElement("p");
        const new_child_node = document.createTextNode(hobbies[id-1]);
        new_parent_node.appendChild(new_child_node);
        new_parent_node.rel = 'stylesheet';     
        new_parent_node.type = 'text/css'; 
        new_parent_node.href = 'style_main.css';
        new_parent_node.className = "blog-text";
        new_parent_node.id = "hobbyexpanded_" + id;
        const element = document.getElementById(id);
        element.appendChild(new_parent_node);   
        hobbyExpanded[id-1] = 'true';
    }
    else{
        let s = "hobbyexpanded_" + id;
        let p = document.getElementById(id);
        let c = document.getElementById(s);
        let throwawayNode = p.removeChild(c);
        hobbyExpanded[id-1] = 'false';
    }
}
//load hobby Tiltles
const elements_hobby = document.querySelectorAll(".hobbytitle");
if(elements_hobby.length>0){
    let i=0;
    elements_hobby.forEach(function(element){
        element.innerHTML = hobbyTitles[i];
        element.className = "blog-text";
        element.style = "font-weight: bold;";
        i+=1;        
    });
}

function readfulltravel(id){
    if(travelExpanded[id-1] == 'false'){
        const new_parent_node = document.createElement("p");
        const new_child_node = document.createTextNode(travelnotes[id-1]);
        new_parent_node.appendChild(new_child_node);
        new_parent_node.rel = 'stylesheet';     
        new_parent_node.type = 'text/css'; 
        new_parent_node.href = 'style_main.css';
        new_parent_node.className = "blog-text";
        new_parent_node.id = "travelexpanded_" + id;
        const element = document.getElementById(id);
        element.appendChild(new_parent_node);
        travelExpanded[id-1] = 'true';
    }
    else{
        let s = "travelexpanded_" + id;
        let p = document.getElementById(id);
        let c = document.getElementById(s);
        let throwawayNode = p.removeChild(c);
        travelExpanded[id-1] = 'false';
    }
}

//load travel details
const elements_travel = document.querySelectorAll(".destinations");
if(elements_travel.length>0){
    let i=0;
    elements_travel.forEach(function(element){
        element.innerHTML = destinations[i];
        element.className = "blog-text";
        element.style = "font-weight: bold;";
        i+=1;        
    });
}


function validate_form_1() {
    //console.log("Entered");
    let x = document.forms["form_1"]["first_name"].value;
    let msg=""
    /*Validate both firstName and lastName to ensure: 
        i. a minimum length of two (2) characters 
        ii. that only alpha characters are used (A-Z and a-z)
    */
    if(x == "") {
        msg=msg + "First Name must be filled out.\n";
    }
    if(x.length<2){
        msg=msg + "First Name should be atleast 2 letters.\n";
    } 
              
    if(/[^a-zA-Z]/.test(x)){
        msg=msg + "First Name should only alphabets.\n";
    }
    x = document.forms["form_1"]["last_name"].value;
    if(x == "") {
        msg=msg + "Last Name must be filled out.\n";
    }
    if(x.length<2){
        msg=msg + "Last Name should be atleast 2 letters.\n";
    }
    if(/[^a-zA-Z]/.test(x)){
        msg=msg + "Last Name should only alphabets.\n";
    }

   
    //console.log("Completed:"+msg);
    if(msg != "") {
        alert(msg);
        //console.log("Completed:"+msg);
        return false;
    }
    else{
        alert("Message sent successfully");
        //console.log("Completed:"+msg);
        return false;
    }
    return true;
}

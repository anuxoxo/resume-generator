var printWindow, fileTag, profileImgSrc = "images/user.png";

fileTag = document.getElementById("file");
fileTag.addEventListener("change", function () {
    readImage(this);
});

var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function monthName(date) {
    let arr = date.split('-'); // 2020-01 -> ['Jan','2020'] -> Jan 2020
    arr[1] = parseInt(arr[1]);
    arr[1] = month[arr[1] - 1];

    temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;

    arr = arr.join(' ');
    return arr;
}



function generateResume() {

    let name = document.getElementById("name").value;
    let skill = [];
    let skillStr = '';
    let interestStr = '';
    let interest = [];
    let interestElement = document.getElementById("user_interests_input").value;
    let skillElement = document.getElementById("user_skills_input").value;

    skillElement = skillElement.split(" ")
    interestElement = interestElement.split(" ");

    for (let i = 0; i < skillElement.length; i++) {
        skill.push(skillElement[i]);
    }

    for (let i = 0; i < interestElement.length; i++) {
        interest.push(interestElement[i]);
    }

    // Work Experience 
    let position = document.getElementById("position").value;
    let company = document.getElementById("company").value;
    let workStartDate = document.getElementById("workStartDate").value;
    let workEndDate = document.getElementById("workEndDate").value;
    let color = document.getElementById("color").value;
    workStartDate = monthName(workStartDate);
    workEndDate = monthName(workEndDate);


    // Education 
    let degree = document.getElementById("degree").value;
    let instName = document.getElementById("institution").value;
    let edStartDate = document.getElementById("edStartDate").value;
    let edEndDate = document.getElementById("edEndDate").value;
    let GPA = document.getElementById("GPA").value;
    edStartDate = monthName(edStartDate);
    edEndDate = monthName(edEndDate);

    if (GPA > 10 || GPA < 0) {
        alert("Re-Enter The GPA");
        return false;
    }


    // Logic to extract skills from text area to separate fields
    for (let i = 0; i < skill.length; i++) {
        skillStr += `<p class="skillsItem bg${color}">${skill[i]}</p>`;
    }

    for (let i = 0; i < interest.length; i++) {
        interestStr += `<p class="skillsItem bg${color}">${interest[i]}</p>`;
    }

    printWindow = window.open('');
    printWindow.document.write(`
   <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="images/logo.png" type="image/png">
        <link rel="stylesheet" href="css/resume.css">
        <title>${name}'s Resume</title>
    </head>

    <body>
        <div id="download">
        <button onclick="print()">Click here to Download</button>
        </div>
        <section id="intro">
            <div class="intro__flex">
                <div class="profile">
                    <img src="${profileImgSrc}" alt="profile Img" class="profileImg">
                </div>
                <div class="intro-content">
                    <h2 class="name">${name}</h2>
                    <h1 class="prof__title ${color}">Professional Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae saepe at, id corrupti
                        facilis
                        ea quos suscipit iusto, atque praesentium mollitia debitis assumenda ullam, dignissimos aut
                        perspiciatis
                        soluta skilloribus.</p>
                </div>
            </div>
            <div class="intro__contact">
                <p>
                    <i>
                        <img src="images/your-location.png" alt="" class="icon">
                    </i>
                    Lorem ipsum dolor sit amet.
                </p>
                <p>
                    <a href="tel:787787777">
                        <i>
                            <img src="images/telephone.png" alt="" class="icon">
                        </i>
                        7777778888
                    </a>
                </p>
                <p>
                    <a href="email:ab@12.com">
                        <i>
                            <img src="images/gmail.png" alt="" class="icon">
                        </i>
                        ab@12.com
                    </a>
                </p>

            </div>
        </section>

        <main>
            <div class="left">
                <section id="education">
                    <h1 class="${color}">Education</h1>
                    <h3>${degree}</h3>
                    <h4>${instName}</h4>
                        <p>${edStartDate} - ${edEndDate}</p>
                        <p>${GPA} CGPA</p>
                </section>

                <section id="work">
                    <h1 class="${color}">Work Experience</h1>
                    <h3>${position}</h3>
                    <h4>${company}</h4>
                        <p>${workStartDate} - ${workEndDate}</p>
                </section>
            </div>
            <div class="right">
                <section id="skills">
                    <h1 class="${color}">Skills</h1>
                    <div class="skillSet">
                        ${skillStr}

                    </div>
                </section>

                <section id="interest">
                    <h1 class="${color}">Interests</h1>
                    <div class="interestSet">
                        ${interestStr}
                    </div>

                </section>
            </div>
        </main>


    </body>

    </html>`);

    printWindow.document.close();
}

function print() {
    printWindow.print();

    
}


function readImage(input) {
    var reader;

    if (input.files && input.files[0]) {
        reader = new FileReader(); // To read image

        reader.onload = function (e) {
            profileImgSrc = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}
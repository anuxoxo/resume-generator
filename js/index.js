var printWindow, fileTag, profileImgSrc = "images/user.png";

fileTag = document.getElementById("file");
fileTag.addEventListener("change", function () {
    readImage(this);
});

function generateResume() {

    let name = "Guest";
    let skill = ['HTML', 'CSS', 'JAVA', 'C', 'C++'];
    let skillStr = '';

    let position = document.getElementById("position").value;
    let company = document.getElementById("company").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let color = document.getElementById("color").value;

    // Logic to extract skills from text area to separate fields
    for (let i = 0; i < skill.length; i++) {

        skillStr += `<p class="skillsItem bg${color}">${skill[i]}</p>`;
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
        <button onclick="print()">Download</button>
    </div>
    <section id="intro">
        <div class="intro__flex">
            <div class="profile">
                <img src="${profileImgSrc}" alt="profile Img" class="profileImg">
            </div>
            <div class="intro-content">
                <h2 class="name ">Name</h2>
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
                <h3>Degree</h3>
                <h4>Institution name</h5>
                    <p>Start date - End date</p>
                    <p>Score</p>
            </section>

            <section id="work">
                <h1 class="${color}">Work Experience</h1>
                <h3>${position}</h3>
                <h4>${company}</h5>
                    <p><b>${startDate} </b> to <b>${endDate}</b></p>
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
                    <p class="interestItem bg${color}">Skills</p>
                    <p class="interestItem bg${color}">Skills</p>
                    <p class="interestItem bg${color}">Skills</p>
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
        reader = new FileReader();

        reader.onload = function (e) {
            profileImgSrc = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}
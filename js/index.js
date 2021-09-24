// $("#btnPrint").click(function () {
//     var divContents = $("#dvContainer").html();
//     let name = document.getElementById("name").value;
//     console.log(name);
//     let univ = $("univ").value;
//     console.log(univ);

//     var fileTag = document.getElementById("file"),
//         preview = document.getElementById("preview");

//     fileTag.addEventListener("change", function () {
//         changeImage(this);
//     });

//     function changeImage(input) {
//         var reader;

//         if (input.files && input.files[0]) {
//             reader = new FileReader();

//             reader.onload = function (e) {
//                 preview.setAttribute('src', e.target.result);
//             }

//             reader.readAsDataURL(input.files[0]);
//         }
//     }

//     var printWindow = window.open('', '', 'height=400,width=800');
//     printWindow.document.write('<html><head><title>DIV Contents</title>');
//     printWindow.document.write('</head><body>');
//     printWindow.document.write(divContents);
//     printWindow.document.write(name);
//     printWindow.document.write(univ);
//     printWindow.document.write('</body></html>');
//     printWindow.document.close();
//     printWindow.print();
// });
var printWindow;
function generateResume() {

    // let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let name = "Anu";

    let position = document.getElementById("position").value;
    let company = document.getElementById("company").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let color = document.getElementById("color").value;

    printWindow = window.open('', '', 'height=400,width=800');
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
                <img src=" images/user.png" alt="profile Img" class="profileImg">
            </div>
            <div class="intro-content">
                <h2 class="name ">Name</h2>
                <h1 class="prof__title ${color}">Professional Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae saepe at, id corrupti
                    facilis
                    ea quos suscipit iusto, atque praesentium mollitia debitis assumenda ullam, dignissimos aut
                    perspiciatis
                    soluta temporibus.</p>
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
                    <p class="skillsItem bg${color}">Skills</p>
                    <p class="skillsItem bg${color}">Skills</p>
                    <p class="skillsItem bg${color}">Skills</p>
                    <p class="skillsItem bg${color}">Skills</p>
                    <p class="skillsItem bg${color}">Skills</p>
                    <p class="skillsItem bg${color}">Skills</p>
                    <p class="skillsItem bg${color}">Skills</p>

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
}

function print() {
    printWindow.document.close();
    printWindow.print();
}


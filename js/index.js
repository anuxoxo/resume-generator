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

function generateResume() {
    let position = document.getElementById("position").value;
    let company = document.getElementById("company").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;

    var printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write('<html><head><title>DIV Contents</title>');
    printWindow.document.write('</head><body>');
    // printWindow.document.write(divContents);
    printWindow.document.write(position);
    printWindow.document.write(company);
    printWindow.document.write(startDate);
    printWindow.document.write(endDate);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
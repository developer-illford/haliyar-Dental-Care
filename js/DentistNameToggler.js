var doctors = [
    { doctorName: "Dr.Thasleema Nasrien BDS", designation: "Associate Dental surgeon" },
    { doctorName: "Dr.Shanavas BDS", designation: "Associate Dental surgeon" },
    { doctorName: "Dr.Raneesh P BDS", designation: "Principal dental surgeon" },
    { doctorName: "Dr.Archana Balan BDS", designation: "Principal Dental surgeon" },
    { doctorName: "Dr Jabir kottammal MDS", designation: "Consultant oral and maxillofacial surgeon" },
    { doctorName: "Dr Lubna M MDS", designation: "Consultant Pedodontist MDS" },
    { doctorName: "Dr . Muhammed Anver MDS", designation: "Consultant Orthodontist" },
    { doctorName: "Dr.Muhammed Aslif MDS", designation: "Consultant Implantologist" },
    { doctorName: "Dr Ziyara Salim MDS", designation: "Consultant Endodontist" }
];

var index = 0;
var doctorNameElement = document.getElementById("doctorName");
var doctorDesignationElement = document.getElementById("doctorDesignation");

function changeDoctor() {
    doctorNameElement.style.opacity = 0;
    doctorDesignationElement.style.opacity = 0;

    setTimeout(function () {
        doctorNameElement.textContent = doctors[index].doctorName;
        doctorDesignationElement.textContent = doctors[index].designation;

        doctorNameElement.style.opacity = 1;
        doctorDesignationElement.style.opacity = 1;

        index = (index + 1) % doctors.length;
    }, 500); // Delay to let the opacity animation finish
}

setInterval(changeDoctor, 2000); // Change every 2 seconds

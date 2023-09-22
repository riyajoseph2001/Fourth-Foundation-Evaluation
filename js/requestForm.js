//document addEventListener
document.addEventListener('DOMContentLoaded', function () {
    //Content
    const form = document.getElementById('frmRequest');
    const empId = document.getElementById('txtempId');
    const empName = document.getElementById('txtempName');
    const project = document.getElementById('txtproject');
    const cause = document.getElementById('txtcause');
    const source = document.getElementById('txtsource');
    const destination = document.getElementById('txtdestination');
    const fromDate = document.getElementById('dteFromDate');
    const noOfDays = document.getElementById('numNoOfDays');
    const modeOfTravel = document.getElementById('txtmodeOfTravel');

    //Error message
    const empIdError = document.getElementById('empIdError');
    const empNameError = document.getElementById('empNameError');
    const projectError = document.getElementById('projectError');
    const causeError = document.getElementById('causeError');
    const sourceError = document.getElementById('sourceError');
    const destinationError = document.getElementById('destinationError');
    const fromDateError = document.getElementById('fromDateError');
    const noOfDaysError = document.getElementById('noOfDaysError');
    const modeOfTravelError = document.getElementById('modeOfTravelError');
    //form addEventListener
    form.addEventListener('submit', function(event) {
        //Prevent form submission
        event.preventDefault();
        //Validation - empId
        if (!empId.value.trim()) {

            empIdError.textContent = 'Empid required';
        } else {
            empIdError.textContent = '';
        }
        //Validation - empId
        if (!empName.value.trim()) {

            empNameError.textContent = 'EmpName required';
        } else {
            empNameError.textContent = '';
        }
        //Validation - project
        if (!project.value.trim()) {

            projectError.textContent = 'Project required';
        } else {
            projectError.textContent = '';
        }
        //Validation - cause
        if (!cause.value.trim()) {

            causeError.textContent = 'cause required';
        } else {
            causeError.textContent = '';
        }
        //Validation - source
        if (!source.value.trim()) {

            sourceError.textContent = 'source required';
        } else {
            sourceError.textContent = '';
        }
        //Validation - destination
        if (!destination.value.trim()) {

            destinationError.textContent = 'destination required';
        } else {
            destinationError.textContent = '';
        }
        //Validation - fromDate
        if (!fromDate.value.trim()) {

            fromDateError.textContent = 'fromDate required';
        } else {
            fromDateError.textContent = '';
        }
        //Validation - noOfDays
        if (!noOfDays.value.trim()) {

            noOfDaysError.textContent = 'noOfDays required';
        } else {
            noOfDaysError.textContent = '';
        }
        //Validation - modeOfTravel
        if (!modeOfTravel.value.trim()) {

            modeOfTravelError.textContent = 'modeOfTravel required';
        } else {
            modeOfTravelError.textContent = '';
        }

    });
    
});
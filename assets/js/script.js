// document.getElementById('CF1').addEventListener('click', function() {
    // $('#CFM1').modal('show');
// });
// document.getElementById('CF2').addEventListener('click', function() {
    // $('#CFM2').modal('show');
// });
// Add click event listener to all elements starting with 'CF'
document.querySelectorAll('[id^="CF"]').forEach(element => {
    element.addEventListener('click', function() {
        const modalNumber = this.id.replace('CF', '');
        $(`#CFM${modalNumber}`).modal('show');
    });
});
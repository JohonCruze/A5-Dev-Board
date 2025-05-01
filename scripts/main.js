const buttons = document.querySelectorAll('.btn-completed');
const taskAssignedButton = document.getElementById('task-assigned');
const completedTask = document.getElementById('completed-task');
const activityLogDiv = document.getElementById('activity-log-div');

for (const button of buttons) {
    button.addEventListener('click', function () {
        // Disable button
        button.disabled = true;
        button.style.backgroundColor = '#ced6fd';
        button.style.cursor = 'not-allowed';

        
    });
}

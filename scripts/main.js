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

        // Decrement task numbers

        let decrementTaskNumber = parseInt(taskAssignedButton.innerText);
        decrementTaskNumber = decrementTaskNumber - 1;

        if (decrementTaskNumber < 10) {
            taskAssignedButton.innerText = '0' + decrementTaskNumber;
        } else {
            taskAssignedButton.innerText = decrementTaskNumber;
        }

        // Increment task numbers
        let incrementTaskNumber = parseInt(completedTask.innerText);
        completedTask.innerText = incrementTaskNumber + 1;

        // Get heading
        const card = button.parentElement.parentElement.parentElement;
        const heading = card.querySelector('h2');

        // Current Time
        const time = new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });

        // Create activity log
        const createDiv = document.createElement('div');
        createDiv.className =
            'p-5 m-5 bg-[#F4F7FF] rounded text-base font-normal';
        createDiv.innerText = `You have Complete The Task ${heading.innerText} at ${time}`;

        activityLogDiv.appendChild(createDiv);
    });
}

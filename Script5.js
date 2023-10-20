const studentsData = {
    group1: ["Студент 1", "Студент 2", "Студент 3"],
    group2: ["Студент 4", "Студент 5", "Студент 6"]
};

function loadStudents() {
    const group = document.getElementById('group').value;
    const studentsList = document.getElementById('students');
    studentsList.innerHTML = '';

    studentsData[group].forEach(student => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'present';
        checkbox.value = student;
        const studentName = document.createTextNode(student);

        label.appendChild(studentName);  
        label.appendChild(checkbox);
        
        studentsList.appendChild(label);
        studentsList.appendChild(document.createElement('br'));
    });

    document.getElementById('studentsList').style.display = 'block';
}

function saveAttendance() {
    const group = document.getElementById('group').value;
    const pair = document.getElementById('pair').value;
    const topic = document.getElementById('topic').value;
    const presentStudents = Array.from(document.querySelectorAll('.present:checked')).map(checkbox => checkbox.value);

    const attendanceData = {
        topic: topic,
        students: presentStudents
    };

    const attendanceList = document.getElementById('attendanceList');
    const listItem = document.createElement('li');
    listItem.textContent = `Група: ${group}, Пара: ${pair}, Тема: ${attendanceData.topic}, Присутні: ${attendanceData.students.join(', ')}`;
    attendanceList.appendChild(listItem);
    alert('Присутніх збережено!');
}
const resumeButton = document.getElementById('resume-button')

resumeButton.addEventListener('mouseover', () => {
    fetch('files/resume.pdf')
    .then(res => res.blob())
    .then(pdf => {
        document.getElementById('resume-button').href = URL.createObjectURL(pdf)
    })
})
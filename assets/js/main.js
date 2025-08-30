
function updateProfileInfo(profileData) {
  const photo = document.getElementById('profile.photo')
  photo.src = profileData.photo
  photo.alt = profileData.name

  const name = document.getElementById('profile.name')
  name.innerText = profileData.name

  const job = document.getElementById('profile.job')
  job.innerText = profileData.job

  const location = document.getElementById('profile.location')
  location.innerText = profileData.location

  const phone = document.getElementById('profile.phone')
  phone.innerText = profileData.phoneText
  phone.href = `https://wa.me/${profileData.phone}`

  const email = document.getElementById('profile.email')
  email.innerText = profileData.email
  email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById('profile.skills.softSkills')
  softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById('profile.skills.hardSkills')
  hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
  const languages = document.getElementById('profile.languages')
  languages.innerHTML = profileData.languages.map(language => `
    <li>
    <svg class="dio-languages" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18.2696" height="3.53518" rx="1.76759"
              transform="matrix(0.68265 -0.730745 0.662011 0.749494 5.18848 13.3506)" fill="currentColor" />
            <rect width="10.6331" height="3.54922" rx="1.77461"
              transform="matrix(0.712617 0.701553 -0.630515 0.776177 2.23828 5.71191)" fill="currentColor" />
          </svg>
    ${language}
    </li>`).join('')
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById('profile.portfolio')
  portfolio.innerHTML = profileData.portfolio.map(project => {
    return `
            <li>
            <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">
                <i class="bi bi-github"></i>
                ${project.url}</a>
            </li>
        `
  }).join('')
}

function updateProfessionalExperience(profileData) {
  const professionalExperience = document.getElementById('profile.professionalExperience')
  professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
    return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">
                <i class="bi bi-calendar2-week-fill"></i>
                  ${experience.period}
                </p>
                <p>${experience.description}</p>
            </li>
        `
  }).join('')
}

(async () => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData)
  updateSoftSkills(profileData)
  updateHardSkills(profileData)
  updateLanguages(profileData)
  updatePortfolio(profileData)
  updateProfessionalExperience(profileData)
})()

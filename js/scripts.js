function showHome() {
    document.querySelector('#home_content').classList.remove('hidden');
    document.querySelector('#utah_content').classList.add('hidden');
    document.querySelector('#contact_content').classList.add('hidden');
    document.querySelector('#video_content').classList.add('hidden');
}

function showUtah() {
    document.querySelector('#home_content').classList.add('hidden');
    document.querySelector('#utah_content').classList.remove('hidden');
    document.querySelector('#contact_content').classList.add('hidden');
    document.querySelector('#video_content').classList.add('hidden');
}

function showContact() {
    document.querySelector('#home_content').classList.add('hidden');
    document.querySelector('#utah_content').classList.add('hidden');
    document.querySelector('#contact_content').classList.remove('hidden');
    document.querySelector('#video_content').classList.add('hidden');
}

function showVideo() {
    document.querySelector('#home_content').classList.add('hidden');
    document.querySelector('#utah_content').classList.add('hidden');
    document.querySelector('#contact_content').classList.add('hidden');
    document.querySelector('#video_content').classList.remove('hidden');
}

function enableDarkMode() {
    var link = document.createAttribute('link');
    link.rel = 'stylesheet';
    link.href = '/css/dark_mode.css';
    document.head.appendChild(link);
}
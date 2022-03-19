function showHome() {
    document.querySelector('#home_content').classList.remove('hidden');
    document.querySelector('#utah_content').classList.add('hidden');
    document.querySelector('#contact_content').classList.add('hidden');
}

function showUtah() {
    document.querySelector('#home_content').classList.add('hidden');
    document.querySelector('#utah_content').classList.remove('hidden');
    document.querySelector('#contact_content').classList.add('hidden');
}

function showContact() {
    document.querySelector('#home_content').classList.add('hidden');
    document.querySelector('#utah_content').classList.add('hidden');
    document.querySelector('#contact_content').classList.remove('hidden');
}
const backendBaseURL = "http://localhost:9000/"
// backendBaseURL = "http://localhost:9000/toys?sound_id={id}"
// backendBaseURL = "http://localhost:9000/toys"

const queryString = window.location.search
const queryParams = new URLSearchParams( queryString )
const soundID = queryParams.get('soundID') ? queryParams.get('soundID') : ''
console.log(soundID)

fetch(backendBaseURL + 'toys' + `?sound_id=${soundID}`)
    .then( response => response.json())
    .then( toys =>  toys.forEach(toy => {
        const $listToySection = document.querySelector('#list-toy-section')
        //create
        const $toyName =  document.createElement('h3')

        //manipulate
        $toyName.innerHTML = `<a href="/showToy.html?id=${toy.id}" >${toy.name}</a>`

        //append
        $listToySection.append($toyName)
    }))

fetch( backendBaseURL + 'sounds' )
    .then(response => response.json())
    .then( sounds => {
        const $soundOptionsForm = document.querySelector('#sound-options-form')
        const $soundOptionsFilter = document.querySelector('#sound-options-filter')
        sounds.forEach(sound => {

            //create
            const $soundOptionForm = document.createElement('option')
            const $soundOptionFilter = document.createElement('option')
            
            //manipulate
            $soundOptionForm.value = sound.id
            $soundOptionForm.innerText = sound.name
            $soundOptionFilter.value = sound.id
            $soundOptionFilter.innerText = sound.name

            //append
            $soundOptionsForm.append($soundOptionForm)
            $soundOptionsFilter.append($soundOptionFilter)


        })
    })


const logAPet = (petName, petBreed) => {
    return {
        name: petName,
        breed: petBreed
    }
}

const pet = logAPet("Kaiser", "Dutch Shepherd")
document.querySelector(".pets").innerHTML=`
    <section>
        Pet Name: ${pet.name}<br>
        Pet Breed: ${pet.breed}<br>
    </section>
`

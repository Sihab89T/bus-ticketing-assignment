// function handleClick(){
//     console.log("selected")
// }

function setBgC() {

}



const allTicket = document.getElementsByClassName("tickets")


let count = 8;
let addedSeat = 0;

for (const ticket of allTicket) {
    ticket.addEventListener("click", function (e) {
        count = count - 1;


        // document.getElementById('tickets-left').innerText = count ;
        addedSeat = addedSeat + 1;
        // document.getElementById('seat-counts').innerText = addedSeat;

        setInnerText("tickets-left", count)
        setInnerText("seat-counts", addedSeat)



        const insertedSeatName = document.getElementById('insert-text');
        const seatName = document.createElement("th");
    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function next() {
    const homeSection = document.getElementById("main-page");
    homeSection.classList.add('hidden');

    const finalPage = document.getElementById('success');
    finalPage.classList.remove('hidden');
    
}


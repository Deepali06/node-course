/*const square = function(x){
    return x * x;
}*/

/*const square = (x) => {
    return x*x;
}

console.log(square(3));*/

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList(){
      //  const that = this

        console.log('Guest List for' + this.name);

     //   this.guestList.forEach(function(guest){
        this.guestList.forEach((guest) => {
        //   console.log(guest + 'is attending' + that.name);
        console.log(guest + 'is attending' + this.name);
        })
    }
}

event.printGuestList();
